import { useCallback, useRef } from 'react'

import Icon from './ui/Icon'

/**
 * One line of the index.
 *
 * A row, not a card: number, title, discipline, stack, and a mark for work you
 * can open. Seventy-two of these read as a body of work; seventy-two cards read
 * as a search result. The image is not in the row at all - it follows the
 * pointer, so the list stays dense and the picture still arrives.
 */
export default function ProjectRow({ project, index, ui, onOpen, onHover }) {
  const ref = useRef(null)

  const enter = useCallback(() => onHover(project), [onHover, project])
  const leave = useCallback(() => onHover(null), [onHover])

  return (
    <li className="row" ref={ref}>
      <button
        type="button"
        className="row__hit"
        onClick={() => onOpen(project)}
        onMouseEnter={enter}
        onFocus={enter}
        onMouseLeave={leave}
        onBlur={leave}
        style={{ '--i': index % 12 }}
      >
        <span className="row__num">{String(index + 1).padStart(2, '0')}</span>

        <span className="row__title">{project.title}</span>

        <span className="row__meta">{project.category}</span>

        <span className="row__stack">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </span>

        <span className="row__end">
          {project.links?.length ? <span className="row__live">{ui.liveSite}</span> : null}
          <Icon name="arrowRight" size={15} strokeWidth={2} />
        </span>
      </button>
    </li>
  )
}
