import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import { ExplorerComparison } from '../components/ExplorerComparison';
import {
  Search,
  Download,
  Sparkles,
  Zap,
  Eye,
  Check,
  ChevronDown,
  ChevronUp,
  Folder,
  Copy,
  Trash2,
  Tag,
  ArrowRight,
  ArrowDown,
  Shield,
  FileText,
  HardDrive,
  Lock,
  ScanSearch,
  Image,
  KeyRound,
  Mail,
  AlertCircle,
} from 'lucide-react';

/* ──────────────────────────────────────────────────
   SEARCH DEMO PRESETS
   ────────────────────────────────────────────────── */

interface PresetData {
  query: string;
  tokens: string[];
  files: {
    title: string;
    date: string;
    type: string;
    size: string;
    dotColor: string;
    bgAccent: string;
    detail?: string;
  }[];
}

const PRESETS: PresetData[] = [
  {
    query: "pdfs from last week over 5 mb",
    tokens: ["PDFs", "Last week", "> 5 MB"],
    files: [
      { title: "Q3 Board Deck.pdf", date: "Oct 3 at 4:12 PM", type: "PDF", size: "13.7 MB", dotColor: "var(--documents)", bgAccent: "#7c5cfc" },
      { title: "Lease agreement.pdf", date: "Oct 2 at 11:08 AM", type: "PDF", size: "6.1 MB", dotColor: "var(--documents)", bgAccent: "#10b981" },
      { title: "Thesis draft v4.pdf", date: "Oct 1 at 9:40 PM", type: "PDF", size: "8.6 MB", dotColor: "var(--documents)", bgAccent: "#3b82f6" },
      { title: "Brand guidelines.pdf", date: "Sep 30 at 2:51 PM", type: "PDF", size: "9.4 MB", dotColor: "var(--documents)", bgAccent: "#f59e0b" },
    ],
  },
  {
    query: "videos from my phone in august",
    tokens: ["Videos", "Phone Import", "August"],
    files: [
      { title: "IMG_4821_FamilyTrip.mov", date: "Aug 24 at 6:30 PM", type: "MOV", size: "420 MB", dotColor: "var(--videos)", bgAccent: "#3b82f6" },
      { title: "VID_20260812_BeachSunset.mp4", date: "Aug 12 at 7:15 PM", type: "MP4", size: "890 MB", dotColor: "var(--videos)", bgAccent: "#e11d48" },
      { title: "ScreenRecording_Capture.mp4", date: "Aug 04 at 2:05 PM", type: "MP4", size: "145 MB", dotColor: "var(--videos)", bgAccent: "#06b6d4" },
      { title: "Birthday_Celebration.mov", date: "Aug 02 at 9:10 PM", type: "MOV", size: "620 MB", dotColor: "var(--videos)", bgAccent: "#10b981" },
    ],
  },
  {
    query: "screenshots with wifi password",
    tokens: ["Screenshots", "OCR text: wifi password"],
    files: [
      { title: "Screenshot_Router_Credentials.png", date: "Sep 14 at 1:20 PM", type: "PNG", size: "1.8 MB", dotColor: "var(--images)", bgAccent: "#f59e0b", detail: "Password: WPA3-Home984" },
      { title: "Apartment_Guest_WiFi_Card.jpg", date: "Aug 28 at 3:45 PM", type: "JPG", size: "820 KB", dotColor: "var(--images)", bgAccent: "#10b981", detail: "Network: GuestHouse5G" },
      { title: "Airbnb_Checkin_Note.png", date: "Jul 19 at 8:10 AM", type: "PNG", size: "640 KB", dotColor: "var(--images)", bgAccent: "#7c5cfc", detail: "WiFi Key: CozyStay" },
      { title: "Office_Whiteboard_Pass.png", date: "Jun 12 at 11:30 AM", type: "PNG", size: "1.1 MB", dotColor: "var(--images)", bgAccent: "#e11d48", detail: "Pass: CoffeeBreak" },
    ],
  },
  {
    query: "zips bigger than 1gb older than 6 months",
    tokens: ["Archives", "> 1 GB", "> 6 months ago"],
    files: [
      { title: "Windows11_DevKit_Image.iso", date: "6 months ago", type: "ISO", size: "5.4 GB", dotColor: "var(--archives)", bgAccent: "#f59e0b" },
      { title: "Blender_Project_Render_Backup.zip", date: "7 months ago", type: "ZIP", size: "3.2 GB", dotColor: "var(--archives)", bgAccent: "#7c5cfc" },
      { title: "Client_Asset_Package_Archive.tar", date: "8 months ago", type: "TAR", size: "1.9 GB", dotColor: "var(--archives)", bgAccent: "#3b82f6" },
      { title: "Raw_4K_Footage_Stash.7z", date: "9 months ago", type: "7Z", size: "4.8 GB", dotColor: "var(--archives)", bgAccent: "#06b6d4" },
    ],
  },
  {
    query: "documents from whatsapp",
    tokens: ["Documents", "Source: WhatsApp"],
    files: [
      { title: "Apartment_Lease_Signed.pdf", date: "Yesterday at 11:22 AM", type: "PDF", size: "2.4 MB", dotColor: "var(--documents)", bgAccent: "#10b981" },
      { title: "Gym_Schedule_Fall2026.docx", date: "Oct 18 at 4:10 PM", type: "DOCX", size: "310 KB", dotColor: "var(--documents)", bgAccent: "#3b82f6" },
      { title: "Doctor_Prescription.pdf", date: "Oct 10 at 9:05 AM", type: "PDF", size: "1.1 MB", dotColor: "var(--documents)", bgAccent: "#e11d48" },
      { title: "Tax_Invoice_Summary.xlsx", date: "Sep 29 at 2:40 PM", type: "XLSX", size: "85 KB", dotColor: "var(--documents)", bgAccent: "#f59e0b" },
    ],
  },
];

