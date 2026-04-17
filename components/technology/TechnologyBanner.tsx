'use client'
import React from 'react';
import Link from 'next/link';
import Button from '../global/Button';

export interface TechnologyBannerProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    backgroundImage?: string;
    buttonText?: string;
    buttonLink?: string;
    isButton?: boolean;
}

export default function TechnologyBanner({
    title,
    subtitle,
    backgroundImage = "/images/banners/Technology-banner.webp", // Ensure this matches user's file name
    buttonText = "Explore",
    buttonLink = "#",
    isButton = true
}: TechnologyBannerProps) {
    return (
        <section
            className="relative w-full min-h-[100vh] flex flex-col overflow-x-clip"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Main Content Container — fills entire banner height */}
            <div className="relative z-10 w-full flex-1 px-6 lg:px-16 flex flex-col items-center text-center pt-28 md:pt-32 pb-16 md:pb-20">

                {/* Title + Subtitle group — sits near the top-center */}
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
                </div>

                {/* Explore Button — vertically centered in the remaining space below subtitle */}
                {buttonText && isButton && (
                    <div className="flex-1 flex items-center">
                        <Link href={buttonLink}>
                            <Button icon label={buttonText} />
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}
