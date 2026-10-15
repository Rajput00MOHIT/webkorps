/**
 * Webkorps Design System - TypeScript Design Tokens
 * Source of truth matching `src/styles/tokens.css`
 * Primary Brand Color: #1A87C8
 */

export const COLORS = {
  brand: {
    primary: '#1A87C8',
    primaryRgb: '26, 135, 200',
    primaryHover: '#1572a8',
    primaryActive: '#0f5c88',
    primaryLight: '#E7F6FF',
    primarySubtle: '#F0F8FD',
    secondary: '#0B132B',
    secondaryHover: '#050b1a',
    accent: '#1A87C8',
  },
  bg: {
    canvas: '#FFFFFF',
    subtle: '#F8FAFC',
    muted: '#F1F5F9',
    card: '#FFFFFF',
    elevated: '#FFFFFF',
    glass: 'rgba(255, 255, 255, 0.85)',
  },
  text: {
    primary: '#0F172A',
    secondary: '#334155',
    muted: '#64748B',
    light: '#94A3B8',
    white: '#FFFFFF',
    brand: '#1A87C8',
  },
  border: {
    subtle: '#EDF2F7',
    default: '#E2E8F0',
    strong: '#CBD5E1',
    brand: '#1A87C8',
  },
  status: {
    success: '#10B981',
    successBg: '#ECFDF5',
    warning: '#F59E0B',
    warningBg: '#FFFBEB',
    error: '#EF4444',
    errorBg: '#FEF2F2',
    info: '#1A87C8',
    infoBg: '#EFF6FF',
  },
  interactive: {
    focusRing: 'rgba(26, 135, 200, 0.4)',
    cardHoverBorder: 'rgba(26, 135, 200, 0.35)',
  },
} as const;

export const RADIUS = {
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
} as const;

export const SHADOWS = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
  card: '0 4px 24px 0 rgba(15, 23, 42, 0.04)',
  cardHover: '0 12px 32px 0 rgba(26, 135, 200, 0.16)',
  ctaPrimary: '0 4px 14px rgba(26, 135, 200, 0.28)',
  ctaGlow: '0 6px 20px rgba(26, 135, 200, 0.4)',
} as const;

export const TRANSITIONS = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: '350ms cubic-bezier(0.16, 1, 0.3, 1)',
  bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export type ColorTokens = typeof COLORS;
export type RadiusTokens = typeof RADIUS;
export type ShadowTokens = typeof SHADOWS;
