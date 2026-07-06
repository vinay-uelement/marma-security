"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import {
  PARTNERS,
  getAvatarColor,
  getInitials,
  type RegionKey,
  type Partner,
} from "@/lib/partnerData";

function PartnerLogo({ partner, index }: { partner: Partner; index: number }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="w-full h-full rounded-xl flex items-center justify-center"
        style={{ backgroundColor: getAvatarColor(index) }}
      >
        <span className="text-white font-bold text-xl select-none">
          {getInitials(partner.name)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        fill
        className="object-contain"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  );
}

export default function RegionalPartners() {
  const [region, setRegion] = useState<RegionKey>("USA");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then((data: { region: RegionKey }) => {
        const detected = data.region;
        const hasPartners = PARTNERS[detected] && PARTNERS[detected].length > 0;
        setRegion(hasPartners ? detected : "USA");
      })
      .catch(() => {
        setRegion("USA");
      })
      .finally(() => setIsLoaded(true));
  }, []);

  const partners: Partner[] = PARTNERS[region] ?? PARTNERS["USA"];

  // Duplicate the list to create seamless infinite scroll
  const carouselItems = [...partners, ...partners];

  const animationDuration = `${partners.length * 4}s`;

  return (
    <section className="w-full bg-white flex flex-col items-center pt-16 lg:pt-24 font-body overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 lg:px-16 mx-auto flex flex-col items-center gap-10 lg:gap-14">

        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[800px]">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#FF0000] uppercase tracking-[2px]">
            <Globe size={16} strokeWidth={2.5} />
            <span>Partner Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#333333] leading-tight">
            Our Trusted Partners
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-[600px]">
            Marma Security works with leading technology partners to deliver best-in-class cybersecurity solutions in your region.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className={`
          w-full relative mt-4
          transition-opacity duration-500
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-[80px] md:w-[150px] h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[80px] md:w-[150px] h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="partner-carousel-track flex items-center gap-6 md:gap-8"
          style={{
            width: "max-content",
            animationDuration,
          }}
        >
          {carouselItems.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 flex items-center gap-4 bg-white border border-[#F2F2F2] rounded-2xl
                         px-6 py-5 md:px-8 md:py-6
                         shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                         hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#E8E8E8]
                         transition-all duration-300 hover:-translate-y-1
                         min-w-[220px] md:min-w-[260px]"
            >
              {/* Logo */}
              <div className={`w-[80px] h-[48px] md:w-[100px] md:h-[56px] flex items-center justify-center flex-shrink-0 rounded-xl border p-1.5 md:p-2 overflow-hidden transition-colors duration-300 ${partner.theme === "dark" ? "bg-[#1A1A1A] border-[#2A2A2A] shadow-inner" : "bg-white border-[#F0F0F0]"}`}>
                <PartnerLogo partner={partner} index={index % partners.length} />
              </div>

              {/* Name */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm md:text-base font-semibold text-[#323232] group-hover:text-[#FF0000] transition-colors duration-300 truncate">
                  {partner.name}
                </span>
                <span className="text-xs text-slate-400 truncate">
                  {partner.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
