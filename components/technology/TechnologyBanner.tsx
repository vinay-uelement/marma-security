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
                    <h1 className="tech-banner-title">
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
                            <button className="flex items-center justify-between gap-5 bg-[#FF0000] rounded-full pl-8 pr-2 py-2 group transition-transform hover:scale-[1.02] shadow-sm mt-4 md:mt-8 w-fit mx-auto cursor-pointer">
                                <span className="tech-banner-btn-text">{buttonText}</span>
                                <div className="bg-[#FFFFFF] text-[#FF0000] rounded-full p-2 group-hover:bg-gray-100 transition-colors flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </button>
                        </Link>
                    )}

                </div>
            </div>
        </section>
    );
}
