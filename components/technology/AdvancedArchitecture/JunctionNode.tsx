import React from "react";
import { BottomJunctionData } from "./constants";

interface JunctionNodeProps {
  junc: BottomJunctionData;
}

export default function JunctionNode({ junc }: JunctionNodeProps) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
      style={{ left: junc.pos.left, top: junc.pos.top }}
    >
      <div className="junction-node-inner w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FFF0F0] border-2 border-white flex items-center justify-center shadow-sm">
        <junc.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-red" />
      </div>
    </div>
  );
}
