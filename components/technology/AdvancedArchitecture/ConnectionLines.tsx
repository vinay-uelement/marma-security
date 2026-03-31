import React from "react";
import { orbitingNodes } from "./constants";

export default function ConnectionLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
      {/* Lines from Cloud to Orbiting Nodes */}
      {orbitingNodes.map((node) => (
        <g key={`group-orb-${node.id}`}>
          <line className="svg-line" x1="50%" y1="50%" x2={node.pos.left} y2={node.pos.top} stroke="#E5E5E5" strokeWidth="1" />
          <line className="svg-data-flow" x1="50%" y1="50%" x2={node.pos.left} y2={node.pos.top} stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
        </g>
      ))}

      {/* Bottom track Lines: Center to junction */}
      <g>
        <line className="svg-line" x1="50%" y1="50%" x2="50%" y2="68%" stroke="#E5E5E5" strokeWidth="1" />
        <line className="svg-data-flow" x1="50%" y1="50%" x2="50%" y2="68%" stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Horizontal Line Left */}
      <g>
        <line className="svg-line" x1="50%" y1="68%" x2="20%" y2="68%" stroke="#E5E5E5" strokeWidth="1" />
        <line className="svg-data-flow" x1="50%" y1="68%" x2="20%" y2="68%" stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Horizontal Line Right */}
      <g>
        <line className="svg-line" x1="50%" y1="68%" x2="80%" y2="68%" stroke="#E5E5E5" strokeWidth="1" />
        <line className="svg-data-flow" x1="50%" y1="68%" x2="80%" y2="68%" stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
      </g>
    </svg>
  );
}
