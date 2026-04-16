"use client";

import { useState, useEffect } from "react";
import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/home/Banner";
import TumblingText from "@/components/home/TumblingText";

export default function SolutionsBanner() {
  const phrases = ["Enterprises", "Small Businesses", "Homes"];

  const images = [
    "/images/banners/solution-banner-right1.webp",
  ];

  const backgrounds = [
    "/images/banners/banner-solution.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <Banner
      backgroundImage={backgrounds[0]}
      rightImage={images[0]}
      heightVariant="900"
      title={
        <>
          Complete <HighlightedText text="Cybersecurity" /> for{" "}
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
      subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-[#E0E0E0] max-w-[550px]"
      buttons={[
        {
          label: "Explore",
          variant: "primary",
          href: "#explore",
          icon: true,
        },
      ]}
      rightImageAlt="Marma Security Solutions"
    />
  );
}
