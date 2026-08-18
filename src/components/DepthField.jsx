import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * A drifting field of points behind the page, projected in perspective.
 *
 * Genuinely three-dimensional rather than a parallax trick: each point holds an
 * x, y and z, and is projected with `scale = focal / (focal + z)`, so points
 * further away are smaller, fainter and move less. The camera drifts with the
 * pointer, which is what sells the depth - a flat layer cannot shift its
 * parallax by distance.
 *
 * Hand-written on a 2D canvas rather than pulled from a 3D library: the whole
 * effect is a few dozen lines, where three.js would add more weight than the
 * rest of the site put together.
 */
const COUNT = 90
const FOCAL = 520
const DEPTH = 1400
const SPEED = 0.34

export default function DepthField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || typeof window === 'undefined') return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    /*
     * Point colour follows the theme, read once when it changes rather than
     * per frame - asking the DOM for a computed value sixty times a second is
     * the cost this effect exists to avoid.
     */
    let ink = 'rgba(13, 27, 48, '
    let accent = 'rgba(29, 78, 216, '
    const readTheme = () => {
      const dark = document.documentElement.dataset.theme === 'dark'
      ink = dark ? 'rgba(226, 234, 250, ' : 'rgba(13, 27, 48, '
      accent = dark ? 'rgba(125, 180, 252, ' : 'rgba(29, 78, 216, '
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

    const points = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 1800,
      y: (Math.random() - 0.5) * 1200,
      z: Math.random() * DEPTH,
      accent: Math.random() < 0.22,
    }))

    function resize() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function frame() {
      // Ease towards the pointer so the camera glides rather than snaps.
      camX += (pointer.x * 60 - camX) * 0.04
      camY += (pointer.y * 40 - camY) * 0.04

      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2

      for (const p of points) {
        p.z -= SPEED
        if (p.z < 1) {
          p.z = DEPTH
          p.x = (Math.random() - 0.5) * 1800
          p.y = (Math.random() - 0.5) * 1200
        }

        const scale = FOCAL / (FOCAL + p.z)
        const sx = cx + (p.x - camX) * scale
        const sy = cy + (p.y - camY) * scale
        if (sx < -40 || sx > width + 40 || sy < -40 || sy > height + 40) continue

        // Near points are larger and darker; distant ones fade into the paper.
        const radius = Math.max(0.4, scale * 3.4)
        const alpha = Math.min(0.5, scale * 0.62)
        ctx.beginPath()
        ctx.arc(sx, sy, radius, 0, Math.PI * 2)
        ctx.fillStyle = p.accent ? `${accent}${alpha * 0.9})` : `${ink}${alpha * 0.55})`
        ctx.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    frame()

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    // Nothing to draw while the tab is hidden, and rAF is throttled anyway.
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
