import React, { useState } from 'react';
import {
  Search,
  Folder,
  Image as ImageIcon,
  FileText,
  Music,
  Video,
  Download,
  HardDrive,
  Copy,
  Trash2,
  ChevronRight,
  Archive,
  Layers,
  Sparkles,
  Check,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export type AppViewMode = 'hero' | 'library' | 'search' | 'ocr' | 'duplicates' | 'cleanup';

interface FilsyAppMockupProps {
  viewMode?: AppViewMode;
  showTabs?: boolean;
}

export const FilsyAppMockup: React.FC<FilsyAppMockupProps> = ({
  viewMode = 'hero',
  showTabs = true,
}) => {
  const [activeTab, setActiveTab] = useState<AppViewMode>(viewMode);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Optional Mode Switcher Tabs */}
      {showTabs && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'search', label: 'Natural Search', icon: Search },
            { id: 'ocr', label: 'OCR in Screenshots', icon: ImageIcon },
            { id: 'library', label: 'All Drives Library', icon: Folder },
            { id: 'duplicates', label: 'Binary Duplicates', icon: Copy },
            { id: 'cleanup', label: 'Safe Cleanup', icon: Trash2 },
          ].map(tab => {
            const isTabActive = (activeTab === 'hero' && tab.id === 'search') || activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as AppViewMode)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  fontSize: '0.84rem',
                  fontWeight: isTabActive ? 600 : 500,
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isTabActive ? 'var(--accent-soft)' : 'var(--bg-surface)',
                  color: isTabActive ? '#c4b5fd' : 'var(--text-secondary)',
                  border: `1px solid ${isTabActive ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                  boxShadow: isTabActive ? '0 0 15px rgba(124, 92, 252, 0.25)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <Icon size={14} color={isTabActive ? 'var(--accent-primary)' : 'currentColor'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Realistic Windows 11 Desktop Window Frame */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#0c0e15',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          boxShadow: '0 28px 70px -15px rgba(0, 0, 0, 0.85), 0 0 1px rgba(255, 255, 255, 0.2), 0 0 50px rgba(124, 92, 252, 0.1)',
          overflow: 'hidden',
          textAlign: 'left',
          position: 'relative',
        }}
      >
        {/* Windows Titlebar */}
        <div
          style={{
            height: '40px',
            backgroundColor: '#11141e',
            borderBottom: '1px solid #1c2233',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            userSelect: 'none',
          }}
        >
          {/* Left: Window icon + app name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '5px',
                background: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(124, 92, 252, 0.4)',
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '1px', backgroundColor: '#fff' }} />
            </div>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f1f5f9' }}>
              Filsy
            </span>
            <span style={{ fontSize: '0.74rem', color: '#64748b' }}>— Private Windows File Discovery</span>
          </div>

          {/* Right: Windows Minimize, Maximize, Close Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '11px', height: '1px', backgroundColor: '#94a3b8', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', border: '1px solid #94a3b8', borderRadius: '1px', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1, cursor: 'pointer' }}>✕</span>
          </div>
        </div>

        {/* Windows App Navigation & Search Toolbar */}
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: '#141824',
            borderBottom: '1px solid #1e2538',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#94a3b8' }}>
            <HardDrive size={14} color="#64748b" />
            <span>This PC</span>
            <ChevronRight size={13} color="#475569" />
            <span style={{ color: '#f8fafc', fontWeight: 600 }}>
              {activeTab === 'hero' || activeTab === 'search' ? 'Natural Search' : ''}
              {activeTab === 'library' ? 'Unified Library' : ''}
              {activeTab === 'ocr' ? 'OCR Inside Screenshots' : ''}
              {activeTab === 'duplicates' ? 'Duplicate Matcher' : ''}
              {activeTab === 'cleanup' ? 'Disk Cleanup' : ''}
            </span>
          </div>

          {/* Search Box with Real Query */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#0a0d14',
              border: '1px solid rgba(124, 92, 252, 0.35)',
              borderRadius: '8px',
              padding: '6px 14px',
              flex: 1,
              maxWidth: '480px',
              boxShadow: '0 0 16px rgba(124, 92, 252, 0.1)',
            }}
          >
            <Search size={14} color="#a78bfa" />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: '#f8fafc', width: '100%' }}>
              {activeTab === 'hero' && 'videos from my phone in August'}
              {activeTab === 'search' && 'videos from my phone in August'}
              {activeTab === 'library' && 'browse:all-drives category:unified'}
              {activeTab === 'ocr' && 'screenshots containing Wi-Fi'}
              {activeTab === 'duplicates' && 'filter:sha256-exact-duplicates'}
              {activeTab === 'cleanup' && 'size:>100MB unopened:>6months'}
            </div>
            <span style={{ fontSize: '0.68rem', color: '#64748b', backgroundColor: '#1e2436', padding: '2px 6px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
              Ctrl+Space
            </span>
          </div>

          {/* Status info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#94a3b8' }}>
            <span className="live-dot" />
            <span>Local Index Active</span>
          </div>
        </div>

        {/* Main Application Area (Sidebar + File View) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            minHeight: '410px',
            backgroundColor: '#090b10',
          }}
          className="app-window-grid"
        >
          {/* Left Sidebar */}
          <div
            style={{
              backgroundColor: '#0f121a',
              borderRight: '1px solid #1a202e',
              padding: '14px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              userSelect: 'none',
            }}
          >
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', padding: '4px 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CATEGORIES
            </div>

            {[
              { id: 'library', name: 'All Files', icon: Folder, count: '342k' },
              { id: 'images', name: 'Images', icon: ImageIcon, count: '18.4k' },
              { id: 'videos', name: 'Videos', icon: Video, count: '942' },
              { id: 'documents', name: 'Documents', icon: FileText, count: '6.1k' },
              { id: 'music', name: 'Music', icon: Music, count: '1.4k' },
              { id: 'downloads', name: 'Downloads', icon: Download, count: '2.8k' },
              { id: 'archives', name: 'Archives', icon: Archive, count: '412' },
            ].map(item => (
              <div
                key={item.id}
                onClick={() => setActiveTab('library')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  color: (activeTab === 'library') && item.id === 'library' ? '#c4b5fd' : '#94a3b8',
                  backgroundColor: (activeTab === 'library') && item.id === 'library' ? 'rgba(124, 92, 252, 0.12)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background 0.12s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <item.icon size={15} color={(activeTab === 'library') && item.id === 'library' ? '#a78bfa' : '#64748b'} />
                  <span>{item.name}</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{item.count}</span>
              </div>
            ))}

            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', padding: '14px 10px 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TOOLS
            </div>

            <div
              onClick={() => setActiveTab('duplicates')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                color: activeTab === 'duplicates' ? '#c4b5fd' : '#94a3b8',
                backgroundColor: activeTab === 'duplicates' ? 'rgba(124, 92, 252, 0.12)' : 'transparent',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <Copy size={15} color={activeTab === 'duplicates' ? '#a78bfa' : '#64748b'} />
                <span>Duplicates</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>Review</span>
            </div>

            <div
              onClick={() => setActiveTab('cleanup')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                color: activeTab === 'cleanup' ? '#c4b5fd' : '#94a3b8',
                backgroundColor: activeTab === 'cleanup' ? 'rgba(124, 92, 252, 0.12)' : 'transparent',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <Trash2 size={15} color={activeTab === 'cleanup' ? '#a78bfa' : '#64748b'} />
                <span>Disk Cleanup</span>
              </div>
            </div>

            {/* Bottom drive meter */}
            <div style={{ marginTop: 'auto', padding: '12px 10px', borderTop: '1px solid #1a202e' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94a3b8', marginBottom: '6px' }}>
                <span>NVMe SSD (C:)</span>
                <span className="mono" style={{ color: '#34d399' }}>214 GB free</span>
              </div>
              <div style={{ height: '4px', backgroundColor: '#1e2433', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '58%', height: '100%', background: 'linear-gradient(90deg, #7c5cfc, #38bdf8)' }} />
              </div>
            </div>
          </div>

          {/* Right Main Content Panel */}
          <div style={{ padding: '20px 24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* VIEW 1: HERO & NATURAL SEARCH RESULTS */}
            {(activeTab === 'hero' || activeTab === 'search') && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Parsed Tokens:</span>
                  <span className="section-tag" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    type:video
                  </span>
                  <span className="section-tag" style={{ fontSize: '0.72rem', padding: '2px 8px', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                    source:phone
                  </span>
                  <span className="section-tag" style={{ fontSize: '0.72rem', padding: '2px 8px', color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.3)' }}>
                    modified:August
                  </span>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>
                    3 files (0.02s)
                  </span>
                </div>

                {[
                  { name: 'IMG_4821_FamilyTrip.mov', path: 'C:\\Users\\Alex\\Videos\\Phone_Import', size: '420 MB', date: 'Aug 24, 2026' },
                  { name: 'VID_20260812_BeachSunset.mp4', path: 'D:\\Backups\\Media\\2026\\August', size: '890 MB', date: 'Aug 12, 2026' },
                  { name: 'ScreenRecording_Walkthrough.mp4', path: 'C:\\Users\\Alex\\Videos\\Captures', size: '145 MB', date: 'Aug 04, 2026' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      backgroundColor: i === 0 ? 'rgba(124, 92, 252, 0.08)' : '#0e121a',
                      border: `1px solid ${i === 0 ? 'rgba(124, 92, 252, 0.4)' : '#1a202e'}`,
                      borderRadius: '8px',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#161b29',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#a78bfa',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <Video size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                          {item.path}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.82rem', color: '#f1f5f9', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{item.size}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>{item.date}</div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* VIEW 2: LIBRARY / FOLDERS */}
            {activeTab === 'library' && (
              <>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '6px' }}>
                  Unified local index across C:, D:, and connected external storage
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
                  {[
                    { name: 'Images', count: '18,421 files', ext: '.png, .jpg, .heic', icon: ImageIcon, color: '#f43f5e' },
                    { name: 'Documents', count: '6,104 files', ext: '.pdf, .docx, .txt', icon: FileText, color: '#7c5cfc' },
                    { name: 'Downloads', count: '2,890 files', ext: 'Installers, archives', icon: Download, color: '#06b6d4' },
                    { name: 'Videos', count: '942 files', ext: '.mp4, .mov, .mkv', icon: Video, color: '#3b82f6' },
                    { name: 'Music', count: '1,418 files', ext: '.mp3, .flac, .wav', icon: Music, color: '#10b981' },
                    { name: 'Archives', count: '412 files', ext: '.zip, .tar, .7z', icon: Archive, color: '#f59e0b' },
                  ].map((cat, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#101420',
                        border: '1px solid #1c2233',
                        borderRadius: '8px',
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <cat.icon size={20} color={cat.color} />
                      <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#f8fafc' }}>{cat.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{cat.count}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* VIEW 3: OCR INSIDE IMAGES */}
            {activeTab === 'ocr' && (
              <>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '6px' }}>
                  Query: "screenshots containing Wi-Fi" · On-device Windows Vision OCR
                </div>

                <div
                  style={{
                    backgroundColor: '#121624',
                    border: '1px solid rgba(124, 92, 252, 0.4)',
                    borderRadius: '8px',
                    padding: '14px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.4)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                      Screenshot_Router_Credentials.png
                    </div>
                    <span className="section-tag" style={{ fontSize: '0.72rem', color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.3)' }}>
                      Local OCR Match
                    </span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    C:\Users\Alex\Pictures\Screenshots · 1.8 MB
                  </div>

                  {/* OCR Highlight Box */}
                  <div
                    style={{
                      backgroundColor: '#0a0d14',
                      border: '1px solid #1e2436',
                      borderRadius: '6px',
                      padding: '10px 14px',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      lineHeight: 1.6,
                    }}
                  >
                    <span>...Network Name: HomeMesh-5G | </span>
                    <span style={{ backgroundColor: 'rgba(124, 92, 252, 0.25)', color: '#c4b5fd', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                      Wi-Fi Password: WPA3-Home984Pass
                    </span>
                    <span> | Security: WPA3-Personal...</span>
                  </div>
                </div>
              </>
            )}

            {/* VIEW 4: DUPLICATE DETECTION */}
            {activeTab === 'duplicates' && (
              <>
                <div
                  style={{
                    backgroundColor: '#121624',
                    border: '1px solid #20273a',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                      Exact Binary Hash Match (SHA-256)
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                      3 identical copies found · 2.4 GB recoverable space
                    </div>
                  </div>
                  <span className="section-tag" style={{ color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                    Safe Review
                  </span>
                </div>

                <div style={{ padding: '10px 14px', backgroundColor: '#0f131d', border: '1px solid #1c2233', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                      [Keep Original] Client_Pitch_Video_Render.mov
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      C:\Users\Alex\Videos\Projects
                    </div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#34d399', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1.2 GB</span>
                </div>

                <div style={{ padding: '10px 14px', backgroundColor: 'rgba(244, 63, 94, 0.05)', border: '1px dashed rgba(244, 63, 94, 0.3)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                      [Duplicate] Client_Pitch_Video_Render (1).mov
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      C:\Users\Alex\Downloads
                    </div>
                  </div>
                  <span className="section-tag" style={{ color: '#f43f5e', borderColor: 'rgba(244, 63, 94, 0.4)', background: 'rgba(244, 63, 94, 0.1)' }}>
                    Move to Recycle Bin
                  </span>
                </div>
              </>
            )}

            {/* VIEW 5: DISK CLEANUP */}
            {activeTab === 'cleanup' && (
              <>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '6px' }}>
                  Safe storage reclamation: unopened large files & stale downloads
                </div>

                {[
                  { name: 'Windows11_Insider_Preview_x64.iso', path: 'C:\\Users\\Alex\\Downloads', size: '5.4 GB', age: 'Unopened for 8 months' },
                  { name: 'Blender_Project_Render_Archive.zip', path: 'C:\\Users\\Alex\\Desktop\\Temp', size: '3.1 GB', age: 'Unopened for 6 months' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      backgroundColor: '#0f131d',
                      border: '1px solid #1c2233',
                      borderRadius: '6px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>{item.name}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{item.path}</div>
                      <div style={{ fontSize: '0.74rem', color: '#f59e0b', marginTop: '2px' }}>{item.age}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', color: '#f8fafc', fontWeight: 600 }}>{item.size}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Windows Status Bar */}
        <div
          style={{
            height: '28px',
            backgroundColor: '#0a0d14',
            borderTop: '1px solid #1a202e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            fontSize: '0.72rem',
            color: '#64748b',
            userSelect: 'none',
          }}
        >
          <div>342,109 files indexed (0.02s query)</div>
          <div>Windows NTFS · 100% Local · Privacy Guaranteed</div>
        </div>
      </div>
    </div>
  );
};
