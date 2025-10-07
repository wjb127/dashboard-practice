import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Soft Pastel Card Component
 *
 * 특징:
 * - 둥근 모서리 (rounded-3xl)
 * - 부드러운 border
 * - 파스텔 그래디언트 배경 옵션
 * - 미묘한 그림자
 */

export interface SoftPastelCardProps {
  children: ReactNode;
  className?: string;
  /**
   * 그래디언트 variant
   */
  variant?: 'default' | 'pink' | 'purple' | 'blue' | 'peach' | 'mint';
  /**
   * hover 애니메이션
   */
  hoverable?: boolean;
}

export function SoftPastelCard({
  children,
  className,
  variant = 'default',
  hoverable = false,
}: SoftPastelCardProps) {
  const variantClasses = {
    default: 'bg-white border border-pink-200',
    pink: 'bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-300',
    purple: 'bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300',
    blue: 'bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300',
    peach: 'bg-gradient-to-br from-orange-100 to-orange-200 border border-orange-300',
    mint: 'bg-gradient-to-br from-green-100 to-green-200 border border-green-300',
  };

  return (
    <div
      className={cn(
        'rounded-3xl p-6 shadow-lg',
        variantClasses[variant],
        hoverable && 'hover:shadow-xl hover:-translate-y-1 transition-all',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * 사용 예시:
 *
 * <SoftPastelCard variant="pink" hoverable>
 *   <h3>Lovely Card</h3>
 *   <p>Content...</p>
 * </SoftPastelCard>
 */
