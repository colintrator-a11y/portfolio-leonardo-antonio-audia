import { about, profile } from '../data/content'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './About.css'

export default function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" eyebrow={about.eyebrow} title={about.heading} />

        <div className="about__grid">
          <div className="about__main">
            {about.paragraphs.map((text, index) => (
              <Reveal as="p" key={index} delay={index * 80} className="about__paragraph">
                {text}
              </Reveal>
            ))}

            <div className="about__highlights">
              {about.highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 90} className="about__highlight">
                  <span className="about__highlightIcon">
                    <Icon name="check" size={15} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="about__aside" delay={120}>
            <div className="card about__card">
              <div className="about__identity">
                <span className="about__avatar" aria-hidden="true">
                  {profile.monogram}
                </span>
                <div>
                  <h3 className="about__name">{profile.name}</h3>
                  <p className="about__title">{profile.title}</p>
                </div>
              </div>

              <dl className="about__facts">
                {about.facts.map((fact) => (
                  <div className="about__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="about__note">
                <Icon name="globe" size={17} />
                <span>
                  Freelance engagements delivered for international clients, including through
                  Workana.com.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
