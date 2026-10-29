import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { getStoredThemePreference, applyTheme } from './services/themeService';

// Initialize auto day/night or user preference immediately
applyTheme(getStoredThemePreference());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
