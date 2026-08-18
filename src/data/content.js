/**
 * Language-independent site data, plus `buildContent(lang)` which merges it
 * with the translated strings in `src/i18n/translations.js`.
 *
 * Content is grounded in the verified Workana profile:
 * https://www.workana.com/freelancer/f9d69e5b850578f4e85687d42b23fbcf
 *
 * Skills, project titles, technologies, certifications, languages, ratings,
 * the client review and the project screenshots are taken from that profile.
 * Project overviews and feature lists are written from each project's title
 * and technology stack - they deliberately contain no invented metrics.
 */

import { translations } from '../i18n/translations'

import avatarImg from '../assets/avatar.webp'
import premiumFashionImg from '../assets/projects/premium-fashion.webp'
import modularFurnitureImg from '../assets/projects/modular-furniture.webp'
import multiBrandImg from '../assets/projects/multi-brand.webp'
import fitnessPlatformImg from '../assets/projects/fitness-platform.webp'

/* Identity - the same in every language. */
export const profile = {
  name: 'Leonardo Antonio Audia',
  shortName: 'Leonardo Audia',
  monogram: 'LA',
  avatar: avatarImg,
  location: 'Italy',
  workanaUrl: 'https://www.workana.com/freelancer/f9d69e5b850578f4e85687d42b23fbcf',
}

export const sectionIds = [
  'home',
  'about',
  'services',
  'skills',
  'projects',
  'process',
  'testimonials',
]

/* Numbers and symbols carry across languages unchanged. */
const statValues = ['10+', '5.0', '#1', '4']

const pillarDetails = [
  'React.js · Next.js · Node.js · Nest.js',
  'React Native · Android · iOS · Flutter',
  'Shopify · WooCommerce · WordPress',
  'REST API · Integrations · Chatbots',
]

const serviceIcons = ['layers', 'cart', 'mobile', 'api', 'layout', 'ai']

const skillIcons = ['layout', 'server', 'mobile', 'cart', 'tools', 'ai']

