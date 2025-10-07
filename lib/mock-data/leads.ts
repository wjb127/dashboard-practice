import type {
  Lead,
  VisitorData,
  SourceDistribution,
  DeviceDistribution,
  BrowserDistribution,
  LocationDistribution,
  FunnelData,
  ABTestData,
  DashboardStats
} from '@/types';

// Mock Leads Data
export const mockLeads: Lead[] = [
  {
    id: '1',
    name: '김철수',
    email: 'kim@example.com',
    phone: '010-1234-5678',
    source: 'organic',
    status: 'new',
    createdAt: new Date('2025-10-05'),
    metadata: {
      device: 'Desktop',
      browser: 'Chrome',
      location: '서울',
      referrer: 'google.com'
    }
  },
  {
    id: '2',
    name: '이영희',
    email: 'lee@example.com',
    phone: '010-2345-6789',
    source: 'paid',
    status: 'contacted',
    createdAt: new Date('2025-10-04'),
    metadata: {
      device: 'Mobile',
      browser: 'Safari',
      location: '부산',
      referrer: 'facebook.com'
    }
  },
  {
    id: '3',
    name: '박민수',
    email: 'park@example.com',
    source: 'referral',
    status: 'converted',
    createdAt: new Date('2025-10-03'),
    metadata: {
      device: 'Tablet',
      browser: 'Chrome',
      location: '대구',
      referrer: 'blog.example.com'
    }
  },
  {
    id: '4',
    name: '최지은',
    email: 'choi@example.com',
    phone: '010-4567-8901',
    source: 'direct',
    status: 'contacted',
    createdAt: new Date('2025-10-02'),
    metadata: {
      device: 'Desktop',
      browser: 'Firefox',
      location: '인천'
    }
  },
  {
    id: '5',
    name: '정수현',
    email: 'jung@example.com',
    source: 'organic',
    status: 'lost',
    createdAt: new Date('2025-10-01'),
    metadata: {
      device: 'Mobile',
      browser: 'Chrome',
      location: '광주',
      referrer: 'naver.com'
    }
  }
];

// Mock Visitor Data (for line chart)
export const mockVisitorData: VisitorData[] = [
  { date: '2025-09-28', visitors: 120, conversions: 12 },
  { date: '2025-09-29', visitors: 150, conversions: 18 },
  { date: '2025-09-30', visitors: 180, conversions: 22 },
  { date: '2025-10-01', visitors: 160, conversions: 20 },
  { date: '2025-10-02', visitors: 190, conversions: 25 },
  { date: '2025-10-03', visitors: 210, conversions: 28 },
  { date: '2025-10-04', visitors: 200, conversions: 30 },
  { date: '2025-10-05', visitors: 220, conversions: 32 },
  { date: '2025-10-06', visitors: 240, conversions: 35 },
  { date: '2025-10-07', visitors: 260, conversions: 40 }
];

// Mock Source Distribution (for pie chart)
export const mockSourceDistribution: SourceDistribution[] = [
  { source: 'organic', value: 450, percentage: 45 },
  { source: 'paid', value: 300, percentage: 30 },
  { source: 'referral', value: 150, percentage: 15 },
  { source: 'direct', value: 100, percentage: 10 }
];

// Mock Device Distribution
export const mockDeviceDistribution: DeviceDistribution[] = [
  { device: 'Desktop', count: 520, percentage: 52 },
  { device: 'Mobile', count: 380, percentage: 38 },
  { device: 'Tablet', count: 100, percentage: 10 }
];

// Mock Browser Distribution
export const mockBrowserDistribution: BrowserDistribution[] = [
  { browser: 'Chrome', count: 550, percentage: 55 },
  { browser: 'Safari', count: 250, percentage: 25 },
  { browser: 'Firefox', count: 120, percentage: 12 },
  { browser: 'Edge', count: 80, percentage: 8 }
];

// Mock Location Distribution
export const mockLocationDistribution: LocationDistribution[] = [
  { location: '서울', count: 450, percentage: 45 },
  { location: '부산', count: 200, percentage: 20 },
  { location: '대구', count: 150, percentage: 15 },
  { location: '인천', count: 100, percentage: 10 },
  { location: '광주', count: 100, percentage: 10 }
];

// Mock Funnel Data
export const mockFunnelData: FunnelData[] = [
  { stage: '방문', value: 1000, percentage: 100 },
  { stage: '관심', value: 500, percentage: 50 },
  { stage: '가입', value: 250, percentage: 25 }
];

// Mock A/B Test Data
export const mockABTestData: ABTestData[] = [
  { variant: 'A', visitors: 500, conversions: 50, conversionRate: 10 },
  { variant: 'B', visitors: 500, conversions: 75, conversionRate: 15 }
];

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalVisitors: 1950,
  conversionRate: 14.6,
  newLeads: 285,
  activeLeads: 156
};
