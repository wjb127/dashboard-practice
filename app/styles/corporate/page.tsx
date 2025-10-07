'use client';

import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import { LineChart } from '@/components/charts/line-chart';
import { BarChart } from '@/components/charts/bar-chart';
import { mockVisitorData, mockSourceDistribution } from '@/lib/mock-data/leads';

export default function CorporateStylePage() {
  const visitorChartData = mockVisitorData.map((item) => ({
    name: item.date,
    value: item.visitors,
    방문자: item.visitors,
    전환: item.conversions,
  }));

  const sourceChartData = mockSourceDistribution.map((item) => ({
    name: item.source,
    value: item.percentage,
    점유율: item.percentage,
  }));

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header */}
      <header className="border-b-2 border-slate-300 pb-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight uppercase">
              EXECUTIVE DASHBOARD
            </h1>
            <p className="text-slate-600 mt-2 text-sm uppercase tracking-wide">
              Corporate Professional Style | Q4 2024
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase">Last Updated</p>
            <p className="text-sm font-semibold text-slate-700">2024-10-08</p>
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border-2 border-slate-300 rounded-sm p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Total Visitors
              </p>
              <p className="text-3xl font-bold text-navy-900 mt-2">15,234</p>
            </div>
            <Users className="h-10 w-10 text-slate-400" />
          </div>
          <div className="flex items-center mt-4 pt-4 border-t border-slate-200">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-semibold text-green-600">+12.5%</span>
            <span className="text-xs text-slate-500 ml-2">vs. last period</span>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-300 rounded-sm p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Conversion Rate
              </p>
              <p className="text-3xl font-bold text-navy-900 mt-2">8.4%</p>
            </div>
            <Target className="h-10 w-10 text-slate-400" />
          </div>
          <div className="flex items-center mt-4 pt-4 border-t border-slate-200">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-semibold text-green-600">+2.3%</span>
            <span className="text-xs text-slate-500 ml-2">vs. last period</span>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-300 rounded-sm p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                New Accounts
              </p>
              <p className="text-3xl font-bold text-navy-900 mt-2">1,284</p>
            </div>
            <Users className="h-10 w-10 text-slate-400" />
          </div>
          <div className="flex items-center mt-4 pt-4 border-t border-slate-200">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-semibold text-green-600">+8.7%</span>
            <span className="text-xs text-slate-500 ml-2">vs. last period</span>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-300 rounded-sm p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Revenue (USD)
              </p>
              <p className="text-3xl font-bold text-navy-900 mt-2">$89,452</p>
            </div>
            <DollarSign className="h-10 w-10 text-slate-400" />
          </div>
          <div className="flex items-center mt-4 pt-4 border-t border-slate-200">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-semibold text-green-600">+15.2%</span>
            <span className="text-xs text-slate-500 ml-2">vs. last period</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Trends */}
        <div className="bg-white border-2 border-slate-300 rounded-sm">
          <div className="border-b-2 border-slate-300 p-4">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
              Visitor Trends Analysis
            </h3>
            <p className="text-xs text-slate-500 mt-1 uppercase">30-Day Period</p>
          </div>
          <div className="p-6">
            <LineChart
              data={visitorChartData}
              dataKeys={['방문자', '전환']}
              colors={['#1e3a8a', '#0891b2']}
              height={300}
            />
          </div>
        </div>

        {/* Source Distribution */}
        <div className="bg-white border-2 border-slate-300 rounded-sm">
          <div className="border-b-2 border-slate-300 p-4">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
              Traffic Source Distribution
            </h3>
            <p className="text-xs text-slate-500 mt-1 uppercase">By Channel</p>
          </div>
          <div className="p-6">
            <BarChart
              data={sourceChartData}
              dataKeys={['점유율']}
              colors={['#1e3a8a']}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-6 bg-white border-2 border-slate-300 rounded-sm">
        <div className="border-b-2 border-slate-300 p-4">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
            Key Performance Indicators
          </h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 border-b-2 border-slate-300">
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                Metric
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-slate-700 uppercase tracking-wider">
                Current
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-slate-700 uppercase tracking-wider">
                Previous
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-slate-700 uppercase tracking-wider">
                Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr className="hover:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">Page Views</td>
              <td className="px-6 py-4 text-sm text-right text-slate-700">45,678</td>
              <td className="px-6 py-4 text-sm text-right text-slate-700">42,134</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">
                +8.4%
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">Unique Visitors</td>
              <td className="px-6 py-4 text-sm text-right text-slate-700">15,234</td>
              <td className="px-6 py-4 text-sm text-right text-slate-700">13,546</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">
                +12.5%
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">Bounce Rate</td>
              <td className="px-6 py-4 text-sm text-right text-slate-700">42.3%</td>
              <td className="px-6 py-4 text-sm text-right text-slate-700">45.8%</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">
                -3.5%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/styles"
          className="inline-block bg-navy-900 text-white px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-wide hover:bg-navy-800 transition-colors"
        >
          ← Return to Gallery
        </a>
      </div>
    </div>
  );
}
