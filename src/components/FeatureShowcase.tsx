import React, { useState } from 'react';
import {
  Search,
  Image as ImageIcon,
  Folder,
  Copy,
  Trash2,
  Layers,
  HardDrive,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface FeatureItem {
  id: string;
  name: string;
  summary: string;
  detail: string;
  icon: any;
  mockupSnippet: {
    title: string;
    subtitle: string;
    tag: string;
    lines: { title: string; meta: string; badge?: string }[];
  };
}

const FEATURES: FeatureItem[] = [
  {
    id: 'search',
    name: 'Natural Search',
    summary: 'Search based on what you actually remember.',
    detail: 'Parse dates, locations, and file types without remembering exact filenames or folder directories.',
    icon: Search,
    mockupSnippet: {
      title: 'Query: "videos from my phone in August"',
      subtitle: 'Parsed into type:video, date:August, source:phone',
      tag: '0.02s Query',
      lines: [
        { title: 'IMG_4821_FamilyTrip.mov', meta: 'C:\\Users\\Alex\\Videos · 420 MB · Aug 24' },
        { title: 'VID_20260812_BeachSunset.mp4', meta: 'D:\\Backups\\Media · 890 MB · Aug 12' },
        { title: 'ScreenRecording_Walkthrough.mp4', meta: 'C:\\Users\\Alex\\Videos · 145 MB · Aug 04' },
      ],
    },
  },
  {
    id: 'ocr',
    name: 'OCR Inside Images',
    summary: 'Search text extracted from screenshots and photos.',
    detail: 'Surface screenshots containing Wi-Fi passwords, order numbers, receipts, or notes using native Windows local OCR.',
    icon: ImageIcon,
    mockupSnippet: {
      title: 'Query: "screenshots containing Wi-Fi"',
      subtitle: 'Local on-device OCR text extraction',
      tag: 'Native Windows Vision',
      lines: [
        { title: 'Screenshot_Router_Credentials.png', meta: 'C:\\Pictures\\Screenshots · 1.8 MB', badge: 'Match: "Wi-Fi Password: WPA3-Home984"' },
        { title: 'Apartment_Guest_WiFi_Card.jpg', meta: 'C:\\Documents · 820 KB', badge: 'Match: "Network: GuestHouse5G"' },
      ],
    },
  },
  {
    id: 'library',
    name: 'Unified Library',
    summary: 'All files categorized across all connected drives.',
    detail: 'Images, Documents, Downloads, Videos, Music, and Archives presented in one place regardless of drive partition.',
    icon: Folder,
    mockupSnippet: {
      title: 'Library: All Local Disks (C:, D:, External)',
      subtitle: 'Automatic type categorization without moving physical files',
      tag: 'Zero File Relocation',
      lines: [
        { title: 'Images Category (18,421 files)', meta: '.png, .jpg, .heic across 4 drive partitions' },
        { title: 'Documents Category (6,104 files)', meta: '.pdf, .docx, .xlsx, .txt, .md' },
        { title: 'Downloads Category (2,890 files)', meta: 'Installers, archives, received attachments' },
      ],
    },
  },
  {
    id: 'duplicates',
    name: 'Duplicate Detection',
    summary: 'Compare files by content hash, not just filename.',
    detail: 'SHA-256 binary validation to review identical copies safely before moving unnecessary duplicates to Recycle Bin.',
    icon: Copy,
    mockupSnippet: {
      title: '3 Exact Binary Copies Identified',
      subtitle: 'Hash: 4a8f9c... (2.4 GB recoverable space)',
      tag: 'Safe Review',
      lines: [
        { title: '[Keep] Client_Pitch_Video_Render.mov', meta: 'C:\\Users\\Alex\\Videos\\Projects · 1.2 GB', badge: 'Primary Copy' },
        { title: '[Recycle] Client_Pitch_Video_Render (1).mov', meta: 'C:\\Users\\Alex\\Downloads · 1.2 GB', badge: 'Duplicate' },
      ],
    },
  },
  {
    id: 'cleanup',
    name: 'Disk Cleanup',
    summary: 'Identify large and stale files eating up SSD space.',
    detail: 'Filter by size (>100MB) and unopened duration (>6 months). Never destructive: files go straight to Windows Recycle Bin.',
    icon: Trash2,
    mockupSnippet: {
      title: 'Large & Stale Files Review',
      subtitle: 'Filtered: >100 MB and unopened in >6 months',
      tag: 'Recycle Bin Safe',
      lines: [
        { title: 'Windows11_Insider_Preview_x64.iso', meta: '5.4 GB · C:\\Users\\Alex\\Downloads · 8 months ago' },
        { title: 'Blender_Project_Render_Archive.zip', meta: '3.1 GB · C:\\Users\\Alex\\Desktop\\Temp · 6 months ago' },
      ],
    },
  },
  {
    id: 'thumbnails',
    name: 'High-Res Thumbnails',
    summary: 'Recognize files instantly with crisp visual previews.',
    detail: 'Integrated with Windows Shell thumbnail cache for high-speed rendering of photos, vector art, and video frames.',
    icon: Layers,
    mockupSnippet: {
      title: 'Native Shell Thumbnail Cache',
      subtitle: 'Instant GPU-assisted image & video previews',
      tag: 'No Lag',
      lines: [
        { title: 'Site_Redesign_Mockup_v4.png', meta: '1920x1080 · 24-bit PNG · 2.4 MB' },
        { title: 'Brand_Identity_Guide.pdf', meta: '16 Pages · PDF Document · 8.2 MB' },
      ],
    },
  },
  {
    id: 'windows',
    name: 'Windows Integration',
    summary: 'Open original folders in Explorer with one click.',
    detail: 'Right-click to "Show in Windows Explorer", press Shift+C to copy path, or press Enter to launch with default app.',
    icon: ExternalLink,
    mockupSnippet: {
      title: 'Windows Explorer Coordination',
      subtitle: 'Direct shell execution without third-party drivers',
      tag: 'Native Shell',
      lines: [
        { title: 'Open in Windows Explorer', meta: 'Selects the exact file inside Explorer window' },
        { title: 'Copy Full Path (Shift + C)', meta: 'Copies C:\\Users\\...\\file.ext to clipboard' },
      ],
    },
  },
];

export const FeatureShowcase: React.FC = () => {
  const [selectedId, setSelectedId] = useState('search');
  const activeFeature = FEATURES.find(f => f.id === selectedId) || FEATURES[0];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 340px) 1fr',
        gap: '24px',
        alignItems: 'start',
      }}
      className="feature-showcase-grid"
    >
      {/* Feature Selector Tabs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {FEATURES.map(f => {
          const isSelected = f.id === selectedId;
          const Icon = f.icon;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedId(f.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isSelected ? 'var(--bg-surface-elevated)' : 'transparent',
                border: `1px solid ${isSelected ? 'var(--border-strong)' : 'transparent'}`,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isSelected ? 'var(--accent-soft)' : 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: isSelected ? 600 : 500, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {f.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {f.summary}
                  </div>
                </div>
              </div>
              {isSelected && <ChevronRight size={16} color="var(--accent-primary)" />}
            </button>
          );
        })}
      </div>

      {/* Dynamic Product Showcase Box */}
      <div
        className="card"
        style={{
          padding: '32px',
          background: 'linear-gradient(135deg, rgba(22, 26, 41, 0.7) 0%, rgba(16, 19, 29, 0.9) 100%)',
          borderColor: 'var(--border-strong)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>{activeFeature.name}</h3>
          <span className="section-tag">
            <Sparkles size={12} />
            <span>{activeFeature.mockupSnippet.tag}</span>
          </span>
        </div>

        <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
          {activeFeature.detail}
        </p>

        {/* Windows Mini-Display Panel */}
        <div
          style={{
            backgroundColor: '#0a0c12',
            border: '1px solid #1e2433',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.6)',
          }}
        >
          <div
            style={{
              padding: '10px 16px',
              backgroundColor: '#121622',
              borderBottom: '1px solid #1e2433',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>
                {activeFeature.mockupSnippet.title}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                {activeFeature.mockupSnippet.subtitle}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#334155' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#334155' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#334155' }} />
            </div>
          </div>

          <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {activeFeature.mockupSnippet.lines.map((line, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 14px',
                  backgroundColor: '#111520',
                  borderRadius: '6px',
                  border: '1px solid #1c2230',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.86rem', color: '#f1f5f9', fontWeight: 500 }}>
                    {line.title}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                    {line.meta}
                  </div>
                </div>
                {line.badge && (
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    {line.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
