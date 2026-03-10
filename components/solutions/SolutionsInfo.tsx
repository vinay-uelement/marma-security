
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
    imageSrc = "/OneSolution.png",
    imagePosition = 'left',
    bgText = "One Solution. Every Environment.",
    title = "A unified cybersecurity platform designed to protect networks across homes, businesses, and critical industries.",
    description = "Marma delivers enterprise-grade, network-level cybersecurity that adapts seamlessly to a wide range of use cases—from residential environments and small businesses to healthcare, finance, education, and other critical sectors. Built for simplicity and scale, Marma protects every device connected to your Wi-Fi network without requiring complex setups or technical expertise."
}: SolutionsInfoProps) {

    const isRight = imagePosition === 'right';

    return (
        <section className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden">

            {/* Faded Background Text */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 w-full mb-[-20px] md:mb-[-10px] ${isRight ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`hidden lg:block ${isRight ? 'order-2' : ''}`}></div>
                <div className={`solutions-faded-bg-text text-[#F1F1F1] overflow-hidden text-[24px] md:text-[32px] lg:text-[40px] leading-[1.2] md:leading-[52px] whitespace-normal lg:whitespace-nowrap ${isRight ? 'text-left order-1 pl-12' : 'text-right'}`}>
                    {bgText}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 h-full items-stretch w-full">

                {/* Image Side */}
                <div className={`relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[420px] rounded-[12px] md:rounded-[24px] overflow-hidden shadow-lg lg:shadow-none ${isRight ? 'lg:order-2 lg:rounded-l-none lg:rounded-r-[24px]' : 'lg:order-1 lg:rounded-r-none lg:rounded-l-[24px]'
                    }`}>
                    <Image
                        src={imageSrc}
                        alt="Cybersecurity monitoring"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Content Side */}
                <div className={`flex flex-col h-full z-10 relative mt-8 lg:mt-0 w-full max-w-full shrink-0 ${isRight ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                    <div className="bg-[#F1F1F1] p-8 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center flex-grow shadow-sm z-10 relative">
                        <h3 className="font-body font-semibold text-[24px] xl:text-[24px] leading-[34px] tracking-[-0.01em] text-[#323232] mb-6">
                            {title}
                        </h3>

                        <p className="font-body font-normal text-[16px] md:text-[18px] leading-[26px] tracking-[-0.01em] text-[#323232] mb-10">
                            {description}
                        </p>

                        {/* Outlined Explore Button */}
                        <button className="flex items-center justify-between gap-5 rounded-full pl-6 pr-1.5 py-1.5 transition-transform hover:scale-[1.02] bg-transparent border-[1.5px] border-[#FF0000] text-[#FF0000] w-fit">
                            <span className="font-banner text-[20px] md:text-[22px] font-normal leading-none pt-0.5 tracking-[0.01em]">
                                Explore
                            </span>
                            <div className="border border-[#FF0000] text-[#FF0000] rounded-full p-2 flex items-center justify-center shrink-0 ml-4 group-hover:bg-[#FF0000]/10 transition-colors">
                                <Image
                                    src="/arrow-red.png"
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
