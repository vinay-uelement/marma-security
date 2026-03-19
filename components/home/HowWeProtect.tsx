import React from 'react';
import Image from 'next/image';
import HighlightedText from '../global/HighlightedText';
import Link from 'next/link';
import DecorativeLine from './DecorativeLine';

interface FeatureItem {
    id: string;
    image: string;
    title: string;
    description: React.ReactNode;
}

const features: FeatureItem[] = [
    {
        id: "quick-setup",
        image: "/images/home/protect-image-homepage.webp", // Using placeholder, user to replace
        title: "Quick & Effortless Setup",
        description: (
            <>
                <strong className="home-protect-strong block mb-4">Get protected in under 5<br />minutes.</strong>
                <p className="home-protect-desc mb-6">
                    No technical expertise, networking knowledge, or complex configurations required—simply plug in and go.
                </p>
                <Link href="#" className="flex items-center gap-4 group w-fit">
                    <span className="home-protect-link group-hover:text-[#E10000] transition-colors">
                        Learn more
                    </span>
                    <span className="text-[#FF0000] group-hover:text-[#E10000] transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[1px]">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </Link>
            </>
        )
    },
    {
        id: "automated-protection",
        image: "/images/home/protection-homepage.webp", // Using placeholder, user to replace
        title: "Fully Automated \nProtection",
        description: (
            <>
                <strong className="home-protect-strong block mb-4">Security that runs itself.</strong>
                <p className="home-protect-desc mb-6">
                    Marma continuously monitors your network and blocks threats in real time, without any manual intervention.
                </p>
                <Link href="#" className="flex items-center gap-4 group w-fit">
                    <span className="home-protect-link group-hover:text-[#E10000] transition-colors">
                        Learn more
                    </span>
                    <span className="text-[#FF0000] group-hover:text-[#E10000] transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[1px]">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </Link>
            </>
        )
    },
    {
        id: "zero-maintenance",
        image: "/images/features/zero-maintainace.webp", // Using placeholder, user to replace
        title: "Zero Maintenance \nRequired",
        description: (
            <>
                <strong className="home-protect-strong block mb-4">No updates, no <br />monitoring, no hassle.</strong>
                <p className="home-protect-desc mb-6">
                    All security updates, patches, and improvements are handled automatically in the background.
                </p>
                <Link href="#" className="flex items-center gap-4 group w-fit">
                    <span className="home-protect-link group-hover:text-[#E10000] transition-colors">
                        Learn more
                    </span>
                    <span className="text-[#FF0000] group-hover:text-[#E10000] transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[1px]">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </Link>
            </>
        )
    }
];

export default function HowWeProtect() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20 md:py-24 bg-[#FFFFFF]">

            {/* Header Section */}
            <div className="relative flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8 text-center md:text-left">

                <h2 className="home-protect-heading w-full md:max-w-[520px]">
                    How we <HighlightedText
                        text="protect you?"
                        className="font-bold text-[#323232]"
                        imageClassName="absolute h-auto object-contain pointer-events-none -z-10 bottom-[-20px] md:bottom-[-24px]  left-2/4 -translate-x-1/2 w-[70%]"
                    />
                </h2>

                <div className="hidden md:block absolute right-0 top-0">

                    <div className="relative w-screen right-1/2 translate-x-1/2">

                        <DecorativeLine
                            viewBox="0 0 700 80"
                            points="100,40 1100,40"
                            dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                            className="w-[400px] lg:w-[500px] h-auto ml-auto"
                        />

                    </div>

                </div>

            </div>

            {/* Features List Layout */}
            <div className="flex flex-col gap-12 lg:gap-16">
                {features.map((feature) => (
                    <div key={feature.id} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-8 lg:gap-12 items-center text-center md:text-left md:items-center">

                        {/* 1. Image Column */}
                        <div className="relative w-full max-w-[427px] aspect-[427/237] rounded-[16px] overflow-hidden shadow-sm mb-4 md:mb-0 mx-auto">
                            <div className="bg-gray-200 w-full h-full absolute inset-0 z-0" />
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover relative z-10"
                            />
                        </div>

                        {/* 2. Title Column */}
                        <div className="flex flex-col justify-start md:pt-5 h-full">
                            <h3 className="home-protect-title whitespace-pre-line">
                                {feature.title}
                            </h3>
                        </div>

                        {/* 3. Description Column with conditional Left Border on Desktop */}
                        <div className="flex flex-col justify-center items-center md:items-start h-full border-l-0 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-[#E5E5E5] pt-6 md:pt-0 pl-0 md:pl-8 lg:pl-10 mt-2 md:mt-0">
                            <div className="flex flex-col justify-center items-center md:items-start w-full">
                                {feature.description}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}
