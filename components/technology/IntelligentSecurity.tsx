'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HighlightedText from '../global/HighlightedText';
import Link from 'next/link';
import nextimage from 'next/image';
interface TechFeatureItem {
    id: string;
    iconUrl: string; // The URL for the icon
    title: string;
    description: string;
}

const features: TechFeatureItem[] = [
    {
        id: "phishblock",
        iconUrl: "/ic_outline-message.png",
        title: "PhishBlock",
        description: "Protection against phishing attacks",
    },
    {
        id: "netimmunity",
        iconUrl: "/bx_globe.png",
        title: "NetImmunity",
        description: "Protection against network-based attacks",
    },
    {
        id: "malwareguard",
        iconUrl: "/tabler_virus.png",
        title: "MalwareGuard",
        description: "Protection against dangerous malware and spyware",
    },
    {
        id: "ransomguard",
        iconUrl: "/ic_outline-shield.png",
        title: "RansomGuard",
        description: "Protection against dangerous ransomware",
    },
    {
        id: "phishblock-2",
        iconUrl: "/ic_outline-message.png",
        title: "PhishBlock",
        description: "Protection against phishing attacks",
    },
    {
        id: "phishblock-3",
        iconUrl: "/ic_outline-shield.png",
        title: "PhishBlock",
        description: "Protection against phishing attacks",
    },
];

export default function IntelligentSecurity() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ITEMS_PER_PAGE = 4;
    const maxIndex = Math.max(0, features.length - ITEMS_PER_PAGE);

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    // Slice to the 4 items currently active
    const visibleFeatures = features.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

    // Dynamic progress bar calculation (based on how max items we have scrolled)
    const progressPercentage = features.length > 0
        ? Math.min(((currentIndex + ITEMS_PER_PAGE) / features.length) * 100, 100)
        : 100;

    return (
        <section className="w-full bg-[#FFFFFF] pt-24 pb-20 overflow-x-clip relative">

            {/* Desktop right-edge bleed image, strictly sticking to 0px from right screen edge */}
            <div className="absolute right-0 top-[12%] lg:top-[12%] z-0 hidden min-[901px]:flex justify-end w-[400px] lg:w-[500px] pointer-events-none">
                <Image
                    src="/Technology-below-banner.png"
                    alt="Background wire graphic"
                    width={500}
                    height={150}
                    className="object-contain w-full h-auto -translate-y-[20%]"
                    priority
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative flex flex-col pt-0 lg:pt-24 ">

                {/* The flex container now stays flex-col until 901px */}
                <div className="flex flex-col min-[901px]:flex-row justify-between items-center z-10 relative mb-16 gap-8">

                    {/* TEXT: Centered below 901px, left-aligned above */}
                    <h2 className="w-full font-title text-[36px] md:text-[42px] min-[1121px]:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232] text-center min-[901px]:text-left">
                        Intelligent <HighlightedText text="security" className="font-bold text-[#323232]" imageClassName="bottom-[-15px] md:bottom-[-20px] left-1/2 -translate-x-1/2" /> that works
                        <br className="hidden min-[901px]:block" /> silently in the background.
                    </h2>

                    {/* Desktop Spacer to maintain the flex layout width allocation */}
                    <div className="hidden min-[901px]:block w-full max-w-[400px] lg:max-w-[500px]"></div>

                    {/* Mobile-only Image (keeps normal flow) pulled against the true right screen edge via -mr-6 padding cancellation */}
                    <div className="flex min-[901px]:hidden items-center justify-end w-full mt-8 -mr-6">
                        <div className="w-full max-w-[320px] sm:max-w-[400px]">
                            <Image
                                src="/Technology-below-banner.png"
                                alt="Background wire graphic"
                                width={300}
                                height={90}
                                className="object-contain w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full mt-4 min-h-[400px]">
                    {visibleFeatures.map((feature, index) => (
                        <div key={`${feature.id}-${index + currentIndex}`} className="flex flex-col items-center sm:items-start group animate-fade-in">

                            {/* Icon Container block matching Figma gray circle aesthetic */}
                            <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6 lg:mb-8 transition-transform group-hover:scale-[1.03]">
                                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
                                    <Image
                                        src={feature.iconUrl}
                                        alt={feature.title}
                                        fill
                                        sizes="(max-width: 768px) 40px, 50px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Feature Title */}
                            <h3 className="font-body font-semibold text-[20px] md:text-[22px] leading-[26px] tracking-[-0.01px] text-[#323232] mb-4 text-center sm:text-left w-full">
                                {feature.title}
                            </h3>

                            {/* Feature Text/Description */}
                            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] md:leading-[26px] tracking-[-0.01px] text-[#606060] mb-6 flex-grow text-center sm:text-left w-full h-auto sm:max-w-[85%]">
                                {feature.description}
                            </p>

                            {/* Explore Link */}
                            <Link href="#" className="inline-flex items-center gap-4 group/btn mt-auto mx-auto sm:mx-0 pt-2 pb-1">
                                <span className="font-body text-[16px] md:text-[18px] text-[#FF0000] group-hover/btn:text-[#E10000] transition-colors">
                                    Explore
                                </span>
                                <span className="text-[#FF0000] group-hover/btn:text-[#E10000] transition-transform group-hover/btn:translate-x-1 flex items-center justify-center translate-y-[2px]">
                                    <svg width="7" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>

                        </div>
                    ))}
                </div>

                {/* Bottom Carousel Navigation block */}
                {features.length > ITEMS_PER_PAGE && (
                    <div className="w-full flex justify-between items-center mt-12 md:mt-20 pt-6 md:pt-10 gap-6 md:gap-12">
                        {/* Progress Bar Container - dynamically flexes to fill available space besides buttons */}
                        <div className="flex-grow relative h-[3px]">
                            {/* Inactive Gray Track */}
                            <div className="absolute inset-0 w-full h-full bg-[#E5E5E5] rounded-full z-10" />
                            {/* Active Red Progress Bar */}
                            <div
                                className="absolute left-0 top-0 h-full bg-[#FF0000] z-20 transition-all duration-300 ease-in-out rounded-full"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>

                        {/* Carousell arrows layout space block */}
                        <div className="flex justify-end gap-3 shrink-0">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors
                                    ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
                            >
                                {/* Left Arrow Icon */}
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                    <path d="M1 9L5 5L1 1" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === maxIndex}
                                className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors 
                                    ${currentIndex === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
                            >
                                {/* Right Arrow Icon */}
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
