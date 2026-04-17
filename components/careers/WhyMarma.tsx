"use client";

import React from "react";
import GlassWrapper from "../global/GlassWrapper";
import { Zap, ShieldCheck, Globe, Users } from "lucide-react";

const values = [
  {
    icon: <Zap className="w-8 h-8 text-brand-red" />,
    title: "Radical Simplicity",
    description: "We believe cybersecurity shouldn't be complex. We build tools that anyone can use, regardless of technical expertise.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    title: "Unwavering Protection",
    description: "Our mission is to outpace threats and provide enterprise-grade security to everyone, from corporations to homes.",
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-red" />,
    title: "Global Impact",
    description: "Join a team that operates at scale, protecting digital ecosystems across the globe with real-time threat intelligence.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-red" />,
    title: "Empowered Culture",
    description: "We value ownership, transparency, and innovation. Every voice matters in our quest to secure the digital world.",
  },
];

export default function WhyMarma() {
  return (
    <section id="culture" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-banner text-[32px] md:text-[48px] text-[#1E293B] mb-6 leading-tight">
            Why Build at <span className="text-brand-red">Marma?</span>
          </h2>
          <p className="font-title text-[18px] md:text-[20px] text-[#64748B] max-w-[800px] leading-relaxed">
            We're not just building products; we're redefining the relationship between humans and digital security. Join us in creating a safer world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="h-full flex flex-col">
              <GlassWrapper
                padding="p-0"
                borderRadius="rounded-[32px]"
                innerBorderRadius="rounded-[24px]"
                showGlow={false}
                className="h-full"
              >
                <div className="flex flex-col h-full bg-white/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/60">
                  <div className="mb-6 bg-white/60 w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-white/80">
                    {value.icon}
                  </div>
                  <h3 className="font-banner text-[22px] text-[#1E293B] mb-4">
                    {value.title}
                  </h3>
                  <p className="font-title text-[16px] leading-[1.6] text-[#475569]">
                    {value.description}
                  </p>
                </div>
              </GlassWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
