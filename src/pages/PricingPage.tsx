import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import { Check, Sparkles, KeyRound, Bell, ArrowRight } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      await initiateCheckout('USD');
    } catch {
      setIsProcessing(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="wrap">
        {/* =========================================================================
            PRE-LAUNCH MODE PRICING (ACTIVE)
            To switch to Post-Launch mode ($19), see the commented section below!
            ========================================================================= */}
        <div className="section-head center">
          <span className="section-label">FIRST 99 USERS SPECIAL · LIMITED SPOTS</span>
          <h2>First 99 users: Lock in $9 forever.</h2>
          <p>
            Special early pricing of $9 reserved exclusively for the first 99 users before our official Microsoft Store release.
            When we officially launch, the regular price will be $19.
          </p>
        </div>

        {/* Clean Pre-Launch Pricing Card */}
        <div className="pricing-clean-card">
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
              <strong>First 99 Users Exclusive:</strong> Purchase the early license key now to lock in lifetime access for only $9 before our official Microsoft Store launch ($19 regular price).
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
            <span>{isProcessing ? 'Connecting to Checkout…' : 'Purchase Early License Key — $9'}</span>
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
              <span><strong>Ready for upcoming Microsoft Store release</strong> (activate in 1 click)</span>
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
            Checkout secured by Dodo Payments · Instant digital license delivery · One-time $9 payment for first 99 users ($19 regular launch price)
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
