import React from "react";
import Image from "next/image";
import { BottomCardData } from "./constants";
import { handleMouseEnter, handleMouseLeave } from "./utils";

interface EdgeCardProps {
  card: BottomCardData;
}

export default function EdgeCard({ card }: EdgeCardProps) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
      style={{ left: card.pos.left, top: card.pos.top }}
    >
      <div
        className="card-node-inner flex flex-col items-center bg-[#FAFAFA] md:bg-white p-3 md:p-5 rounded-[12px] md:rounded-[20px] cursor-pointer shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-[#F0F0F0] w-[140px] sm:w-[180px] md:w-[220px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h4 className="font-body font-medium text-[12px] md:text-[14px] text-[#333333] mb-3 text-center">
          {card.title}
        </h4>

        {/* Image Placeholder Frame */}
        <div className="relative w-full aspect-video bg-[#F5F5F5] border border-[#EBEBEB] rounded-[8px] mb-3 overflow-hidden flex items-center justify-center">
          <span className="text-[#BBBBBB] text-[10px] md:text-[12px] font-body bg-white/50 px-2 py-1 rounded">
            Image
          </span>
          {card.img && (
            <Image
              src={card.img}
              alt={card.label}
              fill
              sizes="200px"
              className="object-cover opacity-30 mix-blend-multiply"
            />
          )}
        </div>

        <p className="font-body font-semibold text-[11px] md:text-[13px] text-center text-[#2A2A2A] leading-snug">
          {card.label}
        </p>
      </div>
    </div>
  );
}
