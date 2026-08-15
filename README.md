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
public/                  robots.txt, sitemap.xml, favicons
src/
  main.jsx               entry point
  App.jsx                page composition + ambient background
  i18n/
    translations.js      ← ALL site copy, in English, Portuguese and Spanish
    LanguageContext.jsx  provider, detection and persistence
  data/content.js        shared assets + buildContent(lang)
  hooks/
    useReveal.js         IntersectionObserver scroll-reveal
    useScrollSpy.js      active-section tracking for the nav
  utils/
    scrollToSection.js   nav-offset aware smooth scrolling
  styles/global.css      design tokens, layout primitives, buttons, chips
  components/
    Navbar.jsx           sticky nav, scroll spy, mobile drawer
    LanguageSwitcher.jsx dropdown in the nav, button row in the drawer
    Hero.jsx             headline, CTAs, pillars, stat band
    HeroVisual.jsx       animated code-window mockup
    About.jsx            biography, highlights, profile card
    Services.jsx         six service cards
    Skills.jsx           six skill categories + recorded-experience table
    Projects.jsx         seven alternating project rows
    ProjectVisual.jsx    inline-SVG screenshot mockups (one scene per project)
    Process.jsx          six-step workflow
    Testimonials.jsx     verified review + completed engagements
    Footer.jsx           tagline, quick links, expertise
    BackToTop.jsx        floating scroll-to-top control
    ui/                  Icon, Reveal, SectionHead primitives
```

Each component keeps its styles in a sibling `.css` file, imported by the component.

## Languages

The site ships in **English, Portuguese and Spanish**. The switcher sits in the navigation (a
dropdown) and in the mobile drawer (a row of buttons). The chosen language is stored in
`localStorage`; a first-time visitor gets their browser's language if it is one of the three, and
English otherwise. Switching updates `<html lang>` so screen readers and search engines follow.

To add a language: append it to `languages` in `src/i18n/translations.js`, add a locale object with
the same shape as `en`, and the switcher picks it up automatically. Italian is the obvious next one.

## Editing content

Everything readable on the page — headline, biography, services, skills, projects, process steps,
testimonials, footer, and every UI label — comes from `src/i18n/translations.js`, one block per
language. Language-independent data (images, technology names, certifications, the Workana URL)
lives in `src/data/content.js`, which merges the two with `buildContent(lang)`.

### Content provenance

All content is grounded in the verified Workana profile:
<https://www.workana.com/freelancer/f9d69e5b850578f4e85687d42b23fbcf>

Taken directly from that profile: skills and their recorded experience levels, project titles and
technology stacks, certifications and scores, languages, the 5.0 client rating, the Italy #1 ranking,
and the written client review. Project overviews and feature lists are written from each project's
title and stack — they contain **no invented metrics or outcome figures**, because the profile
publishes none.

The "About me" text is the client's own English version, supplied directly. The skills table beyond
the first seven rows is still truncated behind a "View more" control on the profile.

### Before publishing

1. **Canonical URL** — `index.html`, `public/robots.txt` and `public/sitemap.xml` use
   `https://leonardoaudia.dev/`. Swap in the real domain.
2. **Workana links** — the About card and testimonials panel link to the Workana profile. Remove
   `profile.workanaUrl` references if you would rather the site carry no outbound link.

## Project screenshots

Six of the seven projects use the **real screenshots** published on the Workana portfolio, stored in
`src/assets/projects/` as WebP (resized to 1440px wide, quality 82 — 401 KB for all six). Each is
rendered at its own aspect ratio with `width`/`height` attributes set from `imageSize` in
`content.js`, so no layout shift occurs and nothing is cropped.

The seventh (the Pipefy protocols centre) has no published screenshot, so it falls back to an inline
SVG process diagram in `ProjectVisual.jsx`.

### Capability examples

Below the client work sits a separate **Capability examples** block (`examples` in `content.js`) with
three reference builds — a WhatsApp & Telegram chatbot, a customer support chatbot and a scheduled
Python data pipeline — added to demonstrate the Chatbot and Python skills on the profile, which have
no client project behind them.

All three are drawn as inline SVG in the interface each one would actually run in
(`ProjectVisual.jsx`): WhatsApp's green header, beige canvas and delivery ticks beside Telegram's
blue header, inline keyboard and status tracker; a support widget open over a live storefront; and a
dark editor showing real Python source with its terminal output. They are illustrations of each
build, **not** captured screenshots of a live deployment.

The portrait in `src/assets/avatar.webp` — the Workana profile photo with its teal ring masked off —
is the site's logo. It appears as the brand mark in the navigation, in the footer, in the About card,
and as the browser tab icon (`public/favicon.png`, `favicon-32.png`, `apple-touch-icon.png`, all
generated from the same file). Workana serves it at 192px maximum; drop a higher-resolution copy in
and regenerate if the mark is ever used larger.

These are **not** client deliveries and the site never presents them as such: they live under their
own heading, are numbered "Example 01/02" rather than "Project", each carries a dashed *Capability
example* badge, and a closing line states that every project above was delivered for a paying client.
Delete the `examples` export and its two blocks in `Projects.jsx` to remove them entirely. They stay crisp at any resolution, cost no network requests, and can be
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
