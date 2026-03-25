"use client";

import React from "react";
import Link from "next/link";
import HighlightedText from "@/components/global/HighlightedText";
import SimplifyLife from "@/components/partners/SimplifyLife";
import PartnersBottomBanner from "@/components/partners/PartnersBottomBanner";
import Button from "@/components/global/Button";

export default function PartnersPage() {
  return (
    <main className="w-full flex-grow flex flex-col items-center">
      {/* Centered Hero Banner (Similar to TechnologyBanner) */}
      <section
        className="relative w-full min-h-[100vh] flex flex-col overflow-x-clip"
        style={{
          backgroundImage: `url('/images/banners/banner-partners.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Content Container — fills entire banner height */}
        <div className="relative z-10 w-full flex-1 px-6 lg:px-12 flex flex-col items-center text-center pt-28 md:pt-32">

          {/* Title + Subtitle group — sits near the top-center */}
          <div className="flex flex-col space-y-6 lg:space-y-8 items-center max-w-[900px] mt-10 md:mt-20">
            {/* Title text */}
            <h1 className="fl1 text-white!">
              MSP, MSSP and ITSP{" "}
              <HighlightedText
                text="Partners."
                className="font-bold text-[#FFFFFF]"
                imageClassName="bottom-[-20px] md:bottom-[-20px] right-[-5px]"
              />
            </h1>

            {/* Subtitle */}
            <p className="partners-banner-subtitle max-w-[700px] mx-auto mt-4">
              Marma Security operates a comprehensive partner program designed to extend reach and enhance service delivery. Our ecosystem enables VARs, MSPs, MSSPs, and System Integrators to offer enterprise-grade cybersecurity to all customer segments with simplified deployment and strong recurring revenue potential.
            </p>
          </div>

          {/* Buttons — vertically centered in the remaining space below subtitle */}
          <div className="flex-1 flex items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              {/* Get Started Button */}
              <Link href="#">
                <Button icon label="Get Started" />
              </Link>

              {/* Learn More Button */}
              <Link href="#">
                <Button icon variant="secondary" label="Learn More" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <SimplifyLife />
      <PartnersBottomBanner />
    </main>
  );
}
