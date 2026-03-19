"use client";

interface DotConfig {
  cx: number;
  cy: number;
  rippleCount?: number;
  rippleBaseDelay?: number;
}

interface DecorativeLineProps {
  viewBox: string;
  points: string;
  dots: DotConfig[];
  strokeColor?: string;
  className?: string;
}

export default function DecorativeLine({
  viewBox,
  points,
  dots,
  strokeColor = "#FF0000",
  className = "w-full h-auto",
}: DecorativeLineProps) {
  const RIPPLE_INTERVAL = 0.5;

  return (
   <svg
  viewBox={viewBox}
  xmlns="http://www.w3.org/2000/svg"
  className={className}
  preserveAspectRatio="xMidYMid meet"
  style={{ overflow: "visible" }}
>
      <defs>
        <style>{`
          @keyframes dl-ripple {
            0%   { r: 12; opacity: 0.30; }
            100% { r: 50; opacity: 0; }
          }
          .dl-ripple-ring {
            animation: dl-ripple 2.5s ease-out infinite;
          }
        `}</style>
      </defs>

      {/* Line */}
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
      />

      {dots.map((dot, i) => {
        const count = dot.rippleCount ?? 5; // ← more rings = more layers visible at once
        const baseDelay = dot.rippleBaseDelay ?? 0;

        return (
          <g key={i}>
            {/* Ripple rings — filled, not stroked */}
            {Array.from({ length: count }).map((_, ringIdx) => (
              <circle
                key={ringIdx}
                cx={dot.cx}
                cy={dot.cy}
                r={12}
                fill={strokeColor} // ← KEY CHANGE: filled circle, not outline
                stroke="none"
                className="dl-ripple-ring"
                style={{
                  animationDelay: `${baseDelay + ringIdx * RIPPLE_INTERVAL}s`,
                }}
              />
            ))}
            {/* Core solid dot — rendered last so it's always on top */}
            <circle cx={dot.cx} cy={dot.cy} r={9} fill={strokeColor} />
          </g>
        );
      })}
    </svg>
  );
}
