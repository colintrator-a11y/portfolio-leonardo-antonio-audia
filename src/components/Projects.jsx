import { examples, projects } from '../data/content'
import Icon from './ui/Icon'
import ProjectVisual from './ProjectVisual'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Projects.css'

/**
 * One project row. `badge` marks entries that are capability examples rather
 * than client deliveries, so the two can never be mistaken for each other.
 */
function ProjectRow({ project, index, label, badge, eager = false }) {
  return (
    <Reveal className={`project ${index % 2 === 1 ? 'project--flip' : ''}`.trim()}>
      <article className="card project__card">
        <div className="project__media">
          <div className="project__mediaFrame">
            {project.image ? (
              <img
                className="project__shot"
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                width={project.imageSize?.[0]}
                height={project.imageSize?.[1]}
              />
            ) : (
              <ProjectVisual variant={project.visual} title={project.title} />
            )}
          </div>
        </div>

        <div className="project__body">
          <span className="project__number">
            {label} {String(index + 1).padStart(2, '0')}
            <span className="project__category">{project.category}</span>
          </span>

          {badge ? <span className="project__badge">{badge}</span> : null}

          <h3 className="project__title">{project.title}</h3>
          <p className="project__overview">{project.overview}</p>

          <div className="project__block">
            <h4 className="project__label">Technologies Used</h4>
            <ul className="project__tech">
              {project.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="project__block">
            <h4 className="project__label">Key Features</h4>
            <ul className="project__features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={13} strokeWidth={2.4} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="project__value">
            <span className="project__valueIcon">
              <Icon name="spark" size={16} />
            </span>
            <div>
              <h4 className="project__label project__label--inline">Business Value</h4>
              <p>{project.value}</p>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          id="projects-title"
          eyebrow={projects.eyebrow}
          title={projects.heading}
          intro={projects.intro}
        />

        <div className="projects__list">
          {projects.items.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              label="Project"
              eager={index === 0}
            />
          ))}
        </div>

        <Reveal className="examples__head">
          <span className="eyebrow">{examples.eyebrow}</span>
          <h3 className="examples__title">{examples.heading}</h3>
          <p className="examples__intro">{examples.intro}</p>
        </Reveal>

        <div className="projects__list">
          {examples.items.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              label="Example"
              badge={examples.badge}
            />
          ))}
        </div>

        <Reveal className="examples__note">
          <Icon name="shield" size={16} />
          <span>{examples.note}</span>
        </Reveal>
      </div>
    </section>
  )
}
