// ==============================================================================
// FILSY TECHNICAL SEO & STRUCTURED DATA CONFIGURATION
// Canonical Production Domain: https://filsy.space
// ==============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOPageData {
  title: string;
  description: string;
  canonical: string;
  robots?: 'index, follow' | 'noindex, nofollow' | 'noindex, follow';
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SITE_URL = 'https://filsy.space';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/app-icon.png`;
export const SITE_NAME = 'Filsy';
export const MICROSOFT_STORE_URL = 'https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN';
export const GITHUB_REPO_URL = 'https://github.com/theYugrathee/filsy';

// Core Schema.org Entities (Factual & Verified against codebase)
export const SCHEMA_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Filsy',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/app-icon.png`,
    width: 512,
    height: 512,
    caption: 'Filsy Logo',
  },
  email: 'support@filsy.space',
  sameAs: [MICROSOFT_STORE_URL, GITHUB_REPO_URL],
  description:
    'Filsy develops high-performance, private, local-first file management and desktop search software for Windows.',
};

export const SCHEMA_WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Filsy',
  url: SITE_URL,
  description:
    'Private local-first Windows file search, spacebar quick look file previews, on-device OCR, and disk cleanup.',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/#search-demo?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const SCHEMA_SOFTWARE_APP = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'Filsy',
  operatingSystem: 'Windows 10 (1809+), Windows 11 (64-bit x64)',
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'File Management & Desktop Search',
  softwareVersion: '1.0.1',
  fileSize: '70MB',
  description:
    'Filsy is a fast, private, local-first file manager and desktop search tool for Windows 10 & 11. It indexes local files with ~0.02s queries, previews documents and images via Spacebar, searches text inside screenshots with on-device OCR, and identifies duplicate files with SHA-256 cryptographic hashing.',
  url: SITE_URL,
  downloadUrl: MICROSOFT_STORE_URL,
  offers: {
    '@type': 'Offer',
    price: '9.00',
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing`,
    description: 'Lifetime license on 1 active PC with all future updates included forever',
  },
  author: {
    '@id': `${SITE_URL}/#organization`,
  },
  featureList: [
    'Fast sub-second local file search across internal and external NTFS/exFAT drives',
    'Instant Spacebar Quick Look file preview for PDFs, DOCX, XLSX, images, and audio/video',
    'On-device OCR to search text inside screenshots and scanned documents',
    'Exact duplicate file detection using SHA-256 binary hash comparison',
    'Disk storage visualizer and safe temporary file cleanup reclaimer',
    'Seamless Windows File Explorer integration (Open in Explorer, copy path)',
    '100% private offline architecture with zero cloud file uploads',
  ],
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

