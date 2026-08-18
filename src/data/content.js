/**
 * Language-independent site data, plus `buildContent(lang)` which merges it
 * with the translated strings in `src/i18n/translations.js`.
 *
 * Content is grounded in the verified Workana profile:
 * https://www.workana.com/freelancer/f9d69e5b850578f4e85687d42b23fbcf
 *
 * Skills, project titles, technologies, certifications, languages, ratings
 * and the project screenshots are taken from that profile.
 * Project overviews and feature lists are written from each project's title
 * and technology stack - they deliberately contain no invented metrics.
 */

import { translations } from '../i18n/translations'

import avatarImg from '../assets/avatar.webp'
import premiumFashionImg from '../assets/projects/premium-fashion.webp'
import modularFurnitureImg from '../assets/projects/modular-furniture.webp'
import multiBrandImg from '../assets/projects/multi-brand.webp'
import fitnessPlatformImg from '../assets/projects/fitness-platform.webp'

/*
 * Filter buttons, in the order they appear. Language-independent: the visible
 * label comes from `ui.filters`, so a project never has to be re-tagged when a
 * translation changes.
 *
 * Projects carry several tags rather than one discipline, because most of them
 * genuinely belong in more than one place - a headless Shopify storefront is
 * Shopify work, front-end work and API work at once, and a visitor hunting for
 * any of the three should find it.
 */
export const filterKeys = [
  'all',
  'ecommerce',
  'shopify',
  'wordpress',
  'php',
  'mobile',
  'frontend',
  'api',
  'chatbot',
  'automation',
]

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
    tags: ['ecommerce', 'frontend'],
    image: premiumFashionImg,
    imageSize: [1380, 682],
    tech: ['React.js', 'Node.js', 'JavaScript', 'E-commerce', 'Responsive Web Design'],
  },
  'modular-furniture': {
    tags: ['ecommerce', 'frontend', 'api'],
    image: modularFurnitureImg,
    imageSize: [1425, 636],
    tech: ['React.js', 'Node.js', 'JavaScript', 'E-commerce', 'REST API'],
  },
  'multi-brand': {
    tags: ['ecommerce', 'frontend', 'api'],
    image: multiBrandImg,
    imageSize: [1440, 702],
    tech: ['AngularJS', 'Nest.js', 'REST API', 'API Integration', 'E-commerce'],
  },
  'fitness-platform': {
    tags: ['mobile'],
    image: fitnessPlatformImg,
    imageSize: [1395, 627],
    tech: ['React Native', 'iOS', 'Android', 'Mobile App Design'],
  },
  'apex-logistics': {
    tags: ['frontend', 'api'],
    visual: 'apexLogistics',
    tech: ['React.js', 'TypeScript', 'REST API', 'Data Visualisation', 'Modern UI Development'],
  },
  'lumina-studio': {
    tags: ['frontend'],
    visual: 'luminaStudio',
    tech: ['Next.js', 'React.js', 'CSS3', 'SEO', 'Performance Optimisation'],
  },
  'pipefy-protocols': {
    tags: ['automation'],
    visual: 'pipefy',
    tech: ['Pipefy', 'Process Automation', 'Workflow Design', 'Third-Party Integrations'],
  },
}

/*
 * Both lists run in the same order: PHP, then Shopify, then mobile, then
 * WhatsApp and chatbot, then everything else. WordPress and WooCommerce sit
 * in the PHP group, since that is what they are built on. The row numbers in
 * the UI are derived from position, so reordering here renumbers the page.
 */
const projectOrder = [
  // Mobile - no PHP, Shopify or chatbot work among the delivered projects
  'fitness-platform',
  // Others
  'premium-fashion',
  'modular-furniture',
  'multi-brand',
  'apex-logistics',
  'lumina-studio',
  'pipefy-protocols',
]

