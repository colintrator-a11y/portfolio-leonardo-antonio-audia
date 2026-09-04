import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * A rotating wireframe globe of nodes, hanging in the empty right of the hero.
 *
 * Points are spread over a sphere by the Fibonacci lattice, which gives an even
 * scatter with no seams or crowding at the poles. Because the sphere is rigid,
 * the chords between near neighbours are worked out once at mount; every frame
 * only rotates, projects and draws them.
 *
 * Depth does all the shading: alpha and line width both fall off with z, so the
 * far hemisphere sits behind the near one without any sorting. An object rather
 * than the ground planes that were here before - it reads as a network, which
 * is closer to what the page is about.
 */
const COUNT = 260
const LINK_DISTANCE = 0.34
const FOCAL = 900
const SPIN = 0.00011
const RINGS = [0, 0.62, -0.62]

/* Fibonacci lattice: even coverage of the unit sphere. */
function buildNodes() {
  const golden = Math.PI * (3 - Math.sqrt(5))
  const nodes = []
  for (let i = 0; i < COUNT; i += 1) {
    const y = 1 - (i / (COUNT - 1)) * 2
    const radius = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    nodes.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius])
  }
  return nodes
}

/* The sphere never deforms, so its chords are fixed. Compute them once. */
function buildLinks(nodes) {
  const links = []
  const limit = LINK_DISTANCE * LINK_DISTANCE
  for (let a = 0; a < nodes.length; a += 1) {
    for (let b = a + 1; b < nodes.length; b += 1) {
      const dx = nodes[a][0] - nodes[b][0]
      const dy = nodes[a][1] - nodes[b][1]
      const dz = nodes[a][2] - nodes[b][2]
      if (dx * dx + dy * dy + dz * dz < limit) links.push([a, b])
    }
  }
  return links
}

export default function BackdropOrbit() {
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

    const nodes = buildNodes()
    const links = buildLinks(nodes)
    const spun = nodes.map(() => ({ x: 0, y: 0, z: 0, scale: 1 }))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let radius = 300
    let raf = 0
    let leanX = 0
    let leanY = 0

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Big enough to carry the empty column, never wider than the space there.
      radius = Math.min(width * 0.26, height * 0.46, 380)
    }

    function frame(now) {
      // The pointer tips the globe rather than moving a camera through a scene.
      leanX += (pointer.x * 0.5 - leanX) * 0.04
      leanY += (pointer.y * 0.35 - leanY) * 0.04
      ctx.clearRect(0, 0, width, height)

      const yaw = now * SPIN
      const pitch = -0.35 + leanY
      const cosA = Math.cos(yaw + leanX)
      const sinA = Math.sin(yaw + leanX)
      const cosB = Math.cos(pitch)
      const sinB = Math.sin(pitch)

      const originX = width * 0.78
      const originY = height * 0.42

      for (let i = 0; i < nodes.length; i += 1) {
        const [nx, ny, nz] = nodes[i]
        // Yaw about the vertical, then pitch about the horizontal.
        const x1 = nx * cosA - nz * sinA
        const z1 = nx * sinA + nz * cosA
        const y2 = ny * cosB - z1 * sinB
        const z2 = ny * sinB + z1 * cosB

        const depth = z2 * radius
        const scale = FOCAL / (FOCAL + depth + radius)
        const p = spun[i]
        p.x = originX + x1 * radius * scale
        p.y = originY + y2 * radius * scale
        p.z = z2
        p.scale = scale
      }

      for (let i = 0; i < links.length; i += 1) {
        const a = spun[links[i][0]]
        const b = spun[links[i][1]]
        // Front of the globe reads solid, the far side stays a whisper.
        const near = (a.z + b.z) * 0.5
        const fade = 0.07 + Math.max(0, near + 1) * 0.23
        ctx.strokeStyle = `rgba(${line}, ${fade.toFixed(3)})`
        ctx.lineWidth = Math.max(0.5, (a.scale + b.scale) * 0.62)
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      for (let i = 0; i < spun.length; i += 1) {
        const p = spun[i]
        if (p.z < -0.2) continue
        const size = Math.max(1.2, p.scale * 2.6)
        ctx.fillStyle = `rgba(${line}, ${(0.14 + Math.max(0, p.z) * 0.5).toFixed(3)})`
        // Squares, not dots - the identity has no round corners anywhere else.
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size)
      }

      // Three orbit rings, tilted off the spin axis so they cross the mesh.
      for (let r = 0; r < RINGS.length; r += 1) {
        const tilt = RINGS[r]
        const ringRadius = radius * (1.12 + r * 0.14)
        ctx.strokeStyle = `rgba(${line}, ${r === 0 ? 0.32 : 0.17})`
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let s = 0; s <= 96; s += 1) {
          const a = (s / 96) * Math.PI * 2
          const rx = Math.cos(a)
          const rz = Math.sin(a)
          const ry = rz * tilt
          const x1 = rx * cosA - rz * sinA
          const z1 = rx * sinA + rz * cosA
          const y2 = ry * cosB - z1 * sinB
          const z2 = ry * sinB + z1 * cosB
          const scale = FOCAL / (FOCAL + z2 * ringRadius + radius)
          const px = originX + x1 * ringRadius * scale
          const py = originY + y2 * ringRadius * scale
          if (s) ctx.lineTo(px, py)
          else ctx.moveTo(px, py)
        }
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