/* Technology names are proper nouns and stay untranslated. */
const skillItems = [
  ['React.js', 'Next.js', 'AngularJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  ['Node.js', 'Nest.js', 'PHP', 'Laravel', 'Python', 'REST API', 'API Integration'],
  ['React Native', 'Android', 'iOS', 'Flutter', 'Windows Mobile', 'Mobile App Design'],
  ['E-commerce', 'Shopify', 'WooCommerce', 'WordPress', 'Marketing'],
  ['Responsive Web Design', 'Modern UI Development', 'Cross-Device Layouts'],
  ['Chatbot', 'Process Automation', 'Third-Party Integrations'],
]

const verifiedSkills = [
  'React.js',
  'Responsive Web Design',
  'Node.js',
  'E-commerce',
  'WordPress',
  'HTML',
  'CSS',
]

/* Official test titles - left in their original language. */
export const certifications = [
  { name: 'Android Avanzado', score: '96%' },
  { name: 'WordPress Avanzado', score: '90%' },
  { name: 'WordPress Intermedio', score: '86%' },
  { name: 'Test de inglés', score: '83%' },
]

/* Screenshots, stacks and scene names, keyed by project id. */
const projectMedia = {
  'premium-fashion': {
    image: premiumFashionImg,
    imageSize: [1380, 682],
    tech: ['React.js', 'Node.js', 'JavaScript', 'E-commerce', 'Responsive Web Design'],
  },
  'modular-furniture': {
    image: modularFurnitureImg,
    imageSize: [1425, 636],
    tech: ['React.js', 'Node.js', 'JavaScript', 'E-commerce', 'REST API'],
  },
  'multi-brand': {
    image: multiBrandImg,
    imageSize: [1440, 702],
    tech: ['AngularJS', 'Nest.js', 'REST API', 'API Integration', 'E-commerce'],
  },
  'fitness-platform': {
    image: fitnessPlatformImg,
    imageSize: [1395, 627],
    tech: ['React Native', 'iOS', 'Android', 'Mobile App Design'],
  },
  'apex-logistics': {
    visual: 'apexLogistics',
    tech: ['React.js', 'TypeScript', 'REST API', 'Data Visualisation', 'Modern UI Development'],
  },
  'lumina-studio': {
    visual: 'luminaStudio',
    tech: ['Next.js', 'React.js', 'CSS3', 'SEO', 'Performance Optimisation'],
  },
  'pipefy-protocols': {
    visual: 'pipefy',
    tech: ['Pipefy', 'Process Automation', 'Workflow Design', 'Third-Party Integrations'],
  },
}

/*
 * Both lists run in the same order: mobile first, then PHP and WordPress,
 * then WhatsApp and chat, then everything else. The row numbers in the UI are
 * derived from position, so reordering here renumbers the page.
 */
const projectOrder = [
  // Mobile
  'fitness-platform',
  // Others - no PHP, WordPress or chat work among the delivered projects
  'premium-fashion',
  'modular-furniture',
  'multi-brand',
  'apex-logistics',
  'lumina-studio',
  'pipefy-protocols',
]

const exampleMedia = {
  'shopify-fashion-theme': {
    visual: 'shopifyTheme',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Responsive Web Design'],
  },
  'shopify-headless': {
    visual: 'shopifyHeadless',
    tech: ['Shopify', 'Storefront API', 'Next.js', 'React.js', 'TypeScript'],
  },
  'shopify-subscription-app': {
    visual: 'shopifyApp',
    tech: ['Shopify', 'Shopify App', 'Node.js', 'REST API', 'Webhooks'],
  },
  'woocommerce-store': {
    visual: 'wooStore',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce', 'Responsive Web Design'],
  },
  'wordpress-multilingual-site': {
    visual: 'wordpressEditor',
    tech: ['WordPress', 'PHP', 'Multilingual', 'SEO', 'Responsive Web Design'],
  },
  'wordpress-lead-plugin': {
    visual: 'wordpressPlugin',
    tech: ['WordPress', 'PHP', 'REST API', 'Process Automation'],
  },
  'react-native-shop-app': {
    visual: 'mobileShopping',
    tech: ['React Native', 'iOS', 'Android', 'REST API', 'Mobile App Design'],
  },
  'flutter-delivery-app': {
    visual: 'mobileDelivery',
    tech: ['Flutter', 'Android', 'iOS', 'REST API', 'Mobile App Design'],
  },
  'android-field-service': {
    visual: 'mobileField',
    tech: ['Android', 'Java', 'SQLite', 'REST API', 'Offline Sync'],
  },
  'laravel-booking-api': {
    visual: 'laravelApi',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API', 'API Integration'],
  },
  'php-crm-invoicing': {
    visual: 'phpCrm',
    tech: ['PHP', 'MySQL', 'REST API', 'Responsive Web Design'],
  },
  'php-payment-gateway': {
    visual: 'paymentGateway',
    tech: ['PHP', 'REST API', 'Webhooks', 'API Integration'],
  },
  'whatsapp-telegram-bot': {
    visual: 'chatops',
    tech: ['Chatbot', 'WhatsApp Business API', 'Telegram Bot API', 'Node.js', 'Python', 'REST API'],
  },
  'support-chatbot': { visual: 'chatbot', tech: ['Chatbot', 'Node.js', 'Python', 'REST API'] },
  'python-automation': {
    visual: 'python',
    tech: ['Python', 'REST API', 'Process Automation', 'Integrations'],
  },
}

const exampleOrder = [
  // Mobile
  'react-native-shop-app',
  'flutter-delivery-app',
  'android-field-service',
  // PHP, then WordPress - WooCommerce runs on WordPress, so it sits with it
  'laravel-booking-api',
  'php-crm-invoicing',
  'php-payment-gateway',
  'woocommerce-store',
  'wordpress-multilingual-site',
  'wordpress-lead-plugin',
  // WhatsApp and chat
  'whatsapp-telegram-bot',
  'support-chatbot',
  // Others
  'shopify-fashion-theme',
  'shopify-headless',
  'shopify-subscription-app',
  'python-automation',
]

/* The published review, quoted in the language the client wrote it in. */
const review = {
  quote:
    'Very happy with the result. Leonardo built a clean, modern, fully responsive landing page and was well organized throughout — clear communication, screenshots at every stage, and fast, accurate revisions. Recommended.',
  author: 'Cejas',
  initials: 'C',
  tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'WordPress'],
}

