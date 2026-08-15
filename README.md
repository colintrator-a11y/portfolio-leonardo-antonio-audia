# Leonardo Antonio Audia — Portfolio

Premium single-page portfolio for a Senior Full-Stack Developer, built with React 18 + Vite.

## Running it

Node.js 18+ is required. Verified against Node 24.19.0 LTS.

```bash
npm install
npm run dev      # local dev server on http://localhost:5173
npm run build    # production bundle in ./dist
npm run preview  # serve the production build locally
```

## Structure

```
index.html               SEO meta, Open Graph, JSON-LD Person schema, fonts
public/                  robots.txt, sitemap.xml
src/
  main.jsx               entry point
  App.jsx                page composition + ambient background
  data/content.js        ← ALL site copy lives here
  hooks/
    useReveal.js         IntersectionObserver scroll-reveal
    useScrollSpy.js      active-section tracking for the nav
  utils/
    scrollToSection.js   nav-offset aware smooth scrolling
  styles/global.css      design tokens, layout primitives, buttons, chips
  components/
    Navbar.jsx           sticky nav, scroll spy, mobile drawer
    Hero.jsx             headline, CTAs, pillars, stat band
    HeroVisual.jsx       animated code-window mockup
    About.jsx            biography, highlights, profile card
    Services.jsx         six service cards
    Skills.jsx           six skill categories
    Projects.jsx         six alternating project rows
    ProjectVisual.jsx    inline-SVG screenshot mockups (one scene per project)
    Process.jsx          six-step workflow
    Testimonials.jsx     client feedback
    Footer.jsx           tagline, quick links, expertise
    BackToTop.jsx        floating scroll-to-top control
    ui/                  Icon, Reveal, SectionHead primitives
```

Each component keeps its styles in a sibling `.css` file, imported by the component.

## Editing content

Everything readable on the page — headline, biography, services, skills, projects, process steps,
testimonials, footer — comes from `src/data/content.js`. No component edits are needed to change copy.

### Two things worth reviewing before publishing

1. **Testimonials** (`testimonials.items`) are written as representative placeholder copy with
   role/region attributions rather than invented client names. Replace them with real Workana
   feedback before the site goes live.
2. **Canonical URL** — `index.html`, `public/robots.txt` and `public/sitemap.xml` use
   `https://leonardoaudia.dev/`. Swap in the real domain.

## Project screenshots

The project "screenshots" are hand-drawn inline SVG interface mockups (`ProjectVisual.jsx`) — a
chatbot console, an e-commerce catalogue, a delivery app, a live map, an API reference and an
automation workflow. They stay crisp at any resolution, cost no network requests, and can be
swapped for real screenshots by replacing `<ProjectVisual />` in `Projects.jsx` with an `<img>`.

## Design system

Light editorial: warm off-white paper (`#faf9f6`), deep navy ink (`#0d1b30`), a single blue accent
(`#1d4ed8`), Source Serif 4 for display headings and Inter for UI text. Structure is drawn with
hairline rules rather than boxes — the services grid and process steps are flush matrices, and
project rows are separated by a single rule. Two solid ink fields anchor the page: the hero code
window and the footer. Every colour, radius, shadow and font is a custom property in
`src/styles/global.css`, so the whole palette can be retuned from one place.

## Notes on the build

- **Performance** — no UI/animation/icon libraries; React + ReactDOM are the only dependencies.
  Icons are inline SVG, visuals are inline SVG, fonts load with `display=swap`.
- **SEO** — descriptive title/description/keywords, canonical, Open Graph, Twitter cards,
  JSON-LD `Person` schema, semantic landmarks, one `<h1>`, `aria-labelledby` on every section.
- **Accessibility** — skip link, visible focus rings, labelled controls, `prefers-reduced-motion`
  disables animations and smooth scrolling.
- **Responsive** — mobile-first, fluid `clamp()` type, breakpoints at 600 / 680 / 900 / 1024 / 1140px.

As requested, the site contains no contact page, no contact form, no demo links and no pricing section.
