"use client";

import React, { useState, useRef, useEffect } from "react";
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

const SLIDE_DURATION = 380;

type SlideDir = "right" | "left";

interface SlideState {
  active: TabData;
  outgoing: TabData | null;
  direction: SlideDir;
  animating: boolean;
}

export default function Challengestab() {
  const [slideState, setSlideState] = useState<SlideState>({
    active: tabItems[0],
    outgoing: null,
    direction: "right",
    animating: false,
  });

  const animTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refs for tab indicator
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const btn = tabRefs.current[slideState.active.id];
    const container = tabsContainerRef.current;
    if (!btn || !container) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setIndicatorStyle({ left: bRect.left - cRect.left, width: bRect.width });
  }, [slideState.active.id]);

  const handleTabChange = (tabId: string) => {
    if (tabId === slideState.active.id || slideState.animating) return;

    const currentIndex = tabItems.findIndex(
      (t) => t.id === slideState.active.id,
    );
    const nextIndex = tabItems.findIndex((t) => t.id === tabId);
    const direction: SlideDir = nextIndex > currentIndex ? "right" : "left";
    const nextTab = tabItems[nextIndex];

    // Clear any in-flight timer
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);

    setSlideState((prev) => ({
      active: nextTab,
      outgoing: prev.active,
      direction,
      animating: true,
    }));

    animTimeoutRef.current = setTimeout(() => {
      setSlideState((prev) => ({ ...prev, outgoing: null, animating: false }));
    }, SLIDE_DURATION);
  };

  // Clean up on unmount
  useEffect(
    () => () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    },
    [],
  );

  const { active, outgoing, direction, animating } = slideState;

  const incomingClass =
    direction === "right"
      ? "carousel-enter-from-right"
      : "carousel-enter-from-left";

  const outgoingClass =
    direction === "right" ? "carousel-exit-to-left" : "carousel-exit-to-right";

  const mobileSlideClass =
    direction === "right" ? "slide-in-right" : "slide-in-left";

  return (
    <>
      <style>{`
        @keyframes carouselEnterFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes carouselEnterFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes carouselExitToLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes carouselExitToRight {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(100%); opacity: 0; }
        }

        /* Mobile slide-in helpers (unchanged) */
        @keyframes slideInRight {
          from { transform: translateX(40px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-40px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }

        .carousel-enter-from-right {
          animation: carouselEnterFromRight ${SLIDE_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .carousel-enter-from-left {
          animation: carouselEnterFromLeft ${SLIDE_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .carousel-exit-to-left {
          animation: carouselExitToLeft ${SLIDE_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .carousel-exit-to-right {
          animation: carouselExitToRight ${SLIDE_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.32s ease forwards;
        }
        .slide-in-left {
          animation: slideInLeft 0.32s ease forwards;
        }
      `}</style>

      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 mt-4 bg-bg-white">
        {/* Header Section */}
        <div className="flex items-start md:items-center justify-between gap-4 md:gap-8 mb-[10px] md:mb-[60px] w-full">
          <h2 className="fl2 z-10 mb-3 md:mb-0 flex-1 whitespace-nowrap">
            Overcoming your{" "}
            <HighlightedText
              text="challenges"
              className="font-bold"
              imageClassName="bottom-[-14px] md:bottom-[-14px]"
            />
          </h2>

          {/* Decorative Line — Mobile */}
          <div className="flex md:hidden justify-end items-start flex-shrink-0 pointer-events-none relative z-0">
            <div className="w-[160px] sm:w-[240px] translate-y-[-20%]">
              <DecorativeLine
                viewBox="0 0 1260 500"
                points="20,150 500,150 600,270 3000,270"
                dots={[{ cx: 0, cy: 150, rippleCount: 3 }]}
                className="w-full h-auto -mt-18"
                strokeWidth={3}
                dotRadius={22}
              />
            </div>
          </div>

          {/* Decorative Line — Desktop */}
          <div className="hidden md:flex items-start justify-end w-full max-w-[400px] lg:max-w-[500px] -mt-16 lg:-mt-24 pointer-events-none z-0">
            <div className="relative w-screen right-1/2 translate-x-1/2 flex justify-end">
              <div className="w-[400px] lg:w-[500px]">
                <DecorativeLine
                  viewBox="0 0 1260 500"
                  points="20,150 500,150 600,270 3000,270"
                  dots={[{ cx: 0, cy: 150, rippleCount: 3 }]}
                  className="w-full h-auto -mt-20"
                  strokeWidth={3}
                  dotRadius={22}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown */}
        <div className="w-full mb-10 lg:hidden relative z-20">
          <div className="relative w-full">
            <select
              value={active.id}
              onChange={(e) => handleTabChange(e.target.value)}
              className="w-full appearance-none bg-bg-light border border-[#E5E5E5] rounded-[12px] px-6 py-1 font-body font-bold text-[12px] md:text-[16px] leading-[34px] tracking-[-0.01em] text-text-dark outline-none cursor-pointer"
            >
              {tabItems.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-dark">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
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

        {/* Desktop Tabs — sliding indicator */}
        <div className="hidden lg:block w-full border-b-[6px] border-[#F1F1F1] mb-16 select-none">
          <div
            ref={tabsContainerRef}
            className="relative flex items-start gap-12 min-w-max -mb-[1px]"
          >
            {tabItems.map((tab) => {
              const isActive = active.id === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative pb-4 text-[20px] font-body transition-colors leading-[30px] tracking-[-0.01em] text-left whitespace-normal w-fit max-w-[200px] ${
                    isActive
                      ? "text-text-dark font-semibold"
                      : "text-[#989898] font-medium hover:text-[#666666]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            {/* Sliding red indicator */}
            <div
              className="absolute -bottom-[6px] h-[6px] bg-brand-red z-10 rounded-sm"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transition: "left 0.32s ease, width 0.32s ease",
              }}
            />
          </div>
        </div>

        <div className="relative pb-8 w-full overflow-hidden">
          <div
            key={`mobile-${active.id}`}
            className={`flex flex-col lg:hidden gap-6 items-center justify-center w-full ${mobileSlideClass}`}
          >
            <h3 className="fl3-2 font-semibold w-full">{active.title}</h3>
            <div className="w-full flex justify-center max-w-[600px]">
              <Image
                src={active.image}
                alt={active.title}
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-[16px] shadow-xl"
              />
            </div>
            <p className="fl4-2 w-full">{active.description}</p>
          </div>

          <div className="hidden lg:block relative w-full">
            {animating && outgoing && (
              <div
                key={`out-${outgoing.id}`}
                className={`absolute inset-0 w-full ${outgoingClass}`}
                aria-hidden="true"
              >
                <DesktopContent data={outgoing} />
              </div>
            )}

            <div
              key={`in-${active.id}`}
              className={`w-full ${animating ? incomingClass : ""}`}
            >
              <DesktopContent data={active} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DesktopContent({ data }: { data: TabData }) {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-start w-full">
      <div className="flex flex-col items-start lg:text-left">
        <h3 className="home-challenge-title mb-12 max-w-[450px]">
          {data.title}
        </h3>
        <p className="home-challenge-desc">{data.description}</p>
      </div>
      <div className="w-full flex justify-start mt-1">
        <Image
          src={data.image}
          alt={data.title}
          width={600}
          height={400}
          className="w-full h-auto object-contain rounded-[20px] shadow-xl"
        />
      </div>
    </div>
  );
}
