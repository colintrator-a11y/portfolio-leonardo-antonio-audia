import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * A corridor of square frames receding to a vanishing point.
 *
 * Each frame is a real rectangle at a depth, projected through
 * `scale = focal / (focal + z)` and rotated a little more than the one in
 * front of it, so the corridor twists as it recedes. Frames march towards the
 * camera and wrap round the back, which is what gives the sense of moving
 * through it rather than looking at it.
 *
 * Square, because everything else in this design is: the earlier field of
 * tumbling solids belonged to a rounder page than this one.
 */
const FRAMES = 26
const FOCAL = 560
const DEPTH = 2600
const SPEED = 1.15
const TWIST = 0.055

export default function BackdropCorridor() {
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

    // Evenly spaced in depth, so the march towards the camera stays regular.
    const frames = Array.from({ length: FRAMES }, (_, i) => ({
      z: (i / FRAMES) * DEPTH,
      half: 300 + (i % 3) * 90,
    }))

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function frame() {
      camX += (pointer.x * 130 - camX) * 0.04
      camY += (pointer.y * 90 - camY) * 0.04
      ctx.clearRect(0, 0, width, height)

      // The vanishing point sits off to the right, where the page has no
      // content, so the corridor reads behind the column rather than under it.
      const vx = width * 0.72 - camX * 0.5
      const vy = height * 0.46 - camY * 0.5

      for (const f of frames) {
        f.z -= SPEED
        if (f.z < 2) f.z += DEPTH

        const scale = FOCAL / (FOCAL + f.z)
        const half = f.half * scale
        if (half < 2) continue

        // Deeper frames are turned further, so the corridor twists away.
        const angle = f.z * TWIST * 0.01
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        const corners = [
          [-half, -half], [half, -half], [half, half], [-half, half],
        ].map(([x, y]) => [vx + (x * cos - y * sin), vy + (x * sin + y * cos)])

        const near = 1 - f.z / DEPTH
        ctx.strokeStyle = `rgba(${line}, ${(0.06 + near * 0.3).toFixed(3)})`
        ctx.lineWidth = Math.max(0.6, near * 1.8)
        ctx.beginPath()
        corners.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)))
        ctx.closePath()
        ctx.stroke()
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
