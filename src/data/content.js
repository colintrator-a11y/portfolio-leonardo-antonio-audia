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

/* Earlier delivered work: apps, sites and stores. */
import gameWebLudoRealMoneyImg from '../assets/work/game-web-ludo-real-money.webp'
import appWebBharatSupportImg from '../assets/work/app-web-bharat-support.webp'
import appAspireSchoolManagementShot1 from '../assets/work/gallery/app-aspire-school-management-1.webp'
import appLumyBeautyShot1 from '../assets/work/gallery/app-lumy-beauty-1.webp'
import appLumyBeautyShot2 from '../assets/work/gallery/app-lumy-beauty-2.webp'
import appLumyBeautyShot3 from '../assets/work/gallery/app-lumy-beauty-3.webp'
import appLumyBeautyShot4 from '../assets/work/gallery/app-lumy-beauty-4.webp'
import appScanDocaiScannerShot1 from '../assets/work/gallery/app-scan-docai-scanner-1.webp'
import appScanDocaiScannerShot2 from '../assets/work/gallery/app-scan-docai-scanner-2.webp'
import webBethemeWordpressThemeShot1 from '../assets/work/gallery/web-betheme-wordpress-theme-1.webp'
import webBethemeWordpressThemeShot2 from '../assets/work/gallery/web-betheme-wordpress-theme-2.webp'
import webBethemeWordpressThemeShot3 from '../assets/work/gallery/web-betheme-wordpress-theme-3.webp'
import webBethemeWordpressThemeShot4 from '../assets/work/gallery/web-betheme-wordpress-theme-4.webp'
import shopAppNetplusPharmacyShot1 from '../assets/work/gallery/shop-app-netplus-pharmacy-1.webp'
import appAmaneTaxiImg from '../assets/work/app-amane-taxi.webp'
import appAspireSchoolManagementImg from '../assets/work/app-aspire-school-management.webp'
import appLetsDoYogaImg from '../assets/work/app-lets-do-yoga.webp'
import appLumyBeautyImg from '../assets/work/app-lumy-beauty.webp'
import appScanDocaiScannerImg from '../assets/work/app-scan-docai-scanner.webp'
import appVpnClientImg from '../assets/work/app-vpn-client.webp'
import appTrakmdDoctorImg from '../assets/work/app-trakmd-doctor.webp'
import appWebOnDemandServiceImg from '../assets/work/app-web-on-demand-service.webp'
import webHoteljobsJobPortalImg from '../assets/work/web-hoteljobs-job-portal.webp'
import webAimroMarketResearchImg from '../assets/work/web-aimro-market-research.webp'
import webBethemeWordpressThemeImg from '../assets/work/web-betheme-wordpress-theme.webp'
import webLearningPoolImg from '../assets/work/web-learning-pool.webp'
import webMammolinkHealthcareImg from '../assets/work/web-mammolink-healthcare.webp'
import webJennySchatzleCoachingImg from '../assets/work/web-jenny-schatzle-coaching.webp'
import webShraderMendezAttorneyImg from '../assets/work/web-shrader-mendez-attorney.webp'
import webVizuryEngage360Img from '../assets/work/web-vizury-engage360.webp'
import shopMultivendorEcommerceImg from '../assets/work/shop-multivendor-ecommerce.webp'
import shopSkyhighPartyRentalsImg from '../assets/work/shop-skyhigh-party-rentals.webp'
import shopAppNetplusPharmacyImg from '../assets/work/shop-app-netplus-pharmacy.webp'

