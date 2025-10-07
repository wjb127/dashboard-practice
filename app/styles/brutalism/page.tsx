'use client';

import { TrendingUp, Users, Target, Zap } from 'lucide-react';

export default function BrutalismStylePage() {
  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      {/* Header */}
      <header className="mb-8">
        <div className="bg-black border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-1">
          <h1 className="text-6xl font-black text-white mb-2 uppercase -rotate-1">
            DASHBOARD
          </h1>
          <p className="text-xl text-yellow-400 font-bold uppercase">Brutalism Style</p>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-red-500 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
          <Users className="h-12 w-12 mb-4" />
          <h3 className="text-black text-sm font-black uppercase mb-2">Visitors</h3>
          <p className="text-black text-5xl font-black">15.2K</p>
          <div className="mt-3 bg-black text-yellow-400 inline-block px-3 py-1">
            <p className="text-sm font-black">+12.5%</p>
          </div>
        </div>

        <div className="bg-blue-500 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
          <Target className="h-12 w-12 mb-4" />
          <h3 className="text-white text-sm font-black uppercase mb-2">Convert</h3>
          <p className="text-white text-5xl font-black">8.4%</p>
          <div className="mt-3 bg-black text-green-400 inline-block px-3 py-1">
            <p className="text-sm font-black">+2.3%</p>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
          <Zap className="h-12 w-12 mb-4" />
          <h3 className="text-black text-sm font-black uppercase mb-2">Signups</h3>
          <p className="text-black text-5xl font-black">1,284</p>
          <div className="mt-3 bg-red-500 text-black inline-block px-3 py-1">
            <p className="text-sm font-black">+45%</p>
          </div>
        </div>

        <div className="bg-green-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
          <TrendingUp className="h-12 w-12 mb-4" />
          <h3 className="text-black text-sm font-black uppercase mb-2">Revenue</h3>
          <p className="text-black text-5xl font-black">$89K</p>
          <div className="mt-3 bg-black text-yellow-400 inline-block px-3 py-1">
            <p className="text-sm font-black">+31%</p>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
          <h3 className="text-3xl font-black mb-6 uppercase rotate-1">TRAFFIC</h3>
          <div className="space-y-4">
            {['Organic', 'Paid', 'Social', 'Direct'].map((source, i) => (
              <div key={source} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="font-black text-lg uppercase">{source}</span>
                  <span className="font-black text-lg">{40 - i * 8}%</span>
                </div>
                <div className="h-8 bg-gray-200 border-2 border-black">
                  <div
                    className={`h-full border-r-2 border-black ${
                      i === 0 ? 'bg-red-500' :
                      i === 1 ? 'bg-blue-500' :
                      i === 2 ? 'bg-green-400' : 'bg-yellow-400'
                    }`}
                    style={{ width: `${40 - i * 8}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] rotate-1">
          <h3 className="text-3xl font-black text-yellow-400 mb-6 uppercase -rotate-1">
            GROWTH
          </h3>
          <div className="space-y-4">
            {[85, 68, 92, 74].map((val, i) => (
              <div key={i} className="flex items-end gap-2">
                <div className="text-yellow-400 font-black text-sm w-12">W{i + 1}</div>
                <div className="flex-1">
                  <div
                    className={`${
                      i === 0 ? 'bg-red-500' :
                      i === 1 ? 'bg-blue-500' :
                      i === 2 ? 'bg-green-400' : 'bg-yellow-400'
                    } border-2 border-white`}
                    style={{ height: `${val}px`, width: '100%' }}
                  ></div>
                </div>
                <div className="text-white font-black text-sm w-12 text-right">{val}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-500 border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-1 mb-8">
        <h2 className="text-5xl font-black text-black uppercase mb-4 -rotate-1">
          TAKE ACTION NOW!!!
        </h2>
        <p className="text-xl font-bold text-black mb-6">
          Your metrics are EXPLODING! Don't miss out!
        </p>
        <button className="bg-yellow-400 border-4 border-black px-12 py-4 font-black text-2xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          BOOST STATS →
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/styles"
          className="inline-block bg-white border-4 border-black px-8 py-4 font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-rotate-2 transition-transform"
        >
          ← BACK
        </a>
      </div>
    </div>
  );
}
