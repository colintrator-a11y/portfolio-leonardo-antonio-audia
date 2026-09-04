/**
 * Every translatable string on the site, keyed by locale.
 *
 * Language-independent data — images, technology names, certification titles,
 * the Workana URL — lives in `src/data/content.js` and is merged in by
 * `buildContent()`. Nothing here should contain an asset import.
 *
 * Deliberately NOT translated:
 *  - the published client review, which is quoted in the language the client
 *    wrote it in;
 *  - the two Pipefy engagement titles, which are the titles as recorded on
 *    Workana in Portuguese;
 *  - certification names, which are the official test titles.
 */

export const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'es', label: 'Español', short: 'ES' },
]

export const defaultLanguage = 'en'

/* ========================================================================== */
/*  ENGLISH                                                                    */
/* ========================================================================== */

const en = {
  htmlLang: 'en',
  ui: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    mobileNav: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    languageLabel: 'Language',
    chooseLanguage: 'Choose a language',
    filters: {
      all: 'All work',
      ecommerce: 'E-commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP & Laravel',
      mobile: 'Mobile',
      frontend: 'Front-end',
      api: 'APIs & Integrations',
      chatbot: 'Chatbots',
      automation: 'Automation',
    },
    viewDetails: 'View details',
    seeItLive: 'See it live',
    liveSite: 'Live site',
    viewLive: 'View project',
    loadMore: 'Load more',
    switchToLight: 'Switch to the light theme',
    switchToDark: 'Switch to the dark theme',
    closeDetails: 'Close',
    noMatches: 'Nothing in this category yet.',
    filterLabel: 'Filter projects by discipline',
    technologiesUsed: 'Technologies Used',
    keyFeatures: 'Key Features',
    businessValue: 'Business Value',
    projectWord: 'Project',
    exampleWord: 'Example',
    certifications: 'Certifications',
    languagesTitle: 'Languages',
    completedEngagements: 'Completed engagements',
    clientPrefix: 'Client',
    viewProfile: 'View the verified profile',
    workanaNote:
      'Verified Workana profile — 5.0 rating, Silver level, ranked #1 in Italy for IT & Programming.',
    rightsReserved: 'All rights reserved.',
    builtWith: 'Designed & developed with React — engineered for performance and accessibility.',
  },
  profileTitle: 'Senior Full-Stack Developer | Web, Mobile & E-Commerce',
  navRole: 'Senior Full-Stack Developer',
  tagline: 'Senior Full-Stack Developer creating reliable, scalable, and innovative digital solutions.',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    skills: 'Skills',
    projects: 'Projects',
    process: 'Process',
  },
  hero: {
    badge: 'Ranked #1 in IT & Programming in Italy on Workana',
    headline: 'Building Scalable Web, Mobile & E-Commerce Solutions for Modern Businesses',
    headlineAccent: 'E-Commerce Solutions',
    intro:
      'I am Leonardo Antonio Audia, a full-stack developer based in Italy. I build websites and web and mobile applications that genuinely work well — fast, clear and easy to use on any screen. Working independently since 2013, I have delivered e-commerce platforms, mobile applications, responsive business sites and internal process automation for clients across several industries and countries.',
    primaryCta: 'View Projects',
    secondaryCta: 'Explore My Expertise',
    stats: [
      'Years of Experience',
      'Client Rating on Workana',
      'In Italy · IT & Programming',
      'Languages Spoken',
    ],
    pillars: ['Full-Stack', 'Mobile', 'E-Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'About Me',
    heading: 'The technical part is rarely the hard part',
    paragraphs: [
      "Hi, I'm Leonardo Antonio. I build web and mobile applications that actually work well — fast, clear, and easy to use on any screen.",
      'I work mainly with React.js, Next.js and Node.js for custom platforms, and with WordPress and WooCommerce when a client needs to manage their own content without depending on a developer. I also build mobile apps for Android and iOS with React Native, plus API integrations and chatbots.',
      'Over 10 years of building digital products taught me that the technical part is rarely the hard part. The hard part is understanding what the business needs before writing code, and speaking up early when something won’t work the way it’s expected to. That’s why I work with constant communication, visible progress throughout, and fast revisions.',
      'If you have a project in mind, tell me what you want to achieve and I’ll give you an honest view of how I’d approach it.',
    ],
    highlights: [
      ['Independent Since 2013', 'More than a decade delivering web and mobile applications as a self-employed developer.'],
      ['Communication First', 'Clear updates and screenshots at every stage, with fast and accurate revisions.'],
      ['Multilingual Delivery', 'Italian, English, Portuguese and Spanish — remote collaboration without a language barrier.'],
      ['Responsive by Default', 'Every interface built to stay fast, clear and usable on any screen size.'],
    ],
    facts: [
      ['Based in', 'Italy'],
      ['Experience', '10+ Years · Since 2013'],
      ['Rating', '5.0 ★ on Workana'],
      ['Ranking', '#1 in Italy · IT & Programming'],
      ['Focus', 'Web · Mobile · E-Commerce'],
      ['Delivery', 'Remote, Worldwide'],
    ],
    languageLevels: ['Native or bilingual', 'Advanced', 'Intermediate', 'Intermediate'],
    languageNames: ['Italian', 'English', 'Portuguese', 'Spanish'],
  },
  services: {
    eyebrow: 'Services',
    heading: 'What I build for clients',
    intro:
      'Six capabilities drawn from the work I actually deliver — from a responsive business site to a full e-commerce platform with its own API layer.',
    items: [
      {
        title: 'Full-Stack Web Development',
        summary: 'Building scalable and maintainable web platforms.',
        description:
          'Complete web applications with React.js or Next.js on the front end and Node.js, Nest.js or PHP behind it — structured for performance and long-term maintenance.',
        points: ['React.js & Next.js front-ends', 'Node.js & Nest.js services', 'TypeScript codebases'],
      },
      {
        title: 'E-Commerce Development',
        summary: 'Storefronts built to sell and easy to run.',
        description:
          'Custom storefronts and multi-brand retail platforms, plus WordPress and WooCommerce builds — catalogue, cart, checkout and an admin your team can actually operate.',
        points: ['Custom storefronts', 'WooCommerce & WordPress', 'Multi-brand catalogues'],
      },
      {
        title: 'Mobile Application Development',
        summary: 'Cross-platform apps that feel native.',
        description:
          'Mobile applications for Android and iOS built with React Native, plus Flutter and Windows Mobile work and mobile app design — delivered as one codebase across devices.',
        points: ['Android & iOS with React Native', 'Flutter & Windows Mobile', 'Mobile app design'],
      },
      {
        title: 'REST API Development & Integration',
        summary: 'Creating secure and efficient backend services.',
        description:
          'REST APIs and web services built with Node.js and Nest.js, plus reliable integration of the third-party platforms and internal systems a business already depends on.',
        points: ['REST API design', 'Third-party integrations', 'Internal system connections'],
      },
      {
        title: 'Responsive Web Design & Landing Pages',
        summary: 'Fast, clear interfaces on every screen.',
        description:
          'Modern responsive sites and landing pages built in HTML, CSS and JavaScript — clean, quick to load and correct from mobile through to desktop.',
        points: ['Mobile-first layouts', 'Landing page development', 'Cross-device correctness'],
      },
      {
        title: 'Chatbots & Process Automation',
        summary: 'Removing repetitive work from the day.',
        description:
          'Chatbot development and workflow automation with Python and REST integrations — including internal process platforms that replace manual, spreadsheet-driven routines.',
        points: ['Chatbot development', 'Workflow automation', 'Python scripting & integrations'],
      },
    ],
  },
  skills: {
    eyebrow: 'Technical Skills',
    heading: 'The stack behind the solutions',
    intro:
      'Every technology listed here appears on my verified Workana profile.',
    categories: [
      ['Frontend', 'Interfaces that stay fast and clear on any screen.'],
      ['Backend', 'Server-side services and the APIs on top of them.'],
      ['Mobile', 'Cross-platform delivery from a single codebase.'],
      ['E-Commerce', 'Storefronts, catalogues and the systems behind them.'],
      ['Responsive & UI', 'The discipline behind every layout I ship.'],
      ['Automation', 'Chatbots and workflows that cut manual effort.'],
    ],
  },
  projects: {
    eyebrow: 'Selected Work',
    heading: 'Projects across web, mobile and e-commerce',
    intro:
      'Client deliveries from my Workana portfolio alongside my own reference builds, filtered by discipline. Each entry lists the technologies actually used; reference builds are marked as such.',
    items: {
      'premium-fashion': {
        category: 'E-Commerce',
        title: 'Premium Fashion E-Commerce Website Development',
        overview:
          'A premium fashion storefront built as a custom React.js front end on a Node.js back end — product catalogue, collection browsing, cart and checkout, with the visual polish a fashion brand needs and the load speed a shopper expects.',
        features: [
          'Custom React.js storefront and collection pages',
          'Node.js back end serving catalogue and orders',
          'Cart and checkout flow',
          'Responsive layouts from mobile to desktop',
        ],
        value:
          'Gives the brand a storefront it fully owns — presentation matched to the product, and a codebase that can grow with the catalogue rather than fight it.',
      },
      'modular-furniture': {
        category: 'E-Commerce',
        title: 'Modern Modular Furniture E-Commerce Platform',
        overview:
          'An e-commerce platform for modular furniture, where a single product is really a set of configurable options. The React.js front end handles configuration and variant selection while Node.js keeps pricing and availability consistent.',
        features: [
          'Configurable product and variant selection',
          'Product detail pages with live option pricing',
          'Node.js services for catalogue and stock',
          'Cart built around configured items',
        ],
        value:
          'Lets customers assemble and price their own configuration online, so the sales team is no longer the bottleneck for every quote.',
      },
      'multi-brand': {
        category: 'Platform & API',
        title: 'Multi-Brand Fashion E-Commerce Platform',
        overview:
          'A multi-brand retail platform built on AngularJS with a Nest.js back end — several brands running on shared infrastructure, each with its own catalogue, served through one structured API layer.',
        features: [
          'Nest.js API serving multiple brand storefronts',
          'Shared catalogue and order infrastructure',
          'AngularJS administration interface',
          'Structured, documented endpoints',
        ],
        value:
          'One platform to maintain instead of several, so adding a brand is a configuration exercise rather than a new build.',
      },
      'fitness-platform': {
        category: 'Mobile Application',
        title: 'Sports Coaching & Fitness Mobile Platform',
        overview:
          'A cross-platform mobile application for sports coaching, connecting coaches and athletes around training plans and session tracking. Built in React Native, with the mobile app design produced as part of the same engagement.',
        features: [
          'Training plans and session tracking',
          'Coach and athlete views in one app',
          'Progress history and activity feedback',
          'Interface designed for one-handed use during training',
        ],
        value:
          'Moves coaching off spreadsheets and messaging apps, giving coaches a single place to run programmes and athletes a clear view of what to do next.',
      },
      'apex-logistics': {
        category: 'Web Application',
        title: 'Apex Logistics',
        overview:
          'An internal operations dashboard built with React.js and TypeScript, bringing active projects, tasks, deadlines, documents and invoicing into a single workspace so a team can see the state of everything it is running at a glance.',
        features: [
          'Project overview with status, progress and deadlines',
          'Task lists and an upcoming calendar in one view',
          'Activity charts and document management',
          'TypeScript codebase for long-term safety',
        ],
        value:
          'Replaces scattered spreadsheets and separate tools with one workspace, so the state of every project is visible without chasing an update.',
      },
      'lumina-studio': {
        category: 'Web Platform',
        title: 'Lumina Studio',
        overview:
          'A studio website built with Next.js and CSS3 — a fast, modern presence with server-rendered pages, considered typography and a layout that carries the studio’s work rather than competing with it.',
        features: [
          'Next.js server-rendered pages',
          'Work and case study presentation',
          'Hand-written CSS3 layouts and motion',
          'Performance and SEO oriented build',
        ],
        value:
          'A site that loads immediately and presents the studio’s work cleanly — the first impression a creative business is judged on.',
      },
      'pipefy-protocols': {
        category: 'Process Automation',
        title: 'Internal Protocols Centre on Pipefy',
        overview:
          'An internal protocols centre implemented on Pipefy for a pharmaceutical distributor, replacing an informal manual routine with a structured, trackable process. Delivered in two phases for the same client.',
        features: [
          'Structured intake and routing of internal protocols',
          'Defined stages with clear ownership at each step',
          'Automated movement between process phases',
          'Delivered across two project phases',
        ],
        value:
          'Gives the distributor one trackable route for internal protocols, so nothing depends on remembering an informal process.',
      },
      'keyzar-jewelry': {
        category: 'Shopify · Jewellery',
        title: 'Keyzar Jewelry Storefront',
        overview:
          'A Shopify storefront for a fine-jewellery brand selling engagement rings, wedding bands and lab-grown diamonds, with an assistant on the page to answer the questions buyers ask before a purchase this size.',
        features: [
          'Ring, band and diamond catalogues with guided browsing',
          'Education pages covering cut, carat and setting',
          'On-site chatbot handling sizing and delivery questions',
          'Consultation booking for high-value orders',
        ],
        value: 'A purchase people research for weeks, answered on the page instead of by email.',
      },
      'instalador-portas': {
        category: 'Shopify · Trade Services',
        title: 'Instalador de Portas Service Site',
        overview:
          'A site for a door-installation firm working across the east, west, north and south of Sao Paulo and the ABC region, built to turn a visit into a quote request rather than a phone call.',
        features: [
          'Service areas and installation types laid out plainly',
          'Quote request reachable from every section',
          'Chatbot qualifying jobs before a human replies',
          'Completed-installation count as proof of volume',
        ],
        value: 'A trade business that books work from the page, at any hour.',
      },
      'rembrr-app': {
        category: 'Product Site · SaaS',
        title: 'Rembrr Reminder Assistant',
        overview:
          'The product site for an assistant that organises reminders, tasks and calendar entries from plain speech, presented in Spanish with a free trial as the single call to action.',
        features: [
          'Product tour built around the spoken-input idea',
          'Plans and trial signup on one page',
          'Assistant answering feature questions in-page',
          'Multilingual copy for a Spanish-speaking market',
        ],
        value: 'A product explained in the words its users would use, not in feature lists.',
      },
      'dawson-home-care': {
        category: 'Shopify · Healthcare',
        title: 'Dawson & Dawson Home Care',
        overview:
          'A site for an in-home care provider operating since 2002, written for families making a decision under pressure: services, licensing and availability visible without a form in the way.',
        features: [
          'Services and care types explained without jargon',
          'Licensing, insurance and 24/7 availability stated up front',
          'Free care assessment as the primary action',
          'Chatbot answering eligibility and coverage questions',
        ],
        value: 'A family can find what they need at midnight, which is often when they look.',
      },
      'dentalis': {
        category: 'Shopify · Dental',
        title: 'Dentalis Practice Platform',
        overview:
          'A site for a dental practice management product, promising round-the-clock automated administration so a clinic can attend to patients rather than to its diary, with WhatsApp as the route into a conversation.',
        features: [
          'Product positioning built around automated scheduling',
          'Practice results presented as figures, not adjectives',
          'WhatsApp handover from any page',
          'Content and blog structure for ongoing search traffic',
        ],
        value: 'Clinics start the conversation on the channel they already use all day.',
      },
      'elevar-empilhadeiras': {
        category: 'Shopify · Industrial',
        title: 'Elevar Forklift Rental',
        overview:
          'A site for a forklift rental business in Caxias do Sul, built loud and direct for an industrial buyer who wants the machine, the terms and a person on WhatsApp, in that order.',
        features: [
          'Fleet and rental terms presented without a catalogue to dig through',
          'High-contrast layout that reads on a warehouse phone',
          'WhatsApp enquiry fixed to the screen',
          'Service coverage stated by region',
        ],
        value: 'An enquiry takes one tap from a shop floor, where nobody fills in forms.',
      },
      'cda-metais': {
        category: 'Shopify · Manufacturing',
        title: 'CDA Metais Aluminium Systems',
        overview:
          'A site for an aluminium systems manufacturer covering frames, facades, extrusion, electrostatic painting and nationwide distribution, led by the buildings the work ends up in.',
        features: [
          'Completed facades carrying the case for the product',
          'Capabilities split by extrusion, painting and distribution',
          'Project gallery as the primary proof',
          'WhatsApp route for specification enquiries',
        ],
        value: 'A manufacturer judged on finished buildings rather than on a spec sheet.',
      },
      'tools4trade': {
        category: 'Shopify · Tools Retail',
        title: 'Tools4Trade Online Store',
        overview:
          'A UK trade-tools store carrying power tools, storage, safety wear and workwear, organised so a tradesperson can find a part by category, brand or number without leaving the header.',
        features: [
          'Search by category, brand or part number from the header',
          'Promotional rails for bundles, giveaways and clearance',
          'Brand-led navigation across a deep catalogue',
          'WhatsApp enquiry for stock and trade pricing',
        ],
        value: 'A deep catalogue that still answers a one-part question in seconds.',
      },
      'xelan-wheelchairs': {
        category: 'Shopify · Mobility',
        title: 'Xe Lan Hoang Son Wheelchair Store',
        overview:
          'A Vietnamese storefront selling manual, electric and specialist wheelchairs, where the buyer is usually a family member comparing models on price, weight and folding size.',
        features: [
          'Wheelchair types split by manual, electric and specialist',
          'Prices and discounts shown on every card',
          'Product comparison by weight, width and folding size',
          'Phone and messaging contact fixed to the page',
        ],
        value: 'A category bought once, in a hurry, made comparable at a glance.',
      },
      'breck-and-fox': {
        category: 'Shopify · Home & Decor',
        title: 'Breck + Fox Home Store',
        overview:
          'A home store spanning lighting, outdoor, decor, kitchen, dining and bath, where the shelf is photographed as a room rather than as a product grid.',
        features: [
          'Room photography leading each collection',
          'Six departments under one navigation',
          'Seasonal sale rails without breaking the look',
          'Cart and search reachable from every page',
        ],
        value: 'Furniture sold the way it is chosen: in a room, not on a shelf.',
      },
      'garnet-marketplace': {
        category: 'Shopify · Marketplace',
        title: 'Garnet Multi-Vendor Marketplace',
        overview:
          'The product site for a Shopify app that turns a single store into a multi-vendor B2B and B2C marketplace, aimed at merchants who need vendor onboarding to be somebody else\'s problem.',
        features: [
          'Positioning for B2B and B2C marketplaces on one platform',
          'Vendor onboarding presented as the differentiator',
          'Documentation and pricing reachable from the header',
          'Scaling roadmap explained as a walkthrough',
        ],
        value: 'A store becomes a marketplace without becoming a platform project.',
      },
      'lumenwild-fine-art': {
        category: 'Shopify · Fine Art',
        title: 'Lumenwild Fine Art Gallery',
        overview:
          'A gallery storefront for landscape and nature photography, given the restraint the work needs: full-width imagery, thin type and almost no interface between the visitor and the picture.',
        features: [
          'Full-bleed gallery with minimal chrome',
          'Print sizes and finishes chosen on the product page',
          'Story pages about the work and the process',
          'Quiet navigation that stays out of the image',
        ],
        value: 'Photography sold the way a gallery hangs it, not the way a catalogue lists it.',
      },
      'velocitek-prostart': {
        category: 'Shopify · Marine Instruments',
        title: 'Velocitek ProStart Product Page',
        overview:
          'A single-product page for a sailing race timer, written for a buyer who already knows the category and wants latency, mounting and what is in the box before anything else.',
        features: [
          'Specification led rather than lifestyle led',
          'What is in the box stated before the buy button',
          'Manufacturing origin and lead time disclosed',
          'Support and manual linked from the page',
        ],
        value: 'A technical buyer gets the specification first and the marketing never.',
      },
      'daphnes-headcovers': {
        category: 'Shopify · Golf Accessories',
        title: 'Daphne\'s Headcovers Store',
        overview:
          'A storefront for hand-crafted golf headcovers made since 1988, where the product is a character and the catalogue is browsed the way a toy shop is.',
        features: [
          'Shop by animal, character and licence',
          'Best sellers and new arrivals on the front page',
          'Craft story carried alongside the catalogue',
          'Review count shown as social proof',
        ],
        value: 'A gift bought on delight, presented so the delight survives the checkout.',
      },
      'conscious-ink': {
        category: 'Shopify · Lifestyle',
        title: 'Conscious Ink Temporary Tattoos',
        overview:
          'A store selling affirmation temporary tattoos, where the product is a sentence somebody wants to read on their own skin, so the copy carries as much weight as the photography.',
        features: [
          'Message-led product cards rather than SKU-led',
          'Customer quotes used as the main proof',
          'Bundles and gift sets as the upsell path',
          'Free shipping threshold stated in the header',
        ],
        value: 'A product whose value is the wording, merchandised on the wording.',
      },
      'wildfang': {
        category: 'Shopify · Apparel',
        title: 'Wildfang Apparel Store',
        overview:
          'An apparel storefront with a clear point of view, carrying suiting, workwear and everyday pieces, shot on real people and organised so the brand reads before the catalogue does.',
        features: [
          'Editorial imagery ahead of the product grid',
          'Shop by category with suiting and workwear split out',
          'Sale and new arrivals without diluting the brand',
          'Size and fit guidance on the product page',
        ],
        value: 'A brand people buy into, given room to be a brand before it is a shop.',
      },
      'video-milkshake': {
        category: 'Shopify · Digital Goods',
        title: 'Video Milkshake Asset Store',
        overview:
          'A store selling film mattes, textures and editing assets as downloads, where every product has to be shown moving before anyone can judge whether it is worth buying.',
        features: [
          'Preview-led cards for assets that must be seen in motion',
          'Assets grouped by category and by bundle',
          'Instant download delivery after checkout',
          'Bundle pricing set against single-asset pricing',
        ],
        value: 'Digital goods that sell on the preview, merchandised around the preview.',
      },
      'miro-tea': {
        category: 'Shopify · Food & Drink',
        title: 'Miro Tea Online Shop',
        overview:
          'The online shop for a Seattle tea house selling single-estate leaf, blends and teaware, where a loose tea has to be described well enough that somebody buys it without smelling it.',
        features: [
          'Leaf photographed individually rather than in packaging',
          'Collections by caffeine level, season and origin',
          'Teaware carried alongside the leaf',
          'Tasting notes as the core of each product page',
        ],
        value: 'A shop counter\'s knowledge written down, so the leaf sells at a distance.',
      },
      'take-care-shop': {
        category: 'Shopify · Beauty & Wellness',
        title: 'Take Care Beauty & Wellness',
        overview:
          'A Washington DC beauty and wellness shop selling face, body, hair and wellness ranges, with a soft palette and a front page that has carried both launches and a closing sale.',
        features: [
          'Departments split across face, body, hair and wellness',
          'Brand directory alongside category browsing',
          'Front page able to carry campaign messaging',
          'Gift and bundle routes through the catalogue',
        ],
        value: 'A curated shop whose front page can change its message without a rebuild.',
      },
      'illumivein': {
        category: 'Shopify · Medical Device',
        title: 'Illumivein Vein Finder Store',
        overview:
          'A single-device store for a handheld vein finder sold to nurses, phlebotomists and paramedics, where the buying decision rests on whether it works in the room they work in.',
        features: [
          'Demonstration imagery showing the device in use',
          'Regulatory and battery details stated plainly',
          'Single price, single decision, no configurator',
          'Guarantee and return terms beside the buy button',
        ],
        value: 'A clinical tool sold on evidence rather than on adjectives.',
      },
      'perricone-md': {
        category: 'Shopify · Skincare',
        title: 'Perricone MD Skincare Store',
        overview:
          'A skincare storefront with a deep catalogue across shop, best sellers, offers and clearance, carrying promotional messaging without letting it bury the routine a customer came to rebuild.',
        features: [
          'Catalogue split by shop, best sellers, offers and clearance',
          'Promotional bars for seasonal sales and codes',
          'Loyalty and email capture woven into the header',
          'Routine-led browsing across concern and product type',
        ],
        value: 'A large catalogue that still leads a returning customer back to their routine.',
      },
      'hisense-bolivia': {
        category: 'Shopify · Consumer Electronics',
        title: 'Hisense Bolivia Storefront',
        overview:
          'A regional storefront for a consumer electronics brand covering televisions, refrigerators, washing machines and air conditioning, carrying global campaign creative into a local catalogue.',
        features: [
          'Campaign creative running across the front page',
          'Categories split by television, refrigeration and climate',
          'Specifications comparable within a category',
          'Local availability and dealer information',
        ],
        value: 'A global brand presented locally without losing the campaign it arrived with.',
      },
      'troubadour-goods': {
        category: 'Shopify · Bags & Leather',
        title: 'Troubadour Goods Store',
        overview:
          'A storefront for technical bags and leather goods, shot in motion on city streets, where the case for a bag is made by showing it carried rather than photographed flat.',
        features: [
          'Lifestyle film and photography leading the catalogue',
          'Collections by travel, work and everyday',
          'Award and press marks used as proof',
          'Material and warranty detail on the product page',
        ],
        value: 'A considered purchase argued in use, not in a product shot.',
      },
      'velodrome-shop': {
        category: 'WordPress · Cycling Retail',
        title: 'Velodrome Track Cycling Shop',
        overview:
          'A shop for track cycling equipment - frames, wheels, gearing, cockpit and tools - built for a sport where parts have to match a discipline before they matter at all.',
        features: [
          'Catalogue organised by track discipline and part type',
          'Gearing and component compatibility surfaced early',
          'Quick order route for riders who know the part',
          'Editorial imagery from the track itself',
        ],
        value: 'A specialist catalogue that respects how specialists actually shop.',
      },
      'belay-solutions': {
        category: 'WordPress · Staffing',
        title: 'BELAY Solutions Website',
        overview:
          'A site for a company placing US-based assistants and bookkeepers with businesses, where the visitor is weighing a hire against a service and needs the difference made obvious.',
        features: [
          'Assistant and financial services split into their own paths',
          'Pricing framed against the cost of a full-time hire',
          'Request-pricing flow rather than a public price list',
          'Resource library feeding organic search',
        ],
        value: 'A service sold against the alternative the buyer is already considering.',
      },
      'webfx': {
        category: 'WordPress · Marketing Agency',
        title: 'WebFX Agency Website',
        overview:
          'A large agency site spanning SEO, paid media, CRO and web services, where the argument is revenue rather than traffic and the proof has to be visible before the contact form.',
        features: [
          'Services split across search, paid, CRO and UX',
          'Revenue figures and client counts as the opening claim',
          'Proposal request reachable from every page',
          'Deep resource and glossary content for search',
        ],
        value: 'An agency judged on revenue proof, with the proof placed before the pitch.',
      },
      'lyfe-marketing': {
        category: 'WordPress · Social Media',
        title: 'LYFE Marketing Agency Site',
        overview:
          'A site for a social media management agency, leaning on awards, press marks and named partners to answer the first question a small business asks: has anyone credible vouched for you.',
        features: [
          'Award and partner marks placed above the fold',
          'Services split by social, ads and email marketing',
          'Custom proposal as the single conversion path',
          'Case results carried through to service pages',
        ],
        value: 'Credibility answered in the first screen, where a small business decides.',
      },
      'hubspot': {
        category: 'WordPress · SaaS Platform',
        title: 'HubSpot Marketing Site',
        overview:
          'A marketing site for a customer platform spanning marketing, sales and service, where the job is to route very different visitors - trial, demo, enterprise - without splitting the site into three.',
        features: [
          'Products, solutions and pricing under one navigation',
          'Demo and free trial offered side by side',
          'Segmented routes for small business and enterprise',
          'Extensive resource content feeding organic acquisition',
        ],
        value: 'One site serving a self-serve trial and an enterprise demo at the same time.',
      },
      'ironpaper': {
        category: 'WordPress · B2B Agency',
        title: 'Ironpaper B2B Growth Agency',
        overview:
          'A site for a B2B growth agency working on long and complex sales cycles, written in type rather than imagery, because the claim is thinking and thinking is read.',
        features: [
          'Typographic hero carrying the positioning statement',
          'Services split across demand generation, ABM and content',
          'Long sales cycles addressed directly in the copy',
          'Insight articles supporting the credibility claim',
        ],
        value: 'An agency that sells on argument, given a site built to be read.',
      },
      'app-amane-taxi': {
        category: 'Mobile Application',
        title: 'Amane Taxi Booking App',
        overview:
          'An on-demand chauffeur booking app: order a driven vehicle in one tap, around the clock, for a city trip or an airport run.',
        features: [
          'One-tap ride ordering by destination',
          'Location-based pickup with live map tracking',
          'Driver and vehicle detail before the car arrives',
          'Cash payment and post-ride driver rating',
        ],
        value: 'A car booked in one tap, at the hour when calling a dispatcher is hardest.',
      },
      'app-aspire-school-management': {
        category: 'Mobile Application',
        title: 'Aspire School Management System',
        overview:
          'A school management system with e-learning delivery and a companion Android app, signing in students, teachers and parents to the same record from different sides of it.',
        features: [
          'Separate sign-in for students, teachers and parents',
          'E-learning delivery inside the app',
          'Laravel back office behind the mobile client',
          'One record seen from three different roles',
        ],
        value: 'A school, its teachers and its families all reading the same record.',
      },
      'app-lets-do-yoga': {
        category: 'Mobile Application',
        title: 'Let\'s Do Yoga',
        overview:
          'A gentle yoga and fitness app for every level - stretching, yoga sessions, meditation and fitness plans, including a complete beginner series and the poses that matter first.',
        features: [
          'Beginner series and the poses worth learning first',
          'Routines for sleep, posture and core strength',
          'Breathing exercises and fat-burning sessions',
          'A daily plan rather than a library to search',
        ],
        value: 'A practice someone can actually start, rather than a catalogue to browse.',
      },
      'app-lumy-beauty': {
        category: 'Mobile Application',
        title: 'Lumy Beauty Marketplace',
        overview:
          'A two-sided marketplace for a beauty startup: salons and specialists list their services, customers book appointments, and Stripe Connect settles each vendor separately.',
        features: [
          'Vendor service listings and availability',
          'Customer appointment booking in-app',
          'Stripe Connect marketplace payouts per vendor',
          'Firestore as the shared data layer',
        ],
        value: 'Two sides of a marketplace, and the money reaching the right one.',
      },
      'app-scan-docai-scanner': {
        category: 'Mobile Application',
        title: 'Scan DocAI Document Scanner',
        overview:
          'A document scanner that turns a phone into a usable PDF scanner - documents, ID cards, books and handwritten notes - with edge detection and text recognition doing the work the camera cannot.',
        features: [
          'Smart edge detection and automatic cropping',
          'Filters that make a photographed page readable',
          'OCR text recognition on the captured page',
          'PDF export and on-device file management',
        ],
        value: 'A phone camera made to behave like a scanner, page after page.',
      },
      'app-vpn-client': {
        category: 'Mobile Application',
        title: 'Multi-Region VPN Client',
        overview:
          'A one-tap Android VPN client over OpenVPN, with a global server list, no account to create and no root required - built light enough to run on the phones that need it most.',
        features: [
          'One-tap connect with automatic server choice',
          'Server list spanning several regions',
          'No registration and no root access required',
          'AdMob integration funding the free tier',
        ],
        value: 'Private browsing on any Android phone, without an account or a rooted device.',
      },
      'app-trakmd-doctor': {
        category: 'Mobile Application',
        title: 'trakMD Doctor App',
        overview:
          'An electronic health record app for doctors and their patients, built so a practice is easier to reach: patients book themselves in, reminders go out on their own, and last-minute cancellations get filled.',
        features: [
          'Online booking that fills last-minute cancellations',
          'Appointment reminders by SMS and email',
          'Practice profile patients can find and recommend',
          'Records reachable from the doctor\'s phone',
        ],
        value: 'A practice that is easier to book than to phone.',
      },
      'app-web-on-demand-service': {
        category: 'Mobile & Web Platform',
        title: 'On-Demand Services Platform',
        overview:
          'A services marketplace in the shape of UrbanClap, covering three audiences at once: a customer app for booking, a provider app for delivering, and an admin panel that runs both.',
        features: [
          'Customer app for booking any listed service',
          'Provider app for accepting and delivering work',
          'Admin panel governing the app and the website',
          'Five payment gateways and a wallet system',
        ],
        value: 'Three applications that only work because they are one system.',
      },
      'web-hoteljobs-job-portal': {
        category: 'Web Application',
        title: 'HotelJobs Recruitment Portal',
        overview:
          'A recruitment platform for South Africa\'s hospitality industry, with three panels behind it - admin, recruiter and jobseeker - and the volume problems that come with a job board people actually use.',
        features: [
          'Admin, recruiter and jobseeker dashboards',
          'Job-alert email delivery at 100,000+ recipients via Amazon SES',
          'CV search with resume parsing and PDF conversion',
          'Google for Jobs markup and sitemap automation',
        ],
        value: 'A job board that keeps answering when the mailing list reaches six figures.',
      },
      'web-aimro-market-research': {
        category: 'Website',
        title: 'AIMRO Market Research Association',
        overview:
          'A site for the association representing Ireland\'s market-research industry, which speaks for the sector to public authorities and maintains its professional standards - so the site has to read as an authority, not as a brochure.',
        features: [
          'Institutional tone carried through the layout',
          'Member and standards information kept findable',
          'Responsive across desktop, tablet and phone',
          'Search-friendly structure for an authority site',
        ],
        value: 'A trade body that reads like one, to the people it represents itself to.',
      },
      'web-betheme-wordpress-theme': {
        category: 'WordPress',
        title: 'Custom Portfolio Theme on BeTheme',
        overview:
          'A custom WordPress portfolio built on a BeTheme foundation, with the whole of it - projects, skills, experience, testimonials, service packages - editable from the dashboard rather than from the code.',
        features: [
          'Custom theme work on a BeTheme foundation',
          'Projects, skills and testimonials edited from the dashboard',
          'Service packages maintained without a developer',
          'Responsive across desktop, tablet and mobile',
        ],
        value: 'A portfolio its owner can keep current without opening an editor.',
      },
      'web-learning-pool': {
        category: 'Website',
        title: 'Learning Pool Corporate Site',
        overview:
          'The site for a company delivering online learning platforms, creative content and learning analytics to organisations - a broad offering that has to be navigable before it is persuasive.',
        features: [
          'Platform, content and analytics presented as one offering',
          'Solution pages routed by audience',
          'Editorial and case content supporting the pitch',
          'Responsive layouts across the range',
        ],
        value: 'A broad offering made navigable, which is the first half of persuasive.',
      },
      'web-mammolink-healthcare': {
        category: 'Website',
        title: 'MammoLink Screening Access Portal',
        overview:
          'A site for a mobile screening provider, where the whole job is getting a patient from a search result to a booked appointment without a step that loses them.',
        features: [
          'Service pages written for patients, not clinicians',
          'Appointment booking reachable from every page',
          'Location information for a mobile service',
          'Accessibility and performance treated as requirements',
        ],
        value: 'A screening appointment booked by someone who came to read one page.',
      },
      'web-jenny-schatzle-coaching': {
        category: 'Website',
        title: 'Personal Coaching Site on Kajabi',
        overview:
          'A personal-brand site for a coach and speaker, built on Kajabi and shaped so the message lands first and the programmes, courses and speaking enquiries follow from it.',
        features: [
          'Custom Kajabi design around a personal brand',
          'Separate routes for coaching, courses and speaking',
          'Community and testimonial sections',
          'Clear sign-up and contact calls to action',
        ],
        value: 'A voice that arrives before the offer, which is the order that converts.',
      },
      'web-shrader-mendez-attorney': {
        category: 'Website',
        title: 'Shrader Mendez Attorney Website',
        overview:
          'A law-firm site for criminal defence work, where a visitor is usually in trouble and deciding fast: practice areas, the attorneys themselves, and a way to make contact without a form standing in the way.',
        features: [
          'Practice-area pages a worried visitor can scan',
          'Attorney profiles carrying the credibility',
          'Consultation contact reachable throughout',
          'Awards and recognitions used as proof',
        ],
        value: 'A firm reachable at the moment somebody decides they need one.',
      },
      'web-vizury-engage360': {
        category: 'Website',
        title: 'Vizury Engage360 Platform Site',
        overview:
          'The site for a commerce marketing platform whose retargeting stack reaches shoppers across programmatic, push and email from one integrated proposition - a technical product that has to be explained to a marketer.',
        features: [
          'A technical platform explained for a marketing buyer',
          'Channels presented as one proposition, not three products',
          'Product pages routed by use case',
          'Responsive layouts across a content-heavy site',
        ],
        value: 'A platform sold to the person who buys it, not to the one who runs it.',
      },
      'shop-multivendor-ecommerce': {
        category: 'eCommerce',
        title: 'Multi-Vendor Commerce App & Website',
        overview:
          'A commerce platform running on Android, iOS and the web from one Laravel back end, with the storefront configurable from the admin panel rather than from a deployment.',
        features: [
          'App and website configured from one admin panel',
          'Ten payment gateways and OTP, Google and Facebook sign-up',
          'Unlimited categories with ratings and reviews',
          'Physical and digital products on the same platform',
        ],
        value: 'Three storefronts kept in step because they are one system underneath.',
      },
      'shop-skyhigh-party-rentals': {
        category: 'eCommerce',
        title: 'Sky High Party Rentals Store',
        overview:
          'A Magento store adapted to rent things rather than sell them - a booking layer over the product model - with a custom admin dashboard and a separate real-time delivery tracker built alongside it.',
        features: [
          'Booking and availability layered onto Magento products',
          'Custom admin dashboard with agent and feedback reports',
          'Monthly and yearly sales comparison',
          'Separate real-time delivery tracking application',
        ],
        value: 'A rental business run from a platform that was built to sell, not to lend.',
      },
      'shop-app-netplus-pharmacy': {
        category: 'eCommerce',
        title: 'Net Plus Pharmacy App & Website',
        overview:
          'A pharmacy commerce app in Flutter with a companion website, carrying a full catalogue of medicine categories, brands and discounted lines behind an ordinary shopping flow.',
        features: [
          'Medicine catalogue by category, brand and type',
          'Companion website sharing the app\'s catalogue',
          'Discounted lines surfaced without breaking the flow',
          'Ordering and account management from the phone',
        ],
        value: 'A pharmacy counter reachable from a phone, with the catalogue intact.',
      },
      'game-web-ludo-real-money': {
        category: 'Game Platform',
        title: 'Ludo Real Tournament Platform',
        overview:
          'A tournament platform built around a live Ludo board: brackets are run by the system, wallets hold several currencies, and winners are paid out without an operator settling anything by hand.',
        features: [
          'Bespoke tournament and bracket system',
          'Redesigned live game board',
          'Automated winner payouts',
          'Multi-currency wallet and player dashboard',
        ],
        value: 'A tournament that settles itself, which is the part an operator cannot do at scale.',
      },
      'app-web-bharat-support': {
        category: 'Mobile & Web Platform',
        title: 'Bharat Support On-Demand Services',
        overview:
          'An on-demand services ecosystem in four parts: an app for customers booking work, an app for the providers doing it, an admin panel governing both, and a public website in front of them.',
        features: [
          'Customer app for booking services',
          'Provider app for accepting and fulfilling jobs',
          'Admin panel governing both sides',
          'Public website in front of the platform',
        ],
        value: 'Four surfaces over one platform, so a job booked in the app is the job the provider sees.',
      },
    },
  },
  examples: {
    badge: 'Reference build',
    note: 'Entries marked as reference builds are my own demonstrations, not client work. Everything else was delivered for a paying client.',
    items: {
      'shopify-fashion-theme': {
        category: 'Shopify',
        title: 'Custom Shopify Theme for a Fashion Label',
        overview:
          'A Shopify storefront built as a custom theme rather than a bought one — Liquid templates, a hand-built section library the client can rearrange in the theme editor, and a product page tuned for the way a fashion shopper actually browses.',
        features: [
          'Custom Liquid theme with reorderable sections',
          'Collection filtering, quick view and size guides',
          'Cart drawer and upsell blocks without extra apps',
          'Performance budget held on mobile connections',
        ],
        value:
          'Gives the brand a storefront that looks like nobody else’s while staying inside Shopify — so the client edits pages themselves and pays for fewer apps.',
      },
      'shopify-headless': {
        category: 'Headless Commerce',
        title: 'Headless Shopify Storefront on Next.js',
        overview:
          'The same Shopify catalogue served through a Next.js front end using the Storefront API — pages rendered and cached at the edge, with checkout handed back to Shopify so payments, taxes and fraud stay where they belong.',
        features: [
          'Storefront API queries for catalogue, variants and cart',
          'Server-rendered product pages revalidated at the edge',
          'Checkout handed off to the Shopify-hosted flow',
          'TypeScript end to end, from query to component',
        ],
        value:
          'Front-end freedom and load speed without rebuilding payments — the catalogue stays in Shopify while the experience stops being limited by a theme.',
      },
      'shopify-subscription-app': {
        category: 'Shopify App',
        title: 'Shopify Subscription & Bundles App',
        overview:
          'An embedded Shopify app that adds recurring orders and product bundles to a store — selling plans, contract management and dunning retries, all rendered inside Shopify admin so the merchant never has to leave it.',
        features: [
          'Selling plans and subscription contracts',
          'Bundle builder priced against the live catalogue',
          'Automatic retry and dunning on failed payments',
          'Idempotent webhooks so nothing is billed twice',
        ],
        value:
          'Turns one-off buyers into recurring revenue, and stops a failed card from quietly becoming churn.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'WooCommerce Store for an Artisan Food Producer',
        overview:
          'A WooCommerce shop for a farm selling direct — seasonal products, gift boxes, EU shipping rules and VAT handled by the store rather than by hand, on a WordPress install the owner already knows how to use.',
        features: [
          'Product, variation and gift-box configuration',
          'Zone-based EU shipping and VAT rules',
          'Stock, harvest batches and pre-orders',
          'Checkout tuned for completion on mobile',
        ],
        value:
          'Lets a small producer sell across Europe without a distributor, and edit the shop from the WordPress admin they already have.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Multilingual WordPress Corporate Site',
        overview:
          'A corporate WordPress site published in four languages from one editorial workflow — block editor pages, reusable blocks for anything that repeats, and per-language SEO so each market has its own canonical pages.',
        features: [
          'Block editor pages with reusable, centrally edited blocks',
          'Four languages with translation status visible to editors',
          'Per-language metadata, canonicals and sitemaps',
          'Core Web Vitals passing on mobile and desktop',
        ],
        value:
          'The marketing team publishes in every market without a developer, and each language ranks on its own instead of competing with the others.',
      },
      'wordpress-lead-plugin': {
        category: 'WordPress Plugin',
        title: 'Custom WordPress Lead Routing Plugin',
        overview:
          'A purpose-built WordPress plugin instead of a stack of general-purpose ones — leads captured as a custom post type, routed to the right sales team by rule, and pushed to the CRM with a retry queue behind it.',
        features: [
          'Custom post type with its own admin columns and filters',
          'Rule-based routing by source, region and product',
          'CRM sync over REST with retries and a failure log',
          'Everything managed inside wp-admin',
        ],
        value:
          'Replaces four overlapping plugins with one that does exactly the job, so leads reach the right person automatically and none are lost to a silent sync failure.',
      },
      'react-native-shop-app': {
        category: 'Mobile Application',
        title: 'React Native Shopping App for iOS & Android',
        overview:
          'A shopping app shipped to both stores from a single React Native codebase — catalogue, product detail, cart and payment, with native behaviour on each platform and one shared API layer behind them.',
        features: [
          'One codebase released to the App Store and Play Store',
          'Catalogue, search and filtering against a REST API',
          'Native payment sheets and saved cards',
          'Push notifications for orders and back-in-stock',
        ],
        value:
          'Two stores served by one team and one release cycle, instead of two native builds slowly drifting apart.',
      },
      'flutter-delivery-app': {
        category: 'Mobile Application',
        title: 'Flutter Delivery & Driver Tracking App',
        overview:
          'Two Flutter apps from one project: customers watch their order move in real time, drivers work an optimised run sheet and close each stop with a signature, a photo and a GPS stamp.',
        features: [
          'Live driver position and arrival estimate',
          'Optimised run sheet with hand-off to navigation',
          'Proof of delivery: signature, photo and location',
          'Uploads queued while the driver has no signal',
        ],
        value:
          'Cuts “where is my order?” calls to almost nothing and leaves the operator a delivery record for every single stop.',
      },
      'android-field-service': {
        category: 'Mobile Application',
        title: 'Android Field Service App with Offline Sync',
        overview:
          'A native Android app for engineers working in basements and plant rooms where there is no signal. Every screen reads and writes to a local database first, and the queue syncs with an audit trail once the phone is back online.',
        features: [
          'Full offline read and write on a local SQLite store',
          'Job checklists, parts used and time capture',
          'Signature and photo capture on site',
          'Sync queue with conflict handling and audit log',
        ],
        value:
          'Engineers stop filling in paper and retyping it later — the office sees a completed job minutes after it is finished rather than days.',
      },
      'laravel-booking-api': {
        category: 'Backend & API',
        title: 'Laravel Booking & Scheduling API',
        overview:
          'A Laravel API for booking a finite resource, where the hard part is not the endpoint but the race — two people hitting the same slot in the same second. Solved with a row lock inside a transaction, and covered by concurrency tests.',
        features: [
          'Availability and booking endpoints with a locked write path',
          'Concurrency tests proving no double-booking',
          'Calendar sync and confirmation e-mails on events',
          'Webhook delivery with automatic retries',
        ],
        value:
          'A booking system that stays correct under load — the one property a customer notices immediately when it is missing.',
      },
      'php-crm-invoicing': {
        category: 'Business Application',
        title: 'PHP Client & Invoicing CRM',
        overview:
          'A PHP back office for a professional firm: clients, quotes, time sheets and invoices in one model, with the ageing of every unpaid invoice visible on the first screen rather than buried in a report.',
        features: [
          'Clients, quotes, time sheets and invoices in one place',
          'Invoice ageing and overdue tracking',
          'Role-based access for partners and assistants',
          'PDF generation and payment reconciliation',
        ],
        value:
          'Shows who owes what and for how long without anyone rebuilding a spreadsheet — the number a firm actually runs on.',
      },
      'php-payment-gateway': {
        category: 'Integration',
        title: 'PHP Payment Gateway Integration Layer',
        overview:
          'One PHP interface in front of three payment providers. Checkout calls authorize, capture and refund; which provider runs is configuration. Webhooks are signature-checked and replay-safe, so a duplicate delivery never credits an order twice.',
        features: [
          'Single interface over card, wallet and local payment methods',
          'Signature verification on every inbound webhook',
          'Idempotent reconciliation against the order ledger',
          'A provider added or swapped without touching checkout',
        ],
        value:
          'Adding a payment method becomes a configuration change, and the ledger stays right even when a provider sends the same event twice.',
      },
      'whatsapp-telegram-bot': {
        category: 'Messaging Chatbot',
        title: 'WhatsApp & Telegram Chatbot',
        overview:
          'A single bot serving both WhatsApp and Telegram from one Node.js backend. Customers ask about an order, book an appointment or reach a person, and get an answer in the app they already have open — with Telegram inline buttons and WhatsApp interactive replies driven by the same conversation logic.',
        features: [
          'One conversation engine behind both platforms',
          'Telegram inline keyboards and WhatsApp quick replies',
          'Live order and booking lookups through REST integrations',
          'Handover to a human with the full thread attached',
        ],
        value:
          'Answers the routine questions where customers already are, at any hour, and only involves a person when the conversation actually needs one.',
      },
      'support-chatbot': {
        category: 'Chatbot',
        title: 'Customer Support Chatbot',
        overview:
          'A support assistant that answers questions from a company knowledge base, handles routine requests end to end, and hands anything sensitive to a person with the full conversation attached. Deployed to a website widget and to messaging channels through the same API.',
        features: [
          'Intent matching against a knowledge base',
          'Human handover with full conversation context',
          'Website widget and messaging channels from one backend',
          'Dashboard showing what the bot could not answer',
        ],
        value:
          'Takes repetitive first-line questions off the team and shows exactly which gaps in the knowledge base are worth filling next.',
      },
      'python-automation': {
        category: 'Python Automation',
        title: 'Scheduled Python Data Pipeline',
        overview:
          'A scheduled Python job that pulls data from an API and a spreadsheet, validates and normalises it, writes the result to a single source of truth, and emails a report — replacing a manual routine somebody used to run by hand each morning.',
        features: [
          'Cron-scheduled extract, transform and load',
          'Validation and normalisation before anything is written',
          'Automated reporting once the run completes',
          'Run log and failure alerting for every execution',
        ],
        value:
          'Turns a recurring manual task into something that runs on its own and reports when it does not, so nobody has to remember it.',
      },
    },
  },
  process: {
    eyebrow: 'Work Process',
    heading: 'A disciplined path from idea to production',
    intro:
      'The same structured workflow on every engagement — clear communication and visible progress at each stage is what clients consistently point to in their feedback.',
    steps: [
      {
        title: 'Requirement Analysis',
        detail:
          'I start with the business goal, not the feature list — mapping users, constraints, integrations and success criteria into a clear, agreed scope.',
        output: 'Scope document & success criteria',
      },
      {
        title: 'System Planning & Architecture',
        detail:
          'Stack selection, data modelling and API contracts, documented and justified against cost, scale and how easy the result will be to maintain.',
        output: 'Architecture & data model',
      },
      {
        title: 'UI/UX Planning',
        detail:
          'User flows, screen structure and responsive layouts defined before development begins, so the interface serves the workflow rather than decorating it.',
        output: 'Flows & responsive layouts',
      },
      {
        title: 'Development & Integration',
        detail:
          'Clean, component-based implementation in reviewable increments, with screenshots shared at every stage so progress is visible rather than reported.',
        output: 'Working increments, version controlled',
      },
      {
        title: 'Testing & Revisions',
        detail:
          'Checking behaviour on real devices and screen sizes, then handling revisions quickly and accurately — the part of the job clients notice most.',
        output: 'Verified builds & fast revisions',
      },
      {
        title: 'Deployment & Maintenance',
        detail:
          'Controlled release to production with documentation and handover, followed by ongoing support, optimisation and further iteration.',
        output: 'Live release & support plan',
      },
    ],
  },
  footer: {
    blurb:
      'Full-stack engineering from Italy across web platforms, e-commerce, mobile applications, REST APIs and process automation — delivered remotely for clients worldwide.',
    columns: ['Explore', 'Work'],
    links: {
      about: 'About',
      services: 'Services',
      skills: 'Technical Skills',
      projects: 'Projects',
      process: 'Work Process',
    },
    expertise: ['Full-Stack Web', 'E-Commerce', 'Mobile Apps', 'REST APIs', 'Responsive Design', 'Automation'],
  },
}

