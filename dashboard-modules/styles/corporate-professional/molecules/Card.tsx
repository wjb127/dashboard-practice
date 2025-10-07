import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Corporate Professional Card Component
 *
 * 특징:
 * - 직각 모서리 (rounded-sm)
 * - 두꺼운 border (border-2)
 * - 그림자 없음 (shadow-none)
 * - 명확한 header/content 분리
 */

export interface CorporateCardProps {
  /**
   * 카드 내용
   */
  children: ReactNode;

  /**
   * 추가 CSS 클래스
   */
  className?: string;

  /**
   * hover 효과 활성화
   */
  hoverable?: boolean;
}

export function CorporateCard({ children, className, hoverable = false }: CorporateCardProps) {
  return (
    <div
      className={cn(
        'bg-white border-2 border-slate-300 rounded-sm',
        hoverable && 'hover:border-slate-400 hover:bg-slate-50 transition-colors',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Card Header - 상단 타이틀 영역
 */
interface CorporateCardHeaderProps {
  children: ReactNode;
  className?: string;
  /**
   * 하단 border 표시
   */
  bordered?: boolean;
}

CorporateCard.Header = function CorporateCardHeader({
  children,
  className,
  bordered = true,
}: CorporateCardHeaderProps) {
  return (
    <div
      className={cn(
        'p-4',
        bordered && 'border-b-2 border-slate-300',
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Card Title - 제목
 */
interface CorporateCardTitleProps {
  children: ReactNode;
  className?: string;
}

CorporateCard.Title = function CorporateCardTitle({
  children,
  className,
}: CorporateCardTitleProps) {
  return (
    <h3 className={cn('text-lg font-bold text-slate-900 uppercase tracking-wide', className)}>
      {children}
    </h3>
  );
};

/**
 * Card Subtitle - 부제목
 */
interface CorporateCardSubtitleProps {
  children: ReactNode;
  className?: string;
}

CorporateCard.Subtitle = function CorporateCardSubtitle({
  children,
  className,
}: CorporateCardSubtitleProps) {
  return (
    <p className={cn('text-xs text-slate-500 mt-1 uppercase', className)}>
      {children}
    </p>
  );
};

/**
 * Card Content - 본문
 */
interface CorporateCardContentProps {
  children: ReactNode;
  className?: string;
}

CorporateCard.Content = function CorporateCardContent({
  children,
  className,
}: CorporateCardContentProps) {
  return <div className={cn('p-6', className)}>{children}</div>;
};

/**
 * Card Footer - 하단 액션 영역
 */
interface CorporateCardFooterProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

CorporateCard.Footer = function CorporateCardFooter({
  children,
  className,
  bordered = true,
}: CorporateCardFooterProps) {
  return (
    <div
      className={cn(
        'p-4',
        bordered && 'border-t-2 border-slate-300',
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * 사용 예시:
 *
 * <CorporateCard>
 *   <CorporateCard.Header>
 *     <CorporateCard.Title>Quarterly Report</CorporateCard.Title>
 *     <CorporateCard.Subtitle>Q4 2024</CorporateCard.Subtitle>
 *   </CorporateCard.Header>
 *   <CorporateCard.Content>
 *     내용...
 *   </CorporateCard.Content>
 *   <CorporateCard.Footer>
 *     <button>Download Report</button>
 *   </CorporateCard.Footer>
 * </CorporateCard>
 */
