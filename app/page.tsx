"use client";

import { useState, useEffect } from "react";
import HighlightedText from "@/components/global/HighlightedText";
import dynamic from "next/dynamic";
import DecorativeLine from "@/components/home/DecorativeLine";
import Banner from "@/components/home/Banner";
import TumblingText from "@/components/home/TumblingText";
import OurTopProduct from "@/components/home/OurTopProduct";

// Dynamic imports
const CybercrimeStats = dynamic(
  () => import("@/components/home/CybercrimeStats"),
);
const SecurityCards = dynamic(() => import("@/components/home/SecurityCards"));
const HomeSolutionsInfo = dynamic(
  () => import("@/components/home/HomeSolutionsInfo"),
);
const Challengestab = dynamic(() => import("@/components/home/Challengestab"));
const ProtectionBanner = dynamic(
  () => import("@/components/home/ProtectionBanner"),
);
const HowWeProtect = dynamic(() => import("@/components/home/HowWeProtect"));
const Testimonial = dynamic(
  () => import("@/components/testimonial/Testimonial"),
);

export default function Home() {
  const phrases = ["Enterprises", "Small Businesses", "Homes"];

  const images = [
    "/images/product/SafeEnterprise4001.webp",
    "/images/banners/solution-banner-right1.webp",
    "/images/banners/homepage-right-banner1.webp",
  ];

  const learnMoreLinks = [
    "/product?tab=enterprise&product=safeenterprise-400",
    "/product?tab=smb&product=safebiz",
    "/product?tab=home&product=safehome",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#FFFFFF] min-h-screen overflow-x-clip">
      <Banner
        backgroundImage="/images/banners/homepage-banner.webp"
        rightImage={images[index]}
        title={
          <>
            Radically Simplified <br className="hidden md:block" />
            <HighlightedText text="Cybersecurity" /> for{" "}
            <br className="block md:hidden" />
            <TumblingText phrases={phrases} index={index} />
          </>
        }
        titleClassName="font-banner font-normal text-[28px] md:text-[36px] leading-[1.2] md:leading-[50px] tracking-[-0.01em] text-white"
        subtitle={
          <>
            Enterprise-grade cybersecurity that works in minutes.{" "}
            <br className="hidden sm:block" />
            No IT or technical expertise needed.
          </>
        }
        subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
        buttons={[
          { label: "Order Now", href: "#", variant: "primary", icon: true },
          {
            label: "Learn More",
            href: learnMoreLinks[index],
            variant: "secondary",
            icon: true,
          },
        ]}
        rightImageAlt="Marma Security Device"
      />

      <section className="w-full max-w-[1440px] mx-auto px-6 max-sm:pt-8 lg:px-12 pt-0 md:pt-24 bg-[#FFFFFF] relative">
        <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center mb-2 gap-8 relative z-10 w-full md:mb-16">
          <h2 className="fl2 w-full min-[901px]:w-[55%] home-exposed-heading text-left">
            Your{" "}
            <HighlightedText
              text="enterprise, business and home"
              className="text-[#323232] !font-bold"
            />{" "}
            are more <br /> exposed to cybercrime than you think.
          </h2>

          <div className="flex flex-col w-[60%] sm:w-[50%] min-[901px]:w-[45%] self-end min-[901px]:self-auto translate-x-8 sm:translate-x-12 min-[901px]:translate-x-0 mt-4 min-[901px]:mt-0 pointer-events-none z-0">
            <DecorativeLine
              viewBox="0 0 500 120"
              points="80,30 130,90 3000,90"
              dots={[{ cx: 80, cy: 30, rippleCount: 3 }]}
            />
          </div>
        </div>
      </section>
      <CybercrimeStats />
      <SecurityCards />
      <OurTopProduct />
      <HomeSolutionsInfo />
      <Challengestab />
      <ProtectionBanner />
      <HowWeProtect />
      <Testimonial />
    </div>
  );
}
