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
                            <Button icon label={buttonText} />
                        </Link>
                    )}

                </div>
            </div>
        </section>
    );
}