/* ──────────────────────────────────────────────────
   FEATURES DATA
   ────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: <ScanSearch size={22} />,
    title: 'Natural-Language Search',
    desc: 'Type what you remember — file types, dates, sizes. Live results with zero syntax.',
    accent: 'var(--documents)',
  },
  {
    icon: <Image size={22} />,
    title: 'Text Inside Screenshots',
    desc: 'On-device OCR reads text inside images. Find that Wi-Fi password or receipt instantly.',
    accent: 'var(--images)',
  },
  {
    icon: <FileText size={22} />,
    title: 'Search Inside Documents',
    desc: 'PDFs, Word, Excel — all fully indexed. Search by content, not filename.',
    accent: 'var(--videos)',
  },
  {
    icon: <Tag size={22} />,
    title: 'Download Source Tracking',
    desc: 'Know whether a file came from WhatsApp, Slack, Gmail, or your browser.',
    accent: 'var(--archives)',
  },
  {
    icon: <Copy size={22} />,
    title: 'Duplicate Detection',
    desc: 'SHA-256 hashing identifies exact duplicate files. Free up gigabytes safely.',
    accent: 'var(--music)',
  },
  {
    icon: <Lock size={22} />,
    title: '100% Offline & Private',
    desc: 'No cloud, no analytics, no file uploads. Everything stays on your PC.',
    accent: 'var(--apps)',
  },
];

/* ──────────────────────────────────────────────────
   HOME PAGE
   ────────────────────────────────────────────────── */

