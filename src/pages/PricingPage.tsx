import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import {
  initiateCheckout,
  initiateBlackFridayCheckout,
  initiatePWYWCheckout,
  isBlackFridayActive,
} from '../services/paymentService';
import { SEO } from '../components/SEO';
import { Check, Sparkles, KeyRound, Heart, Zap } from 'lucide-react';

const FEATURES = [
  'Lifetime license — pay once, use forever',
  'Instant license key delivered by email',
  'Natural-language search & OCR inside screenshots',
  'Search text inside PDFs, Word & Excel files',
  'Live on Microsoft Store — 1-click install',
  'Binary duplicate detection (SHA-256)',
  'All future updates included forever',
  '100% offline & private — data never leaves your PC',
];

export const PricingPage: React.FC = () => {
  const [loading, setLoading] = useState<'bf' | 'pwyw' | 'standard' | null>(null);
  const blackFriday = isBlackFridayActive();

  const go = async (which: 'bf' | 'pwyw' | 'standard') => {
    setLoading(which);
    try {
      if (which === 'bf') await initiateBlackFridayCheckout();
      else if (which === 'pwyw') await initiatePWYWCheckout();
      else await initiateCheckout('USD');
    } catch {
      setLoading(null);
    }
  };

  return (
    <div className="page-wrapper">
      <SEO routeKey="pricing" />
      <div className="wrap">

        {/* ── Header ── */}
        <div className="section-head center" style={{ marginBottom: '48px' }}>
          {blackFriday && (
            <span className="section-label" style={{ color: '#2563eb' }}>
              🖤 BLACK FRIDAY · TODAY ONLY
            </span>
          )}
          {!blackFriday && (
            <span className="section-label">CHOOSE YOUR PRICE · LIFETIME ACCESS</span>
          )}
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '12px 0' }}>
            {blackFriday ? 'Black Friday — pick what works for you.' : 'Pick the plan that works for you.'}
          </h1>
          <p style={{ maxWidth: '560px', margin: '0 auto' }}>
            One-time payment. Lifetime access. No subscriptions, no hidden fees.
            {blackFriday && ' All deals expire at midnight tonight.'}
          </p>
        </div>

        {/* ── 3-Card Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1080px',
          margin: '0 auto',
          alignItems: 'stretch',
        }}>

          {/* ── Card 1: Black Friday $1 (today only) ── */}
          {blackFriday && (
            <div style={{
              background: 'var(--surface)',
              border: '2px solid #1e40af',
              borderRadius: '20px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(37,99,235,0.08), 0 8px 32px rgba(37,99,235,0.12)',
            }}>
              {/* Top accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6)', borderRadius: '20px 20px 0 0' }} />

              <span style={{ display: 'inline-block', background: 'rgba(37,99,235,0.1)', color: '#2563eb', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '999px', marginBottom: '20px', alignSelf: 'flex-start' }}>
                🖤 BLACK FRIDAY · TODAY ONLY
              </span>

              <div style={{ marginBottom: '4px', fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'line-through' }}>$9 early price</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, color: '#2563eb' }}>$1</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '28px' }}>one-time · lifetime access · today only</div>

              <button
                type="button"
                onClick={() => go('bf')}
                disabled={loading !== null}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  width: '100%', padding: '14px 20px', borderRadius: '12px',
                  background: '#2563eb', color: '#fff', border: 'none',
                  fontSize: '1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading && loading !== 'bf' ? 0.5 : 1,
                  transition: 'opacity 0.2s',
                  marginBottom: '28px',
                }}
              >
                <Zap size={18} />
                {loading === 'bf' ? 'Connecting…' : 'Grab $1 Black Friday Deal'}
              </button>

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', marginTop: 'auto' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Everything included</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {FEATURES.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--ink)' }}>
                      <Check size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ── Card 2: Pay What You Want ── */}
          <div style={{
            background: 'var(--surface)',
            border: '1.5px solid var(--line)',
            borderRadius: '20px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <span style={{ display: 'inline-block', background: 'rgba(16,185,129,0.1)', color: '#059669', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '999px', marginBottom: '20px', alignSelf: 'flex-start' }}>
              PAY WHAT YOU WANT
            </span>

            <div style={{ marginBottom: '4px', fontSize: '0.85rem', color: 'var(--muted)' }}>your price</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, color: '#059669' }}>Any</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '28px' }}>you choose the amount · lifetime access</div>

            <button
              type="button"
              onClick={() => go('pwyw')}
              disabled={loading !== null}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                width: '100%', padding: '14px 20px', borderRadius: '12px',
                background: '#059669', color: '#fff', border: 'none',
                fontSize: '1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading && loading !== 'pwyw' ? 0.5 : 1,
                transition: 'opacity 0.2s',
                marginBottom: '28px',
              }}
            >
              <Heart size={18} />
              {loading === 'pwyw' ? 'Connecting…' : 'Pay What You Want'}
            </button>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', marginTop: 'auto' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Everything included</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {FEATURES.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--ink)' }}>
                    <Check size={15} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Card 3: Standard $9 — MOST POPULAR ── */}
          <div style={{
            background: 'var(--surface)',
            border: '2px solid var(--brand, #2563eb)',
            borderRadius: '20px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(37,99,235,0.15)',
          }}>
            {/* Top accent bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #2563eb, #38bdf8)', borderRadius: '20px 20px 0 0' }} />

            {/* Most popular badge */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#2563eb', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '999px' }}>
              MOST POPULAR
            </div>

            <span style={{ display: 'inline-block', background: 'rgba(37,99,235,0.08)', color: '#2563eb', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '999px', marginBottom: '20px', alignSelf: 'flex-start' }}>
              FIRST 99 USERS · 52% OFF
            </span>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '2px' }}>
              <span style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, color: '#2563eb' }}>$9</span>
              <span style={{ fontSize: '1.1rem', color: 'var(--muted)', textDecoration: 'line-through', fontWeight: 500 }}>$19</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '28px' }}>one-time · lifetime access · first 99 users</div>

            <button
              type="button"
              id="pricingCheckoutBtn"
              onClick={() => go('standard')}
              disabled={loading !== null}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                width: '100%', padding: '14px 20px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #2563eb, #38bdf8)', color: '#fff', border: 'none',
                fontSize: '1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading && loading !== 'standard' ? 0.5 : 1,
                transition: 'opacity 0.2s',
                marginBottom: '28px',
              }}
            >
              <Sparkles size={18} />
              {loading === 'standard' ? 'Connecting…' : 'Buy Filsy — $9'}
            </button>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', marginTop: 'auto' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Everything included</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {FEATURES.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--ink)' }}>
                    <Check size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>{/* end grid */}

        {/* ── Trust line ── */}
        <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--subtle)', marginTop: '32px' }}>
          Checkout secured by Dodo Payments · Instant digital key delivery · No subscriptions ever
        </p>

        {/* ── Action Links ── */}
        <div style={{ maxWidth: '600px', margin: '32px auto 0', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/find-key" className="btn btn-secondary" style={{ gap: '6px' }}>
            <KeyRound size={16} />
            <span>Find My License Key</span>
          </Link>
          <Link to="/license" className="btn btn-secondary" style={{ gap: '6px' }}>
            <span>License Guide</span>
          </Link>
          <Link to="/free-license" className="btn btn-secondary" style={{ gap: '6px' }}>
            <span>Free License Offer (5K Views)</span>
          </Link>
          <Link to="/faq" className="btn btn-ghost">Read Full FAQ</Link>
        </div>

      </div>
    </div>
  );
};
