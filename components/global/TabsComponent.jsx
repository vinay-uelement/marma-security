"use client";

import React from 'react';

/**
 * Skewed tab component matching the CodePen "round corners" trapezoid style.
 *
 * Props (matches the original Tabs component API):
 * - tabs: { label: string; id: string }[]
 * - activeTabId: string
 * - onTabChange: (id: string) => void
 * - align?: "left" | "center" | "right"
 * - borderColor?: string
 */

const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};

const TabsComponent = ({ tabs, activeTabId, onTabChange, align = "left", borderColor = '#FF0000' }) => {
    return (
        <div className={`flex ${alignClass[align]} w-full!`}
            style={{ borderBottom: `2px solid ${borderColor}` }}
        >
            <div
                className="overflow-hidden"
            >
                <ul className="flex m-0 p-0 pr-12 list-none">
                    {tabs.map((tab, index) => {
                        const isActive = activeTabId === tab.id;

                        return (
                            <li
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={`
                                        block relative ml-[46px] px-6 pt-2.5 pb-2 cursor-pointer
                                        uppercase font-semibold text-[18px] leading-5 tracking-wide
                                        rounded-t-lg transition-all duration-[250ms] ease-in-out

                                        before:content-[''] before:block before:absolute before:top-0 before:right-[-24px]
                                        before:h-full before:w-[44px] before:skew-x-[30deg]
                                        before:rounded-tr-lg before:transition-all before:duration-[250ms] before:ease-in-out
                                        before:shadow-[3px_2px_5px_rgba(0,0,0,0.1),inset_-1px_0_0_rgba(255,255,255,0.09)]

                                        after:content-[''] after:block after:absolute after:top-0 after:left-[-24px]
                                        after:h-full after:w-[44px] after:skew-x-[-30deg]
                                        after:rounded-tl-lg after:transition-all after:duration-[250ms] after:ease-in-out
                                        after:shadow-[-3px_2px_5px_rgba(0,0,0,0.1),inset_1px_0_0_rgba(255,255,255,0.09)]

                                        ${isActive
                                        ? 'z-30 bg-brand-red text-white before:bg-brand-red after:bg-brand-red'
                                        : 'z-20 bg-[#F5F5F5] text-[#777] before:bg-[#F5F5F5] after:bg-[#F5F5F5] hover:bg-[#F4F7F9] hover:text-[#444] hover:before:bg-[#F4F7F9] hover:after:bg-[#F4F7F9]'
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
    );
};

export default TabsComponent;