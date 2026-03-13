'use client'

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
        label: "Healthcare",
        title: "Securing digital healthcare ecosystems.",
        description: "Marma secures healthcare networks against data breaches, ransomware, and unauthorized access by delivering continuous, network-level protection across the entire digital infrastructure. From patient record systems and administrative platforms to connected medical devices and IoT equipment, Marma ensures every device on the network is protected in real time.",
        image: "/healthcare-solution.png"
    },
    {
        id: "legal",
        label: "Legal",
        title: "Protecting sensitive legal documents.",
        description: "Law firms handle highly sensitive client data. Marma provides enterprise-grade encryption and network monitoring to prevent unauthorized access to privileged communications and case files across your entire infrastructure.",
        image: "/healthcare-solution.png" // Placeholder
    },
    {
        id: "finance",
        label: "Finance",
        title: "Safeguarding financial transactions.",
        description: "Financial institutions require the highest level of security. Our zero-trust architecture ensures that every transaction, client portfolio, and internal communication remains completely isolated from external threats.",
        image: "/healthcare-solution.png" // Placeholder
    },
    {
        id: "manufacturing",
        label: "Manufacturing",
        title: "Defending industrial control systems.",
        description: "Modern manufacturing relies on connected IoT devices. Marma protects operational technology (OT) from disruption, ensuring production lines continue running without vulnerability to external network attacks.",
        image: "/healthcare-solution.png" // Placeholder
    },
    {
        id: "smb",
        label: "Small and Medium Business",
        title: "Enterprise security for growing businesses.",
        description: "Small businesses are frequent targets for cyberattacks. Marma provides affordable, plug-and-play network security that protects your entire office network without requiring a dedicated IT security team.",
        image: "/healthcare-solution.png" // Placeholder
    }
];

export default function SolutionsTabs() {
    const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);

    const activeData = tabItems.find(t => t.id === activeTab) || tabItems[0];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-[30px] md:py-[100px] bg-[#FFFFFF]">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-26 gap-8">
                <h2 className="solutions-section-heading">
                    Security That <HighlightedText text='Adapts ' className='text-[#323232] font-bold' imageClassName='bottom-[-10px] md:bottom-[-22px]' /><br className="hidden md:block" /> to You
                </h2>

                {/* Decorative Red Line Graphic */}
                <div className="hidden md:flex items-center justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12">
                    <Image
                        src="/rightside-section-homepage-new.png"
                        alt="Decorative Line"
                        width={500}
                        height={60}
                        className="object-contain w-full h-auto"
                    />
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="w-full border-b-[6px] border-[#F1F1F1] mb-[40px] md:mb-[100px] select-none max-lg:overflow-x-auto ">
                <div className="flex items-center gap-6 md:gap-8 lg:gap-12 min-w-max -mb-[1px]">
                    {tabItems.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative pb-4 text-[18px] md:text-[24px] font-body transition-colors leading-[34px] tracking-[-0.01em] ${isActive
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
                <div className="flex flex-col">
                    <h3 className="solutions-tab-title mb-8 lg:mb-12 max-w-[450px]">
                        {activeData.title}
                    </h3>
                    <p className="solutions-tab-desc">
                        {activeData.description}
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full flex items-start justify-start lg:mt-1">
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
  