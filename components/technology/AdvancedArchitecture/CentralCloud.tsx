import React from "react";
import Image from "next/image";

interface CentralCloudProps {
  cloudRef: React.RefObject<HTMLDivElement | null>;
}

export default function CentralCloud({ cloudRef }: CentralCloudProps) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] z-20 pointer-events-none scale-[0.40] sm:scale-[0.60] md:scale-90 xl:scale-100"
      style={{ width: "320px", height: "160px" }}
    >
      {/* GSAP Target */}
      <div
        ref={cloudRef}
        className="relative w-full h-full flex flex-col items-center justify-center bg-white rounded-[100px] shadow-[0px_4px_30px_rgba(0,0,0,0.06)] border border-[#F5F5F5] pointer-events-auto"
      >
        {/* Cloud Bumps placed securely IN FRONT of SVG but BEHIND text via normal document flow inside matching relative container */}
        <div className="absolute top-[-36px] left-[45px] w-[110px] h-[110px] bg-white rounded-full shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.02)] border border-[#F5F5F5] border-b-white" style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 80%, -10% 80%)" }} />
        <div className="absolute top-[-50px] right-[45px] w-[140px] h-[140px] bg-white rounded-full shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.02)] border border-[#F5F5F5] border-b-transparent" style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 80%, -10% 80%)" }} />

        {/* Solid overlay blob to hide interior border lines of overlapping circles */}
        <div className="absolute inset-2 bg-white rounded-[100px] z-[5]" />

        <h3 className="relative flex flex-col items-center font-title font-bold text-[20px] md:text-[24px] text-center text-[#2A2A2A] leading-snug px-6 z-10 w-full min-w-max">
          <Image
            src="/images/global/logo.svg"
            alt="Marma Security"
            width={1000}
            height={1000}
            className="nav-logo"
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