// Master Page-Level SEO Dictionary
export const SEO_CONFIG: Record<string, SEOPageData> = {
  home: {
    title: 'Filsy — Fast Windows File Search, Spacebar Preview & OCR',
    description:
      'Find any file in seconds. Filsy is a private, fast file manager for Windows 10 & 11 with natural language search, instant Spacebar file preview, OCR screenshot search, and duplicate cleaning.',
    canonical: `${SITE_URL}/`,
    robots: 'index, follow',
    ogType: 'website',
    keywords: [
      'Windows file search',
      'desktop file search app',
      'find files on Windows',
      'file preview for Windows',
      'windows quick look',
      'OCR image search windows',
      'Windows file manager',
      'Windows Explorer alternative',
      'search files by content',
      'duplicate file finder windows',
    ],
    schema: [SCHEMA_ORGANIZATION, SCHEMA_WEBSITE, SCHEMA_SOFTWARE_APP],
  },

  features: {
    title: 'Features — Fast File Search, Spacebar Preview & OCR | Filsy',
    description:
      'Explore all Filsy features: 0.02s local file indexing, instant Spacebar Quick Look preview, on-device OCR for screenshots, exact duplicate detection, and disk cleanup for Windows.',
    canonical: `${SITE_URL}/features`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
    ],
    keywords: [
      'Filsy features',
      'Windows file indexing',
      'spacebar quick look',
      'local OCR windows',
      'duplicate file remover',
      'storage visualizer windows',
    ],
  },

  featuresFileSearch: {
    title: 'Fast Windows File Search & Instant Local Indexing | Filsy',
    description:
      'Search millions of files in 0.02s on Windows 10 & 11. Search by filename, content, extension, date, and file size using natural language queries without slow Explorer lag.',
    canonical: `${SITE_URL}/features/file-search`,
    robots: 'index, follow',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'File Search', url: '/features/file-search' },
    ],
    keywords: [
      'Windows file search',
      'desktop file search app',
      'fast local file search',
      'search files by content windows',
      'instant file indexing windows 11',
      'find files on windows fast',
    ],
  },

  featuresFilePreview: {
    title: 'Instant Spacebar File Preview for Windows (Quick Look) | Filsy',
    description:
      'Preview PDFs, Word documents, Excel sheets, images, audio, and videos instantly by tapping Spacebar. No need to launch heavy desktop apps just to inspect a file.',
    canonical: `${SITE_URL}/features/file-preview`,
    robots: 'index, follow',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'File Preview', url: '/features/file-preview' },
    ],
    keywords: [
      'file preview for Windows',
      'Windows quick look alternative',
      'preview files spacebar windows',
      'macOS quick look on windows',
      'preview pdf word excel instantly',
    ],
  },

  featuresOcrSearch: {
    title: 'On-Device OCR Image & Screenshot Text Search | Filsy',
    description:
      'Find screenshots, receipts, and photos by the words printed inside them. Filsy runs native on-device Windows OCR with 100% privacy and zero cloud uploads.',
    canonical: `${SITE_URL}/features/ocr-search`,
    robots: 'index, follow',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'OCR Search', url: '/features/ocr-search' },
    ],
    keywords: [
      'OCR image search windows',
      'search text inside screenshots',
      'find screenshots by text windows',
      'local OCR file search',
      'offline OCR windows 10 11',
    ],
  },

  featuresFileOrganization: {
    title: 'Duplicate File Hunter & Windows Storage Cleanup | Filsy',
    description:
      'Reclaim gigabytes of wasted disk space. Detect exact byte-for-byte duplicate files with SHA-256 cryptographic hashes and purge forgotten caches safely.',
    canonical: `${SITE_URL}/features/file-organization`,
    robots: 'index, follow',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'File Organization', url: '/features/file-organization' },
    ],
    keywords: [
      'windows file organizer',
      'duplicate file finder windows',
      'SHA-256 duplicate cleaner',
      'free up disk space windows 11',
      'clean temp files windows',
    ],
  },

  howItWorks: {
    title: 'How Filsy Works — Architecture & Local-First Indexing | Filsy',
    description:
      'Learn how Filsy indexes drives at native speeds, runs local OCR, and provides instant file search without sending your documents or personal data to cloud servers.',
    canonical: `${SITE_URL}/how-it-works`,
    robots: 'index, follow',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'How It Works', url: '/how-it-works' },
    ],
    keywords: [
      'how filsy works',
      'local-first file indexing',
      'windows indexing engine',
      'private desktop search architecture',
    ],
  },

  explorerVsFilsy: {
    title: 'Windows File Explorer vs Filsy — In-Depth Comparison',
    description:
      'Compare Windows File Explorer and Filsy side-by-side. See how Filsy adds 0.02s search, Spacebar document previews, on-device OCR, and duplicate detection.',
    canonical: `${SITE_URL}/explorer-vs-filsy`,
    robots: 'index, follow',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Explorer vs Filsy', url: '/explorer-vs-filsy' },
    ],
    keywords: [
      'Windows Explorer alternative',
      'File Explorer comparison',
      'Filsy vs Windows Explorer',
      'faster than windows search',
    ],
  },

  pricing: {
    title: 'Pricing — Lifetime License for Windows | Filsy',
    description:
      'Buy Filsy once, keep it forever. First 99 users special: $9 lifetime license (regular $19). No subscriptions, no recurring fees, all future updates included.',
    canonical: `${SITE_URL}/pricing`,
    robots: 'index, follow',
    ogType: 'product',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Pricing', url: '/pricing' },
    ],
    keywords: [
      'Filsy pricing',
      'Filsy license',
      'Windows file search lifetime license',
      'one-time purchase file manager',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Filsy Lifetime License',
      image: `${SITE_URL}/app-icon.png`,
      description:
        'One-time purchase lifetime license for Filsy on 1 active Windows PC with free lifetime updates and offline support.',
      brand: { '@type': 'Brand', name: 'Filsy' },
      offers: {
        '@type': 'Offer',
        price: '9.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
      },
    },
  },

  download: {
    title: 'Download Filsy for Windows 10 & 11 (Microsoft Store) | Filsy',
    description:
      'Download and install Filsy directly from the official Microsoft Store for Windows 10 & 11 (64-bit). One-click verified installation with automatic updates.',
    canonical: `${SITE_URL}/download`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Download', url: '/download' },
    ],
    keywords: [
      'download Filsy',
      'Filsy Microsoft Store',
      'Filsy Windows 11 download',
      'Filsy Windows 10 download',
      'install Filsy desktop app',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions (FAQ) | Filsy',
    description:
      'Find answers to common questions about Filsy: privacy, offline capabilities, file formats supported, Microsoft Store installation, and license transfer.',
    canonical: `${SITE_URL}/faq`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ],
    keywords: ['Filsy FAQ', 'Filsy questions', 'Filsy offline support', 'transfer Filsy license'],
  },

  about: {
    title: 'About Filsy — Mission, Privacy & Local-First Philosophy',
    description:
      'Learn about Filsy: built to give Windows users a faster, cleaner, and completely private file navigation experience where your personal data never leaves your computer.',
    canonical: `${SITE_URL}/about`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
    keywords: ['about Filsy', 'local-first Windows software', 'Filsy team', 'private file manager'],
  },

  changelog: {
    title: 'Changelog & Release Notes | Filsy for Windows',
    description:
      'View all updates, new features, performance improvements, and fixes for Filsy on Windows 10 & 11, including official Microsoft Store releases.',
    canonical: `${SITE_URL}/changelog`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Changelog', url: '/changelog' },
    ],
  },

  support: {
    title: 'Customer Support & Help Desk | Filsy',
    description:
      'Get help with Filsy. Reach our team at support@filsy.space for license retrieval, activation questions, bug reports, and Windows feature requests.',
    canonical: `${SITE_URL}/support`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Support', url: '/support' },
    ],
  },

  privacy: {
    title: 'Privacy Policy — 100% On-Device Local Processing | Filsy',
    description:
      'Filsy is built on a strict local-first privacy architecture. Your indexed files, search queries, documents, and screenshots are processed locally and never uploaded to any cloud server.',
    canonical: `${SITE_URL}/privacy`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' },
    ],
  },

  terms: {
    title: 'Terms of Service & License Agreement | Filsy',
    description:
      'Review the terms of service and software license agreement for Filsy. One-time lifetime licenses, single active PC transfer policy, and usage conditions.',
    canonical: `${SITE_URL}/terms`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Terms of Service', url: '/terms' },
    ],
  },

  license: {
    title: 'License Activation & Device Transfer Guide | Filsy',
    description:
      'Step-by-step instructions for activating your Filsy lifetime license key, moving your license to a new PC, and managing device bindings.',
    canonical: `${SITE_URL}/license`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'License Help', url: '/license' },
    ],
  },

  freeLicense: {
    title: 'Creator Program — Earn a Free Lifetime License | Filsy',
    description:
      'Make a video review or tutorial of Filsy on YouTube, TikTok, X, or Instagram. Reach 5,000 views and receive a free genuine lifetime license key.',
    canonical: `${SITE_URL}/free-license`,
    robots: 'index, follow',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Free License', url: '/free-license' },
    ],
  },

  // Private / Internal Utility Routes (Must be NOINDEX)
  findKey: {
    title: 'Retrieve Your License Key | Filsy',
    description: 'Find and recover your Filsy license key using the email address from your purchase.',
    canonical: `${SITE_URL}/find-key`,
    robots: 'noindex, nofollow',
  },

  manageLicense: {
    title: 'Manage Your License & Devices | Filsy',
    description: 'View active devices and manage your Filsy software license key.',
    canonical: `${SITE_URL}/manage-license`,
    robots: 'noindex, nofollow',
  },

  paymentSuccess: {
    title: 'Payment Confirmed — Welcome to Filsy',
    description: 'Your payment was successful. Copy your new Filsy lifetime license key and activate the app.',
    canonical: `${SITE_URL}/payment/success`,
    robots: 'noindex, nofollow',
  },

  paymentCancelled: {
    title: 'Checkout Cancelled | Filsy',
    description: 'Your checkout session was cancelled. No charges were made to your card.',
    canonical: `${SITE_URL}/payment/cancelled`,
    robots: 'noindex, nofollow',
  },

  paymentFailed: {
    title: 'Payment Not Completed | Filsy',
    description: 'Your payment attempt was interrupted or declined. You have not been charged.',
    canonical: `${SITE_URL}/payment/failed`,
    robots: 'noindex, nofollow',
  },

  notFound: {
    title: 'Page Not Found (404) | Filsy',
    description: 'The page you are looking for does not exist or has been moved.',
    canonical: `${SITE_URL}/404`,
    robots: 'noindex, nofollow',
  },
};