/* ========================================================================== */
/*  PORTUGUÊS                                                                  */
/* ========================================================================== */

const pt = {
  htmlLang: 'pt',
  ui: {
    skipToContent: 'Ir para o conteúdo',
    primaryNav: 'Principal',
    mobileNav: 'Menu',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    backToTop: 'Voltar ao topo',
    languageLabel: 'Idioma',
    chooseLanguage: 'Escolher idioma',
    filters: {
      all: 'Todos',
      ecommerce: 'E-commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP e Laravel',
      mobile: 'Mobile',
      frontend: 'Front-end',
      api: 'APIs e Integrações',
      chatbot: 'Chatbots',
      automation: 'Automação',
    },
    viewDetails: 'Ver detalhes',
    seeItLive: 'Ver online',
    liveSite: 'Site online',
    viewLive: 'Ver projeto',
    loadMore: 'Carregar mais',
    switchToLight: 'Mudar para o tema claro',
    switchToDark: 'Mudar para o tema escuro',
    closeDetails: 'Fechar',
    noMatches: 'Ainda não há nada nesta categoria.',
    filterLabel: 'Filtrar projetos por disciplina',
    technologiesUsed: 'Tecnologias Utilizadas',
    keyFeatures: 'Principais Funcionalidades',
    businessValue: 'Valor para o Negócio',
    projectWord: 'Projeto',
    exampleWord: 'Exemplo',
    certifications: 'Certificações',
    languagesTitle: 'Idiomas',
    completedEngagements: 'Trabalhos concluídos',
    clientPrefix: 'Cliente',
    viewProfile: 'Ver o perfil verificado',
    workanaNote:
      'Perfil Workana verificado — avaliação 5.0, nível Silver, 1.º lugar em Itália em TI e Programação.',
    rightsReserved: 'Todos os direitos reservados.',
    builtWith: 'Desenhado e desenvolvido com React — otimizado para desempenho e acessibilidade.',
  },
  profileTitle: 'Desenvolvedor Full-Stack Sénior | Web, Mobile e E-Commerce',
  navRole: 'Desenvolvedor Full-Stack Sénior',
  tagline:
    'Desenvolvedor Full-Stack Sénior a criar soluções digitais fiáveis, escaláveis e inovadoras.',
  nav: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    skills: 'Competências',
    projects: 'Projetos',
    process: 'Processo',
  },
  hero: {
    badge: '1.º lugar em TI e Programação em Itália na Workana',
    headline:
      'Criando Soluções Web, Mobile e de E-Commerce Escaláveis para Empresas Modernas',
    headlineAccent: 'E-Commerce Escaláveis',
    intro:
      'Sou Leonardo Antonio Audia, desenvolvedor full-stack baseado em Itália. Construo sites e aplicações web e mobile que funcionam mesmo bem — rápidos, claros e fáceis de usar em qualquer ecrã. A trabalhar de forma independente desde 2013, entreguei plataformas de e-commerce, aplicações móveis, sites empresariais responsivos e automação de processos internos para clientes em vários setores e países.',
    primaryCta: 'Ver Projetos',
    secondaryCta: 'Conhecer a Minha Experiência',
    stats: [
      'Anos de Experiência',
      'Avaliação de Clientes na Workana',
      'Em Itália · TI e Programação',
      'Idiomas Falados',
    ],
    pillars: ['Full-Stack', 'Mobile', 'E-Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'Sobre Mim',
    heading: 'A parte técnica raramente é a parte difícil',
    paragraphs: [
      'Olá, sou Leonardo Antonio. Construo aplicações web e mobile que funcionam mesmo bem — rápidas, claras e fáceis de usar em qualquer ecrã.',
      'Trabalho sobretudo com React.js, Next.js e Node.js em plataformas à medida, e com WordPress e WooCommerce quando o cliente precisa de gerir o próprio conteúdo sem depender de um programador. Também desenvolvo aplicações móveis para Android e iOS com React Native, além de integrações de API e chatbots.',
      'Mais de 10 anos a construir produtos digitais ensinaram-me que a parte técnica raramente é a parte difícil. O difícil é perceber o que o negócio precisa antes de escrever código, e dizer cedo quando algo não vai funcionar como se espera. Por isso trabalho com comunicação constante, progresso visível do início ao fim e revisões rápidas.',
      'Se tem um projeto em mente, diga-me o que quer alcançar e dou-lhe uma visão honesta de como o abordaria.',
    ],
    highlights: [
      ['Independente desde 2013', 'Mais de uma década a entregar aplicações web e mobile como profissional independente.'],
      ['Comunicação em primeiro lugar', 'Atualizações claras e capturas de ecrã em cada fase, com revisões rápidas e precisas.'],
      ['Entrega multilingue', 'Italiano, inglês, português e espanhol — colaboração remota sem barreira linguística.'],
      ['Responsivo por definição', 'Cada interface construída para se manter rápida, clara e utilizável em qualquer ecrã.'],
    ],
    facts: [
      ['Localização', 'Itália'],
      ['Experiência', '10+ Anos · Desde 2013'],
      ['Avaliação', '5.0 ★ na Workana'],
      ['Classificação', '1.º em Itália · TI e Programação'],
      ['Foco', 'Web · Mobile · E-Commerce'],
      ['Entrega', 'Remota, em todo o mundo'],
    ],
    languageLevels: ['Nativo ou bilingue', 'Avançado', 'Intermédio', 'Intermédio'],
    languageNames: ['Italiano', 'Inglês', 'Português', 'Espanhol'],
  },
  services: {
    eyebrow: 'Serviços',
    heading: 'O que construo para os meus clientes',
    intro:
      'Seis competências que refletem o trabalho que realmente entrego — de um site empresarial responsivo a uma plataforma de e-commerce completa com a sua própria camada de API.',
    items: [
      {
        title: 'Desenvolvimento Web Full-Stack',
        summary: 'Plataformas web escaláveis e fáceis de manter.',
        description:
          'Aplicações web completas com React.js ou Next.js no front-end e Node.js, Nest.js ou PHP por trás — estruturadas para desempenho e manutenção a longo prazo.',
        points: ['Front-ends em React.js e Next.js', 'Serviços em Node.js e Nest.js', 'Bases de código em TypeScript'],
      },
      {
        title: 'Desenvolvimento de E-Commerce',
        summary: 'Lojas feitas para vender e simples de gerir.',
        description:
          'Lojas à medida e plataformas de retalho multimarca, além de projetos em WordPress e WooCommerce — catálogo, carrinho, checkout e uma administração que a sua equipa consegue mesmo usar.',
        points: ['Lojas à medida', 'WooCommerce e WordPress', 'Catálogos multimarca'],
      },
      {
        title: 'Desenvolvimento de Aplicações Móveis',
        summary: 'Apps multiplataforma com aspeto nativo.',
        description:
          'Aplicações móveis para Android e iOS com React Native, além de trabalho em Flutter e Windows Mobile e design de aplicações — entregues numa só base de código.',
        points: ['Android e iOS com React Native', 'Flutter e Windows Mobile', 'Design de aplicações móveis'],
      },
      {
        title: 'Desenvolvimento e Integração de APIs REST',
        summary: 'Serviços de backend seguros e eficientes.',
        description:
          'APIs REST e web services em Node.js e Nest.js, além da integração fiável das plataformas externas e dos sistemas internos de que o negócio já depende.',
        points: ['Desenho de APIs REST', 'Integrações com terceiros', 'Ligação a sistemas internos'],
      },
      {
        title: 'Design Web Responsivo e Landing Pages',
        summary: 'Interfaces rápidas e claras em qualquer ecrã.',
        description:
          'Sites responsivos modernos e landing pages em HTML, CSS e JavaScript — limpos, rápidos a carregar e corretos do telemóvel ao computador.',
        points: ['Layouts mobile-first', 'Desenvolvimento de landing pages', 'Correção em todos os dispositivos'],
      },
      {
        title: 'Chatbots e Automação de Processos',
        summary: 'Menos trabalho repetitivo no dia a dia.',
        description:
          'Desenvolvimento de chatbots e automação de fluxos com Python e integrações REST — incluindo plataformas de processos internos que substituem rotinas manuais em folhas de cálculo.',
        points: ['Desenvolvimento de chatbots', 'Automação de fluxos de trabalho', 'Scripts e integrações em Python'],
      },
    ],
  },
  skills: {
    eyebrow: 'Competências Técnicas',
    heading: 'A tecnologia por trás das soluções',
    intro:
      'Todas as tecnologias aqui listadas constam do meu perfil verificado na Workana.',
    categories: [
      ['Frontend', 'Interfaces que se mantêm rápidas e claras em qualquer ecrã.'],
      ['Backend', 'Serviços do lado do servidor e as APIs por cima deles.'],
      ['Mobile', 'Entrega multiplataforma a partir de uma só base de código.'],
      ['E-Commerce', 'Lojas, catálogos e os sistemas que os sustentam.'],
      ['Responsivo e UI', 'A disciplina por trás de cada layout que entrego.'],
      ['Automação', 'Chatbots e fluxos que reduzem o esforço manual.'],
    ],
  },
  projects: {
    eyebrow: 'Trabalhos Selecionados',
    heading: 'Projetos em web, mobile e e-commerce',
    intro:
      'Entregas a clientes do meu portefólio na Workana, juntamente com projetos de referência próprios, filtráveis por disciplina. Cada entrada indica as tecnologias realmente utilizadas; os projetos de referência estão assinalados.',
    items: {
      'premium-fashion': {
        category: 'E-Commerce',
        title: 'Site de E-Commerce de Moda Premium',
        overview:
          'Uma loja de moda premium construída como front-end React.js à medida sobre um backend Node.js — catálogo de produtos, navegação por coleções, carrinho e checkout, com o cuidado visual que uma marca de moda exige e a rapidez que um comprador espera.',
        features: [
          'Loja e páginas de coleção em React.js à medida',
          'Backend Node.js a servir catálogo e encomendas',
          'Fluxo de carrinho e checkout',
          'Layouts responsivos do telemóvel ao computador',
        ],
        value:
          'Dá à marca uma loja totalmente sua — apresentação à altura do produto e uma base de código que cresce com o catálogo em vez de o limitar.',
      },
      'modular-furniture': {
        category: 'E-Commerce',
        title: 'Plataforma de E-Commerce de Mobiliário Modular',
        overview:
          'Uma plataforma de e-commerce para mobiliário modular, onde cada produto é na verdade um conjunto de opções configuráveis. O front-end React.js trata da configuração e da escolha de variantes enquanto o Node.js mantém preços e disponibilidade consistentes.',
        features: [
          'Produtos configuráveis e seleção de variantes',
          'Páginas de produto com preço atualizado por opção',
          'Serviços Node.js para catálogo e stock',
          'Carrinho construído em torno de itens configurados',
        ],
        value:
          'Permite ao cliente montar e orçamentar a sua própria configuração online, deixando a equipa de vendas de ser o estrangulamento em cada orçamento.',
      },
      'multi-brand': {
        category: 'Plataforma e API',
        title: 'Plataforma de E-Commerce de Moda Multimarca',
        overview:
          'Uma plataforma de retalho multimarca em AngularJS com backend Nest.js — várias marcas sobre infraestrutura partilhada, cada uma com o seu catálogo, servidas por uma camada de API estruturada.',
        features: [
          'API Nest.js a servir várias lojas de marca',
          'Infraestrutura partilhada de catálogo e encomendas',
          'Interface de administração em AngularJS',
          'Endpoints estruturados e documentados',
        ],
        value:
          'Uma plataforma para manter em vez de várias, pelo que acrescentar uma marca passa a ser configuração e não um novo projeto.',
      },
      'fitness-platform': {
        category: 'Aplicação Móvel',
        title: 'Plataforma Móvel de Treino Desportivo e Fitness',
        overview:
          'Uma aplicação móvel multiplataforma para treino desportivo, ligando treinadores e atletas em torno de planos e registo de sessões. Construída em React Native, com o design da aplicação produzido no mesmo trabalho.',
        features: [
          'Planos de treino e registo de sessões',
          'Vistas de treinador e atleta na mesma app',
          'Histórico de progresso e feedback de atividade',
          'Interface pensada para usar com uma mão durante o treino',
        ],
        value:
          'Tira o treino das folhas de cálculo e das aplicações de mensagens, dando ao treinador um único sítio para gerir programas e ao atleta uma visão clara do próximo passo.',
      },
      'apex-logistics': {
        category: 'Aplicação Web',
        title: 'Apex Logistics',
        overview:
          'Um painel interno de operações em React.js e TypeScript, reunindo projetos ativos, tarefas, prazos, documentos e faturação num único espaço de trabalho, para que a equipa veja num relance o estado de tudo o que tem em curso.',
        features: [
          'Visão geral de projetos com estado, progresso e prazos',
          'Listas de tarefas e calendário numa só vista',
          'Gráficos de atividade e gestão documental',
          'Base de código em TypeScript para segurança a longo prazo',
        ],
        value:
          'Substitui folhas de cálculo dispersas e ferramentas separadas por um único espaço, tornando o estado de cada projeto visível sem ter de pedir atualizações.',
      },
      'lumina-studio': {
        category: 'Plataforma Web',
        title: 'Lumina Studio',
        overview:
          'Um site de estúdio construído com Next.js e CSS3 — uma presença rápida e moderna, com páginas renderizadas no servidor, tipografia cuidada e um layout que valoriza o trabalho do estúdio em vez de competir com ele.',
        features: [
          'Páginas renderizadas no servidor com Next.js',
          'Apresentação de trabalhos e casos de estudo',
          'Layouts e animações em CSS3 escritos à mão',
          'Construção orientada a desempenho e SEO',
        ],
        value:
          'Um site que carrega de imediato e apresenta o trabalho do estúdio com clareza — a primeira impressão pela qual um negócio criativo é avaliado.',
      },
      'pipefy-protocols': {
        category: 'Automação de Processos',
        title: 'Central de Protocolos Internos no Pipefy',
        overview:
          'Uma central de protocolos internos implementada no Pipefy para uma distribuidora farmacêutica, substituindo uma rotina manual informal por um processo estruturado e rastreável. Entregue em duas fases para o mesmo cliente.',
        features: [
          'Entrada e encaminhamento estruturados dos protocolos internos',
          'Etapas definidas com responsabilidade clara em cada passo',
          'Movimentação automática entre fases do processo',
          'Entregue em duas fases de projeto',
        ],
        value:
          'Dá à distribuidora um percurso único e rastreável para os protocolos internos, sem depender de alguém se lembrar de um processo informal.',
      },
      'keyzar-jewelry': {
        category: 'Shopify · Joalharia',
        title: 'Loja Keyzar Jewelry',
        overview:
          'Uma loja Shopify para uma marca de alta joalharia que vende aneis de noivado, aliancas e diamantes de laboratorio, com um assistente na pagina para responder as perguntas que antecedem uma compra deste valor.',
        features: [
          'Catalogos de aneis, aliancas e diamantes com navegacao guiada',
          'Paginas educativas sobre lapidacao, quilates e engaste',
          'Chatbot no site para duvidas de tamanho e entrega',
          'Marcacao de consulta para encomendas de valor elevado',
        ],
        value: 'Uma compra que se pesquisa durante semanas, respondida na pagina em vez de por email.',
      },
      'instalador-portas': {
        category: 'Shopify · Servicos',
        title: 'Site Instalador de Portas',
        overview:
          'Um site para uma empresa de instalacao de portas que atende as zonas leste, oeste, norte e sul de Sao Paulo e o ABC, feito para transformar uma visita num pedido de orcamento em vez de um telefonema.',
        features: [
          'Zonas de atendimento e tipos de instalacao apresentados com clareza',
          'Pedido de orcamento acessivel a partir de qualquer seccao',
          'Chatbot que qualifica o servico antes da resposta humana',
          'Contagem de instalacoes concluidas como prova de volume',
        ],
        value: 'Uma empresa de servicos que agenda trabalho pela pagina, a qualquer hora.',
      },
      'rembrr-app': {
        category: 'Site de Produto · SaaS',
        title: 'Assistente de Lembretes Rembrr',
        overview:
          'O site de produto de um assistente que organiza lembretes, tarefas e entradas de calendario a partir da fala, apresentado em espanhol e com o teste gratuito como unica chamada a acao.',
        features: [
          'Apresentacao construida em torno da ideia de comando falado',
          'Planos e inscricao no teste numa so pagina',
          'Assistente que responde a duvidas de funcionalidades na pagina',
          'Texto multilingue para um mercado de lingua espanhola',
        ],
        value: 'Um produto explicado nas palavras de quem o usa, e nao em listas de funcionalidades.',
      },
      'dawson-home-care': {
        category: 'Shopify · Saude',
        title: 'Dawson & Dawson Home Care',
        overview:
          'Um site para um prestador de cuidados domiciliarios ativo desde 2002, escrito para familias que decidem sob pressao: servicos, licenciamento e disponibilidade visiveis sem um formulario pelo meio.',
        features: [
          'Servicos e tipos de cuidado explicados sem jargao',
          'Licenciamento, seguro e disponibilidade 24/7 em destaque',
          'Avaliacao gratuita como acao principal',
          'Chatbot que responde a duvidas de elegibilidade e cobertura',
        ],
        value: 'Uma familia encontra o que precisa a meia-noite, que e muitas vezes quando procura.',
      },
      'dentalis': {
        category: 'Shopify · Dentaria',
        title: 'Plataforma Dentalis para Clinicas',
        overview:
          'Um site para um produto de gestao de clinicas dentarias, com a promessa de administracao automatizada 24 horas para que a clinica cuide dos pacientes e nao da agenda, tendo o WhatsApp como porta de entrada.',
        features: [
          'Posicionamento construido em torno do agendamento automatico',
          'Resultados apresentados em numeros e nao em adjetivos',
          'Passagem para WhatsApp a partir de qualquer pagina',
          'Estrutura de conteudo e blogue para trafego de pesquisa',
        ],
        value: 'As clinicas iniciam a conversa no canal que ja usam o dia todo.',
      },
      'elevar-empilhadeiras': {
        category: 'Shopify · Industrial',
        title: 'Elevar Aluguer de Empilhadeiras',
        overview:
          'Um site para uma empresa de aluguer de empilhadeiras em Caxias do Sul, direto e de alto contraste para um comprador industrial que quer a maquina, as condicoes e uma pessoa no WhatsApp, por essa ordem.',
        features: [
          'Frota e condicoes de aluguer sem catalogo para percorrer',
          'Layout de alto contraste legivel num telemovel de armazem',
          'Contacto por WhatsApp fixo no ecra',
          'Cobertura de servico indicada por regiao',
        ],
        value: 'Um pedido fica a um toque no chao de fabrica, onde ninguem preenche formularios.',
      },
      'cda-metais': {
        category: 'Shopify · Industria',
        title: 'CDA Metais Sistemas em Aluminio',
        overview:
          'Um site para um fabricante de sistemas em aluminio que abrange esquadrias, fachadas, extrusao, pintura eletrostatica e distribuicao para todo o pais, conduzido pelos edificios onde o trabalho acaba.',
        features: [
          'Fachadas concluidas a sustentar o argumento do produto',
          'Capacidades divididas entre extrusao, pintura e distribuicao',
          'Galeria de projetos como prova principal',
          'Contacto por WhatsApp para pedidos de especificacao',
        ],
        value: 'Um fabricante avaliado por edificios acabados e nao por uma ficha tecnica.',
      },
      'tools4trade': {
        category: 'Shopify · Ferramentas',
        title: 'Loja Online Tools4Trade',
        overview:
          'Uma loja britanica de ferramentas profissionais com ferramentas eletricas, arrumacao, protecao e vestuario de trabalho, organizada para que um profissional encontre uma peca por categoria, marca ou referencia sem sair do cabecalho.',
        features: [
          'Pesquisa por categoria, marca ou referencia a partir do cabecalho',
          'Faixas promocionais para conjuntos, sorteios e saldos',
          'Navegacao por marca num catalogo extenso',
          'Contacto por WhatsApp para stock e precos profissionais',
        ],
        value: 'Um catalogo extenso que ainda assim responde a uma pergunta de uma peca em segundos.',
      },
      'xelan-wheelchairs': {
        category: 'Shopify · Mobilidade',
        title: 'Loja de Cadeiras de Rodas Xe Lan Hoang Son',
        overview:
          'Uma loja vietnamita que vende cadeiras de rodas manuais, eletricas e especiais, onde quem compra e normalmente um familiar a comparar modelos por preco, peso e tamanho dobrado.',
        features: [
          'Tipos divididos entre manual, eletrica e especial',
          'Precos e descontos visiveis em cada cartao',
          'Comparacao por peso, largura e tamanho dobrado',
          'Contacto telefonico e por mensagem fixo na pagina',
        ],
        value: 'Uma categoria comprada uma vez, com pressa, tornada comparavel num relance.',
      },
      'breck-and-fox': {
        category: 'Shopify · Casa e Decoracao',
        title: 'Loja Breck + Fox',
        overview:
          'Uma loja de casa que abrange iluminacao, exterior, decoracao, cozinha, sala e banho, onde a prateleira e fotografada como um espaco e nao como uma grelha de produtos.',
        features: [
          'Fotografia de ambiente a abrir cada colecao',
          'Seis departamentos sob uma so navegacao',
          'Faixas de saldos sazonais sem quebrar a estetica',
          'Carrinho e pesquisa acessiveis em todas as paginas',
        ],
        value: 'Mobiliario vendido como e escolhido: num espaco, nao numa prateleira.',
      },
      'garnet-marketplace': {
        category: 'Shopify · Marketplace',
        title: 'Marketplace Multi-Vendedor Garnet',
        overview:
          'O site de produto de uma app Shopify que transforma uma loja unica num marketplace B2B e B2C multi-vendedor, dirigido a comerciantes que querem que a integracao de vendedores deixe de ser problema seu.',
        features: [
          'Posicionamento para marketplaces B2B e B2C na mesma plataforma',
          'Integracao de vendedores apresentada como diferencial',
          'Documentacao e precos acessiveis a partir do cabecalho',
          'Roteiro de crescimento explicado passo a passo',
        ],
        value: 'Uma loja passa a marketplace sem se tornar um projeto de plataforma.',
      },
      'lumenwild-fine-art': {
        category: 'Shopify · Arte',
        title: 'Galeria Lumenwild Fine Art',
        overview:
          'Uma loja-galeria de fotografia de paisagem e natureza, com a contencao que o trabalho exige: imagem a toda a largura, tipografia fina e quase nenhuma interface entre o visitante e a fotografia.',
        features: [
          'Galeria a sangrar com o minimo de interface',
          'Tamanhos e acabamentos de impressao escolhidos na pagina do produto',
          'Paginas sobre o trabalho e o processo',
          'Navegacao discreta que nao invade a imagem',
        ],
        value: 'Fotografia vendida como uma galeria a expoe, nao como um catalogo a lista.',
      },
      'velocitek-prostart': {
        category: 'Shopify · Instrumentos Nauticos',
        title: 'Pagina de Produto Velocitek ProStart',
        overview:
          'Uma pagina de produto unico para um cronometro de regata, escrita para quem ja conhece a categoria e quer saber latencia, fixacao e o conteudo da caixa antes de mais nada.',
        features: [
          'Conduzida pela especificacao e nao pelo estilo de vida',
          'Conteudo da caixa indicado antes do botao de compra',
          'Origem de fabrico e prazo de entrega declarados',
          'Suporte e manual ligados a partir da pagina',
        ],
        value: 'Um comprador tecnico recebe primeiro a especificacao e nunca o marketing.',
      },
      'daphnes-headcovers': {
        category: 'Shopify · Acessorios de Golfe',
        title: 'Loja Daphne\'s Headcovers',
        overview:
          'Uma loja de capas de tacos de golfe feitas a mao desde 1988, onde o produto e uma personagem e o catalogo se percorre como uma loja de brinquedos.',
        features: [
          'Compra por animal, personagem e licenca',
          'Mais vendidos e novidades na pagina inicial',
          'Historia do fabrico a par do catalogo',
          'Numero de avaliacoes como prova social',
        ],
        value: 'Um presente comprado por encanto, apresentado para que o encanto sobreviva ao checkout.',
      },
      'conscious-ink': {
        category: 'Shopify · Lifestyle',
        title: 'Tatuagens Temporarias Conscious Ink',
        overview:
          'Uma loja de tatuagens temporarias de afirmacoes, onde o produto e uma frase que alguem quer ler na propria pele, pelo que o texto pesa tanto quanto a fotografia.',
        features: [
          'Cartoes de produto conduzidos pela mensagem e nao pela referencia',
          'Citacoes de clientes como prova principal',
          'Conjuntos e caixas de oferta como caminho de venda adicional',
          'Limite de portes gratis indicado no cabecalho',
        ],
        value: 'Um produto cujo valor e a frase, exposto pela frase.',
      },
      'wildfang': {
        category: 'Shopify · Vestuario',
        title: 'Loja de Vestuario Wildfang',
        overview:
          'Uma loja de vestuario com um ponto de vista claro, com fatos, roupa de trabalho e pecas do dia a dia, fotografada em pessoas reais e organizada para que a marca se leia antes do catalogo.',
        features: [
          'Imagem editorial antes da grelha de produtos',
          'Compra por categoria com fatos e roupa de trabalho separados',
          'Saldos e novidades sem diluir a marca',
          'Guia de tamanhos e caimento na pagina do produto',
        ],
        value: 'Uma marca em que as pessoas aderem, com espaco para ser marca antes de ser loja.',
      },
      'video-milkshake': {
        category: 'Shopify · Produtos Digitais',
        title: 'Loja de Recursos Video Milkshake',
        overview:
          'Uma loja que vende mattes de filme, texturas e recursos de edicao em download, onde cada produto tem de ser mostrado em movimento antes que alguem possa avaliar se vale a compra.',
        features: [
          'Cartoes conduzidos pela pre-visualizacao para recursos que so se veem em movimento',
          'Recursos agrupados por categoria e por pacote',
          'Entrega imediata por download apos o pagamento',
          'Preco de pacote apresentado face ao preco unitario',
        ],
        value: 'Bens digitais que se vendem pela pre-visualizacao, expostos em torno dela.',
      },
      'miro-tea': {
        category: 'Shopify · Alimentacao',
        title: 'Loja Online Miro Tea',
        overview:
          'A loja online de uma casa de cha de Seattle que vende folha de origem unica, misturas e utensilios, onde um cha a granel tem de ser descrito bem o suficiente para que alguem o compre sem o cheirar.',
        features: [
          'Folha fotografada individualmente e nao na embalagem',
          'Colecoes por nivel de cafeina, estacao e origem',
          'Utensilios de cha a par da folha',
          'Notas de prova como nucleo de cada pagina de produto',
        ],
        value: 'O conhecimento do balcao posto por escrito, para que a folha se venda a distancia.',
      },
      'take-care-shop': {
        category: 'Shopify · Beleza e Bem-Estar',
        title: 'Take Care Beleza e Bem-Estar',
        overview:
          'Uma loja de beleza e bem-estar em Washington DC com gamas de rosto, corpo, cabelo e bem-estar, de paleta suave e com uma pagina inicial que ja sustentou lancamentos e uma liquidacao.',
        features: [
          'Departamentos divididos entre rosto, corpo, cabelo e bem-estar',
          'Diretorio de marcas a par da navegacao por categoria',
          'Pagina inicial capaz de sustentar mensagens de campanha',
          'Percursos de oferta e conjuntos pelo catalogo',
        ],
        value: 'Uma loja curada cuja pagina inicial muda de mensagem sem obras.',
      },
      'illumivein': {
        category: 'Shopify · Dispositivo Medico',
        title: 'Loja do Localizador de Veias Illumivein',
        overview:
          'Uma loja de dispositivo unico para um localizador de veias portatil vendido a enfermeiros, flebotomistas e paramedicos, onde a decisao assenta em saber se funciona na sala onde trabalham.',
        features: [
          'Imagens de demonstracao com o dispositivo em uso',
          'Dados regulamentares e de bateria indicados com clareza',
          'Preco unico, decisao unica, sem configurador',
          'Garantia e condicoes de devolucao junto ao botao de compra',
        ],
        value: 'Uma ferramenta clinica vendida por evidencia e nao por adjetivos.',
      },
      'perricone-md': {
        category: 'Shopify · Cosmetica',
        title: 'Loja de Cosmetica Perricone MD',
        overview:
          'Uma loja de cosmetica com catalogo extenso entre loja, mais vendidos, promocoes e liquidacao, que sustenta mensagens promocionais sem enterrar a rotina que o cliente veio repor.',
        features: [
          'Catalogo dividido entre loja, mais vendidos, promocoes e liquidacao',
          'Barras promocionais para saldos e codigos sazonais',
          'Fidelizacao e recolha de email integradas no cabecalho',
          'Navegacao por rotina, preocupacao e tipo de produto',
        ],
        value: 'Um catalogo grande que ainda leva o cliente habitual de volta a sua rotina.',
      },
      'hisense-bolivia': {
        category: 'Shopify · Eletronica de Consumo',
        title: 'Loja Hisense Bolivia',
        overview:
          'Uma loja regional para uma marca de eletronica de consumo com televisores, frigorificos, maquinas de lavar e ar condicionado, que traz a criatividade da campanha global para um catalogo local.',
        features: [
          'Criatividade de campanha a percorrer a pagina inicial',
          'Categorias divididas entre televisao, frio e climatizacao',
          'Especificacoes comparaveis dentro de cada categoria',
          'Disponibilidade local e informacao de revendedores',
        ],
        value: 'Uma marca global apresentada localmente sem perder a campanha com que chegou.',
      },
      'troubadour-goods': {
        category: 'Shopify · Malas e Pele',
        title: 'Loja Troubadour Goods',
        overview:
          'Uma loja de malas tecnicas e artigos em pele, fotografada em movimento nas ruas, onde o argumento a favor de uma mala se faz mostrando-a a ser usada e nao pousada.',
        features: [
          'Filme e fotografia de estilo de vida a abrir o catalogo',
          'Colecoes por viagem, trabalho e dia a dia',
          'Premios e imprensa usados como prova',
          'Detalhe de materiais e garantia na pagina do produto',
        ],
        value: 'Uma compra ponderada defendida em uso e nao numa fotografia de estudio.',
      },
      'velodrome-shop': {
        category: 'WordPress · Ciclismo',
        title: 'Loja de Ciclismo de Pista Velodrome',
        overview:
          'Uma loja de equipamento de ciclismo de pista - quadros, rodas, transmissao, comando e ferramentas - feita para um desporto onde as pecas tem de servir a disciplina antes de importarem.',
        features: [
          'Catalogo organizado por disciplina de pista e tipo de peca',
          'Compatibilidade de transmissao e componentes visivel cedo',
          'Percurso de encomenda rapida para quem ja sabe a peca',
          'Imagem editorial captada na propria pista',
        ],
        value: 'Um catalogo especializado que respeita como os especialistas realmente compram.',
      },
      'belay-solutions': {
        category: 'WordPress · Recrutamento',
        title: 'Site BELAY Solutions',
        overview:
          'Um site para uma empresa que coloca assistentes e contabilistas nos Estados Unidos junto de negocios, onde o visitante compara uma contratacao com um servico e precisa que a diferenca seja obvia.',
        features: [
          'Servicos de assistencia e financeiros em percursos separados',
          'Preco enquadrado face ao custo de uma contratacao a tempo inteiro',
          'Pedido de proposta em vez de tabela publica',
          'Biblioteca de recursos a alimentar a pesquisa organica',
        ],
        value: 'Um servico vendido contra a alternativa que o comprador ja esta a pesar.',
      },
      'webfx': {
        category: 'WordPress · Agencia',
        title: 'Site da Agencia WebFX',
        overview:
          'Um site de agencia extenso que abrange SEO, media paga, CRO e servicos web, onde o argumento e receita e nao trafego, e a prova tem de estar visivel antes do formulario de contacto.',
        features: [
          'Servicos divididos entre pesquisa, media paga, CRO e UX',
          'Numeros de receita e de clientes como argumento inicial',
          'Pedido de proposta acessivel em qualquer pagina',
          'Conteudo extenso de recursos e glossario para pesquisa',
        ],
        value: 'Uma agencia avaliada por prova de receita, com a prova colocada antes do discurso.',
      },
      'lyfe-marketing': {
        category: 'WordPress · Redes Sociais',
        title: 'Site da Agencia LYFE Marketing',
        overview:
          'Um site para uma agencia de gestao de redes sociais, apoiado em premios, imprensa e parceiros nomeados para responder a primeira pergunta de um pequeno negocio: alguem credivel ja respondeu por voces.',
        features: [
          'Premios e parceiros colocados acima da dobra',
          'Servicos divididos entre social, anuncios e email marketing',
          'Proposta personalizada como unico caminho de conversao',
          'Resultados de casos levados ate as paginas de servico',
        ],
        value: 'Credibilidade respondida no primeiro ecra, onde um pequeno negocio decide.',
      },
      'hubspot': {
        category: 'WordPress · Plataforma SaaS',
        title: 'Site de Marketing da HubSpot',
        overview:
          'Um site de marketing para uma plataforma de clientes que abrange marketing, vendas e servico, onde a tarefa e encaminhar visitantes muito diferentes - teste, demonstracao, empresa - sem dividir o site em tres.',
        features: [
          'Produtos, solucoes e precos sob uma so navegacao',
          'Demonstracao e teste gratuito oferecidos lado a lado',
          'Percursos segmentados para pequeno negocio e empresa',
          'Conteudo de recursos extenso a alimentar a aquisicao organica',
        ],
        value: 'Um site a servir ao mesmo tempo um teste self-service e uma demonstracao empresarial.',
      },
      'ironpaper': {
        category: 'WordPress · Agencia B2B',
        title: 'Ironpaper Agencia de Crescimento B2B',
        overview:
          'Um site para uma agencia de crescimento B2B que trabalha ciclos de venda longos e complexos, escrito em tipografia e nao em imagem, porque o argumento e pensamento e pensamento le-se.',
        features: [
          'Cabecalho tipografico a sustentar o posicionamento',
          'Servicos divididos entre geracao de procura, ABM e conteudo',
          'Ciclos de venda longos tratados diretamente no texto',
          'Artigos de analise a sustentar a credibilidade',
        ],
        value: 'Uma agencia que vende por argumento, com um site feito para ser lido.',
      },
      'app-amane-taxi': {
        category: 'Aplicacao Movel',
        title: 'App de Reservas Amane Taxi',
        overview:
          'Uma app de reserva de motorista a pedido: pedir um veiculo com condutor num toque, a qualquer hora, para uma viagem na cidade ou uma ida ao aeroporto.',
        features: [
          'Pedido de viagem num toque por destino',
          'Recolha por localizacao com mapa em tempo real',
          'Dados do motorista e do veiculo antes da chegada',
          'Pagamento em numerario e avaliacao no fim da viagem',
        ],
        value: 'Um carro reservado num toque, a hora em que ligar para uma central e mais dificil.',
      },
      'app-aspire-school-management': {
        category: 'Aplicacao Movel',
        title: 'Sistema de Gestao Escolar Aspire',
        overview:
          'Um sistema de gestao escolar com ensino a distancia e uma app Android que o acompanha, com alunos, professores e encarregados a entrar no mesmo registo por lados diferentes.',
        features: [
          'Entrada separada para alunos, professores e encarregados',
          'Ensino a distancia dentro da aplicacao',
          'Retaguarda em Laravel por tras do cliente movel',
          'Um registo visto a partir de tres papeis diferentes',
        ],
        value: 'Uma escola, os seus professores e as familias a ler o mesmo registo.',
      },
      'app-lets-do-yoga': {
        category: 'Aplicacao Movel',
        title: 'Let\'s Do Yoga',
        overview:
          'Uma app suave de ioga e fitness para todos os niveis - alongamento, sessoes de ioga, meditacao e planos de treino, incluindo uma serie completa para iniciantes e as posturas que importam primeiro.',
        features: [
          'Serie para iniciantes e as posturas a aprender primeiro',
          'Rotinas para sono, postura e forca do core',
          'Exercicios de respiracao e sessoes de queima',
          'Um plano diario em vez de uma biblioteca para pesquisar',
        ],
        value: 'Uma pratica que alguem consegue mesmo comecar, e nao um catalogo para percorrer.',
      },
      'app-lumy-beauty': {
        category: 'Aplicacao Movel',
        title: 'Marketplace Lumy Beauty',
        overview:
          'Um marketplace de dois lados para uma startup de beleza: saloes e especialistas listam servicos, os clientes marcam, e o Stripe Connect liquida cada vendedor separadamente.',
        features: [
          'Listagens de servicos e disponibilidade dos profissionais',
          'Marcacao de consultas dentro da app',
          'Pagamentos Stripe Connect por vendedor',
          'Firestore como camada de dados partilhada',
        ],
        value: 'Dois lados de um marketplace, e o dinheiro a chegar ao lado certo.',
      },
      'app-scan-docai-scanner': {
        category: 'Aplicacao Movel',
        title: 'Scanner de Documentos Scan DocAI',
        overview:
          'Um scanner de documentos que transforma o telemovel num scanner de PDF utilizavel - documentos, cartoes, livros e notas manuscritas - com detecao de contornos e reconhecimento de texto a fazer o que a camara nao faz.',
        features: [
          'Detecao de contornos e recorte automatico',
          'Filtros que tornam legivel uma pagina fotografada',
          'Reconhecimento de texto na pagina captada',
          'Exportacao para PDF e gestao de ficheiros no dispositivo',
        ],
        value: 'A camara de um telemovel a comportar-se como um scanner, pagina apos pagina.',
      },
      'app-vpn-client': {
        category: 'Aplicacao Movel',
        title: 'Cliente VPN Multi-Regiao',
        overview:
          'Um cliente VPN Android de um toque sobre OpenVPN, com lista global de servidores, sem conta para criar e sem necessidade de root - leve o suficiente para correr nos telemoveis que mais precisam dele.',
        features: [
          'Ligacao num toque com escolha automatica de servidor',
          'Lista de servidores em varias regioes',
          'Sem registo e sem necessidade de acesso root',
          'Integracao AdMob a sustentar a versao gratuita',
        ],
        value: 'Navegacao privada em qualquer Android, sem conta e sem dispositivo com root.',
      },
      'app-trakmd-doctor': {
        category: 'Aplicacao Movel',
        title: 'App trakMD para Medicos',
        overview:
          'Uma app de registo clinico eletronico para medicos e pacientes, feita para tornar a clinica mais acessivel: os pacientes marcam sozinhos, os lembretes saem automaticamente e as desmarcacoes de ultima hora sao preenchidas.',
        features: [
          'Marcacao online que preenche desmarcacoes de ultima hora',
          'Lembretes de consulta por SMS e email',
          'Perfil da clinica que o paciente encontra e recomenda',
          'Registos acessiveis a partir do telemovel do medico',
        ],
        value: 'Uma clinica mais facil de marcar do que de telefonar.',
      },
      'app-web-on-demand-service': {
        category: 'Plataforma Movel e Web',
        title: 'Plataforma de Servicos a Pedido',
        overview:
          'Um marketplace de servicos no formato UrbanClap, a cobrir tres publicos ao mesmo tempo: uma app de cliente para marcar, uma app de prestador para executar e um painel que gere ambas.',
        features: [
          'App de cliente para marcar qualquer servico listado',
          'App de prestador para aceitar e executar trabalho',
          'Painel de administracao que governa app e site',
          'Cinco gateways de pagamento e sistema de carteira',
        ],
        value: 'Tres aplicacoes que so funcionam por serem um so sistema.',
      },
      'web-hoteljobs-job-portal': {
        category: 'Aplicacao Web',
        title: 'Portal de Recrutamento HotelJobs',
        overview:
          'Uma plataforma de recrutamento para a hotelaria sul-africana, com tres paineis por tras - administracao, recrutador e candidato - e os problemas de volume de um portal de emprego que e mesmo usado.',
        features: [
          'Paineis de administracao, recrutador e candidato',
          'Envio de alertas de emprego a mais de 100.000 destinatarios via Amazon SES',
          'Pesquisa de CV com leitura de curriculos e conversao para PDF',
          'Marcacao Google for Jobs e automacao de sitemap',
        ],
        value: 'Um portal de emprego que continua a responder com uma lista de seis digitos.',
      },
      'web-aimro-market-research': {
        category: 'Website',
        title: 'Associacao de Estudos de Mercado AIMRO',
        overview:
          'Um site para a associacao que representa a industria irlandesa de estudos de mercado, que fala pelo setor junto das autoridades e mantem os seus padroes profissionais - por isso o site tem de se ler como autoridade e nao como brochura.',
        features: [
          'Tom institucional sustentado por toda a composicao',
          'Informacao de membros e de padroes sempre localizavel',
          'Responsivo em computador, tablet e telemovel',
          'Estrutura amiga da pesquisa para um site de autoridade',
        ],
        value: 'Uma associacao setorial que se le como tal, perante quem a representa.',
      },
      'web-betheme-wordpress-theme': {
        category: 'WordPress',
        title: 'Tema de Portefolio Personalizado sobre BeTheme',
        overview:
          'Um portefolio WordPress personalizado construido sobre BeTheme, com tudo - projetos, competencias, experiencia, testemunhos, pacotes de servico - editavel a partir do painel e nao do codigo.',
        features: [
          'Trabalho de tema personalizado sobre uma base BeTheme',
          'Projetos, competencias e testemunhos editados no painel',
          'Pacotes de servico mantidos sem programador',
          'Responsivo em computador, tablet e telemovel',
        ],
        value: 'Um portefolio que o proprio dono mantem atual sem abrir um editor.',
      },
      'web-learning-pool': {
        category: 'Website',
        title: 'Site Corporativo Learning Pool',
        overview:
          'O site de uma empresa que fornece plataformas de aprendizagem online, conteudo criativo e analise de formacao a organizacoes - uma oferta ampla que tem de ser navegavel antes de ser persuasiva.',
        features: [
          'Plataforma, conteudo e analise apresentados como uma oferta',
          'Paginas de solucao encaminhadas por publico',
          'Conteudo editorial e casos a sustentar o argumento',
          'Composicoes responsivas em toda a gama',
        ],
        value: 'Uma oferta ampla tornada navegavel, que e a primeira metade de ser persuasiva.',
      },
      'web-mammolink-healthcare': {
        category: 'Website',
        title: 'Portal de Acesso a Rastreio MammoLink',
        overview:
          'Um site para um prestador de rastreio movel, onde a tarefa inteira e levar um paciente de um resultado de pesquisa a uma marcacao sem um passo que o perca.',
        features: [
          'Paginas de servico escritas para pacientes e nao para clinicos',
          'Marcacao acessivel a partir de qualquer pagina',
          'Informacao de localizacao para um servico movel',
          'Acessibilidade e desempenho tratados como requisitos',
        ],
        value: 'Uma marcacao de rastreio feita por quem veio ler apenas uma pagina.',
      },
      'web-jenny-schatzle-coaching': {
        category: 'Website',
        title: 'Site de Coaching Pessoal em Kajabi',
        overview:
          'Um site de marca pessoal para uma coach e oradora, construido em Kajabi e desenhado para que a mensagem chegue primeiro e os programas, cursos e pedidos de palestra venham a seguir.',
        features: [
          'Design Kajabi personalizado em torno de uma marca pessoal',
          'Percursos separados para coaching, cursos e palestras',
          'Seccoes de comunidade e testemunhos',
          'Chamadas a acao claras para inscricao e contacto',
        ],
        value: 'Uma voz que chega antes da oferta, que e a ordem que converte.',
      },
      'web-shrader-mendez-attorney': {
        category: 'Website',
        title: 'Site do Escritorio Shrader Mendez',
        overview:
          'Um site de escritorio de advogados de defesa criminal, onde o visitante esta normalmente em apuros e a decidir depressa: areas de pratica, os proprios advogados e uma forma de contactar sem um formulario pelo caminho.',
        features: [
          'Paginas de area de pratica que um visitante ansioso consegue percorrer',
          'Perfis dos advogados a sustentar a credibilidade',
          'Contacto para consulta acessivel em todo o site',
          'Premios e reconhecimentos usados como prova',
        ],
        value: 'Um escritorio contactavel no momento em que alguem decide que precisa de um.',
      },
      'web-vizury-engage360': {
        category: 'Website',
        title: 'Site da Plataforma Vizury Engage360',
        overview:
          'O site de uma plataforma de marketing de comercio cuja tecnologia de retargeting alcanca compradores em programatico, push e email a partir de uma proposta integrada - um produto tecnico que tem de ser explicado a um profissional de marketing.',
        features: [
          'Uma plataforma tecnica explicada para quem compra marketing',
          'Canais apresentados como uma proposta e nao como tres produtos',
          'Paginas de produto encaminhadas por caso de uso',
          'Composicoes responsivas num site denso em conteudo',
        ],
        value: 'Uma plataforma vendida a quem a compra, e nao a quem a opera.',
      },
      'shop-multivendor-ecommerce': {
        category: 'Comercio Eletronico',
        title: 'App e Site de Comercio Multi-Vendedor',
        overview:
          'Uma plataforma de comercio a correr em Android, iOS e web a partir de uma unica retaguarda Laravel, com a loja configuravel pelo painel de administracao e nao por um deploy.',
        features: [
          'App e site configurados a partir de um so painel',
          'Dez gateways de pagamento e registo por OTP, Google e Facebook',
          'Categorias ilimitadas com avaliacoes e comentarios',
          'Produtos fisicos e digitais na mesma plataforma',
        ],
        value: 'Tres montras mantidas alinhadas por serem um so sistema por baixo.',
      },
      'shop-skyhigh-party-rentals': {
        category: 'Comercio Eletronico',
        title: 'Loja Sky High Party Rentals',
        overview:
          'Uma loja Magento adaptada para alugar em vez de vender - uma camada de reservas sobre o modelo de produto - com painel de administracao proprio e um rastreador de entregas em tempo real construido a par.',
        features: [
          'Reservas e disponibilidade sobre os produtos Magento',
          'Painel proprio com relatorios de agentes e de feedback',
          'Comparacao de vendas mensal e anual',
          'Aplicacao separada de rastreio de entregas em tempo real',
        ],
        value: 'Um negocio de aluguer gerido numa plataforma feita para vender, nao para emprestar.',
      },
      'shop-app-netplus-pharmacy': {
        category: 'Comercio Eletronico',
        title: 'App e Site da Farmacia Net Plus',
        overview:
          'Uma app de comercio para farmacia em Flutter com site que a acompanha, com um catalogo completo de categorias de medicamentos, marcas e linhas com desconto por tras de um fluxo de compra comum.',
        features: [
          'Catalogo de medicamentos por categoria, marca e tipo',
          'Site que partilha o catalogo da aplicacao',
          'Linhas com desconto em destaque sem quebrar o fluxo',
          'Encomendas e gestao de conta a partir do telemovel',
        ],
        value: 'Um balcao de farmacia acessivel pelo telemovel, com o catalogo intacto.',
      },
      'game-web-ludo-real-money': {
        category: 'Plataforma de Jogo',
        title: 'Plataforma de Torneios Ludo Real',
        overview:
          'Uma plataforma de torneios construida em torno de um tabuleiro de Ludo ao vivo: os quadros sao geridos pelo sistema, as carteiras suportam varias moedas e os vencedores sao pagos sem que um operador liquide nada a mao.',
        features: [
          'Sistema proprio de torneios e quadros',
          'Tabuleiro de jogo ao vivo redesenhado',
          'Pagamento automatico aos vencedores',
          'Carteira multi-moeda e painel do jogador',
        ],
        value: 'Um torneio que se liquida sozinho, que e a parte que um operador nao consegue fazer em escala.',
      },
      'app-web-bharat-support': {
        category: 'Plataforma Movel e Web',
        title: 'Bharat Support Servicos a Pedido',
        overview:
          'Um ecossistema de servicos a pedido em quatro partes: uma app para clientes marcarem trabalho, uma app para os prestadores o executarem, um painel que governa ambas e um site publico a frente delas.',
        features: [
          'App de cliente para marcar servicos',
          'App de prestador para aceitar e executar trabalhos',
          'Painel de administracao a governar os dois lados',
          'Site publico a frente da plataforma',
        ],
        value: 'Quatro superficies sobre uma plataforma, para que o trabalho marcado seja o que o prestador ve.',
      },
    },
  },
  examples: {
    badge: 'Projeto de referência',
    note: 'As entradas assinaladas como projetos de referência são demonstrações próprias, não trabalhos de clientes. Todas as restantes foram entregues a clientes reais.',
    items: {
      'shopify-fashion-theme': {
        category: 'Shopify',
        title: 'Tema Shopify Sob Medida para Marca de Moda',
        overview:
          'Uma loja Shopify construída como tema próprio, e não comprado — templates em Liquid, uma biblioteca de seções que o cliente reorganiza sozinho no editor de temas e uma página de produto pensada para o jeito como o cliente de moda realmente navega.',
        features: [
          'Tema Liquid próprio com seções reordenáveis',
          'Filtros de coleção, visualização rápida e guia de tamanhos',
          'Carrinho lateral e blocos de upsell sem apps extras',
          'Orçamento de performance mantido no celular',
        ],
        value:
          'Dá à marca uma loja que não se parece com nenhuma outra sem sair do Shopify — o cliente edita as páginas sozinho e paga por menos apps.',
      },
      'shopify-headless': {
        category: 'Comércio Headless',
        title: 'Loja Shopify Headless em Next.js',
        overview:
          'O mesmo catálogo Shopify servido por um front-end Next.js através da Storefront API — páginas renderizadas e cacheadas na borda, com o checkout devolvido ao Shopify para que pagamentos, impostos e antifraude continuem onde devem estar.',
        features: [
          'Consultas à Storefront API para catálogo, variantes e carrinho',
          'Páginas de produto renderizadas no servidor e revalidadas na borda',
          'Checkout entregue ao fluxo hospedado do Shopify',
          'TypeScript de ponta a ponta, da consulta ao componente',
        ],
        value:
          'Liberdade de front-end e velocidade de carregamento sem reconstruir pagamentos — o catálogo continua no Shopify e a experiência deixa de ser limitada pelo tema.',
      },
      'shopify-subscription-app': {
        category: 'App Shopify',
        title: 'App Shopify de Assinaturas e Kits',
        overview:
          'Um app Shopify embutido que acrescenta pedidos recorrentes e kits de produtos à loja — planos de venda, gestão de contratos e novas tentativas de cobrança, tudo renderizado dentro do admin do Shopify para o lojista nunca precisar sair de lá.',
        features: [
          'Planos de venda e contratos de assinatura',
          'Montador de kits precificado sobre o catálogo ao vivo',
          'Nova tentativa automática em pagamentos recusados',
          'Webhooks idempotentes para nada ser cobrado duas vezes',
        ],
        value:
          'Transforma compras avulsas em receita recorrente e impede que um cartão recusado vire cancelamento silencioso.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'Loja WooCommerce para Produtor Artesanal',
        overview:
          'Uma loja WooCommerce para uma fazenda que vende direto ao consumidor — produtos sazonais, caixas-presente, regras de frete na UE e impostos tratados pela loja em vez de na mão, sobre uma instalação WordPress que o dono já sabe usar.',
        features: [
          'Configuração de produtos, variações e caixas-presente',
          'Regras de frete e impostos por zona na UE',
          'Estoque, lotes de safra e pré-venda',
          'Checkout ajustado para conversão no celular',
        ],
        value:
          'Permite a um pequeno produtor vender em toda a Europa sem distribuidor e editar a loja pelo próprio admin WordPress que já tem.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Site Corporativo WordPress Multilíngue',
        overview:
          'Um site corporativo WordPress publicado em quatro idiomas a partir de um único fluxo editorial — páginas no editor de blocos, blocos reutilizáveis para tudo que se repete e SEO por idioma, para que cada mercado tenha as próprias páginas canônicas.',
        features: [
          'Páginas no editor de blocos com blocos reutilizáveis e centralizados',
          'Quatro idiomas com status de tradução visível ao editor',
          'Metadados, canônicas e sitemaps por idioma',
          'Core Web Vitals aprovados no celular e no desktop',
        ],
        value:
          'O time de marketing publica em todos os mercados sem depender de um desenvolvedor, e cada idioma se posiciona sozinho em vez de competir com os outros.',
      },
      'wordpress-lead-plugin': {
        category: 'Plugin WordPress',
        title: 'Plugin WordPress de Roteamento de Leads',
        overview:
          'Um plugin WordPress feito sob medida no lugar de uma pilha de plugins genéricos — leads capturados como post type próprio, roteados por regra para a equipe comercial certa e enviados ao CRM com uma fila de retentativa por trás.',
        features: [
          'Post type próprio com colunas e filtros no admin',
          'Roteamento por regra de origem, região e produto',
          'Sincronização com o CRM via REST, com retentativas e log de falhas',
          'Tudo gerenciado dentro do wp-admin',
        ],
        value:
          'Substitui quatro plugins sobrepostos por um que faz exatamente o trabalho: o lead chega sozinho à pessoa certa e nenhum se perde numa sincronização que falhou em silêncio.',
      },
      'react-native-shop-app': {
        category: 'Aplicativo Mobile',
        title: 'App de Compras em React Native para iOS e Android',
        overview:
          'Um aplicativo de compras publicado nas duas lojas a partir de uma única base React Native — catálogo, detalhe do produto, carrinho e pagamento, com comportamento nativo em cada plataforma e uma camada de API compartilhada por trás.',
        features: [
          'Uma base de código publicada na App Store e na Play Store',
          'Catálogo, busca e filtros sobre uma REST API',
          'Folhas de pagamento nativas e cartões salvos',
          'Notificações push de pedidos e reposição de estoque',
        ],
        value:
          'Duas lojas atendidas por um time e um ciclo de release, em vez de dois apps nativos se afastando aos poucos.',
      },
      'flutter-delivery-app': {
        category: 'Aplicativo Mobile',
        title: 'App Flutter de Entregas e Rastreamento de Motoristas',
        overview:
          'Dois aplicativos Flutter em um só projeto: o cliente acompanha o pedido em tempo real e o motorista trabalha uma rota otimizada, encerrando cada parada com assinatura, foto e marcação de GPS.',
        features: [
          'Posição do motorista e previsão de chegada ao vivo',
          'Rota otimizada com passagem para a navegação',
          'Comprovante de entrega: assinatura, foto e localização',
          'Envios enfileirados enquanto o motorista está sem sinal',
        ],
        value:
          'Reduz a quase nada as ligações de “cadê meu pedido?” e deixa para o operador um registro de entrega de cada parada.',
      },
      'android-field-service': {
        category: 'Aplicativo Mobile',
        title: 'App Android de Serviço em Campo com Sincronização Offline',
        overview:
          'Um app Android nativo para técnicos que trabalham em subsolos e casas de máquinas, onde não há sinal. Toda tela lê e grava primeiro num banco local, e a fila sincroniza com trilha de auditoria assim que o aparelho volta a ter rede.',
        features: [
          'Leitura e escrita totalmente offline num banco SQLite local',
          'Checklists de ordem de serviço, peças usadas e apontamento de horas',
          'Captura de assinatura e fotos no local',
          'Fila de sincronização com tratamento de conflito e log de auditoria',
        ],
        value:
          'O técnico deixa de preencher papel para redigitar depois — o escritório vê a ordem concluída minutos depois do fim do serviço, não dias.',
      },
      'laravel-booking-api': {
        category: 'Back-end e API',
        title: 'API Laravel de Reservas e Agendamento',
        overview:
          'Uma API Laravel para reservar um recurso finito, onde a parte difícil não é o endpoint e sim a corrida — duas pessoas pegando o mesmo horário no mesmo segundo. Resolvido com bloqueio de linha dentro de uma transação e coberto por testes de concorrência.',
        features: [
          'Endpoints de disponibilidade e reserva com escrita sob bloqueio',
          'Testes de concorrência que provam a ausência de reserva dupla',
          'Sincronização de agenda e e-mails de confirmação por evento',
          'Entrega de webhooks com retentativa automática',
        ],
        value:
          'Um sistema de reservas que continua correto sob carga — a única propriedade que o cliente percebe na hora quando falta.',
      },
      'php-crm-invoicing': {
        category: 'Aplicação de Negócio',
        title: 'CRM de Clientes e Faturamento em PHP',
        overview:
          'Um back-office em PHP para um escritório profissional: clientes, propostas, apontamento de horas e faturas num modelo só, com o vencimento de cada fatura em aberto visível já na primeira tela, e não escondido num relatório.',
        features: [
          'Clientes, propostas, horas e faturas em um único lugar',
          'Aging de faturas e acompanhamento de inadimplência',
          'Acesso por perfil para sócios e assistentes',
          'Geração de PDF e conciliação de pagamentos',
        ],
        value:
          'Mostra quem deve o quê e há quanto tempo sem ninguém refazer uma planilha — o número do qual o escritório realmente depende.',
      },
      'php-payment-gateway': {
        category: 'Integração',
        title: 'Camada PHP de Integração com Gateways de Pagamento',
        overview:
          'Uma única interface PHP na frente de três provedores de pagamento. O checkout chama autorizar, capturar e estornar; qual provedor executa é configuração. Os webhooks têm assinatura verificada e são à prova de reenvio, então uma entrega duplicada nunca credita o pedido duas vezes.',
        features: [
          'Interface única sobre cartão, carteira digital e meio de pagamento local',
          'Verificação de assinatura em todo webhook recebido',
          'Conciliação idempotente contra o razão de pedidos',
          'Provedor adicionado ou trocado sem tocar no checkout',
        ],
        value:
          'Adicionar um meio de pagamento vira uma mudança de configuração, e o razão continua certo mesmo quando o provedor manda o mesmo evento duas vezes.',
      },
      'whatsapp-telegram-bot': {
        category: 'Chatbot de Mensagens',
        title: 'Chatbot para WhatsApp e Telegram',
        overview:
          'Um único bot a servir WhatsApp e Telegram a partir de um backend Node.js. O cliente pergunta por uma encomenda, marca um atendimento ou fala com uma pessoa, e recebe resposta na aplicação que já tem aberta — com botões inline do Telegram e respostas interativas do WhatsApp geridos pela mesma lógica de conversa.',
        features: [
          'Um só motor de conversa por trás das duas plataformas',
          'Teclados inline no Telegram e respostas rápidas no WhatsApp',
          'Consulta de encomendas e marcações através de integrações REST',
          'Passagem para atendimento humano com a conversa completa',
        ],
        value:
          'Responde às perguntas de rotina onde os clientes já estão, a qualquer hora, e só envolve uma pessoa quando a conversa realmente precisa.',
      },
      'support-chatbot': {
        category: 'Chatbot',
        title: 'Chatbot de Apoio ao Cliente',
        overview:
          'Um assistente de apoio que responde a partir da base de conhecimento da empresa, resolve pedidos de rotina de ponta a ponta e encaminha o que for sensível para uma pessoa com a conversa completa. Disponível num widget de site e em canais de mensagens através da mesma API.',
        features: [
          'Correspondência de intenções com a base de conhecimento',
          'Passagem para humano com todo o contexto da conversa',
          'Widget de site e canais de mensagens a partir de um só backend',
          'Painel com aquilo a que o bot não conseguiu responder',
        ],
        value:
          'Retira à equipa as perguntas repetitivas de primeira linha e mostra exatamente que lacunas da base de conhecimento vale a pena preencher a seguir.',
      },
      'python-automation': {
        category: 'Automação em Python',
        title: 'Pipeline de Dados Agendado em Python',
        overview:
          'Uma tarefa Python agendada que recolhe dados de uma API e de uma folha de cálculo, valida e normaliza, escreve o resultado numa fonte única de verdade e envia um relatório por email — substituindo uma rotina manual que alguém fazia à mão todas as manhãs.',
        features: [
          'Extração, transformação e carregamento agendados por cron',
          'Validação e normalização antes de qualquer escrita',
          'Relatório automático assim que a execução termina',
          'Registo de execução e alertas de falha em cada corrida',
        ],
        value:
          'Transforma uma tarefa manual recorrente em algo que corre sozinho e avisa quando não corre, sem depender da memória de ninguém.',
      },
    },
  },
  process: {
    eyebrow: 'Processo de Trabalho',
    heading: 'Um caminho disciplinado da ideia à produção',
    intro:
      'O mesmo fluxo estruturado em cada trabalho — comunicação clara e progresso visível em cada etapa é o que os clientes referem sempre nos seus comentários.',
    steps: [
      {
        title: 'Análise de Requisitos',
        detail:
          'Começo pelo objetivo de negócio e não pela lista de funcionalidades — mapeando utilizadores, restrições, integrações e critérios de sucesso num âmbito claro e acordado.',
        output: 'Documento de âmbito e critérios de sucesso',
      },
      {
        title: 'Planeamento e Arquitetura',
        detail:
          'Escolha de tecnologias, modelação de dados e contratos de API, documentados e justificados face a custo, escala e facilidade de manutenção.',
        output: 'Arquitetura e modelo de dados',
      },
      {
        title: 'Planeamento de UI/UX',
        detail:
          'Fluxos de utilizador, estrutura de ecrãs e layouts responsivos definidos antes de começar o desenvolvimento, para que a interface sirva o fluxo de trabalho em vez de o decorar.',
        output: 'Fluxos e layouts responsivos',
      },
      {
        title: 'Desenvolvimento e Integração',
        detail:
          'Implementação limpa e baseada em componentes, em incrementos revisíveis, com capturas de ecrã partilhadas em cada fase para que o progresso seja visível e não apenas relatado.',
        output: 'Incrementos funcionais, sob controlo de versões',
      },
      {
        title: 'Testes e Revisões',
        detail:
          'Verificação do comportamento em dispositivos e tamanhos de ecrã reais, seguida de revisões rápidas e precisas — a parte do trabalho que os clientes mais notam.',
        output: 'Versões verificadas e revisões rápidas',
      },
      {
        title: 'Publicação e Manutenção',
        detail:
          'Colocação controlada em produção com documentação e transferência de conhecimento, seguida de suporte contínuo, otimização e novas iterações.',
        output: 'Publicação e plano de suporte',
      },
    ],
  },
  footer: {
    blurb:
      'Engenharia full-stack a partir de Itália em plataformas web, e-commerce, aplicações móveis, APIs REST e automação de processos — entregue remotamente a clientes de todo o mundo.',
    columns: ['Explorar', 'Trabalho'],
    links: {
      about: 'Sobre',
      services: 'Serviços',
      skills: 'Competências Técnicas',
      projects: 'Projetos',
      process: 'Processo de Trabalho',
    },
    expertise: ['Web Full-Stack', 'E-Commerce', 'Apps Móveis', 'APIs REST', 'Design Responsivo', 'Automação'],
  },
}

