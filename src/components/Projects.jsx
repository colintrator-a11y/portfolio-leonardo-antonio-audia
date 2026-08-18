import { useCallback, useMemo, useState } from 'react'

import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Projects.css'

/**
 * Projects as a filterable grid of tiles, with the full record in a dialog.
 *
 * The section previously ran 22 full-width rows - every technology list,
 * feature list and value note stacked vertically, which was most of the page's
 * scroll. Tiles carry the image and enough text to choose from; the dialog
 * carries everything else, so nothing was cut to make the page shorter.
 *
 * One filter drives both grids. Delivered work and capability examples stay
 * separate lists, because conflating them would overstate the record.
 */
export default function Projects() {
  const { projects, examples, ui } = useContent()
  const [active, setActive] = useState('all')
  const [open, setOpen] = useState(null)

  const matches = useCallback(
    (list) => (active === 'all' ? list : list.filter((item) => item.discipline === active)),
    [active]
  )

  const shownProjects = useMemo(() => matches(projects.items), [matches, projects.items])
  const shownExamples = useMemo(() => matches(examples.items), [matches, examples.items])

  // Only offer a filter that would leave something on screen.
  const filters = useMemo(
    () =>
      projects.filters.filter(
        ({ key }) =>
          key === 'all' ||
          projects.items.some((item) => item.discipline === key) ||
          examples.items.some((item) => item.discipline === key)
      ),
    [projects.filters, projects.items, examples.items]
  )

  const close = useCallback(() => setOpen(null), [])

  return (
    <section className="section section--projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          id="projects-title"
          eyebrow={projects.eyebrow}
          title={projects.heading}
          intro={projects.intro}
        />

        <Reveal className="projects__filters" role="group" aria-label={ui.filterLabel}>
          {filters.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`filter ${active === key ? 'is-active' : ''}`.trim()}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
            >
              {label}
            </button>
          ))}
        </Reveal>

        {shownProjects.length ? (
          /* Keyed on the filter so the grid replays its entrance on every change. */
          <div className="projects__grid" key={`p-${active}`}>
            {shownProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                label={ui.projectWord}
                ui={ui}
                onOpen={(item) => setOpen({ item, label: ui.projectWord, index })}
                eager={index === 0}
              />
            ))}
          </div>
        ) : null}

        {shownExamples.length ? (
          <>
            <Reveal className="examples__head">
              <span className="eyebrow">{examples.eyebrow}</span>
              <h3 className="examples__title">{examples.heading}</h3>
              <p className="examples__intro">{examples.intro}</p>
            </Reveal>

            <div className="projects__grid" key={`e-${active}`}>
              {shownExamples.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  label={ui.exampleWord}
                  badge={examples.badge}
                  ui={ui}
                  onOpen={(item) =>
                    setOpen({ item, label: ui.exampleWord, index, badge: examples.badge })
                  }
                />
              ))}
            </div>
          </>
        ) : null}

        {!shownProjects.length && !shownExamples.length ? (
          <p className="projects__empty">{ui.noMatches}</p>
        ) : null}

        <Reveal className="examples__note">
          <Icon name="shield" size={16} />
          <span>{examples.note}</span>
        </Reveal>
      </div>

      {open ? (
        <ProjectDialog
          project={open.item}
          label={open.label}
          index={open.index}
          badge={open.badge}
          ui={ui}
          onClose={close}
        />
      ) : null}
    </section>
  )
}
