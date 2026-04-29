"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Zap, Bot, Globe, Smartphone, CheckCircle2 } from "lucide-react";
import HighlightedText from "../global/HighlightedText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    icon: ShieldCheck,
    title: "Stop Threats Early",
    description: "Block phishing, ransomware, scams & zero days before damage happens.",
  },
  {
    icon: Zap,
    title: "Plug. Play. Protected.",
    description: "No setup headaches. Enterprise-grade security in minutes.",
  },
  {
    icon: Bot,
    title: "AI That Never Sleeps",
    description: "24x7 real-time detection + predictive protection.",
  },
  {
    icon: Globe,
    title: "One Platform. Total Protection.",
    description: "Secure devices, networks, cloud & smart IoT all in one place.",
  },
  {
    icon: Smartphone,
    title: "Stay in Control",
    description: "Instant alerts. Clear visibility. No blind spots.",
  },
  {
    icon: CheckCircle2,
    title: "Cybersecurity Made Simple",
    description: "Powerful protection without complexity."
  }
];

export default function SecuritySolutions() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".solution-pointer",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".solution-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FFFFFF] py-10 px-6 lg:px-16 relative overflow-hidden"

    >

      <div className="max-w-[1440px] mx-auto">
        <div className="solution-header mb-12 max-md:text-center">
          <div className="flex items-center max-md:justify-center gap-3 mb-6">
            <span className="text-green-500 font-semibold tracking-[0.2em] text-[16px] uppercase">
              The Good News
            </span>
          </div>
          <h2 className="font-banner fl3">
            Cybersecurity doesn’t have to be <br className="hidden md:block" />
            <HighlightedText text="complicated" className="text-dark" /> anymore.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="solution-pointer flex items-start gap-5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/5 flex items-center justify-center shrink-0 group-hover:bg-brand-red/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-banner text-[18px] font-medium text-[#1E293B] group-hover:text-brand-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-title text-[14px] text-[#64748B] leading-relaxed max-w-[450px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="solution-header mt-12 text-center">
          <p className="font-banner text-[16px] md:text-[20px] text-[#1E293B] bg-[#F7F7F7] p-4 px-6 rounded-lg w-fit mx-auto">
            Smarter threats need smarter security. <br className="md:hidden" />
            <span className="text-brand-red">That’s Marma Security.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
