/**
 * Single source of truth for every piece of copy on the site.
 *
 * Content is grounded in the verified Workana profile:
 * https://www.workana.com/freelancer/f9d69e5b850578f4e85687d42b23fbcf
 *
 * Skills, project titles, technologies, certifications, languages, ratings,
 * the client review and the project screenshots are taken from that profile. Project overviews and
 * feature lists are written from each project's title and technology stack —
 * they deliberately contain no invented metrics or outcome figures.
 */

import premiumFashionImg from '../assets/projects/premium-fashion.webp'
import modularFurnitureImg from '../assets/projects/modular-furniture.webp'
import multiBrandImg from '../assets/projects/multi-brand.webp'
import fitnessPlatformImg from '../assets/projects/fitness-platform.webp'
import apexLogisticsImg from '../assets/projects/apex-logistics.webp'
import luminaStudioImg from '../assets/projects/lumina-studio.webp'

export const profile = {
  name: 'Leonardo Antonio Audia',
  shortName: 'Leonardo Audia',
  monogram: 'LA',
  title: 'Senior Full-Stack Developer | Web, Mobile & E-Commerce',
  location: 'Italy',
  workanaUrl: 'https://www.workana.com/freelancer/f9d69e5b850578f4e85687d42b23fbcf',
  tagline: 'Senior Full-Stack Developer creating reliable, scalable, and innovative digital solutions.',
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
]

export const hero = {
  badge: 'Ranked #1 in IT & Programming in Italy on Workana',
  headline: 'Building Scalable Web, Mobile & E-Commerce Solutions for Modern Businesses',
  headlineAccent: 'E-Commerce Solutions',
  intro:
    'I am Leonardo Antonio Audia, a full-stack developer based in Italy. I build websites and web and mobile applications that genuinely work well — fast, clear and easy to use on any screen. Working independently since 2013, I have delivered e-commerce platforms, mobile applications, responsive business sites and internal process automation for clients across several industries and countries.',
  primaryCta: { label: 'View Projects', target: 'projects' },
  secondaryCta: { label: 'Explore My Expertise', target: 'skills' },
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '5.0', label: 'Client Rating on Workana' },
    { value: '#1', label: 'In Italy · IT & Programming' },
    { value: '4', label: 'Languages Spoken' },
  ],
  pillars: [
    { title: 'Full-Stack', detail: 'React.js · Next.js · Node.js · Nest.js' },
    { title: 'Mobile', detail: 'React Native · Android · iOS · Flutter' },
    { title: 'E-Commerce', detail: 'Storefronts · WooCommerce · WordPress' },
    { title: 'APIs', detail: 'REST API · Integrations · Chatbots' },
  ],
}

export const about = {
  eyebrow: 'About Me',
  heading: 'The technical part is rarely the hard part',
  paragraphs: [
    "Hi, I'm Leonardo Antonio. I build web and mobile applications that actually work well — fast, clear, and easy to use on any screen.",
    'I work mainly with React.js, Next.js and Node.js for custom platforms, and with WordPress and WooCommerce when a client needs to manage their own content without depending on a developer. I also build mobile apps for Android and iOS with React Native, plus API integrations and chatbots.',
    'Over 10 years of building digital products taught me that the technical part is rarely the hard part. The hard part is understanding what the business needs before writing code, and speaking up early when something won\u2019t work the way it\u2019s expected to. That\u2019s why I work with constant communication, visible progress throughout, and fast revisions.',
    'If you have a project in mind, tell me what you want to achieve and I\u2019ll give you an honest view of how I\u2019d approach it.',
  ],
  highlights: [
    {
      title: 'Independent Since 2013',
      detail: 'More than a decade delivering web and mobile applications as a self-employed developer.',
    },
    {
      title: 'Communication First',
      detail: 'Clear updates and screenshots at every stage, with fast and accurate revisions.',
    },
    {
      title: 'Multilingual Delivery',
      detail: 'Italian, English, Portuguese and Spanish — remote collaboration without a language barrier.',
    },
    {
      title: 'Responsive by Default',
      detail: 'Every interface built to stay fast, clear and usable on any screen size.',
    },
  ],
  facts: [
    { label: 'Based in', value: 'Italy' },
    { label: 'Experience', value: '10+ Years · Since 2013' },
    { label: 'Rating', value: '5.0 ★ on Workana' },
    { label: 'Ranking', value: '#1 in Italy · IT & Programming' },
    { label: 'Focus', value: 'Web · Mobile · E-Commerce' },
    { label: 'Delivery', value: 'Remote, Worldwide' },
  ],
  languages: [
    { name: 'Italian', level: 'Native or bilingual' },
    { name: 'English', level: 'Advanced' },
    { name: 'Portuguese', level: 'Intermediate' },
    { name: 'Spanish', level: 'Intermediate' },
  ],
  certifications: [
    { name: 'Android Avanzado', score: '96%' },
    { name: 'WordPress Avanzado', score: '90%' },
    { name: 'WordPress Intermedio', score: '86%' },
    { name: 'Test de inglés', score: '83%' },
  ],
}

