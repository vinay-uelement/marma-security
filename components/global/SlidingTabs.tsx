"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Tab {
  id: string;
  label: string;
}

interface SlidingTabsProps {
  tabs: Tab[];
  activeTabId: string;
  onChange: (id: string) => void;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  lineClassName?: string;
  containerClassName?: string;
  gap?: string;
}

export const SlidingTabs: React.FC<SlidingTabsProps> = ({
  tabs,
  activeTabId,
  onChange,
  className = "",
  containerClassName = "relative pb-3 flex justify-center items-center",
  activeClassName = "text-white font-semibold opacity-100",
  inactiveClassName = "text-white font-semibold opacity-40 hover:opacity-70",
  lineClassName = "bg-[#FF1847] h-[2px]",
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevLeft, setPrevLeft] = useState(0);
  const [prevWidth, setPrevWidth] = useState(0);

  // Initial position on mount
  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeTabId);
    const activeEl = tabsRef.current[activeIndex];

    if (activeEl && lineRef.current) {
      const { offsetLeft, offsetWidth } = activeEl;
      gsap.set(lineRef.current, {
        left: offsetLeft,
        width: offsetWidth,
      });
      setPrevLeft(offsetLeft);
      setPrevWidth(offsetWidth);
    }
  }, []);

  // Animation logic
  useGSAP(
    () => {
      const activeIndex = tabs.findIndex((t) => t.id === activeTabId);
      const activeEl = tabsRef.current[activeIndex];

      if (!activeEl || !lineRef.current || isAnimating) return;

      const { offsetLeft: newLeft, offsetWidth: newWidth } = activeEl;

      // don't animate if it's the same tab
      if (newLeft === prevLeft && newWidth === prevWidth) return;

      setIsAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setPrevLeft(newLeft);
          setPrevWidth(newWidth);
        },
      });

      if (newLeft >= prevLeft) {
        // Moving Right: Stretch then snap
        tl.to(lineRef.current, {
          width: newLeft - prevLeft + newWidth,
          duration: 0.3,
          ease: "power2.inOut",
        }).to(lineRef.current, {
          left: newLeft,
          width: newWidth,
          duration: 0.15,
          ease: "power2.inOut",
        });
      } else {
        // Moving Left: Snap then stretch (or rather, stretch backwards)
        tl.to(lineRef.current, {
          left: newLeft,
          width: prevLeft - newLeft + prevWidth,
          duration: 0.3,
          ease: "power2.inOut",
        }).to(lineRef.current, {
          width: newWidth,
          duration: 0.15,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [activeTabId], scope: containerRef }
  );

  const handleClick = (id: string) => {
    if (isAnimating || id === activeTabId) return;
    onChange(id);
  };

  return (
    <nav
      ref={containerRef}
      className={`${containerClassName} ${className}`}
    >
      <ul className="flex gap-10 p-0 m-0 list-none border-b-2 border-gray-300">
        {tabs.map((tab, index) => {
          const isActive = activeTabId === tab.id;
          return (
            <li
              key={tab.id}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              className={`
              transition-all duration-400 ease-in-out last:mr-0
            `}
            >
              <button
                onClick={() => handleClick(tab.id)}
                className={`
                  bg-transparent border-none p-0 m-0 cursor-pointer block
                  ${isActive ? activeClassName : inactiveClassName}
                `}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
      <div
        ref={lineRef}
        className={`absolute bottom-0 z-10 ${lineClassName}`}
        style={{ left: 0, width: 0 }}
      />
    </nav>
  );
};

export default SlidingTabs;
