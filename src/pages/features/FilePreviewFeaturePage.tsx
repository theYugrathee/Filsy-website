import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';
import { Eye, FileText, Image, Video, Music, Code, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export const FilePreviewFeaturePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <SEO routeKey="filePreview" />

      <div className="wrap-wide">
        <header className="section-head center" style={{ marginBottom: '40px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <Eye size={14} className="inline mr-1" /> Spacebar Quick Look
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Instant File Preview for Windows 10 &amp; 11
          </h1>
          <p style={{ maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem', color: 'var(--muted)' }}>
            Hit the Spacebar to preview PDFs, Word documents, Excel spreadsheets, 4K videos, photos, and source code.
            Stop waiting for heavy desktop applications to load just to check what is inside a file.
          </p>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={APP_CONFIG.microsoftStore.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get from Microsoft Store
            </a>
            <Link to="/features" className="btn btn-secondary">
              See All Features
            </Link>
          </div>
        </header>

        {/* Formats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(124, 92, 252, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={20} color="var(--documents)" />
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Documents &amp; Spreadsheets</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Instant layout rendering for Microsoft Word (.docx, .doc), Excel sheets (.xlsx, .xls, .csv), PowerPoint slides (.pptx), and multi-page PDFs with text selection and copy.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image size={20} color="var(--images)" />
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Photos &amp; Graphic Assets</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Crisp zoomable previews for PNG, JPEG, WEBP, GIF, SVG, and modern camera formats. View dimensions, color profile, and exact file size instantly without opening Photoshop.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Video size={20} color="var(--videos)" />
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>4K Video &amp; Animation</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Smooth GPU-accelerated video playback for MP4, MKV, MOV, and WebM clips. Scrub through footage, toggle audio, and inspect framerate right from your search results.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Music size={20} color="var(--music)" />
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>High-Fidelity Audio</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Listen to MP3, WAV, FLAC, AAC, and OGG tracks with waveform timeline scrubbing and embedded ID3 metadata display (artist, album, bitrate, duration).
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code size={20} color="var(--apps)" />
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Code &amp; Syntax Highlighting</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Read code files with colored syntax highlighting for JavaScript, TypeScript, Python, C++, Rust, Go, HTML, CSS, JSON, YAML, and SQL with line numbers and monospace font.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="var(--archives)" />
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Zero Software Dependencies</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              You do not need Microsoft Office, Adobe Acrobat, or any third-party viewers installed. Filsy contains self-contained local parsers that render previews safely in an isolated sandbox.
            </p>
          </div>
        </div>

        {/* Workflow Showcase */}
        <section className="card" style={{ padding: '36px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
            How Spacebar Quick Look Streamlines Your Workflow
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '20px' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>1. Tap Spacebar to Open</div>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Select any file in Filsy or your recent list and press the Spacebar. The preview pops up instantly over your desktop without changing your focus.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>2. Arrow Keys to Cycle</div>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Press the Up and Down arrow keys to inspect consecutive documents, invoices, or screenshots one after another without closing and reopening the preview.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>3. Tap Spacebar or Esc to Close</div>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Once you confirmed you have the right document, tap Spacebar or Esc to dismiss the preview and immediately continue working with your file.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="card center" style={{ padding: '40px 24px', background: 'var(--bg-band)', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--music)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '12px' }}>
            <ShieldCheck size={18} /> Verified Local-Only Processing
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
            Try Quick Look previews on Windows today
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 24px' }}>
            Available for Windows 10 (1809+) and Windows 11. One-time purchase, lifetime updates, zero subscription fees.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/pricing" className="btn btn-primary">
              Get Filsy for {APP_CONFIG.pricing.displayPrice}
            </Link>
            <Link to="/features/ocr-search" className="btn btn-secondary">
              Next: OCR Image Search <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

