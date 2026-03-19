import React from "react";
import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import OurTeam from "@/components/about/OurTeam";
import StatsSection from "@/components/about/StatsSection";
import Image from "next/image";
import AdvancedArchitecture from "@/components/technology/AdvancedArchitecture";
import DecorativeLine from "@/components/home/DecorativeLine";

export default function PartnersPage() {
  return (
    <main className="w-full flex-grow flex flex-col">
      {/* Centered Hero Banner */}
      <section
        className="relative w-full min-h-[100vh] flex justify-center items-center overflow-x-clip py-28 md:py-32"
        style={{
          backgroundImage: `url('/images/banners/banner-about-us.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Content Container inside the Banner */}
        <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col space-y-6 lg:space-y-8 items-center max-w-[1200px] mt-10 md:mt-20">
            {/* Title text */}
            <h1 className="about-banner-title">
              Redefining{" "}
              <HighlightedText
                text="Cybersecurity"
                className="font-bold text-[#FFFFFF]"
                imageClassName="bottom-[-27px] md:bottom-[-22px] right-[-10px]  "
              />{" "}
              Through Simplicity
            </h1>

            {/* Middle Subtitle */}
            <h2 className="about-banner-subtitle max-w-[750px] mx-auto mt-2 md:mt-6">
              Making enterprise-grade network security accessible for homes,
              businesses, and service providers.
            </h2>

            {/* Description */}
            <p className="about-banner-desc max-w-[900px] mx-auto mt-2">
              At Marma, we believe cybersecurity should be powerful, simple, and
              reliable. Our mission is to eliminate complexity from digital
              security by delivering automated, network-level protection that
              works seamlessly across all environments. Designed for rapid
              deployment and effortless management, Marma protects every
              connected device without requiring technical expertise or constant
              maintenance.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:pt-36">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-[70px] gap-8 text-center md:text-left">
            <h2 className="about-section-heading md:flex-1">
              Our{" "}
              <HighlightedText
                text="Team"
                className="font-bold text-[#323232]"
                imageClassName="bottom-[-10px] md:bottom-[-20px] right-[-10px]"
              />
            </h2>

            {/* Decorative */}
            <div className="ml-auto w-[320px] lg:w-[450px] flex flex-col">
              <DecorativeLine
                viewBox="0 0 700 80"
                points="-3000,40 210,40"
                dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
                className="w-full h-auto scale-x-[-1]"
              />
              <DecorativeLine
                viewBox="0 0 1260 500"
                points="20,150 500,150 600,270 3000,270"
                //   points="20,150 200,150 280,270 3000,270"
                dots={[{ cx: 0, cy: 150, rippleCount: 3 }]}
                className="w-full h-auto -mt-20"
                strokeWidth={3}
                dotRadius={16}
              />
            </div>
          </div>

          {/* Team */}
          <OurTeam />
        </div>
      </section>
      <AdvancedArchitecture />
      <StatsSection />
    </main>
  );
}
