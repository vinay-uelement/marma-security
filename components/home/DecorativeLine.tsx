// components/global/DecorativeLine.tsx
"use client";

interface DotConfig {
  cx: number;
  cy: number;
  rippleCount?: number; // how many ripple rings (default: 3)
  rippleBaseDelay?: number; // stagger start (default: 0)
}

interface DecorativeLineProps {
  viewBox: string; // e.g. "0 0 1100 120"
  points: string; // SVG polyline points string
  dots: DotConfig[];
  strokeColor?: string; // default #FF0000
  className?: string; // for outer <svg> sizing
}

export default function DecorativeLine({
  viewBox,
  points,
  dots,
  strokeColor = "#FF0000",
  className = "w-full h-auto",
}: DecorativeLineProps) {
  const RIPPLE_INTERVAL = 0.6; // seconds between each ring wave

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Soft glow around dots */}
        <filter id="dl-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Keyframes via inline style tag */}
        <style>{`
          @keyframes dl-ripple {
            0%   { r: 10; opacity: 0.7; }
            100% { r: 38; opacity: 0; }
          }
          .dl-ripple-ring {
            animation: dl-ripple 1.8s ease-out infinite;
          }
        `}</style>
      </defs>

      {/* The line path */}
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
      />

      {/* Dots with ripple */}
      {dots.map((dot, i) => {
        const count = dot.rippleCount ?? 3;
        const baseDelay = dot.rippleBaseDelay ?? 0;

        return (
          <g key={i} filter="url(#dl-glow)">
            {/* Ripple rings */}
            {Array.from({ length: count }).map((_, ringIdx) => (
              <circle
                key={ringIdx}
                cx={dot.cx}
                cy={dot.cy}
                r={10}
                fill="none"
                stroke={strokeColor}
                strokeWidth="1"
                className="dl-ripple-ring"
                style={{
                  animationDelay: `${baseDelay + ringIdx * RIPPLE_INTERVAL}s`,
                }}
              />
            ))}
            {/* Core solid dot */}
            <circle cx={dot.cx} cy={dot.cy} r={9} fill={strokeColor} />
          </g>
        );
      })}
    </svg>
  );
}
