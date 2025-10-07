'use client';

import { TrendingUp, Users, Target, Zap } from 'lucide-react';
import { LineChart } from '@/components/charts/line-chart';
import { PieChart } from '@/components/charts/pie-chart';
import { mockVisitorData, mockSourceDistribution } from '@/lib/mock-data/leads';

export default function GlassmorphismStylePage() {
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
    <div
      className="min-h-screen p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '3s' }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="mb-8">
          <div
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <h1 className="text-5xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-xl text-white/80">Glassmorphism Style</p>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:bg-white/15 transition-all">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-12 w-12 text-white drop-shadow-lg" />
              <TrendingUp className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="text-white/80 text-sm font-semibold mb-2">Total Visitors</h3>
            <p className="text-white text-4xl font-bold mb-2">15.2K</p>
            <p className="text-emerald-300 text-sm font-semibold">+12.5% this month</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:bg-white/15 transition-all">
            <div className="flex items-center justify-between mb-4">
              <Target className="h-12 w-12 text-white drop-shadow-lg" />
              <TrendingUp className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="text-white/80 text-sm font-semibold mb-2">Conversion</h3>
            <p className="text-white text-4xl font-bold mb-2">8.4%</p>
            <p className="text-emerald-300 text-sm font-semibold">+2.3% increase</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:bg-white/15 transition-all">
            <div className="flex items-center justify-between mb-4">
              <Zap className="h-12 w-12 text-white drop-shadow-lg" />
              <TrendingUp className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="text-white/80 text-sm font-semibold mb-2">Signups</h3>
            <p className="text-white text-4xl font-bold mb-2">1,284</p>
            <p className="text-emerald-300 text-sm font-semibold">+45% growth</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:bg-white/15 transition-all">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-12 w-12 text-white drop-shadow-lg" />
              <TrendingUp className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="text-white/80 text-sm font-semibold mb-2">Revenue</h3>
            <p className="text-white text-4xl font-bold mb-2">$89K</p>
            <p className="text-emerald-300 text-sm font-semibold">+31% boost</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Visitor Trends */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Visitor Trends</h3>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4">
              <LineChart
                data={visitorChartData}
                dataKeys={['방문자', '전환']}
                colors={['#ffffff', '#a7f3d0']}
                height={300}
              />
            </div>
          </div>

          {/* Source Distribution */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Traffic Sources</h3>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4">
              <PieChart
                data={sourceChartData}
                colors={['#a7f3d0', '#fbcfe8', '#fde68a', '#bfdbfe']}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-white/70 text-sm mb-1">Avg. Session</p>
              <p className="text-white text-2xl font-bold">3m 24s</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-white/70 text-sm mb-1">Pages/Visit</p>
              <p className="text-white text-2xl font-bold">4.2</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-white/70 text-sm mb-1">Bounce Rate</p>
              <p className="text-white text-2xl font-bold">42%</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-white/70 text-sm mb-1">Return Rate</p>
              <p className="text-white text-2xl font-bold">28%</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a
            href="/styles"
            className="inline-block backdrop-blur-sm bg-white/20 border border-white/30 px-8 py-4 rounded-full font-bold text-white shadow-xl hover:bg-white/30 transition-all"
          >
            ← Back to Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