const exampleMedia = {
  'shopify-fashion-theme': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    visual: 'shopifyTheme',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Responsive Web Design'],
  },
  'shopify-headless': {
    tags: ['ecommerce', 'shopify', 'frontend', 'api'],
    visual: 'shopifyHeadless',
    tech: ['Shopify', 'Storefront API', 'Next.js', 'React.js', 'TypeScript'],
  },
  'shopify-subscription-app': {
    tags: ['ecommerce', 'shopify', 'api'],
    visual: 'shopifyApp',
    tech: ['Shopify', 'Shopify App', 'Node.js', 'REST API', 'Webhooks'],
  },
  'woocommerce-store': {
    tags: ['ecommerce', 'wordpress', 'php', 'frontend'],
    visual: 'wooStore',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce', 'Responsive Web Design'],
  },
  'wordpress-multilingual-site': {
    tags: ['wordpress', 'php', 'frontend'],
    visual: 'wordpressEditor',
    tech: ['WordPress', 'PHP', 'Multilingual', 'SEO', 'Responsive Web Design'],
  },
  'wordpress-lead-plugin': {
    tags: ['wordpress', 'php', 'api', 'automation'],
    visual: 'wordpressPlugin',
    tech: ['WordPress', 'PHP', 'REST API', 'Process Automation'],
  },
  'react-native-shop-app': {
    tags: ['mobile', 'api'],
    visual: 'mobileShopping',
    tech: ['React Native', 'iOS', 'Android', 'REST API', 'Mobile App Design'],
  },
  'flutter-delivery-app': {
    tags: ['mobile', 'api'],
    visual: 'mobileDelivery',
    tech: ['Flutter', 'Android', 'iOS', 'REST API', 'Mobile App Design'],
  },
  'android-field-service': {
    tags: ['mobile', 'api'],
    visual: 'mobileField',
    tech: ['Android', 'Java', 'SQLite', 'REST API', 'Offline Sync'],
  },
  'laravel-booking-api': {
    tags: ['php', 'api'],
    visual: 'laravelApi',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API', 'API Integration'],
  },
  'php-crm-invoicing': {
    tags: ['php', 'frontend', 'api'],
    visual: 'phpCrm',
    tech: ['PHP', 'MySQL', 'REST API', 'Responsive Web Design'],
  },
  'php-payment-gateway': {
    tags: ['php', 'api'],
    visual: 'paymentGateway',
    tech: ['PHP', 'REST API', 'Webhooks', 'API Integration'],
  },
  'whatsapp-telegram-bot': {
    tags: ['api', 'chatbot'],
    visual: 'chatops',
    tech: ['Chatbot', 'WhatsApp Business API', 'Telegram Bot API', 'Node.js', 'Python', 'REST API'],
  },
  'support-chatbot': {
    tags: ['api', 'chatbot'],
    visual: 'chatbot',
    tech: ['Chatbot', 'Node.js', 'Python', 'REST API'],
  },
  'python-automation': {
    tags: ['api', 'automation'],
    visual: 'python',
    tech: ['Python', 'REST API', 'Process Automation', 'Integrations'],
  },
}

const exampleOrder = [
  // PHP, then the WordPress and WooCommerce builds that run on it
  'laravel-booking-api',
  'php-crm-invoicing',
  'php-payment-gateway',
  'woocommerce-store',
  'wordpress-multilingual-site',
  'wordpress-lead-plugin',
  // Shopify
  'shopify-fashion-theme',
  'shopify-headless',
  'shopify-subscription-app',
  // Mobile
  'react-native-shop-app',
  'flutter-delivery-app',
  'android-field-service',
  // WhatsApp and chatbot
  'whatsapp-telegram-bot',
  'support-chatbot',
  // Others
  'python-automation',
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
    },

    projects: {
      eyebrow: t.projects.eyebrow,
      heading: t.projects.heading,
      intro: t.projects.intro,
      note: t.examples.note,
      items: [
        ...projectOrder.map((id) => ({ id, ...projectMedia[id], ...t.projects.items[id] })),
        ...exampleOrder.map((id) => ({
          id,
          reference: true,
          badge: t.examples.badge,
          ...exampleMedia[id],
          ...t.examples.items[id],
        })),
      ],
      filters: filterKeys.map((key) => ({ key, label: t.ui.filters[key] })),
    },

    process: t.process,

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
          ],
        },
      ],
    },
  }
}
