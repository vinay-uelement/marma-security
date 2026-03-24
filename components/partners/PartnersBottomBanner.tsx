import React from 'react';
import Image from 'next/image';
import DecorativeLine from '../home/DecorativeLine';

export default function PartnersBottomBanner() {
    return (
        <>
            {/* DESKTOP VIEW */}
            <section className="hidden lg:block w-full relative py-0 md:py-12 lg:py-16 mb-4 md:mb-0 bg-[#fff]">
                
                {/* Top Left Decorative Red Line */}
                <div className="absolute top-12 lg:top-16 left-0 w-screen z-20">
                    <div className="w-[180px] md:w-[240px] lg:w-[320px]">
                        <DecorativeLine
                            viewBox="0 0 600 80"
                            points="0,40 310,40"
                            dots={[{ cx: 310, cy: 40, rippleCount: 3 }]}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* The grey background strip that goes across the bottom */}
                <div className="absolute bottom-0 w-full h-[3%] lg:h-[10%] bg-[#F2F2F2] z-0" />
                
                <div className="w-full max-w-[1440px] mx-auto px-6 pb-3 lg:px-12 relative z-20 mt-6 md:mt-16 lg:mt-0">
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

            {/* MOBILE & TABLET VIEW */}
            <section className="lg:hidden w-full relative z-20 flex flex-col pt-10 md:pt-4 pb-5 md:pb-0">
                {/* Top Left Decorative Red Line */}
                <div className="absolute top-2 sm:top-4 left-0 w-screen z-20">
                    <div className="w-[180px] sm:w-[240px]">
                        <DecorativeLine
                            viewBox="0 0 600 80"
                            points="0,40 310,40"
                            dots={[{ cx: 310, cy: 40, rippleCount: 3 }]}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Top Half: White bg */}
                <div className="bg-[#FFFFFF] w-full px-6 flex flex-row items-stretch gap-4 relative z-20 pt-0 mt-2">
                    <div className="w-[45%] flex justify-end items-end relative min-h-[200px] sm:min-h-[220px] translate-y-8 sm:translate-y-12 z-30">
                        <div className="relative w-full max-w-[180px] sm:max-w-[240px] aspect-[423/495]">
                            <Image
                                src="/images/home/black-device-homepage.webp"
                                alt="Marma Security Black Device"
                                fill
                                sizes="50vw"
                                className="object-contain object-bottom drop-shadow-[-25px_15px_40px_rgba(0,0,0,0.2)]"
                            />
                        </div>
                    </div>
                    <div className="w-[55%] pb-2 text-left flex flex-col justify-end md:justify-center mt-2 relative z-30">
                        <h3 className="fl3 mt-4 sm:mt-6 mr-10 md:mr-0 relative z-30">
                            Simplified Network Security
                        </h3>
                    </div>
                </div>

                {/* Bottom Half: Grey bg (#F7F7F7) */}
                <div className="bg-[#F7F7F7] w-full px-6 pt-12 sm:pt-16 pb-2 md:pb-12 relative z-10">
                    <p className="fl4 pb-[10px] text-text-dark font-medium">
                        Automated protection that scales effortlessly across client environments.
                    </p>
                    <p className="fl4 pb-[15px] text-[#666666]">
                        Marma delivers automated, network-level security that is easy to deploy, manage, and scale removing complexity while ensuring consistent protection for every client With centralized control and real-time threat protection, it secures all connected devices without added operational effort.
                    </p>
                    <p className="fl5 mt-4">
                        We think that’s unacceptable.
                    </p>
                </div>
            </section>
        </>
    );
}
