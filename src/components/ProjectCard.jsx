import { useCallback, useRef } from 'react'

import Icon from './ui/Icon'
import ProjectVisual from './ProjectVisual'

/**
 * One tile in the projects grid.
 *
 * A button rather than a div: the whole card opens the detail dialog, and
 * making that a real button gives keyboard and screen-reader users the same
 * affordance a mouse user gets for free.
 *
 * Only the first few technologies are shown - the rest are a count, since the
 * tile is a lure into the dialog rather than the full record.
 */
const SHOWN_TECH = 3

/* Degrees of tilt at the very edge of the card. Small on purpose: past about
   eight the text starts to look like it is sliding off. */
const TILT_X = 7
const TILT_Y = 9

export default function ProjectCard({
  project,
  index,
  delayIndex = index,
  label,
  badge,
  ui,
  onOpen,
  eager = false,
}) {
  const shown = project.tech.slice(0, SHOWN_TECH)
  const extra = project.tech.length - shown.length
  const ref = useRef(null)
  const frame = useRef(0)
  const latest = useRef({ x: 0, y: 0 })

  /*
   * Tilts the card towards the pointer and moves a highlight with it, which is
   * what reads as a solid object rather than a rectangle that grew a shadow.
   * Written straight to CSS custom properties so React never re-renders for a
   * mouse move, and coalesced into one frame because pointermove fires far
   * more often than the screen refreshes.
   */
  const onPointerMove = useCallback((event) => {
    const el = ref.current
    if (!el || event.pointerType !== 'mouse') return

    // The newest position, not the one that happened to open the frame: a
    // frame opened by the first event and then read that same event would
    // discard every move in between and always trail the cursor.
    latest.current.x = event.clientX
    latest.current.y = event.clientY
    if (frame.current) return

    frame.current = requestAnimationFrame(() => {
      frame.current = 0
      const box = el.getBoundingClientRect()
      const x = (latest.current.x - box.left) / box.width
      const y = (latest.current.y - box.top) / box.height
      el.style.setProperty('--tx', `${((0.5 - y) * TILT_X).toFixed(2)}deg`)
      el.style.setProperty('--ty', `${((x - 0.5) * TILT_Y).toFixed(2)}deg`)
      el.style.setProperty('--sx', `${(x * 100).toFixed(1)}%`)
      el.style.setProperty('--sy', `${(y * 100).toFixed(1)}%`)
    })
  }, [])

  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    if (frame.current) {
      cancelAnimationFrame(frame.current)
      frame.current = 0
    }
    // Back to flat, and the transition carries it rather than a jump.
    el.style.removeProperty('--tx')
    el.style.removeProperty('--ty')
  }, [])

  return (
    <button
      type="button"
      className="pcard"
      style={{ '--i': delayIndex }}
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={() => onOpen(project)}
      aria-label={`${project.title} — ${ui.viewDetails}`}
    >
      <span className="pcard__media">
        {project.image ? (
          <img
            className="pcard__shot"
            src={project.image}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            width={project.imageSize?.[0]}
            height={project.imageSize?.[1]}
          />
        ) : (
          <ProjectVisual variant={project.visual} title={project.title} fit="slice" />
        )}
        <span className="pcard__veil" aria-hidden="true" />
        <span className="pcard__index" aria-hidden="true">
          {label} {String(index + 1).padStart(2, '0')}
        </span>
        {badge ? <span className="pcard__badge">{badge}</span> : null}
      </span>

      <span className="pcard__sheen" aria-hidden="true" />

      <span className="pcard__body">
        <span className="pcard__category">{project.category}</span>
        <span className="pcard__title">{project.title}</span>
        <span className="pcard__overview">{project.overview}</span>

        <span className="pcard__tech">
          {shown.map((tech) => (
            <span key={tech} className="chip chip--sm">
              {tech}
            </span>
          ))}
          {extra > 0 ? <span className="pcard__more">+{extra}</span> : null}
        </span>

        <span className="pcard__cta">
          {ui.viewDetails}
          <Icon name="arrowRight" size={14} strokeWidth={2.2} />
        </span>
      </span>
    </button>
  )
}
