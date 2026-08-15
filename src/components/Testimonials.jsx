import { testimonials } from '../data/content'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Testimonials.css'

export default function Testimonials() {
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

        <div className="testimonials__grid">
          {testimonials.items.map((item, index) => (
            <Reveal
              as="figure"
              key={item.quote}
              delay={(index % 2) * 110}
              className="card testimonial"
            >
              <Icon name="quote" size={30} className="testimonial__mark" />

              <blockquote className="testimonial__quote">{item.quote}</blockquote>

              <figcaption className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span className="testimonial__meta">
                  <strong>{item.author}</strong>
                  <small>{item.role}</small>
                </span>
                <span className="testimonial__location">
                  <Icon name="globe" size={13} />
                  {item.location}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="testimonials__note">
          <Icon name="shield" size={16} />
          <span>
            Client identities are kept confidential in line with the privacy terms of each freelance
            engagement.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
