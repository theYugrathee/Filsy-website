import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';
import { Copy, HardDrive, Trash2, ShieldAlert, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const FileOrganizationFeaturePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <SEO routeKey="fileOrganization" />

      <div className="wrap-wide">
        <header className="section-head center" style={{ marginBottom: '40px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <Copy size={14} className="inline mr-1" /> Reclaim Disk Space &amp; Declutter
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Windows File Organization, Duplicate Cleaner &amp; Storage Visualizer
          </h1>
          <p style={{ maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem', color: 'var(--muted)' }}>
            Find exact duplicate files eating valuable SSD space, visualize large space hogs across your drives,
            and safely purge temporary clutter with a 24-hour safety buffer.
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
            <Link to="/pricing" className="btn btn-secondary">
              View Pricing ({APP_CONFIG.pricing.displayPrice})
            </Link>
          </div>
        </header>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Copy size={22} color="var(--music)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Cryptographic Duplicate Hunter</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Filsy compares binary files using SHA-256 cryptographic hashes—not just matching file names. You will never accidentally delete two different files that happen to share the same name like &ldquo;Report.pdf&rdquo; or &ldquo;IMG_001.jpg&rdquo;.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <HardDrive size={22} color="var(--archives)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Visual Storage Treemap</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              See where every gigabyte went. Dynamic visual color bars break down capacity by category (Videos, Documents, Archives, Downloads) and surface the 100 largest files residing on your PC.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Trash2 size={22} color="var(--images)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Safe Temp &amp; Junk Reclaimer</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Clean old temporary files (%TEMP%), installer caches, and crash dumps. Files modified within the last 24 hours are locked from deletion to prevent interrupting active programs or system updates.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <ShieldCheck size={22} color="var(--videos)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Recycle Bin First</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Zero permanent shredding by default. Any duplicate or temporary file you choose to clean is placed in the standard Windows Recycle Bin so you can restore anything with a single click if needed.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(124, 92, 252, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <CheckCircle2 size={22} color="var(--documents)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Keep-Oldest Smart Selection</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Reviewing hundreds of duplicate files manually is exhausting. Filsy offers 1-click smart selection rules: Keep Original (oldest file), Keep Newest, or Keep In-Place inside specific parent folders.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <ShieldAlert size={22} color="var(--apps)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Zero Risk to Personal Files</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              System-critical directories (Windows, Program Files, system DLLs) are protected from bulk cleanup actions. Only safe user caches, designated duplicate groups, and temporary folders are actionable.
            </p>
          </div>
        </div>

        {/* Visual Screenshots Section */}
        <section className="card" style={{ padding: '36px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
            Clean, Transparent Disk Management
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
            Filsy gives you complete visibility into what is occupying your drive before taking any action:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden', background: 'var(--card-muted)' }}>
              <img
                src="/screenshots/duplicate-hunter.png"
                alt="Filsy Duplicate File Cleaner Interface showing SHA-256 duplicate comparison"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>Duplicate File Hunter</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>Side-by-side comparison with original path and file age.</p>
              </div>
            </div>

            <div style={{ border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden', background: 'var(--card-muted)' }}>
              <img
                src="/screenshots/storage-visualizer.png"
                alt="Filsy Storage Visualizer Interface showing disk space breakdown and large files"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>Storage Visualizer</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>Color-coded capacity bars and space hogs ranking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="card center" style={{ padding: '40px 24px', background: 'var(--bg-band)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
            Reclaim gigabytes of wasted storage today
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 24px' }}>
            Fast, safe, and permanently licensed on your PC for {APP_CONFIG.pricing.displayPrice}.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/pricing" className="btn btn-primary">
              Get Lifetime License — {APP_CONFIG.pricing.displayPrice}
            </Link>
            <Link to="/features" className="btn btn-secondary">
              All Features <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

