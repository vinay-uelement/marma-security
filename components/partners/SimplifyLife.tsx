import React from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";

interface FeatureItem {
  id: string;
  image: string;
  title: string;
  description: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: "truck-rolls",
    image: "/images/partners/simplify-img1.webp", // Using existing placeholder
    title: "No More Truck Rolls",
    description: (
      <>
        <strong className="fl5-1 block mb-[7px] md:mb-4">
          Fully remote deployment and management.
        </strong>
        <p className="fl4-1 mb-[10px] md:mb-6">
          Marma can be deployed in minutes with simple phone-guided setup
          through an intuitive app, reducing effort, cost, and deployment time.
        </p>
      </>
    ),
  },
  {
    id: "proof-of-value",
    image: "/images/partners/simplify-img2.webp", // Using existing placeholder
    title: "Continuous Proof of Value",
    description: (
      <>
        <strong className="fl5-1 block mb-[7px] md:mb-4">
        Measurable security performance in real time.
        </strong>
        <p className="fl4-1 mb-[10px] md:mb-6">
          Cybersecurity often works invisibly—making value hard to see. Marma
          delivers clear, continuous visibility into blocked threats through an
          intuitive app.
        </p>
      </>
    ),
  },
  {
    id: "wfh-use-cases",
    image: "/images/partners/simplify-img3.webp", // Using existing placeholder
    title: "Serve Work From Home Use Cases",
    description: (
      <>
        <strong className="fl5-1 block mb-[7px] md:mb-4">
          Secure remote work from any location.
        </strong>
        <p className="fl4-1 mb-[10px] md:mb-6">
          Marma secures vulnerable home networks, protecting remote work, smart
          devices, and families from cyber risks.
        </p>
      </>
    ),
  },
];

export default function SimplifyLife() {
  return (
         <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 bg-[#FFFFFF] relative">
        {/* The flex container now stays flex-col until 901px */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center mb-16 gap-8 relative z-10 w-full mb-16">
          {/* TEXT */}
          <h2 className="w-full min-[901px]:w-[55%] fl2 text-left">

          <HighlightedText
            text="Simplify"
            className="text-[#323232] font-bold"
            imageClassName="bottom-[-10px] md:bottom-[-20px] right-[0]"
          />{" "}
          Your Life.
        </h2>

        {/* Decorative Red Line Graphic */}
          <div className="flex flex-col w-[60%] sm:w-[50%] min-[901px]:w-[45%] self-end min-[901px]:self-auto translate-x-8 sm:translate-x-12 min-[901px]:translate-x-0 mt-12
           min-[901px]:mt-0 pointer-events-none z-0">
          <DecorativeLine
            viewBox="0 0 500 80"
            points="-3000,40 200,40"
            dots={[{ cx: 200, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
            dotRadius={6}
            animationDuration={2.5}
          />
          <DecorativeLine
            viewBox="0 0 500 120"
            points="20,20 80,90 3000,90"
            dots={[{ cx: 20, cy: 20, rippleCount: 4, rippleBaseDelay: 0.9 }]}
            className="w-full h-auto -mt-28"
            dotRadius={7}
            animationDuration={3}
          />
        </div>
      </div>

      {/* Features List Layout */}
      <div className="flex flex-col w-full pb-8 md:pb-16 gap-10 lg:gap-24 relative overflow-hidden">
        {features.map((feature) => (
          <div key={feature.id} className="w-full relative">

            {/* MOBILE & TABLET LAYOUT */}
            <div className="grid grid-cols-[1fr_1.1fr] sm:grid-cols-[1fr_1.2fr] md:grid-cols-2 lg:hidden gap-3 sm:gap-6 md:gap-8 items-stretch text-left w-full">

              {/* Column 1: Title + Image */}
              <div className="flex flex-col mt-2 md:mt-0 gap-0 md:gap-4">
                <h3 className="fl3-1 whitespace-pre-line text-left">
                  {feature.title}
                </h3>
                <div className="relative w-full aspect-[427/237] rounded-[8px] md:rounded-[12px] overflow-hidden shadow-sm mt-2 md:mt-auto border border-[#E5E5E5]/50">
                  <div className="bg-gray-100 w-full h-full absolute inset-0 z-0" />
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover relative z-10"
                  />
                  {/* Mobile diamond accent overlay bottom-right based on SS */}
                  <div className="absolute right-1 bottom-1 z-20 opacity-30 select-none pointer-events-none">
                     <svg width="6" height="6" viewBox="0 0 10 10" fill="currentColor" className="text-white"><path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" /></svg>
                  </div>
                </div>
              </div>

              {/* Column 2: Description Data Area */}
              <div className="flex flex-col justify-start text-left h-full pt-[8px] md:pt-[2px]">
                {feature.description}
              </div>
            </div>

            {/* DESKTOP LAYOUT (UNCHANGED) */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-8 lg:gap-12 items-center text-center md:text-left md:items-center">

              {/* 1. Image Column */}
              <div className="relative w-full max-w-[427px] aspect-[427/237] rounded-[16px] overflow-hidden shadow-sm mb-4 md:mb-0 mx-auto">
                <div className="bg-gray-200 w-full h-full absolute inset-0 z-0" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover relative z-10"
                />
              </div>

              {/* 2. Title Column */}
              <div className="flex flex-col justify-start md:pt-5 h-full">
                <h3 className="fl3-1 whitespace-pre-line">
                  {feature.title}
                </h3>
              </div>

              {/* 3. Description Column with conditional Left Border on Desktop */}
              <div className="flex flex-col justify-center items-center md:items-start h-full border-l-0 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-[#E5E5E5] pt-6 md:pt-0 pl-0 md:pl-8 lg:pl-10 mt-2 md:mt-0">
                <div className="flex flex-col justify-center items-center md:items-start w-full">
                  {feature.description}
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
