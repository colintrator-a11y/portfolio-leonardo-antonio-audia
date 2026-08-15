/**
 * Single source of truth for every piece of copy on the site.
 * Editing content should never require touching a component.
 */

export const profile = {
  name: 'Leonardo Antonio Audia',
  shortName: 'Leonardo Audia',
  monogram: 'LA',
  title: 'Senior Full-Stack Developer | Mobile App Developer | AI & API Specialist',
  roles: ['Full-Stack Development', 'Mobile Applications', 'REST APIs', 'AI & Automation'],
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
  badge: '10+ Years of Software Development Experience',
  headline: 'Building Scalable Web, Mobile & AI-Powered Solutions for Modern Businesses',
  headlineAccent: 'AI-Powered Solutions',
  intro:
    'I am Leonardo Antonio Audia, a senior full-stack developer who turns business ideas into production-ready software. For more than a decade I have designed, built and delivered web platforms, mobile applications, REST APIs and AI-driven systems for startups, established businesses and international clients — owning every stage from requirements analysis through architecture, development, testing and deployment.',
  primaryCta: { label: 'View Projects', target: 'projects' },
  secondaryCta: { label: 'Explore My Expertise', target: 'skills' },
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '6', label: 'Core Service Areas' },
    { value: '25+', label: 'Technologies Mastered' },
    { value: 'Global', label: 'International Clients' },
  ],
  pillars: [
    { title: 'Full-Stack', detail: 'React · Node.js · PHP · Python · Java' },
    { title: 'Mobile', detail: 'Android · iOS · React Native · Flutter' },
    { title: 'APIs', detail: 'REST · Web Services · Integrations' },
    { title: 'AI', detail: 'Machine Learning · Chatbots · Automation' },
  ],
}

export const about = {
  eyebrow: 'About Me',
  heading: 'A decade of turning business challenges into dependable software',
  paragraphs: [
    'My career in software engineering spans more than ten years, built on a simple principle: technology is only valuable when it solves a real business problem. I started as a developer writing server-side code and grew into an engineer who owns entire products — shaping the architecture, choosing the stack, writing the code, hardening the quality and shipping to production.',
    'Working as an international freelance developer, including through Workana.com, has taught me how to collaborate across time zones, cultures and industries. I work with founders who need a first product built the right way, with businesses modernising legacy systems, and with teams that need senior reinforcement on complex web, mobile or API work. Clear communication, predictable delivery and honest technical advice are as much a part of my service as the code itself.',
    'My approach begins with understanding the business, not the backlog. I ask what outcome the software must produce, translate that into a system design that will still hold up as usage grows, and then build in deliberate, reviewable increments. Every project is engineered for the long term: clean, documented code, sensible data models, secure APIs and a test strategy that protects the product as it evolves.',
    'From concept and architecture through development, testing, deployment and ongoing maintenance, I manage the full lifecycle. Clients get a single accountable engineer who understands both sides of the stack and stays involved long after launch — a long-term technology partner rather than a short-term pair of hands.',
  ],
  highlights: [
    {
      title: 'Full Lifecycle Ownership',
      detail: 'Requirements, architecture, development, QA, deployment and maintenance under one roof.',
    },
    {
      title: 'Business-First Engineering',
      detail: 'Technical decisions justified by cost, scale and the outcome the business actually needs.',
    },
    {
      title: 'International Collaboration',
      detail: 'Remote delivery across time zones with transparent progress reporting and documentation.',
    },
    {
      title: 'Built to Scale',
      detail: 'Architecture, databases and APIs designed for growth, security and maintainability.',
    },
  ],
  facts: [
    { label: 'Experience', value: '10+ Years' },
    { label: 'Focus', value: 'Web · Mobile · API · AI' },
    { label: 'Engagement', value: 'Freelance & Long-Term Partnership' },
    { label: 'Clients', value: 'Startups · Businesses · Enterprises' },
    { label: 'Delivery', value: 'Remote, Worldwide' },
  ],
}

