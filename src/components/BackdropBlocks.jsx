import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * A field of extruded blocks, seen in perspective and breathing.
 *
 * Every block is a real box: a footprint on the ground plane and a height taken
 * from two travelling sine waves, with all eight corners projected through
 * `scale = focal / (focal + z)`. Only the silhouette is drawn - the top face
 * and the four rising edges - which is what keeps a hundred and forty boxes
 * legible as a skyline rather than a thicket.
 *
 * Drawn back to front so nearer blocks occlude the ones behind them, and the
 * camera leans with the pointer. Blocks rather than the frames that were here
 * before: this identity is square, and squares with volume beat squares
 * without.
 */
const COLS = 16
const ROWS = 13
const SPACING = 210
const FOCAL = 620
const CAMERA_HEIGHT = 210
const SPEED = 0.00042
const DRIFT = 0.024

export default function BackdropBlocks() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || typeof window === 'undefined') return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    let line = '255, 74, 28'
    const readTheme = () => {
      line = document.documentElement.dataset.theme === 'dark' ? '255, 138, 92' : '255, 74, 28'
    }
    readTheme()
    const themeWatch = new MutationObserver(readTheme)
    themeWatch.observe(document.documentElement, { attributeFilter: ['data-theme'] })

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let raf = 0
    let camX = 0
    let camY = 0
    let slide = 0

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    /* World point to screen. The horizon sits low and to the right, where the
       page keeps no content, so the field reads behind the column. */
    const project = (x, y, z) => {
      const scale = FOCAL / (FOCAL + z)
      return {
        x: width * 0.68 + (x - camX) * scale,
        y: height * 0.58 + (CAMERA_HEIGHT + y - camY * 0.5) * scale,
        scale,
      }
    }

    function frame(now) {
      camX += (pointer.x * 150 - camX) * 0.035
      camY += (pointer.y * 100 - camY) * 0.035
      slide = (slide + DRIFT) % SPACING
      ctx.clearRect(0, 0, width, height)

      const t = now * SPEED
      const half = SPACING * 0.3

      // Far rows first, so a nearer block covers what is behind it.
      for (let r = ROWS - 1; r >= 0; r -= 1) {
        const z = 260 + r * SPACING
        for (let c = 0; c < COLS; c += 1) {
          const x = (c - COLS / 2) * SPACING + slide
          const lift = 60 + (Math.sin(x * 0.004 + t) + Math.cos(z * 0.005 - t * 1.3)) * 150
          const top = -Math.max(18, lift)

          const feet = [
            [x - half, z - half], [x + half, z - half],
            [x + half, z + half], [x - half, z + half],
          ]
          const base = feet.map(([px, pz]) => project(px, 0, pz))
          const cap = feet.map(([px, pz]) => project(px, top, pz))
          if (cap[0].scale < 0.06) continue

          const fade = Math.min(0.42, cap[0].scale * 0.85)
          ctx.strokeStyle = `rgba(${line}, ${fade.toFixed(3)})`
          ctx.lineWidth = Math.max(0.6, cap[0].scale * 2)

          ctx.beginPath()
          cap.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)))
          ctx.closePath()
          // Only the two leading uprights: drawing all four turns the field
          // into a mesh you cannot read through.
          ctx.moveTo(cap[0].x, cap[0].y)
          ctx.lineTo(base[0].x, base[0].y)
          ctx.moveTo(cap[1].x, cap[1].y)
          ctx.lineTo(base[1].x, base[1].y)
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    raf = requestAnimationFrame(frame)

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      themeWatch.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas className="backdrop__field" ref={ref} aria-hidden="true" />
}
