/**
 * Soft Pastel Color Tokens
 *
 * 부드럽고 따뜻한 파스텔 톤
 * 적합: 뷰티, 화장품, 베이커리, 카페, 육아, 교육, 웰니스
 */

export const softPastelColors = {
  // Pink Tones
  pink: {
    50: '#fef3f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
  },

  // Purple/Lavender Tones
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c4b5fd',
    500: '#a78bfa',
  },

  // Blue/Sky Tones
  blue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
  },

  // Peach/Coral Tones
  peach: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
  },

  // Mint/Green Tones
  mint: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
  },

  // Neutral/Base
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    500: '#737373',
    700: '#404040',
    900: '#171717',
  },
} as const;

/**
 * 그래디언트 프리셋
 */
export const softPastelGradients = {
  pinkPurple: 'bg-gradient-to-r from-pink-300 to-purple-300',
  bluePink: 'bg-gradient-to-br from-blue-200 to-pink-200',
  peachMint: 'bg-gradient-to-r from-peach-200 to-mint-200',
  purpleBlue: 'bg-gradient-to-br from-purple-100 to-blue-100',
  pinkPeach: 'bg-gradient-to-r from-pink-200 to-peach-200',
};

/**
 * 사용 예시
 */
export const softPastelUsage = {
  background: softPastelColors.pink[50],        // 연핑크 배경
  card: '#ffffff',                              // 화이트 카드
  primaryButton: softPastelGradients.pinkPurple, // 핑크-퍼플 그래디언트 버튼
  accentIcon: softPastelColors.pink[400],       // 핑크 아이콘
  text: softPastelColors.neutral[700],          // 다크 그레이 텍스트
  textMuted: softPastelColors.neutral[500],     // 연한 그레이
};
