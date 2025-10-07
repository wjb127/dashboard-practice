'use client';

import { TrendingUp, Users, Target, Award } from 'lucide-react';
import { LineChart } from '@/components/charts/line-chart';
import { PieChart } from '@/components/charts/pie-chart';
import { mockVisitorData, mockSourceDistribution } from '@/lib/mock-data/leads';

export default function BoldGradientStylePage() {
  const visitorChartData = mockVisitorData.map((item) => ({
    name: item.date,
    value: item.visitors,
    방문자: item.visitors,
    전환: item.conversions,
  }));

  const sourceChartData = mockSourceDistribution.map((item) => ({
    name: item.source,
    value: item.percentage,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-5xl font-black text-white mb-2 drop-shadow-lg">
          DASHBOARD
        </h1>
        <p className="text-xl text-pink-200">Bold Gradient Style</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-12 w-12 text-white" />
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-2">
            Total Visitors
          </h3>
          <p className="text-white text-4xl font-black">15.2K</p>
          <p className="text-yellow-100 text-sm mt-2 font-bold">+23.5% 증가</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-12 w-12 text-white" />
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-2">
            Conversion Rate
          </h3>
          <p className="text-white text-4xl font-black">8.4%</p>
          <p className="text-cyan-100 text-sm mt-2 font-bold">+12% 상승</p>
        </div>

        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Award className="h-12 w-12 text-white" />
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-2">
            New Signups
          </h3>
          <p className="text-white text-4xl font-black">1,284</p>
          <p className="text-green-100 text-sm mt-2 font-bold">+45% 급증</p>
        </div>

        <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-12 w-12 text-white" />
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-2">
            Revenue
          </h3>
          <p className="text-white text-4xl font-black">$89K</p>
          <p className="text-pink-100 text-sm mt-2 font-bold">+31% 성장</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Trends */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
          <h3 className="text-2xl font-black text-white mb-4 uppercase">
            방문자 추이
          </h3>
          <div className="bg-white/5 rounded-xl p-4">
            <LineChart
              data={visitorChartData}
              dataKeys={['방문자', '전환']}
              colors={['#fbbf24', '#f472b6']}
              height={300}
            />
          </div>
        </div>

        {/* Source Distribution */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
          <h3 className="text-2xl font-black text-white mb-4 uppercase">
            유입 소스
          </h3>
          <div className="bg-white/5 rounded-xl p-4">
            <PieChart
              data={sourceChartData}
              colors={['#fbbf24', '#f472b6', '#34d399', '#60a5fa']}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/styles"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-black text-lg shadow-2xl hover:scale-110 transition-transform uppercase"
        >
          ← Back to Gallery
        </a>
      </div>
    </div>
  );
}
