"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import HighlightedText from '../global/HighlightedText';

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
        description: "Marma installs in under five minutes and begins protecting your network immediately. Designed with simplicity at its core, it requires no technical knowledge, manual configurations, or ongoing maintenance. Once set up, Marma runs automatically in the background, continuously monitoring and defending your entire Wi-Fi network against cyber threats.",
        image: "/images/solutions/healthcare-solution.webp"
    },
    {
        id: "legal",
        label: "Privacy & Data Safety Concerns",
        title: "Clear & Benefit-Focused",
        description: "Law firms handle highly sensitive client data. Marma provides enterprise-grade encryption and network monitoring to prevent unauthorized access to privileged communications and case files across your entire infrastructure.",
        image: "/images/solutions/healthcare-solution.webp" // Placeholder
    },
    {
        id: "finance",
        label: "Rising Cyber Threats",
        title: "Clear & Benefit-Focused",
        description: "Financial institutions require the highest level of security. Our zero-trust architecture ensures that every transaction, client portfolio, and internal communication remains completely isolated from external threats.",
        image: "/images/solutions/healthcare-solution.webp" // Placeholder
    },
    {
        id: "manufacturing",
        label: "Expensive Security Solutions",
        title: "Clear & Benefit-Focused",
        description: "Modern manufacturing relies on connected IoT devices. Marma protects operational technology (OT) from disruption, ensuring production lines continue running without vulnerability to external network attacks.",
        image: "/images/solutions/healthcare-solution.webp" // Placeholder
    },

];

export default function Challengestab() {
    const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);

    const activeData = tabItems.find(t => t.id === activeTab) || tabItems[0];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-4 bg-[#FFFFFF]">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-[60px] gap-8 text-center md:text-left">
                <h2 className="home-challenge-heading">
                    Overcoming your <HighlightedText text="challenges" className='font-bold' />
                </h2>

                {/* Decorative Red Line Graphic */}
                <div className="hidden md:flex items-start justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12 -mt-16 lg:-mt-24">
                    <Image
                        src="/images/home/homepage-right-decorativesection.webp"
                        alt="Decorative Line"
                        width={500}
                        height={60}
                        className="object-contain w-full h-auto transform -translate-y-4 lg:-translate-y-8"
                    />
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="w-full border-b-[6px] border-[#F1F1F1] mb-16 select-none max-lg:overflow-x-auto ">
                <div className="flex items-start gap-6 md:gap-8 lg:gap-12 min-w-max -mb-[1px]">
                    {tabItems.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative pb-4 text-[16px] md:text-[20px] font-body transition-colors leading-[1.3] md:leading-[30px] tracking-[-0.01em] text-left whitespace-normal w-fit max-w-[150px] md:max-w-[200px] ${isActive
                                    ? "text-[#323232] font-semibold"
                                    : "text-[#989898] font-medium hover:text-[#666666]"
                                    }`}
                            >
                                {tab.label}
                                {isActive && (
                                    <div className="absolute -bottom-[6px] left-0 w-full h-[6px] bg-[#FF0000] z-10" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pb-8">


                {/* Left Content */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 className="home-challenge-title mb-8 lg:mb-12 max-w-[450px]">
                        {activeData.title}
                    </h3>
                    <p className="home-challenge-desc">
                        {activeData.description}
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center lg:justify-start lg:mt-1">
                    <Image
                        key={activeData.id} // Forces image to explicitly re-animate/fade on tab change if desired later
                        src={activeData.image}
                        alt={activeData.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain rounded-[20px] shadow-xl"
                    />
                </div>

            </div>

        </section>
    );
}
