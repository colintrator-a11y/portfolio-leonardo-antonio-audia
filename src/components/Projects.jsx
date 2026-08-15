import { projects } from '../data/content'
import Icon from './ui/Icon'
import ProjectVisual from './ProjectVisual'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Projects.css'

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
            <Reveal
              key={project.id}
              className={`project ${index % 2 === 1 ? 'project--flip' : ''}`.trim()}
            >
              <article className="card project__card">
                <div className="project__media">
                  <div className="project__mediaFrame">
                    <ProjectVisual variant={project.visual} title={project.title} />
                  </div>
                  <span className="project__category">{project.category}</span>
                </div>

                <div className="project__body">
                  <span className="project__number">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
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
          ))}
        </div>
      </div>
    </section>
  )
}