/* ========================================================================== */
/*  ESPAÑOL                                                                    */
/* ========================================================================== */

const es = {
  htmlLang: 'es',
  ui: {
    skipToContent: 'Ir al contenido',
    primaryNav: 'Principal',
    mobileNav: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    backToTop: 'Volver arriba',
    languageLabel: 'Idioma',
    chooseLanguage: 'Elegir idioma',
    filters: {
      all: 'Todos',
      ecommerce: 'E-commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP y Laravel',
      mobile: 'Móvil',
      frontend: 'Front-end',
      api: 'APIs e Integraciones',
      chatbot: 'Chatbots',
      automation: 'Automatización',
    },
    viewDetails: 'Ver detalles',
    seeItLive: 'Verlo en vivo',
    liveSite: 'Sitio en vivo',
    viewLive: 'Ver proyecto',
    loadMore: 'Cargar más',
    switchToLight: 'Cambiar al tema claro',
    switchToDark: 'Cambiar al tema oscuro',
    closeDetails: 'Cerrar',
    noMatches: 'Todavía no hay nada en esta categoría.',
    filterLabel: 'Filtrar proyectos por disciplina',
    technologiesUsed: 'Tecnologías Utilizadas',
    keyFeatures: 'Funcionalidades Clave',
    businessValue: 'Valor para el Negocio',
    projectWord: 'Proyecto',
    exampleWord: 'Ejemplo',
    certifications: 'Certificaciones',
    languagesTitle: 'Idiomas',
    completedEngagements: 'Trabajos completados',
    clientPrefix: 'Cliente',
    viewProfile: 'Ver el perfil verificado',
    workanaNote:
      'Perfil de Workana verificado — valoración 5.0, nivel Silver, primer puesto en Italia en TI y Programación.',
    rightsReserved: 'Todos los derechos reservados.',
    builtWith: 'Diseñado y desarrollado con React — optimizado para rendimiento y accesibilidad.',
  },
  profileTitle: 'Desarrollador Full-Stack Senior | Web, Móvil y E-Commerce',
  navRole: 'Desarrollador Full-Stack Senior',
  tagline:
    'Desarrollador Full-Stack Senior creando soluciones digitales fiables, escalables e innovadoras.',
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    skills: 'Habilidades',
    projects: 'Proyectos',
    process: 'Proceso',
  },
  hero: {
    badge: 'Primer puesto en TI y Programación en Italia en Workana',
    headline:
      'Creando Soluciones Web, Móviles y de E-Commerce Escalables para Empresas Modernas',
    headlineAccent: 'E-Commerce Escalables',
    intro:
      'Soy Leonardo Antonio Audia, desarrollador full-stack radicado en Italia. Construyo sitios y aplicaciones web y móviles que funcionan realmente bien: rápidas, claras y fáciles de usar en cualquier pantalla. Trabajando de forma independiente desde 2013, he entregado plataformas de e-commerce, aplicaciones móviles, sitios corporativos responsivos y automatización de procesos internos para clientes de varios sectores y países.',
    primaryCta: 'Ver Proyectos',
    secondaryCta: 'Conocer Mi Experiencia',
    stats: [
      'Años de Experiencia',
      'Valoración de Clientes en Workana',
      'En Italia · TI y Programación',
      'Idiomas Hablados',
    ],
    pillars: ['Full-Stack', 'Móvil', 'E-Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'Sobre Mí',
    heading: 'La parte técnica rara vez es la parte difícil',
    paragraphs: [
      'Hola, soy Leonardo Antonio. Construyo aplicaciones web y móviles que funcionan realmente bien: rápidas, claras y fáciles de usar en cualquier pantalla.',
      'Trabajo principalmente con React.js, Next.js y Node.js en plataformas a medida, y con WordPress y WooCommerce cuando el cliente necesita gestionar su propio contenido sin depender de un desarrollador. También desarrollo aplicaciones móviles para Android e iOS con React Native, además de integraciones de API y chatbots.',
      'Más de 10 años construyendo productos digitales me enseñaron que la parte técnica rara vez es la parte difícil. Lo difícil es entender qué necesita el negocio antes de escribir código, y decirlo a tiempo cuando algo no va a funcionar como se espera. Por eso trabajo con comunicación constante, avance visible en todo momento y revisiones rápidas.',
      'Si tienes un proyecto en mente, cuéntame qué quieres lograr y te daré una visión honesta de cómo lo abordaría.',
    ],
    highlights: [
      ['Independiente desde 2013', 'Más de una década entregando aplicaciones web y móviles como profesional independiente.'],
      ['La comunicación primero', 'Actualizaciones claras y capturas de pantalla en cada etapa, con revisiones rápidas y precisas.'],
      ['Entrega multilingüe', 'Italiano, inglés, portugués y español: colaboración remota sin barrera idiomática.'],
      ['Responsivo por defecto', 'Cada interfaz construida para seguir siendo rápida, clara y usable en cualquier pantalla.'],
    ],
    facts: [
      ['Ubicación', 'Italia'],
      ['Experiencia', '10+ Años · Desde 2013'],
      ['Valoración', '5.0 ★ en Workana'],
      ['Clasificación', '1.º en Italia · TI y Programación'],
      ['Enfoque', 'Web · Móvil · E-Commerce'],
      ['Entrega', 'Remota, en todo el mundo'],
    ],
    languageLevels: ['Nativo o bilingüe', 'Avanzado', 'Intermedio', 'Intermedio'],
    languageNames: ['Italiano', 'Inglés', 'Portugués', 'Español'],
  },
  services: {
    eyebrow: 'Servicios',
    heading: 'Lo que construyo para mis clientes',
    intro:
      'Seis capacidades que reflejan el trabajo que realmente entrego: desde un sitio corporativo responsivo hasta una plataforma de e-commerce completa con su propia capa de API.',
    items: [
      {
        title: 'Desarrollo Web Full-Stack',
        summary: 'Plataformas web escalables y fáciles de mantener.',
        description:
          'Aplicaciones web completas con React.js o Next.js en el front-end y Node.js, Nest.js o PHP por detrás, estructuradas para el rendimiento y el mantenimiento a largo plazo.',
        points: ['Front-ends en React.js y Next.js', 'Servicios en Node.js y Nest.js', 'Bases de código en TypeScript'],
      },
      {
        title: 'Desarrollo de E-Commerce',
        summary: 'Tiendas hechas para vender y fáciles de gestionar.',
        description:
          'Tiendas a medida y plataformas de retail multimarca, además de proyectos en WordPress y WooCommerce: catálogo, carrito, checkout y una administración que tu equipo puede usar de verdad.',
        points: ['Tiendas a medida', 'WooCommerce y WordPress', 'Catálogos multimarca'],
      },
      {
        title: 'Desarrollo de Aplicaciones Móviles',
        summary: 'Apps multiplataforma con aspecto nativo.',
        description:
          'Aplicaciones móviles para Android e iOS con React Native, además de trabajo en Flutter y Windows Mobile y diseño de aplicaciones, entregadas en una sola base de código.',
        points: ['Android e iOS con React Native', 'Flutter y Windows Mobile', 'Diseño de aplicaciones móviles'],
      },
      {
        title: 'Desarrollo e Integración de APIs REST',
        summary: 'Servicios de backend seguros y eficientes.',
        description:
          'APIs REST y servicios web en Node.js y Nest.js, además de la integración fiable de las plataformas externas y los sistemas internos de los que ya depende el negocio.',
        points: ['Diseño de APIs REST', 'Integraciones con terceros', 'Conexión con sistemas internos'],
      },
      {
        title: 'Diseño Web Responsivo y Landing Pages',
        summary: 'Interfaces rápidas y claras en cualquier pantalla.',
        description:
          'Sitios responsivos modernos y landing pages en HTML, CSS y JavaScript: limpios, rápidos de cargar y correctos desde el móvil hasta el escritorio.',
        points: ['Diseño mobile-first', 'Desarrollo de landing pages', 'Correcto en todos los dispositivos'],
      },
      {
        title: 'Chatbots y Automatización de Procesos',
        summary: 'Menos trabajo repetitivo cada día.',
        description:
          'Desarrollo de chatbots y automatización de flujos con Python e integraciones REST, incluidas plataformas de procesos internos que sustituyen rutinas manuales basadas en hojas de cálculo.',
        points: ['Desarrollo de chatbots', 'Automatización de flujos de trabajo', 'Scripts e integraciones en Python'],
      },
    ],
  },
  skills: {
    eyebrow: 'Habilidades Técnicas',
    heading: 'La tecnología detrás de las soluciones',
    intro:
      'Todas las tecnologías aquí listadas aparecen en mi perfil verificado de Workana.',
    categories: [
      ['Frontend', 'Interfaces que siguen siendo rápidas y claras en cualquier pantalla.'],
      ['Backend', 'Servicios de servidor y las APIs que se apoyan en ellos.'],
      ['Móvil', 'Entrega multiplataforma desde una sola base de código.'],
      ['E-Commerce', 'Tiendas, catálogos y los sistemas que los sostienen.'],
      ['Responsivo y UI', 'La disciplina detrás de cada maquetación que entrego.'],
      ['Automatización', 'Chatbots y flujos que reducen el esfuerzo manual.'],
    ],
  },
  projects: {
    eyebrow: 'Trabajos Seleccionados',
    heading: 'Proyectos en web, móvil y e-commerce',
    intro:
      'Entregas a clientes de mi portafolio en Workana, junto con proyectos de referencia propios, filtrables por disciplina. Cada entrada indica las tecnologías realmente utilizadas; los proyectos de referencia están señalados.',
    items: {
      'premium-fashion': {
        category: 'E-Commerce',
        title: 'Sitio de E-Commerce de Moda Premium',
        overview:
          'Una tienda de moda premium construida como front-end React.js a medida sobre un backend Node.js: catálogo de productos, navegación por colecciones, carrito y checkout, con el cuidado visual que exige una marca de moda y la velocidad que espera un comprador.',
        features: [
          'Tienda y páginas de colección en React.js a medida',
          'Backend Node.js sirviendo catálogo y pedidos',
          'Flujo de carrito y checkout',
          'Maquetación responsiva del móvil al escritorio',
        ],
        value:
          'Le da a la marca una tienda totalmente propia: una presentación a la altura del producto y una base de código que crece con el catálogo en lugar de limitarlo.',
      },
      'modular-furniture': {
        category: 'E-Commerce',
        title: 'Plataforma de E-Commerce de Mobiliario Modular',
        overview:
          'Una plataforma de e-commerce para mobiliario modular, donde cada producto es en realidad un conjunto de opciones configurables. El front-end React.js gestiona la configuración y la elección de variantes mientras Node.js mantiene precios y disponibilidad coherentes.',
        features: [
          'Productos configurables y selección de variantes',
          'Fichas de producto con precio actualizado por opción',
          'Servicios Node.js para catálogo y stock',
          'Carrito construido en torno a artículos configurados',
        ],
        value:
          'Permite al cliente montar y presupuestar su propia configuración online, de modo que el equipo comercial deja de ser el cuello de botella en cada presupuesto.',
      },
      'multi-brand': {
        category: 'Plataforma y API',
        title: 'Plataforma de E-Commerce de Moda Multimarca',
        overview:
          'Una plataforma de retail multimarca en AngularJS con backend Nest.js: varias marcas sobre infraestructura compartida, cada una con su catálogo, servidas mediante una capa de API estructurada.',
        features: [
          'API Nest.js sirviendo varias tiendas de marca',
          'Infraestructura compartida de catálogo y pedidos',
          'Interfaz de administración en AngularJS',
          'Endpoints estructurados y documentados',
        ],
        value:
          'Una plataforma que mantener en lugar de varias, de modo que añadir una marca es configuración y no un desarrollo nuevo.',
      },
      'fitness-platform': {
        category: 'Aplicación Móvil',
        title: 'Plataforma Móvil de Entrenamiento Deportivo y Fitness',
        overview:
          'Una aplicación móvil multiplataforma para entrenamiento deportivo, que conecta a entrenadores y atletas en torno a planes y registro de sesiones. Construida en React Native, con el diseño de la aplicación realizado en el mismo trabajo.',
        features: [
          'Planes de entrenamiento y registro de sesiones',
          'Vistas de entrenador y atleta en la misma app',
          'Historial de progreso y feedback de actividad',
          'Interfaz pensada para usar con una mano durante el entrenamiento',
        ],
        value:
          'Saca el entrenamiento de las hojas de cálculo y las apps de mensajería, dando al entrenador un único lugar para gestionar programas y al atleta una visión clara del siguiente paso.',
      },
      'apex-logistics': {
        category: 'Aplicación Web',
        title: 'Apex Logistics',
        overview:
          'Un panel interno de operaciones en React.js y TypeScript que reúne proyectos activos, tareas, plazos, documentos y facturación en un único espacio de trabajo, para que el equipo vea de un vistazo el estado de todo lo que tiene en marcha.',
        features: [
          'Vista general de proyectos con estado, avance y plazos',
          'Listas de tareas y calendario en una sola vista',
          'Gráficos de actividad y gestión documental',
          'Base de código en TypeScript para seguridad a largo plazo',
        ],
        value:
          'Sustituye hojas de cálculo dispersas y herramientas separadas por un único espacio, haciendo visible el estado de cada proyecto sin tener que pedir actualizaciones.',
      },
      'lumina-studio': {
        category: 'Plataforma Web',
        title: 'Lumina Studio',
        overview:
          'Un sitio de estudio construido con Next.js y CSS3: una presencia rápida y moderna, con páginas renderizadas en servidor, tipografía cuidada y una maquetación que realza el trabajo del estudio en lugar de competir con él.',
        features: [
          'Páginas renderizadas en servidor con Next.js',
          'Presentación de trabajos y casos de estudio',
          'Maquetación y animaciones en CSS3 escritas a mano',
          'Construcción orientada a rendimiento y SEO',
        ],
        value:
          'Un sitio que carga de inmediato y presenta el trabajo del estudio con claridad: la primera impresión por la que se juzga a un negocio creativo.',
      },
      'pipefy-protocols': {
        category: 'Automatización de Procesos',
        title: 'Central de Protocolos Internos en Pipefy',
        overview:
          'Una central de protocolos internos implementada en Pipefy para una distribuidora farmacéutica, que sustituye una rutina manual informal por un proceso estructurado y trazable. Entregada en dos fases para el mismo cliente.',
        features: [
          'Entrada y derivación estructuradas de los protocolos internos',
          'Etapas definidas con responsabilidad clara en cada paso',
          'Movimiento automático entre fases del proceso',
          'Entregada en dos fases de proyecto',
        ],
        value:
          'Da a la distribuidora una ruta única y trazable para los protocolos internos, sin depender de que alguien recuerde un proceso informal.',
      },
      'keyzar-jewelry': {
        category: 'Shopify · Joyeria',
        title: 'Tienda Keyzar Jewelry',
        overview:
          'Una tienda Shopify para una marca de alta joyeria que vende anillos de compromiso, alianzas y diamantes de laboratorio, con un asistente en la pagina para responder las preguntas previas a una compra de este tamano.',
        features: [
          'Catalogos de anillos, alianzas y diamantes con navegacion guiada',
          'Paginas educativas sobre talla, quilates y engaste',
          'Chatbot en el sitio para dudas de talla y envio',
          'Reserva de consulta para pedidos de alto valor',
        ],
        value: 'Una compra que se investiga durante semanas, resuelta en la pagina y no por correo.',
      },
      'instalador-portas': {
        category: 'Shopify · Servicios',
        title: 'Sitio Instalador de Portas',
        overview:
          'Un sitio para una empresa de instalacion de puertas que cubre el este, oeste, norte y sur de Sao Paulo y la region ABC, hecho para convertir una visita en una solicitud de presupuesto en lugar de una llamada.',
        features: [
          'Zonas de servicio y tipos de instalacion expuestos con claridad',
          'Solicitud de presupuesto accesible desde cualquier seccion',
          'Chatbot que califica el trabajo antes de la respuesta humana',
          'Recuento de instalaciones completadas como prueba de volumen',
        ],
        value: 'Un negocio de servicios que agenda trabajo desde la pagina, a cualquier hora.',
      },
      'rembrr-app': {
        category: 'Sitio de Producto · SaaS',
        title: 'Asistente de Recordatorios Rembrr',
        overview:
          'El sitio de producto de un asistente que organiza recordatorios, tareas y entradas de calendario a partir del habla, presentado en espanol y con la prueba gratuita como unica llamada a la accion.',
        features: [
          'Recorrido de producto construido sobre la idea de la voz',
          'Planes y alta de prueba en una sola pagina',
          'Asistente que responde dudas de funciones en la pagina',
          'Textos multilingues para un mercado hispanohablante',
        ],
        value: 'Un producto explicado con las palabras de quien lo usa, no con listas de funciones.',
      },
      'dawson-home-care': {
        category: 'Shopify · Salud',
        title: 'Dawson & Dawson Home Care',
        overview:
          'Un sitio para un proveedor de cuidados a domicilio activo desde 2002, escrito para familias que deciden bajo presion: servicios, licencias y disponibilidad visibles sin un formulario de por medio.',
        features: [
          'Servicios y tipos de cuidado explicados sin jerga',
          'Licencias, seguro y disponibilidad 24/7 en primer plano',
          'Evaluacion gratuita como accion principal',
          'Chatbot que responde dudas de elegibilidad y cobertura',
        ],
        value: 'Una familia encuentra lo que necesita a medianoche, que suele ser cuando busca.',
      },
      'dentalis': {
        category: 'Shopify · Dental',
        title: 'Plataforma Dentalis para Clinicas',
        overview:
          'Un sitio para un producto de gestion de clinicas dentales, con la promesa de administracion automatizada 24 horas para que la clinica atienda pacientes y no su agenda, con WhatsApp como via de entrada.',
        features: [
          'Posicionamiento construido sobre la programacion automatica',
          'Resultados presentados en cifras y no en adjetivos',
          'Paso a WhatsApp desde cualquier pagina',
          'Estructura de contenidos y blog para trafico de busqueda',
        ],
        value: 'Las clinicas empiezan la conversacion en el canal que ya usan todo el dia.',
      },
      'elevar-empilhadeiras': {
        category: 'Shopify · Industrial',
        title: 'Elevar Alquiler de Montacargas',
        overview:
          'Un sitio para una empresa de alquiler de montacargas en Caxias do Sul, directo y de alto contraste para un comprador industrial que quiere la maquina, las condiciones y una persona en WhatsApp, en ese orden.',
        features: [
          'Flota y condiciones de alquiler sin catalogo que recorrer',
          'Diseno de alto contraste legible en un movil de almacen',
          'Consulta por WhatsApp fija en pantalla',
          'Cobertura de servicio indicada por region',
        ],
        value: 'Una consulta queda a un toque desde la nave, donde nadie rellena formularios.',
      },
      'cda-metais': {
        category: 'Shopify · Industria',
        title: 'CDA Metais Sistemas de Aluminio',
        overview:
          'Un sitio para un fabricante de sistemas de aluminio que cubre carpinteria, fachadas, extrusion, pintura electrostatica y distribucion nacional, guiado por los edificios donde acaba el trabajo.',
        features: [
          'Fachadas terminadas sosteniendo el argumento del producto',
          'Capacidades divididas en extrusion, pintura y distribucion',
          'Galeria de proyectos como prueba principal',
          'Via de WhatsApp para consultas de especificacion',
        ],
        value: 'Un fabricante juzgado por edificios acabados y no por una ficha tecnica.',
      },
      'tools4trade': {
        category: 'Shopify · Herramientas',
        title: 'Tienda Online Tools4Trade',
        overview:
          'Una tienda britanica de herramientas profesionales con electroportatiles, almacenaje, proteccion y ropa de trabajo, organizada para que un profesional encuentre una pieza por categoria, marca o referencia sin salir de la cabecera.',
        features: [
          'Busqueda por categoria, marca o referencia desde la cabecera',
          'Franjas promocionales para lotes, sorteos y liquidacion',
          'Navegacion por marca en un catalogo profundo',
          'Consulta por WhatsApp para stock y precios profesionales',
        ],
        value: 'Un catalogo profundo que aun responde una pregunta de una sola pieza en segundos.',
      },
      'xelan-wheelchairs': {
        category: 'Shopify · Movilidad',
        title: 'Tienda de Sillas de Ruedas Xe Lan Hoang Son',
        overview:
          'Una tienda vietnamita que vende sillas de ruedas manuales, electricas y especiales, donde quien compra suele ser un familiar comparando modelos por precio, peso y tamano plegado.',
        features: [
          'Tipos divididos en manual, electrica y especial',
          'Precios y descuentos visibles en cada tarjeta',
          'Comparacion por peso, ancho y tamano plegado',
          'Contacto telefonico y por mensajeria fijo en la pagina',
        ],
        value: 'Una categoria que se compra una vez, con prisa, hecha comparable de un vistazo.',
      },
      'breck-and-fox': {
        category: 'Shopify · Hogar y Decoracion',
        title: 'Tienda Breck + Fox',
        overview:
          'Una tienda de hogar que abarca iluminacion, exterior, decoracion, cocina, comedor y bano, donde el producto se fotografia como una estancia y no como una cuadricula.',
        features: [
          'Fotografia de ambiente encabezando cada coleccion',
          'Seis departamentos bajo una sola navegacion',
          'Franjas de rebajas sin romper la estetica',
          'Carrito y busqueda accesibles en todas las paginas',
        ],
        value: 'Mobiliario vendido como se elige: en una estancia, no en un estante.',
      },
      'garnet-marketplace': {
        category: 'Shopify · Marketplace',
        title: 'Marketplace Multivendedor Garnet',
        overview:
          'El sitio de producto de una app de Shopify que convierte una tienda unica en un marketplace B2B y B2C multivendedor, dirigido a comerciantes que quieren que el alta de vendedores deje de ser su problema.',
        features: [
          'Posicionamiento para marketplaces B2B y B2C en una plataforma',
          'Alta de vendedores presentada como diferencial',
          'Documentacion y precios accesibles desde la cabecera',
          'Hoja de ruta de escalado explicada paso a paso',
        ],
        value: 'Una tienda se vuelve marketplace sin convertirse en un proyecto de plataforma.',
      },
      'lumenwild-fine-art': {
        category: 'Shopify · Arte',
        title: 'Galeria Lumenwild Fine Art',
        overview:
          'Una tienda-galeria de fotografia de paisaje y naturaleza, con la contencion que la obra pide: imagen a sangre, tipografia fina y casi ninguna interfaz entre el visitante y la foto.',
        features: [
          'Galeria a sangre con la minima interfaz',
          'Tamanos y acabados de impresion elegidos en la ficha',
          'Paginas sobre la obra y el proceso',
          'Navegacion discreta que no invade la imagen',
        ],
        value: 'Fotografia vendida como la cuelga una galeria, no como la lista un catalogo.',
      },
      'velocitek-prostart': {
        category: 'Shopify · Instrumentos Nauticos',
        title: 'Pagina de Producto Velocitek ProStart',
        overview:
          'Una pagina de producto unico para un cronometro de regata, escrita para quien ya conoce la categoria y quiere latencia, montaje y contenido de la caja antes que nada.',
        features: [
          'Guiada por la especificacion y no por el estilo de vida',
          'Contenido de la caja indicado antes del boton de compra',
          'Origen de fabricacion y plazo de entrega declarados',
          'Soporte y manual enlazados desde la pagina',
        ],
        value: 'Un comprador tecnico recibe primero la especificacion y nunca el marketing.',
      },
      'daphnes-headcovers': {
        category: 'Shopify · Accesorios de Golf',
        title: 'Tienda Daphne\'s Headcovers',
        overview:
          'Una tienda de fundas de palos de golf hechas a mano desde 1988, donde el producto es un personaje y el catalogo se recorre como una jugueteria.',
        features: [
          'Compra por animal, personaje y licencia',
          'Mas vendidos y novedades en la portada',
          'Historia del oficio junto al catalogo',
          'Numero de resenas como prueba social',
        ],
        value: 'Un regalo que se compra por gusto, presentado para que el gusto sobreviva al pago.',
      },
      'conscious-ink': {
        category: 'Shopify · Lifestyle',
        title: 'Tatuajes Temporales Conscious Ink',
        overview:
          'Una tienda de tatuajes temporales de afirmaciones, donde el producto es una frase que alguien quiere leer en su propia piel, asi que el texto pesa tanto como la fotografia.',
        features: [
          'Fichas guiadas por el mensaje y no por la referencia',
          'Citas de clientes como prueba principal',
          'Lotes y sets de regalo como via de venta adicional',
          'Umbral de envio gratis indicado en la cabecera',
        ],
        value: 'Un producto cuyo valor es la frase, expuesto por la frase.',
      },
      'wildfang': {
        category: 'Shopify · Moda',
        title: 'Tienda de Ropa Wildfang',
        overview:
          'Una tienda de ropa con un punto de vista claro, con trajeria, ropa de trabajo y prendas diarias, fotografiada en personas reales y organizada para que la marca se lea antes que el catalogo.',
        features: [
          'Imagen editorial por delante de la cuadricula',
          'Compra por categoria con trajeria y ropa de trabajo separadas',
          'Rebajas y novedades sin diluir la marca',
          'Guia de tallas y ajuste en la ficha de producto',
        ],
        value: 'Una marca a la que la gente se apunta, con espacio para ser marca antes que tienda.',
      },
      'video-milkshake': {
        category: 'Shopify · Productos Digitales',
        title: 'Tienda de Recursos Video Milkshake',
        overview:
          'Una tienda que vende mattes de pelicula, texturas y recursos de edicion en descarga, donde cada producto debe mostrarse en movimiento antes de que nadie pueda juzgar si merece la compra.',
        features: [
          'Fichas guiadas por la vista previa para recursos que solo se ven en movimiento',
          'Recursos agrupados por categoria y por lote',
          'Entrega inmediata por descarga tras el pago',
          'Precio de lote frente al precio unitario',
        ],
        value: 'Bienes digitales que se venden por la vista previa, expuestos en torno a ella.',
      },
      'miro-tea': {
        category: 'Shopify · Alimentacion',
        title: 'Tienda Online Miro Tea',
        overview:
          'La tienda online de una casa de te de Seattle que vende hoja de origen unico, mezclas y utensilios, donde un te a granel debe describirse lo bastante bien como para que alguien lo compre sin olerlo.',
        features: [
          'Hoja fotografiada individualmente y no en el envase',
          'Colecciones por nivel de cafeina, temporada y origen',
          'Utensilios de te junto a la hoja',
          'Notas de cata como nucleo de cada ficha',
        ],
        value: 'El conocimiento del mostrador puesto por escrito, para que la hoja se venda a distancia.',
      },
      'take-care-shop': {
        category: 'Shopify · Belleza y Bienestar',
        title: 'Take Care Belleza y Bienestar',
        overview:
          'Una tienda de belleza y bienestar en Washington DC con gamas de rostro, cuerpo, cabello y bienestar, de paleta suave y con una portada que ha sostenido lanzamientos y una liquidacion.',
        features: [
          'Departamentos divididos en rostro, cuerpo, cabello y bienestar',
          'Directorio de marcas junto a la navegacion por categoria',
          'Portada capaz de sostener mensajes de campana',
          'Rutas de regalo y lotes por el catalogo',
        ],
        value: 'Una tienda curada cuya portada cambia de mensaje sin reconstruirla.',
      },
      'illumivein': {
        category: 'Shopify · Dispositivo Medico',
        title: 'Tienda del Localizador de Venas Illumivein',
        overview:
          'Una tienda de dispositivo unico para un localizador de venas portatil vendido a enfermeras, flebotomistas y paramedicos, donde la decision depende de si funciona en la sala donde trabajan.',
        features: [
          'Imagenes de demostracion con el dispositivo en uso',
          'Datos regulatorios y de bateria indicados con claridad',
          'Precio unico, decision unica, sin configurador',
          'Garantia y condiciones de devolucion junto al boton de compra',
        ],
        value: 'Una herramienta clinica vendida por evidencia y no por adjetivos.',
      },
      'perricone-md': {
        category: 'Shopify · Cosmetica',
        title: 'Tienda de Cosmetica Perricone MD',
        overview:
          'Una tienda de cosmetica con catalogo amplio entre tienda, mas vendidos, ofertas y liquidacion, que sostiene mensajes promocionales sin enterrar la rutina que el cliente vino a reponer.',
        features: [
          'Catalogo dividido en tienda, mas vendidos, ofertas y liquidacion',
          'Barras promocionales para rebajas y codigos de temporada',
          'Fidelizacion y captura de correo integradas en la cabecera',
          'Navegacion por rutina, preocupacion y tipo de producto',
        ],
        value: 'Un catalogo grande que aun devuelve al cliente habitual a su rutina.',
      },
      'hisense-bolivia': {
        category: 'Shopify · Electronica de Consumo',
        title: 'Tienda Hisense Bolivia',
        overview:
          'Una tienda regional para una marca de electronica de consumo con televisores, refrigeradores, lavadoras y aire acondicionado, que lleva la creatividad de la campana global a un catalogo local.',
        features: [
          'Creatividad de campana recorriendo la portada',
          'Categorias divididas en television, refrigeracion y climatizacion',
          'Especificaciones comparables dentro de cada categoria',
          'Disponibilidad local e informacion de distribuidores',
        ],
        value: 'Una marca global presentada en local sin perder la campana con la que llego.',
      },
      'troubadour-goods': {
        category: 'Shopify · Bolsos y Piel',
        title: 'Tienda Troubadour Goods',
        overview:
          'Una tienda de bolsos tecnicos y articulos de piel, fotografiada en movimiento por la ciudad, donde el argumento de un bolso se hace mostrandolo en uso y no posado.',
        features: [
          'Video y fotografia de estilo de vida encabezando el catalogo',
          'Colecciones por viaje, trabajo y diario',
          'Premios y prensa usados como prueba',
          'Detalle de materiales y garantia en la ficha',
        ],
        value: 'Una compra meditada defendida en uso y no en una foto de estudio.',
      },
      'velodrome-shop': {
        category: 'WordPress · Ciclismo',
        title: 'Tienda de Ciclismo en Pista Velodrome',
        overview:
          'Una tienda de equipamiento de ciclismo en pista - cuadros, ruedas, transmision, mando y herramientas - hecha para un deporte donde las piezas deben encajar con la disciplina antes de importar.',
        features: [
          'Catalogo organizado por disciplina de pista y tipo de pieza',
          'Compatibilidad de transmision y componentes visible pronto',
          'Ruta de pedido rapido para quien ya sabe la pieza',
          'Imagen editorial tomada en la propia pista',
        ],
        value: 'Un catalogo especializado que respeta como compran los especialistas de verdad.',
      },
      'belay-solutions': {
        category: 'WordPress · Personal',
        title: 'Sitio BELAY Solutions',
        overview:
          'Un sitio para una empresa que coloca asistentes y contables en Estados Unidos con negocios, donde el visitante compara una contratacion con un servicio y necesita que la diferencia sea obvia.',
        features: [
          'Servicios de asistencia y financieros en rutas separadas',
          'Precio enmarcado frente al coste de una contratacion a tiempo completo',
          'Solicitud de propuesta en lugar de tarifa publica',
          'Biblioteca de recursos alimentando la busqueda organica',
        ],
        value: 'Un servicio vendido contra la alternativa que el comprador ya esta sopesando.',
      },
      'webfx': {
        category: 'WordPress · Agencia',
        title: 'Sitio de la Agencia WebFX',
        overview:
          'Un sitio de agencia amplio que abarca SEO, medios pagados, CRO y servicios web, donde el argumento es ingresos y no trafico, y la prueba debe verse antes del formulario.',
        features: [
          'Servicios divididos en busqueda, pago, CRO y UX',
          'Cifras de ingresos y de clientes como afirmacion inicial',
          'Solicitud de propuesta accesible desde cualquier pagina',
          'Contenido extenso de recursos y glosario para busqueda',
        ],
        value: 'Una agencia juzgada por prueba de ingresos, con la prueba antes del discurso.',
      },
      'lyfe-marketing': {
        category: 'WordPress · Redes Sociales',
        title: 'Sitio de la Agencia LYFE Marketing',
        overview:
          'Un sitio para una agencia de gestion de redes sociales, apoyado en premios, prensa y socios nombrados para responder la primera pregunta de un pequeno negocio: ha respondido por vosotros alguien creible.',
        features: [
          'Premios y socios colocados sobre la linea de flotacion',
          'Servicios divididos en social, anuncios y email marketing',
          'Propuesta personalizada como unica via de conversion',
          'Resultados de casos llevados hasta las paginas de servicio',
        ],
        value: 'La credibilidad resuelta en la primera pantalla, donde decide un pequeno negocio.',
      },
      'hubspot': {
        category: 'WordPress · Plataforma SaaS',
        title: 'Sitio de Marketing de HubSpot',
        overview:
          'Un sitio de marketing para una plataforma de clientes que abarca marketing, ventas y servicio, donde la tarea es encaminar visitantes muy distintos - prueba, demo, empresa - sin partir el sitio en tres.',
        features: [
          'Productos, soluciones y precios bajo una sola navegacion',
          'Demo y prueba gratuita ofrecidas en paralelo',
          'Rutas segmentadas para pequena empresa y corporacion',
          'Contenido extenso de recursos alimentando la adquisicion organica',
        ],
        value: 'Un sitio que atiende a la vez una prueba self-service y una demo empresarial.',
      },
      'ironpaper': {
        category: 'WordPress · Agencia B2B',
        title: 'Ironpaper Agencia de Crecimiento B2B',
        overview:
          'Un sitio para una agencia de crecimiento B2B que trabaja ciclos de venta largos y complejos, escrito en tipografia y no en imagen, porque el argumento es pensamiento y el pensamiento se lee.',
        features: [
          'Cabecera tipografica sosteniendo el posicionamiento',
          'Servicios divididos en generacion de demanda, ABM y contenido',
          'Ciclos de venta largos tratados directamente en el texto',
          'Articulos de analisis sosteniendo la credibilidad',
        ],
        value: 'Una agencia que vende por argumento, con un sitio hecho para leerse.',
      },
      'app-amane-taxi': {
        category: 'Aplicacion Movil',
        title: 'App de Reservas Amane Taxi',
        overview:
          'Una app de reserva de chofer bajo demanda: pedir un vehiculo con conductor en un toque, a cualquier hora, para un trayecto urbano o una ida al aeropuerto.',
        features: [
          'Pedido de viaje en un toque por destino',
          'Recogida por ubicacion con mapa en tiempo real',
          'Datos del conductor y del vehiculo antes de que llegue',
          'Pago en efectivo y valoracion al terminar',
        ],
        value: 'Un coche reservado en un toque, a la hora en que llamar a una central cuesta mas.',
      },
      'app-aspire-school-management': {
        category: 'Aplicacion Movil',
        title: 'Sistema de Gestion Escolar Aspire',
        overview:
          'Un sistema de gestion escolar con formacion en linea y una app Android que lo acompana, con alumnos, profesores y familias entrando al mismo registro por lados distintos.',
        features: [
          'Acceso separado para alumnos, profesores y familias',
          'Formacion en linea dentro de la aplicacion',
          'Backoffice en Laravel tras el cliente movil',
          'Un registro visto desde tres roles distintos',
        ],
        value: 'Un centro, su profesorado y las familias leyendo el mismo registro.',
      },
      'app-lets-do-yoga': {
        category: 'Aplicacion Movil',
        title: 'Let\'s Do Yoga',
        overview:
          'Una app suave de yoga y fitness para todos los niveles - estiramientos, sesiones de yoga, meditacion y planes de entrenamiento, con una serie completa para principiantes y las posturas que importan primero.',
        features: [
          'Serie para principiantes y las posturas que aprender primero',
          'Rutinas para sueno, postura y fuerza del core',
          'Ejercicios de respiracion y sesiones de quema',
          'Un plan diario en lugar de una biblioteca que buscar',
        ],
        value: 'Una practica que alguien puede empezar de verdad, no un catalogo que recorrer.',
      },
      'app-lumy-beauty': {
        category: 'Aplicacion Movil',
        title: 'Marketplace Lumy Beauty',
        overview:
          'Un marketplace de dos lados para una startup de belleza: salones y especialistas publican servicios, los clientes reservan, y Stripe Connect liquida a cada vendedor por separado.',
        features: [
          'Fichas de servicio y disponibilidad de cada profesional',
          'Reserva de citas dentro de la app',
          'Pagos Stripe Connect por vendedor',
          'Firestore como capa de datos compartida',
        ],
        value: 'Dos lados de un marketplace, y el dinero llegando al lado correcto.',
      },
      'app-scan-docai-scanner': {
        category: 'Aplicacion Movil',
        title: 'Escaner de Documentos Scan DocAI',
        overview:
          'Un escaner de documentos que convierte el movil en un escaner de PDF utilizable - documentos, carnes, libros y notas manuscritas - con deteccion de bordes y reconocimiento de texto haciendo lo que la camara no hace.',
        features: [
          'Deteccion de bordes y recorte automatico',
          'Filtros que hacen legible una pagina fotografiada',
          'Reconocimiento de texto en la pagina capturada',
          'Exportacion a PDF y gestion de archivos en el dispositivo',
        ],
        value: 'La camara de un movil comportandose como un escaner, pagina tras pagina.',
      },
      'app-vpn-client': {
        category: 'Aplicacion Movil',
        title: 'Cliente VPN Multirregion',
        overview:
          'Un cliente VPN Android de un toque sobre OpenVPN, con lista global de servidores, sin cuenta que crear y sin root - lo bastante ligero para funcionar en los moviles que mas lo necesitan.',
        features: [
          'Conexion en un toque con eleccion automatica de servidor',
          'Lista de servidores en varias regiones',
          'Sin registro y sin acceso root',
          'Integracion AdMob que sostiene la version gratuita',
        ],
        value: 'Navegacion privada en cualquier Android, sin cuenta y sin dispositivo rooteado.',
      },
      'app-trakmd-doctor': {
        category: 'Aplicacion Movil',
        title: 'App trakMD para Medicos',
        overview:
          'Una app de historia clinica electronica para medicos y pacientes, hecha para que la consulta sea mas accesible: los pacientes reservan solos, los recordatorios salen automaticamente y las cancelaciones de ultima hora se cubren.',
        features: [
          'Reserva en linea que cubre cancelaciones de ultima hora',
          'Recordatorios de cita por SMS y correo',
          'Perfil de la consulta que el paciente encuentra y recomienda',
          'Historias accesibles desde el movil del medico',
        ],
        value: 'Una consulta mas facil de reservar que de telefonear.',
      },
      'app-web-on-demand-service': {
        category: 'Plataforma Movil y Web',
        title: 'Plataforma de Servicios a Demanda',
        overview:
          'Un marketplace de servicios al estilo UrbanClap, que cubre tres publicos a la vez: una app de cliente para reservar, una app de proveedor para ejecutar y un panel que gobierna ambas.',
        features: [
          'App de cliente para reservar cualquier servicio listado',
          'App de proveedor para aceptar y ejecutar trabajo',
          'Panel de administracion que gobierna app y web',
          'Cinco pasarelas de pago y sistema de monedero',
        ],
        value: 'Tres aplicaciones que solo funcionan porque son un unico sistema.',
      },
      'web-hoteljobs-job-portal': {
        category: 'Aplicacion Web',
        title: 'Portal de Empleo HotelJobs',
        overview:
          'Una plataforma de reclutamiento para la hosteleria sudafricana, con tres paneles detras - administracion, reclutador y candidato - y los problemas de volumen de un portal que se usa de verdad.',
        features: [
          'Paneles de administracion, reclutador y candidato',
          'Envio de alertas de empleo a mas de 100.000 destinatarios via Amazon SES',
          'Busqueda de CV con lectura de curriculos y conversion a PDF',
          'Marcado Google for Jobs y automatizacion de sitemap',
        ],
        value: 'Un portal de empleo que sigue respondiendo con una lista de seis cifras.',
      },
      'web-aimro-market-research': {
        category: 'Sitio Web',
        title: 'Asociacion de Estudios de Mercado AIMRO',
        overview:
          'Un sitio para la asociacion que representa a la industria irlandesa de estudios de mercado, que habla por el sector ante las autoridades y mantiene sus estandares profesionales - por eso el sitio debe leerse como autoridad y no como folleto.',
        features: [
          'Tono institucional sostenido en toda la composicion',
          'Informacion de socios y estandares siempre localizable',
          'Responsivo en escritorio, tableta y movil',
          'Estructura amigable a la busqueda para un sitio de autoridad',
        ],
        value: 'Una asociacion sectorial que se lee como tal, ante quienes representa.',
      },
      'web-betheme-wordpress-theme': {
        category: 'WordPress',
        title: 'Tema de Portafolio a Medida sobre BeTheme',
        overview:
          'Un portafolio WordPress a medida construido sobre BeTheme, con todo - proyectos, habilidades, experiencia, testimonios, paquetes de servicio - editable desde el panel y no desde el codigo.',
        features: [
          'Trabajo de tema a medida sobre una base BeTheme',
          'Proyectos, habilidades y testimonios editados desde el panel',
          'Paquetes de servicio mantenidos sin desarrollador',
          'Responsivo en escritorio, tableta y movil',
        ],
        value: 'Un portafolio que su dueno mantiene al dia sin abrir un editor.',
      },
      'web-learning-pool': {
        category: 'Sitio Web',
        title: 'Sitio Corporativo Learning Pool',
        overview:
          'El sitio de una empresa que ofrece plataformas de aprendizaje en linea, contenido creativo y analitica formativa a organizaciones - una oferta amplia que debe ser navegable antes que persuasiva.',
        features: [
          'Plataforma, contenido y analitica presentados como una oferta',
          'Paginas de solucion encaminadas por publico',
          'Contenido editorial y casos que sostienen el argumento',
          'Composiciones responsivas en toda la gama',
        ],
        value: 'Una oferta amplia hecha navegable, que es la primera mitad de ser persuasiva.',
      },
      'web-mammolink-healthcare': {
        category: 'Sitio Web',
        title: 'Portal de Acceso a Cribado MammoLink',
        overview:
          'Un sitio para un proveedor de cribado movil, donde todo el trabajo es llevar a un paciente de un resultado de busqueda a una cita reservada sin un paso que lo pierda.',
        features: [
          'Paginas de servicio escritas para pacientes y no para clinicos',
          'Reserva de cita accesible desde cualquier pagina',
          'Informacion de ubicacion para un servicio movil',
          'Accesibilidad y rendimiento tratados como requisitos',
        ],
        value: 'Una cita de cribado reservada por quien vino a leer una sola pagina.',
      },
      'web-jenny-schatzle-coaching': {
        category: 'Sitio Web',
        title: 'Sitio de Coaching Personal en Kajabi',
        overview:
          'Un sitio de marca personal para una coach y ponente, construido en Kajabi y disenado para que el mensaje llegue primero y los programas, cursos y peticiones de ponencia vengan despues.',
        features: [
          'Diseno Kajabi a medida en torno a una marca personal',
          'Rutas separadas para coaching, cursos y ponencias',
          'Secciones de comunidad y testimonios',
          'Llamadas a la accion claras para alta y contacto',
        ],
        value: 'Una voz que llega antes que la oferta, que es el orden que convierte.',
      },
      'web-shrader-mendez-attorney': {
        category: 'Sitio Web',
        title: 'Sitio del Bufete Shrader Mendez',
        overview:
          'Un sitio de bufete de defensa penal, donde el visitante suele estar en problemas y decide rapido: areas de practica, los propios abogados y una forma de contactar sin un formulario de por medio.',
        features: [
          'Paginas de area de practica que un visitante inquieto puede recorrer',
          'Perfiles de los abogados sosteniendo la credibilidad',
          'Contacto para consulta accesible en todo el sitio',
          'Premios y reconocimientos usados como prueba',
        ],
        value: 'Un bufete localizable en el momento en que alguien decide que necesita uno.',
      },
      'web-vizury-engage360': {
        category: 'Sitio Web',
        title: 'Sitio de la Plataforma Vizury Engage360',
        overview:
          'El sitio de una plataforma de marketing de comercio cuya tecnologia de retargeting alcanza compradores en programatico, push y correo desde una propuesta integrada - un producto tecnico que hay que explicar a un profesional de marketing.',
        features: [
          'Una plataforma tecnica explicada para quien compra marketing',
          'Canales presentados como una propuesta y no como tres productos',
          'Paginas de producto encaminadas por caso de uso',
          'Composiciones responsivas en un sitio denso en contenido',
        ],
        value: 'Una plataforma vendida a quien la compra, no a quien la opera.',
      },
      'shop-multivendor-ecommerce': {
        category: 'Comercio Electronico',
        title: 'App y Web de Comercio Multivendedor',
        overview:
          'Una plataforma de comercio que corre en Android, iOS y web desde un unico backend Laravel, con la tienda configurable desde el panel y no desde un despliegue.',
        features: [
          'App y web configuradas desde un solo panel',
          'Diez pasarelas de pago y alta por OTP, Google y Facebook',
          'Categorias ilimitadas con valoraciones y resenas',
          'Productos fisicos y digitales en la misma plataforma',
        ],
        value: 'Tres escaparates mantenidos a la par porque debajo son un solo sistema.',
      },
      'shop-skyhigh-party-rentals': {
        category: 'Comercio Electronico',
        title: 'Tienda Sky High Party Rentals',
        overview:
          'Una tienda Magento adaptada para alquilar en lugar de vender - una capa de reservas sobre el modelo de producto - con panel de administracion propio y un rastreador de entregas en tiempo real construido en paralelo.',
        features: [
          'Reservas y disponibilidad sobre los productos de Magento',
          'Panel propio con informes de agentes y de feedback',
          'Comparativa de ventas mensual y anual',
          'Aplicacion aparte de seguimiento de entregas en tiempo real',
        ],
        value: 'Un negocio de alquiler gestionado en una plataforma hecha para vender, no para prestar.',
      },
      'shop-app-netplus-pharmacy': {
        category: 'Comercio Electronico',
        title: 'App y Web de la Farmacia Net Plus',
        overview:
          'Una app de comercio para farmacia en Flutter con web acompanante, con un catalogo completo de categorias de medicamentos, marcas y lineas con descuento tras un flujo de compra corriente.',
        features: [
          'Catalogo de medicamentos por categoria, marca y tipo',
          'Web que comparte el catalogo de la aplicacion',
          'Lineas con descuento destacadas sin romper el flujo',
          'Pedidos y gestion de cuenta desde el movil',
        ],
        value: 'Un mostrador de farmacia accesible desde el movil, con el catalogo intacto.',
      },
      'game-web-ludo-real-money': {
        category: 'Plataforma de Juego',
        title: 'Plataforma de Torneos Ludo Real',
        overview:
          'Una plataforma de torneos construida en torno a un tablero de Ludo en vivo: los cuadros los gestiona el sistema, los monederos admiten varias monedas y los ganadores cobran sin que un operador liquide nada a mano.',
        features: [
          'Sistema propio de torneos y cuadros',
          'Tablero de juego en vivo rediseñado',
          'Pago automatico a los ganadores',
          'Monedero multidivisa y panel del jugador',
        ],
        value: 'Un torneo que se liquida solo, que es la parte que un operador no puede hacer a escala.',
      },
      'app-web-bharat-support': {
        category: 'Plataforma Movil y Web',
        title: 'Bharat Support Servicios a Demanda',
        overview:
          'Un ecosistema de servicios a demanda en cuatro partes: una app para que los clientes reserven trabajo, una app para que los proveedores lo ejecuten, un panel que gobierna ambas y una web publica delante de ellas.',
        features: [
          'App de cliente para reservar servicios',
          'App de proveedor para aceptar y ejecutar trabajos',
          'Panel de administracion que gobierna ambos lados',
          'Web publica delante de la plataforma',
        ],
        value: 'Cuatro superficies sobre una plataforma, para que el trabajo reservado sea el que ve el proveedor.',
      },
    },
  },
  examples: {
    badge: 'Proyecto de referencia',
    note: 'Las entradas señaladas como proyectos de referencia son demostraciones propias, no trabajos de clientes. Todas las demás se entregaron a clientes reales.',
    items: {
      'shopify-fashion-theme': {
        category: 'Shopify',
        title: 'Tema Shopify a Medida para una Marca de Moda',
        overview:
          'Una tienda Shopify construida como tema propio y no comprado — plantillas en Liquid, una biblioteca de secciones que el cliente reordena solo desde el editor de temas y una página de producto pensada para cómo navega de verdad quien compra moda.',
        features: [
          'Tema Liquid propio con secciones reordenables',
          'Filtros de colección, vista rápida y guía de tallas',
          'Carrito lateral y bloques de upsell sin apps adicionales',
          'Presupuesto de rendimiento mantenido en móvil',
        ],
        value:
          'Le da a la marca una tienda que no se parece a ninguna otra sin salir de Shopify — el cliente edita las páginas por su cuenta y paga menos apps.',
      },
      'shopify-headless': {
        category: 'Comercio Headless',
        title: 'Tienda Shopify Headless sobre Next.js',
        overview:
          'El mismo catálogo de Shopify servido por un front-end Next.js a través de la Storefront API — páginas renderizadas y cacheadas en el edge, con el checkout devuelto a Shopify para que pagos, impuestos y antifraude sigan donde corresponde.',
        features: [
          'Consultas a la Storefront API para catálogo, variantes y carrito',
          'Páginas de producto renderizadas en servidor y revalidadas en el edge',
          'Checkout entregado al flujo alojado por Shopify',
          'TypeScript de punta a punta, de la consulta al componente',
        ],
        value:
          'Libertad de front-end y velocidad de carga sin rehacer los pagos — el catálogo se queda en Shopify y la experiencia deja de estar limitada por el tema.',
      },
      'shopify-subscription-app': {
        category: 'App de Shopify',
        title: 'App de Suscripciones y Packs para Shopify',
        overview:
          'Una app integrada en Shopify que añade pedidos recurrentes y packs de producto a la tienda — planes de venta, gestión de contratos y reintentos de cobro, todo renderizado dentro del admin de Shopify para que el comerciante no tenga que salir de allí.',
        features: [
          'Planes de venta y contratos de suscripción',
          'Constructor de packs con precio sobre el catálogo en vivo',
          'Reintento automático ante pagos rechazados',
          'Webhooks idempotentes para no cobrar dos veces',
        ],
        value:
          'Convierte compras puntuales en ingresos recurrentes y evita que una tarjeta rechazada acabe siendo una baja silenciosa.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'Tienda WooCommerce para un Productor Artesanal',
        overview:
          'Una tienda WooCommerce para una finca que vende directo — productos de temporada, cajas regalo, reglas de envío en la UE e IVA resueltos por la tienda y no a mano, sobre una instalación WordPress que el dueño ya sabe usar.',
        features: [
          'Configuración de productos, variaciones y cajas regalo',
          'Reglas de envío e IVA por zona en la UE',
          'Stock, lotes de cosecha y prepedidos',
          'Checkout ajustado para completarse en móvil',
        ],
        value:
          'Permite a un productor pequeño vender en toda Europa sin distribuidor y editar la tienda desde el admin de WordPress que ya tiene.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Sitio Corporativo WordPress Multilingüe',
        overview:
          'Un sitio corporativo WordPress publicado en cuatro idiomas desde un único flujo editorial — páginas en el editor de bloques, bloques reutilizables para todo lo que se repite y SEO por idioma, de modo que cada mercado tenga sus propias páginas canónicas.',
        features: [
          'Páginas en el editor de bloques con bloques reutilizables y centralizados',
          'Cuatro idiomas con el estado de traducción visible para el editor',
          'Metadatos, canónicas y sitemaps por idioma',
          'Core Web Vitals aprobados en móvil y escritorio',
        ],
        value:
          'El equipo de marketing publica en cada mercado sin depender de un desarrollador, y cada idioma posiciona por sí mismo en lugar de competir con los demás.',
      },
      'wordpress-lead-plugin': {
        category: 'Plugin de WordPress',
        title: 'Plugin WordPress de Enrutamiento de Leads',
        overview:
          'Un plugin de WordPress hecho a medida en lugar de una pila de plugins genéricos — leads capturados como custom post type, enrutados por regla al equipo comercial correcto y enviados al CRM con una cola de reintentos detrás.',
        features: [
          'Custom post type con sus propias columnas y filtros en el admin',
          'Enrutamiento por regla según origen, región y producto',
          'Sincronización con el CRM vía REST, con reintentos y registro de fallos',
          'Todo gestionado dentro de wp-admin',
        ],
        value:
          'Sustituye cuatro plugins solapados por uno que hace exactamente el trabajo: el lead llega solo a la persona correcta y ninguno se pierde en una sincronización fallida.',
      },
      'react-native-shop-app': {
        category: 'Aplicación Móvil',
        title: 'App de Compras en React Native para iOS y Android',
        overview:
          'Una app de compras publicada en ambas tiendas desde una sola base de código React Native — catálogo, ficha de producto, carrito y pago, con comportamiento nativo en cada plataforma y una capa de API compartida por detrás.',
        features: [
          'Una base de código publicada en App Store y Play Store',
          'Catálogo, búsqueda y filtros sobre una REST API',
          'Hojas de pago nativas y tarjetas guardadas',
          'Notificaciones push de pedidos y reposición de stock',
        ],
        value:
          'Dos tiendas atendidas por un equipo y un ciclo de publicación, en vez de dos apps nativas que se van separando poco a poco.',
      },
      'flutter-delivery-app': {
        category: 'Aplicación Móvil',
        title: 'App Flutter de Reparto y Seguimiento de Repartidores',
        overview:
          'Dos apps Flutter salidas de un mismo proyecto: el cliente ve avanzar su pedido en tiempo real y el repartidor trabaja una ruta optimizada, cerrando cada parada con firma, foto y sello de GPS.',
        features: [
          'Posición del repartidor y hora estimada de llegada en vivo',
          'Ruta optimizada con paso a la navegación',
          'Prueba de entrega: firma, foto y ubicación',
          'Envíos en cola mientras el repartidor no tiene cobertura',
        ],
        value:
          'Reduce casi a cero las llamadas de “¿dónde está mi pedido?” y deja al operador un registro de entrega de cada parada.',
      },
      'android-field-service': {
        category: 'Aplicación Móvil',
        title: 'App Android de Servicio en Campo con Sincronización Offline',
        overview:
          'Una app Android nativa para técnicos que trabajan en sótanos y salas de máquinas, donde no hay cobertura. Cada pantalla lee y escribe primero en una base local, y la cola se sincroniza con traza de auditoría en cuanto el teléfono vuelve a tener red.',
        features: [
          'Lectura y escritura totalmente offline sobre una base SQLite local',
          'Checklists de orden de trabajo, piezas usadas y registro de horas',
          'Captura de firma y fotos en el sitio',
          'Cola de sincronización con gestión de conflictos y registro de auditoría',
        ],
        value:
          'El técnico deja de rellenar papel para teclearlo después — la oficina ve el trabajo cerrado minutos después de terminarlo, no días.',
      },
      'laravel-booking-api': {
        category: 'Back-end y API',
        title: 'API Laravel de Reservas y Agenda',
        overview:
          'Una API Laravel para reservar un recurso finito, donde lo difícil no es el endpoint sino la carrera — dos personas pidiendo la misma franja en el mismo segundo. Resuelto con bloqueo de fila dentro de una transacción y cubierto por pruebas de concurrencia.',
        features: [
          'Endpoints de disponibilidad y reserva con escritura bajo bloqueo',
          'Pruebas de concurrencia que demuestran que no hay doble reserva',
          'Sincronización de calendario y correos de confirmación por evento',
          'Entrega de webhooks con reintentos automáticos',
        ],
        value:
          'Un sistema de reservas que sigue siendo correcto bajo carga — la única propiedad que el cliente nota de inmediato cuando falta.',
      },
      'php-crm-invoicing': {
        category: 'Aplicación de Negocio',
        title: 'CRM de Clientes y Facturación en PHP',
        overview:
          'Un back-office en PHP para un despacho profesional: clientes, presupuestos, partes de horas y facturas en un solo modelo, con la antigüedad de cada factura pendiente visible en la primera pantalla y no enterrada en un informe.',
        features: [
          'Clientes, presupuestos, horas y facturas en un mismo sitio',
          'Antigüedad de facturas y seguimiento de impagos',
          'Acceso por rol para socios y asistentes',
          'Generación de PDF y conciliación de cobros',
        ],
        value:
          'Muestra quién debe qué y desde cuándo sin que nadie rehaga una hoja de cálculo — la cifra de la que realmente vive un despacho.',
      },
      'php-payment-gateway': {
        category: 'Integración',
        title: 'Capa PHP de Integración con Pasarelas de Pago',
        overview:
          'Una única interfaz PHP delante de tres proveedores de pago. El checkout llama a autorizar, capturar y reembolsar; qué proveedor se ejecuta es configuración. Los webhooks llevan firma verificada y son a prueba de reenvíos, así que una entrega duplicada nunca abona el pedido dos veces.',
        features: [
          'Interfaz única sobre tarjeta, monedero y método de pago local',
          'Verificación de firma en cada webhook entrante',
          'Conciliación idempotente contra el libro de pedidos',
          'Un proveedor añadido o cambiado sin tocar el checkout',
        ],
        value:
          'Añadir un método de pago pasa a ser un cambio de configuración, y el libro sigue cuadrando aunque el proveedor mande el mismo evento dos veces.',
      },
      'whatsapp-telegram-bot': {
        category: 'Chatbot de Mensajería',
        title: 'Chatbot para WhatsApp y Telegram',
        overview:
          'Un único bot que atiende WhatsApp y Telegram desde un backend Node.js. El cliente pregunta por un pedido, reserva una cita o habla con una persona, y recibe respuesta en la aplicación que ya tiene abierta, con botones inline de Telegram y respuestas interactivas de WhatsApp gestionados por la misma lógica de conversación.',
        features: [
          'Un solo motor de conversación detrás de ambas plataformas',
          'Teclados inline en Telegram y respuestas rápidas en WhatsApp',
          'Consulta de pedidos y reservas mediante integraciones REST',
          'Traspaso a un agente humano con el hilo completo',
        ],
        value:
          'Responde las preguntas de rutina donde ya están los clientes, a cualquier hora, e involucra a una persona solo cuando la conversación realmente lo necesita.',
      },
      'support-chatbot': {
        category: 'Chatbot',
        title: 'Chatbot de Atención al Cliente',
        overview:
          'Un asistente de soporte que responde desde la base de conocimiento de la empresa, resuelve solicitudes rutinarias de principio a fin y deriva lo delicado a una persona con la conversación completa. Disponible en un widget de sitio web y en canales de mensajería a través de la misma API.',
        features: [
          'Coincidencia de intenciones con la base de conocimiento',
          'Traspaso a un humano con todo el contexto de la conversación',
          'Widget web y canales de mensajería desde un solo backend',
          'Panel con aquello que el bot no pudo responder',
        ],
        value:
          'Quita al equipo las preguntas repetitivas de primer nivel y muestra exactamente qué huecos de la base de conocimiento conviene cubrir a continuación.',
      },
      'python-automation': {
        category: 'Automatización en Python',
        title: 'Pipeline de Datos Programado en Python',
        overview:
          'Una tarea Python programada que extrae datos de una API y de una hoja de cálculo, los valida y normaliza, escribe el resultado en una única fuente de verdad y envía un informe por correo, sustituyendo una rutina manual que alguien hacía a mano cada mañana.',
        features: [
          'Extracción, transformación y carga programadas por cron',
          'Validación y normalización antes de escribir nada',
          'Informe automático en cuanto termina la ejecución',
          'Registro de ejecución y alertas de fallo en cada corrida',
        ],
        value:
          'Convierte una tarea manual recurrente en algo que se ejecuta solo y avisa cuando no lo hace, sin depender de que nadie lo recuerde.',
      },
    },
  },
  process: {
    eyebrow: 'Proceso de Trabajo',
    heading: 'Un camino disciplinado de la idea a producción',
    intro:
      'El mismo flujo estructurado en cada proyecto: la comunicación clara y el avance visible en cada etapa es lo que los clientes señalan siempre en sus comentarios.',
    steps: [
      {
        title: 'Análisis de Requisitos',
        detail:
          'Empiezo por el objetivo de negocio y no por la lista de funcionalidades, trazando usuarios, restricciones, integraciones y criterios de éxito en un alcance claro y acordado.',
        output: 'Documento de alcance y criterios de éxito',
      },
      {
        title: 'Planificación y Arquitectura',
        detail:
          'Elección de tecnologías, modelado de datos y contratos de API, documentados y justificados frente a coste, escala y facilidad de mantenimiento.',
        output: 'Arquitectura y modelo de datos',
      },
      {
        title: 'Planificación de UI/UX',
        detail:
          'Flujos de usuario, estructura de pantallas y maquetación responsiva definidos antes de empezar a desarrollar, para que la interfaz sirva al flujo de trabajo en lugar de decorarlo.',
        output: 'Flujos y maquetación responsiva',
      },
      {
        title: 'Desarrollo e Integración',
        detail:
          'Implementación limpia y basada en componentes, en incrementos revisables, con capturas compartidas en cada etapa para que el avance sea visible y no solo reportado.',
        output: 'Incrementos funcionales, bajo control de versiones',
      },
      {
        title: 'Pruebas y Revisiones',
        detail:
          'Comprobación del comportamiento en dispositivos y tamaños de pantalla reales, y después revisiones rápidas y precisas: la parte del trabajo que más notan los clientes.',
        output: 'Versiones verificadas y revisiones rápidas',
      },
      {
        title: 'Despliegue y Mantenimiento',
        detail:
          'Puesta en producción controlada con documentación y traspaso, seguida de soporte continuo, optimización y nuevas iteraciones.',
        output: 'Publicación y plan de soporte',
      },
    ],
  },
  footer: {
    blurb:
      'Ingeniería full-stack desde Italia en plataformas web, e-commerce, aplicaciones móviles, APIs REST y automatización de procesos, entregada en remoto a clientes de todo el mundo.',
    columns: ['Explorar', 'Trabajo'],
    links: {
      about: 'Sobre mí',
      services: 'Servicios',
      skills: 'Habilidades Técnicas',
      projects: 'Proyectos',
      process: 'Proceso de Trabajo',
    },
    expertise: ['Web Full-Stack', 'E-Commerce', 'Apps Móviles', 'APIs REST', 'Diseño Responsivo', 'Automatización'],
  },
}

export const translations = { en, pt, es }
