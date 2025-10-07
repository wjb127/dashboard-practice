import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Corporate Professional Button Component
 *
 * 보수적이고 전문적인 버튼 스타일
 * - 직각 모서리 (rounded-sm)
 * - 두꺼운 font-weight
 * - 대문자 + letter-spacing
 * - 그림자 없음
 */

export interface CorporateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 variant
   * - primary: 네이비 배경 (주요 액션)
   * - secondary: 그레이 배경 (보조 액션)
   * - outline: 테두리만 (취소 등)
   */
  variant?: 'primary' | 'secondary' | 'outline';

  /**
   * 버튼 크기
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * 전체 너비 사용
   */
  fullWidth?: boolean;

  /**
   * 로딩 상태
   */
  loading?: boolean;

  /**
   * 버튼 내용
   */
  children: ReactNode;
}

export function CorporateButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  ...props
}: CorporateButtonProps) {
  const baseClasses = 'font-semibold uppercase tracking-wide transition-colors rounded-sm';

  const variantClasses = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 disabled:bg-slate-400',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 disabled:bg-slate-100',
    outline:
      'border-2 border-navy-900 text-navy-900 bg-transparent hover:bg-navy-900 hover:text-white disabled:border-slate-300 disabled:text-slate-400',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        loading && 'opacity-70 cursor-wait',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

/**
 * 사용 예시:
 *
 * <CorporateButton variant="primary" size="md">
 *   Submit Report
 * </CorporateButton>
 *
 * <CorporateButton variant="outline" size="lg" fullWidth>
 *   Cancel Operation
 * </CorporateButton>
 *
 * <CorporateButton variant="secondary" loading>
 *   Processing
 * </CorporateButton>
 */
