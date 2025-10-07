/**
 * Corporate Professional Color Tokens
 *
 * 보수적이고 신뢰감 있는 컬러 시스템
 * 적합: 금융, 법률, 컨설팅, 대기업
 */

export const corporateColors = {
  // Primary Colors
  primary: '#1e3a8a',           // navy-900 - 메인 브랜드 컬러
  primaryHover: '#1e40af',      // navy-800
  secondary: '#64748b',         // slate-500 - 보조 컬러
  secondaryHover: '#475569',    // slate-600

  // Accent Colors
  accent: '#0891b2',            // cyan-600 - 강조 컬러
  accentHover: '#0e7490',       // cyan-700

  // Background Colors
  background: '#f8fafc',        // slate-50 - 페이지 배경
  card: '#ffffff',              // 카드 배경
  cardHover: '#f1f5f9',         // slate-100

  // Border Colors
  border: '#cbd5e1',            // slate-300 - 기본 border
  borderStrong: '#94a3b8',      // slate-400 - 강조 border
  borderTable: '#e2e8f0',       // slate-200 - 테이블 border

  // Text Colors
  text: '#0f172a',              // slate-900 - 주 텍스트
  textSecondary: '#475569',     // slate-600 - 보조 텍스트
  textMuted: '#64748b',         // slate-500 - 연한 텍스트
  textLight: '#94a3b8',         // slate-400 - 매우 연한 텍스트

  // Status Colors
  success: '#059669',           // green-600
  successBg: '#d1fae5',         // green-100
  warning: '#d97706',           // amber-600
  warningBg: '#fef3c7',         // amber-100
  danger: '#dc2626',            // red-600
  dangerBg: '#fee2e2',          // red-100
  info: '#2563eb',              // blue-600
  infoBg: '#dbeafe',            // blue-100
} as const;

export type CorporateColorKey = keyof typeof corporateColors;

/**
 * Tailwind CSS 클래스 매핑
 */
export const corporateTailwindClasses = {
  // Backgrounds
  bgPrimary: 'bg-navy-900',
  bgSecondary: 'bg-slate-50',
  bgCard: 'bg-white',
  bgAccent: 'bg-slate-100',

  // Text
  textPrimary: 'text-slate-900',
  textSecondary: 'text-slate-600',
  textMuted: 'text-slate-500',
  textLight: 'text-slate-400',

  // Borders
  border: 'border-2 border-slate-300',
  borderStrong: 'border-2 border-slate-400',
  borderRounded: 'rounded-sm',

  // Buttons
  btnPrimary: 'bg-navy-900 text-white hover:bg-navy-800',
  btnSecondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
  btnOutline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',

  // Shadows (minimal)
  shadowNone: 'shadow-none',
  shadowSm: 'shadow-sm',
} as const;

/**
 * CSS 변수로 export (optional)
 */
export const corporateCSSVariables = `
:root {
  --corporate-primary: ${corporateColors.primary};
  --corporate-secondary: ${corporateColors.secondary};
  --corporate-accent: ${corporateColors.accent};
  --corporate-background: ${corporateColors.background};
  --corporate-card: ${corporateColors.card};
  --corporate-border: ${corporateColors.border};
  --corporate-text: ${corporateColors.text};
}
`;
