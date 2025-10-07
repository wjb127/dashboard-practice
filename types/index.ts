// Lead Types
export type LeadStatus = 'new' | 'contacted' | 'converted' | 'lost';
export type LeadSource = 'organic' | 'paid' | 'referral' | 'direct';

export interface LeadMetadata {
  device: string;
  browser: string;
  location?: string;
  referrer?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: LeadSource;
  status: LeadStatus;
  createdAt: Date;
  metadata: LeadMetadata;
}

// Analytics Types
export interface VisitorData {
  date: string;
  visitors: number;
  conversions: number;
}

export interface SourceDistribution {
  source: LeadSource;
  value: number;
  percentage: number;
}

export interface DeviceDistribution {
  device: string;
  count: number;
  percentage: number;
}

export interface BrowserDistribution {
  browser: string;
  count: number;
  percentage: number;
}

export interface LocationDistribution {
  location: string;
  count: number;
  percentage: number;
}

export interface FunnelData {
  stage: string;
  value: number;
  percentage: number;
}

export interface ABTestData {
  variant: 'A' | 'B';
  visitors: number;
  conversions: number;
  conversionRate: number;
}

// KPI Types
export interface KPIData {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

// Dashboard Types
export interface DashboardStats {
  totalVisitors: number;
  conversionRate: number;
  newLeads: number;
  activeLeads: number;
}

// Chart Types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

// Date Range Types
export interface DateRange {
  from: Date;
  to: Date;
}

// Filter Types
export interface LeadFilters {
  status?: LeadStatus[];
  source?: LeadSource[];
  dateRange?: DateRange;
  searchQuery?: string;
}
