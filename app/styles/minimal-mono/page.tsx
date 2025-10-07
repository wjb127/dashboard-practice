'use client';

import { TrendingUp, Users, Target, TrendingDown } from 'lucide-react';
import { BarChart } from '@/components/charts/bar-chart';
import { mockSourceDistribution } from '@/lib/mock-data/leads';

export default function MinimalMonoStylePage() {
  const sourceChartData = mockSourceDistribution.map((item) => ({
    name: item.source,
    value: item.percentage,
    점유율: item.percentage,
  }));

  return (
    <div className="min-h-screen bg-white p-12">
      {/* Header */}
      <header className="mb-16 border-b-4 border-black pb-8">
        <h1 className="text-7xl font-serif font-bold text-black mb-4 tracking-tight">
          Dashboard
        </h1>
        <p className="text-xl text-gray-600 tracking-widest uppercase">
          Minimal Monochrome
        </p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-colors group">
          <Users className="h-12 w-12 mb-6 group-hover:text-white" />
          <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
            Visitors
          </p>
          <p className="text-5xl font-bold mb-2">15.2K</p>
          <div className="flex items-center text-sm font-semibold">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>12.5%</span>
          </div>
        </div>

        <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-colors group">
          <Target className="h-12 w-12 mb-6 group-hover:text-white" />
          <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
            Conversion
          </p>
          <p className="text-5xl font-bold mb-2">8.4%</p>
          <div className="flex items-center text-sm font-semibold">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>2.3%</span>
          </div>
        </div>

        <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-colors group">
          <Users className="h-12 w-12 mb-6 group-hover:text-white" />
          <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
            Signups
          </p>
          <p className="text-5xl font-bold mb-2">1,284</p>
          <div className="flex items-center text-sm font-semibold">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>45%</span>
          </div>
        </div>

        <div className="border-2 border-black p-8 bg-red-500 text-white">
          <TrendingDown className="h-12 w-12 mb-6" />
          <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Bounce
          </p>
          <p className="text-5xl font-bold mb-2">42%</p>
          <div className="flex items-center text-sm font-semibold">
            <TrendingDown className="h-4 w-4 mr-1" />
            <span>3.5%</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="border-2 border-black p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">
          Traffic Sources
        </h2>
        <BarChart
          data={sourceChartData}
          dataKeys={['점유율']}
          colors={['#000000']}
          height={400}
        />
      </div>

      {/* Text Content */}
      <div className="max-w-4xl">
        <h2 className="text-4xl font-serif font-bold mb-6">
          Performance Overview
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
          <p>
            Our platform continues to demonstrate strong growth across all key metrics.
            Visitor acquisition increased by 12.5% this quarter, driven primarily by
            organic search and direct traffic.
          </p>
          <p>
            The conversion rate improvement of 2.3% reflects our enhanced user experience
            initiatives. New signup growth of 45% exceeds our quarterly targets and indicates
            strong product-market fit.
          </p>
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-16 border-2 border-black">
        <div className="bg-black text-white p-6">
          <h3 className="text-2xl font-bold uppercase tracking-wider">Key Metrics</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="text-left p-4 font-bold uppercase tracking-wider">Metric</th>
              <th className="text-right p-4 font-bold uppercase tracking-wider">Value</th>
              <th className="text-right p-4 font-bold uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black hover:bg-gray-100">
              <td className="p-4 font-semibold">Page Views</td>
              <td className="p-4 text-right">45,678</td>
              <td className="p-4 text-right font-bold">+8.4%</td>
            </tr>
            <tr className="border-b border-black hover:bg-gray-100">
              <td className="p-4 font-semibold">Session Duration</td>
              <td className="p-4 text-right">3m 24s</td>
              <td className="p-4 text-right font-bold">+12%</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4 font-semibold">Return Rate</td>
              <td className="p-4 text-right">28.4%</td>
              <td className="p-4 text-right font-bold">+5.2%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="mt-16">
        <a
          href="/styles"
          className="inline-block border-2 border-black px-12 py-4 text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
        >
          ← Gallery
        </a>
      </div>
    </div>
  );
}