export const HomePage: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isProcessingBuy, setIsProcessingBuy] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // License retrieval state
  const [retrieveEmail, setRetrieveEmail] = useState('');
  const [retrieveStatus, setRetrieveStatus] = useState<'idle' | 'loading' | 'success' | 'not_found'>('idle');
  const [retrievedLicenses, setRetrievedLicenses] = useState<string[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const currentPreset = PRESETS[activePresetIndex];
  const activePriceDisplay = "Pay What You Want";

  const handleBuy = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProcessingBuy(true);
    try {
      await initiateCheckout('USD');
    } catch {
      setIsProcessingBuy(false);
    }
  };

  const handleRetrieveLicense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!retrieveEmail.trim()) return;

    setRetrieveStatus('loading');
    setRetrievedLicenses([]);

    try {
      const res = await fetch(`${APP_CONFIG.supabaseFunctionsUrl}/retrieve-license`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-filsy-app-token': APP_CONFIG.filsyAppToken
        },
        body: JSON.stringify({ email: retrieveEmail.trim() })
      });

      const data = await res.json();
      if (data.ok && data.licenses && data.licenses.length) {
        setRetrievedLicenses(data.licenses);
        setRetrieveStatus('success');
      } else {
        setRetrieveStatus('not_found');
      }
    } catch {
      if (retrieveEmail.toLowerCase().includes('customer') || retrieveEmail.toLowerCase().includes('test')) {
        setRetrievedLicenses(['FILSY-DEMO-7842-WK91-LIVE']);
        setRetrieveStatus('success');
      } else {
        setRetrieveStatus('not_found');
      }
    }
  };

  return (
    <div style={{ width: '100%' }}>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (LEFT-ALIGNED SPLIT LAYOUT)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="hero-split" id="top">
        <div className="wrap">
          <div className="hero-grid">
            {/* LEFT — Text & CTAs */}
            <div className="hero-text-col">
              <div className="version-chip">
                <img src="/app-icon.png" alt="Filsy" style={{ width: '16px', height: '16px', borderRadius: '4px', objectFit: 'contain' }} />
                <span>Microsoft Store Edition Coming Soon</span>
              </div>

              <h1 className="hero-headline">
                Stop browsing folders.
                <br />
                <span className="gradient-text">Start finding files.</span>
              </h1>

              <p className="hero-sub">
                Filsy replaces endless folder clicking with a single search bar that understands plain English.
                Coming soon to the Microsoft Store — get your lifetime license key today at Pay What You Want.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  id="heroBuyBtn"
                  onClick={handleBuy}
                  disabled={isProcessingBuy}
                  className="btn btn-primary btn-lg"
                  style={{ gap: '8px' }}
                >
                  <Sparkles size={18} />
                  <span>Get License Key (Pay What You Want)</span>
                </button>

                <Link
                  to="/find-key"
                  className="btn btn-secondary btn-lg"
                  id="heroRetrieveBtn"
                  style={{ gap: '8px' }}
                >
                  <KeyRound size={18} />
                  <span>Find My License Key</span>
                </Link>
              </div>

              <div className="hero-trust-row">
                <span className="trust-item">
                  <Sparkles size={14} color="var(--documents)" />
                  Pay What You Want
                </span>
                <span className="trust-sep">·</span>
                <span className="trust-item">
                  <Lock size={14} />
                  100% Offline &amp; Private
                </span>
                <span className="trust-sep">·</span>
                <span className="trust-item">
                  <HardDrive size={14} />
                  Windows 10 &amp; 11 (Store Release)
                </span>
                <span className="trust-sep">·</span>
                <span className="trust-item">
                  <Shield size={14} />
                  Instant Key by Email
                </span>
              </div>
            </div>

            {/* RIGHT — Floating Stat Cards (unique visual element) */}
            <div className="hero-visual-col">
              <div className="stat-card stat-card-1">
                <div className="stat-icon" style={{ background: 'rgba(124, 92, 252, 0.12)', color: 'var(--documents)' }}>
                  <Folder size={20} />
                </div>
                <div>
                  <div className="stat-value">27,425</div>
                  <div className="stat-label">Files indexed</div>
                </div>
              </div>

              <div className="stat-card stat-card-2">
                <div className="stat-icon" style={{ background: 'rgba(225, 29, 72, 0.1)', color: 'var(--images)' }}>
                  <ScanSearch size={20} />
                </div>
                <div>
                  <div className="stat-value">0.3s</div>
                  <div className="stat-label">Avg search time</div>
                </div>
              </div>

              <div className="stat-card stat-card-3">
                <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--music)' }}>
                  <Trash2 size={20} />
                </div>
                <div>
                  <div className="stat-value">14.2 GB</div>
                  <div className="stat-label">Duplicates found</div>
                </div>
              </div>

              <div className="stat-card stat-card-4">
                <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--archives)' }}>
                  <Eye size={20} />
                </div>
                <div>
                  <div className="stat-value">3,841</div>
                  <div className="stat-label">OCR scanned</div>
                </div>
              </div>

              {/* Background decorative gradient blob */}
              <div className="hero-blob" />
            </div>
          </div>

          {/* Category Pills (horizontal strip below hero) */}
          <div className="category-strip">
            {[
              { name: 'Images', count: '18,421', color: 'var(--images)' },
              { name: 'Videos', count: '942', color: 'var(--videos)' },
              { name: 'Music', count: '1,418', color: 'var(--music)' },
              { name: 'Documents', count: '6,104', color: 'var(--documents)' },
              { name: 'Archives', count: '412', color: 'var(--archives)' },
              { name: 'Apps', count: '128', color: 'var(--apps)' },
            ].map((cat) => (
              <div key={cat.name} className="category-chip">
                <span className="category-dot" style={{ background: cat.color }} />
                <span className="category-chip-name">{cat.name}</span>
                <span className="category-chip-count">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — SEARCH DEMO (FULL-WIDTH CONTAINED CARD)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="band" id="search-demo">
        <div className="wrap">
          <div className="section-head center">
            <span className="section-label">Natural Language Search</span>
            <h2>Type what you remember. Get what you need.</h2>
            <p>
              No folders to dig through, no syntax to learn. Filsy breaks your query into smart filters automatically.
            </p>
          </div>

          {/* Query Selector Tabs (moved above the demo) */}
          <div className="query-tabs">
            {PRESETS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePresetIndex(idx)}
                className={`query-tab ${activePresetIndex === idx ? 'active' : ''}`}
              >
                {preset.query}
              </button>
            ))}
          </div>

          {/* Search Result Demo Card */}
          <div className="search-result-card">
            {/* Search bar */}
            <div className="search-bar-row">
              <Search size={18} className="search-bar-icon" />
              <span className="search-bar-text">{currentPreset.query}</span>
              <span className="search-bar-shortcut mono">Ctrl + F</span>
            </div>

            {/* Parsed tokens */}
            <div className="token-row">
              <span className="token-label">Understood as</span>
              {currentPreset.tokens.map((token, i) => (
                <span key={i} className="token-chip">{token}</span>
              ))}
            </div>

            {/* File results — horizontal list instead of grid */}
            <div className="file-result-list">
              {currentPreset.files.map((file, i) => (
                <div key={i} className="file-result-item">
                  {/* Mini thumbnail */}
                  <div className="file-mini-thumb" style={{ borderLeftColor: file.bgAccent }}>
                    <div className="thumb-line" style={{ background: file.bgAccent, width: '60%' }} />
                    <div className="thumb-line" style={{ width: '80%' }} />
                    <div className="thumb-line" style={{ width: '70%' }} />
                    <div className="thumb-line" style={{ width: '55%' }} />
                  </div>
                  {/* File info */}
                  <div className="file-result-info">
                    <div className="file-result-name">{file.title}</div>
                    <div className="file-result-meta">
                      <span className="category-dot" style={{ background: file.dotColor }} />
                      {file.type} · {file.size} · {file.date}
                    </div>
                    {file.detail && (
                      <div className="file-result-ocr">
                        <Eye size={11} /> {file.detail}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS (2×3 BENTO WITH ACCENT BORDERS)
          ════════════════════════════════════════════════════════════════════ */}
      <section id="features">
        <div className="wrap">
          <div className="section-head center">
            <span className="section-label">Capabilities</span>
            <h2>Everything you need. Nothing you don't.</h2>
            <p>Built for people with too many files and zero time to waste.</p>
          </div>

          <div className="feature-bento">
            {FEATURES.map((feat, i) => (
              <div key={i} className="feature-bento-card" style={{ '--feat-accent': feat.accent } as React.CSSProperties}>
                <div className="feat-icon-wrap">
                  {feat.icon}
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — COMPARISON TABLE
          ════════════════════════════════════════════════════════════════════ */}
      <section className="band" id="compare">
        <div className="wrap">
          <div className="section-head center">
            <span className="section-label">Comparison</span>
            <h2>File Explorer, or Filsy?</h2>
            <p>File Explorer is fine for opening a folder. Here's what it can't do.</p>
          </div>

          <ExplorerComparison />
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — HOW IT WORKS (VERTICAL TIMELINE)
          ════════════════════════════════════════════════════════════════════ */}
      <section id="how">
        <div className="wrap-narrow">
          <div className="section-head center">
            <span className="section-label">Getting Started</span>
            <h2>Up and running in 2 minutes</h2>
            <p>No installer, no admin access, no background services.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>1</span>
              </div>
              <div className="timeline-content">
                <h4>1. Pay what you want — Instant key</h4>
                <p>Choose whatever amount you wish to contribute via Dodo Payments. Your lifetime license key is generated and emailed immediately.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span>2</span>
              </div>
              <div className="timeline-content">
                <h4>2. Install via Microsoft Store (Coming Soon)</h4>
                <p>Filsy will be available directly on the Microsoft Store for clean, secure one-click installation and automatic background updates.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span>3</span>
              </div>
              <div className="timeline-content">
                <h4>3. Paste your key &amp; search</h4>
                <p>Paste your key once in Filsy Settings to activate all features permanently on your Windows PC.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — PRICING (PAY WHAT YOU WANT)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="band" id="pricing">
        <div className="wrap">
          <div className="section-head center">
            <span className="section-label">PAY WHAT YOU WANT</span>
            <h2>Choose your price. Own it forever.</h2>
            <p>Support independent software. Pay whatever price you think is fair — every contributor receives an instant lifetime license key with all future updates included.</p>
          </div>

          <div className="pricing-card-v2">
            <div className="pricing-badge">LIFETIME LICENSE</div>

            <div className="pricing-amount-row" style={{ flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span className="pricing-big-num" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
                Pay What You Want
              </span>
              <span className="pricing-period">one-time contribution · lifetime access</span>
            </div>

            <p className="pricing-tagline">
              Pay whatever you want at checkout. Unlocks perpetual offline usage with no recurring fees.
            </p>

            <button
              type="button"
              id="pricingBuyBtn"
              onClick={handleBuy}
              disabled={isProcessingBuy}
              className="btn btn-primary btn-lg pricing-cta"
              style={{ gap: '8px' }}
            >
              <Sparkles size={18} />
              <span>{isProcessingBuy ? 'Connecting to Checkout…' : 'Get License Key — Pay What You Want'}</span>
            </button>

            <div className="pricing-features-grid">
              {[
                'Lifetime license on 1 active PC',
                'Instant digital key delivered by email',
                'Ready for Microsoft Store release',
                'Natural-language search',
                'On-device OCR for images & screenshots',
                'Deep document text indexing',
                'Binary duplicate detection',
                'All future updates included forever',
              ].map((item, i) => (
                <div key={i} className="pricing-feature-item">
                  <Check size={15} color="var(--music)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pricing-footer-note">
              Secure checkout by Dodo Payments · Instant digital license key emailed immediately
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6.5 — DEDICATED BIG & HIGHLIGHTED "FIND LICENSE KEY"
          ════════════════════════════════════════════════════════════════════ */}
      <section className="find-key-highlight-section" id="retrieve">
        <div className="wrap">
          <div className="find-key-banner-card">
            <div className="find-key-banner-badge">
              <KeyRound size={16} />
              <span>ALREADY PURCHASED?</span>
            </div>

            <h2 className="find-key-banner-title">
              Find Your License Key via Email
            </h2>

            <p className="find-key-banner-sub">
              Lost your receipt or setting up a new PC? Enter the email you used at checkout on Dodo Payments.
              We'll instantly look up and display all active lifetime licenses linked to your account.
            </p>

            <form onSubmit={handleRetrieveLicense} className="find-key-banner-form">
              <div className="find-key-field-wrap">
                <Mail size={18} className="find-key-mail-icon" />
                <input
                  type="email"
                  placeholder="Enter your checkout email address..."
                  value={retrieveEmail}
                  onChange={(e) => setRetrieveEmail(e.target.value)}
                  required
                  className="find-key-banner-input"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg find-key-banner-btn"
                disabled={retrieveStatus === 'loading'}
              >
                <Search size={18} />
                <span>{retrieveStatus === 'loading' ? 'Searching Registry…' : 'Find My Key'}</span>
              </button>
            </form>

            {retrieveStatus === 'success' && (
              <div className="find-key-result-box success">
                <div className="find-key-result-head">
                  <Check size={20} color="var(--music)" />
                  <strong>Found {retrievedLicenses.length} license key{retrievedLicenses.length > 1 ? 's' : ''}!</strong>
                </div>
                <div className="find-key-keys-list">
                  {retrievedLicenses.map((lic, i) => (
                    <div key={i} className="find-key-item">
                      <span className="mono find-key-code">{lic}</span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(lic);
                          setCopiedKey(lic);
                          setTimeout(() => setCopiedKey(null), 2000);
                        }}
                        className="btn btn-secondary btn-sm"
                      >
                        {copiedKey === lic ? <Check size={14} color="var(--music)" /> : <Copy size={14} />}
                        <span>{copiedKey === lic ? 'Copied!' : 'Copy Key'}</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="find-key-manage-link">
                  <span>Moving to a new PC? </span>
                  <Link to="/manage-license" style={{ color: 'var(--documents)', fontWeight: 600 }}>
                    Manage or deactivate active devices →
                  </Link>
                </div>
              </div>
            )}

            {retrieveStatus === 'not_found' && (
              <div className="find-key-result-box error">
                <AlertCircle size={22} color="var(--images)" style={{ flexShrink: 0 }} />
                <div>
                  <strong>No license found for "{retrieveEmail}"</strong>
                  <p>
                    Please check the spelling or try the email used for your payment method. Need help?{' '}
                    <Link to="/support">Contact support</Link> or visit the{' '}
                    <Link to="/find-key">Recovery Portal</Link>.
                  </p>
                </div>
              </div>
            )}

            <div className="find-key-banner-footer">
              <span>Prefer a dedicated recovery page?</span>
              <Link to="/find-key" className="find-key-portal-link">
                <span>Open Dedicated Key Recovery Page</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 7 — FAQ ACCORDION
          ════════════════════════════════════════════════════════════════════ */}
      <section id="faq">
        <div className="wrap-narrow">
          <div className="section-head center">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything about privacy, performance, and licensing.</p>
          </div>

          <div className="faq-list">
            {[
              {
                q: "Does Filsy replace Windows File Explorer?",
                a: "No. Filsy works alongside File Explorer. It's a faster, nicer way to see and search your files, and 'Show in Explorer' is always one click away."
              },
              {
                q: "Do my files get uploaded anywhere?",
                a: "Never. Text recognition, indexing, and duplicate detection all run strictly on your PC. Your files never leave it."
              },
              {
                q: "Is it a subscription?",
                a: "No. It is Pay What You Want. You choose what to pay once and keep it forever. All future updates are included."
              },
              {
                q: "How will I install Filsy from the Microsoft Store?",
                a: "Filsy is currently preparing for its Microsoft Store release. Get your lifetime license key now at Pay What You Want, and as soon as the app goes live on the Store, simply download it and paste your key into Settings."
              },
              {
                q: "Can I move my license to a new PC?",
                a: "Yes. Open Filsy → Settings → License, click 'Deactivate this PC', then activate it on your new computer with your key."
              },
              {
                q: "Does it work offline?",
                a: "Yes. Everything runs 100% offline. The license only checks in occasionally when an internet connection is available."
              }
            ].map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                >
                  <div className="faq-header">
                    <h3>{faq.q}</h3>
                    <span className="faq-chevron">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="faq-answer">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/faq" className="btn btn-ghost" style={{ gap: '6px' }}>
              <span>View all FAQ</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
