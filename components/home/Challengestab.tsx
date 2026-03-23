"use client";

import React, { useState } from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import DecorativeLine from "./DecorativeLine";

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

const tabItems: TabData[] = [
  {
    id: "healthcare",
    label: "Complex Setup & Maintenance",
    title: "Clear & Benefit-Focused",
    description:
      "Marma installs in under five minutes and begins protecting your network immediately. Designed with simplicity at its core, it requires no technical knowledge, manual configurations, or ongoing maintenance. Once set up, Marma runs automatically in the background, continuously monitoring and defending your entire Wi-Fi network against cyber threats.",
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "legal",
    label: "Privacy & Data Safety Concerns",
    title: "Clear & Benefit-Focused",
    description:
      "Law firms handle highly sensitive client data. Marma provides enterprise-grade encryption and network monitoring to prevent unauthorized access to privileged communications and case files across your entire infrastructure.",
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "finance",
    label: "Rising Cyber Threats",
    title: "Clear & Benefit-Focused",
    description:
      "Financial institutions require the highest level of security. Our zero-trust architecture ensures that every transaction, client portfolio, and internal communication remains completely isolated from external threats.",
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "manufacturing",
    label: "Expensive Security Solutions",
    title: "Clear & Benefit-Focused",
    description:
      "Modern manufacturing relies on connected IoT devices. Marma protects operational technology (OT) from disruption, ensuring production lines continue running without vulnerability to external network attacks.",
    image: "/images/solutions/healthcare-solution.webp",
  },
];

export default function Challengestab() {
  const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);
  const activeData = tabItems.find((t) => t.id === activeTab) || tabItems[0];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-4 bg-bg-white">
      
      {/* Header Section */}
      <div className="flex items-start md:items-center justify-between gap-4 md:gap-8 mb-[10px] md:mb-[60px] w-full">
        
        {/* Heading */}
        <h2 className="home-challenge-heading relative z-10 flex-1">
          Overcoming your{" "}
          <HighlightedText
            text="challenges"
            className="font-bold"
            imageClassName="bottom-[-14px] md:bottom-[-14px]"
          />
        </h2>

        {/* Decorative Line (Mobile + Tablet) */}
        <div className="flex md:hidden justify-end items-start  flex-shrink-0 pointer-events-none relative z-0">
          <div className="w-[160px] sm:w-[240px] translate-y-[-70%]">
            <DecorativeLine
              viewBox="0 0 800 500"
              points="600,280 960,280 1020,420 1560,420"
              dots={[{ cx: 600, cy: 280, rippleCount: 3 }]}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Decorative Line (Desktop) */}
        <div className="hidden md:flex items-start justify-end w-full max-w-[400px] lg:max-w-[500px] -mt-16 lg:-mt-24 pointer-events-none z-0">
          <div className="relative w-screen right-1/2 translate-x-1/2 flex justify-end">
            <div className="w-[400px] lg:w-[500px]">
              <DecorativeLine
                viewBox="0 0 800 500"
                points="600,280 960,280 1020,420 1560,420"
                dots={[{ cx: 600, cy: 280, rippleCount: 3 }]}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Navigation */}
      <div className="w-full mb-10 lg:hidden relative z-20">
        <div className="relative w-full">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full appearance-none bg-bg-light border border-[#E5E5E5] rounded-[12px] px-6 py-1 font-body font-bold text-[12px] md:text-[16px] leading-[34px] tracking-[-0.01em] text-text-dark outline-none cursor-pointer"
          >
            {tabItems.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
          {/* Custom Chevron Array */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-dark">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop Tabs Navigation */}
      <div className="hidden lg:block w-full border-b-[6px] border-[#F1F1F1] mb-16 select-none">
        <div className="flex items-start gap-12 min-w-max -mb-[1px]">
          {tabItems.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-[20px] font-body transition-colors leading-[30px] tracking-[-0.01em] text-left whitespace-normal w-fit max-w-[200px] ${
                  isActive
                    ? "text-text-dark font-semibold"
                    : "text-[#989898] font-medium hover:text-[#666666]"
                }`}
              >
                {tab.label}
                {isActive && (
                  <div className="absolute -bottom-[6px] left-0 w-full h-[6px] bg-brand-red z-10" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative pb-8 w-full">
        
        {/* MOBILE & TABLET LAYOUT */}
        <div className="flex flex-col lg:hidden gap-6 items-center w-full">
          <h3 className="home-challenge-title w-full">
            {activeData.title}
          </h3>
          
          <div className="w-full flex justify-center max-w-[600px]">
            <Image
              key={`${activeData.id}-mobile`}
              src={activeData.image}
              alt={activeData.title}
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-[16px] shadow-xl"
            />
          </div>

          <p className="home-challenge-desc w-full">
            {activeData.description}
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-24 items-start w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start lg:text-left">
            <h3 className="home-challenge-title mb-12 max-w-[450px]">
              {activeData.title}
            </h3>
            <p className="home-challenge-desc">{activeData.description}</p>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-start mt-1">
            <Image
              key={`${activeData.id}-desktop`}
              src={activeData.image}
              alt={activeData.title}
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-[20px] shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}