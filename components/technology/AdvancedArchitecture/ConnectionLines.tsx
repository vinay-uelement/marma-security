import React from "react";
import { orbitingNodes } from "./constants";

export default function ConnectionLines() {
  /**
   * Generates an angled (orthogonal) SVG path from cloud center to a node.
   * Path: Vertical Out -> Horizontal to X -> Vertical to Y
   */
  const getAngledPath = (nodePos: { left: string; top: string }) => {
    const x1 = 50; // Cloud center %
    const y1 = 50; // Cloud center %
    const x2 = parseFloat(nodePos.left);
    const y2 = parseFloat(nodePos.top);

    // Vertical breakout point (how far the line goes up/down before turning horizontal)
    // We vary this slightly based on distance to avoid overlaps if nodes are on the same line
    const breakoutY = y2 > y1 ? y1 + 5 : y1 - 5;

    // Command string: Move to center -> Vertical to breakout -> Horizontal to target X -> Vertical to target Y
    return `M ${x1} ${y1} V ${breakoutY} H ${x2} V ${y2}`;
  };

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {
        orbitingNodes.map((node) => {
          const pathD = getAngledPath(node.pos);
          return (
            <g key={`group-orb-${node.id}`}>
              {/* Background dashed line */}
              <path
                className="svg-line"
                d={pathD}
                fill="none"
                stroke="#333333"
                strokeWidth="0.1"
                strokeDasharray="1"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

            </g>
          );
        })
      }
      {/* 1. Lines to Orbiting Nodes */}
      {orbitingNodes.map((node) => {
        const pathD = getAngledPath(node.pos);
        return (
          <g key={`group-orb-${node.id}`}>
            {/* Background dashed line */}
            <path
              className="svg-line"
              d={pathD}
              fill="none"
              stroke="#333333"
              strokeWidth="0.1"
              strokeDasharray="1"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Data Flow Overlay */}
            <path
              className="svg-data-flow"
              d={pathD}
              fill="none"
              stroke="#FF0000"
              strokeWidth="0.3"
              opacity="1"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
        );
      })}


      {/* 2. Central Vertical Line down to Junction Rail */}
      <g>
        <path className="svg-line" d="M 50 50 V 64.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 50 V 64.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />
      </g>

      {/* 3. Horizontal Transition Rail (Connecting Left/Center/Right Junctions) */}
      <g className="lg:hidden">
        {/* Rail from center to Left (17%) and Right (83%) */}
        <path className="svg-line" d="M 50 64.4 H 17" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 64.4 H 17" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />

        <path className="svg-line" d="M 50 64.4 H 83" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 64.4 H 83" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />
      </g>
      <g className="hidden lg:block">
        {/* Rail from center to Left (26%) and Right (74%) */}
        <path className="svg-line" d="M 50 64.4 H 26" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 64.4 H 26" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />

        <path className="svg-line" d="M 50 64.4 H 74" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 64.4 H 74" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />
      </g>

      {/* 4. Vertical Connectors from Junctions to Cards */}
      <g className="lg:hidden">
        {/* Left Junction to Left Card */}
        <path className="svg-line" d="M 17 64.4 V 82.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 17 64.4 V 82.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />

        {/* Center Junction to Center Card */}
        <path className="svg-line" d="M 50 64.4 V 82.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 64.4 V 82.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />

        {/* Right Junction to Right Card */}
        <path className="svg-line" d="M 83 64.4 V 82.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 83 64.4 V 82.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />
      </g>
      <g className="hidden lg:block">
        {/* Left Junction to Left Card */}
        <path className="svg-line" d="M 26 64.4 V 82.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 26 64.4 V 82.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />

        {/* Center Junction to Center Card */}
        <path className="svg-line" d="M 50 64.4 V 82.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 50 64.4 V 82.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />

        {/* Right Junction to Right Card */}
        <path className="svg-line" d="M 74 64.4 V 82.4" fill="none" stroke="#333333" strokeWidth="0.1" strokeDasharray="1" />
        <path className="svg-data-flow" d="M 74 64.4 V 82.4" fill="none" stroke="#FF0000" strokeWidth="0.3" opacity="1" />
      </g>
    </svg>
  );
}
