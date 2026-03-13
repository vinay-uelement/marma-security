

import React from 'react';
import HighlightedText from "@/components/global/HighlightedText";
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
            {/* Custom Contact Us Hero Section designed exactly to the Figma reference */}
            <section
                className="relative w-full min-h-[100vh] flex flex-col justify-start items-center overflow-x-clip pt-32 lg:pt-40"
                style={{
                    backgroundImage: `url('/banner-contact-us.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Text Content */}
                <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-10 md:mt-16">
                    <h1 className="contact-banner-title mb-6">
                        We’re here to help you <br className="block sm:hidden" />secure what matters most.
                    </h1>
                    
                    <p className="contact-banner-desc max-w-[850px] mx-auto">
                        Have questions about Marma or want to learn how our solutions fit your needs? Our team is ready to
                        assist you with product details, deployment guidance, and support. Reach out to us today, and let’s build
                        a safer digital environment together.
                    </p>
                </div>

                {/* Overlapping Phones Image Block */}
                <div className="relative w-full max-w-[850px] mx-auto mt-12 md:mt-15 lg:mb-[-120px] flex justify-center z-20 px-4">
                    <Image
                        src="/banner-contact-secondry.png"
                        alt="Marma Security Mobile App"
                        width={600}
                        height={500}
                        className="object-contain w-full sm:w-[85%] md:w-[680px] h-auto drop-shadow-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw, 850px"
                    />
                </div>
            </section>



            <ContactSection />

        </main>


    );
}
