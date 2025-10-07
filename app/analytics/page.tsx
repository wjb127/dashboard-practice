'use client';

import { DashboardLayout } from '@/components/shared/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/charts/bar-chart';
import { PieChart } from '@/components/charts/pie-chart';
import { FunnelChart } from '@/components/charts/funnel-chart';
import {
  mockFunnelData,
  mockDeviceDistribution,
  mockBrowserDistribution,
  mockLocationDistribution,
  mockABTestData,
} from '@/lib/mock-data/leads';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

export default function AnalyticsPage() {
  // Transform data for charts
  const deviceChartData = mockDeviceDistribution.map(item => ({
    name: item.device,
    value: item.count,
  }));

  const browserChartData = mockBrowserDistribution.map(item => ({
    name: item.browser,
    value: item.count,
  }));

  const locationChartData = mockLocationDistribution.map(item => ({
    name: item.location,
    value: item.count,
    방문자: item.count,
  }));

  const funnelChartData = mockFunnelData.map(item => ({
    name: item.stage,
    value: item.value,
  }));

  const abTestChartData = mockABTestData.map(item => ({
    name: `버전 ${item.variant}`,
    value: item.visitors,
    방문자: item.visitors,
    전환: item.conversions,
  }));

  return (
    <DashboardLayout
      breadcrumbs={[
        { title: 'Dashboard', href: '/' },
        { title: 'Analytics' },
      ]}
    >
      <div className="space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">상세 분석 및 인사이트</p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 방문자</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,000</div>
              <p className="text-xs text-muted-foreground">전환 퍼널 시작</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">관심 표현</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">500</div>
              <p className="text-xs text-muted-foreground">50% 전환율</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">최종 가입</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">250</div>
              <p className="text-xs text-muted-foreground">25% 전환율</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">A/B 테스트 승자</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">버전 B</div>
              <p className="text-xs text-muted-foreground">+50% 전환 증가</p>
            </CardContent>
          </Card>
        </div>

        {/* Funnel Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>전환 퍼널 분석</CardTitle>
            <p className="text-sm text-muted-foreground">
              방문부터 가입까지의 사용자 여정
            </p>
          </CardHeader>
          <CardContent>
            <FunnelChart data={funnelChartData} />
          </CardContent>
        </Card>

        {/* Device & Browser Distribution */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>디바이스 분포</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={deviceChartData}
                colors={['#3b82f6', '#10b981', '#f59e0b']}
                height={300}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>브라우저 분포</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={browserChartData}
                colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']}
                height={300}
              />
            </CardContent>
          </Card>
        </div>

        {/* Location Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>지역별 방문자 분포</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={locationChartData}
              dataKeys={['방문자']}
              colors={['#3b82f6']}
              height={300}
            />
          </CardContent>
        </Card>

        {/* A/B Test Results */}
        <Card>
          <CardHeader>
            <CardTitle>A/B 테스트 결과 비교</CardTitle>
            <p className="text-sm text-muted-foreground">
              두 버전 간의 성능 비교 분석
            </p>
          </CardHeader>
          <CardContent>
            <BarChart
              data={abTestChartData}
              dataKeys={['방문자', '전환']}
              colors={['#3b82f6', '#10b981']}
              height={300}
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {mockABTestData.map((data) => (
                <div
                  key={data.variant}
                  className="rounded-lg border p-4"
                >
                  <h4 className="font-semibold mb-2">버전 {data.variant}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">방문자:</span>
                      <span className="font-medium">{data.visitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">전환:</span>
                      <span className="font-medium">{data.conversions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">전환율:</span>
                      <span className="font-medium">{data.conversionRate}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
