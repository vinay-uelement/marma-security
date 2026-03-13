import React from 'react';
import Image from 'next/image';

export default function PartnersBottomBanner() {
    return (
        <section className="w-full relative py-12 lg:py-16 mb-3 md-mb-20 bg-[#fff]">
            
            {/* Top Left Decorative Red Line */}
            <div className="flex absolute top-12 lg:top-16 left-0 w-[15%] h-[1.5px] bg-[#FF0000] z-20 items-center">
                <div className="absolute right-0 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FF0000] shadow-[0_0_12px_4px_rgba(255,0,0,0.25)]" />
            </div>

            {/* The grey background strip that goes across the bottom */}
            <div className="absolute bottom-0 w-full h-[3%] lg:h-[10%] bg-[#F2F2F2] z-0" />
            
            <div className="w-full max-w-[1440px] mx-auto px-6  lg:px-12 relative z-20 mt-6  md:mt-16 lg:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-20 items-end">
                    
                    {/* Left Column: Device Image */}
                    <div className="flex justify-center mt-5 items-center w-full min-h-[250px] md:min-h-[350px] lg:min-h-[500px]">
                        <div className="relative w-full max-w-[220px] md:max-w-[300px] lg:max-w-[423px] aspect-[423/495] translate-y-4 lg:translate-y-16 z-30">
                            <Image
                                src="/images/home/black-device-homepage.webp" 
                                alt="Marma Security Black Device"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain drop-shadow-[-25px_15px_40px_rgba(0,0,0,0.2)]"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col space-y-4 relative z-10 pb-6 md-pb-16 pt-8 md:pt-12 lg:pt-0 lg:pb-0 text-center lg:text-left items-center lg:items-start max-w-[600px] mx-auto lg:mx-0">
                        {/* Title */}
                        <h3 className="partners-btm-title">
                            Simplified Network Security
                        </h3>
                        
                        {/* Subtitle */}
                        <p className="partners-btm-subtitle pb-2">
                            Automated protection that scales effortlessly across client environments.
                        </p>
                        
                        {/* Description */}
                        <p className="partners-btm-desc pb-0 text-justify md:text-left">
                            Marma delivers automated, network-level security that is easy to deploy, manage, and scale removing complexity while ensuring consistent protection for every client With centralized control and real-time threat protection, it secures all connected devices without added operational effort.
                        </p>
                        
                        <p className="partners-btm-emphasis">
                            We think that’s unacceptable.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