export const services = {
  eyebrow: 'Services',
  heading: 'End-to-end software engineering services',
  intro:
    'Six focused capabilities that cover everything a modern digital product needs — from the first architecture diagram to a stable, monitored production release.',
  items: [
    {
      icon: 'layers',
      title: 'Full-Stack Web Development',
      summary: 'Building scalable and maintainable web platforms.',
      description:
        'Complete web applications built with React.js on the front end and PHP, Python, Java or Node.js on the back end — structured for performance, security and long-term maintainability.',
      points: ['Component-based front-ends', 'Modular server architecture', 'Performance optimisation'],
    },
    {
      icon: 'api',
      title: 'REST API Development & Integration',
      summary: 'Creating secure and efficient backend services.',
      description:
        'Well-documented REST APIs and web services, plus reliable integration of third-party platforms — payments, messaging, maps, chatbot and business systems.',
      points: ['REST API design & documentation', 'Third-party API integration', 'Authentication & rate limiting'],
    },
    {
      icon: 'mobile',
      title: 'Mobile Application Development',
      summary: 'Developing Android, iOS, React Native and Flutter applications.',
      description:
        'Native and cross-platform mobile applications with offline support, push notifications and smooth, responsive interfaces that feel at home on every device.',
      points: ['Android & iOS delivery', 'React Native & Flutter', 'Offline-first & push notifications'],
    },
    {
      icon: 'ai',
      title: 'AI & Chatbot Solutions',
      summary: 'Building intelligent automation and AI-powered systems.',
      description:
        'Machine learning features and conversational assistants that automate repetitive work, qualify enquiries and surface insights from your existing business data.',
      points: ['Intelligent chatbots', 'ML-driven features', 'Workflow automation'],
    },
    {
      icon: 'database',
      title: 'Database Architecture',
      summary: 'Designing efficient and reliable data solutions.',
      description:
        'Relational data models, indexing and query tuning that keep applications fast as data volume grows, with safe migration paths and dependable backups.',
      points: ['Schema & data modelling', 'Query & index optimisation', 'Migrations and data integrity'],
    },
    {
      icon: 'shield',
      title: 'Software Testing & Quality Assurance',
      summary: 'Ensuring stable, secure, and high-quality applications.',
      description:
        'Structured testing, debugging and performance profiling so releases are predictable — functional coverage, regression protection and production readiness reviews.',
      points: ['Functional & regression testing', 'Debugging & profiling', 'Release readiness reviews'],
    },
  ],
}

export const skills = {
  eyebrow: 'Technical Skills',
  heading: 'The stack behind the solutions',
  intro:
    'A deliberately broad but deep toolkit, refined over ten years of production work across web, mobile, data and AI systems.',
  categories: [
    {
      icon: 'layout',
      name: 'Frontend',
      caption: 'Interfaces that are fast, accessible and responsive.',
      items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Modern UI Development'],
    },
    {
      icon: 'server',
      name: 'Backend',
      caption: 'Server-side systems engineered for scale.',
      items: ['PHP', 'Python', 'Java', 'Node.js', 'REST API', 'Backend Architecture'],
    },
    {
      icon: 'mobile',
      name: 'Mobile',
      caption: 'Native and cross-platform application delivery.',
      items: ['Android', 'iOS', 'React Native', 'Flutter', 'Cross-Platform Apps'],
    },
    {
      icon: 'database',
      name: 'Database',
      caption: 'Data models that stay fast under growth.',
      items: ['SQL', 'Database Architecture', 'Data Management', 'Query Optimisation'],
    },
    {
      icon: 'ai',
      name: 'AI',
      caption: 'Automation and intelligence layered onto products.',
      items: ['Machine Learning', 'Chatbots', 'Automation', 'AI Integrations'],
    },
    {
      icon: 'tools',
      name: 'Tools',
      caption: 'The workflow that keeps delivery predictable.',
      items: ['Git', 'Cloud Services', 'API Testing', 'Development Tools', 'Google Maps API'],
    },
  ],
}

