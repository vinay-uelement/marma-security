'use client'

import React from 'react';
import Link from 'next/link';
import HighlightedText from "@/components/global/HighlightedText";
import SimplifyLife from "@/components/partners/SimplifyLife";
import PartnersBottomBanner from "@/components/partners/PartnersBottomBanner";

export default function PartnersPage() {
    return (
        <main className="w-full flex-grow flex flex-col items-center">

            {/* Centered Hero Banner (Similar to TechnologyBanner) */}
            <section
                className="relative w-full min-h-[100vh] flex justify-center items-center overflow-x-clip py-28 md:py-32"
                style={{
                    backgroundImage: `url('/banner-partners.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Main Content Container inside the Banner */}
                <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center justify-center text-center">

                    <div className="flex flex-col space-y-6 lg:space-y-8 items-center max-w-[900px] mt-10 md:mt-20">

                        {/* Title text */}
                        <h1 className="partners-banner-title">
                            MSP, MSSP and ITSP{" "}
                            <HighlightedText
                                text="Partners."
                                className="font-bold text-[#FFFFFF]"
                                imageClassName="bottom-[-10px] md:bottom-[-20px] right-[5the 0px]"
                            />
                        </h1>

                        {/* Subtitle */}
                        <p className="partners-banner-subtitle max-w-[700px] mx-auto mt-4">
                            Marma offers a range of intelligent cybersecurity products designed to protect entire networks with ease. Built for both homes and businesses, our solutions deliver enterprise-grade security without the complexity of traditional tools.
                        </p>

                        {/* Buttons Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 w-full">
                            {/* Get Started Button */}
                            <Link href="#">
                                <button className="flex items-center justify-between gap-5 bg-[#FF0000] rounded-full pl-8 pr-2 py-2 group transition-transform hover:scale-[1.02] shadow-sm cursor-pointer w-fit min-w-[200px] text-left whitespace-nowrap">
                                    <span className="partners-banner-btn-text">Get Started</span>
                                    <div className="bg-[#FFFFFF] text-[#FF0000] rounded-full p-2 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </div>
                                </button>
                            </Link>

                            {/* Learn More Button */}
                            <Link href="#">
                                <button className="flex items-center justify-between gap-5 bg-transparent border border-white rounded-full pl-8 pr-2 py-2 group transition-transform hover:scale-[1.02] cursor-pointer w-fit min-w-[200px] text-left whitespace-nowrap">
                                    <span className="text-white footer-btn-text tracking-wide text-[16px] md:text-[18px]">Learn more</span>
                                    <div className="border border-white text-white rounded-full p-2 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </div>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <SimplifyLife />

            <PartnersBottomBanner />
        </main>
    );
}