export const services = {
  eyebrow: 'Services',
  heading: 'What I build for clients',
  intro:
    'Six capabilities drawn from the work I actually deliver — from a responsive business site to a full e-commerce platform with its own API layer.',
  items: [
    {
      icon: 'layers',
      title: 'Full-Stack Web Development',
      summary: 'Building scalable and maintainable web platforms.',
      description:
        'Complete web applications with React.js or Next.js on the front end and Node.js, Nest.js or PHP behind it — structured for performance and long-term maintenance.',
      points: ['React.js & Next.js front-ends', 'Node.js & Nest.js services', 'TypeScript codebases'],
    },
    {
      icon: 'cart',
      title: 'E-Commerce Development',
      summary: 'Storefronts built to sell and easy to run.',
      description:
        'Custom storefronts and multi-brand retail platforms, plus WordPress and WooCommerce builds — catalogue, cart, checkout and an admin your team can actually operate.',
      points: ['Custom storefronts', 'WooCommerce & WordPress', 'Multi-brand catalogues'],
    },
    {
      icon: 'mobile',
      title: 'Mobile Application Development',
      summary: 'Cross-platform apps that feel native.',
      description:
        'Mobile applications for Android and iOS built with React Native, plus Flutter and Windows Mobile work and mobile app design — delivered as one codebase across devices.',
      points: ['Android & iOS with React Native', 'Flutter & Windows Mobile', 'Mobile app design'],
    },
    {
      icon: 'api',
      title: 'REST API Development & Integration',
      summary: 'Creating secure and efficient backend services.',
      description:
        'REST APIs and web services built with Node.js and Nest.js, plus reliable integration of the third-party platforms and internal systems a business already depends on.',
      points: ['REST API design', 'Third-party integrations', 'Internal system connections'],
    },
    {
      icon: 'layout',
      title: 'Responsive Web Design & Landing Pages',
      summary: 'Fast, clear interfaces on every screen.',
      description:
        'Modern responsive sites and landing pages built in HTML, CSS and JavaScript — clean, quick to load and correct from mobile through to desktop.',
      points: ['Mobile-first layouts', 'Landing page development', 'Cross-device correctness'],
    },
    {
      icon: 'ai',
      title: 'Chatbots & Process Automation',
      summary: 'Removing repetitive work from the day.',
      description:
        'Chatbot development and workflow automation with Python and REST integrations — including internal process platforms that replace manual, spreadsheet-driven routines.',
      points: ['Chatbot development', 'Workflow automation', 'Python scripting & integrations'],
    },
  ],
}

