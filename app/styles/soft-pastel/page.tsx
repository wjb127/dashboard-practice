'use client';

import { Heart, Users, Star, TrendingUp } from 'lucide-react';
import { LineChart } from '@/components/charts/line-chart';
import { PieChart } from '@/components/charts/pie-chart';
import { mockVisitorData, mockSourceDistribution } from '@/lib/mock-data/leads';

export default function SoftPastelStylePage() {
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
    <div className="min-h-screen p-8" style={{ background: 'linear-gradient(135deg, #fef3f8 0%, #fef5f9 100%)' }}>
      {/* Header */}
      <header className="mb-8">
        <div className="bg-white border border-pink-200 rounded-3xl p-8 shadow-lg shadow-pink-100">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className="text-gray-500">Soft Pastel Style</p>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-300 rounded-3xl p-6 shadow-lg shadow-pink-100">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-12 w-12 text-pink-400" />
            <div className="bg-white rounded-full p-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <h3 className="text-pink-600 text-sm font-semibold mb-2">Total Visitors</h3>
          <p className="text-pink-800 text-4xl font-bold mb-2">15.2K</p>
          <p className="text-green-500 text-sm font-semibold">+12.5% growth</p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 rounded-3xl p-6 shadow-lg shadow-blue-100">
          <div className="flex items-center justify-between mb-4">
            <Heart className="h-12 w-12 text-blue-400" />
            <div className="bg-white rounded-full p-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <h3 className="text-blue-600 text-sm font-semibold mb-2">Conversion</h3>
          <p className="text-blue-800 text-4xl font-bold mb-2">8.4%</p>
          <p className="text-green-500 text-sm font-semibold">+2.3% better</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300 rounded-3xl p-6 shadow-lg shadow-purple-100">
          <div className="flex items-center justify-between mb-4">
            <Star className="h-12 w-12 text-purple-400" />
            <div className="bg-white rounded-full p-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <h3 className="text-purple-600 text-sm font-semibold mb-2">New Signups</h3>
          <p className="text-purple-800 text-4xl font-bold mb-2">1,284</p>
          <p className="text-green-500 text-sm font-semibold">+45% amazing!</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 border border-green-300 rounded-3xl p-6 shadow-lg shadow-green-100">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-12 w-12 text-green-400" />
            <div className="bg-white rounded-full p-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <h3 className="text-green-600 text-sm font-semibold mb-2">Revenue</h3>
          <p className="text-green-800 text-4xl font-bold mb-2">$89K</p>
          <p className="text-green-500 text-sm font-semibold">+31% wonderful</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Visitor Trends */}
        <div className="bg-white border border-pink-200 rounded-3xl p-6 shadow-lg shadow-pink-100">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">Visitor Trends</h3>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4">
            <LineChart
              data={visitorChartData}
              dataKeys={['방문자', '전환']}
              colors={['#f472b6', '#c4b5fd']}
              height={300}
            />
          </div>
        </div>

        {/* Source Distribution */}
        <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-lg shadow-blue-100">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">Traffic Sources</h3>
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-4">
            <PieChart
              data={sourceChartData}
              colors={['#fbbf24', '#f472b6', '#a7f3d0', '#bfdbfe']}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-3xl p-6 text-center shadow-lg shadow-pink-100">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-pink-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Customer Love</h3>
          <p className="text-gray-500 text-sm">98% satisfaction rate</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-3xl p-6 text-center shadow-lg shadow-purple-100">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-purple-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Premium Features</h3>
          <p className="text-gray-500 text-sm">Exclusive benefits</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-3xl p-6 text-center shadow-lg shadow-blue-100">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Community</h3>
          <p className="text-gray-500 text-sm">10K+ happy members</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/styles"
          className="inline-block bg-gradient-to-r from-pink-300 to-purple-300 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all"
        >
          ← Back to Gallery
        </a>
      </div>
    </div>
  );
}
