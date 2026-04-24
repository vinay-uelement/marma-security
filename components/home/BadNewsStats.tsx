"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BadNewsStats() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Fade in and slide up the text elements on the right
      gsap.fromTo(
        ".bad-news-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // 2. Fade in the stats containers on the left
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // 3. Animate the height of the vertical bars growing from bottom
      gsap.fromTo(
        ".stat-bar",
        { height: "0%" },
        {
          height: (index, target) => target.dataset.height,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.3, // let containers fade in first
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // 4. Animate the numbers counting up
      const numbers = gsap.utils.toArray(".stat-number");
      numbers.forEach((num: any) => {
        const target = parseInt(num.dataset.target, 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          onUpdate: () => {
            num.innerText = Math.round(obj.val) + "%";
          }
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FFFFFF] text-[#1A1A1A] py-10 px-6 lg:px-16 relative overflow-hidden"
    >

      <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Side: Stats with Vertical Bars */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-6">
          <p className="bad-news-text text-brand-red font-semibold tracking-[0.2em] text-[16px] uppercase">
            The Bad News
          </p>
          <h2 className="bad-news-text fl3">
            Cyber threats are accelerating—faster,
            <br className="hidden lg:block" /> smarter, and harder to detect.
          </h2>
        </div>


        {/* Right Side: Text Container */}
        <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          {/* Stat 1 */}
          <div className="stat-item flex flex-col items-center text-center">
            <div className="h-[180px] sm:h-[240px] w-full flex flex-col justify-end items-center mb-4 sm:mb-6 relative">
              <span className="stat-number text-2xl sm:text-3xl md:text-[28px] font-bold font-title mb-4 z-10 drop-shadow-lg leading-none" data-target="56">
                0%
              </span>
              {/* Bar track container */}
              <div className="w-8 sm:w-12 h-[100px] sm:h-[150px] bg-[#F5F5F5] border border-[#EBEBEB] rounded-t-lg relative overflow-hidden flex justify-center">
                {/* Growing bar */}
                <div
                  className="stat-bar absolute bottom-0 w-full bg-gradient-to-t from-[#A61D15] to-[#FF453A] rounded-t-lg shadow-[0_0_20px_rgba(255,69,58,0.4)]"
                  data-height="56%"
                ></div>
              </div>
            </div>
            <p className="text-[11px] text-[#666666] font-semibold tracking-widest uppercase leading-[1.3]">
              Of breaches now <br className="hidden sm:block" /> involve ransomware <br className="hidden sm:block" /> (YoY, 2025)
            </p>
          </div>

          {/* Stat 2 */}
          <div className="stat-item flex flex-col items-center text-center">
            <div className="h-[180px] sm:h-[240px] w-full flex flex-col justify-end items-center mb-4 sm:mb-6 relative">
              <span className="stat-number text-2xl sm:text-3xl md:text-[28px] font-bold font-title mb-4 z-10 drop-shadow-lg leading-none" data-target="73">
                0%
              </span>
              <div className="w-8 sm:w-12 h-[100px] sm:h-[150px] bg-[#F5F5F5] border border-[#EBEBEB] rounded-t-lg relative overflow-hidden flex justify-center">
                <div
                  className="stat-bar absolute bottom-0 w-full bg-gradient-to-t from-[#A61D15] to-[#FF453A] rounded-t-lg shadow-[0_0_20px_rgba(255,69,58,0.4)]"
                  data-height="73%"
                ></div>
              </div>
            </div>
            <p className="text-[11px] text-[#666666] font-semibold tracking-widest uppercase leading-[1.3]">
              Increase In <br className="hidden sm:block" /> Global Cyberattacks <br className="hidden sm:block" /> (YoY, 2025)
            </p>
          </div>

          {/* Stat 3 */}
          <div className="stat-item flex flex-col items-center text-center">
            <div className="h-[180px] sm:h-[240px] w-full flex flex-col justify-end items-center mb-4 sm:mb-6 relative">
              <span className="stat-number text-2xl sm:text-3xl md:text-[28px] font-bold font-title mb-4 z-10 drop-shadow-lg leading-none" data-target="56">
                0%
              </span>
              <div className="w-8 sm:w-12 h-[100px] sm:h-[150px] bg-[#F5F5F5] border border-[#EBEBEB] rounded-t-lg relative overflow-hidden flex justify-center">
                <div
                  className="stat-bar absolute bottom-0 w-full bg-gradient-to-t from-[#A61D15] to-[#FF453A] rounded-t-lg shadow-[0_0_20px_rgba(255,69,58,0.4)]"
                  data-height="56%"
                ></div>
              </div>
            </div>
            <p className="text-[11px] text-[#666666] font-semibold tracking-widest uppercase leading-[1.3]">
              Rise in Data Breaches Worldwide <br className="hidden sm:block" /> (YoY, 2025)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
