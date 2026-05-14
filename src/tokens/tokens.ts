/**
 * Cravo & Canella Design System — TypeScript Tokens
 * Gerado a partir das Figma Variables
 */

// ── COLORS ──────────────────────────────────────────────────────────

export const colorPrimitives = {
  brand: {
    offWhite: '#fffbf5',
    creme:    '#f8f0db',
    cocoa:    '#47250c',
    cc:       '#813623',
  },
  warm: {
    ocean:        '#6495ad',
    mostarda:     '#eab257',
    gingerQuente: '#be4b0c',
    sand:         '#f0d2ac',
  },
  cold: {
    gingerFria: '#965b3b',
  },
  neutral: {
    white: '#ffffff',
    black: '#1a1a1a',
    50:    '#fafaf9',
    100:   '#f5f4f2',
    150:   '#edecea',
    200:   '#e2e1de',
    300:   '#c8c6c2',
    400:   '#a8a5a0',
    500:   '#888480',
    600:   '#6b6865',
    700:   '#524f4d',
    800:   '#3a3836',
    850:   '#2e2c2a',
    900:   '#222120',
    950:   '#141312',
  },
  feedback: {
    successBg:     '#edf5e9',
    successText:   '#3f6436',
    successBorder: '#74b85a',
    successIcon:   '#4a9332',
    errorBg:       '#fcecea',
    errorText:     '#8b1c13',
    errorBorder:   '#d94f3d',
    errorIcon:     '#c0392b',
    warningBg:     '#fdf5e4',
    warningText:   '#7a4e0c',
    warningBorder: '#e8a020',
    warningIcon:   '#d4860a',
    infoBg:        '#eaf2f6',
    infoText:      '#1e4d62',
    infoBorder:    '#6495ad',
    infoIcon:      '#4a7f99',
  },
} as const;

export const colorSemantic = {
  background: {
    base:          'var(--color-background-base)',
    surface:       'var(--color-background-surface)',
    inverse:       'var(--color-background-inverse)',
    accent:        'var(--color-background-accent)',
    muted:         'var(--color-background-muted)',
    neutralSubtle: 'var(--color-background-neutral-subtle)',
    neutral:       'var(--color-background-neutral)',
    neutralStrong: 'var(--color-background-neutral-strong)',
  },
  text: {
    primary:            'var(--color-text-primary)',
    secondary:          'var(--color-text-secondary)',
    muted:              'var(--color-text-muted)',
    onDark:             'var(--color-text-on-dark)',
    link:               'var(--color-text-link)',
    linkHover:          'var(--color-text-link-hover)',
    neutralStrong:      'var(--color-text-neutral-strong)',
    neutral:            'var(--color-text-neutral)',
    neutralMuted:       'var(--color-text-neutral-muted)',
    neutralPlaceholder: 'var(--color-text-neutral-placeholder)',
    neutralDisabled:    'var(--color-text-neutral-disabled)',
  },
  border: {
    default:       'var(--color-border-default)',
    strong:        'var(--color-border-strong)',
    focus:         'var(--color-border-focus)',
    inverse:       'var(--color-border-inverse)',
    divider:       'var(--color-border-divider)',
    neutralSubtle: 'var(--color-border-neutral-subtle)',
    neutral:       'var(--color-border-neutral)',
    neutralStrong: 'var(--color-border-neutral-strong)',
  },
} as const;

// ── SPACING ──────────────────────────────────────────────────────────

export const spacing = {
  1:  'var(--spacing-1)',   // 4px
  2:  'var(--spacing-2)',   // 8px
  3:  'var(--spacing-3)',   // 12px
  4:  'var(--spacing-4)',   // 16px
  5:  'var(--spacing-5)',   // 20px
  6:  'var(--spacing-6)',   // 24px
  7:  'var(--spacing-7)',   // 28px
  8:  'var(--spacing-8)',   // 32px
  9:  'var(--spacing-9)',   // 36px
  10: 'var(--spacing-10)',  // 40px
  12: 'var(--spacing-12)',  // 48px
  14: 'var(--spacing-14)',  // 56px
  16: 'var(--spacing-16)',  // 64px
  20: 'var(--spacing-20)',  // 80px
  24: 'var(--spacing-24)',  // 96px
  32: 'var(--spacing-32)',  // 128px
} as const;

export type SpacingToken = keyof typeof spacing;

// ── RADIUS ────────────────────────────────────────────────────────────

export const radius = {
  none: 'var(--radius-none)', // 0px
  xs:   'var(--radius-xs)',   // 4px
  sm:   'var(--radius-sm)',   // 8px
  md:   'var(--radius-md)',   // 16px
  lg:   'var(--radius-lg)',   // 24px
  xl:   'var(--radius-xl)',   // 32px
  '2xl':'var(--radius-2xl)', // 40px
  full: 'var(--radius-full)', // 9999px
} as const;

export type RadiusToken = keyof typeof radius;

// ── ELEVATION ─────────────────────────────────────────────────────────

export const elevation = {
  none:  'var(--elevation-none)',
  xs:    'var(--elevation-xs)',
  sm:    'var(--elevation-sm)',
  md:    'var(--elevation-md)',
  lg:    'var(--elevation-lg)',
  xl:    'var(--elevation-xl)',
  focus: 'var(--elevation-focus)',
} as const;

export type ElevationToken = keyof typeof elevation;

// ── TYPOGRAPHY ────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    primary:   "'Polymath', sans-serif",
    editorial: "'Mokoko', serif",
  },
  fontSize: {
    display: '56px',
    h1: '40px', h2: '32px', h3: '24px',
    h4: '20px', h5: '16px', h6: '14px',
    bodyLg: '18px', bodyMd: '16px',
    bodySm: '14px', bodyXs: '12px',
    priceLg: '24px', priceMd: '18px', priceSm: '14px',
  },
  fontWeight: {
    light:   '300',
    regular: '400',
    medium:  '500',
    bold:    '700',
    black:   '900',
  },
  lineHeight: {
    tight:   '1.1',
    snug:    '1.2',
    normal:  '1.4',
    relaxed: '1.6',
  },
} as const;

// ── BREAKPOINTS ───────────────────────────────────────────────────────

export const breakpoints = {
  mobileSm:  320,
  mobile:    375,
  mobileLg:  430,
  tablet:    768,
  tabletLg:  1024,
  desktop:   1280,
  desktopLg: 1440,
  desktopXl: 1920,
} as const;

export type BreakpointToken = keyof typeof breakpoints;