/* Client sites, captured from the live builds. */
import keyzarImg from '../assets/clients/keyzar.webp'
import instaladorImg from '../assets/clients/instalador.webp'
import rembrrImg from '../assets/clients/rembrr.webp'
import dawsonImg from '../assets/clients/dawson.webp'
import dentalisImg from '../assets/clients/dentalis.webp'
import elevarImg from '../assets/clients/elevar.webp'
import cdametaisImg from '../assets/clients/cdametais.webp'
import tools4tradeImg from '../assets/clients/tools4trade.webp'
import xelanImg from '../assets/clients/xelan.webp'
import breckandfoxImg from '../assets/clients/breckandfox.webp'
import garnetImg from '../assets/clients/garnet.webp'
import lumenwildImg from '../assets/clients/lumenwild.webp'
import velocitekImg from '../assets/clients/velocitek.webp'
import daphnesImg from '../assets/clients/daphnes.webp'
import consciousinkImg from '../assets/clients/consciousink.webp'
import wildfangImg from '../assets/clients/wildfang.webp'
import videomilkshakeImg from '../assets/clients/videomilkshake.webp'
import miroteaImg from '../assets/clients/mirotea.webp'
import takecareImg from '../assets/clients/takecare.webp'
import illumiveinImg from '../assets/clients/illumivein.webp'
import perriconeImg from '../assets/clients/perricone.webp'
import hisenseImg from '../assets/clients/hisense.webp'
import troubadourImg from '../assets/clients/troubadour.webp'
import velodromeImg from '../assets/clients/velodrome.webp'
import belayImg from '../assets/clients/belay.webp'
import webfxImg from '../assets/clients/webfx.webp'
import lyfeImg from '../assets/clients/lyfe.webp'
import hubspotImg from '../assets/clients/hubspot.webp'
import ironpaperImg from '../assets/clients/ironpaper.webp'

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
  'keyzar-jewelry': {
    tags: ['ecommerce', 'shopify', 'frontend', 'chatbot'],
    image: keyzarImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Chatbot', 'E-commerce'],
  },
  'instalador-portas': {
    tags: ['ecommerce', 'shopify', 'frontend', 'chatbot'],
    image: instaladorImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Chatbot', 'Responsive Web Design'],
  },
  'rembrr-app': {
    tags: ['frontend', 'api', 'chatbot'],
    image: rembrrImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'JavaScript', 'Chatbot', 'REST API', 'Responsive Web Design'],
  },
  'dawson-home-care': {
    tags: ['frontend', 'chatbot'],
    image: dawsonImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Chatbot', 'Responsive Web Design'],
  },
  'dentalis': {
    tags: ['frontend', 'api'],
    image: dentalisImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'WhatsApp Business API', 'API Integration'],
  },
  'elevar-empilhadeiras': {
    tags: ['frontend', 'api'],
    image: elevarImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'WhatsApp Business API', 'Responsive Web Design'],
  },
  'cda-metais': {
    tags: ['frontend', 'api'],
    image: cdametaisImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'WhatsApp Business API', 'Responsive Web Design'],
  },
  'tools4trade': {
    tags: ['ecommerce', 'shopify', 'frontend', 'api'],
    image: tools4tradeImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'WhatsApp Business API', 'E-commerce'],
  },
  'xelan-wheelchairs': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: xelanImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'breck-and-fox': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: breckandfoxImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'garnet-marketplace': {
    tags: ['ecommerce', 'shopify', 'frontend', 'api'],
    image: garnetImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Shopify App', 'JavaScript', 'REST API', 'E-commerce'],
  },
  'lumenwild-fine-art': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: lumenwildImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'velocitek-prostart': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: velocitekImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'daphnes-headcovers': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: daphnesImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'conscious-ink': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: consciousinkImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'wildfang': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: wildfangImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'video-milkshake': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: videomilkshakeImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'miro-tea': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: miroteaImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'take-care-shop': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: takecareImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'illumivein': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: illumiveinImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'perricone-md': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: perriconeImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'hisense-bolivia': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: hisenseImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'troubadour-goods': {
    tags: ['ecommerce', 'shopify', 'frontend'],
    image: troubadourImg,
    imageSize: [1280, 800],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
  },
  'velodrome-shop': {
    tags: ['ecommerce', 'wordpress', 'php', 'frontend'],
    image: velodromeImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce', 'Responsive Web Design'],
  },
  'belay-solutions': {
    tags: ['wordpress', 'php', 'frontend'],
    image: belayImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'PHP', 'Responsive Web Design', 'SEO', 'Modern UI Development'],
  },
  'webfx': {
    tags: ['wordpress', 'php', 'frontend'],
    image: webfxImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'PHP', 'Responsive Web Design', 'SEO', 'Modern UI Development'],
  },
  'lyfe-marketing': {
    tags: ['wordpress', 'php', 'frontend'],
    image: lyfeImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'PHP', 'Responsive Web Design', 'SEO', 'Modern UI Development'],
  },
  'hubspot': {
    tags: ['wordpress', 'php', 'frontend'],
    image: hubspotImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'PHP', 'Responsive Web Design', 'SEO', 'Modern UI Development'],
  },
  'ironpaper': {
    tags: ['wordpress', 'php', 'frontend'],
    image: ironpaperImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'PHP', 'Responsive Web Design', 'SEO', 'Modern UI Development'],
  },
  'app-amane-taxi': {
    tags: ['mobile'],
    image: appAmaneTaxiImg,
    imageSize: [1280, 800],
    tech: ['Swift', 'iOS', 'Android', 'Xamarin', 'Mobile App Design'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.amane.voyageur' },
    ],
  },
  'app-aspire-school-management': {
    gallery: [appAspireSchoolManagementShot1],
    tags: ['mobile', 'php'],
    image: appAspireSchoolManagementImg,
    imageSize: [1280, 800],
    tech: ['PHP', 'Laravel', 'Mobile App Development', 'App Design', 'Responsive Web Design'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.aspiresms' },
    ],
  },
  'app-lets-do-yoga': {
    tags: ['mobile'],
    image: appLetsDoYogaImg,
    imageSize: [1280, 800],
    tech: ['Flutter', 'Android', 'iOS', 'Mobile App Design'],
  },
  'app-lumy-beauty': {
    gallery: [appLumyBeautyShot1, appLumyBeautyShot2, appLumyBeautyShot3, appLumyBeautyShot4],
    tags: ['mobile', 'api'],
    image: appLumyBeautyImg,
    imageSize: [1280, 800],
    tech: ['Flutter', 'Firebase Firestore', 'Stripe Connect', 'Android', 'iOS'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.cristhyan.lumybeauty' },
    ],
  },
  'app-scan-docai-scanner': {
    gallery: [appScanDocaiScannerShot1, appScanDocaiScannerShot2],
    tags: ['mobile'],
    image: appScanDocaiScannerImg,
    imageSize: [1280, 800],
    tech: ['Flutter', 'Android', 'iOS', 'Figma'],
    links: [
      { label: 'Demo', url: 'https://drive.google.com/file/d/1bueJ3Zxb8aZDk6lO-IvwnEmz6LM6rfId/view' },
    ],
  },
  'app-vpn-client': {
    tags: ['mobile'],
    image: appVpnClientImg,
    imageSize: [1280, 800],
    tech: ['Android', 'OpenVPN', 'AdMob', 'Mobile App Design'],
    links: [
      { label: 'Demo', url: 'https://drive.google.com/file/d/1yCrdz23GOzRfEzvhAEkC8ljSLWXBapMX/view' },
    ],
  },
  'app-trakmd-doctor': {
    tags: ['mobile'],
    image: appTrakmdDoctorImg,
    imageSize: [1280, 800],
    tech: ['React Native', 'iOS', 'Android', 'Mobile App Design'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/trakmd-doctor-app/id1476907007' },
    ],
  },
  'app-web-on-demand-service': {
    tags: ['mobile', 'php', 'api'],
    image: appWebOnDemandServiceImg,
    imageSize: [1280, 800],
    tech: ['Flutter', 'PHP', 'Laravel', 'Android', 'iOS'],
    links: [
      { label: 'Demo', url: 'https://study.vrtechinfo.com/' },
    ],
  },
  'web-hoteljobs-job-portal': {
    tags: ['frontend', 'api'],
    image: webHoteljobsJobPortalImg,
    imageSize: [1280, 800],
    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'AJAX', 'Amazon SES'],
    links: [
      { label: 'Live site', url: 'https://www.hoteljobs.co.za' },
    ],
  },
  'web-aimro-market-research': {
    tags: ['frontend', 'api'],
    image: webAimroMarketResearchImg,
    imageSize: [1280, 800],
    tech: ['React.js', 'Node.js', 'Web Design', 'SEO', 'Responsive Web Design'],
    links: [
      { label: 'Live site', url: 'https://www.aimro.ie/' },
    ],
  },
  'web-betheme-wordpress-theme': {
    gallery: [webBethemeWordpressThemeShot1, webBethemeWordpressThemeShot2, webBethemeWordpressThemeShot3, webBethemeWordpressThemeShot4],
    tags: ['wordpress', 'php', 'frontend'],
    image: webBethemeWordpressThemeImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'BeTheme', 'PHP', 'CSS', 'Responsive Web Design'],
    links: [
      { label: 'Live site', url: 'https://beck.id/' },
    ],
  },
  'web-learning-pool': {
    tags: ['wordpress', 'php', 'frontend'],
    image: webLearningPoolImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'JavaScript', 'HTML', 'CSS', 'Web Design'],
    links: [
      { label: 'Live site', url: 'https://learningpool.com/' },
    ],
  },
  'web-mammolink-healthcare': {
    tags: ['wordpress', 'php', 'frontend'],
    image: webMammolinkHealthcareImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'Frontend Development', 'SEO', 'UX Research', 'Responsive Web Design'],
    links: [
      { label: 'Live site', url: 'https://www.mammolink.com/' },
    ],
  },
  'web-jenny-schatzle-coaching': {
    tags: ['frontend'],
    image: webJennySchatzleCoachingImg,
    imageSize: [1280, 800],
    tech: ['Kajabi', 'Web Design', 'Website Testing', 'Responsive Web Design'],
    links: [
      { label: 'Live site', url: 'https://jennyschatzle.mykajabi.com/' },
    ],
  },
  'web-shrader-mendez-attorney': {
    tags: ['wordpress', 'php', 'frontend'],
    image: webShraderMendezAttorneyImg,
    imageSize: [1280, 800],
    tech: ['WordPress', 'Frontend Development', 'SEO', 'Conversion Rate Optimization', 'Responsive Web Design'],
    links: [
      { label: 'Live site', url: 'https://www.shradermendez.com/' },
    ],
  },
  'web-vizury-engage360': {
    tags: ['php', 'frontend'],
    image: webVizuryEngage360Img,
    imageSize: [1280, 800],
    tech: ['JavaScript', 'HTML', 'Laravel', 'Web Design', 'Responsive Web Design'],
    links: [
      { label: 'Live site', url: 'https://www.vizury.com/' },
    ],
  },
  'shop-multivendor-ecommerce': {
    tags: ['ecommerce', 'mobile', 'php', 'api'],
    image: shopMultivendorEcommerceImg,
    imageSize: [1280, 800],
    tech: ['Flutter', 'PHP', 'Laravel', 'Android', 'iOS'],
    links: [
      { label: 'Web demo', url: 'https://re.vrtechinfo.com' },
    ],
  },
  'shop-skyhigh-party-rentals': {
    tags: ['ecommerce', 'php', 'frontend'],
    image: shopSkyhighPartyRentalsImg,
    imageSize: [1280, 800],
    tech: ['Magento', 'PHP', 'Node.js', 'AngularJS', 'AWS', 'PayPal'],
    links: [
      { label: 'Live site', url: 'https://skyhighpartyrentals.com' },
      { label: 'Delivery tracker', url: 'http://routestatus.net' },
    ],
  },
  'shop-app-netplus-pharmacy': {
    gallery: [shopAppNetplusPharmacyShot1],
    tags: ['ecommerce', 'mobile', 'php'],
    image: shopAppNetplusPharmacyImg,
    imageSize: [1280, 800],
    tech: ['Flutter', 'PHP', 'Android', 'iOS', 'E-commerce'],
    links: [
      { label: 'Live site', url: 'https://net-plus.in/' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.netplus.med' },
    ],
  },
  'game-web-ludo-real-money': {
    tags: ['frontend', 'api'],
    image: gameWebLudoRealMoneyImg,
    imageSize: [1280, 800],
    tech: ['JavaScript', 'Node.js', 'Web App', 'Payments', 'Responsive Web Design'],
    links: [
      { label: 'Demo', url: 'https://imtiaz.itpaybd.xyz/' },
    ],
  },
  'app-web-bharat-support': {
    tags: ['mobile', 'frontend'],
    image: appWebBharatSupportImg,
    imageSize: [1280, 800],
    tech: ['Android', 'Mobile App Development', 'Web Design', 'Responsive Web Design'],
    links: [
      { label: 'Website', url: 'https://bharatsupport.org/' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.bharatsupport.usr' },
    ],
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
  // Client sites delivered on Shopify and WordPress
  'keyzar-jewelry',
  'instalador-portas',
  'rembrr-app',
  'dawson-home-care',
  'dentalis',
  'elevar-empilhadeiras',
  'cda-metais',
  'tools4trade',
  'xelan-wheelchairs',
  'breck-and-fox',
  'garnet-marketplace',
  'lumenwild-fine-art',
  'velocitek-prostart',
  'daphnes-headcovers',
  'conscious-ink',
  'wildfang',
  'video-milkshake',
  'miro-tea',
  'take-care-shop',
  'illumivein',
  'perricone-md',
  'hisense-bolivia',
  'troubadour-goods',
  'velodrome-shop',
  'belay-solutions',
  'webfx',
  'lyfe-marketing',
  'hubspot',
  'ironpaper',
  // Apps, sites and stores delivered earlier
  'app-amane-taxi',
  'app-aspire-school-management',
  'app-lets-do-yoga',
  'app-lumy-beauty',
  'app-scan-docai-scanner',
  'app-vpn-client',
  'app-trakmd-doctor',
  'app-web-on-demand-service',
  'web-hoteljobs-job-portal',
  'web-aimro-market-research',
  'web-betheme-wordpress-theme',
  'web-learning-pool',
  'web-mammolink-healthcare',
  'web-jenny-schatzle-coaching',
  'web-shrader-mendez-attorney',
  'web-vizury-engage360',
  'shop-multivendor-ecommerce',
  'shop-skyhigh-party-rentals',
  'shop-app-netplus-pharmacy',
  'game-web-ludo-real-money',
  'app-web-bharat-support',
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