/* Engagement titles as recorded on Workana, left in the original Portuguese. */
const engagements = [
  {
    title:
      'Implementação da Fase 2 da Central de Protocolos Internos no Pipefy para Kalk Distribuidora',
    client: 'K. D.',
  },
  {
    title:
      'Implantação de Central de Protocolos Internos no Pipefy para Distribuidora de Medicamentos',
    client: 'K. D.',
  },
]

/**
 * Merges the translated strings for `lang` with the shared data above and
 * returns the complete content tree the components render from.
 */
export function buildContent(lang) {
  const t = translations[lang] ?? translations.en

  return {
    lang,
    htmlLang: t.htmlLang,
    ui: t.ui,

    profile: { ...profile, title: t.profileTitle, navRole: t.navRole, tagline: t.tagline },

    nav: sectionIds.map((id) => ({ id, label: t.nav[id] })),

    hero: {
      badge: t.hero.badge,
      headline: t.hero.headline,
      headlineAccent: t.hero.headlineAccent,
      intro: t.hero.intro,
      primaryCta: { label: t.hero.primaryCta, target: 'projects' },
      secondaryCta: { label: t.hero.secondaryCta, target: 'skills' },
      stats: t.hero.stats.map((label, i) => ({ value: statValues[i], label })),
      pillars: t.hero.pillars.map((title, i) => ({ title, detail: pillarDetails[i] })),
    },

    about: {
      eyebrow: t.about.eyebrow,
      heading: t.about.heading,
      paragraphs: t.about.paragraphs,
      highlights: t.about.highlights.map(([title, detail]) => ({ title, detail })),
      facts: t.about.facts.map(([label, value]) => ({ label, value })),
      languages: t.about.languageNames.map((name, i) => ({
        name,
        level: t.about.languageLevels[i],
      })),
      certifications,
    },

    services: {
      eyebrow: t.services.eyebrow,
      heading: t.services.heading,
      intro: t.services.intro,
      items: t.services.items.map((item, i) => ({ ...item, icon: serviceIcons[i] })),
    },

    skills: {
      eyebrow: t.skills.eyebrow,
      heading: t.skills.heading,
      intro: t.skills.intro,
      categories: t.skills.categories.map(([name, caption], i) => ({
        name,
        caption,
        icon: skillIcons[i],
        items: skillItems[i],
      })),
      verified: verifiedSkills.map((name, i) => ({
        name,
        projects: t.skills.projectsUnit[i],
        years: t.skills.yearsUnit[i],
      })),
    },

    projects: {
      eyebrow: t.projects.eyebrow,
      heading: t.projects.heading,
      intro: t.projects.intro,
      items: projectOrder.map((id) => ({ id, ...projectMedia[id], ...t.projects.items[id] })),
    },

    examples: {
      eyebrow: t.examples.eyebrow,
      heading: t.examples.heading,
      intro: t.examples.intro,
      badge: t.examples.badge,
      note: t.examples.note,
      items: exampleOrder.map((id) => ({ id, ...exampleMedia[id], ...t.examples.items[id] })),
    },

    process: t.process,

    testimonials: {
      eyebrow: t.testimonials.eyebrow,
      heading: t.testimonials.heading,
      intro: t.testimonials.intro,
      repeatNote: t.testimonials.repeatNote,
      verifyNote: t.testimonials.verifyNote,
      items: [
        {
          ...review,
          role: t.testimonials.reviewRole,
          location: t.testimonials.reviewLocation,
        },
      ],
      engagements: engagements.map((item, i) => ({
        ...item,
        rating: t.testimonials.engagementStatus[i],
      })),
    },

    footer: {
      tagline: t.tagline,
      blurb: t.footer.blurb,
      expertise: t.footer.expertise,
      columns: [
        {
          title: t.footer.columns[0],
          links: [
            { label: t.footer.links.about, target: 'about' },
            { label: t.footer.links.services, target: 'services' },
            { label: t.footer.links.skills, target: 'skills' },
          ],
        },
        {
          title: t.footer.columns[1],
          links: [
            { label: t.footer.links.projects, target: 'projects' },
            { label: t.footer.links.process, target: 'process' },
            { label: t.footer.links.testimonials, target: 'testimonials' },
          ],
        },
      ],
    },
  }
}
