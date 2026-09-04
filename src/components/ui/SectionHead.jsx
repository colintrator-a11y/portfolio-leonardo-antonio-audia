import Reveal from './Reveal'

/**
 * The section opener.
 *
 * Laid out as a spread rather than a stack: an index number and label sit in a
 * narrow left column against a rule, and the heading and intro take the wide
 * one. It reads as a chapter opening instead of a centred title, which is what
 * every other portfolio does.
 */
export default function SectionHead({ eyebrow, title, intro, index, id }) {
  return (
    <Reveal className="opener">
      <div className="opener__mark">
        {index ? (
          <span className="opener__index" aria-hidden="true">
            {String(index).padStart(2, '0')}
          </span>
        ) : null}
        {eyebrow ? <span className="opener__label">{eyebrow}</span> : null}
      </div>

      <div className="opener__body">
        <h2 className="opener__title" id={id}>
          {title}
        </h2>
        {intro ? <p className="opener__intro">{intro}</p> : null}
      </div>
    </Reveal>
  )
}
