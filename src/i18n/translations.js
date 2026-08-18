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
      'angular-crm-portal': {
        category: 'Sales Platform',
        title: 'AngularJS Sales Pipeline Portal',
        overview:
          'A shared pipeline for four regional sales teams, built as an AngularJS front end on a Nest.js API. Every team sees the same deals and the same stage rules, so a deal cannot quietly mean something different in one office than in another.',
        features: [
          'One pipeline shared across four regional teams',
          'Stage rules enforced on the API, not the browser',
          'Role-based visibility per team and per region',
          'Activity trail on every deal, exportable to CSV',
        ],
        value: 'One version of the pipeline instead of four spreadsheets that disagree.',
      },
      'laravel-saas-billing': {
        category: 'Billing Platform',
        title: 'Laravel Subscription & Billing Engine',
        overview:
          'Plans, seats, proration and failed-payment recovery for a subscription business. The hard part is not charging a card once; it is what happens on an upgrade mid-cycle, and what happens when the third charge fails.',
        features: [
          'Plan changes prorated to the day',
          'Dunning with retries and a final grace period',
          'Provider webhooks reconciled against local state',
          'Invoices generated as PDFs with VAT handling',
        ],
        value: 'Revenue that keeps arriving after the first month, with failures chased automatically.',
      },
      'php-inventory-system': {
        category: 'Warehouse System',
        title: 'PHP Stock Control for Two Warehouses',
        overview:
          'Stock counted once across two warehouses, with reorder points that actually fire. Movements in and out are recorded as events rather than edits, so the current figure can always be explained by the history behind it.',
        features: [
          'Single stock figure across both warehouses',
          'Reorder points that raise purchase suggestions',
          'Movements stored as an auditable event log',
          'Supplier lead times factored into reorder timing',
        ],
        value: 'Fewer stockouts, and a number the warehouse and the office both trust.',
      },
      'wordpress-membership-site': {
        category: 'Membership Site',
        title: 'WordPress Membership & Gated Content',
        overview:
          'Three membership tiers on WordPress, with content gated by rule rather than by hand. Editors keep writing in the normal editor; the plugin decides who can read what, and renewals run without anyone remembering to chase them.',
        features: [
          'Three tiers with rule-based content gating',
          'Automatic renewals and expiry emails',
          'Members area with invoices and downloads',
          'Editors keep the standard WordPress editor',
        ],
        value: 'Recurring income from writing that was already being published for free.',
      },
      'woocommerce-multivendor': {
        category: 'Marketplace',
        title: 'WooCommerce Multi-Vendor Marketplace',
        overview:
          'One basket, many sellers. A customer checks out once; the order is split by vendor behind the scenes, commission is taken at source, and each seller sees only their own orders and payouts.',
        features: [
          'One checkout split into per-vendor orders',
          'Commission taken automatically at source',
          'Vendor dashboard with orders, stock and payouts',
          'Payout runs with a statement per vendor',
        ],
        value: 'A shop that grows by adding sellers rather than by buying more stock.',
      },
      'shopify-b2b-wholesale': {
        category: 'B2B Commerce',
        title: 'Shopify B2B Wholesale Portal',
        overview:
          'Trade pricing on the same Shopify store that serves the public, hidden behind a login. Each company gets its own price list and payment terms, so the wholesale side does not need a second platform to live on.',
        features: [
          'Company-specific price lists behind a login',
          'Payment terms per account, including net 30 and 60',
          'Minimum order quantities and case-pack rules',
          'Trade catalogue hidden from public search',
        ],
        value: 'Wholesale and retail on one platform instead of two systems to keep in step.',
      },
      'react-analytics-dashboard': {
        category: 'Analytics',
        title: 'React Checkout Funnel Dashboard',
        overview:
          'A funnel view over raw event data: where the basket is abandoned, by step and by device. Built so a marketing lead can answer a question without asking an engineer to write a query first.',
        features: [
          'Funnel, cohort and retention views over one event store',
          'Segment by device, channel and campaign',
          'Charts render from pre-aggregated queries for speed',
          'Saved views shared across the team',
        ],
        value: 'Decisions made from the funnel rather than from opinions about it.',
      },
      'support-desk-handover': {
        category: 'Support Platform',
        title: 'Chatbot Handover Desk for Support Teams',
        overview:
          'The bot answers what it can and hands the rest to a person with the whole conversation attached. The desk shows why each chat was escalated, so the knowledge base gets fixed where it actually failed.',
        features: [
          'Automatic handover with full conversation context',
          'One inbox for WhatsApp, Telegram and web chat',
          'Escalation reasons recorded and reported',
          'Canned replies and macros for repeat questions',
        ],
        value: 'Most questions answered instantly, and the rest reaching a person already briefed.',
      },
      'booking-scheduling-app': {
        category: 'Scheduling',
        title: 'Appointment Scheduling for Six Practitioners',
        overview:
          'One calendar for six practitioners, three rooms and a public booking page. Availability is computed from staff hours, room capacity and existing bookings, so the slot a client sees is a slot that genuinely exists.',
        features: [
          'Availability computed from staff, room and service rules',
          'Public booking page with confirmation emails',
          'SMS and email reminders that cut no-shows',
          'Reschedule and cancellation windows enforced by rule',
        ],
        value: 'A diary that fills itself, without the double bookings a shared spreadsheet invites.',
      },
      'nest-microservices': {
        category: 'Backend & API',
        title: 'Nest.js Service Split into Queues',
        overview:
          'A monolith broken into queued workers by concern: orders, payments, stock, mail. Each queue retries with backoff and anything that still fails lands in a dead-letter queue to be replayed rather than lost.',
        features: [
          'Work split into queues by concern',
          'Retry with exponential backoff per queue',
          'Dead-letter queue with replay from the console',
          'Throughput and lag visible per consumer',
        ],
        value: 'Traffic spikes absorbed by the queue instead of taking the checkout down with them.',
      },
      'nextjs-headless-blog': {
        category: 'Editorial Site',
        title: 'Next.js Editorial Site on a Headless CMS',
        overview:
          'An editorial site rendered by Next.js and written in a headless CMS. Pages are pre-rendered at build and revalidated at the edge, so the site stays fast without editors waiting for a deploy to publish.',
        features: [
          'Static pre-rendering with edge revalidation',
          'Editors publish without a developer or a deploy',
          'Structured data and sitemap generated automatically',
          'Image pipeline serving modern formats per device',
        ],
        value: 'Publishing speed for the editors and load speed for the reader, at the same time.',
      },
      'laravel-queue-worker': {
        category: 'Backend & API',
        title: 'Laravel Queued Catalogue Importer',
        overview:
          'A nightly catalogue import moved off the web request and onto queued jobs. Work is chunked so one bad batch retries alone instead of failing the whole import, and the run reports what it rejected rather than silently dropping it.',
        features: [
          'Import chunked into independently retried batches',
          'Exponential backoff with a capped retry count',
          'Rejected rows reported, never silently discarded',
          'Progress and failures visible while the job runs',
        ],
        value: 'An import that finishes overnight and tells you exactly what it could not accept.',
      },
      'wordpress-headless-api': {
        category: 'Headless CMS',
        title: 'Headless WordPress with a Next.js Front End',
        overview:
          'WordPress kept as the editor and turned into an API; the public site is rendered by Next.js. Editors keep the workflow they know, and the front end stops being limited by what a theme can do.',
        features: [
          'Custom REST routes returning block content as JSON',
          'Edge cache invalidated the moment a post is saved',
          'Editors keep the standard WordPress editor',
          'Front end free of theme and plugin constraints',
        ],
        value: 'A modern front end without retraining the people who write the content.',
      },
      'shopify-inventory-sync': {
        category: 'Integration',
        title: 'Shopify to ERP Stock Synchronisation',
        overview:
          'Stock kept level between Shopify and a back-office system, in both directions. The ERP stays the source of truth, Shopify is updated within the API budget, and a reconciliation pass catches any drift each hour.',
        features: [
          'Two-way sync with the ERP as source of truth',
          'Rate limiting that respects the Shopify API budget',
          'Orders reserve stock in the ERP on payment',
          'Hourly reconciliation reporting any drift',
        ],
        value: 'One stock figure across both systems, so nothing is sold that is not there.',
      },
      'node-realtime-orders': {
        category: 'Backend & API',
        title: 'Real-Time Order Board over WebSockets',
        overview:
          'Kitchen and counter screens that update the instant an order moves, without polling. State transitions are validated and locked in the database, so two screens cannot advance the same order twice.',
        features: [
          'Order state pushed to every screen in the same tick',
          'Transitions validated and row-locked in the database',
          'Silent reconnection after a network drop',
          'Tested at 400 concurrent screens',
        ],
        value: 'Screens that agree with each other, in a room where seconds matter.',
      },
      'python-data-pipeline': {
        category: 'Automation',
        title: 'Nightly Python Reporting Pipeline',
        overview:
          'Six sources pulled every night, validated, and loaded into one reporting table. If too much of the input is rejected the run fails loudly rather than quietly publishing a report nobody should trust.',
        features: [
          'Six sources extracted, validated and loaded nightly',
          'Run fails loudly when rejects pass a threshold',
          'Rejected rows kept and reported, never dropped',
          'Summary emailed to finance when the run completes',
        ],
        value: 'Numbers that arrive by breakfast, and a loud failure when they should not be trusted.',
      },
      'react-native-loyalty-app': {
        category: 'Mobile Application',
        title: 'React Native Loyalty & Rewards App',
        overview:
          'A loyalty card that lives on the phone: points, tiers and a code the till can scan. One React Native codebase ships to both stores, and the card keeps working when the shop has no signal.',
        features: [
          'Points and tiers with a scannable member code',
          'Rewards catalogue with redemption at the till',
          'Offers targeted by tier and by nearest shop',
          'Card readable offline, syncing when signal returns',
        ],
        value: 'Repeat visits from customers already carrying the card in their pocket.',
      },
      'flutter-habit-tracker': {
        category: 'Mobile Application',
        title: 'Flutter Habit Tracker with Local Reminders',
        overview:
          'A habit tracker built once in Flutter for both stores. Streaks, a month view and reminders that fire from the device itself, so the app is useful on a train with no connection.',
        features: [
          'Daily checklist with streaks and a month view',
          'Local notifications that work without a connection',
          'All data stored on device, exportable as CSV',
          'One Flutter codebase for iOS and Android',
        ],
        value: 'A habit app that still works in the places where habits actually happen.',
      },
      'android-pos-terminal': {
        category: 'Mobile Application',
        title: 'Android Point-of-Sale Terminal',
        overview:
          'A till that takes payment, prints a receipt and closes the day. Sales are written to the device first and synced afterwards, so a dropped connection never stops the queue at the counter.',
        features: [
          'Basket, payment and receipt printing on device',
          'Sales queued locally and synced when signal returns',
          'End-of-day report with card, cash and refunds',
          'Card, cash and meal-voucher payment paths',
        ],
        value: 'A counter that keeps serving whether or not the internet is having a good day.',
      },
      'ios-property-viewings': {
        category: 'Mobile Application',
        title: 'iOS Property Search & Viewing Booking',
        overview:
          'Search, shortlist and book a viewing without leaving the app. The agent gets the appointment in their calendar and the buyer gets a confirmation, so the viewing is agreed before anyone picks up a phone.',
        features: [
          'Filtered search with saved shortlists',
          'Viewing booked against the agent calendar',
          'Confirmation and calendar entry for the buyer',
          'In-app messaging with the listing agent',
        ],
        value: 'Viewings booked the moment interest is highest, rather than the next working day.',
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
      'angular-crm-portal': {
        category: 'Plataforma de Vendas',
        title: 'Portal de Pipeline de Vendas em AngularJS',
        overview:
          'Um pipeline partilhado por quatro equipas comerciais regionais, com front end em AngularJS sobre uma API Nest.js. Todas as equipas veem os mesmos negocios e as mesmas regras de fase, para que um negocio nao signifique coisas diferentes em escritorios diferentes.',
        features: [
          'Um pipeline partilhado por quatro equipas regionais',
          'Regras de fase aplicadas na API, nao no browser',
          'Visibilidade por funcao, equipa e regiao',
          'Historico de atividade em cada negocio, exportavel para CSV',
        ],
        value: 'Uma so versao do pipeline em vez de quatro folhas de calculo que se contradizem.',
      },
      'laravel-saas-billing': {
        category: 'Plataforma de Faturacao',
        title: 'Motor de Subscricoes e Faturacao em Laravel',
        overview:
          'Planos, lugares, proporcionalidade e recuperacao de pagamentos falhados para um negocio por subscricao. O dificil nao e cobrar um cartao uma vez; e o que acontece numa mudanca de plano a meio do ciclo e quando a terceira cobranca falha.',
        features: [
          'Mudancas de plano calculadas ao dia',
          'Cobranca insistente com tentativas e periodo de tolerancia',
          'Webhooks do fornecedor reconciliados com o estado local',
          'Faturas geradas em PDF com tratamento de IVA',
        ],
        value: 'Receita que continua a entrar depois do primeiro mes, com falhas perseguidas automaticamente.',
      },
      'php-inventory-system': {
        category: 'Sistema de Armazem',
        title: 'Controlo de Stock em PHP para Dois Armazens',
        overview:
          'Stock contado uma unica vez em dois armazens, com pontos de reposicao que disparam mesmo. As entradas e saidas sao registadas como eventos e nao como edicoes, para que o numero atual seja sempre explicavel pelo historico.',
        features: [
          'Um unico numero de stock para os dois armazens',
          'Pontos de reposicao que geram sugestoes de compra',
          'Movimentos guardados como registo auditavel',
          'Prazos de entrega dos fornecedores no calculo da reposicao',
        ],
        value: 'Menos ruturas e um numero em que o armazem e o escritorio confiam.',
      },
      'wordpress-membership-site': {
        category: 'Site de Membros',
        title: 'Membros e Conteudo Restrito em WordPress',
        overview:
          'Tres niveis de adesao em WordPress, com conteudo restrito por regra e nao a mao. Os editores continuam a escrever no editor normal; o plugin decide quem pode ler o que, e as renovacoes correm sem ninguem se lembrar de as perseguir.',
        features: [
          'Tres niveis com restricao de conteudo por regra',
          'Renovacoes automaticas e emails de expiracao',
          'Area de membros com faturas e downloads',
          'Os editores mantem o editor normal do WordPress',
        ],
        value: 'Receita recorrente a partir de textos que ja eram publicados de graca.',
      },
      'woocommerce-multivendor': {
        category: 'Marketplace',
        title: 'Marketplace Multi-Vendedor em WooCommerce',
        overview:
          'Um carrinho, varios vendedores. O cliente finaliza a compra uma vez; a encomenda e dividida por vendedor nos bastidores, a comissao e retida na origem e cada vendedor ve apenas as suas encomendas e pagamentos.',
        features: [
          'Um checkout dividido em encomendas por vendedor',
          'Comissao retida automaticamente na origem',
          'Painel do vendedor com encomendas, stock e pagamentos',
          'Ciclos de pagamento com extrato por vendedor',
        ],
        value: 'Uma loja que cresce somando vendedores em vez de comprando mais stock.',
      },
      'shopify-b2b-wholesale': {
        category: 'Comercio B2B',
        title: 'Portal Grossista B2B em Shopify',
        overview:
          'Precos de revenda na mesma loja Shopify que serve o publico, escondidos atras de um login. Cada empresa tem a sua lista de precos e condicoes de pagamento, para que o grossista nao precise de uma segunda plataforma.',
        features: [
          'Listas de precos por empresa atras de login',
          'Condicoes de pagamento por conta, incluindo 30 e 60 dias',
          'Quantidades minimas e regras de caixa fechada',
          'Catalogo de revenda escondido da pesquisa publica',
        ],
        value: 'Grossista e retalho numa so plataforma em vez de dois sistemas a manter alinhados.',
      },
      'react-analytics-dashboard': {
        category: 'Analitica',
        title: 'Painel de Funil de Checkout em React',
        overview:
          'Uma vista de funil sobre dados de eventos: onde o carrinho e abandonado, por passo e por dispositivo. Feito para que um responsavel de marketing responda a uma pergunta sem pedir a um programador que escreva uma consulta.',
        features: [
          'Vistas de funil, coorte e retencao sobre um so armazem de eventos',
          'Segmentacao por dispositivo, canal e campanha',
          'Graficos servidos a partir de consultas pre-agregadas',
          'Vistas guardadas e partilhadas pela equipa',
        ],
        value: 'Decisoes tomadas a partir do funil e nao de opinioes sobre ele.',
      },
      'support-desk-handover': {
        category: 'Plataforma de Suporte',
        title: 'Balcao de Transferencia de Chatbot para Suporte',
        overview:
          'O bot responde ao que consegue e passa o resto a uma pessoa com a conversa toda anexada. O balcao mostra porque cada conversa foi escalada, para que a base de conhecimento seja corrigida onde falhou.',
        features: [
          'Transferencia automatica com o contexto completo',
          'Uma caixa de entrada para WhatsApp, Telegram e chat web',
          'Motivos de escalonamento registados e reportados',
          'Respostas rapidas e macros para perguntas repetidas',
        ],
        value: 'A maioria das perguntas respondida na hora e o resto a chegar a uma pessoa ja informada.',
      },
      'booking-scheduling-app': {
        category: 'Agendamento',
        title: 'Marcacoes para Seis Profissionais',
        overview:
          'Um calendario para seis profissionais, tres salas e uma pagina publica de marcacoes. A disponibilidade e calculada a partir dos horarios, da capacidade das salas e das marcacoes existentes, por isso o horario que o cliente ve existe mesmo.',
        features: [
          'Disponibilidade calculada por profissional, sala e servico',
          'Pagina publica de marcacao com emails de confirmacao',
          'Lembretes por SMS e email que reduzem faltas',
          'Janelas de remarcacao e cancelamento aplicadas por regra',
        ],
        value: 'Uma agenda que se preenche sozinha, sem as marcacoes duplicadas de uma folha partilhada.',
      },
      'nest-microservices': {
        category: 'Backend e API',
        title: 'Servico Nest.js Dividido em Filas',
        overview:
          'Um monolito dividido em trabalhadores em fila por area: encomendas, pagamentos, stock, email. Cada fila repete com espera crescente e o que continua a falhar vai para uma fila morta, para ser reprocessado e nao perdido.',
        features: [
          'Trabalho dividido em filas por area',
          'Repeticao com espera exponencial por fila',
          'Fila morta com reprocessamento a partir da consola',
          'Debito e atraso visiveis por consumidor',
        ],
        value: 'Picos de trafego absorvidos pela fila em vez de derrubarem o checkout.',
      },
      'nextjs-headless-blog': {
        category: 'Site Editorial',
        title: 'Site Editorial em Next.js com CMS Headless',
        overview:
          'Um site editorial servido por Next.js e escrito num CMS headless. As paginas sao pre-geradas na compilacao e revalidadas na periferia, por isso o site mantem-se rapido sem os editores esperarem por um deploy.',
        features: [
          'Pre-geracao estatica com revalidacao na periferia',
          'Editores publicam sem programador e sem deploy',
          'Dados estruturados e sitemap gerados automaticamente',
          'Imagens servidas em formatos modernos por dispositivo',
        ],
        value: 'Velocidade de publicacao para os editores e de carregamento para o leitor, ao mesmo tempo.',
      },
      'laravel-queue-worker': {
        category: 'Backend e API',
        title: 'Importador de Catalogo em Filas com Laravel',
        overview:
          'Uma importacao noturna de catalogo retirada do pedido web e passada para tarefas em fila. O trabalho e dividido em blocos, para que um bloco mau repita sozinho em vez de derrubar a importacao toda, e a execucao reporta o que rejeitou.',
        features: [
          'Importacao dividida em blocos repetidos de forma independente',
          'Espera exponencial com limite de tentativas',
          'Linhas rejeitadas reportadas e nunca descartadas em silencio',
          'Progresso e falhas visiveis durante a execucao',
        ],
        value: 'Uma importacao que termina de noite e diz exatamente o que nao conseguiu aceitar.',
      },
      'wordpress-headless-api': {
        category: 'CMS Headless',
        title: 'WordPress Headless com Front End em Next.js',
        overview:
          'O WordPress mantido como editor e transformado em API; o site publico e servido por Next.js. Os editores mantem o fluxo que conhecem e o front end deixa de estar limitado ao que um tema consegue fazer.',
        features: [
          'Rotas REST proprias que devolvem blocos em JSON',
          'Cache invalidada no momento em que um artigo e guardado',
          'Editores mantem o editor normal do WordPress',
          'Front end livre das limitacoes de temas e plugins',
        ],
        value: 'Um front end moderno sem ter de reensinar quem escreve o conteudo.',
      },
      'shopify-inventory-sync': {
        category: 'Integracao',
        title: 'Sincronizacao de Stock entre Shopify e ERP',
        overview:
          'Stock mantido alinhado entre o Shopify e um sistema de retaguarda, nos dois sentidos. O ERP continua a ser a fonte de verdade, o Shopify e atualizado dentro do orcamento da API e uma reconciliacao horaria apanha desvios.',
        features: [
          'Sincronizacao bidirecional com o ERP como fonte de verdade',
          'Limitacao de ritmo que respeita o orcamento da API Shopify',
          'Encomendas reservam stock no ERP no momento do pagamento',
          'Reconciliacao horaria que reporta qualquer desvio',
        ],
        value: 'Um so numero de stock nos dois sistemas, para nao se vender o que nao existe.',
      },
      'node-realtime-orders': {
        category: 'Backend e API',
        title: 'Quadro de Encomendas em Tempo Real por WebSockets',
        overview:
          'Ecras de cozinha e balcao que atualizam no instante em que uma encomenda muda, sem sondagem. As transicoes de estado sao validadas e bloqueadas na base de dados, para que dois ecras nao avancem a mesma encomenda duas vezes.',
        features: [
          'Estado enviado a todos os ecras no mesmo instante',
          'Transicoes validadas e com bloqueio de linha na base de dados',
          'Reconexao silenciosa apos queda de rede',
          'Testado com 400 ecras em simultaneo',
        ],
        value: 'Ecras que concordam entre si, numa sala onde os segundos contam.',
      },
      'python-data-pipeline': {
        category: 'Automacao',
        title: 'Pipeline Noturno de Relatorios em Python',
        overview:
          'Seis fontes recolhidas todas as noites, validadas e carregadas numa unica tabela de relatorio. Se demasiada informacao for rejeitada, a execucao falha de forma ruidosa em vez de publicar um relatorio em que ninguem deve confiar.',
        features: [
          'Seis fontes extraidas, validadas e carregadas todas as noites',
          'A execucao falha de forma ruidosa acima do limite de rejeicoes',
          'Linhas rejeitadas guardadas e reportadas, nunca descartadas',
          'Resumo enviado por email a area financeira no fim',
        ],
        value: 'Numeros que chegam ao pequeno-almoco e uma falha ruidosa quando nao sao de confianca.',
      },
      'react-native-loyalty-app': {
        category: 'Aplicacao Movel',
        title: 'App de Fidelizacao e Recompensas em React Native',
        overview:
          'Um cartao de fidelizacao que vive no telemovel: pontos, niveis e um codigo que a caixa consegue ler. Uma so base de codigo React Native chega as duas lojas e o cartao continua a funcionar sem rede.',
        features: [
          'Pontos e niveis com codigo de membro legivel',
          'Catalogo de recompensas com resgate na caixa',
          'Ofertas dirigidas por nivel e por loja mais proxima',
          'Cartao legivel offline, sincronizado quando ha rede',
        ],
        value: 'Visitas repetidas de clientes que ja levam o cartao no bolso.',
      },
      'flutter-habit-tracker': {
        category: 'Aplicacao Movel',
        title: 'Rastreador de Habitos em Flutter com Lembretes Locais',
        overview:
          'Um rastreador de habitos feito uma so vez em Flutter para as duas lojas. Sequencias, vista mensal e lembretes disparados pelo proprio dispositivo, para que a app seja util num comboio sem rede.',
        features: [
          'Lista diaria com sequencias e vista mensal',
          'Notificacoes locais que funcionam sem ligacao',
          'Dados guardados no dispositivo e exportaveis em CSV',
          'Uma so base de codigo Flutter para iOS e Android',
        ],
        value: 'Uma app de habitos que funciona nos sitios onde os habitos acontecem.',
      },
      'android-pos-terminal': {
        category: 'Aplicacao Movel',
        title: 'Terminal de Ponto de Venda em Android',
        overview:
          'Uma caixa que recebe o pagamento, imprime o talao e fecha o dia. As vendas sao escritas primeiro no dispositivo e sincronizadas depois, para que uma quebra de ligacao nunca pare a fila ao balcao.',
        features: [
          'Carrinho, pagamento e impressao de talao no dispositivo',
          'Vendas em fila local, sincronizadas quando ha rede',
          'Relatorio de fecho com cartao, numerario e devolucoes',
          'Pagamento por cartao, numerario e vale de refeicao',
        ],
        value: 'Um balcao que continua a servir, esteja a internet boa ou nao.',
      },
      'ios-property-viewings': {
        category: 'Aplicacao Movel',
        title: 'Procura de Imoveis e Marcacao de Visitas em iOS',
        overview:
          'Procurar, guardar e marcar uma visita sem sair da app. O agente recebe a marcacao no calendario e o comprador recebe a confirmacao, por isso a visita fica combinada antes de alguem pegar no telefone.',
        features: [
          'Procura com filtros e listas guardadas',
          'Visita marcada contra o calendario do agente',
          'Confirmacao e entrada de calendario para o comprador',
          'Mensagens na app com o agente do anuncio',
        ],
        value: 'Visitas marcadas no momento de maior interesse e nao no dia util seguinte.',
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
      'angular-crm-portal': {
        category: 'Plataforma de Ventas',
        title: 'Portal de Pipeline de Ventas en AngularJS',
        overview:
          'Un pipeline compartido por cuatro equipos comerciales regionales, con front end en AngularJS sobre una API Nest.js. Todos los equipos ven los mismos negocios y las mismas reglas de etapa, para que un negocio no signifique cosas distintas en cada oficina.',
        features: [
          'Un pipeline compartido por cuatro equipos regionales',
          'Reglas de etapa aplicadas en la API, no en el navegador',
          'Visibilidad por rol, equipo y region',
          'Historial de actividad en cada negocio, exportable a CSV',
        ],
        value: 'Una sola version del pipeline en lugar de cuatro hojas de calculo que se contradicen.',
      },
      'laravel-saas-billing': {
        category: 'Plataforma de Facturacion',
        title: 'Motor de Suscripciones y Facturacion en Laravel',
        overview:
          'Planes, asientos, prorrateo y recuperacion de pagos fallidos para un negocio por suscripcion. Lo dificil no es cobrar una tarjeta una vez; es lo que ocurre en un cambio de plan a mitad de ciclo y cuando falla el tercer cobro.',
        features: [
          'Cambios de plan prorrateados al dia',
          'Reclamacion con reintentos y periodo de gracia',
          'Webhooks del proveedor reconciliados con el estado local',
          'Facturas generadas en PDF con tratamiento de IVA',
        ],
        value: 'Ingresos que siguen llegando despues del primer mes, con los fallos perseguidos automaticamente.',
      },
      'php-inventory-system': {
        category: 'Sistema de Almacen',
        title: 'Control de Stock en PHP para Dos Almacenes',
        overview:
          'Stock contado una sola vez en dos almacenes, con puntos de pedido que realmente saltan. Las entradas y salidas se registran como eventos y no como ediciones, de modo que la cifra actual siempre se explica por su historial.',
        features: [
          'Una unica cifra de stock para ambos almacenes',
          'Puntos de pedido que generan sugerencias de compra',
          'Movimientos guardados como registro auditable',
          'Plazos de proveedor incluidos en el calculo de reposicion',
        ],
        value: 'Menos roturas de stock y una cifra en la que confian almacen y oficina.',
      },
      'wordpress-membership-site': {
        category: 'Sitio de Membresias',
        title: 'Membresias y Contenido Restringido en WordPress',
        overview:
          'Tres niveles de membresia en WordPress, con contenido restringido por regla y no a mano. Los editores siguen escribiendo en el editor de siempre; el plugin decide quien puede leer que, y las renovaciones se ejecutan sin que nadie tenga que acordarse.',
        features: [
          'Tres niveles con restriccion de contenido por regla',
          'Renovaciones automaticas y correos de vencimiento',
          'Area de socios con facturas y descargas',
          'Los editores conservan el editor estandar de WordPress',
        ],
        value: 'Ingresos recurrentes a partir de textos que ya se publicaban gratis.',
      },
      'woocommerce-multivendor': {
        category: 'Marketplace',
        title: 'Marketplace Multivendedor en WooCommerce',
        overview:
          'Un carrito, varios vendedores. El cliente paga una vez; el pedido se divide por vendedor de forma interna, la comision se retiene en origen y cada vendedor ve solo sus pedidos y liquidaciones.',
        features: [
          'Un checkout dividido en pedidos por vendedor',
          'Comision retenida automaticamente en origen',
          'Panel del vendedor con pedidos, stock y liquidaciones',
          'Ciclos de pago con extracto por vendedor',
        ],
        value: 'Una tienda que crece sumando vendedores en vez de comprando mas stock.',
      },
      'shopify-b2b-wholesale': {
        category: 'Comercio B2B',
        title: 'Portal Mayorista B2B en Shopify',
        overview:
          'Precios de mayorista en la misma tienda Shopify que atiende al publico, ocultos tras un login. Cada empresa tiene su lista de precios y sus condiciones de pago, de modo que el canal mayorista no necesita una segunda plataforma.',
        features: [
          'Listas de precios por empresa tras un login',
          'Condiciones de pago por cuenta, incluidos 30 y 60 dias',
          'Cantidades minimas y reglas de caja completa',
          'Catalogo mayorista oculto de la busqueda publica',
        ],
        value: 'Mayorista y minorista en una sola plataforma en lugar de dos sistemas que sincronizar.',
      },
      'react-analytics-dashboard': {
        category: 'Analitica',
        title: 'Panel de Embudo de Checkout en React',
        overview:
          'Una vista de embudo sobre datos de eventos: donde se abandona el carrito, por paso y por dispositivo. Hecho para que una responsable de marketing conteste una pregunta sin pedir a un desarrollador que escriba una consulta.',
        features: [
          'Vistas de embudo, cohorte y retencion sobre un solo almacen de eventos',
          'Segmentacion por dispositivo, canal y campana',
          'Graficos servidos desde consultas preagregadas',
          'Vistas guardadas y compartidas por el equipo',
        ],
        value: 'Decisiones tomadas desde el embudo y no desde opiniones sobre el.',
      },
      'support-desk-handover': {
        category: 'Plataforma de Soporte',
        title: 'Mesa de Transferencia de Chatbot para Soporte',
        overview:
          'El bot responde lo que puede y pasa el resto a una persona con la conversacion completa adjunta. La mesa muestra por que se escalo cada chat, de modo que la base de conocimiento se corrige donde realmente fallo.',
        features: [
          'Transferencia automatica con el contexto completo',
          'Una bandeja para WhatsApp, Telegram y chat web',
          'Motivos de escalado registrados y reportados',
          'Respuestas rapidas y macros para preguntas repetidas',
        ],
        value: 'La mayoria de preguntas resueltas al instante y el resto llegando a una persona ya informada.',
      },
      'booking-scheduling-app': {
        category: 'Agendamiento',
        title: 'Gestion de Citas para Seis Profesionales',
        overview:
          'Un calendario para seis profesionales, tres salas y una pagina publica de reservas. La disponibilidad se calcula a partir de horarios, capacidad de salas y citas existentes, de modo que el hueco que ve el cliente existe de verdad.',
        features: [
          'Disponibilidad calculada por profesional, sala y servicio',
          'Pagina publica de reserva con correos de confirmacion',
          'Recordatorios por SMS y correo que reducen ausencias',
          'Ventanas de cambio y cancelacion aplicadas por regla',
        ],
        value: 'Una agenda que se llena sola, sin las citas duplicadas que invita una hoja compartida.',
      },
      'nest-microservices': {
        category: 'Backend y API',
        title: 'Servicio Nest.js Dividido en Colas',
        overview:
          'Un monolito dividido en trabajadores en cola por area: pedidos, pagos, stock, correo. Cada cola reintenta con espera creciente y lo que sigue fallando acaba en una cola muerta, para reprocesarlo en vez de perderlo.',
        features: [
          'Trabajo dividido en colas por area',
          'Reintento con espera exponencial por cola',
          'Cola muerta con reproceso desde la consola',
          'Rendimiento y retraso visibles por consumidor',
        ],
        value: 'Picos de trafico absorbidos por la cola en lugar de tumbar el checkout.',
      },
      'nextjs-headless-blog': {
        category: 'Sitio Editorial',
        title: 'Sitio Editorial en Next.js con CMS Headless',
        overview:
          'Un sitio editorial servido por Next.js y redactado en un CMS headless. Las paginas se pregeneran en el build y se revalidan en el edge, de modo que el sitio sigue siendo rapido sin que los editores esperen a un despliegue.',
        features: [
          'Pregeneracion estatica con revalidacion en el edge',
          'Los editores publican sin desarrollador ni despliegue',
          'Datos estructurados y sitemap generados automaticamente',
          'Imagenes servidas en formatos modernos segun el dispositivo',
        ],
        value: 'Velocidad de publicacion para los editores y de carga para el lector, a la vez.',
      },
      'laravel-queue-worker': {
        category: 'Backend y API',
        title: 'Importador de Catalogo en Colas con Laravel',
        overview:
          'Una importacion nocturna de catalogo sacada de la peticion web y llevada a trabajos en cola. El trabajo se divide en bloques, de modo que un bloque defectuoso reintenta solo en vez de tumbar toda la importacion, y la ejecucion informa de lo que rechazo.',
        features: [
          'Importacion dividida en bloques que reintentan por separado',
          'Espera exponencial con limite de reintentos',
          'Filas rechazadas informadas y nunca descartadas en silencio',
          'Progreso y fallos visibles mientras corre el trabajo',
        ],
        value: 'Una importacion que termina de noche y dice exactamente que no pudo aceptar.',
      },
      'wordpress-headless-api': {
        category: 'CMS Headless',
        title: 'WordPress Headless con Front End en Next.js',
        overview:
          'WordPress se mantiene como editor y se convierte en API; el sitio publico lo renderiza Next.js. Los editores conservan el flujo que conocen y el front end deja de estar limitado a lo que puede hacer una plantilla.',
        features: [
          'Rutas REST propias que devuelven bloques en JSON',
          'Cache invalidada en cuanto se guarda una entrada',
          'Los editores conservan el editor estandar de WordPress',
          'Front end libre de las limitaciones de temas y plugins',
        ],
        value: 'Un front end moderno sin reeducar a quien escribe el contenido.',
      },
      'shopify-inventory-sync': {
        category: 'Integracion',
        title: 'Sincronizacion de Stock entre Shopify y ERP',
        overview:
          'Stock mantenido a la par entre Shopify y un sistema de retaguardia, en ambos sentidos. El ERP sigue siendo la fuente de verdad, Shopify se actualiza dentro del presupuesto de la API y una reconciliacion horaria detecta desviaciones.',
        features: [
          'Sincronizacion bidireccional con el ERP como fuente de verdad',
          'Limitacion de ritmo que respeta el presupuesto de la API de Shopify',
          'Los pedidos reservan stock en el ERP al pagar',
          'Reconciliacion horaria que informa de cualquier desviacion',
        ],
        value: 'Una sola cifra de stock en ambos sistemas, para no vender lo que no hay.',
      },
      'node-realtime-orders': {
        category: 'Backend y API',
        title: 'Tablero de Pedidos en Tiempo Real por WebSockets',
        overview:
          'Pantallas de cocina y mostrador que se actualizan en cuanto un pedido cambia, sin sondeo. Las transiciones de estado se validan y bloquean en la base de datos, de modo que dos pantallas no avanzan el mismo pedido dos veces.',
        features: [
          'Estado enviado a todas las pantallas en el mismo instante',
          'Transiciones validadas y con bloqueo de fila en la base de datos',
          'Reconexion silenciosa tras una caida de red',
          'Probado con 400 pantallas simultaneas',
        ],
        value: 'Pantallas que coinciden entre si, en una sala donde los segundos importan.',
      },
      'python-data-pipeline': {
        category: 'Automatizacion',
        title: 'Pipeline Nocturno de Informes en Python',
        overview:
          'Seis fuentes recogidas cada noche, validadas y cargadas en una unica tabla de informes. Si se rechaza demasiada entrada, la ejecucion falla de forma ruidosa en lugar de publicar un informe en el que nadie deberia confiar.',
        features: [
          'Seis fuentes extraidas, validadas y cargadas cada noche',
          'La ejecucion falla de forma ruidosa al superar el umbral de rechazos',
          'Filas rechazadas conservadas e informadas, nunca descartadas',
          'Resumen enviado por correo a finanzas al terminar',
        ],
        value: 'Numeros que llegan al desayuno y un fallo ruidoso cuando no son de fiar.',
      },
      'react-native-loyalty-app': {
        category: 'Aplicacion Movil',
        title: 'App de Fidelizacion y Recompensas en React Native',
        overview:
          'Una tarjeta de fidelizacion que vive en el movil: puntos, niveles y un codigo que la caja puede escanear. Una sola base de codigo React Native llega a ambas tiendas y la tarjeta sigue funcionando sin cobertura.',
        features: [
          'Puntos y niveles con codigo de socio escaneable',
          'Catalogo de recompensas con canje en caja',
          'Ofertas dirigidas por nivel y por tienda mas cercana',
          'Tarjeta legible sin conexion, sincronizada al volver la senal',
        ],
        value: 'Visitas repetidas de clientes que ya llevan la tarjeta en el bolsillo.',
      },
      'flutter-habit-tracker': {
        category: 'Aplicacion Movil',
        title: 'Rastreador de Habitos en Flutter con Recordatorios Locales',
        overview:
          'Un rastreador de habitos hecho una sola vez en Flutter para ambas tiendas. Rachas, vista mensual y recordatorios que dispara el propio dispositivo, para que la app sirva en un tren sin cobertura.',
        features: [
          'Lista diaria con rachas y vista mensual',
          'Notificaciones locales que funcionan sin conexion',
          'Datos guardados en el dispositivo y exportables a CSV',
          'Una sola base de codigo Flutter para iOS y Android',
        ],
        value: 'Una app de habitos que sigue funcionando donde los habitos ocurren.',
      },
      'android-pos-terminal': {
        category: 'Aplicacion Movil',
        title: 'Terminal de Punto de Venta en Android',
        overview:
          'Una caja que cobra, imprime el ticket y cierra el dia. Las ventas se escriben primero en el dispositivo y se sincronizan despues, de modo que una caida de conexion nunca detiene la cola del mostrador.',
        features: [
          'Cesta, cobro e impresion de ticket en el dispositivo',
          'Ventas en cola local, sincronizadas al volver la senal',
          'Informe de cierre con tarjeta, efectivo y devoluciones',
          'Cobro con tarjeta, efectivo y vale de comida',
        ],
        value: 'Un mostrador que sigue atendiendo tenga o no buen dia internet.',
      },
      'ios-property-viewings': {
        category: 'Aplicacion Movil',
        title: 'Busqueda de Inmuebles y Reserva de Visitas en iOS',
        overview:
          'Buscar, guardar y reservar una visita sin salir de la app. El agente recibe la cita en su calendario y el comprador la confirmacion, de modo que la visita queda cerrada antes de que nadie coja el telefono.',
        features: [
          'Busqueda con filtros y listas guardadas',
          'Visita reservada contra el calendario del agente',
          'Confirmacion y entrada de calendario para el comprador',
          'Mensajeria en la app con el agente del anuncio',
        ],
        value: 'Visitas reservadas en el momento de mayor interes y no al siguiente dia habil.',
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
