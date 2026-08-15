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
    technologiesUsed: 'Technologies Used',
    keyFeatures: 'Key Features',
    businessValue: 'Business Value',
    projectWord: 'Project',
    exampleWord: 'Example',
    certifications: 'Certifications',
    languagesTitle: 'Languages',
    recordedExperience: 'Recorded experience',
    recordedNote: 'As published on my Workana profile',
    tableSkill: 'Skill',
    tableProjects: 'Projects',
    tableExperience: 'Experience',
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
    testimonials: 'Testimonials',
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
      'Every technology listed here appears on my verified Workana profile, with the experience level recorded against it.',
    categories: [
      ['Frontend', 'Interfaces that stay fast and clear on any screen.'],
      ['Backend', 'Server-side services and the APIs on top of them.'],
      ['Mobile', 'Cross-platform delivery from a single codebase.'],
      ['E-Commerce', 'Storefronts, catalogues and the systems behind them.'],
      ['Responsive & UI', 'The discipline behind every layout I ship.'],
      ['Automation', 'Chatbots and workflows that cut manual effort.'],
    ],
    projectsUnit: ['5 projects', '5 projects', '3 projects', '3 projects', '1 project', '1 project', '1 project'],
    yearsUnit: ['+10 years', '+10 years', '+10 years', '5 to 10 years', '+10 years', '+10 years', '+10 years'],
  },
  projects: {
    eyebrow: 'Selected Work',
    heading: 'Projects delivered for real clients',
    intro:
      'Featured work from my Workana portfolio. Each entry lists the technologies actually used on the project.',
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
    eyebrow: 'Capability Examples',
    heading: 'Chatbot, messaging and Python automation builds',
    intro:
      'Reference builds rather than client deliveries — shown to make concrete what the chatbot, messaging and Python work on my skills list actually looks like in practice.',
    badge: 'Capability example',
    note: 'These are reference builds, not client projects. Every project above was delivered for a paying client.',
    items: {
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
  testimonials: {
    eyebrow: 'Client Feedback',
    heading: 'Trusted by international clients',
    intro:
      'Verified feedback from my Workana profile, where I hold a 5.0 rating across every completed engagement.',
    reviewRole: 'Modern Responsive Landing Page Development for Business',
    reviewLocation: 'Workana · 5.0 ★',
    repeatNote: 'One client has hired me on more than one occasion.',
    verifyNote: 'Every rating and review shown here is published on my verified Workana profile.',
    engagementStatus: ['5.0 ★', 'Completed'],
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
      testimonials: 'Client Feedback',
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
    technologiesUsed: 'Tecnologias Utilizadas',
    keyFeatures: 'Principais Funcionalidades',
    businessValue: 'Valor para o Negócio',
    projectWord: 'Projeto',
    exampleWord: 'Exemplo',
    certifications: 'Certificações',
    languagesTitle: 'Idiomas',
    recordedExperience: 'Experiência registada',
    recordedNote: 'Conforme publicado no meu perfil Workana',
    tableSkill: 'Competência',
    tableProjects: 'Projetos',
    tableExperience: 'Experiência',
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
    testimonials: 'Depoimentos',
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
      'Todas as tecnologias aqui listadas constam do meu perfil verificado na Workana, com o nível de experiência registado.',
    categories: [
      ['Frontend', 'Interfaces que se mantêm rápidas e claras em qualquer ecrã.'],
      ['Backend', 'Serviços do lado do servidor e as APIs por cima deles.'],
      ['Mobile', 'Entrega multiplataforma a partir de uma só base de código.'],
      ['E-Commerce', 'Lojas, catálogos e os sistemas que os sustentam.'],
      ['Responsivo e UI', 'A disciplina por trás de cada layout que entrego.'],
      ['Automação', 'Chatbots e fluxos que reduzem o esforço manual.'],
    ],
    projectsUnit: ['5 projetos', '5 projetos', '3 projetos', '3 projetos', '1 projeto', '1 projeto', '1 projeto'],
    yearsUnit: ['+10 anos', '+10 anos', '+10 anos', '5 a 10 anos', '+10 anos', '+10 anos', '+10 anos'],
  },
  projects: {
    eyebrow: 'Trabalhos Selecionados',
    heading: 'Projetos entregues a clientes reais',
    intro:
      'Trabalhos em destaque do meu portefólio na Workana. Cada entrada indica as tecnologias realmente utilizadas no projeto.',
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
    eyebrow: 'Exemplos de Capacidade',
    heading: 'Projetos de chatbot, mensagens e automação em Python',
    intro:
      'Projetos de referência e não entregas a clientes — mostrados para tornar concreto o que o trabalho de chatbot, mensagens e Python da minha lista de competências significa na prática.',
    badge: 'Exemplo de capacidade',
    note: 'Estes são projetos de referência, não trabalhos de clientes. Todos os projetos acima foram entregues a clientes reais.',
    items: {
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
  testimonials: {
    eyebrow: 'Opinião dos Clientes',
    heading: 'A confiança de clientes internacionais',
    intro:
      'Comentários verificados do meu perfil Workana, onde mantenho uma avaliação de 5.0 em todos os trabalhos concluídos.',
    reviewRole: 'Desenvolvimento de Landing Page Responsiva Moderna para Empresa',
    reviewLocation: 'Workana · 5.0 ★',
    repeatNote: 'Um cliente contratou-me em mais do que uma ocasião.',
    verifyNote:
      'Todas as avaliações e comentários aqui apresentados estão publicados no meu perfil verificado da Workana.',
    engagementStatus: ['5.0 ★', 'Concluído'],
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
      testimonials: 'Opinião dos Clientes',
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
    technologiesUsed: 'Tecnologías Utilizadas',
    keyFeatures: 'Funcionalidades Clave',
    businessValue: 'Valor para el Negocio',
    projectWord: 'Proyecto',
    exampleWord: 'Ejemplo',
    certifications: 'Certificaciones',
    languagesTitle: 'Idiomas',
    recordedExperience: 'Experiencia registrada',
    recordedNote: 'Según lo publicado en mi perfil de Workana',
    tableSkill: 'Habilidad',
    tableProjects: 'Proyectos',
    tableExperience: 'Experiencia',
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
    testimonials: 'Testimonios',
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
      'Todas las tecnologías aquí listadas aparecen en mi perfil verificado de Workana, con el nivel de experiencia registrado.',
    categories: [
      ['Frontend', 'Interfaces que siguen siendo rápidas y claras en cualquier pantalla.'],
      ['Backend', 'Servicios de servidor y las APIs que se apoyan en ellos.'],
      ['Móvil', 'Entrega multiplataforma desde una sola base de código.'],
      ['E-Commerce', 'Tiendas, catálogos y los sistemas que los sostienen.'],
      ['Responsivo y UI', 'La disciplina detrás de cada maquetación que entrego.'],
      ['Automatización', 'Chatbots y flujos que reducen el esfuerzo manual.'],
    ],
    projectsUnit: ['5 proyectos', '5 proyectos', '3 proyectos', '3 proyectos', '1 proyecto', '1 proyecto', '1 proyecto'],
    yearsUnit: ['+10 años', '+10 años', '+10 años', '5 a 10 años', '+10 años', '+10 años', '+10 años'],
  },
  projects: {
    eyebrow: 'Trabajos Seleccionados',
    heading: 'Proyectos entregados a clientes reales',
    intro:
      'Trabajos destacados de mi portafolio en Workana. Cada entrada indica las tecnologías realmente utilizadas en el proyecto.',
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
    eyebrow: 'Ejemplos de Capacidad',
    heading: 'Proyectos de chatbot, mensajería y automatización en Python',
    intro:
      'Proyectos de referencia y no entregas a clientes: se muestran para concretar qué significan en la práctica el trabajo de chatbot, mensajería y Python de mi lista de habilidades.',
    badge: 'Ejemplo de capacidad',
    note: 'Estos son proyectos de referencia, no trabajos de clientes. Todos los proyectos anteriores se entregaron a clientes reales.',
    items: {
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
  testimonials: {
    eyebrow: 'Opinión de Clientes',
    heading: 'La confianza de clientes internacionales',
    intro:
      'Comentarios verificados de mi perfil de Workana, donde mantengo una valoración de 5.0 en todos los trabajos completados.',
    reviewRole: 'Desarrollo de Landing Page Responsiva Moderna para Empresa',
    reviewLocation: 'Workana · 5.0 ★',
    repeatNote: 'Un cliente me ha contratado en más de una ocasión.',
    verifyNote:
      'Todas las valoraciones y reseñas aquí mostradas están publicadas en mi perfil verificado de Workana.',
    engagementStatus: ['5.0 ★', 'Completado'],
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
      testimonials: 'Opinión de Clientes',
    },
    expertise: ['Web Full-Stack', 'E-Commerce', 'Apps Móviles', 'APIs REST', 'Diseño Responsivo', 'Automatización'],
  },
}

export const translations = { en, pt, es }