export const projects = {
  eyebrow: 'Selected Work',
  heading: 'Projects that solved real business problems',
  intro:
    'A representative selection of systems I have designed and delivered. Each one started as a business constraint and ended as software in daily production use.',
  items: [
    {
      id: 'ai-chatbot',
      visual: 'chatbot',
      category: 'AI & Automation',
      title: 'AI Customer Support Chatbot Platform',
      overview:
        'A multi-channel support assistant that answers customer questions from a company knowledge base, resolves routine requests end to end and escalates anything sensitive to a human agent with full conversation context attached.',
      tech: ['Python', 'Machine Learning', 'Node.js', 'REST API', 'React.js', 'SQL'],
      features: [
        'Intent detection and knowledge-base driven answers',
        'Live agent handover with full conversation history',
        'Website, mobile and messaging channel integration',
        'Analytics dashboard for resolution rate and gaps',
      ],
      value:
        'Deflected the majority of repetitive first-line enquiries, cut average response time from hours to seconds and let the support team focus on complex, high-value cases.',
    },
    {
      id: 'ecommerce',
      visual: 'ecommerce',
      category: 'Web Platform',
      title: 'E-commerce Web Application',
      overview:
        'A complete storefront and administration platform covering catalogue management, cart and checkout, payment processing, order fulfilment and reporting — built to stay responsive during promotional traffic peaks.',
      tech: ['React.js', 'PHP', 'SQL', 'REST API', 'Payment Gateway APIs', 'Responsive Design'],
      features: [
        'Product catalogue with search, filters and variants',
        'Secure checkout and payment gateway integration',
        'Admin panel for inventory, orders and customers',
        'Sales and stock reporting dashboards',
      ],
      value:
        'Replaced manual order handling with an automated pipeline, improved page performance on mobile and gave the business a single reliable source of truth for stock and revenue.',
    },
    {
      id: 'delivery-app',
      visual: 'delivery',
      category: 'Mobile Application',
      title: 'Mobile Delivery Application',
      overview:
        'A cross-platform delivery app with three connected experiences — customer ordering, driver dispatch and an operations console — kept in sync in real time through a shared REST API.',
      tech: ['React Native', 'Flutter', 'Node.js', 'REST API', 'Google Maps API', 'SQL'],
      features: [
        'Real-time order tracking and driver routing',
        'Push notifications for every status change',
        'Offline-tolerant driver workflow',
        'Proof-of-delivery capture and history',
      ],
      value:
        'Gave operations live visibility over every active delivery, reduced support calls asking "where is my order" and shortened average delivery times through smarter routing.',
    },
    {
      id: 'geolocation',
      visual: 'maps',
      category: 'Location Technology',
      title: 'Google Maps & Geolocation Application',
      overview:
        'A location-intelligence application that plots assets and service coverage on interactive maps, calculates optimal routes and triggers geofence events as vehicles and field staff move.',
      tech: ['Google Maps API', 'JavaScript', 'React.js', 'Node.js', 'Geolocation Services', 'SQL'],
      features: [
        'Interactive maps with clustering and custom overlays',
        'Route optimisation and distance calculation',
        'Geofencing with automated event triggers',
        'Historical movement and coverage reporting',
      ],
      value:
        'Turned raw location data into operational decisions — better territory planning, lower fuel and travel costs, and measurable field-team accountability.',
    },
    {
      id: 'enterprise-api',
      visual: 'api',
      category: 'Backend Architecture',
      title: 'Enterprise REST API System',
      overview:
        'A centralised API layer that unified several disconnected internal systems behind one secure, documented and versioned interface consumed by web, mobile and partner applications.',
      tech: ['Java', 'Node.js', 'REST API', 'SQL', 'API Security', 'Web Services'],
      features: [
        'Versioned, fully documented REST endpoints',
        'Token-based authentication and role permissions',
        'Rate limiting, logging and error monitoring',
        'Legacy system integration adapters',
      ],
      value:
        'Removed duplicated integration work across teams, made partner onboarding a matter of days instead of months and created a stable foundation for future products.',
    },
    {
      id: 'automation',
      visual: 'automation',
      category: 'Business Systems',
      title: 'Business Automation Platform',
      overview:
        'An internal platform that replaced spreadsheet-driven processes with configurable automated workflows — approvals, scheduled jobs, document generation and system-to-system data synchronisation.',
      tech: ['Python', 'Node.js', 'REST API', 'SQL', 'Automation', 'React.js'],
      features: [
        'Visual workflow rules and approval chains',
        'Scheduled jobs and automated notifications',
        'Third-party system synchronisation',
        'Audit trail for every automated action',
      ],
      value:
        'Eliminated hours of recurring manual administration each week, reduced human error in critical processes and produced a complete audit history for compliance.',
    },
  ],
}

