"use client";

import { useState, useEffect } from "react";
import HighlightedText from "@/components/global/HighlightedText";
import dynamic from "next/dynamic";
import DecorativeLine from "@/components/home/DecorativeLine";
import Banner from "@/components/home/Banner";
import TumblingText from "@/components/home/TumblingText";
// import OurTopProduct from "@/components/home/OurTopProduct";
import AdvancedArchitecture from "@/components/technology/AdvancedArchitecture";

// Dynamic imports
const CybercrimeStats = dynamic(
  () => import("@/components/home/CybercrimeStats"),
);
const BadNewsStats = dynamic(
  () => import("@/components/home/BadNewsStats"),
);
const TabletShowcase = dynamic(
  () => import("@/components/home/TabletShowcase"),
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
    "/images/product/marma-enterprise.webp",
    "/images/banners/homepage-right-banner1.webp",
    "/images/banners/solution-banner-right1.webp",
  ];

  const learnMoreLinks = [
    "/product?tab=enterprise&product=safeenterprise-400",
    "/product?tab=smb&product=safebiz",
    "/product?tab=home&product=safehome",
  ];

  const backgrounds = [
    "/images/home/Security_Images (1).webp",
    "/images/home/Quick & Effortless Setup.webp",
    "/images/home/Security_Images (2).webp",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col bg-[#FFFFFF] min-h-screen overflow-x-clip"
    >
      {/* ── SNAP 1: Hero Banner ───────────────────────────────────────────── */}
      <div className="">
        <Banner
          backgroundImage={backgrounds[index]}
          rightImage={images[index]}
          title={
            <>
              Radically Simplified <br className="hidden md:block" />
              <HighlightedText text="Cybersecurity" /> for{" "}
              <br className="block md:hidden" />
              <TumblingText phrases={phrases} index={index} />
            </>
          }
          titleClassName="font-banner font-normal text-[26px] md:text-[34px] leading-[1.2] md:leading-[48px] tracking-[-0.01em] text-white"
          subtitle={
            <>
              Enterprise-grade cybersecurity that works in minutes.{" "}
              <br className="hidden sm:block" />
              No IT or technical expertise needed.
            </>
          }
          subtitleClassName="font-title font-light text-[16px] md:text-[22px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
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
          overlay={true}
        />
      </div>

      {/* ── SNAP 1.5: Bad News Stats ──────────────────────────────────────── */}
      <div className=" md:h-dvh flex items-center bg-[#FFFFFF]">
        <BadNewsStats />
      </div>

      {/* ── SNAP 1.6: Tablet Showcase ─────────────────────────────────────── */}
      <div className="">
        <TabletShowcase />
      </div>

      {/* ── SNAP 2: Cybercrime Stats ──────────────────────────────────────── */}
      <div className=" md:h-dvh">
        <section className="w-full max-w-[1440px] mx-auto px-6 max-sm:pt-8 lg:px-12 pt-0 md:pt-24 bg-[#FFFFFF] relative">
          <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center gap-8 relative z-10 w-full">
            <h2 className="fl2 w-full min-[901px]:w-[55%] home-exposed-heading text-left">
              Your{" "}
              <HighlightedText
                text="enterprise, business and home"
                className="text-[#323232] !font-bold"
              />{" "}
              are more <br /> exposed to cybercrime than you think.
            </h2>

            <div className="flex flex-col w-[40%] sm:w-[30%] min-[901px]:w-[45%] self-end min-[901px]:self-auto translate-x-8 sm:translate-x-12 min-[901px]:translate-x-0 mt-4 min-[901px]:mt-0 pointer-events-none z-0">
              <DecorativeLine
                viewBox="0 0 500 120"
                points="80,30 130,90 3000,90"
                dots={[{ cx: 80, cy: 30, rippleCount: 3 }]}
              />
            </div>
          </div>
        </section>
        <CybercrimeStats />
      </div>

      {/* ── SNAP 3: Security Cards ────────────────────────────────────────── */}
      <div className=" md:h-dvh">
        <SecurityCards />
      </div>

      {/* ── SNAP 4: Our Top Products ──────────────────────────────────────── */}
      {/* <div className=" md:h-dvh">
        <OurTopProduct />
      </div> */}

      {/* ── SNAP 5: Home Solutions Info ───────────────────────────────────── */}
      <div className=" md:h-dvh">
        <HomeSolutionsInfo />
      </div>

      {/* ── SNAP 6: Challenges Tab ────────────────────────────────────────── */}
      <div className=" md:h-dvh">
        <Challengestab />
      </div>

      {/* ── SNAP 7: Protection Banner ─────────────────────────────────────── */}
      {/* <div className=" md:h-dvh">
        <ProtectionBanner />
      </div> */}

      {/* ── SNAP 8: How We Protect ────────────────────────────────────────── */}
      <div className="">
        <HowWeProtect />
      </div>

      {/* ── SNAP 9: Testimonial ───────────────────────────────────────────── */}
      {/* <div className=" md:h-dvh">
        <Testimonial />
      </div> */}
      <div className="">
        <AdvancedArchitecture />
      </div>
    </div>
  );
}
