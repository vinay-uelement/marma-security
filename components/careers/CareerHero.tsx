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
        backgroundImage="/images/partners/partner_demo_banner.png"
        title={
          <div className="flex flex-col gap-2">
            <span className="block">Join the Frontline of</span>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-3">
              <HighlightedText text="Cyber Security" />
              <span>for</span>
            </div>
            <TumblingText phrases={phrases} index={index} className="text-brand-red" />
          </div>
        }
        titleClassName="font-banner font-normal text-[28px] md:text-[45px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-white"
        subtitle="Help us build the most radically simplified cybersecurity ecosystem in the world. We're looking for passionate individuals to join our mission."
        subtitleClassName="font-title font-light text-[18px] md:text-[22px] leading-[1.5] text-[#F3F4F6] max-w-[650px] mt-6"
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
