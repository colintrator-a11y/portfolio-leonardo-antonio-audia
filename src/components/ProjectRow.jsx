import Icon from './ui/Icon'
import ProjectVisual from './ProjectVisual'

/**
 * One line of the index.
 *
 * A row, not a card: number, thumbnail, title, discipline, stack, and a mark
 * for work you can open. Seventy-two of these read as a body of work; seventy-
 * two cards read as a search result. The thumbnail is small on purpose - it
 * identifies the project without turning the list back into a grid.
 */
export default function ProjectRow({ project, index, ui, onOpen }) {
  return (
    <li className="row">
      <button
        type="button"
        className="row__hit"
        onClick={() => onOpen(project)}
        style={{ '--i': index % 12 }}
      >
        <span className="row__num">{String(index + 1).padStart(2, '0')}</span>

        <span className="row__thumb">
          {project.image ? (
            <img src={project.image} alt="" loading="lazy" decoding="async" width="1280" height="800" />
          ) : (
            <ProjectVisual variant={project.visual} title={project.title} fit="slice" />
          )}
        </span>

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
