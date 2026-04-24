"use client";

import React from "react";
import HighlightedText from "../global/HighlightedText";
import TumblingText from "../home/TumblingText";
import { useState, useEffect } from "react";
import Banner from "../global/Banner";

const phrases = ["Engineers", "Designers", "Visionaries", "Protectors"];

export default function CareerHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <Banner
        backgroundImage="/images/partners/Job_hero.webp"
        centerContent={true}
        title={
          <div className="flex flex-col gap-2 items-center">
            <span className="block text-center">Join the Frontline of</span>
            <div className="flex flex-wrap justify-center items-center gap-x-3">
              <HighlightedText text="AI Cybersecurity" />
              <span>for</span>
            </div>
            <TumblingText phrases={phrases} index={index} className="text-white text-center" />
          </div>
        }
        titleClassName="font-banner font-normal text-[26px] md:text-[34px] leading-[1.2] md:leading-[48px] tracking-[-0.01em] text-white text-center"
        subtitle="Help us build the most radically simplified cybersecurity ecosystem in the world. We're looking for passionate individuals to join our mission."
        subtitleClassName="font-title font-light text-[14px] md:text-[20px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-[#F3F4F6] max-w-[650px] mt-6 text-center mx-auto"
        buttons={[
          {
            label: "View Openings",
            href: "#openings",
            variant: "primary",
            icon: true,
          },
          {
            label: "Our Culture",
            href: "#culture",
            variant: "secondary",
            icon: true,
          },
        ]}
        showRightImageCircle={false}
        overlay={true}
      />
    </div>
  );
}
