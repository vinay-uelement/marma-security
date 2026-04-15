"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TabletShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animate tab content independently when activeTab changes
  useGSAP(
    () => {
      gsap.fromTo(
        ".tablet-content",
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
      );
    },
    { scope: sectionRef }
  );

  // 3D Scroll animation that runs once
  useGSAP(
    () => {
      gsap.fromTo(
        ".tablet-container",
        { rotateX: 45, scale: 0.7, y: 150, opacity: 0 },
        {
          rotateX: 0,
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1.2,
          },
        }
      );
    },
    { scope: sectionRef }
  );



  return (
    <section ref={sectionRef} className="w-full bg-[#FFFFFF] py-24 px-6 lg:px-12 flex flex-col items-center overflow-hidden" style={{ perspective: "2000px" }}>

      {/* Tablet Mockup Container */}
      <div className="tablet-container relative w-full max-w-[1000px] aspect-[16/10] sm:aspect-[16/9] bg-[#1a1a1a] rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-5 shadow-2xl overflow-hidden shadow-black/40">

        {/* Screen */}
        <div
          ref={contentRef}
          className="relative w-full h-full bg-[#0d0d0d] rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden"
        >
          {/* Glass glare effect */}
          <div className="absolute top-0 right-0 w-[150%] h-[150%] translate-x-[-10%] translate-y-[-70%] rotate-12 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-50"></div>


        </div>
      </div>
    </section>
  );
}

