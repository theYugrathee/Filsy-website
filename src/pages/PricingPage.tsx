import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout, initiateBlackFridayCheckout, isBlackFridayActive } from '../services/paymentService';
import { SEO } from '../components/SEO';
import { Check, Sparkles, KeyRound, Zap } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBFProcessing, setIsBFProcessing] = useState(false);
  const blackFriday = isBlackFridayActive();

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      await initiateCheckout('USD');
    } catch {
      setIsProcessing(false);
    }
  };

  const handleBlackFriday = async () => {
    setIsBFProcessing(true);
    try {
      await initiateBlackFridayCheckout();
    } catch {
      setIsBFProcessing(false);
    }
  };

  return (
    <div className="page-wrapper">
      <SEO routeKey="pricing" />
      <div className="wrap">
        {/* =========================================================================
            PRE-LAUNCH MODE PRICING (ACTIVE)
            To switch to Post-Launch mode ($19), see the commented section below!
            ========================================================================= */}
        <div className="section-head center">
          <span className="section-label">{blackFriday ? '🖤 BLACK FRIDAY DEAL · TODAY ONLY' : 'FIRST 99 USERS SPECIAL · LIMITED SPOTS'}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '12px 0' }}>
            {blackFriday ? 'Black Friday: Grab Filsy at just $1 🔥' : 'First 99 users: Lock in $9 forever.'}
          </h1>
          <p>
            {blackFriday
              ? 'One-time payment. Lifetime access. This deal expires at midnight — don\'t miss it.'
              : 'Special early pricing of $9 reserved exclusively for the first 99 users celebrating our Microsoft Store release. Regular price is $19.'}
          </p>
        </div>

        {/* ── Black Friday $1 Card (today only) ── */}
        {blackFriday && (
          <div
            className="pricing-clean-card"
            style={{
              border: '2px solid #f97316',
              background: 'linear-gradient(135deg, rgba(249,115,22,0.07) 0%, rgba(0,0,0,0.0) 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow ribbon */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #f97316, #ef4444, #f97316)', borderRadius: '2px 2px 0 0' }} />

            <span className="pill" style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em' }}>
              🖤 BLACK FRIDAY · TODAY ONLY
            </span>

            <div className="prelaunch-strike-row" style={{ marginTop: '16px' }}>
              <span className="prelaunch-regular-price">$9 Early Price</span>
              <span className="prelaunch-discount-badge" style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}>Save $8 — 89% OFF</span>
            </div>

            <div className="clean-price-box" style={{ flexDirection: 'column', gap: '4px', marginTop: '8px', marginBottom: '14px' }}>
              <span className="clean-price-amount" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', color: '#f97316' }}>
                $1
              </span>
              <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>one-time payment · lifetime access · today only</span>
            </div>

            <div className="early-supporter-alert" style={{ marginBottom: '20px', borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.07)' }}>
              <Zap size={18} color="#f97316" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Black Friday Flash Deal:</strong> Get lifetime access to Filsy for just $1 — only today, November 17. Same app, same features, same lifetime key. Price goes back to $9 at midnight.
              </div>
            </div>

            <button
              type="button"
              onClick={handleBlackFriday}
              disabled={isBFProcessing}
              className="btn btn-lg"
              style={{ width: '100%', gap: '8px', background: '#f97316', color: '#fff', border: 'none', fontWeight: 700, fontSize: '1.05rem' }}
            >
              <Zap size={18} />
              <span>{isBFProcessing ? 'Connecting to Checkout…' : '🖤 Grab Filsy — $1 (Black Friday)'}</span>
            </button>

            <ul className="clean-checklist" style={{ marginTop: '24px' }}>
              {[
                'Lifetime license — pay once, use forever',
                'Instant license key delivered by email',
                'All future updates included at no extra cost',
                'Natural-language search, OCR inside screenshots & PDFs',
                'Live on Microsoft Store — download in one click',
                '100% offline & private — your files never leave your PC',
              ].map((item) => (
                <li key={item}>
                  <Check size={16} color="#f97316" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ fontSize: '0.8rem', color: 'var(--subtle)', marginTop: '20px' }}>
              Checkout secured by Dodo Payments · Black Friday deal ends Nov 17 at midnight · Regular price $9
            </div>
          </div>
        )}

        {/* ── Standard $9 Card ── */}
        <div className="pricing-clean-card" style={blackFriday ? { opacity: 0.82, marginTop: '8px' } : {}}>
          {blackFriday && (
            <div style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 600, marginBottom: '12px', textAlign: 'center' }}>
              — or stick with the standard early-bird price —
            </div>
          )}
          <span className="pill pill-early">FIRST 99 USERS SPECIAL · 52% OFF</span>

          <div className="prelaunch-strike-row" style={{ marginTop: '16px' }}>
            <span className="prelaunch-regular-price">$19 Regular Price</span>
            <span className="prelaunch-discount-badge">Save $10 (First 99 Users)</span>
          </div>

          <div className="clean-price-box" style={{ flexDirection: 'column', gap: '4px', marginTop: '8px', marginBottom: '14px' }}>
            <span className="clean-price-amount" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)' }}>
              $9
            </span>
            <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>one-time payment · lifetime access · first 99 users only</span>
          </div>

          <div className="early-supporter-alert" style={{ marginBottom: '20px' }}>
            <Sparkles size={18} color="var(--documents)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>First 99 Users Exclusive:</strong> Purchase the early license key now to lock in lifetime access for only $9 celebrating our official Microsoft Store release ($19 regular price).
            </div>
          </div>

          <button
            type="button"
            id="pricingCheckoutBtn"
            onClick={handleCheckout}
            disabled={isProcessing}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', gap: '8px' }}
          >
            <Sparkles size={18} />
            <span>{isProcessing ? 'Connecting to Checkout…' : 'Buy Filsy — $9'}</span>
          </button>

          <ul className="clean-checklist" style={{ marginTop: '28px' }}>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Lifetime license on 1 active PC</strong> (move to a new PC anytime in 1 click)</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Guaranteed $9 pricing</strong> for the first 99 users (increases to $19 at launch)</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Instant digital key delivery</strong> directly to your email via Dodo Payments</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Live on Microsoft Store</strong> (activate in 1 click)</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Natural-language search</strong> with automatic filter parsing</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>On-device OCR</strong> inside screenshots, scanned receipts, and photos</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Deep document text indexing</strong> for PDFs, Word, and Excel files</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Binary duplicate detection</strong> with safe SHA-256 hash comparison</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Every future update included forever</strong></span>
            </li>
          </ul>

          <div style={{ fontSize: '0.8rem', color: 'var(--subtle)', marginTop: '20px' }}>
            Checkout secured by Dodo Payments · Instant digital license delivery · One-time $9 early pricing for first 99 users ($19 regular price)
          </div>
        </div>

        {/* =========================================================================
            [POST-LAUNCH STANDARD PRICING CARD — UNCOMMENT WHEN OFFICIALLY LAUNCHED]
            -------------------------------------------------------------------------
            <div className="pricing-clean-card" style={{ display: 'none' }}>
              <span className="pill pill-early">LIFETIME LICENSE</span>
              <div className="clean-price-box" style={{ flexDirection: 'column', gap: '4px', marginTop: '14px', marginBottom: '14px' }}>
                <span className="clean-price-amount">$19</span>
                <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>one-time payment · lifetime access</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', marginBottom: '24px' }}>
                Instant digital delivery. Unlocks perpetual offline usage with no recurring fees.
              </p>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isProcessing}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', gap: '8px' }}
              >
                <Sparkles size={18} />
                <span>Get License Key — $19</span>
              </button>
            </div>
            ========================================================================= */}

        {/* Action Links */}
        <div style={{ maxWidth: '600px', margin: '36px auto 0', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
