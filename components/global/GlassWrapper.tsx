import React from "react";

interface GlassWrapperProps {
  children: React.ReactNode;
  /** Custom classes for the outer container */
  className?: string;
  /** Padding for the glass frame (default: p-[14px]) */
  padding?: string;
  /** Border radius for the outer glass shell (default: rounded-[40px]) */
  borderRadius?: string;
  /** Border radius for the inner content (default: rounded-[28px]) */
  innerBorderRadius?: string;
  /** Whether to show the decorative brand red glow (default: true) */
  showGlow?: boolean;
}

/**
 * A high-fidelity reusable wrapper with a frosted glass border effect.
 * Renders a translucent white glass frame with a brand red ambient glow behind it.
 */
const GlassWrapper: React.FC<GlassWrapperProps> = ({
  children,
  className = "",
  padding = "p-[12px]",
  borderRadius = "rounded-[40px]",
  innerBorderRadius = "rounded-[28px]",
  showGlow = true,
}) => {
  return (
    <div className={`relative w-full h-full p-10 overflow-visible ${className}`}>

      {/* Brand Red Ambient Glow — expands slightly outside the frame */}
      {showGlow && (
        <div
          className={`absolute pointer-events-none ${borderRadius}`}
          style={{
            inset: "50px",
            background: "rgba(200, 0, 0, 0.7)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}

      {/* Frosted Glass Frame */}
      <div
        className={`relative w-full h-full  ${borderRadius} ${padding} flex items-center justify-center`}
        style={{
          /* Visible frosted-glass tint — works on both light and dark backgrounds */
          background: "linear-gradient(145deg, rgba(220,220,225,0.55) 0%, rgba(200,200,210,0.25) 60%, rgba(255,255,255,0.15) 100%)",
          backdropFilter: "blur(16px) saturate(180%) brightness(1.05)",
          WebkitBackdropFilter: "blur(16px) saturate(180%) brightness(1.05)",
          border: "1.5px solid rgba(255,255,255,0.60)",
          zIndex: 1,
        }}
      >
        {/* Inner content area — clips the image/content to inner radius */}
        <div
          className={`relative w-full h-full ${innerBorderRadius} overflow-hidden`}
          style={{ zIndex: 2 }}
        >
          {children}
        </div>
      </div>

    </div>
  );
};

export default GlassWrapper;
