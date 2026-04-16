"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function TabletShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // 3D Scroll animation that runs once
  useGSAP(
    () => {
      gsap.fromTo(
        ".tablet-container",
        {
          rotateX: 45,
          y: 100,
          scale: 0.9,
          opacity: 0,
        },
        {
          rotateX: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    },
    { scope: sectionRef }
  );



  return (
    <section ref={sectionRef} className="w-full px-6 lg:px-12 pb-6 sm:pb-12 flex flex-col items-center mt-16 overflow-hidden bg-[#FFFFFF]" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>

      {/* Title Section */}
      <div className="flex flex-col items-center mb-2 sm:mb-6 text-center max-w-4xl mx-auto relative z-10">
        <h2 className="fl2 font-title font-medium text-[#1A1A1A] mb-4">
          Marma Management Platform
        </h2>
        <p className="text-[#666666] text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
          Take absolute control of your security ecosystem. Unify operations, monitor endpoints, and respond to threats in real-time from a single centralized interface.
        </p>
      </div>

      {/* Tablet Mockup Container */}
      <div className="tablet-container relative w-full max-w-[1200px] aspect-16/10 sm:aspect-video bg-[#1a1a1a] rounded-4xl sm:rounded-4xl p-3 sm:p-5 shadow-2xl overflow-hidden">

        {/* Screen */}
        <div
          ref={contentRef}
          className="relative w-full h-full bg-[#0d0d0d] rounded-3xl sm:rounded-3xl overflow-hidden"
        >
          <Image src="/images/product/software/enterprise-dashboard.webp" alt="Tablet" fill className="object-fill scale-101" />


        </div>
      </div>
    </section>
  );
}

