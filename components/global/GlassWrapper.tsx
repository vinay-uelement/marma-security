import React from "react";

interface GlassWrapperProps {
  children: React.ReactNode;
  /** Custom classes for the outer container */
  className?: string;
  /** Padding for the glass frame (default: p-[14px] to match reference image thickness) */
  padding?: string;
  /** Border radius for the outer glass shell (default: rounded-[40px] for that heavy rounded look) */
  borderRadius?: string;
  /** Border radius for the inner content (default: rounded-[28px]) */
  innerBorderRadius?: string;
  /** Whether to show the decorative neon background glows (default: false) */
  showGlow?: boolean;
}

/**
 * A high-fidelity reusable wrapper that adds an "Exact Match" Frosted Glass Border.
 * Based on a deep charcoal beveled design with multi-layered shadows.
 */
const GlassWrapper: React.FC<GlassWrapperProps> = ({
  children,
  className = "",
  padding = "p-[14px]",
  borderRadius = "rounded-[40px]",
  innerBorderRadius = "rounded-[28px]",
}) => {
  return (
    <div className={`relative w-full h-full  ${className}`}>

      {/* Glass Border Shell (The heavy beveled frame) */}
      <div
        className={`relative w-full h-full glass-border-shell ${borderRadius} ${padding} overflow-hidden flex items-center justify-center`}
      >
        <div
          className={`relative w-full h-full ${innerBorderRadius} overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlassWrapper;
