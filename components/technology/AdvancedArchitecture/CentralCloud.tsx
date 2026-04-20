import React from "react";
import Image from "next/image";

interface CentralCloudProps {
  cloudRef: React.RefObject<HTMLDivElement | null>;
}

export default function CentralCloud({ cloudRef }: CentralCloudProps) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none scale-[0.40] sm:scale-[0.60] md:scale-90 xl:scale-100"
      style={{ width: "256px", height: "128px" }}
    >
      {/* GSAP Target */}
      <div
        ref={cloudRef}
        className="relative w-full h-full flex flex-col items-center justify-center bg-white rounded-[80px] shadow-[0px_4px_30px_rgba(0,0,0,0.06)] border border-[#F5F5F5] pointer-events-auto"
      >
        {/* Cloud Bumps adjusted for 20% smaller container */}
        <div
          className="absolute top-[-28px] left-[36px] w-[88px] h-[88px] bg-white rounded-full shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.02)] border border-[#F5F5F5] border-b-white"
          style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 80%, -10% 80%)" }}
        />
        <div
          className="absolute top-[-40px] right-[36px] w-[112px] h-[112px] bg-white rounded-full shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.02)] border border-[#F5F5F5] border-b-transparent"
          style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 80%, -10% 80%)" }}
        />

        {/* Solid overlay blob */}
        <div className="absolute inset-2 bg-white rounded-[80px] z-5" />

        <h3 className="relative flex flex-col items-center font-title font-bold text-[16px] md:text-[20px] text-center text-[#2A2A2A] leading-tight px-4 z-10 w-full min-w-max">
          <Image
            src="/images/global/logo.svg"
            alt="Marma Security"
            width={100}
            height={100}
            className="nav-logo w-24 md:w-28 mb-1"
            priority
          />
          Marma AI Security
          <br />
          Service
        </h3>
      </div>
    </div>
  );
}
