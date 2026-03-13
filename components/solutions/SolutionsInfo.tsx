'use client'
import React from 'react';
import Image from 'next/image';

interface SolutionsInfoProps {
    imageSrc?: string;
    imagePosition?: 'left' | 'right';
    bgText?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
}

export default function SolutionsInfo({
    imageSrc = "/images/solutions/OneSolution.webp",
    imagePosition = 'left',
    bgText = "One Solution. Every Environment.",
    title = "A unified cybersecurity platform designed to protect networks across homes, businesses, and critical industries.",
    description = "Marma delivers enterprise-grade, network-level cybersecurity that adapts seamlessly to a wide range of use cases—from residential environments and small businesses to healthcare, finance, education, and other critical sectors. Built for simplicity and scale, Marma protects every device connected to your Wi-Fi network without requiring complex setups or technical expertise."
}: SolutionsInfoProps) {

    const isRight = imagePosition === 'right';

    return (
        <section className="relative w-full pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col items-center overflow-x-clip">

            {/* Faded Background Text */}
            <div className="w-full flex justify-center z-0 select-none pointer-events-none px-4 max-w-[1440px] mx-auto">
                <span className="solutions-info-bg-text w-full break-words">
                    {bgText}
                </span>
            </div>

            {/* Main Content Grid */}
            <div className="w-full max-w-[1440px] bg-[#f7f7f7] mx-auto px-6 lg:px-12 grid grid-cols-1 py-12 lg:py-20 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center rounded-sm">

                {/* Image Side */}
                <div className={`relative w-full h-[300px] md:h-[400px] lg:h-[420px] rounded-[24px] overflow-hidden ${isRight ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                    <Image
                        src={imageSrc}
                        alt="Cybersecurity monitoring"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Content Side */}
                <div className={`flex flex-col z-10 relative w-full items-center text-center lg:items-start lg:text-left ${isRight ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                    <div className="bg-transparent flex flex-col justify-center items-center lg:items-start relative">
                        <h3 className="solutions-info-title pb-[20px] mb-6">
                            {title}
                        </h3>

                        <p className="solutions-info-desc mb-20">
                            {description}
                        </p>

                        {/* Outlined Explore Button */}
                        <button className="flex items-center justify-between gap-5 rounded-full pl-6 pr-1.5 py-1.5 transition-transform hover:scale-[1.02] bg-transparent border-[1.5px] border-[#FF0000] text-[#FF0000] w-fit mt-4 lg:mt-0">
                            <span className="solutions-info-btn-text pt-0.5">
                                Explore
                            </span>
                            <div className="border border-[#FF0000] text-[#FF0000] rounded-full p-2 flex items-center justify-center shrink-0 ml-4 group-hover:bg-[#FF0000]/10 transition-colors">
                                <Image
                                    src="/images/global/arrow-red.png"
                                    alt="Arrow"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
}
