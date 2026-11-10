import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import {
  Eye,
  Copy,
  HardDrive,
  Trash2,
  Folder,
  ScanSearch,
  FileText,
  Download,
  Tag,
  Lock,
  Shield,
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface DetailedFeature {
  id: string;
  title: string;
  badge: string;
  desc: string;
  accent: string;
  icon: React.ReactNode;
  tags: string[];
  screenshot?: string;
  screenshotTitle?: string;
  previewType?: 'quicklook' | 'ocr' | 'doc' | 'source' | 'tags' | 'privacy';
}

const ALL_FEATURES: DetailedFeature[] = [
  {
    id: 'quick-look',
    title: 'Spacebar Quick Look',
    badge: 'Instant Preview',
    desc: 'Press Spacebar on any file to preview it right away without opening Word, Excel, or heavy software. Browse documents, spreadsheets, videos, photos, and code with full layouts.',
    accent: 'var(--documents)',
    icon: <Eye size={22} color="var(--documents)" />,
    tags: ['Word (.docx)', 'Excel (.xlsx)', 'Access (.accdb)', 'PowerPoint (.pptx)', 'PDFs', '4K Video', 'Audio', 'Code & Hex'],
    previewType: 'quicklook',
  },
  {
    id: 'duplicate-hunter',
    title: 'Duplicate File Cleaner',
    badge: 'Reclaim Space',
    desc: 'Find exact copy-paste duplicates eating your hard drive space. Check the copies side-by-side with original paths and send duplicates safely to the Recycle Bin.',
    accent: 'var(--music)',
    icon: <Copy size={22} color="var(--music)" />,
    tags: ['Exact Byte Matching', 'SHA-256 Hashing', 'Cancel Anytime', 'Recycle Bin Safe', 'Keep Oldest Option'],
    screenshot: '/screenshots/duplicate-hunter.png',
    screenshotTitle: 'Duplicate Files · Smart Duplicate & Dead Weight Hunter',
  },
  {
    id: 'storage-visualizer',
    title: 'Storage Visualizer',
    badge: 'Drive Health',
    desc: 'See exactly what is taking up space on your PC. Easy color bars show your storage breakdown for Videos, Desktop, Documents, and your largest files at a glance.',
    accent: 'var(--archives)',
    icon: <HardDrive size={22} color="var(--archives)" />,
    tags: ['Visual Treemap', 'Category Storage Bars', 'Space Hogs Finder', 'Drive Capacity Overview'],
    screenshot: '/screenshots/storage-visualizer.png',
    screenshotTitle: 'Storage Visualizer · Visual Disk Treemap & Space Hogs',
  },
  {
    id: 'cleanup-center',
    title: 'Safe Cleanup Center',
    badge: 'Zero Risk',
    desc: 'Clean old temporary files, crash dumps, and junk safely. Files modified in the last 24 hours are locked from deletion, and your personal documents are 100% protected.',
    accent: 'var(--images)',
    icon: <Trash2 size={22} color="var(--images)" />,
    tags: ['Temp Files (%TEMP%)', 'Crash Dumps', '24-Hour Safety Buffer', 'Zero Document Risk'],
    screenshot: '/screenshots/cleanup-center.png',
    screenshotTitle: 'Cleanup Center · System Cleanup & Storage Reclaimer',
  },
  {
    id: 'this-pc',
    title: 'This PC & Drive Browser',
    badge: 'All Drives',
    desc: 'Browse your internal hard drives, external USB drives, and default folders with smooth breadcrumb navigation, back/forward buttons, and direct folder paths.',
    accent: 'var(--videos)',
    icon: <Folder size={22} color="var(--videos)" />,
    tags: ['Internal & External Drives', 'Folder Breadcrumbs', 'Back / Forward History', 'Direct Path Bar'],
    screenshot: '/screenshots/this-pc-browser.png',
    screenshotTitle: 'This PC · Local & External Drives Explorer',
  },
  {
    id: 'ocr',
    title: 'Search Text Inside Images',
    badge: 'Offline OCR',
    desc: 'Filsy automatically reads words inside screenshots, photos, and receipts using on-device Windows OCR. Search for Wi-Fi keys or order codes, or copy all text with 1 click.',
    accent: 'var(--images)',
    icon: <ScanSearch size={22} color="var(--images)" />,
    tags: ['Screenshots & Photos', 'Receipts & Notes', '100% Offline Vision', '1-Click Copy Text'],
    previewType: 'ocr',
  },
  {
    id: 'doc-search',
    title: 'Search Inside Documents',
    badge: 'Full-Text Search',
    desc: 'Find files by the words written inside them. Full-text search lets you find the right PDF, Word document, Excel spreadsheet, or PowerPoint deck even if you forgot the filename.',
    accent: 'var(--documents)',
    icon: <FileText size={22} color="var(--documents)" />,
    tags: ['PDF Text Extractor', 'Word (.docx)', 'Excel (.xlsx)', 'PowerPoint (.pptx)', 'Plain Text & Code'],
    previewType: 'doc',
  },
  {
    id: 'download-sources',
    title: 'Download Source Tracking',
    badge: 'File Origins',
    desc: 'Always remember where you got a file. Filsy automatically tracks if a file came from WhatsApp, Gmail, Chrome, Edge, Slack, Discord, Google Drive, or ChatGPT.',
    accent: 'var(--apps)',
    icon: <Download size={22} color="var(--apps)" />,
    tags: ['WhatsApp', 'Gmail & Email', 'Chrome & Edge', 'ChatGPT', 'Google Drive', 'GitHub'],
    previewType: 'source',
  },
  {
    id: 'tags-organization',
    title: 'Color Tags & Quick Actions',
    badge: 'Smart Organization',
    desc: 'Organize your files with custom color tags directly from the right-click menu. Group files together across different folders and drives without moving them.',
    accent: 'var(--archives)',
    icon: <Tag size={22} color="var(--archives)" />,
    tags: ['Red · Blue · Green · Yellow · Purple', 'Right-Click Context Menu', 'Grid & List Views', 'Bulk Operations'],
    previewType: 'tags',
  },
  {
    id: 'privacy',
    title: '100% Offline & Private',
    badge: 'Zero Cloud',
    desc: 'No user accounts, no login required, zero analytics, and zero telemetry. Everything is stored in a private local database on your PC. Your files never leave your computer.',
    accent: 'var(--music)',
    icon: <Lock size={22} color="var(--music)" />,
    tags: ['No User Account', 'No Telemetry', 'Works Without Internet', 'Local SQLite Database'],
    previewType: 'privacy',
  },
];

export const FeaturesPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap">
        <div className="section-head center" style={{ marginBottom: '40px' }}>
          <div className="version-chip" style={{ margin: '0 auto 12px' }}>
            <span>⚡ Complete Features</span>
          </div>
          <h2>Everything you need to manage your files</h2>
          <p>Simple, lightning fast, and 100% private. All features run directly on your PC.</p>
        </div>

        <div className="feature-showcase-grid">
          {ALL_FEATURES.map((feat) => (
            <div key={feat.id} className="feature-showcase-card">
              <div>
                <div className="feature-card-top">
                  <div className="feature-icon-badge" style={{ background: `color-mix(in srgb, ${feat.accent} 14%, transparent)` }}>
                    {feat.icon}
                  </div>
                  <div className="feature-card-title-group">
                    <h3>
                      {feat.title}
                      <span className="feature-card-badge" style={{ background: `color-mix(in srgb, ${feat.accent} 15%, transparent)`, color: feat.accent }}>
                        {feat.badge}
                      </span>
                    </h3>
                  </div>
                </div>

                <p className="feature-card-desc">{feat.desc}</p>

                <div className="feature-tags-list">
                  {feat.tags.map((tag) => (
                    <span key={tag} className="feature-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>

              {feat.screenshot ? (
                <div className="feature-screenshot-frame">
                  <div className="feature-screenshot-header">
                    <div className="feature-screenshot-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="feature-screenshot-title">{feat.screenshotTitle || feat.title}</span>
                  </div>
                  <img
                    src={feat.screenshot}
                    alt={feat.title}
                    className="feature-screenshot-img"
                    loading="lazy"
                  />
                </div>
              ) : feat.previewType === 'quicklook' ? (
                <div className="feature-no-img-preview">
                  <div style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--subtle)', marginBottom: '4px' }}>Press Spacebar to preview any file:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Word (.docx)', 'Excel (.xlsx)', 'Access (.accdb)', 'PowerPoint', 'PDF Documents', 'Video & Audio', 'Code & Markdown', 'ZIP Tree'].map(fmt => (
                      <span key={fmt} style={{ padding: '3px 8px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-full)', fontSize: '0.74rem', fontWeight: 600, color: 'var(--ink)' }}>
                        ⚡ {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              ) : feat.previewType === 'ocr' ? (
                <div className="feature-no-img-preview">
                  <div className="feature-preview-row">
                    <span>🖼️ Screenshot_WiFi_Credentials.png</span>
                    <span className="feature-copy-badge">
                      <Copy size={12} /> Copy Text
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', background: 'var(--card)', padding: '8px 12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--line)' }}>
                    <Eye size={12} style={{ display: 'inline', marginRight: '6px' }} />
                    Detected text: <strong>"Wi-Fi Password: WPA3-Home984"</strong>
                  </div>
                </div>
              ) : feat.previewType === 'doc' ? (
                <div className="feature-no-img-preview">
                  <div className="feature-preview-row">
                    <span>📄 Annual_Budget_Summary.pdf</span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--documents)', fontWeight: 700 }}>Full-Text Matched</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', background: 'var(--card)', padding: '8px 12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--line)' }}>
                    Found inside paragraph: <em>"...approved Q4 capital expenditure for software licenses..."</em>
                  </div>
                </div>
              ) : feat.previewType === 'source' ? (
                <div className="feature-no-img-preview">
                  <div style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--subtle)', marginBottom: '4px' }}>Automatic Source Filtering:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['WhatsApp', 'Gmail', 'Chrome', 'ChatGPT', 'Slack', 'Google Drive'].map(src => (
                      <span key={src} style={{ padding: '4px 10px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-full)', fontSize: '0.76rem', fontWeight: 600, color: 'var(--ink)' }}>
                        📁 from:{src.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              ) : feat.previewType === 'tags' ? (
                <div className="feature-no-img-preview">
                  <div style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--subtle)', marginBottom: '4px' }}>Custom Right-Click Tags:</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {[
                      { color: '#e11d48', label: 'Urgent' },
                      { color: '#3b82f6', label: 'Work' },
                      { color: '#10b981', label: 'Personal' },
                      { color: '#f59e0b', label: 'Review' },
                      { color: '#7c5cfc', label: 'Projects' },
                    ].map(tag => (
                      <span key={tag.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'var(--card)', border: '1px solid var(--line)', padding: '4px 9px', borderRadius: 'var(--radius-full)', fontSize: '0.76rem', fontWeight: 600 }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: tag.color }} />
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : feat.previewType === 'privacy' ? (
                <div className="feature-no-img-preview">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--card)', padding: '8px 12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--line)' }}>
                      <Shield size={16} color="var(--music)" />
                      <span><strong>100% Local Store:</strong> Database saved on your disk</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--card)', padding: '8px 12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--line)' }}>
                      <Lock size={16} color="var(--documents)" />
                      <span><strong>Zero Telemetry:</strong> No tracking and works without internet</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '54px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pricing" className="btn btn-primary btn-lg" style={{ gap: '8px' }}>
            <Sparkles size={18} />
            <span>Buy Filsy — {APP_CONFIG.pricing.displayPrice}</span>
          </Link>
          <Link to="/#search-demo" className="btn btn-secondary btn-lg" style={{ gap: '8px' }}>
            <Search size={18} />
            <span>Try Search Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
