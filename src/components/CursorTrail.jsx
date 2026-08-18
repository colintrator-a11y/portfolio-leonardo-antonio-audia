import { useEffect, useRef } from 'react'

/**
 * A soft tail that follows the pointer.
 *
 * Two parts: a tapering stroke through the last handful of positions, and a
 * blurred blob that lags behind it, which is what gives the tail weight rather
 * than making it look like a drawn line.
 *
 * The loop stops once the pointer has been still for a moment and starts again
 * on the next move, so an idle tab is not repainting sixty times a second for
 * something nobody is looking at.
 */
const POINTS = 14
const IDLE_MS = 700

export default function CursorTrail() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || typeof window === 'undefined' || !window.matchMedia) return undefined
    // A finger has no hover state to trail, and reduced motion means no trail.
    if (!window.matchMedia('(pointer: fine)').matches) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const trail = []
    let raf = 0
    let lastMove = 0
    let blobX = 0
    let blobY = 0
    let stroke = 'rgba(29, 78, 216, '
    let width = 0
    let height = 0

    const readTheme = () => {
      const dark = document.documentElement.dataset.theme === 'dark'
      stroke = dark ? 'rgba(125, 180, 252, ' : 'rgba(29, 78, 216, '
    }
    readTheme()
    const themeWatch = new MutationObserver(readTheme)
    themeWatch.observe(document.documentElement, { attributeFilter: ['data-theme'] })

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    function draw(now) {
      ctx.clearRect(0, 0, width, height)

      if (trail.length > 1) {
        // Drawn back to front so the newest segment sits on top, each segment
        // thinner and fainter than the one before it.
        for (let i = trail.length - 1; i > 0; i -= 1) {
          const a = trail[i]
          const b = trail[i - 1]
          const t = i / trail.length
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.lineCap = 'round'
          ctx.lineWidth = 7 * t
          ctx.strokeStyle = `${stroke}${(0.3 * t).toFixed(3)})`
          ctx.stroke()
        }
      }

      const head = trail[trail.length - 1]
      if (head) {
        // The blob chases the head rather than sitting on it, which is what
        // reads as a shadow being dragged along behind the cursor.
        blobX += (head.x - blobX) * 0.12
        blobY += (head.y - blobY) * 0.12
        const glow = ctx.createRadialGradient(blobX, blobY, 0, blobX, blobY, 46)
        glow.addColorStop(0, `${stroke}0.16)`)
        glow.addColorStop(1, `${stroke}0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(blobX, blobY, 46, 0, Math.PI * 2)
        ctx.fill()
      }

      // Let the tail retract while the pointer is still, then stand down.
      if (now - lastMove > 40 && trail.length) trail.shift()
      if (now - lastMove > IDLE_MS && !trail.length) {
        raf = 0
        ctx.clearRect(0, 0, width, height)
        return
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return
      trail.push({ x: event.clientX, y: event.clientY })
      if (trail.length > POINTS) trail.shift()
      lastMove = performance.now()
      if (!raf) raf = requestAnimationFrame(draw)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      themeWatch.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas className="cursorTrail" ref={ref} aria-hidden="true" />
}
