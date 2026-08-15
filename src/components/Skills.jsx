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

        <Reveal className="verified">
          <div className="verified__head">
            <h3 className="verified__title">Recorded experience</h3>
            <p className="verified__note">As published on my Workana profile</p>
          </div>

          <table className="verified__table">
            <thead>
              <tr>
                <th scope="col">Skill</th>
                <th scope="col">Projects</th>
                <th scope="col">Experience</th>
              </tr>
            </thead>
            <tbody>
              {skills.verified.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  <td>{row.projects}</td>
                  <td>{row.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
