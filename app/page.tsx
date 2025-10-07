'use client';

import { DashboardLayout } from '@/components/shared/dashboard-layout';
import { KPICard } from '@/components/dashboard/kpi-card';
import { LineChart } from '@/components/charts/line-chart';
import { PieChart } from '@/components/charts/pie-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockVisitorData, mockSourceDistribution } from '@/lib/mock-data/leads';
import { Users, TrendingUp, UserPlus, Activity } from 'lucide-react';
import type { KPIData } from '@/types';

export default function Home() {
  const kpiData: KPIData[] = [
    {
      title: '총 방문자',
      value: '1,234',
      change: 12.5,
      trend: 'up',
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: '전환율',
      value: '8.2%',
      change: 2.3,
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: '신규 가입자',
      value: '456',
      change: -3.1,
      trend: 'down',
      icon: <UserPlus className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: '활성 사용자',
      value: '892',
      change: 5.7,
      trend: 'up',
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const visitorChartData = mockVisitorData.map((item) => ({
    name: item.date,
    value: item.visitors,
    방문자: item.visitors,
    전환: item.conversions,
  }));

  const sourceChartData = mockSourceDistribution.map((item) => ({
    name: item.source,
    value: item.value,
  }));

  return (
    <DashboardLayout breadcrumbs={[{ title: 'Dashboard' }, { title: 'Overview' }]}>
      <div className="space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold">Overview</h1>
          <p className="text-muted-foreground">랜딩페이지 고객 DB 대시보드</p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((data, index) => (
            <KPICard key={index} data={data} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Visitor Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle>방문자 추이</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={visitorChartData}
                dataKeys={['방문자', '전환']}
                colors={['#3b82f6', '#10b981']}
                height={300}
              />
            </CardContent>
          </Card>

          {/* Source Distribution Chart */}
          <Card>
            <CardHeader>
              <CardTitle>유입 소스 분포</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={sourceChartData}
                height={300}
              />
            </CardContent>
          </Card>
        </div>

        {/* Real-time Visitors Widget */}
        <Card>
          <CardHeader>
            <CardTitle>실시간 방문자 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">현재 접속자</span>
                </div>
                <span className="text-2xl font-bold">127</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">페이지 뷰</span>
                  <span className="font-medium">342</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">평균 체류 시간</span>
                  <span className="font-medium">2분 34초</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">이탈률</span>
                  <span className="font-medium">42.3%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
