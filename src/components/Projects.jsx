import { useCallback, useMemo, useState } from 'react'

import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Projects.css'

/**
 * Every project in one filterable grid, with the full record in a dialog.
 *
 * Projects carry several tags rather than one discipline: a headless Shopify
 * storefront is Shopify work, front-end work and API work at once, and it
 * should appear under all three. A single bucket per project sent e-commerce
 * storefronts to a catch-all "web apps" filter where nobody would look.
 *
 * Client deliveries and reference builds sit in the same grid but reference
 * builds carry a marker, so a visitor is never led to read one as paid work.
 */
export default function Projects() {
  const { projects, ui } = useContent()
  const [active, setActive] = useState('all')
  const [open, setOpen] = useState(null)

  const shown = useMemo(
    () => (active === 'all' ? projects.items : projects.items.filter((i) => i.tags?.includes(active))),
    [active, projects.items]
  )

  // Counting here rather than in the data keeps the buttons honest: a filter
  // shows exactly what it will yield, and one that yields nothing is dropped.
  const filters = useMemo(
    () =>
      projects.filters
        .map(({ key, label }) => ({
          key,
          label,
          count: key === 'all' ? projects.items.length
                               : projects.items.filter((i) => i.tags?.includes(key)).length,
        }))
        .filter(({ count }) => count > 0),
    [projects.filters, projects.items]
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
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              type="button"
              className={`filter ${active === key ? 'is-active' : ''}`.trim()}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
            >
              {label}
              <span className="filter__count">{count}</span>
            </button>
          ))}
        </Reveal>

        {/* Keyed on the filter so the grid replays its entrance on every change. */}
        <div className="projects__grid" key={active}>
          {shown.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              label={project.reference ? ui.exampleWord : ui.projectWord}
              badge={project.badge}
              ui={ui}
              onOpen={(item) => setOpen({ item, index })}
              eager={index === 0}
            />
          ))}
        </div>

        {!shown.length ? <p className="projects__empty">{ui.noMatches}</p> : null}

        <Reveal className="examples__note">
          <Icon name="shield" size={16} />
          <span>{projects.note}</span>
        </Reveal>
      </div>

      {open ? (
        <ProjectDialog
          project={open.item}
          label={open.item.reference ? ui.exampleWord : ui.projectWord}
          index={open.index}
          badge={open.item.badge}
          ui={ui}
          onClose={close}
        />
      ) : null}
    </section>
  )
}
