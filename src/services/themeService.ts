// ==========================================================================
// FILSY FAST THEME MANAGER
// Immediate, rock-solid, zero-delay switcher between Light and Dark mode.
// ==========================================================================

export type ThemeMode = 'light' | 'dark';

export function getCurrentTheme(): ThemeMode {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr as ThemeMode;
  }
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('filsy_theme') || localStorage.getItem('filsy_theme_mode');
      if (stored === 'dark' || stored === 'light') return stored as ThemeMode;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch {}
  }
  return 'light';
}

export function setTheme(mode: ThemeMode) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', mode);
  }
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('filsy_theme', mode);
      localStorage.setItem('filsy_theme_mode', mode);
    } catch {}
  }
}

export function toggleTheme(): ThemeMode {
  const current = getCurrentTheme();
  const next: ThemeMode = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

// Backwards compatibility helpers
export const getStoredThemePreference = getCurrentTheme;
export const setStoredThemePreference = setTheme;
export const applyTheme = setTheme;
