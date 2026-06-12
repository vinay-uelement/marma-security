"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";

interface SaaSHeroProps {
  onBookDemo: () => void;
}

export default function SaaSHero({ onBookDemo }: SaaSHeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Hero text entrance
      gsap.fromTo(
        ".hero-text-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // Dashboard mockup entrance
      gsap.fromTo(
        ".hero-dashboard",
        { opacity: 0, y: 40, rotateY: -8, rotateX: 4 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        }
      );

      // Floating decorative elements
      gsap.to(".hero-float-1", {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".hero-float-2", {
        y: 12,
        x: -8,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".hero-float-3", {
        y: -10,
        x: 6,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] lg:min-h-[92vh] bg-[#FAFBFF] overflow-hidden flex items-center"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF000008] via-transparent to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF000005] via-transparent to-transparent rounded-full" />
      </div>

      {/* Floating decorative dots */}
      <div className="hero-float-1 absolute top-[15%] right-[12%] w-3 h-3 bg-brand-red/20 rounded-full hidden lg:block" />
      <div className="hero-float-2 absolute top-[35%] right-[5%] w-2 h-2 bg-brand-red/30 rounded-full hidden lg:block" />
      <div className="hero-float-3 absolute bottom-[25%] left-[8%] w-2.5 h-2.5 bg-brand-red/15 rounded-full hidden lg:block" />
      <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-[#E0E0E0] rounded-full hidden lg:block" />
      <div className="absolute bottom-[35%] right-[18%] w-1.5 h-1.5 bg-[#D0D0D0] rounded-full hidden lg:block" />

      {/* Main content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-24 lg:pt-0 pb-12 lg:pb-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="hero-text-content w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Main Headline */}
            <h1 className="font-banner font-normal text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#1A1A2E]">
              The All-in-One{" "}
              <br className="hidden sm:block" />
              AI Cybersecurity{" "}
              <br className="hidden sm:block" />
              Platform for{" "}
              <span className="text-brand-red font-medium">
                Modern Teams
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-light text-[16px] lg:text-[18px] leading-[1.6] text-[#5A5A7A] max-w-[480px]">
              Marma helps you detect, prevent, and respond to cyber threats
              — all in one powerful platform. Enterprise-grade security in
              minutes, no IT expertise needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookDemo}
                className="group relative flex items-center gap-2.5 bg-brand-red text-white rounded-full px-7 py-3 font-banner text-[15px] md:text-[16px] font-normal tracking-[-0.01em] hover:bg-brand-red-hover transition-all duration-300 shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/30 hover:scale-[1.02]"
              >
                Start Free Trial
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <button
                onClick={onBookDemo}
                className="flex items-center gap-2.5 border border-[#D0D0D0] text-[#333333] rounded-full px-7 py-3 font-banner text-[15px] md:text-[16px] font-normal tracking-[-0.01em] hover:border-[#999999] hover:bg-[#F5F5F5] transition-all duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#333333]"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2">
              {[
                "No credit card required",
                "14-day free trial",
                "Cancel anytime",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                  <span className="font-body text-[12px] text-[#777777]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="hero-dashboard w-full lg:w-[52%] relative" style={{ perspective: "1200px" }}>
            <div className="relative">
              {/* Subtle glow behind dashboard */}
              <div className="absolute -inset-8 bg-gradient-to-br from-brand-red/15 via-transparent to-brand-red/10 rounded-[40px] blur-3xl opacity-70" />

              {/* Dashboard image */}
              <div className="relative rounded-[24px] lg:rounded-[32px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden transition-transform duration-700 hover:scale-[1.01] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                {/* Subtle glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay z-20" />
                <Image
                  src="/images/home/hero-tablet-dashboard.jpg"
                  alt="Marma Security Agent Dashboard"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover relative z-10"
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>

              {/* Floating notification card - top right */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 px-4 py-3 hidden md:flex items-center gap-3 animate-pulse-slow z-30">
                <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-green-600" />
                </div>
                <div>
                  <p className="font-body text-[12px] font-semibold text-[#1A1A2E]">
                    Threat Blocked
                  </p>
                  <p className="font-body text-[10px] text-[#777777]">
                    Just now
                  </p>
                </div>
              </div>

              {/* Floating stat card - bottom left */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 px-5 py-3 hidden md:block z-30">
                <p className="font-body text-[11px] text-[#888888] font-medium tracking-wide">
                  Devices Protected
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <p className="font-banner text-[24px] font-semibold text-[#1A1A2E] tracking-tight">
                    8,430
                  </p>
                  <span className="font-body text-[11px] text-green-600 font-semibold bg-green-50 px-1.5 py-0.5 rounded-md">
                    +12.5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
