"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import Link from "next/link";
import nextimage from "next/image";
import DecorativeLine from "../home/DecorativeLine";
interface TechFeatureItem {
  id: string;
  iconUrl: string; // The URL for the icon
  title: string;
  description: string;
}

const features: TechFeatureItem[] = [
  {
    id: "phishblock",
    iconUrl: "/images/global/ic_outline-message.svg",
    title: "PhishBlock",
    description: "Protection against phishing attacks",
  },
  {
    id: "netimmunity",
    iconUrl: "/images/global/bx_globe.svg",
    title: "NetImmunity",
    description: "Protection against network-based attacks",
  },
  {
    id: "malwareguard",
    iconUrl: "/images/global/tabler_virus.svg",
    title: "MalwareGuard",
    description: "Protection against dangerous malware and spyware",
  },
  {
    id: "ransomguard",
    iconUrl: "/images/global/ic_outline-shield.svg",
    title: "RansomGuard",
    description: "Protection against dangerous ransomware",
  },
  {
    id: "phishblock-2",
    iconUrl: "/images/global/ic_outline-message.svg",
    title: "PhishBlock",
    description: "Protection against phishing attacks",
  },
  {
    id: "phishblock-3",
    iconUrl: "/images/global/ic_outline-shield.svg",
    title: "PhishBlock",
    description: "Protection against phishing attacks",
  },
];

export default function IntelligentSecurity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, features.length - itemsPerPage);

  // Auto-clamp current index if maxIndex shrinks
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, features.length - itemsPerPage)));
  }, [itemsPerPage]);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Slice to the items currently active based on screen size
  const visibleFeatures = features.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  // Dynamic progress bar calculation (based on how max items we have scrolled)
  const progressPercentage =
    features.length > 0
      ? Math.min(((currentIndex + itemsPerPage) / features.length) * 100, 100)
      : 100;

  return (
    <section className="w-full bg-[#FFFFFF] pt-12 md:pt-24 pb-5 md:pb-20 overflow-x-clip relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative flex flex-col ">
        {/* The flex container now stays flex-col until 901px */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center mb-6 md:mb-2 gap-8 relative z-10 w-full md:mb-16">
          {/* TEXT: Centered below 901px, left-aligned above */}
          <h2 className="w-full min-[901px]:w-[55%] fl2 text-left">
            <HighlightedText
              text="Intelligent security"
              className="font-bold text-[#323232]"
              imageClassName="bottom-[-15px] md:bottom-[-20px] left-1/2 -translate-x-1/2"
            />{" "}
            that works
            <br className="hidden min-[901px]:block" /> silently in the
            background.
          </h2>

          {/* Decorative Red Line Graphic */}
          <div className="flex flex-col w-[60%] sm:w-[50%] min-[901px]:w-[45%] self-end min-[901px]:self-auto translate-x-8 sm:translate-x-12 min-[901px]:translate-x-0 mt-12 min-[901px]:mt-0 pointer-events-none z-0">
            <DecorativeLine
              viewBox="0 0 700 80"
              points="0,40 210,40"
              dots={[{ cx: 210, cy: 40, rippleCount: 4 }]}
              className="w-full h-auto scale-x-[-1]"
              dotRadius={8}
              animationDuration={2.5}
            />
            <DecorativeLine
              viewBox="0 0 1260 500"
              points="20,150 500,150 600,270 3000,270"
              dots={[{ cx: 0, cy: 150, rippleCount: 3 }]}
              className="w-full h-auto -mt-28"
              strokeWidth={4}
              dotRadius={20}
              animationDuration={3}
            />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:ms-20 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12 w-full mt-4 min-h-[300px]">
          {visibleFeatures.map((feature, index) => (
            <div
              key={`${feature.id}-${index + currentIndex}`}
              className="flex flex-col items-center sm:items-start group animate-fade-in"
            >
              {/* Icon Container block matching Figma gray circle aesthetic */}
              <div className="w-[100px] h-[100px] md:w-[80px] md:h-[80px] rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6 lg:mb-8 transition-transform group-hover:scale-[1.03]">
                <div className="relative w-[20px] h-[20px] md:w-[40px] md:h-[40px]">
                  <Image
                    src={feature.iconUrl}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 40px, 50px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Feature Title */}
              <h3 className="fl3-3 mb-2 md:mb-4 text-center sm:text-left w-full">
                {feature.title}
              </h3>

              {/* Feature Text/Description */}
              <p className="fl4  text-center sm:text-left w-full h-[20%] md:h-[40%] sm:max-w-[60%]">
                {feature.description}
              </p>

              {/* Explore Link */}
              <Link
                href="#"
                className="inline-flex items-center gap-4 group/btn mx-auto sm:mx-0 pt-2 pb-1"
              >
                <span className="fl5-2 group-hover/btn:text-[#E10000] transition-colors">
                  Explore
                </span>
                <span className="text-[#FF0000] group-hover/btn:text-[#E10000] transition-transform group-hover/btn:translate-x-1 flex items-center justify-center translate-y-[1px]">
                  <svg
                    width="7"
                    height="12"
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
            </div>
          ))}
        </div>

        {/* Bottom Carousel Navigation block */}
        {features.length > itemsPerPage && (
          <div className="w-full flex justify-between items-center mt-8 md:mt-14 gap-6 md:gap-12">
            {/* Progress Bar Container - dynamically flexes to fill available space besides buttons */}
            <div className="flex-grow relative h-[3px]">
              {/* Inactive Gray Track */}
              <div className="absolute inset-0 w-full h-full bg-[#E5E5E5] rounded-full z-10" />
              {/* Active Red Progress Bar */}
              <div
                className="absolute left-0 top-0 h-full bg-[#FF0000] z-20 transition-all duration-300 ease-in-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Carousell arrows layout space block */}
            <div className="flex justify-end gap-3 shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors
                                    ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
              >
                {/* Left Arrow Icon */}
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="#FF0000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`w-10 h-10 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors 
                                    ${currentIndex === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
              >
                {/* Right Arrow Icon */}
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="#FF0000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