export const process = {
  eyebrow: 'Work Process',
  heading: 'A disciplined path from idea to production',
  intro:
    'The same structured workflow on every engagement — so clients always know what is happening, what comes next and what they will receive.',
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
        'Stack selection, data modelling, API contracts and infrastructure decisions, documented and justified against cost, scale and maintainability.',
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
        'Clean, component-based implementation in reviewable increments, with third-party services and internal systems integrated as first-class parts of the build.',
      output: 'Working increments, version controlled',
    },
    {
      title: 'Testing & Quality Assurance',
      detail:
        'Functional, regression and performance testing, security checks and debugging on real devices and real data volumes before anything reaches users.',
      output: 'Test coverage & QA report',
    },
    {
      title: 'Deployment & Maintenance',
      detail:
        'Controlled release to production with monitoring, documentation and handover — followed by ongoing support, optimisation and iteration.',
      output: 'Live release & support plan',
    },
  ],
}

export const testimonials = {
  eyebrow: 'Client Feedback',
  heading: 'Trusted by international clients',
  intro:
    'Feedback from freelance engagements, including projects delivered through Workana.com with clients across Europe and the Americas.',
  items: [
    {
      quote:
        'Leonardo took a rough business idea and returned a clear technical plan before writing a single line of code. The platform was delivered on schedule, the architecture is clean, and everything still runs smoothly a year later.',
      author: 'Startup Founder',
      role: 'SaaS Platform · Workana Client',
      location: 'Spain',
      initials: 'SF',
    },
    {
      quote:
        'Communication was the difference. Weekly updates, honest estimates and no surprises — even across a five-hour time difference. He explained technical trade-offs in language our non-technical team could act on.',
      author: 'Operations Director',
      role: 'Logistics Company · Workana Client',
      location: 'Argentina',
      initials: 'OD',
    },
    {
      quote:
        'We hired him to integrate a chatbot and third-party APIs into an existing system. He identified problems in our legacy code we did not know about, fixed them, and documented everything for our internal team.',
      author: 'Product Manager',
      role: 'E-commerce Business · International Client',
      location: 'United States',
      initials: 'PM',
    },
    {
      quote:
        'Senior-level engineering in every sense. The mobile app was stable from the first release, the API was properly documented, and the QA process meant we spent almost nothing on post-launch fixes.',
      author: 'Technical Lead',
      role: 'Enterprise Software Project',
      location: 'Italy',
      initials: 'TL',
    },
  ],
}

export const footer = {
  tagline: profile.tagline,
  blurb:
    'Ten-plus years of full-stack engineering across web platforms, mobile applications, REST APIs, databases and AI-powered systems — delivered remotely for clients worldwide.',
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
  expertise: ['Full-Stack Web', 'Mobile Apps', 'REST APIs', 'AI & Chatbots', 'Databases', 'QA & Testing'],
}
