import React from 'react';
import Image from 'next/image';

export default function SolutionsInfo() {
    return (
        <section className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden">

            {/* Faded Background Text spanning above the Grid */}
            <div className="w-full solutions-faded-bg-text text-[#F1F1F1] text-right overflow-hidden ">
                One Solution. Every Environment.
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 h-full items-stretch w-full">

                {/* Left Side: Image */}
                <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[420px] rounded-[12px] md:rounded-[24px] lg:rounded-r-none lg:rounded-l-[24px] overflow-hidden shadow-lg lg:shadow-none">
                    <Image
                        src="/OneSolution.png" // Fallback placeholder
                        alt="Cybersecurity monitoring"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Right Side: Wrapper */}
                <div className="flex flex-col h-full z-10 relative mt-8 lg:mt-0 w-full max-w-full shrink-0">

                    {/* Content Box */}
                    <div className="bg-[#F1F1F1] p-8 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center flex-grow shadow-sm z-10 relative">
                        <h3 className="font-body font-semibold text-[24px] xl:text-[24px] leading-[34px] tracking-[-0.01em] text-[#323232] mb-6">
                            A unified cybersecurity platform designed to protect networks across homes, businesses, and critical industries.
                        </h3>

                        <p className="font-body font-normal text-[16px] md:text-[18px] leading-[26px] tracking-[-0.01em] text-[#323232] mb-10">
                            Marma delivers enterprise-grade, network-level cybersecurity that adapts seamlessly to a wide range of use cases—from residential environments and small businesses to healthcare, finance, education, and other critical sectors. Built for simplicity and scale, Marma protects every device connected to your Wi-Fi network without requiring complex setups or technical expertise.
                        </p>

                        {/* Outlined Explore Button */}
                        <button className="flex items-center justify-between gap-5 rounded-full pl-6 pr-1.5 py-1.5 transition-transform hover:scale-[1.02] bg-transparent border-[1.5px] border-[#FF0000] text-[#FF0000] w-fit">
                            <span className="font-banner text-[20px] md:text-[22px] font-normal leading-none pt-0.5 tracking-[0.01em]">
                                Explore
                            </span>
                            <div className="border border-[#FF0000] text-[#FF0000] rounded-full p-2 flex items-center justify-center shrink-0 ml-4 group-hover:bg-[#FF0000]/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
}
