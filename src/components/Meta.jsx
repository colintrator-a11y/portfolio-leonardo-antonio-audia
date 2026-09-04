import { useEffect, useState } from 'react'

import { sectionIds } from '../data/content'
import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import useScrollSpy from '../hooks/useScrollSpy'
import './Meta.css'

/**
 * The right rail: where you are, and what there is.
 *
 * The shell had a fixed column on the left and nothing on the right, which
 * left the page leaning. This fills it with the things a reader actually wants
 * within reach - how far through they are, how much work there is, and a way
 * to make contact - rather than with decoration.
 */
export default function Meta() {
  const { projects, stats, profile, ui } = useContent()
  const active = useScrollSpy(sectionIds)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const read = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    // Coalesced into a frame: scroll fires far more often than the screen
    // refreshes, and this sets React state.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    /*
     * The page grows as more projects load, which changes how far through it
     * you are without any scrolling happening. Watching the document height
     * keeps the bar honest between scroll events.
     */
    const grow = new ResizeObserver(onScroll)
    grow.observe(document.body)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      grow.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const here = sectionIds.indexOf(active)
  const linked = projects.items.filter((p) => p.links?.length).length

  return (
    <aside className="meta" aria-hidden="true">
      <div className="meta__now">
        <span className="meta__step">
          {String(Math.max(0, here) + 1).padStart(2, '0')}
          <i>/</i>
          {String(sectionIds.length).padStart(2, '0')}
        </span>
        <span className="meta__track">
          <i style={{ transform: `scaleY(${progress})` }} />
        </span>
      </div>

      <dl className="meta__figures">
        <div>
          <dt>{ui.projectWord}</dt>
          <dd>{projects.items.length}</dd>
        </div>
        <div>
          <dt>{ui.liveSite}</dt>
          <dd>{linked}</dd>
        </div>
        {stats?.[0] ? (
          <div>
            <dt>{stats[0].label}</dt>
            <dd>{stats[0].value}</dd>
          </div>
        ) : null}
      </dl>

      <a className="meta__contact" href={profile.workanaUrl} target="_blank" rel="noopener noreferrer">
        <span>{profile.location}</span>
        <Icon name="arrowRight" size={13} strokeWidth={2.2} />
      </a>
    </aside>
  )
}
