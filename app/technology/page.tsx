import React from "react";
import TechnologyBanner from "@/components/technology/TechnologyBanner";
import IntelligentSecurity from "@/components/technology/IntelligentSecurity";
import AdvancedArchitecture from "@/components/technology/AdvancedArchitecture";
import HighlightedText from "@/components/global/HighlightedText";
import StatsSection from "@/components/about/StatsSection";

export default function TechnologyPage() {
  return (
    <main className="w-full bg-[#FFFFFF] min-h-screen">
      {/* The new dedicated Technology Banner */}
      <TechnologyBanner
        title={
          <>
            Built on Enterprise-Grade
            <br />
            <HighlightedText
              text="Security"
              className="text-[#FFFFFF] font-bold"
              imageClassName="bottom-[-15px] md:bottom-[-20px] right-[5px]"
            />{" "}
            Technology
          </>
        }
        subtitle="Marma Security's products are powered by a comprehensive suite of enterprise-grade security technologies, all orchestrated through AI-powered automation. The platform uses continuous machine learning, behavioral analysis, and global cloud intelligence to deliver autonomous, predictive protection."
        backgroundImage="/images/banners/Technology-banner.webp"
        buttonText="Explore"
      />

      {/* The Intelligent Security Features Layout */}
      <IntelligentSecurity />

      {/* The Advanced Architecture Layout Block */}
      <AdvancedArchitecture />
      <StatsSection />
    </main>
  );
}
