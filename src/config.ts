// ==========================================================================
// FILSY APPLICATION CONFIGURATION — HIGH-CRAFT REDESIGN
// ==========================================================================

export interface AppConfig {
  productName: string;
  headline: string;
  subtext: string;
  version: string;
  releaseDate: string;
  downloadUrl: string;
  githubUrl: string;
  dodoPaymentLink: string;
  supabaseFunctionsUrl: string;
  filsyAppToken: string;
  /**
   * LAUNCH SWITCH TOGGLE:
   * Set `isPreLaunch: true` for pre-launch mode ($11 early price, waitlist, early user messaging).
   * Set `isPreLaunch: false` for official launch mode ($19 regular price, live store download).
   */
  isPreLaunch: boolean;
  pricing: {
    usdPrice: number;
    inrPrice: number;
    displayPrice: string;
    originalUsdPrice: number;
    launchPrice: string;
    model: string;
    terms: string;
    earlyUsersNote: string;
  };
  microsoftStore: {
    status: 'coming_soon' | 'available';
    storeUrl: string;
    label: string;
  };
  supportEmail: string;
  windowsRequirements: {
    os: string;
    architecture: string;
    ram: string;
    diskSpace: string;
    format: string;
  };
}

export const APP_CONFIG: AppConfig = {
  productName: "Filsy",
  headline: "Every file on your PC. One search away.",
  subtext: "Filsy is a private, local-first file manager for Windows. Natural-language search, search inside screenshots and PDFs, Explorer-faithful folders and safe cleanup — nothing ever leaves your PC.",
  version: "1.0.0",
  releaseDate: "2026",
  downloadUrl:
    import.meta.env.VITE_DOWNLOAD_URL ||
    "https://github.com/theYugrathee/filsy/releases/latest/download/Filsy.zip",
  githubUrl: "https://github.com/theYugrathee/filsy",
  dodoPaymentLink:
    import.meta.env.VITE_DODO_PAYMENT_LINK ||
    "https://test.checkout.dodopayments.com/buy/pdt_0Nqh7QW2IN8YpGoR08zQW?quantity=1&redirect_url=https://filsy.space",
  supabaseFunctionsUrl:
    import.meta.env.VITE_SUPABASE_FUNCTIONS_URL ||
    "https://ofvyincijdrefgxbupwy.supabase.co/functions/v1",
  filsyAppToken:
    import.meta.env.VITE_FILSY_APP_TOKEN || "5cef6c413bebc63f819280c528b3e74f",
  // PRE-LAUNCH TOGGLE: Set to false once the app launches on the Microsoft Store
  isPreLaunch: true,
  pricing: {
    usdPrice: 11,
    inrPrice: 899,
    originalUsdPrice: 19,
    displayPrice: "$11",
    launchPrice: "$19",
    model: "Pre-Launch Early Supporter (Lifetime License)",
    terms: "Pre-launch early access license for $11 ($19 regular launch price). Instant digital license delivery. 1 active PC at a time (deactivate & move freely). All future updates included forever.",
    earlyUsersNote: "Purchase the early license key only for early users before the official Microsoft Store release.",
  },
  microsoftStore: {
    status: "coming_soon",
    storeUrl: "",
    label: "Coming Soon to Microsoft Store",
  },
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "support@filsy.app",
  windowsRequirements: {
    os: "Windows 10 (1809+) / Windows 11",
    architecture: "64-bit (x64)",
    ram: "4 GB RAM minimum",
    diskSpace: "~70 MB",
    format: "Coming to Microsoft Store. Get your early lifetime license key today.",
  },
};

export const COMPARISON_DATA = [
  {
    feature: '"that PDF from WhatsApp last month"',
    explorer: "✗",
    filsy: "✓",
    highlight: true,
  },
  {
    feature: "All images from every folder, grouped by day",
    explorer: "✗",
    filsy: "✓",
    highlight: true,
  },
  {
    feature: "Search text inside screenshots (OCR)",
    explorer: "✗",
    filsy: "✓",
    highlight: true,
  },
  {
    feature: "Search text inside PDFs & Office files",
    explorer: "✗",
    filsy: "✓",
    highlight: true,
  },
  {
    feature: "Remembers where files were downloaded from",
    explorer: "✗",
    filsy: "✓",
    highlight: true,
  },
  {
    feature: "Instant startup from a persistent local index",
    explorer: "✗",
    filsy: "✓",
    highlight: true,
  },
  {
    feature: "Real folder structure you can trust",
    explorer: "✓",
    filsy: "✓",
    highlight: false,
  },
  {
    feature: "Sends your data anywhere",
    explorer: "Telemetry",
    filsy: "Never (100% offline)",
    highlight: true,
  },
];
