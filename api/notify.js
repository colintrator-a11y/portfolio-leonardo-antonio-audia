/**
 * Visit notifier: posts a Telegram message when someone opens the portfolio.
 *
 * This runs as a Vercel serverless function so the bot token stays a secret.
 * It must never move into the front end - anything the browser holds is
 * readable by every visitor, and a leaked bot token lets a stranger post to
 * the chat, read everything sent to the bot, and re-point it with setWebhook.
 *
 * Environment variables (Vercel → Settings → Environment Variables):
 *   TELEGRAM_BOT_TOKEN  required   from BotFather
 *   TELEGRAM_CHAT_ID    required   the chat to notify; see README
 *   SITE_NAME           optional   label for this portfolio, e.g. "Leonardo"
 *   ALLOWED_ORIGINS     optional   comma-separated; defaults to this host
 *   PROXYCHECK_KEY      optional   proxycheck.io key for HTTPS VPN lookups
 */

const LOOKUP_TIMEOUT_MS = 2500
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 4

/* Best-effort throttle. Serverless instances are recycled, so this trims
   accidental floods rather than guaranteeing a hard ceiling. */
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_LIMIT_WINDOW_MS)) hits.delete(key)
    }
  }
  return recent.length > RATE_LIMIT_MAX
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length) return forwarded.split(',')[0].trim()
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || ''
}

/** Regional-indicator flag for a two-letter country code. */
function flag(code) {
  if (!code || code.length !== 2) return ''
  return String.fromCodePoint(...[...code.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65))
}

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Country, network and whether the address looks like a VPN, proxy or
 * datacentre. proxycheck.io is used when a key is configured because it speaks
 * HTTPS; ip-api.com is the keyless fallback and is HTTP-only on its free tier.
 * Either failing is not fatal - the notification still goes out.
 */
async function lookup(ip) {
  if (!ip || ip === '::1' || ip === '127.0.0.1') return {}

  if (process.env.PROXYCHECK_KEY) {
    const url = `https://proxycheck.io/v2/${encodeURIComponent(ip)}?key=${encodeURIComponent(
      process.env.PROXYCHECK_KEY
    )}&vpn=3&asn=1`
    const data = await fetchJson(url, LOOKUP_TIMEOUT_MS)
    const entry = data?.[ip]
    if (entry) {
      return {
        country: entry.country,
        countryCode: entry.isocode,
        city: entry.city,
        isp: entry.provider,
        vpn: entry.proxy === 'yes',
        vpnKind: entry.type,
      }
    }
  }

  const fields = 'status,country,countryCode,regionName,city,isp,org,proxy,hosting,mobile'
  const data = await fetchJson(`http://ip-api.com/json/${encodeURIComponent(ip)}?fields=${fields}`, LOOKUP_TIMEOUT_MS)
  if (data?.status !== 'success') return {}
  return {
    country: data.country,
    countryCode: data.countryCode,
    region: data.regionName,
    city: data.city,
    isp: data.isp || data.org,
    vpn: Boolean(data.proxy),
    hosting: Boolean(data.hosting),
    mobile: Boolean(data.mobile),
  }
}

function buildMessage({ site, ip, geo, vercelCountry, body }) {
  const code = geo.countryCode || vercelCountry || ''
  const countryLabel = geo.country
    ? `${geo.country}${code ? ` (${code})` : ''}`
    : code || 'Unknown'

  const where = [geo.city, geo.region].filter(Boolean).join(', ')

  let network = geo.isp || 'Unknown network'
  const marks = []
  if (geo.vpn) marks.push(geo.vpnKind ? `VPN/proxy — ${geo.vpnKind}` : 'VPN/proxy')
  if (geo.hosting && !geo.vpn) marks.push('datacentre / hosting')
  if (geo.mobile) marks.push('mobile network')
  if (marks.length) network += ` — ⚠️ ${marks.join(', ')}`
  else if (geo.isp) network += ' — no VPN detected'

  const lines = [
    '🔔 <b>Portfolio visit</b>',
    '',
    `<b>Portfolio</b>  ${escapeHtml(site)}`,
    `<b>Country</b>   ${escapeHtml(countryLabel)} ${flag(code)}`.trimEnd(),
    `<b>IP</b>        <code>${escapeHtml(ip || 'unknown')}</code>`,
    `<b>Network</b>   ${escapeHtml(network)}`,
  ]
  if (where) lines.push(`<b>City</b>      ${escapeHtml(where)}`)
  if (body.path) lines.push(`<b>Page</b>      ${escapeHtml(body.path)}`)
  if (body.referrer) lines.push(`<b>From</b>      ${escapeHtml(body.referrer)}`)
  if (body.language) lines.push(`<b>Language</b>  ${escapeHtml(body.language)}`)
  lines.push(`<b>Time</b>      ${new Date().toISOString().replace('T', ' ').slice(0, 19)} UTC`)

  return lines.join('\n')
}

export default async function handler(req, res) {
  const origin = req.headers.origin || ''
  const allowed = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean)
  const sameHost = req.headers.host ? [`https://${req.headers.host}`, `http://${req.headers.host}`] : []
  const allowList = allowed.length ? allowed : sameHost
  const originOk = !origin || allowList.includes(origin)

  if (originOk && origin) res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Vary', 'Origin')

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }
  // GET is a health check: open /api/notify in a browser to confirm the
  // function deployed and the environment variables landed. It reports only
  // whether each value is present, never the value itself.
  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      deployed: true,
      configured: {
        TELEGRAM_BOT_TOKEN: Boolean(process.env.TELEGRAM_BOT_TOKEN),
        TELEGRAM_CHAT_ID: Boolean(process.env.TELEGRAM_CHAT_ID),
        SITE_NAME: process.env.SITE_NAME || '(unset, will fall back to host)',
      },
      allowedOrigins: allowList,
    })
  }

  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  if (!originOk) return res.status(403).json({ ok: false, error: 'origin_not_allowed' })

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return res.status(500).json({ ok: false, error: 'not_configured' })

  const ip = clientIp(req)
  if (rateLimited(ip)) return res.status(429).json({ ok: false, error: 'rate_limited' })

  const body = typeof req.body === 'object' && req.body ? req.body : {}
  const site = process.env.SITE_NAME || req.headers.host || 'Portfolio'
  const geo = await lookup(ip)

  const text = buildMessage({
    site,
    ip,
    geo,
    vercelCountry: req.headers['x-vercel-ip-country'],
    body: {
      path: typeof body.path === 'string' ? body.path.slice(0, 200) : '',
      referrer: typeof body.referrer === 'string' ? body.referrer.slice(0, 200) : '',
      language: typeof body.language === 'string' ? body.language.slice(0, 40) : '',
    },
  })

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true }),
    })
    if (!tg.ok) {
      const detail = await tg.text()
      console.error('telegram sendMessage failed', tg.status, detail)
      return res.status(502).json({ ok: false, error: 'telegram_failed' })
    }
  } catch (err) {
    console.error('telegram request threw', err)
    return res.status(502).json({ ok: false, error: 'telegram_unreachable' })
  }

  return res.status(200).json({ ok: true })
}
