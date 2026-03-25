import React from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import Link from "next/link";
import DecorativeLine from "./DecorativeLine";

interface FeatureItem {
  id: string;
  image: string;
  title: string;
  description: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: "quick-setup",
    image: "/images/home/protect-image-homepage.webp", // Using placeholder, user to replace
    title: "Quick & Effortless Setup",
    description: (
      <>
        <strong className="fl5-1 block mb-[7px] md:mb-4">
          Get protected in under 5<br />
          minutes.
        </strong>
        <p className="fl4-1 mb-[10px] md:mb-6">
          No technical expertise, networking knowledge, or complex
          configurations required simply plug in and go.
        </p>
        <Link href="#" className="flex items-center gap-4 group w-fit">
          <span className="fl5-2 group-hover:text-brand-red-hover transition-colors">
            Learn more
          </span>
          <span className="text-brand-red group-hover:text-brand-red-hover transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[1px]">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </>
    ),
  },
  {
    id: "automated-protection",
    image: "/images/home/protection-homepage.webp", // Using placeholder, user to replace
    title: "Fully Automated Protection",
    description: (
      <>
        <strong className="fl5-1 block mb-[7px] md:mb-4">
          Security that runs itself.
        </strong>
        <p className="fl4-1 mb-[10px] md:mb-6">
          Marma continuously monitors your network and blocks threats in real
          time, without any manual intervention.
        </p>
        <Link href="#" className="flex items-center gap-4 group w-fit">
          <span className="fl5-2 group-hover:text-brand-red-hover transition-colors">
            Learn more
          </span>
          <span className="text-brand-red group-hover:text-brand-red-hover transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[1px]">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </>
    ),
  },
  {
    id: "zero-maintenance",
    image: "/images/features/zero-maintainace.webp", // Using placeholder, user to replace
    title: "Zero Maintenance Required",
    description: (
      <>
        <strong className="fl5-1 block mb-[7px] md:mb-4">
          No updates, no <br />
          monitoring, no hassle.
        </strong>
        <p className="fl4-1 mb-[10px] md:mb-6">
          All security updates, patches, and improvements are handled
          automatically in the background.
        </p>
        <Link href="#" className="flex items-center gap-4 group w-fit">
          <span className="fl5-2 group-hover:text-brand-red-hover transition-colors">
            Learn more
          </span>
          <span className="text-brand-red group-hover:text-brand-red-hover transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[1px]">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </>
    ),
  },
];

export default function HowWeProtect() {
  return (
    <section className="w-full bg-bg-white">
      {/* Header Section */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 md:pt-24">
        <div className="relative flex flex-col md:flex-row justify-between items-start mb-6 md:mb-24 gap-4 md:gap-8 text-left w-full sm:h-[80px] md:h-auto">
          {/* Decorative Red Line Graphic (Mobile & Tablet Layout) -> Absolute to not push content down */}
          <div className="flex md:hidden absolute top-[-50px] right-[-24px] items-start justify-end w-[280px] pointer-events-none overflow-x-clip z-0">
            <div className="w-full flex justify-end">
              <DecorativeLine
                viewBox="0 0 700 80"
                points="100,40 1100,40"
                dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                className="w-full h-auto translate-x-[15%]"
                animationDuration={2.8}
              />
            </div>
          </div>

          <h2 className="fl2-2 w-full md:max-w-[520px] relative z-10">
            How we{" "}
            <HighlightedText
              text="protect you?"
              className="font-bold text-text-dark"
              imageClassName="absolute h-auto object-contain pointer-events-none -z-10 bottom-[-10px] md:bottom-[-24px]  left-2/4 -translate-x-1/2 w-[70%]"
            />
          </h2>

          {/* Decorative Red Line Graphic (Desktop Layout) */}
          <div className="hidden md:block absolute right-0 top-0 pointer-events-none z-0">
            <div className="relative w-screen right-1/2 translate-x-1/2">
              <DecorativeLine
                viewBox="0 0 700 80"
                points="100,40 1100,40"
                dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                className="w-[300px] lg:w-[400px] h-auto ml-auto"
                animationDuration={2.8}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features List Layout */}
      <div className="flex flex-col w-full pb-8 md:pb-16 gap-10 lg:gap-24 relative overflow-hidden">
        {features.map((feature, index) => (
          <div key={feature.id} className="w-full relative">
            {/* Independent Full-Width Desktop/Mobile Background strictly for the 2nd Row */}
            {index === 1 && (
              <div className="absolute inset-y-[-32px] lg:inset-y-[-48px] w-[200vw] left-1/2 -translate-x-1/2 bg-bg-light -z-10 pointer-events-none" />
            )}
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
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
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 10 10"
                        fill="currentColor"
                        className="text-white"
                      >
                        <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Column 2: Description Data Area */}
                <div className="flex flex-col justify-start text-left h-full mt-2">
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
                  <h3 className="fl3-1 whitespace-pre-line">{feature.title}</h3>
                </div>

                {/* 3. Description Column with conditional Left Border on Desktop */}
                <div className="flex flex-col justify-start items-center md:items-start h-full border-l-0 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-[#E5E5E5] pt-6 md:pt-5 pl-0 md:pl-8 lg:pl-10 mt-2 md:mt-0">
                  <div className="flex flex-col justify-center items-center md:items-start w-full">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
