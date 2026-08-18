/**
 * Inline-SVG scenes for entries with no published screenshot: the Pipefy
 * engagement, and the capability examples. Delivered client projects use their
 * real screenshots instead.
 *
 * The Shopify, mobile, PHP and WordPress scenes live in `ProjectScenes.jsx`
 * and are merged into the scene map below; both files share one palette so the
 * whole set reads as the same product family.
 */

import { extraScenes } from './ProjectScenes'
import { moreScenes } from './ProjectScenesMore'
import { P, Photo } from './visualPhotos'
import { C, H, W } from './visualTokens'

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-brand`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={C.accent} />
        <stop offset="100%" stopColor={C.sky} />
      </linearGradient>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fbfcfe" />
      </linearGradient>
    </defs>
  )
}

function BrowserChrome({ id, label }) {
  return (
    <g>
      <rect x="0" y="0" width={W} height={H} rx="14" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="13.5" fill="none" stroke={C.border} />
      <path d={`M14 0 H${W - 14} A14 14 0 0 1 ${W} 14 V44 H0 V14 A14 14 0 0 1 14 0 Z`} fill={C.chrome} />
      <line x1="0" y1="44" x2={W} y2="44" stroke={C.border} />
      <circle cx="22" cy="22" r="4.5" fill="#e5e8ee" />
      <circle cx="38" cy="22" r="4.5" fill="#e5e8ee" />
      <circle cx="54" cy="22" r="4.5" fill="#e5e8ee" />
      <rect x="76" y="12" width="230" height="20" rx="10" fill={C.bg} stroke={C.border} />
      <text x="90" y="26" fill={C.muted} fontFamily="monospace" fontSize="10">
        {label}
      </text>
    </g>
  )
}

/* The delivered pipe as it appears inside Pipefy: phases, cards and the
   automation that moves them. Brand blue sampled from pipefy.com. */
function Pipefy() {
  const BLUE = '#0054f0'
  const INK = '#0a1020'
  const BOARD = '#f4f6f9'
  const CARD_BORDER = '#e3e7ef'

  const t = (x, y, text, fill, size = 9, weight = '400', anchor = 'start') => (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      textAnchor={anchor}
      fontFamily="Helvetica, Arial, sans-serif"
    >
      {text}
    </text>
  )

  const columns = [
    {
      name: 'Solicitação recebida',
      count: '3',
      cards: [
        ['Protocolo 2451', 'Nota fiscal', '#0054f0', 'Fiscal'],
        ['Protocolo 2452', 'Devolução', '#16a34a', 'Logística'],
        ['Protocolo 2453', 'Cadastro', '#d97706', 'Jurídico'],
      ],
    },
    {
      name: 'Em análise',
      count: '2',
      cards: [
        ['Protocolo 2448', 'Alvará sanitário', '#7c3aed', 'Regulatório'],
        ['Protocolo 2449', 'Contrato', '#d97706', 'Jurídico'],
      ],
    },
    {
      name: 'Aprovação',
      count: '1',
      cards: [['Protocolo 2447', 'Licença ANVISA', '#7c3aed', 'Regulatório']],
    },
    {
      name: 'Concluído',
      count: '5',
      cards: [
        ['Protocolo 2440', 'Nota fiscal', '#0054f0', 'Fiscal'],
        ['Protocolo 2441', 'Transporte', '#16a34a', 'Logística'],
      ],
    },
  ]

  return (
    <>
      <rect x="0" y="0" width="640" height="400" rx="14" fill="#ffffff" />
      <rect x="0.5" y="0.5" width="639" height="399" rx="13.5" fill="none" stroke={CARD_BORDER} />

      {/* Product top bar */}
      <path d="M14 0 H626 A14 14 0 0 1 640 14 V40 H0 V14 A14 14 0 0 1 14 0 Z" fill="#ffffff" />
      <line x1="0" y1="40" x2="640" y2="40" stroke={CARD_BORDER} />
      <text
        x="20"
        y="26"
        fill={INK}
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.4"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        pipefy
      </text>
      <line x1="82" y1="12" x2="82" y2="28" stroke={CARD_BORDER} />
      {t(94, 25, 'Kalk Distribuidora', '#6b7688', 9)}

      <rect x="454" y="11" width="98" height="19" rx="9.5" fill={BLUE} />
      {t(503, 24, '+  Novo card', '#ffffff', 8.5, '600', 'middle')}
      {[572, 590, 608].map((cx, i) => (
        <circle key={cx} cx={cx} cy="20" r="8" fill={['#dbe6fb', '#e6f3ea', '#f3e8fb'][i]} />
      ))}

      {/* Pipe title + tabs */}
      {t(20, 62, 'Central de Protocolos Internos', INK, 12.5, '700')}
      {['Pipe', 'Relatórios', 'Automações'].map((tab, i) => (
        <g key={tab}>
          {t(452 + i * 62, 62, tab, i === 0 ? BLUE : '#6b7688', 9, i === 0 ? '600' : '400')}
          {i === 0 ? <rect x="450" y="68" width="26" height="2" rx="1" fill={BLUE} /> : null}
        </g>
      ))}
      <line x1="0" y1="78" x2="640" y2="78" stroke={CARD_BORDER} />

      {/* Board */}
      <rect x="0" y="78" width="640" height="322" fill={BOARD} />

      {columns.map((col, ci) => {
        const x = 16 + ci * 154
        return (
          <g key={col.name}>
            {/* Phase header */}
            {t(x, 100, col.name, INK, 9, '700')}
            <rect x={x + 118} y={92} width="20" height="13" rx="6.5" fill="#e6eaf2" />
            {t(x + 128, 101, col.count, '#5a6679', 8, '600', 'middle')}
            <rect x={x} y={108} width="138" height="2" rx="1" fill={ci === 3 ? '#16a34a' : BLUE} opacity={ci === 3 ? 0.75 : 0.85} />

            {col.cards.map(([code, kind, colour, label], i) => {
              const y = 120 + i * 66
              return (
                <g key={code}>
                  <rect x={x} y={y} width="138" height="58" rx="8" fill="#ffffff" stroke={CARD_BORDER} />
                  <rect x={x} y={y} width="3" height="58" rx="1.5" fill={colour} />
                  {t(x + 12, y + 17, code, INK, 8.6, '600')}
                  {t(x + 12, y + 29, kind, '#6b7688', 8.2)}
                  <rect x={x + 12} y={y + 36} width={label.length * 4.6 + 12} height="12" rx="6" fill={colour} fillOpacity="0.12" />
                  {t(x + 18, y + 45, label, colour, 7, '600')}
                  <circle cx={x + 118} cy={y + 42} r="6.5" fill="#eef1f6" />
                  {t(x + 118, y + 45, 'LA', '#5a6679', 6, '700', 'middle')}
                </g>
              )
            })}

            {/* Automation marker on the approval phase */}
            {ci === 2 ? (
              <g>
                <rect x={x} y={192} width="138" height="30" rx="8" fill="#ffffff" stroke={BLUE} strokeOpacity="0.35" strokeDasharray="4 3" />
                <path d={`M${x + 16} ${203} l6 -8 l-1.5 6 l4 0 l-6.5 9 l1.5 -7 z`} fill={BLUE} />
                {t(x + 30, 204, 'Automação ativa', BLUE, 7.5, '600')}
                {t(x + 30, 214, 'move ao aprovar', '#6b7688', 7)}
              </g>
            ) : null}

            {/* Remaining cards in the done column */}
            {ci === 3 ? t(x + 4, 268, '+ 3 concluídos', '#6b7688', 8) : null}
          </g>
        )
      })}

      {/* SLA strip */}
      <rect x="16" y="352" width="608" height="32" rx="8" fill="#ffffff" stroke={CARD_BORDER} />
      <circle cx="34" cy="368" r="5" fill="#16a34a" />
      {t(48, 371, 'Fase 2 implantada · quatro etapas definidas · rastreabilidade completa por fase', '#5a6679', 8.5)}
    </>
  )
}

/* A support widget open on a live storefront. */
function Chatbot({ id }) {
  const WX = 356
  const WY = 40
  const WW = 262
  const WH = 342

  const t = (x, y, text, fill, size = 9, weight = '400', anchor = 'start') => (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      textAnchor={anchor}
      fontFamily="Helvetica, Arial, sans-serif"
    >
      {text}
    </text>
  )

  return (
    <>
      {/* Storefront behind the widget */}
      <rect x="0" y="0" width="640" height="400" rx="14" fill="#ffffff" />
      <rect x="0.5" y="0.5" width="639" height="399" rx="13.5" fill="none" stroke={C.border} />
      <path d="M14 0 H626 A14 14 0 0 1 640 14 V40 H0 V14 A14 14 0 0 1 14 0 Z" fill={C.chrome} />
      <line x1="0" y1="40" x2="640" y2="40" stroke={C.border} />
      <circle cx="20" cy="20" r="4" fill="#e5e8ee" />
      <circle cx="34" cy="20" r="4" fill="#e5e8ee" />
      <circle cx="48" cy="20" r="4" fill="#e5e8ee" />
      <rect x="68" y="11" width="200" height="18" rx="9" fill="#ffffff" stroke={C.border} />
      <path d="M79 19 v-2.2 a3.2 3.2 0 0 1 6.4 0 v2.2" fill="none" stroke={C.muted} strokeWidth="1" />
      <rect x="78.6" y="19" width="7.2" height="5.6" rx="1.4" fill={C.muted} opacity="0.6" />
      {[44, 28, 58].reduce(
        (acc, bw) => {
          acc.nodes.push(<rect key={acc.x} x={acc.x} y="18" width={bw} height="4" rx="2" fill={C.muted} opacity="0.26" />)
          acc.x += bw + 7
          return acc
        },
        { x: 94, nodes: [] }
      ).nodes}

      {t(28, 72, 'BELLA BOUTIQUE', C.ink, 11, '700')}
      {['New in', 'Dresses', 'Shoes', 'Sale'].map((label, i) => t(150 + i * 52, 72, label, C.muted, 8.5))}

      {t(28, 126, 'New season,', C.ink, 26, '600')}
      {t(28, 156, 'now in store', C.ink, 26, '600')}
      {t(28, 182, 'Free returns within 30 days on every order.', C.muted, 9)}
      <rect x="28" y="196" width="104" height="28" rx="14" fill={C.ink} />
      {t(80, 214, 'Shop the edit', '#ffffff', 8.5, '600', 'middle')}

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={28 + i * 100} y="252" width="88" height="112" rx="8" fill={C.panel} stroke={C.border} />
          <Photo
            id={`${id}-shelf${i}`}
            src={[P.woolCoat, P.quiltedOuterwear, P.knitScarf][i]}
            x={36 + i * 100}
            y={260}
            w={72}
            h={62}
            r={6}
          />
          {t(36 + i * 100, 338, ['Wool coat', 'Quilted jacket', 'Knit scarf'][i], C.ink, 8.5, '600')}
          {t(36 + i * 100, 352, ['€ 240', '€ 175', '€ 65'][i], C.muted, 8.5)}
        </g>
      ))}

      {/* Chat widget */}
      <rect x={WX - 4} y={WY - 4} width={WW + 8} height={WH + 8} rx="16" fill="#0d1b30" opacity="0.06" />
      <rect x={WX} y={WY} width={WW} height={WH} rx="14" fill="#ffffff" stroke={C.border} />

      <path
        d={`M${WX} ${WY + 14} a14 14 0 0 1 14 -14 H${WX + WW - 14} a14 14 0 0 1 14 14 V${WY + 58} H${WX} Z`}
        fill={C.accent}
      />
      <circle cx={WX + 30} cy={WY + 30} r="14" fill="#ffffff" fillOpacity="0.22" />
      {t(WX + 30, WY + 34, 'BB', '#ffffff', 10, '700', 'middle')}
      {t(WX + 52, WY + 26, 'Bella Boutique Support', '#ffffff', 10, '600')}
      <circle cx={WX + 56} cy={WY + 38} r="3" fill="#4ade80" />
      {t(WX + 64, WY + 41, 'Typically replies instantly', '#cfe0fb', 8)}
      {t(WX + WW - 18, WY + 34, '–', '#ffffff', 12, '700', 'middle')}

      <rect x={WX} y={WY + 58} width={WW} height={WH - 58} fill="#f7f9fc" />

      {/* Conversation */}
      <rect x={WX + 14} y={WY + 74} width={186} height="42" rx="10" fill="#ffffff" stroke={C.hair} />
      {t(WX + 24, WY + 92, 'Hi Marco, welcome back.', C.ink, 8.8)}
      {t(WX + 24, WY + 105, 'What can I help you with?', C.ink, 8.8)}

      {['Track an order', 'Returns policy', 'Size guide'].map((label, i) => (
        <g key={label}>
          <rect
            x={WX + 14 + (i === 2 ? 0 : 0)}
            y={WY + 118 + i * 23}
            width={i === 0 ? 86 : i === 1 ? 92 : 74}
            height="19"
            rx="9.5"
            fill="#ffffff"
            stroke={C.accent}
            strokeOpacity="0.45"
          />
          {t(WX + 24, WY + 131 + i * 23, label, C.accent, 8.2, '600')}
        </g>
      ))}

      <rect x={WX + 96} y={WY + 188} width={152} height="24" rx="10" fill={C.accent} />
      {t(WX + 108, WY + 204, 'Where is order #48213?', '#ffffff', 8.8)}

      <rect x={WX + 14} y={WY + 218} width={196} height="40" rx="10" fill="#ffffff" stroke={C.hair} />
      {t(WX + 24, WY + 235, 'It left our warehouse today', C.ink, 8.8)}
      {t(WX + 24, WY + 248, 'and arrives tomorrow by 18:00.', C.ink, 8.8)}

      <rect x={WX + 14} y={WY + 262} width={196} height="30" rx="10" fill="#ffffff" stroke={C.accent} strokeOpacity="0.35" />
      <circle cx={WX + 32} cy={WY + 277} r="8" fill={C.accent} fillOpacity="0.12" />
      <path d={`M${WX + 28} ${WY + 277} l3 3 l6 -6`} stroke={C.accent} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {t(WX + 48, WY + 275, 'Out for delivery', C.ink, 8.5, '600')}
      {t(WX + 48, WY + 286, 'SDA Express · #48213', C.muted, 7.8)}

      {/* Input */}
      <rect x={WX} y={WY + WH - 44} width={WW} height="44" rx="0" fill="#ffffff" />
      <line x1={WX} y1={WY + WH - 44} x2={WX + WW} y2={WY + WH - 44} stroke={C.hair} />
      {t(WX + 18, WY + WH - 18, 'Write a message…', C.muted, 8.8)}
      <circle cx={WX + WW - 26} cy={WY + WH - 22} r="13" fill={C.accent} />
      <path d={`M${WX + WW - 32} ${WY + WH - 28} l12 6 l-12 6 l3 -6 z`} fill="#ffffff" />
    </>
  )
}

/* The job itself: source on top, run output below. */
function PythonAutomation() {
  const CW = 5.32
  const X0 = 92
  const code = [
    [['import', 'kw'], [' os, requests, schedule', 'pl']],
    [['import', 'kw'], [' pandas ', 'pl'], ['as', 'kw'], [' pd', 'pl']],
    [['from', 'kw'], [' datetime ', 'pl'], ['import', 'kw'], [' date', 'pl']],
    [],
    [['API ', 'var'], ['= ', 'op'], ['os', 'var'], ['.environ[', 'pl'], ['"ORDERS_API_URL"', 'str'], [']', 'pl']],
    [],
    [['def', 'kw'], [' ', 'pl'], ['fetch_orders', 'fn'], ['(day: date) -> pd.DataFrame:', 'pl']],
    [['    r ', 'pl'], ['= ', 'op'], ['requests', 'var'], ['.get(API, params={', 'pl'], ['"date"', 'str'], [': day}, timeout=', 'pl'], ['30', 'num'], [')', 'pl']],
    [['    r.raise_for_status()', 'pl']],
    [['    ', 'pl'], ['return', 'kw'], [' pd.DataFrame(r.json()[', 'pl'], ['"data"', 'str'], ['])', 'pl']],
    [],
    [['def', 'kw'], [' ', 'pl'], ['run', 'fn'], ['() -> ', 'pl'], ['None', 'kw'], [':', 'pl']],
    [['    orders ', 'pl'], ['= ', 'op'], ['fetch_orders', 'fn'], ['(date.today())', 'pl']],
    [['    clean ', 'pl'], ['= ', 'op'], ['orders.dropna(subset=[', 'pl'], ['"sku"', 'str'], [', ', 'pl'], ['"total"', 'str'], ['])', 'pl']],
    [['    warehouse.upsert(clean)', 'pl'], ['  ', 'pl'], ['# single source of truth', 'cm']],
    [['    notify.email(', 'pl'], ['"daily-report"', 'str'], [', clean.describe())', 'pl']],
  ]
  const colors = {
    kw: '#c792ea',
    fn: '#82aaff',
    str: '#c3e88d',
    num: '#f78c6c',
    op: '#89ddff',
    var: '#eeffff',
    pl: '#a6accd',
    cm: '#5f7e97',
  }

  const log = [
    ['09:00:01', 'INFO', 'job.start sync_daily', '#82aaff'],
    ['09:00:04', 'INFO', 'fetched 1,284 orders from the orders API', '#a6accd'],
    ['09:00:15', 'INFO', 'validated + normalised → 1,596 rows', '#a6accd'],
    ['09:00:21', 'INFO', 'warehouse.upsert ok', '#c3e88d'],
    ['09:00:23', 'INFO', 'daily report emailed to the operations team', '#c3e88d'],
  ]

  return (
    <>
      <rect x="0" y="0" width="640" height="400" rx="14" fill="#0f172a" />
      <rect x="0.5" y="0.5" width="639" height="399" rx="13.5" fill="none" stroke="#1e293b" />

      {/* Title bar */}
      <path d="M14 0 H626 A14 14 0 0 1 640 14 V34 H0 V14 A14 14 0 0 1 14 0 Z" fill="#111c33" />
      <circle cx="20" cy="17" r="4" fill="#f87171" />
      <circle cx="34" cy="17" r="4" fill="#fbbf24" />
      <circle cx="48" cy="17" r="4" fill="#34d399" />
      <rect x="68" y="4" width="108" height="30" fill="#0f172a" />
      <text x="82" y="23" fill="#e2e8f0" fontSize="9" fontFamily="monospace">
        sync_daily.py
      </text>
      <text x="192" y="23" fill="#475569" fontSize="9" fontFamily="monospace">
        config.yml
      </text>

      {/* File tree */}
      <rect x="0" y="34" width="80" height="366" fill="#0c1424" />
      <text x="14" y="54" fill="#475569" fontSize="7.5" fontFamily="monospace" letterSpacing="0.08em">
        AUTOMATION
      </text>
      {['jobs/', '  sync_daily.py', '  invoices.py', 'lib/', '  warehouse.py', '  notify.py', 'config.yml'].map((f, i) => (
        <text
          key={f}
          x="14"
          y={72 + i * 15}
          fill={f.includes('sync_daily') ? '#82aaff' : '#64748b'}
          fontSize="7.6"
          fontFamily="monospace"
        >
          {f}
        </text>
      ))}

      {/* Code */}
      {code.map((line, i) => (
        <g key={i}>
          <text x="76" y={54 + i * 14.4} fill="#334155" fontSize="8.4" fontFamily="monospace" textAnchor="end">
            {i + 1}
          </text>
          {line.reduce(
            (acc, [text, kind]) => {
              acc.nodes.push(
                <text
                  key={acc.chars}
                  x={X0 + acc.chars * CW}
                  y={54 + i * 14.4}
                  fill={colors[kind]}
                  fontSize="8.8"
                  fontFamily="monospace"
                  xmlSpace="preserve"
                >
                  {text}
                </text>
              )
              acc.chars += text.length
              return acc
            },
            { chars: 0, nodes: [] }
          ).nodes}
        </g>
      ))}

      {/* Terminal */}
      <rect x="80" y="276" width="560" height="124" fill="#0b1220" />
      <line x1="80" y1="276" x2="640" y2="276" stroke="#1e293b" />
      <text x="92" y="292" fill="#475569" fontSize="7.5" fontFamily="monospace" letterSpacing="0.08em">
        TERMINAL
      </text>
      <text x="176" y="292" fill="#334155" fontSize="7.5" fontFamily="monospace">
        cron: 0 9 * * * · next run in 22h 14m
      </text>
      <text x="92" y="310" fill="#c3e88d" fontSize="8.4" fontFamily="monospace">
        $ python -m jobs.sync_daily
      </text>
      {log.map(([time, level, msg, color], i) => (
        <g key={i}>
          <text x="92" y={326 + i * 12} fill="#475569" fontSize="8" fontFamily="monospace">
            {time}
          </text>
          <text x="150" y={326 + i * 12} fill="#82aaff" fontSize="8" fontFamily="monospace">
            {level}
          </text>
          <text x="184" y={326 + i * 12} fill={color} fontSize="8" fontFamily="monospace">
            {msg}
          </text>
        </g>
      ))}
      <text x="92" y="388" fill="#94a3b8" fontSize="8.4" fontFamily="monospace">
        Done in 23.4s · 0 failures · 30/30 successful runs this month
      </text>
    </>
  )
}

/* WhatsApp and Telegram bot conversations, drawn in each platform's own
   chrome so the result reads like a screenshot of the running bots. */
function ChatOps() {
  const PH_W = 288
  const PH_H = 392
  const LEFT = 20
  const RIGHT = 332
  const TOP = 22

  const waIn = [
    ['Hi! I am the Bella Boutique', 'assistant. How can I help?'],
  ]
  const waOut = [['Where is my order?']]
  const waIn2 = [
    ['Order #48213 was shipped today', 'with SDA Express.'],
    ['Estimated delivery: tomorrow', 'before 18:00.'],
  ]
  const waOut2 = [['Perfect, thanks!']]

  const bubble = (x, y, w, h, fill, stroke, tail) => (
    <>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={stroke || 'none'} />
      {tail === 'left' ? <path d={`M${x} ${y + 6} l-5 -4 l5 -3 z`} fill={fill} /> : null}
      {tail === 'right' ? <path d={`M${x + w} ${y + 6} l5 -4 l-5 -3 z`} fill={fill} /> : null}
    </>
  )

  const line = (x, y, text, fill, size = 9, anchor = 'start', weight = '400') => (
    <text x={x} y={y} fill={fill} fontSize={size} fontFamily="Helvetica, Arial, sans-serif" textAnchor={anchor} fontWeight={weight}>
      {text}
    </text>
  )

  const ticks = (x, y, color) => (
    <path
      d={`M${x} ${y} l2.2 2.4 l4.4 -5 M${x + 4} ${y} l2.2 2.4 l4.4 -5`}
      fill="none"
      stroke={color}
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )

  return (
    <>
      <rect x="0" y="0" width="640" height="452" rx="14" fill="#fbfcfe" />
      <rect x="0.5" y="0.5" width="639" height="451" rx="13.5" fill="none" stroke={C.border} />

      {/* ================= WhatsApp ================= */}
      <g>
        <rect x={LEFT} y={TOP} width={PH_W} height={PH_H} rx="20" fill="#ffffff" stroke={C.barMid} strokeWidth="1.2" />
        <clipPath id="wa-clip">
          <rect x={LEFT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} rx="16" />
        </clipPath>
        <g clipPath="url(#wa-clip)">
          <rect x={LEFT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} fill="#ece5dd" />

          {/* header */}
          <rect x={LEFT + 5} y={TOP + 5} width={PH_W - 10} height="46" fill="#008069" />
          <path d={`M${LEFT + 20} ${TOP + 28} l-6 -5 l6 -5`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx={LEFT + 42} cy={TOP + 28} r="13" fill="#ffffff" fillOpacity="0.25" />
          <circle cx={LEFT + 42} cy={TOP + 24} r="4.4" fill="#ffffff" fillOpacity="0.85" />
          <path d={`M${LEFT + 34} ${TOP + 38} a8 8 0 0 1 16 0 z`} fill="#ffffff" fillOpacity="0.85" />
          {line(LEFT + 62, TOP + 25, 'Bella Boutique', '#ffffff', 10.5, 'start', '600')}
          {line(LEFT + 62, TOP + 37, 'online', '#d6efe6', 8.5)}
          <circle cx={LEFT + 246} cy={TOP + 28} r="1.6" fill="#fff" />
          <circle cx={LEFT + 246} cy={TOP + 22} r="1.6" fill="#fff" />
          <circle cx={LEFT + 246} cy={TOP + 34} r="1.6" fill="#fff" />

          {/* date chip */}
          <rect x={LEFT + 112} y={TOP + 62} width="64" height="17" rx="8.5" fill="#ffffff" fillOpacity="0.85" />
          {line(LEFT + 144, TOP + 74, 'TODAY', '#5c6b73', 7.5, 'middle', '600')}

          {/* bot message */}
          {bubble(LEFT + 16, TOP + 90, 178, 44, '#ffffff', null, 'left')}
          {waIn[0].map((t, i) => line(LEFT + 26, TOP + 107 + i * 13, t, '#111b21', 9))}
          {line(LEFT + 182, TOP + 129, '09:41', '#8696a0', 7)}

          {/* user message */}
          {bubble(LEFT + 128, TOP + 144, 138, 26, '#d9fdd3', null, 'right')}
          {waOut[0].map((t, i) => line(LEFT + 138, TOP + 161 + i * 13, t, '#111b21', 9))}
          {line(LEFT + 236, TOP + 166, '09:41', '#667781', 7)}
          {ticks(LEFT + 254, TOP + 164, '#53bdeb')}

          {/* bot reply */}
          {bubble(LEFT + 16, TOP + 180, 190, 58, '#ffffff', null, 'left')}
          {waIn2[0].map((t, i) => line(LEFT + 26, TOP + 197 + i * 13, t, '#111b21', 9))}
          {waIn2[1].map((t, i) => line(LEFT + 26, TOP + 223 + i * 13, t, '#111b21', 9))}

          {/* order card */}
          <rect x={LEFT + 16} y={TOP + 244} width={190} height="56" rx="8" fill="#ffffff" />
          <rect x={LEFT + 22} y={TOP + 250} width={178} height="26" rx="5" fill="#f0f2f5" />
          <circle cx={LEFT + 36} cy={TOP + 263} r="7.5" fill="#008069" fillOpacity="0.15" />
          <path d={`M${LEFT + 32} ${TOP + 263} l3 3 l6 -6`} stroke="#008069" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {line(LEFT + 50, TOP + 261, 'Out for delivery', '#111b21', 8.5, 'start', '600')}
          {line(LEFT + 50, TOP + 270, 'SDA Express · #48213', '#667781', 7.5)}
          <rect x={LEFT + 22} y={TOP + 282} width={178} height="12" rx="6" fill="#008069" fillOpacity="0.12" />
          {line(LEFT + 111, TOP + 291, 'TRACK MY PARCEL', '#008069', 7.5, 'middle', '700')}

          {/* user reply */}
          {bubble(LEFT + 168, TOP + 308, 98, 26, '#d9fdd3', null, 'right')}
          {line(LEFT + 178, TOP + 325, 'Perfect, thanks!', '#111b21', 9)}
          {ticks(LEFT + 254, TOP + 328, '#53bdeb')}

          {/* input bar */}
          <rect x={LEFT + 5} y={TOP + PH_H - 52} width={PH_W - 10} height="47" fill="#f0f2f5" />
          <rect x={LEFT + 14} y={TOP + PH_H - 44} width={214} height="30" rx="15" fill="#ffffff" />
          {line(LEFT + 30, TOP + PH_H - 24, 'Message', '#8696a0', 9)}
          <circle cx={LEFT + 252} cy={TOP + PH_H - 29} r="15" fill="#008069" />
          <path d={`M${LEFT + 246} ${TOP + PH_H - 35} l12 6 l-12 6 l3 -6 z`} fill="#ffffff" />
        </g>
        {line(LEFT + 4, TOP + PH_H + 22, 'WhatsApp Business API', C.muted, 9, 'start', '600')}
      </g>

      {/* ================= Telegram ================= */}
      <g>
        <rect x={RIGHT} y={TOP} width={PH_W} height={PH_H} rx="20" fill="#ffffff" stroke={C.barMid} strokeWidth="1.2" />
        <clipPath id="tg-clip">
          <rect x={RIGHT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} rx="16" />
        </clipPath>
        <g clipPath="url(#tg-clip)">
          <rect x={RIGHT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} fill="#eef3f7" />

          {/* header */}
          <rect x={RIGHT + 5} y={TOP + 5} width={PH_W - 10} height="46" fill="#527da3" />
          <path d={`M${RIGHT + 20} ${TOP + 28} l-6 -5 l6 -5`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx={RIGHT + 42} cy={TOP + 28} r="13" fill="#ffffff" fillOpacity="0.25" />
          {line(RIGHT + 42, TOP + 32, 'BB', '#ffffff', 10, 'middle', '700')}
          {line(RIGHT + 62, TOP + 25, 'BellaBoutiqueBot', '#ffffff', 10.5, 'start', '600')}
          {line(RIGHT + 62, TOP + 37, 'bot', '#cfe1f0', 8.5)}

          {/* bot greeting */}
          {bubble(RIGHT + 16, TOP + 68, 196, 44, '#ffffff', null, 'left')}
          {line(RIGHT + 26, TOP + 85, 'Welcome back, Marco.', '#0f1419', 9)}
          {line(RIGHT + 26, TOP + 98, 'What would you like to do?', '#0f1419', 9)}
          {line(RIGHT + 196, TOP + 107, '09:38', '#8b9aa7', 7)}

          {/* inline keyboard */}
          {['Track my order', 'Book a fitting', 'Talk to a human'].map((label, i) => (
            <g key={label}>
              <rect
                x={RIGHT + 16}
                y={TOP + 118 + i * 26}
                width={196}
                height="22"
                rx="6"
                fill="#ffffff"
                stroke="#d7e3ec"
              />
              {line(RIGHT + 114, TOP + 133 + i * 26, label, '#2b7cd3', 8.5, 'middle', '600')}
            </g>
          ))}

          {/* user tap */}
          {bubble(RIGHT + 128, TOP + 200, 138, 26, '#effdde', null, 'right')}
          {line(RIGHT + 138, TOP + 217, 'Track my order', '#0f1419', 9)}
          {line(RIGHT + 236, TOP + 222, '09:38', '#5eaa5e', 7)}
          {ticks(RIGHT + 254, TOP + 220, '#4fae4e')}

          {/* bot answer + status card */}
          {bubble(RIGHT + 16, TOP + 236, 200, 30, '#ffffff', null, 'left')}
          {line(RIGHT + 26, TOP + 254, 'Order #48213 — out for delivery', '#0f1419', 9)}

          <rect x={RIGHT + 16} y={TOP + 272} width={200} height="62" rx="8" fill="#ffffff" />
          {line(RIGHT + 28, TOP + 289, 'DELIVERY STATUS', '#8b9aa7', 7, 'start', '700')}
          {[
            ['Packed', true],
            ['Shipped', true],
            ['Out for delivery', true],
            ['Delivered', false],
          ].map(([label, done], i) => (
            <g key={label}>
              <circle cx={RIGHT + 32 + i * 46} cy={TOP + 302} r="4.6" fill={done ? '#4fae4e' : '#d7e3ec'} />
              {i < 3 ? (
                <rect x={RIGHT + 37 + i * 46} y={TOP + 301} width="36" height="2" fill={done ? '#4fae4e' : '#d7e3ec'} />
              ) : null}
            </g>
          ))}
          {line(RIGHT + 28, TOP + 322, 'Arriving today before 18:00', '#0f1419', 8)}

          {/* input bar */}
          <rect x={RIGHT + 5} y={TOP + PH_H - 52} width={PH_W - 10} height="47" fill="#ffffff" />
          <line x1={RIGHT + 5} y1={TOP + PH_H - 52} x2={RIGHT + PH_W - 5} y2={TOP + PH_H - 52} stroke="#e3ebf1" />
          {line(RIGHT + 22, TOP + PH_H - 24, 'Message', '#8b9aa7', 9)}
          <rect x={RIGHT + 196} y={TOP + PH_H - 38} width="30" height="16" rx="4" fill="#eef3f7" />
          {line(RIGHT + 211, TOP + PH_H - 27, 'MENU', '#527da3', 7, 'middle', '700')}
          <path d={`M${RIGHT + 246} ${TOP + PH_H - 36} l14 7 l-14 7 l3 -7 z`} fill="#527da3" />
        </g>
        {line(RIGHT + 4, TOP + PH_H + 22, 'Telegram Bot API', C.muted, 9, 'start', '600')}
      </g>
    </>
  )
}

const scenes = {
  pipefy: Pipefy,
  chatbot: Chatbot,
  python: PythonAutomation,
  chatops: ChatOps,
  ...extraScenes,
  ...moreScenes,
}

/* Scenes that need a canvas other than the default 640x400. */
const sizes = {
  chatops: [640, 452],
}

/**
 * Falls back to a drawn scene for projects that have no published screenshot.
 * Projects carrying a real screenshot render an <img> instead.
 *
 * `fit` is "meet" wherever the whole scene matters, and "slice" on card tiles,
 * which have a fixed aspect ratio the scene has to fill rather than letterbox.
 */
export default function ProjectVisual({ variant, title, fit = 'meet' }) {
  const Scene = scenes[variant]
  if (!Scene) return null

  const id = `pv-${variant}`
  const [vw, vh] = sizes[variant] ?? [W, H]

  return (
    <svg
      className="projectVisual"
      viewBox={`0 0 ${vw} ${vh}`}
      role="img"
      aria-label={`Interface diagram for ${title}`}
      preserveAspectRatio={`xMidYMid ${fit}`}
    >
      <title>{`${title} — process diagram`}</title>
      <Defs id={id} />
      <Scene id={id} />
    </svg>
  )
}
