import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';
import { ScanSearch, Shield, Image, Sparkles, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

export const OcrSearchFeaturePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <SEO routeKey="ocrSearch" />

      <div className="wrap-wide">
        <header className="section-head center" style={{ marginBottom: '40px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <ScanSearch size={14} className="inline mr-1" /> On-Device Optical Character Recognition
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Search Text Inside Screenshots &amp; Images
          </h1>
          <p style={{ maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem', color: 'var(--muted)' }}>
            Find screenshots of code, receipts, whiteboard notes, and error dialogues by simply searching for the words visible inside them. 100% on-device OCR with zero cloud uploads.
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
            <Link to="/features/file-search" className="btn btn-secondary">
              Explore File Search Engine
            </Link>
          </div>
        </header>

        {/* Use Cases */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Image size={22} color="var(--images)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Screenshots &amp; Snipping Tool</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              We all save dozens of screenshots named &ldquo;Screenshot (47).png&rdquo;. Filsy indexes the visual text inside them so you can type any word or phrase you remember seeing to locate the exact image instantly.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(124, 92, 252, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Lock size={22} color="var(--documents)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>100% Private, On-Device Engine</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Most OCR tools upload your photos and documents to third-party cloud servers. Filsy executes OCR locally using native Windows media APIs. Your sensitive documents, bank slips, and medical records never leave your drive.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Sparkles size={22} color="var(--videos)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Receipts &amp; Expense Records</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Search for merchant names, invoice numbers, total amounts, or payment dates printed on scanned receipts, tax bills, and expense photos without manual renaming or tagging.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <CheckCircle2 size={22} color="var(--music)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Code &amp; Error Dialogues</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Remember that stack trace or compiler error popup you snapped? Filsy extracts text from terminal grabs, IDE screenshots, and bug reports so you can rediscover past debugging sessions.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <ScanSearch size={22} color="var(--archives)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Scanned Paper &amp; Whiteboards</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Photos of meeting whiteboards, handwritten meeting notes, and paper contracts captured on your phone camera are recognized and added to your searchable local library.
            </p>
          </div>

          <div className="card" style={{ padding: '26px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Shield size={22} color="var(--apps)" />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Zero Battery Drain</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              OCR runs quietly with low CPU priority only when your PC is idle and connected to power, preventing fan spin or battery drain on laptops while keeping index freshness up to date.
            </p>
          </div>
        </div>

        {/* Technical FAQ / Specifications */}
        <section className="card" style={{ padding: '36px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
            Technical OCR Specifications &amp; Compatibility
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>Supported Image Formats</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                PNG, JPG, JPEG, WEBP, BMP, TIFF, and rasterized images embedded in multi-page PDF documents.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>Operating System Support</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Windows 10 (version 1809 and newer) and Windows 11 (64-bit x64 systems) utilizing the Windows native Optical Character Recognition library.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>Data Privacy Guarantee</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                All text extraction is executed 100% on your local CPU/GPU. No external API keys, cloud subscriptions, or network connections are ever utilized.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="card center" style={{ padding: '40px 24px', background: 'var(--bg-band)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
            Make every screenshot on your PC searchable
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 24px' }}>
            Get Filsy once and enjoy instant OCR and desktop search with all future updates included for free.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/pricing" className="btn btn-primary">
              Get Lifetime License — {APP_CONFIG.pricing.displayPrice}
            </Link>
            <Link to="/features/file-organization" className="btn btn-secondary">
              Next: File Organization &amp; Cleaner <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

