import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Testimonials.css'

export default function Testimonials() {
  const { testimonials, profile, ui } = useContent()

  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHead
          id="testimonials-title"
          center
          eyebrow={testimonials.eyebrow}
          title={testimonials.heading}
          intro={testimonials.intro}
        />

        <div className="testimonials__layout">
          {testimonials.items.map((item, index) => (
            <Reveal as="figure" key={item.author} delay={index * 90} className="card testimonial">
              <Icon name="quote" size={30} className="testimonial__mark" />

              <blockquote className="testimonial__quote">{item.quote}</blockquote>

              {item.tech ? (
                <ul className="testimonial__tech">
                  {item.tech.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}

              <figcaption className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span className="testimonial__meta">
                  <strong>{item.author}</strong>
                  <small>{item.role}</small>
                </span>
                <span className="testimonial__location">
                  <Icon name="star" size={12} />
                  {item.location}
                </span>
              </figcaption>
            </Reveal>
          ))}

          <Reveal delay={120} className="card engagements">
            <h3 className="engagements__title">{ui.completedEngagements}</h3>
            <p className="engagements__intro">{testimonials.repeatNote}</p>

            <ul className="engagements__list">
              {testimonials.engagements.map((item) => (
                <li key={item.title} className="engagements__item">
                  <span className="engagements__rating">{item.rating}</span>
                  <span className="engagements__body">
                    <strong>{item.title}</strong>
                    <small>{`${ui.clientPrefix} ${item.client}`}</small>
                  </span>
                </li>
              ))}
            </ul>

            <a
              className="engagements__link"
              href={profile.workanaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.viewProfile}
              <Icon name="arrowRight" size={14} />
            </a>
          </Reveal>
        </div>

        <Reveal className="testimonials__note">
          <Icon name="shield" size={16} />
          <span>{testimonials.verifyNote}</span>
        </Reveal>
      </div>
    </section>
  )
}
