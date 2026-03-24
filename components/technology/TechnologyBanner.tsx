'use client'
import React from 'react';
import Link from 'next/link';

export interface TechnologyBannerProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    backgroundImage?: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function TechnologyBanner({
    title,
    subtitle,
    backgroundImage = "/images/banners/Technology-banner.webp", // Ensure this matches user's file name
    buttonText = "Explore",
    buttonLink = "#"
}: TechnologyBannerProps) {
    return (
        <section
            className="relative w-full min-h-[100vh] flex justify-center items-center overflow-x-clip py-28 md:py-32"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Main Content Container inside the Banner */}
            <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center justify-center text-center">

                <div className="flex flex-col space-y-6 lg:space-y-8 items-center max-w-[900px] mt-10 md:mt-20">

                    {/* Title text */}
                    <h1 className="fl1 text-white">
                        {title}
                    </h1>

                    {/* Render Subtitle conditionally */}
                    {subtitle && (
                        <p className="tech-banner-subtitle max-w-[700px] mx-auto">
                            {subtitle}
                        </p>
                    )}

                    {/* Explore Button */}
                    {buttonText && (
                        <Link href={buttonLink}>
                            <button className="relative flex items-center justify-center rounded-full pl-8 pr-12 py-1 min-w-[160px] md:min-w-[180px] transition-transform hover:scale-[1.02] group shadow-sm bg-[#FF0000] text-white hover:bg-[#E10000] cursor-pointer">
                                <span className="font-banner text-[16px] md:text-[20px] font-normal tracking-[-0.01em]">{buttonText}</span>
                                <div className="bg-[#F4F4F4] text-[#FF0000] rounded-full p-1 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors absolute right-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </button>
                        </Link>
                    )}

                </div>
            </div>
        </section>
    );
}
