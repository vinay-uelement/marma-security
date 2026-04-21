export const metadata = {
  title: "Technology | Marma Security",
  description:
    "Built on enterprise-grade security technology. Discover Marma Security's AI-driven intelligence, continuous machine learning, and advanced cloud architecture.",
  alternates: {
    canonical: "https://marmasecurity.com/technology",
  },
  openGraph: {
    title: "Technology | Marma Security",
    description:
      "Built on enterprise-grade security technology. Discover Marma Security's AI-driven intelligence and advanced cloud architecture.",
    url: "https://marmasecurity.com/technology",
    siteName: "Marma Security",
    images: [
      {
        url: "/images/banners/Technology-banner.webp",
        width: 1200,
        height: 630,
        alt: "Marma Security Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology | Marma Security",
    description:
      "Learn about our continuous machine learning architecture and global cloud intelligence.",
    images: ["/images/banners/Technology-banner.webp"],
  },
};

import React from "react";
import TechnologyBanner from "@/components/technology/TechnologyBanner";
import IntelligentSecurity from "@/components/technology/IntelligentSecurity";
import TheMarmaAdvantage from "@/components/technology/TheMarmaAdvantage";
import AdvancedArchitecture from "@/components/technology/AdvancedArchitecture";
import HighlightedText from "@/components/global/HighlightedText";
import StatsSection from "@/components/about/StatsSection";
import MobileAppShowcase from "@/components/home/MobileAppShowcase";

export default function TechnologyPage() {
  return (
    <main className="w-full bg-[#FFFFFF] min-h-screen">
      {/* The new dedicated Technology Banner */}
      <div className="">
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
          backgroundImage="/images/banners/bannerPartners.webp"
          isButton={false}
        />
      </div>

      {/* The Marma Advantage Section */}
      <div className="">
        <TheMarmaAdvantage />
      </div>
      <MobileAppShowcase />
    </main>
  );
}
