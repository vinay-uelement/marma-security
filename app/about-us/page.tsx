"use client"

import React from 'react';
import Banner from "@/components/global/Banner";
import SimplifyLife from "@/components/partners/SimplifyLife";
import PartnersBottomBanner from "@/components/partners/PartnersBottomBanner";
import OurTeam from "@/components/about/OurTeam";
import StatsSection from "@/components/about/StatsSection";
import Image from 'next/image';


export default function PartnersPage() {
    return (
        <main className="w-full flex-grow flex flex-col items-center">
            {/* Wait for the user to provide the exact background image. It is loaded conditionally or temporarily blank. */}
            <Banner
                backgroundImage="/banner-about-us.png"
                heightVariant="794"
                titleClassName="font-body font-semi-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[1.3] md:leading-[52px] tracking-[-0.01em] pb-3 md:pb-5 text-white drop-shadow-sm"
                title={
                    <>
                        Redefining  <span className="text-[#FF0000]"> Cybersecurity.</span>
                        <br className="hidden md:block" />
                        Through Simplicit
                    </>
                }
                middleText="Making enterprise-grade network security accessible for homes, businesses, and service providers."
                subtitle="At Marma, we believe cybersecurity should be powerful, simple, and reliable. Our mission is to eliminate complexity from digital security by delivering automated, network-level protection that works seamlessly across all environments. Designed for rapid deployment and effortless management, Marma protects every connected device without requiring technical expertise or constant maintenance."
            />

            <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-24 bg-[#FFFFFF]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <h2 className="font-title font-bold text-[36px] md:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232]">
                        Our <span className="text-[#FF0000]">Team</span>
                    </h2>

                    {/* Decorative Red Line Graphic */}
                    <div className="hidden md:flex items-center justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12">
                        <Image
                            src="/securit-solution-right.png"
                            alt="Decorative Line"
                            width={500}
                            height={60}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                </div>

                {/* Team Members Grid */}
                <OurTeam />

            </section>

            <StatsSection />

        </main>


    );
}
