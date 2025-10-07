import { ReactNode } from 'react';
import { CorporateCard } from '../molecules/Card';
import { CorporateKPICard } from '../organisms/KPICard';

/**
 * Corporate Professional Overview Template
 *
 * 전체 페이지 레이아웃 템플릿
 * - Header
 * - KPI Grid (4개)
 * - Chart Section (2-column)
 * - Data Table
 */

export interface KPIData {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
}

export interface CorporateOverviewTemplateProps {
  /**
   * 페이지 제목
   */
  title: string;

  /**
   * 페이지 부제목
   */
  subtitle?: string;

  /**
   * 마지막 업데이트 시간
   */
  lastUpdated?: string;

  /**
   * KPI 데이터 (최대 4개 권장)
   */
  kpis: KPIData[];

  /**
   * 왼쪽 차트 영역
   */
  leftChart: {
    title: string;
    subtitle?: string;
    content: ReactNode;
  };

  /**
   * 오른쪽 차트 영역
   */
  rightChart: {
    title: string;
    subtitle?: string;
    content: ReactNode;
  };

  /**
   * 하단 데이터 테이블 (optional)
   */
  dataTable?: {
    title: string;
    content: ReactNode;
  };

  /**
   * 추가 콘텐츠 (optional)
   */
  additionalContent?: ReactNode;
}

export function CorporateOverviewTemplate({
  title,
  subtitle,
  lastUpdated,
  kpis,
  leftChart,
  rightChart,
  dataTable,
  additionalContent,
}: CorporateOverviewTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header */}
      <header className="border-b-2 border-slate-300 pb-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight uppercase">
              {title}
            </h1>
            {subtitle && (
              <p className="text-slate-600 mt-2 text-sm uppercase tracking-wide">
                {subtitle}
              </p>
            )}
          </div>
          {lastUpdated && (
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase">Last Updated</p>
              <p className="text-sm font-semibold text-slate-700">{lastUpdated}</p>
            </div>
          )}
        </div>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <CorporateKPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Left Chart */}
        <CorporateCard>
          <CorporateCard.Header>
            <CorporateCard.Title>{leftChart.title}</CorporateCard.Title>
            {leftChart.subtitle && (
              <CorporateCard.Subtitle>{leftChart.subtitle}</CorporateCard.Subtitle>
            )}
          </CorporateCard.Header>
          <CorporateCard.Content>{leftChart.content}</CorporateCard.Content>
        </CorporateCard>

        {/* Right Chart */}
        <CorporateCard>
          <CorporateCard.Header>
            <CorporateCard.Title>{rightChart.title}</CorporateCard.Title>
            {rightChart.subtitle && (
              <CorporateCard.Subtitle>{rightChart.subtitle}</CorporateCard.Subtitle>
            )}
          </CorporateCard.Header>
          <CorporateCard.Content>{rightChart.content}</CorporateCard.Content>
        </CorporateCard>
      </div>

      {/* Data Table (Optional) */}
      {dataTable && (
        <CorporateCard className="mb-8">
          <CorporateCard.Header>
            <CorporateCard.Title>{dataTable.title}</CorporateCard.Title>
          </CorporateCard.Header>
          {dataTable.content}
        </CorporateCard>
      )}

      {/* Additional Content (Optional) */}
      {additionalContent}
    </div>
  );
}

/**
 * 사용 예시:
 *
 * import { LineChart } from '@/components/charts/line-chart';
 * import { Users, Target, DollarSign } from 'lucide-react';
 *
 * <CorporateOverviewTemplate
 *   title="Executive Dashboard"
 *   subtitle="Q4 2024"
 *   lastUpdated="2024-10-08"
 *   kpis={[
 *     {
 *       title: 'Total Visitors',
 *       value: '15,234',
 *       change: '+12.5%',
 *       trend: 'up',
 *       icon: <Users className="h-10 w-10" />,
 *     },
 *     // ... more KPIs
 *   ]}
 *   leftChart={{
 *     title: 'Visitor Trends Analysis',
 *     subtitle: '30-Day Period',
 *     content: <LineChart data={data} />,
 *   }}
 *   rightChart={{
 *     title: 'Traffic Source Distribution',
 *     subtitle: 'By Channel',
 *     content: <BarChart data={data} />,
 *   }}
 *   dataTable={{
 *     title: 'Key Performance Indicators',
 *     content: <DataTable data={data} />,
 *   }}
 * />
 */
