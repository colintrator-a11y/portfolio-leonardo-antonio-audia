import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * A wireframe terrain running away to a horizon, breathing as it goes.
 *
 * Real 3D rather than a picture of it: the mesh is a grid of points with an x,
 * a z and a height that is a sum of two travelling sine waves, projected each
 * frame through `scale = focal / (focal + z)`. Distance therefore does what
 * distance should - rows compress towards the horizon, near ones sway further
 * than far ones, and the camera leans with the pointer.
 *
 * Hand-written on a 2D canvas. A 3D library would render this in a dozen lines
 * and cost more than every other asset on the site put together.
 */
const COLS = 26
const ROWS = 16
const SPAN = 2600      // world width of the mesh
const DEPTH = 2100     // how far back the furthest row sits
const FOCAL = 620
const AMPLITUDE = 44
const SPEED = 0.00055
/* How far the camera sits above the mesh. Without this every row projects to
   the same band and the terrain reads as a streak rather than a floor. */
const CAMERA_HEIGHT = 300

export default function BackdropWave() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || typeof window === 'undefined') return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    let line = 'rgba(29, 78, 216, '
    const readTheme = () => {
      const dark = document.documentElement.dataset.theme === 'dark'
      line = dark ? 'rgba(125, 180, 252, ' : 'rgba(29, 78, 216, '
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

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    /**
     * One mesh vertex, projected to the screen. The mesh hangs below the
     * camera, so near rows fall towards the bottom of the frame and far ones
     * climb to the horizon - which is what makes it read as ground.
     */
    const project = (x, y, z) => {
      const scale = FOCAL / (FOCAL + z)
      return {
        x: width / 2 + (x - camX) * scale,
        y: height * 0.56 + (CAMERA_HEIGHT + y - camY * 0.5) * scale,
        scale,
      }
    }

    function frame(now) {
      camX += (pointer.x * 150 - camX) * 0.035
      camY += (pointer.y * 90 - camY) * 0.035
      ctx.clearRect(0, 0, width, height)

      const t = now * SPEED
      const grid = []

      for (let r = 0; r < ROWS; r += 1) {
        const row = []
        // Rows bunch up towards the horizon rather than spacing evenly, which
        // is what stops the far half of the mesh looking like a flat ladder.
        const z = (r / (ROWS - 1)) ** 1.7 * DEPTH
        for (let c = 0; c < COLS; c += 1) {
          const x = (c / (COLS - 1) - 0.5) * SPAN
          const y =
            Math.sin(x * 0.0021 + t) * AMPLITUDE +
            Math.cos(z * 0.0028 - t * 1.4) * AMPLITUDE * 0.62
          row.push(project(x, y, z))
        }
        grid.push(row)
      }

      ctx.lineWidth = 1
      // Far rows first, so nearer lines lie over them.
      for (let r = ROWS - 1; r >= 0; r -= 1) {
        const row = grid[r]
        const fade = row[0].scale * 1.5
        ctx.strokeStyle = `${line}${Math.min(0.24, fade * 0.3).toFixed(3)})`

        ctx.beginPath()
        row.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)))
        ctx.stroke()

        // Struts to the row behind, which is what turns lines into a surface.
        if (r < ROWS - 1) {
          ctx.beginPath()
          for (let c = 0; c < COLS; c += 2) {
            ctx.moveTo(row[c].x, row[c].y)
            ctx.lineTo(grid[r + 1][c].x, grid[r + 1][c].y)
          }
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
