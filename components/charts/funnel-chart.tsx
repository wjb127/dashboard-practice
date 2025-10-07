'use client';

interface FunnelDataPoint {
  name: string;
  value: number;
  percentage?: number;
}

interface FunnelChartProps {
  data: FunnelDataPoint[];
  colors?: string[];
}

const DEFAULT_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function FunnelChart({ data, colors = DEFAULT_COLORS }: FunnelChartProps) {
  const maxValue = data[0]?.value || 1;

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const width = (item.value / maxValue) * 100;
        const conversionRate = index > 0
          ? ((item.value / data[index - 1].value) * 100).toFixed(1)
          : '100.0';

        return (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground">
                {item.value.toLocaleString()}명
                {index > 0 && (
                  <span className="ml-2 text-xs">({conversionRate}%)</span>
                )}
              </span>
            </div>
            <div className="relative h-16 w-full">
              <div
                className="absolute left-1/2 h-full -translate-x-1/2 rounded-lg transition-all"
                style={{
                  width: `${width}%`,
                  backgroundColor: colors[index % colors.length],
                  opacity: 0.8,
                }}
              >
                <div className="flex h-full items-center justify-center text-white font-semibold">
                  {((item.value / maxValue) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