export const skills = {
  eyebrow: 'Technical Skills',
  heading: 'The stack behind the solutions',
  intro:
    'Every technology listed here appears on my verified Workana profile, with the experience level recorded against it.',
  categories: [
    {
      icon: 'layout',
      name: 'Frontend',
      caption: 'Interfaces that stay fast and clear on any screen.',
      items: ['React.js', 'Next.js', 'AngularJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      icon: 'server',
      name: 'Backend',
      caption: 'Server-side services and the APIs on top of them.',
      items: ['Node.js', 'Nest.js', 'PHP', 'Python', 'REST API', 'API Integration'],
    },
    {
      icon: 'mobile',
      name: 'Mobile',
      caption: 'Cross-platform delivery from a single codebase.',
      items: ['React Native', 'Android', 'iOS', 'Flutter', 'Windows Mobile', 'Mobile App Design'],
    },
    {
      icon: 'cart',
      name: 'E-Commerce',
      caption: 'Storefronts, catalogues and the systems behind them.',
      items: ['E-commerce', 'WooCommerce', 'WordPress', 'Marketing'],
    },
    {
      icon: 'tools',
      name: 'Responsive & UI',
      caption: 'The discipline behind every layout I ship.',
      items: ['Responsive Web Design', 'Modern UI Development', 'Cross-Device Layouts'],
    },
    {
      icon: 'ai',
      name: 'Automation',
      caption: 'Chatbots and workflows that cut manual effort.',
      items: ['Chatbot', 'Process Automation', 'Third-Party Integrations'],
    },
  ],
  /* Experience recorded against the top skills on the Workana profile. */
  verified: [
    { name: 'React.js', projects: '5 projects', years: '+10 years' },
    { name: 'Responsive Web Design', projects: '5 projects', years: '+10 years' },
    { name: 'Node.js', projects: '3 projects', years: '+10 years' },
    { name: 'E-commerce', projects: '3 projects', years: '5 to 10 years' },
    { name: 'WordPress', projects: '1 project', years: '+10 years' },
    { name: 'HTML', projects: '1 project', years: '+10 years' },
    { name: 'CSS', projects: '1 project', years: '+10 years' },
  ],
}

export const projects = {
  eyebrow: 'Selected Work',
  heading: 'Projects delivered for real clients',
  intro:
    'Featured work from my Workana portfolio. Each entry lists the technologies actually used on the project.',
  items: [
    {
      id: 'premium-fashion',
      image: premiumFashionImg,
      imageSize: [1440, 682],
      category: 'E-Commerce',
      title: 'Premium Fashion E-Commerce Website Development',
      overview:
        'A premium fashion storefront built as a custom React.js front end on a Node.js back end — product catalogue, collection browsing, cart and checkout, with the visual polish a fashion brand needs and the load speed a shopper expects.',
      tech: ['React.js', 'Node.js'],
      features: [
        'Custom React.js storefront and collection pages',
        'Node.js back end serving catalogue and orders',
        'Cart and checkout flow',
        'Responsive layouts from mobile to desktop',
      ],
      value:
        'Gives the brand a storefront it fully owns — presentation matched to the product, and a codebase that can grow with the catalogue rather than fight it.',
    },
    {
      id: 'modular-furniture',
      image: modularFurnitureImg,
      imageSize: [1440, 688],
      category: 'E-Commerce',
      title: 'Modern Modular Furniture E-Commerce Platform',
      overview:
        'An e-commerce platform for modular furniture, where a single product is really a set of configurable options. The React.js front end handles configuration and variant selection while Node.js keeps pricing and availability consistent.',
      tech: ['React.js', 'Node.js'],
      features: [
        'Configurable product and variant selection',
        'Product detail pages with live option pricing',
        'Node.js services for catalogue and stock',
        'Cart built around configured items',
      ],
      value:
        'Lets customers assemble and price their own configuration online, so the sales team is no longer the bottleneck for every quote.',
    },
    {
      id: 'multi-brand',
      image: multiBrandImg,
      imageSize: [1440, 702],
      category: 'Platform & API',
      title: 'Multi-Brand Fashion E-Commerce Platform',
      overview:
        'A multi-brand retail platform built on AngularJS with a Nest.js back end — several brands running on shared infrastructure, each with its own catalogue, served through one structured API layer.',
      tech: ['AngularJS', 'Nest.js'],
      features: [
        'Nest.js API serving multiple brand storefronts',
        'Shared catalogue and order infrastructure',
        'AngularJS administration interface',
        'Structured, documented endpoints',
      ],
      value:
        'One platform to maintain instead of several, so adding a brand is a configuration exercise rather than a new build.',
    },
    {
      id: 'fitness-platform',
      image: fitnessPlatformImg,
      imageSize: [1440, 627],
      category: 'Mobile Application',
      title: 'Sports Coaching & Fitness Mobile Platform',
      overview:
        'A cross-platform mobile application for sports coaching, connecting coaches and athletes around training plans and session tracking. Built in React Native, with the mobile app design produced as part of the same engagement.',
      tech: ['React Native', 'Mobile App Design'],
      features: [
        'Training plans and session tracking',
        'Coach and athlete views in one app',
        'Progress history and activity feedback',
        'Interface designed for one-handed use during training',
      ],
      value:
        'Moves coaching off spreadsheets and messaging apps, giving coaches a single place to run programmes and athletes a clear view of what to do next.',
    },
    {
      id: 'apex-logistics',
      image: apexLogisticsImg,
      imageSize: [1024, 1024],
      category: 'Web Application',
      title: 'Apex Logistics',
      overview:
        'An internal operations dashboard built with React.js and TypeScript, bringing active projects, tasks, deadlines, documents and invoicing into a single workspace so a team can see the state of everything it is running at a glance.',
      tech: ['React.js', 'TypeScript'],
      features: [
        'Project overview with status, progress and deadlines',
        'Task lists and an upcoming calendar in one view',
        'Activity charts and document management',
        'TypeScript codebase for long-term safety',
      ],
      value:
        'Replaces scattered spreadsheets and separate tools with one workspace, so the state of every project is visible without chasing an update.',
    },
    {
      id: 'lumina-studio',
      image: luminaStudioImg,
      imageSize: [1024, 1024],
      category: 'Web Platform',
      title: 'Lumina Studio',
      overview:
        'A studio website built with Next.js and CSS3 — a fast, modern presence with server-rendered pages, considered typography and a layout that carries the studio’s work rather than competing with it.',
      tech: ['Next.js', 'CSS3'],
      features: [
        'Next.js server-rendered pages',
        'Work and case study presentation',
        'Hand-written CSS3 layouts and motion',
        'Performance and SEO oriented build',
      ],
      value:
        'A site that loads immediately and presents the studio’s work cleanly — the first impression a creative business is judged on.',
    },
    {
      id: 'pipefy-protocols',
      visual: 'automation',
      category: 'Process Automation',
      title: 'Internal Protocols Centre on Pipefy',
      overview:
        'An internal protocols centre implemented on Pipefy for a pharmaceutical distributor, replacing an informal manual routine with a structured, trackable process. Delivered in two phases for the same client.',
      tech: ['Pipefy', 'Process Automation', 'Integrations'],
      features: [
        'Structured intake and routing of internal protocols',
        'Defined stages with clear ownership at each step',
        'Automated movement between process phases',
        'Delivered across two project phases',
      ],
      value:
        'Gives the distributor one trackable route for internal protocols, so nothing depends on remembering an informal process.',
    },
  ],
}

/**
 * Capability examples — reference builds that demonstrate the chatbot and
 * Python automation skills listed on the profile. These are NOT client
 * deliveries, and the site labels them as such wherever they appear.
 */
export const examples = {
  eyebrow: 'Capability Examples',
  heading: 'Chatbot, messaging and Python automation builds',
  intro:
    'Reference builds rather than client deliveries — shown to make concrete what the chatbot, messaging and Python work on my skills list actually looks like in practice.',
  badge: 'Capability example',
  note: 'These two are reference builds, not client projects. Every project above was delivered for a paying client.',
  items: [
    {
      id: 'whatsapp-telegram-bot',
      visual: 'chatops',
      category: 'Messaging Chatbot',
      title: 'WhatsApp & Telegram Chatbot',
      overview:
        'A single bot serving both WhatsApp and Telegram from one Node.js backend. Customers ask about an order, book an appointment or reach a person, and get an answer in the app they already have open — with Telegram inline buttons and WhatsApp interactive replies driven by the same conversation logic.',
      tech: ['Chatbot', 'WhatsApp Business API', 'Telegram Bot API', 'Node.js', 'Python', 'REST API'],
      features: [
        'One conversation engine behind both platforms',
        'Telegram inline keyboards and WhatsApp quick replies',
        'Live order and booking lookups through REST integrations',
        'Handover to a human with the full thread attached',
      ],
      value:
        'Answers the routine questions where customers already are, at any hour, and only involves a person when the conversation actually needs one.',
    },
    {
      id: 'support-chatbot',
      visual: 'chatbot',
      category: 'Chatbot',
      title: 'Customer Support Chatbot',
      overview:
        'A support assistant that answers questions from a company knowledge base, handles routine requests end to end, and hands anything sensitive to a person with the full conversation attached. Deployed to a website widget and to messaging channels through the same API.',
      tech: ['Chatbot', 'Node.js', 'Python', 'REST API'],
      features: [
        'Intent matching against a knowledge base',
        'Human handover with full conversation context',
        'Website widget and messaging channels from one backend',
        'Dashboard showing what the bot could not answer',
      ],
      value:
        'Takes repetitive first-line questions off the team and shows exactly which gaps in the knowledge base are worth filling next.',
    },
    {
      id: 'python-automation',
      visual: 'python',
      category: 'Python Automation',
      title: 'Scheduled Python Data Pipeline',
      overview:
        'A scheduled Python job that pulls data from an API and a spreadsheet, validates and normalises it, writes the result to a single source of truth, and emails a report — replacing a manual routine somebody used to run by hand each morning.',
      tech: ['Python', 'REST API', 'Process Automation', 'Integrations'],
      features: [
        'Cron-scheduled extract, transform and load',
        'Validation and normalisation before anything is written',
        'Automated reporting once the run completes',
        'Run log and failure alerting for every execution',
      ],
      value:
        'Turns a recurring manual task into something that runs on its own and reports when it does not, so nobody has to remember it.',
    },
  ],
}

export const process = {
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
}

export const testimonials = {
  eyebrow: 'Client Feedback',
  heading: 'Trusted by international clients',
  intro:
    'Verified feedback from my Workana profile, where I hold a 5.0 rating across every completed engagement.',
  items: [
    {
      quote:
        'Very happy with the result. Leonardo built a clean, modern, fully responsive landing page and was well organized throughout — clear communication, screenshots at every stage, and fast, accurate revisions. Recommended.',
      author: 'Cejas',
      role: 'Modern Responsive Landing Page Development for Business',
      location: 'Workana · 5.0 ★',
      initials: 'C',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'WordPress'],
    },
  ],
  /* Completed and rated engagements shown without a written comment. */
  engagements: [
    {
      title: 'Implementação da Fase 2 da Central de Protocolos Internos no Pipefy para Kalk Distribuidora',
      client: 'K. D.',
      rating: '5.0 ★',
    },
    {
      title:
        'Implantação de Central de Protocolos Internos no Pipefy para Distribuidora de Medicamentos',
      client: 'K. D.',
      rating: 'Completed',
    },
  ],
  repeatNote: 'One client has hired me on more than one occasion.',
  verifyNote: 'Every rating and review shown here is published on my verified Workana profile.',
}

export const footer = {
  tagline: profile.tagline,
  blurb:
    'Full-stack engineering from Italy across web platforms, e-commerce, mobile applications, REST APIs and process automation — delivered remotely for clients worldwide.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'About', target: 'about' },
        { label: 'Services', target: 'services' },
        { label: 'Technical Skills', target: 'skills' },
      ],
    },
    {
      title: 'Work',
      links: [
        { label: 'Projects', target: 'projects' },
        { label: 'Work Process', target: 'process' },
        { label: 'Client Feedback', target: 'testimonials' },
      ],
    },
  ],
  expertise: ['Full-Stack Web', 'E-Commerce', 'Mobile Apps', 'REST APIs', 'Responsive Design', 'Automation'],
}
