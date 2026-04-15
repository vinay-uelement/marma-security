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
        { rotateX: 90, scale: 0.7, opacity: 0 },
        {
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            markers: true,
            start: "top 100%",
            end: "top 10%",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: sectionRef }
  );



  return (
    <section ref={sectionRef} className="w-full px-6 lg:px-12 pb-12 flex flex-col items-center overflow-hidden" style={{ perspective: "2000px", transformStyle: "preserve-3d" }}>

      {/* Tablet Mockup Container */}
      <div className="tablet-container relative w-full max-w-[1000px] aspect-[16/10] sm:aspect-[16/9] bg-[#1a1a1a] rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-5 shadow-2xl overflow-hidden">

        {/* Screen */}
        <div
          ref={contentRef}
          className="relative w-full h-full bg-[#0d0d0d] rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden"
        >
          <Image src="/images/product/managePlatform.webp" alt="Tablet" fill className="object-fill scale-101" />


        </div>
      </div>
    </section>
  );
}

