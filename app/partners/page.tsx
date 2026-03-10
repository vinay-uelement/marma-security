"use client"

import React from 'react';
import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import SimplifyLife from "@/components/partners/SimplifyLife";
import PartnersBottomBanner from "@/components/partners/PartnersBottomBanner";
import Image from "next/image";

export default function PartnersPage() {
    return (
        <main className="w-full flex-grow flex flex-col items-center">
            {/* Wait for the user to provide the exact background image. It is loaded conditionally or temporarily blank. */}
            <Banner
                backgroundImage="/banner-partners.png"
                heightVariant="794"
                titleClassName="font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white drop-shadow-sm"
                title={
                    <>
                        MSP, MSSP and ITSP <br className="hidden md:block" />
                        <HighlightedText text="Partners." />
                    </>
                }
                subtitle="Marma offers a range of intelligent cybersecurity products designed to protect entire networks with ease. Built for both homes and businesses, our solutions deliver enterprise-grade security without the complexity of traditional tools."
                buttons={[
                    {
                        label: "Get Started",
                        variant: "primary",
                        icon: true
                    },
                    {
                        label: "Learn more",
                        variant: "outline",
                        icon: true
                    }
                ]}
            />

            <SimplifyLife />

            <PartnersBottomBanner />
        </main>
    );
}
