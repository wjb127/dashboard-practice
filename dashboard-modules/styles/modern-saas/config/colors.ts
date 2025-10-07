/**
 * Modern SaaS Color Tokens
 *
 * 깔끔하고 모던한 SaaS 스타일
 * 적합: 스타트업, SaaS 제품, B2B 서비스, 테크 회사
 */

export const modernSaasColors = {
  // Primary - Blue
  primary: '#3b82f6',           // blue-500
  primaryHover: '#2563eb',      // blue-600
  primaryLight: '#93c5fd',      // blue-300
  primaryDark: '#1e40af',       // blue-700

  // Secondary - Gray
  secondary: '#6b7280',         // gray-500
  secondaryHover: '#4b5563',    // gray-600

  // Success
  success: '#10b981',           // green-500
  successBg: '#d1fae5',         // green-100

  // Warning
  warning: '#f59e0b',           // amber-500
  warningBg: '#fef3c7',         // amber-100

  // Danger
  danger: '#ef4444',            // red-500
  dangerBg: '#fee2e2',          // red-100

  // Neutral/Background
  background: '#ffffff',        // white
  backgroundAlt: '#f9fafb',     // gray-50
  card: '#ffffff',              // white

  // Border
  border: '#e5e7eb',            // gray-200
  borderHover: '#d1d5db',       // gray-300

  // Text
  text: '#111827',              // gray-900
  textSecondary: '#6b7280',     // gray-500
  textMuted: '#9ca3af',         // gray-400

  // Chart Colors
  chart: {
    blue: '#3b82f6',
    green: '#10b981',
    amber: '#f59e0b',
    purple: '#8b5cf6',
    pink: '#ec4899',
  },
} as const;

/**
 * Tailwind 클래스 프리셋
 */
export const modernSaasTailwind = {
  // Button
  btnPrimary: 'bg-blue-500 hover:bg-blue-600 text-white',
  btnSecondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  btnDanger: 'bg-red-500 hover:bg-red-600 text-white',

  // Card
  card: 'bg-white rounded-lg border border-gray-200 shadow-sm',
  cardHover: 'hover:shadow-md transition-shadow',

  // Badge
  badgeSuccess: 'bg-green-100 text-green-700',
  badgeWarning: 'bg-amber-100 text-amber-700',
  badgeDanger: 'bg-red-100 text-red-700',
  badgeInfo: 'bg-blue-100 text-blue-700',
} as const;
