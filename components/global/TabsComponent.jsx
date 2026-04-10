"use client";

import React, { useState, useRef, useEffect } from "react";

const alignClass = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const TabsComponent = ({
  tabs,
  activeTabId,
  onTabChange,
  align = "left",
  borderColor = "#FF0000",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeTab = tabs.find((t) => t.id === activeTabId);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (id) => {
    onTabChange(id);
    setIsOpen(false);
  };

return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
      {/* ── MOBILE: Dropdown ─────────────────────────────── */}
      <div className="sm:hidden" ref={dropdownRef}>
        <div className="flex pl-6">
          {/* w-fit wrapper scopes the border to the tab's width */}
          <div className="relative w-fit">
            {/* Border scoped to tab width, offset to match skewed edges */}
            <div
              className="absolute bottom-0 -left-4 -right-6 h-[2px]"
              style={{ backgroundColor: borderColor }}
            />

            <div
              onClick={() => setIsOpen((o) => !o)}
              className="inline-block relative cursor-pointer whitespace-nowrap
                 px-6 pt-2.5 pb-2 rounded-t-lg uppercase font-semibold
                 text-[13px] tracking-wide transition-all duration-[250ms]
                 z-30 bg-brand-red text-white

                 before:content-[''] before:block before:absolute before:top-0 before:right-[-24px]
                 before:h-full before:w-[44px] before:skew-x-[30deg]
                 before:rounded-tr-lg before:bg-brand-red
                 before:shadow-[3px_2px_5px_rgba(0,0,0,0.1),inset_-1px_0_0_rgba(255,255,255,0.09)]

                 after:content-[''] after:block after:absolute after:top-0 after:left-[-24px]
                 after:h-full after:w-[44px] after:skew-x-[-30deg]
                 after:rounded-tl-lg after:bg-brand-red
                 after:shadow-[-3px_2px_5px_rgba(0,0,0,0.1),inset_1px_0_0_rgba(255,255,255,0.09)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                {activeTab?.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Dropdown list */}
        {isOpen && (
          <div
            className="absolute z-50 mt-1 w-52 rounded-b-lg rounded-tr-lg
                  bg-white shadow-lg border border-gray-100 overflow-hidden"
          >
            {tabs
              .filter((t) => t.id !== activeTabId)
              .map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => handleSelect(tab.id)}
                  className="px-5 py-3 text-[13px] uppercase font-semibold tracking-wide
                     text-[#555] cursor-pointer hover:bg-[#F5F5F5] hover:text-[#222]
                     transition-colors duration-150"
                >
                  {tab.label}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* ── DESKTOP: Skewed tabs ──────────────────────────── */}
      <div className={`hidden sm:flex ${alignClass[align]}`}>
        <div
          className="overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ul
            className="flex m-0 p-0 pr-12 list-none"
            style={{ borderBottom: `2px solid ${borderColor}` }}
          >
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <li
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                  block relative flex-shrink-0 whitespace-nowrap
                  ml-[40px] lg:ml-[46px]
                  px-5 lg:px-6
                  pt-2.5 pb-2
                  cursor-pointer uppercase font-semibold
                  text-[15px] lg:text-[18px]
                  leading-5 tracking-wide rounded-t-lg
                  transition-all duration-[250ms] ease-in-out

                  before:content-[''] before:block before:absolute before:top-0 before:right-[-24px]
                  before:h-full before:w-[44px] before:skew-x-[30deg]
                  before:rounded-tr-lg before:transition-all before:duration-[250ms] before:ease-in-out
                  before:shadow-[3px_2px_5px_rgba(0,0,0,0.1),inset_-1px_0_0_rgba(255,255,255,0.09)]

                  after:content-[''] after:block after:absolute after:top-0 after:left-[-24px]
                  after:h-full after:w-[44px] after:skew-x-[-30deg]
                  after:rounded-tl-lg after:transition-all after:duration-[250ms] after:ease-in-out
                  after:shadow-[-3px_2px_5px_rgba(0,0,0,0.1),inset_1px_0_0_rgba(255,255,255,0.09)]

                  ${
                    isActive
                      ? "z-30 bg-brand-red text-white before:bg-brand-red after:bg-brand-red"
                      : "z-20 bg-[#F5F5F5] text-[#777] before:bg-[#F5F5F5] after:bg-[#F5F5F5] hover:bg-[#F4F7F9] hover:text-[#444] hover:before:bg-[#F4F7F9] hover:after:bg-[#F4F7F9]"
                  }
                `}
                >
                  {tab.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
