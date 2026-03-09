
"use client"

import React from 'react';
import Banner from "@/components/global/Banner";
import SimplifyLife from "@/components/partners/SimplifyLife";
import PartnersBottomBanner from "@/components/partners/PartnersBottomBanner";
import OurTeam from "@/components/about/OurTeam";
import StatsSection from "@/components/about/StatsSection";
import ContactSection from "@/components/contact/ContactSection";
import Image from 'next/image';


export default function PartnersPage() {
    return (
        <main className="w-full flex-grow flex flex-col items-center">
            {/* Wait for the user to provide the exact background image. It is loaded conditionally or temporarily blank. */}
            <Banner
                backgroundImage="/banner-contact-us.png"
                heightVariant="794"
                titleClassName="font-body font-semi-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[1.3] md:leading-[52px] tracking-[-0.01em] pb-3 md:pb-5 text-white drop-shadow-sm"
                title={
                    <>
                        Get in   <span className="text-[#FF0000]"> Touch.</span>

                    </>
                }
                middleText="We’re here to help you secure what matters most."
                subtitle="Have questions about Marma or want to learn how our solutions fit your needs? Our team is ready to assist you with product details, deployment guidance, and support. Reach out to us today, and let’s build a safer digital environment together."
            />

          

            <ContactSection />

        </main>


    );
}
