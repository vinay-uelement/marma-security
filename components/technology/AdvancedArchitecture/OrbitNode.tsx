import React from "react";
import { OrbitingNodeData } from "./constants";
import { handleMouseEnter, handleMouseLeave } from "./utils";

interface OrbitNodeProps {
  node: OrbitingNodeData;
}

export default function OrbitNode({ node }: OrbitNodeProps) {
  const isCol = node.layout === "col";
  const isRowReverse = node.layout === "row-reverse";

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 scale-[0.65] sm:scale-75 md:scale-90 xl:scale-100"
      style={{ left: node.pos.left, top: node.pos.top }}
    >
      <div
        className={`orbit-node-inner flex items-center ${
          isCol ? "flex-col gap-2" : isRowReverse ? "flex-row-reverse gap-3" : "flex-row gap-3"
        } cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#FFE0E0]">
          <node.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />
        </div>
        <span
          className={`font-body font-normal text-[13px] md:text-[14px] text-[#444444] leading-tight w-[70px] sm:w-[90px] md:w-auto ${
            isCol ? "text-center" : isRowReverse ? "text-right" : "text-left"
          }`}
          style={{ whiteSpace: "pre-line" }}
        >
          {node.label}
        </span>
      </div>
    </div>
  );
}
