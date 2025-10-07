'use client';

import { TrendingUp, Users, Target, Crown } from 'lucide-react';
import { LineChart } from '@/components/charts/line-chart';
import { AreaChart } from '@/components/charts/area-chart';
import { mockVisitorData } from '@/lib/mock-data/leads';

export default function DarkPremiumStylePage() {
  const visitorChartData = mockVisitorData.map((item) => ({
    name: item.date,
    value: item.visitors,
    방문자: item.visitors,
    전환: item.conversions,
  }));

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      {/* Header */}
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <Crown className="h-12 w-12 text-yellow-400" style={{ filter: 'drop-shadow(0 0 10px rgba(250, 204, 21, 0.5))' }} />
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Premium Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Dark Premium Style</p>
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10 hover:border-yellow-400/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-10 w-10 text-yellow-400" />
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
            Total Visitors
          </h3>
          <p className="text-white text-4xl font-bold mb-2">15.2K</p>
          <p className="text-yellow-400 text-sm font-semibold">↑ 12.5%</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10 hover:border-yellow-400/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-10 w-10 text-purple-400" />
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
            Conversion Rate
          </h3>
          <p className="text-white text-4xl font-bold mb-2">8.4%</p>
          <p className="text-purple-400 text-sm font-semibold">↑ 2.3%</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10 hover:border-yellow-400/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <Crown className="h-10 w-10 text-yellow-400" />
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
            Premium Users
          </h3>
          <p className="text-white text-4xl font-bold mb-2">1,284</p>
          <p className="text-yellow-400 text-sm font-semibold">↑ 45%</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10 hover:border-yellow-400/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-10 w-10 text-emerald-400" />
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
            Revenue
          </h3>
          <p className="text-white text-4xl font-bold mb-2">$89K</p>
          <p className="text-emerald-400 text-sm font-semibold">↑ 31%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Trends */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Visitor Analytics</h3>
            <div className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
              <span className="text-xs font-bold text-yellow-400">PREMIUM</span>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <LineChart
              data={visitorChartData}
              dataKeys={['방문자', '전환']}
              colors={['#fbbf24', '#a855f7']}
              height={300}
            />
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Growth Trajectory</h3>
            <div className="px-3 py-1 bg-purple-400/10 border border-purple-400/30 rounded-full">
              <span className="text-xs font-bold text-purple-400">ELITE</span>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <AreaChart
              data={visitorChartData}
              dataKeys={['방문자']}
              colors={['#a855f7']}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Premium Features */}
      <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-yellow-400/5">
        <div className="flex items-center gap-2 mb-6">
          <Crown className="h-6 w-6 text-yellow-400" />
          <h3 className="text-xl font-bold text-white">Exclusive Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Customer LTV</p>
            <p className="text-white text-3xl font-bold">$2,450</p>
            <p className="text-yellow-400 text-xs mt-2">Top 10% Tier</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Retention Rate</p>
            <p className="text-white text-3xl font-bold">94.2%</p>
            <p className="text-purple-400 text-xs mt-2">Elite Status</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-400/10 to-teal-500/10 border border-emerald-400/20 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">NPS Score</p>
            <p className="text-white text-3xl font-bold">+72</p>
            <p className="text-emerald-400 text-xs mt-2">World Class</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/styles"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-yellow-400/50 transition-all"
        >
          ← Back to Gallery
        </a>
      </div>
    </div>
  );
}
