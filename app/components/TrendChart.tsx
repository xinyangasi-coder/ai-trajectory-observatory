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
  height = 200,
  logScale = false,
  className = "",
  note,
}: TrendChartProps) {
  if (!series.length || !series[0].data.length) return null;

  const padding = { top: 24, right: 24, bottom: 36, left: 48 };
  const width = 520;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Collect all values for scale
  const allValues = series.flatMap((s) => s.data.map((d) => d.value));
  let min = Math.min(...allValues);
  let max = Math.max(...allValues);

  if (logScale) {
    min = Math.max(min, 0.1);
    max = Math.max(max, min * 1.1);
  } else {
    min = min * 0.9;
    max = max * 1.05;
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
      {title && <p className="text-sm font-medium text-gray-700 mb-1">{title}</p>}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label={title || "Trend chart"}
      >
        {/* Grid */}
        {[0, 0.5, 1].map((t) => {
          const y = padding.top + chartHeight * (1 - t);
          return (
            <line
              key={t}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}

        {/* Series lines */}
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
              <path d={pathD} fill="none" stroke={s.color} strokeWidth="2.5" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3.5" fill={s.color} />
              ))}
            </g>
          );
        })}

        {/* X labels */}
        {labels.map((label, i) => {
          if (i !== 0 && i !== Math.floor(labels.length / 2) && i !== labels.length - 1) return null;
          const x = padding.left + i * xStep;
          return (
            <text key={label} x={x} y={height - 8} textAnchor="middle" fontSize="11" fill="#6b7280">
              {label}
            </text>
          );
        })}

        {/* Y label */}
        {yLabel && (
          <text
            x={14}
            y={height / 2}
            fontSize="11"
            fill="#6b7280"
            transform={`rotate(-90 14 ${height / 2})`}
            textAnchor="middle"
          >
            {yLabel}
            {logScale ? " (log)" : ""}
          </text>
        )}
      </svg>

      {/* Legend */}
      {series.length > 1 && (
        <div className="flex gap-4 mt-2 text-xs text-gray-600">
          {series.map((s) => (
            <span key={s.name} className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
      )}

      {note && <p className="text-xs text-gray-500 mt-1 italic">{note}</p>}
    </div>
  );
}
