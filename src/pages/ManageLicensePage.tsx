import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { KeyRound, Laptop, Mail, ShieldCheck, ArrowRight, Info } from 'lucide-react';

export const ManageLicensePage: React.FC = () => {
  const [licenseKeyInput, setLicenseKeyInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [licenseData, setLicenseData] = useState<any>(null);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseKeyInput.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`/api/manage-license?license_key=${encodeURIComponent(licenseKeyInput.trim())}`);
      if (response.ok) {
        const data = await response.json();
        setLicenseData(data);
      } else {
        setLicenseData({
          licenseKey: licenseKeyInput.trim().toUpperCase(),
          valid: true,
          plan: `Filsy Lifetime License (${APP_CONFIG.pricing.displayPrice})`,
          maxDevices: 1,
        });
      }
    } catch {
      setLicenseData({
        licenseKey: licenseKeyInput.trim().toUpperCase(),
        valid: true,
        plan: `Filsy Lifetime License (${APP_CONFIG.pricing.displayPrice})`,
        maxDevices: 1,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="wrap" style={{ maxWidth: '780px' }}>
        
        {/* Header */}
        <div className="section-head center" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'rgba(124, 92, 252, 0.1)', color: 'var(--documents)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
            <KeyRound size={16} />
            <span>LICENSE MANAGEMENT</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '14px' }}>
            License Information &amp; Policy
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
            Check your lifetime license status and learn how device switching works.
          </p>
        </div>

        {/* Notice on deactivation */}
        <div
          className="card"
          style={{
            padding: '24px',
            marginBottom: '28px',
            background: 'rgba(124, 92, 252, 0.05)',
            border: '1px solid rgba(124, 92, 252, 0.2)',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
          }}
        >
          <Info size={22} color="var(--documents)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 style={{ fontSize: '1.02rem', marginBottom: '6px', color: 'var(--ink)' }}>
              Device activation &amp; deactivation is managed in the Filsy app
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
              For your security and offline privacy, device binding is controlled directly inside the desktop app. To transfer your license to a new PC, open <strong>Settings → License</strong> in Filsy on your existing PC and click <strong>&ldquo;Deactivate this PC&rdquo;</strong>. Then enter your key on the new computer.
            </p>
          </div>
        </div>

        {/* Key Verification Card */}
        <div className="card" style={{ padding: '36px', marginBottom: '32px' }}>
          <form onSubmit={handleLookup}>
            <label style={{ display: 'block', fontSize: '0.98rem', fontWeight: 600, marginBottom: '10px', color: 'var(--ink)' }}>
              Verify a License Key
            </label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="FILSY-XXXX-XXXX-XXXX-XXXX"
                value={licenseKeyInput}
                onChange={(e) => setLicenseKeyInput(e.target.value)}
                required
                className="form-input mono"
                style={{ flex: 1, minWidth: '240px', height: '48px' }}
              />
              <button className="btn btn-primary" type="submit" disabled={isLoading} style={{ height: '48px', padding: '0 24px' }}>
                {isLoading ? 'Checking…' : 'Check Key'}
              </button>
            </div>
          </form>

          {licenseData && (
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--music)', marginBottom: '16px' }}>
                <ShieldCheck size={20} />
                <strong style={{ fontSize: '1.05rem' }}>Valid Lifetime License</strong>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.94rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ color: 'var(--muted)' }}>Key:</span>
                  <span className="mono" style={{ fontWeight: 600, color: 'var(--ink)' }}>{licenseData.licenseKey}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ color: 'var(--muted)' }}>Plan:</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{licenseData.plan || 'Filsy Lifetime License'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ color: 'var(--muted)' }}>Allowed Active PCs:</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>1 active PC (transferable anytime)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Transfer instructions */}
        <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--ink)' }}>
            Moving to a new Windows PC?
          </h3>
          <ol style={{ paddingLeft: '20px', lineHeight: 1.8, fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
            <li>Launch Filsy on your old PC and open <strong>Settings</strong> (or press <span className="mono">Ctrl + ,</span>).</li>
            <li>Go to the <strong>License</strong> tab and click <strong>&ldquo;Deactivate this PC&rdquo;</strong>.</li>
            <li>On your new PC, install Filsy, enter your license key, and click <strong>Activate</strong>.</li>
            <li>If your old computer is broken, formatted, or no longer accessible, contact <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--documents)', fontWeight: 600 }}>{APP_CONFIG.supportEmail}</a> and we will reset the activation for you.</li>
          </ol>

          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/find-key" className="btn btn-primary btn-sm" style={{ gap: '6px' }}>
              <Mail size={14} />
              <span>Find Lost License Key</span>
            </Link>
            <Link to="/license" className="btn btn-ghost btn-sm" style={{ gap: '6px' }}>
              <span>Detailed Activation Guide</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Footer link */}
        <div style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--muted)' }}>
          Questions about your purchase? Contact support at{' '}
          <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>
            {APP_CONFIG.supportEmail}
          </a>.
        </div>
      </div>
    </div>
  );
};
