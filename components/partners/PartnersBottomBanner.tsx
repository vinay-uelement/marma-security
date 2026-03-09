import React from 'react';

export default function PartnersBottomBanner() {
    return (
        <section
            className="relative w-full min-h-[500px] md:min-h-[600px] mb-25 flex items-center overflow-hidden py-16 lg:py-0"
            style={{
                backgroundImage: `url('/partner-banner-bottom.png')`, // Fallback/Placeholder path
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Main Content Container */}
            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between">

                {/* Left Side spacer to push content right if needed because background image has devices on the left */}
                <div className="hidden md:block w-full md:w-1/2 h-full min-h-[400px]"></div>

                {/* Right Side: Text / Info */}
                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-end items-center h-full">

                    {/* Right-Aligned Text Stack */}
                    <div className="w-full flex flex-col items-center md:items-end text-center md:text-right space-y-4 md:space-y-6 bg-black/40 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none mt-8 md:mt-0">

                        <h2 className="btm-banner-patner text-[28px] md:text-[32px] leading-tight md:leading-[34px]">
                            Simplified Network Security
                        </h2>

                        <h3 className="btm-banner-patner-sub md:pl-5 max-w-[500px] md:max-w-[650px] text-[20px] md:text-[24px] leading-tight md:leading-[28px]">
                            Automated protection that scales effortlessly across client environments.
                        </h3>

                        <p className="btm-banner-patner-desc max-w-[500px] md:max-w-[650px] pt-2 md:pt-4 text-[#EAEAEA] text-[14px] md:text-[16px]">
                            Marma delivers automated, network-level security that is easy to deploy, manage, and scale—removing complexity while ensuring consistent protection for every client. With centralized control and real-time threat protection, it secures all connected devices without added operational effort.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
