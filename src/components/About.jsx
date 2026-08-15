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

              <div className="about__block">
                <h4 className="about__blockTitle">Certifications</h4>
                <ul className="about__certs">
                  {about.certifications.map((cert) => (
                    <li key={cert.name}>
                      <span>{cert.name}</span>
                      <strong>{cert.score}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about__block">
                <h4 className="about__blockTitle">Languages</h4>
                <ul className="about__langs">
                  {about.languages.map((lang) => (
                    <li key={lang.name}>
                      <strong>{lang.name}</strong>
                      <span>{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className="about__note"
                href={profile.workanaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="globe" size={17} />
                <span>
                  Verified Workana profile — 5.0 rating, Silver level, ranked #1 in Italy for IT &amp;
                  Programming.
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
