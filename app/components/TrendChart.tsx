interface Series {
  name: string;
  color: string;
  data: { label: string; value: number }[];
}

interface TrendChartProps {
  series: Series[];
  title?: string;
  yLabel?: string;
  height?: number;
  logScale?: boolean;
  className?: string;
  note?: string;
}

export function TrendChart({
  series,
  title,
  yLabel,
  height = 220,
  logScale = false,
  className = "",
  note,
}: TrendChartProps) {
  if (!series.length || !series[0].data.length) return null;

  const padding = { top: 28, right: 28, bottom: 40, left: 52 };
  const width = 560;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const allValues = series.flatMap((s) => s.data.map((d) => d.value));
  let min = Math.min(...allValues);
  let max = Math.max(...allValues);

  if (logScale) {
    min = Math.max(min, 0.1);
    max = Math.max(max, min * 1.1);
  } else {
    const pad = (max - min) * 0.08 || max * 0.05;
    min = Math.max(0, min - pad);
    max = max + pad;
  }

  const range = logScale ? Math.log(max) - Math.log(min) : max - min || 1;

  const toY = (value: number) => {
    const v = logScale ? Math.log(Math.max(value, 0.1)) : value;
    const norm = logScale ? (v - Math.log(min)) / range : (value - min) / range;
    return padding.top + chartHeight - norm * chartHeight;
  };

  const labels = series[0].data.map((d) => d.label);
  const xStep = chartWidth / (labels.length - 1 || 1);

  return (
    <div className={className}>
      {title && <p className="text-sm font-medium text-gray-800 mb-2">{title}</p>}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label={title || "Trend chart"}
      >
        {/* Horizontal grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = padding.top + chartHeight * (1 - t);
          return (
            <line
              key={t}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          );
        })}

        {/* Subtle vertical guides */}
        {labels.map((_, i) => {
          if (i === 0 || i === labels.length - 1) return null;
          const x = padding.left + i * xStep;
          return (
            <line
              key={`v-${i}`}
              x1={x}
              y1={padding.top}
              x2={x}
              y2={padding.top + chartHeight}
              stroke="#f9fafb"
              strokeWidth="1"
            />
          );
        })}

        {/* Series */}
        {series.map((s) => {
          const points = s.data.map((d, i) => ({
            x: padding.left + i * xStep,
            y: toY(d.value),
          }));
          const pathD = points
            .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
            .join(" ");

          return (
            <g key={s.name}>
              <path d={pathD} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="white"
                  stroke={s.color}
                  strokeWidth="2"
                />
              ))}
            </g>
          );
        })}

        {/* X labels */}
        {labels.map((label, i) => {
          const show = i === 0 || i === labels.length - 1 || (labels.length > 4 && i === Math.floor(labels.length / 2));
          if (!show) return null;
          const x = padding.left + i * xStep;
          return (
            <text key={label} x={x} y={height - 10} textAnchor="middle" fontSize="11" fill="#6b7280">
              {label}
            </text>
          );
        })}

        {/* Y label */}
        {yLabel && (
          <text
            x={16}
            y={height / 2}
            fontSize="11"
            fill="#6b7280"
            transform={`rotate(-90 16 ${height / 2})`}
            textAnchor="middle"
          >
            {yLabel}
            {logScale ? " (log)" : ""}
          </text>
        )}
      </svg>

      {/* Legend */}
      {series.length > 1 && (
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-600">
          {series.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
      )}

      {note && <p className="text-xs text-gray-500 mt-2 italic leading-relaxed">{note}</p>}
    </div>
  );
}
