'use client';

import { TrendingUp, Users, Target, Activity } from 'lucide-react';

export default function NeumorphismStylePage() {
  return (
    <div className="min-h-screen p-8" style={{ background: '#e0e5ec' }}>
      {/* Header */}
      <header className="mb-8">
        <div
          className="p-8 rounded-3xl"
          style={{
            background: '#e0e5ec',
            boxShadow: '12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff',
          }}
        >
          <h1 className="text-5xl font-bold text-gray-700 mb-2">Dashboard</h1>
          <p className="text-gray-500">Neumorphism Style</p>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          className="p-6 rounded-3xl"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="h-10 w-10 text-indigo-400" />
            <TrendingUp className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-gray-500 text-sm font-semibold mb-2">Total Visitors</h3>
          <p className="text-gray-700 text-4xl font-bold mb-2">15.2K</p>
          <p className="text-green-500 text-sm font-semibold">+12.5%</p>
        </div>

        <div
          className="p-6 rounded-3xl"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <Target className="h-10 w-10 text-pink-400" />
            <TrendingUp className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-gray-500 text-sm font-semibold mb-2">Conversion</h3>
          <p className="text-gray-700 text-4xl font-bold mb-2">8.4%</p>
          <p className="text-green-500 text-sm font-semibold">+2.3%</p>
        </div>

        <div
          className="p-6 rounded-3xl"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <Activity className="h-10 w-10 text-purple-400" />
            <TrendingUp className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-gray-500 text-sm font-semibold mb-2">Signups</h3>
          <p className="text-gray-700 text-4xl font-bold mb-2">1,284</p>
          <p className="text-green-500 text-sm font-semibold">+45%</p>
        </div>

        <div
          className="p-6 rounded-3xl"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-10 w-10 text-teal-400" />
            <TrendingUp className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-gray-500 text-sm font-semibold mb-2">Revenue</h3>
          <p className="text-gray-700 text-4xl font-bold mb-2">$89K</p>
          <p className="text-green-500 text-sm font-semibold">+31%</p>
        </div>
      </div>

      {/* Chart Area */}
      <div
        className="p-8 rounded-3xl mb-8"
        style={{
          background: '#e0e5ec',
          boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
        }}
      >
        <h3 className="text-2xl font-bold text-gray-700 mb-6">Performance Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="p-4 rounded-2xl text-center"
              style={{
                background: '#e0e5ec',
                boxShadow: 'inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff',
              }}
            >
              <p className="text-gray-500 text-sm mb-1">Metric {i}</p>
              <p className="text-gray-700 text-2xl font-bold">{(Math.random() * 100).toFixed(1)}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          className="p-6 rounded-3xl text-center transition-all active:shadow-inner"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <p className="text-gray-700 font-bold text-lg">View Details</p>
        </button>

        <button
          className="p-6 rounded-3xl text-center transition-all active:shadow-inner"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <p className="text-gray-700 font-bold text-lg">Export Data</p>
        </button>

        <button
          className="p-6 rounded-3xl text-center transition-all active:shadow-inner"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          <p className="text-gray-700 font-bold text-lg">Settings</p>
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/styles"
          className="inline-block p-6 rounded-3xl font-bold text-gray-700"
          style={{
            background: '#e0e5ec',
            boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
          }}
        >
          ← Back to Gallery
        </a>
      </div>
    </div>
  );
}
