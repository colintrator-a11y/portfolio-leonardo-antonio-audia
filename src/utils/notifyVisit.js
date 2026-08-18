/**
 * Tells the notify endpoint that someone opened the site.
 *
 * Fires once per browser tab session, never in development, and always on idle
 * so it cannot delay first paint. The endpoint holds the Telegram credentials;
 * nothing secret is sent from here.
 */

const ENDPOINT = '/api/notify'
const SESSION_KEY = 'portfolio:visit-notified'

function alreadyNotified() {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true
    sessionStorage.setItem(SESSION_KEY, '1')
    return false
  } catch {
    // Private mode or storage disabled - fall through and send once per load.
    return false
  }
}

function send() {
  const payload = JSON.stringify({
    path: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || '',
    language: navigator.language || '',
  })

  // keepalive lets the request survive a visitor who leaves immediately.
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // A blocked or failed ping must never surface to the visitor.
  })
}

export default function notifyVisit() {
  if (import.meta.env.DEV) return
  if (typeof window === 'undefined') return
  if (alreadyNotified()) return

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(send, { timeout: 3000 })
  } else {
    window.setTimeout(send, 1200)
  }
}
