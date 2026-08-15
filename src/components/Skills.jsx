import { skills } from '../data/content'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          id="skills-title"
          center
          eyebrow={skills.eyebrow}
          title={skills.heading}
          intro={skills.intro}
        />

        <div className="skills__grid">
          {skills.categories.map((category, index) => (
            <Reveal key={category.name} delay={(index % 3) * 90} className="card skillCard">
              <div className="skillCard__head">
                <span className="skillCard__icon">
                  <Icon name={category.icon} size={21} />
                </span>
                <div>
                  <h3 className="skillCard__name">{category.name}</h3>
                  <p className="skillCard__caption">{category.caption}</p>
                </div>
              </div>

              <ul className="skillCard__items">
                {category.items.map((item, i) => (
                  <li key={item} className="chip skillCard__chip" style={{ '--i': i }}>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="skillCard__bar" aria-hidden="true">
                <i />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
