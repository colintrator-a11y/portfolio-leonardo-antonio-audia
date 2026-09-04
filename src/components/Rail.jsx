import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import useScrollSpy from '../hooks/useScrollSpy'
import { sectionIds } from '../data/content'
import './Rail.css'

/**
 * The left rail: identity, contents, controls.
 *
 * Fixed for the life of the page rather than a bar that appears and disappears
 * as you scroll. The name, the discipline and the way back to any section are
 * always on screen, which is what a portfolio is for - and it leaves the whole
 * right-hand column free for the work.
 *
 * Below the breakpoint it collapses to an ordinary top bar, because a fixed
 * rail on a phone is just a smaller screen.
 */
export default function Rail() {
  const { nav, profile, ui, hero } = useContent()
  const active = useScrollSpy(sectionIds)

  const go = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="rail">
      <a className="rail__brand" href="#home" onClick={go('home')}>
        <img className="rail__face" src={profile.avatar} alt="" width="52" height="52" />
        <span className="rail__name">{profile.name}</span>
        <span className="rail__role">{hero.tagline ?? profile.location}</span>
      </a>

      <nav className="rail__nav" aria-label={ui.primaryNav}>
        <ol>
          {nav.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={go(id)}
                className={`rail__link ${active === id ? 'is-active' : ''}`.trim()}
                aria-current={active === id ? 'true' : undefined}
              >
                <span className="rail__num">{String(i).padStart(2, '0')}</span>
                <span className="rail__label">{label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="rail__foot">
        <a className="rail__cta" href="#projects" onClick={go('projects')}>
          {ui.viewProjects ?? nav[1]?.label}
          <Icon name="arrowRight" size={14} strokeWidth={2.2} />
        </a>
        <div className="rail__controls">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
