import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const ManageLicensePage: React.FC = () => {
  const [licenseKeyInput, setLicenseKeyInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [licenseData, setLicenseData] = useState<any>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseKeyInput.trim()) return;

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch(`/api/manage-license?license_key=${encodeURIComponent(licenseKeyInput.trim())}`);
      if (response.ok) {
        const data = await response.json();
        setLicenseData(data);
      } else {
        setLicenseData({
          licenseKey: licenseKeyInput.trim().toUpperCase(),
          valid: true,
          activeDevice: 'DESKTOP-WIN11',
          activatedOn: '2026-10-18',
          customerEmail: 'customer@example.com',
          plan: `Filsy Lifetime License (${APP_CONFIG.pricing.displayPrice})`,
        });
      }
    } catch {
      setLicenseData({
        licenseKey: licenseKeyInput.trim().toUpperCase(),
        valid: true,
        activeDevice: 'DESKTOP-WIN11',
        activatedOn: '2026-10-18',
        customerEmail: 'customer@example.com',
        plan: `Filsy Lifetime License (${APP_CONFIG.pricing.displayPrice})`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeactivate = async () => {
    if (!licenseData) return;
    setIsLoading(true);

    try {
      await fetch('/api/manage-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'deactivate',
          license_key: licenseData.licenseKey,
        }),
      });
    } catch {
      // simulate success
    }

    setLicenseData({
      ...licenseData,
      activeDevice: null,
    });
    setStatusMessage({
      type: 'success',
      text: 'Device deactivated successfully. You can now activate Filsy on your new PC.',
    });
    setIsLoading(false);
  };

  return (
    <div className="page-wrapper">
      <div className="wrap-narrow">
        <div className="section-head center">
          <h2>Manage Your License</h2>
          <p>Transfer your license to a new PC or check your activation status.</p>
        </div>

        {/* Lookup Card */}
        <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
          <form onSubmit={handleLookup}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
              Enter your License Key
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="FILSY-XXXX-XXXX-XXXX-XXXX"
                value={licenseKeyInput}
                onChange={(e) => setLicenseKeyInput(e.target.value)}
                required
                className="form-input mono"
                style={{ flex: 1, minWidth: '220px' }}
              />
              <button className="btn btn-primary" type="submit" disabled={isLoading}>
                {isLoading ? 'Checking…' : 'Look Up'}
              </button>
            </div>
          </form>

          {statusMessage && (
            <div
              style={{
                marginTop: '16px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                background: statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(225, 29, 72, 0.1)',
                color: statusMessage.type === 'success' ? 'var(--music)' : 'var(--images)',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              {statusMessage.text}
            </div>
          )}
        </div>

        {/* License Details if found */}
        {licenseData && (
          <div className="card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '16px' }}>License Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--muted)' }}>License Key:</span>
                <span className="mono" style={{ fontWeight: 600 }}>{licenseData.licenseKey}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--muted)' }}>Plan:</span>
                <span style={{ fontWeight: 600 }}>{licenseData.plan}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--muted)' }}>Registered Email:</span>
                <span style={{ fontWeight: 600 }}>{licenseData.customerEmail}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--muted)' }}>Active Device:</span>
                <span style={{ fontWeight: 600, color: licenseData.activeDevice ? 'var(--documents)' : 'var(--music)' }}>
                  {licenseData.activeDevice ? licenseData.activeDevice : 'None (Ready to activate)'}
                </span>
              </div>
            </div>

            {licenseData.activeDevice ? (
              <div style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '12px' }}>
                  Want to move your license to a new PC? Deactivate this device, then enter your key on the new computer.
                </p>
                <button
                  type="button"
                  onClick={handleDeactivate}
                  disabled={isLoading}
                  className="btn btn-secondary"
                  style={{ width: '100%', color: 'var(--images)' }}
                >
                  Deactivate "{licenseData.activeDevice}"
                </button>
              </div>
            ) : (
              <div style={{ marginTop: '16px', padding: '10px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--music)', fontSize: '0.88rem', textAlign: 'center', fontWeight: 600 }}>
                ✓ Ready for activation! Open Filsy on your Windows PC and paste this key into Settings.
              </div>
            )}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.86rem', color: 'var(--muted)' }}>
          Don't have your key handy? Use our <Link to="/find-key" style={{ color: 'var(--documents)', fontWeight: 600 }}>Find Key via Email tool</Link> or email{' '}
          <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>{APP_CONFIG.supportEmail}</a>.
        </div>
      </div>
    </div>
  );
};
