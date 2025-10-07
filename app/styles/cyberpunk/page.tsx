'use client';

import { Zap, Users, Target, Cpu } from 'lucide-react';
import { LineChart } from '@/components/charts/line-chart';
import { mockVisitorData } from '@/lib/mock-data/leads';

export default function CyberpunkStylePage() {
  const visitorChartData = mockVisitorData.map((item) => ({
    name: item.date,
    value: item.visitors,
    방문자: item.visitors,
    전환: item.conversions,
  }));

  return (
    <div className="min-h-screen bg-[#0d0221] p-8">
      {/* Scanline overlay effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffff 2px, #00ffff 4px)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="mb-8">
          <div
            className="bg-[#1a0b2e] border-2 border-cyan-500 rounded-lg p-8"
            style={{
              boxShadow: '0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1)',
            }}
          >
            <div className="flex items-center gap-4">
              <Cpu className="h-12 w-12 text-cyan-400 animate-pulse" />
              <div>
                <h1
                  className="text-5xl font-black text-cyan-400 mb-2 uppercase tracking-wider animate-pulse"
                  style={{ textShadow: '0 0 10px rgba(0,255,255,0.8)' }}
                >
                  CYBERSPACE
                </h1>
                <p className="text-magenta-400 font-mono">// DASHBOARD v2.077</p>
              </div>
            </div>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div
            className="bg-[#1a0b2e] border-2 border-cyan-500 rounded-lg p-6 hover:border-magenta-500 transition-all"
            style={{ boxShadow: '0 0 15px rgba(0,255,255,0.3)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <Users
                className="h-12 w-12 text-cyan-400"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.8))' }}
              />
              <div className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-500">
                ONLINE
              </div>
            </div>
            <h3 className="text-cyan-400 text-xs font-mono mb-2 uppercase">// VISITORS</h3>
            <p className="text-white text-4xl font-black mb-2">15.2K</p>
            <p className="text-green-400 text-sm font-mono">+12.5% ↑</p>
          </div>

          <div
            className="bg-[#1a0b2e] border-2 border-magenta-500 rounded-lg p-6 hover:border-yellow-400 transition-all"
            style={{ boxShadow: '0 0 15px rgba(255,0,255,0.3)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <Target
                className="h-12 w-12 text-magenta-400"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,0,255,0.8))' }}
              />
              <div className="text-xs font-mono text-magenta-400 bg-magenta-400/10 px-2 py-1 rounded border border-magenta-500">
                ACTIVE
              </div>
            </div>
            <h3 className="text-magenta-400 text-xs font-mono mb-2 uppercase">// CONVERT</h3>
            <p className="text-white text-4xl font-black mb-2">8.4%</p>
            <p className="text-green-400 text-sm font-mono">+2.3% ↑</p>
          </div>

          <div
            className="bg-[#1a0b2e] border-2 border-yellow-400 rounded-lg p-6 hover:border-cyan-500 transition-all"
            style={{ boxShadow: '0 0 15px rgba(255,255,0,0.3)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <Zap
                className="h-12 w-12 text-yellow-400"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,0,0.8))' }}
              />
              <div className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded border border-yellow-500">
                BOOST
              </div>
            </div>
            <h3 className="text-yellow-400 text-xs font-mono mb-2 uppercase">// SIGNUPS</h3>
            <p className="text-white text-4xl font-black mb-2">1,284</p>
            <p className="text-green-400 text-sm font-mono">+45% ↑↑</p>
          </div>

          <div
            className="bg-[#1a0b2e] border-2 border-green-400 rounded-lg p-6 hover:border-magenta-500 transition-all"
            style={{ boxShadow: '0 0 15px rgba(0,255,0,0.3)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <Cpu
                className="h-12 w-12 text-green-400"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,0,0.8))' }}
              />
              <div className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-500">
                PROFIT
              </div>
            </div>
            <h3 className="text-green-400 text-xs font-mono mb-2 uppercase">// REVENUE</h3>
            <p className="text-white text-4xl font-black mb-2">$89K</p>
            <p className="text-green-400 text-sm font-mono">+31% ↑</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Main Chart */}
          <div
            className="bg-[#1a0b2e] border-2 border-cyan-500 rounded-lg p-6"
            style={{ boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black text-cyan-400 uppercase font-mono">
                // NEURAL_NETWORK
              </h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-magenta-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <div className="bg-black/50 rounded p-4 border border-cyan-500/30">
              <LineChart
                data={visitorChartData}
                dataKeys={['방문자', '전환']}
                colors={['#00ffff', '#ff00ff']}
                height={300}
              />
            </div>
          </div>

          {/* System Status */}
          <div
            className="bg-[#1a0b2e] border-2 border-magenta-500 rounded-lg p-6"
            style={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
          >
            <h3 className="text-xl font-black text-magenta-400 uppercase font-mono mb-6">
              // SYSTEM_STATUS
            </h3>
            <div className="space-y-4">
              {[
                { label: 'CPU_LOAD', value: 78, color: 'cyan' },
                { label: 'MEMORY', value: 62, color: 'magenta' },
                { label: 'NETWORK', value: 91, color: 'yellow' },
                { label: 'POWER', value: 85, color: 'green' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between mb-2 font-mono text-sm">
                    <span className={`text-${stat.color}-400`}>{stat.label}</span>
                    <span className="text-white font-black">{stat.value}%</span>
                  </div>
                  <div className="h-3 bg-black/50 rounded-full border border-white/10 overflow-hidden">
                    <div
                      className={`h-full bg-${stat.color}-400 rounded-full transition-all`}
                      style={{
                        width: `${stat.value}%`,
                        boxShadow: `0 0 10px rgba(${
                          stat.color === 'cyan' ? '0,255,255' :
                          stat.color === 'magenta' ? '255,0,255' :
                          stat.color === 'yellow' ? '255,255,0' : '0,255,0'
                        },0.5)`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Output */}
        <div
          className="bg-black border-2 border-green-400 rounded-lg p-6 font-mono text-sm mb-8"
          style={{ boxShadow: '0 0 20px rgba(0,255,0,0.3)' }}
        >
          <div className="text-green-400 mb-4">
            <span className="text-cyan-400">root@cyberspace</span>:~$ status --all
          </div>
          <div className="space-y-1 text-green-400">
            <div>[OK] System operational - All cores online</div>
            <div>[OK] Database connections stable - 124 active</div>
            <div>[OK] API latency: 42ms average</div>
            <div>[WARN] High traffic detected - Scaling initiated</div>
            <div className="animate-pulse">[INFO] Monitoring continues...</div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a
            href="/styles"
            className="inline-block bg-cyan-500 border-2 border-cyan-400 px-8 py-4 rounded font-black text-black uppercase tracking-wider hover:bg-magenta-500 hover:border-magenta-400 transition-all"
            style={{ boxShadow: '0 0 20px rgba(0,255,255,0.5)' }}
          >
            ← RETURN
          </a>
        </div>
      </div>
    </div>
  );
}
