"use client"

import React from 'react';
import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import OurTeam from "@/components/about/OurTeam";
import StatsSection from "@/components/about/StatsSection";
import Image from 'next/image';
import AdvancedArchitecture from '@/components/technology/AdvancedArchitecture';


export default function PartnersPage() {
    return (
        <main className="w-full flex-grow flex flex-col items-center">
            {/* Centered Hero Banner */}
            <section
                className="relative w-full min-h-[100vh] flex justify-center items-center overflow-x-clip py-28 md:py-32"
                style={{
                    backgroundImage: `url('/banner-about-us.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Main Content Container inside the Banner */}
                <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center justify-center text-center">

                    <div className="flex flex-col space-y-6 lg:space-y-8 items-center max-w-[1200px] mt-10 md:mt-20">

                        {/* Title text */}
                        <h1 className="font-title font-normal text-[36px] md:text-[52px] lg:text-[60px] leading-[1.2] lg:leading-[1.15] tracking-[-0.01em] text-white drop-shadow-sm">
                            Redefining{" "}
                            <HighlightedText 
                                text="Cybersecurity" 
                                className="font-bold text-[#FFFFFF]" 
                                imageClassName="bottom-[-25px] md:bottom-[-22px] right-[-10px]  " 
                            />
                            {" "}Through Simplicity
                        </h1>

                        {/* Middle Subtitle */}
                        <h2 className="font-title font-semibold text-[18px] md:text-[22px] lg:text-[26px] leading-[1.4] tracking-[-0.01em] text-white max-w-[750px] mx-auto mt-2 md:mt-6">
                            Making enterprise-grade network security accessible for homes, businesses, and service providers.
                        </h2>

                        {/* Description */}
                        <p className="font-body font-light text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] md:leading-[1.8] tracking-[-0.01em] text-white/90 max-w-[900px] mx-auto mt-2">
                            At Marma, we believe cybersecurity should be powerful, simple, and reliable. Our mission is to eliminate complexity from digital security by delivering automated, network-level protection that works seamlessly across all environments. Designed for rapid deployment and effortless management, Marma protects every connected device without requiring technical expertise or constant maintenance.
                        </p>

                    </div>
                </div>
            </section>

            <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-36 bg-[#FFFFFF]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 md:mb-[70px] gap-8 text-center md:text-left">
                    <h2 className="font-title font-normal text-[36px] md:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232]">
                        Our <HighlightedText text="Team" className='font-bold text-[#323232]' imageClassName="bottom-[-10px] md:bottom-[-20px] right-[-10px]" />
                    </h2>

                    {/* Decorative Red Line Graphic */}
                    <div className="hidden md:flex items-start justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12 -mt-16 lg:-mt-24">
                        <Image
                            src="/Technology-below-banner.png"
                            alt="Decorative Line"
                            width={500}
                            height={60}
                            className="object-contain w-full h-auto transform -translate-y-4 lg:-translate-y-8"
                        />
                    </div>
                </div>

                {/* Team Members Grid */}
                <OurTeam />

            </section>
<AdvancedArchitecture />
            <StatsSection />

        </main>


    );
}
