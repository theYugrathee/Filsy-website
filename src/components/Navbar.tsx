import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import {
  getStoredThemePreference,
  setStoredThemePreference,
  type ThemeMode
} from '../services/themeService';
import { Menu, X, Sun, Moon, Sparkles, Download, KeyRound } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('auto');

  useEffect(() => {
    setCurrentTheme(getStoredThemePreference());
  }, []);

  const toggleTheme = () => {
    const next = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'auto' : 'light';
    setCurrentTheme(next);
    setStoredThemePreference(next);
  };

  const handleBuy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await initiateCheckout('USD');
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="site-nav">
          {/* Brand Logo */}
          <Link to="/" className="logo-brand" onClick={closeMobile}>
            <img src="/app-icon.png" alt="Filsy" className="logo-img" />
            <span>{APP_CONFIG.productName}</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <a href={isHome ? "#features" : "/#features"}>Features</a>
            <a href={isHome ? "#compare" : "/#compare"}>vs Explorer</a>
            <a href={isHome ? "#how" : "/#how"}>How it works</a>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">FAQ</Link>

            {/* Sun / Moon Theme Toggle */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Current theme: ${currentTheme} (Auto day/night). Click to change.`}
              aria-label="Toggle light/dark theme"
            >
              {currentTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Find Key Button */}
            <Link
              to="/find-key"
              className="btn btn-secondary btn-sm"
              style={{ gap: '6px' }}
              id="navFindKeyBtn"
            >
              <KeyRound size={14} />
              <span>Find Key</span>
            </Link>

            {/* Get License Button */}
            <button
              type="button"
              id="navBuyBtn"
              onClick={handleBuy}
              className="btn btn-primary btn-sm"
              style={{ gap: '6px' }}
            >
              <Sparkles size={14} />
              <span>Get License</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className="theme-toggle-btn"
              style={{ display: 'none' }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {currentTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href={isHome ? "#features" : "/#features"} onClick={closeMobile}>
            Features
          </a>
          <a href={isHome ? "#compare" : "/#compare"} onClick={closeMobile}>
            vs Explorer
          </a>
          <a href={isHome ? "#how" : "/#how"} onClick={closeMobile}>
            How it works
          </a>
          <Link to="/pricing" onClick={closeMobile}>
            Pricing ({APP_CONFIG.pricing.displayPrice})
          </Link>
          <Link to="/manage-license" onClick={closeMobile}>
            Manage License
          </Link>
          <Link to="/changelog" onClick={closeMobile}>
            Changelog
          </Link>
          <Link to="/faq" onClick={closeMobile}>
            FAQ
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
            <span style={{ fontSize: '0.94rem', color: 'var(--muted)' }}>Theme mode:</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-secondary btn-sm"
              style={{ gap: '6px' }}
            >
              {currentTheme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
              <span>{currentTheme === 'auto' ? 'Auto (Day/Night)' : currentTheme}</span>
            </button>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              to="/find-key"
              onClick={closeMobile}
              className="btn btn-secondary"
              style={{ width: '100%', gap: '8px', justifyContent: 'center' }}
            >
              <KeyRound size={16} />
              <span>Find My License Key</span>
            </Link>
            <button
              type="button"
              onClick={(e) => {
                closeMobile();
                handleBuy(e);
              }}
              className="btn btn-primary"
              style={{ width: '100%', gap: '6px' }}
            >
              <Sparkles size={16} />
              <span>Get License Key (Pay What You Want)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
