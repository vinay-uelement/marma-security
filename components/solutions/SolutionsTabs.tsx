"use client";

import React, { useState, useRef, useEffect } from "react";
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
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "finance",
    label: "Finance",
    title: "Safeguarding financial transactions.",
    description:
      "Financial institutions require the highest level of security. Our zero-trust architecture ensures that every transaction, client portfolio, and internal communication remains completely isolated from external threats.",
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    title: "Defending industrial control systems.",
    description:
      "Modern manufacturing relies on connected IoT devices. Marma protects operational technology (OT) from disruption, ensuring production lines continue running without vulnerability to external network attacks.",
    image: "/images/solutions/healthcare-solution.webp",
  },
  {
    id: "smb",
    label: "Small and Medium Business",
    title: "Enterprise security for growing businesses.",
    description:
      "Small businesses are frequent targets for cyberattacks. Marma provides affordable, plug-and-play network security that protects your entire office network without requiring a dedicated IT security team.",
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

export default function SolutionsTabs() {
  const [slideState, setSlideState] = useState<SlideState>({
    active: tabItems[0],
    outgoing: null,
    direction: "right",
    animating: false,
  });

  const animTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refs for sliding indicator
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
          from { transform: translateX(0);     opacity: 1; }
          to   { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes carouselExitToRight {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(100%); opacity: 0; }
        }
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

      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 bg-[#FFFFFF] relative">
        {/* Header Section */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center mb-16 gap-8 relative z-10 w-full">
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
              dotRadius={7}
              animationDuration={2.2}
            />
            <DecorativeLine
              viewBox="0 0 500 120"
              points="20,20 80,90 3000,90"
              dots={[{ cx: 20, cy: 20, rippleCount: 4, rippleBaseDelay: 0.5 }]}
              className="w-full h-auto -mt-28"
              dotRadius={8}
              animationDuration={3}
            />
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
        <div className="hidden lg:block mb-16 select-none">
          <div
            ref={tabsContainerRef}
            className="relative flex items-start gap-12 w-fit border-b-[6px] border-[#F1F1F1] -mb-[1px] pb-0"
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
                  className={`relative pb-4 text-[20px] font-body transition-colors leading-[30px] tracking-[-0.01em] text-left whitespace-nowrap w-fit ${
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

        {/* Tab Content */}
        <div className="relative pb-8 w-full overflow-hidden">
          {/* Mobile & Tablet */}
          <div
            key={`mobile-${active.id}`}
            className={`flex flex-col lg:hidden gap-6 items-center justify-center w-full ${mobileSlideClass}`}
          >
            <h3 className="fl3-2 w-full">{active.title}</h3>
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

          {/* Desktop */}
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
    <div className="grid lg:grid-cols-2 gap-24 items-center w-full">
      <div className="flex flex-col items-start lg:text-left">
        <h3 className="fl3-1 mb-12 max-w-[450px]">{data.title}</h3>
        <p className="home-challenge-desc">{data.description}</p>
      </div>

      <div className="relative w-full h-[360px] rounded-[20px] overflow-hidden shadow-xl">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
