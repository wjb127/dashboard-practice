import { ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Corporate Professional KPI Card
 *
 * 주요 지표 표시용 카드
 * - 깔끔한 레이아웃
 * - 명확한 트렌드 인디케이터
 * - 상세 정보 포함
 */

export interface CorporateKPICardProps {
  /**
   * 지표 제목
   */
  title: string;

  /**
   * 주요 값
   */
  value: string | number;

  /**
   * 변화량 (예: "+12.5%")
   */
  change?: string;

  /**
   * 트렌드 방향
   */
  trend?: 'up' | 'down' | 'neutral';

  /**
   * 아이콘 (Lucide React Icon)
   */
  icon?: ReactNode;

  /**
   * 이전 기간 비교 텍스트
   */
  comparisonText?: string;

  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

export function CorporateKPICard({
  title,
  value,
  change,
  trend = 'neutral',
  icon,
  comparisonText = 'vs. last period',
  className,
}: CorporateKPICardProps) {
  const trendConfig = {
    up: {
      icon: <TrendingUp className="h-4 w-4 text-green-600" />,
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    down: {
      icon: <TrendingDown className="h-4 w-4 text-red-600" />,
      textColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    neutral: {
      icon: <Minus className="h-4 w-4 text-slate-500" />,
      textColor: 'text-slate-600',
      bgColor: 'bg-slate-50',
    },
  };

  const config = trendConfig[trend];

  return (
    <div className={cn('bg-white border-2 border-slate-300 rounded-sm p-6', className)}>
      {/* Header: Title & Icon */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {title}
          </p>
          <p className="text-3xl font-bold text-navy-900 mt-2">{value}</p>
        </div>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>

      {/* Footer: Change & Trend */}
      {change && (
        <div className="flex items-center mt-4 pt-4 border-t border-slate-200">
          {config.icon}
          <span className={cn('text-sm font-semibold ml-1', config.textColor)}>
            {change}
          </span>
          <span className="text-xs text-slate-500 ml-2">{comparisonText}</span>
        </div>
      )}
    </div>
  );
}

/**
 * 사용 예시:
 *
 * import { Users } from 'lucide-react';
 *
 * <CorporateKPICard
 *   title="Total Visitors"
 *   value="15,234"
 *   change="+12.5%"
 *   trend="up"
 *   icon={<Users className="h-10 w-10" />}
 *   comparisonText="vs. last quarter"
 * />
 */
