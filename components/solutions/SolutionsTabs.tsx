"use client";

import React, { useState } from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";

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
    label: "Healthcare",
    title: "Securing digital healthcare ecosystems.",
    description:
      "Marma secures healthcare networks against data breaches, ransomware, and unauthorized access by delivering continuous, network-level protection across the entire digital infrastructure. From patient record systems and administrative platforms to connected medical devices and IoT equipment, Marma ensures every device on the network is protected in real time.",
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "legal",
    label: "Legal",
    title: "Protecting sensitive legal documents.",
    description:
      "Law firms handle highly sensitive client data. Marma provides enterprise-grade encryption and network monitoring to prevent unauthorized access to privileged communications and case files across your entire infrastructure.",
    image: "/images/solutions/healthcare-solution.webp", // Placeholder
  },
  {
    id: "finance",
    label: "Finance",
    title: "Safeguarding financial transactions.",
    description:
      "Financial institutions require the highest level of security. Our zero-trust architecture ensures that every transaction, client portfolio, and internal communication remains completely isolated from external threats.",
    image: "/images/solutions/healthcare-solution.webp", // Placeholder
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    title: "Defending industrial control systems.",
    description:
      "Modern manufacturing relies on connected IoT devices. Marma protects operational technology (OT) from disruption, ensuring production lines continue running without vulnerability to external network attacks.",
    image: "/images/solutions/healthcare-solution.webp", // Placeholder
  },
  {
    id: "smb",
    label: "Small and Medium Business",
    title: "Enterprise security for growing businesses.",
    description:
      "Small businesses are frequent targets for cyberattacks. Marma provides affordable, plug-and-play network security that protects your entire office network without requiring a dedicated IT security team.",
    image: "/images/solutions/healthcare-solution.webp", // Placeholder
  },
];

export default function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);

  const activeData = tabItems.find((t) => t.id === activeTab) || tabItems[0];

  return (
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 bg-[#FFFFFF] relative">
      {/* Header Section */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center mb-16 gap-8 relative z-10 w-full mb-16">
          <h2 className="w-full min-[901px]:w-[55%] fl2 text-left">
          Security That{" "}
          <HighlightedText
            text="Adapts "
            className="text-[#323232] font-bold"
            imageClassName="bottom-[-10px] md:bottom-[-22px]"
          />
          <br className="hidden md:block" /> to You
        </h2>

          <div className="flex flex-col w-[60%] sm:w-[50%] min-[901px]:w-[45%] self-end min-[901px]:self-auto translate-x-8 sm:translate-x-12 min-[901px]:translate-x-0 mt-10 min-[901px]:mt-0 pointer-events-none z-0">
          <DecorativeLine
            viewBox="0 0 500 80"
            points="-3000,40 200,40"
            dots={[{ cx: 200, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
            dotRadius={8}
          />
          <DecorativeLine
            viewBox="0 0 500 120"
            points="20,20 80,90 3000,90"
            dots={[{ cx: 20, cy: 20, rippleCount: 3, rippleBaseDelay: 0 }]}
            className="w-full h-auto -mt-20"
            dotRadius={8}
          />
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
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
                className={`relative pb-4 text-[20px] font-body transition-colors leading-[30px] tracking-[-0.01em] text-left whitespace-normal w-fit max-w-[250px] ${
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
        <div className="flex flex-col lg:hidden gap-6 items-center justify-center w-full">
          <h3 className="fl3-2 w-full">{activeData.title}</h3>

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

          <p className="fl4-2 w-full">{activeData.description}</p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-24 items-start w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start lg:text-left">
            <h3 className="fl3-2 mb-12 max-w-[450px]">
              {activeData.title}
            </h3>
            <p className="fl4-2">{activeData.description}</p>
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
