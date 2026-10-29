// ==========================================================================
// FILSY AUTOMATIC THEME MANAGER
// Automatically switches to dark mode at night (7 PM – 6 AM) or system dark mode.
// Also allows manual override via navbar toggle.
// ==========================================================================

export type ThemeMode = 'auto' | 'light' | 'dark';

export function isNightTime(): boolean {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 6;
}

export function getEffectiveTheme(preference: ThemeMode): 'light' | 'dark' {
  if (preference === 'light') return 'light';
  if (preference === 'dark') return 'dark';
  
  // Auto mode: check night time or system preference
  if (isNightTime()) return 'dark';
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function applyTheme(preference: ThemeMode) {
  const effective = getEffectiveTheme(preference);
  document.documentElement.setAttribute('data-theme', effective);
  document.documentElement.setAttribute('data-theme-preference', preference);
}

export function getStoredThemePreference(): ThemeMode {
  if (typeof window === 'undefined') return 'auto';
  const stored = localStorage.getItem('filsy_theme_mode') as ThemeMode;
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored;
  }
  return 'auto';
}

export function setStoredThemePreference(mode: ThemeMode) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('filsy_theme_mode', mode);
  }
  applyTheme(mode);
}
