import About from './components/About'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import { useContent } from './i18n/LanguageContext'

export default function App() {
  const { ui } = useContent()

  return (
    <div className="app">
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop__grid" />
        <span className="backdrop__orb backdrop__orb--a" />
        <span className="backdrop__orb backdrop__orb--b" />
        <span className="backdrop__orb backdrop__orb--c" />
      </div>

      <a className="skip-link" href="#main">
        {ui.skipToContent}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
