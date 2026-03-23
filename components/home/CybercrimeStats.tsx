import React from 'react';
import Image from 'next/image';

export default function CybercrimeStats() {
    return (
        <>
            {/* DESKTOP VIEW */}
            <section className="hidden lg:block w-full max-w-[1440px] mx-auto px-12 py-4 bg-[#FFFFFF] relative z-20">
                <div className="grid grid-cols-2 gap-20 items-center">
                    {/* Left Column: Device Image */}
                    <div className="flex justify-center items-center w-full h-full min-h-[500px]">
                        <div className="relative w-full max-w-[423px] aspect-[423/495] translate-y-[25%] z-30">
                            <Image
                                src="/images/home/black-device-homepage.webp"
                                alt="Marma Security Black Device"
                                fill
                                sizes="50vw"
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col space-y-6 relative z-10 text-left items-start pb-0">
                        <h3 className="text-cybercrime-title pb-[20px]">
                            Cybercriminals don’t discriminate—small businesses and homes are their easiest targets.
                        </h3>
                        <p className="text-cybercrime-body pb-[10px] ">
                            43% of cyberattacks are targeted at small businesses and about 41% of small businesses have experienced some form of cyberattack in the last 12 months. In addition, nearly 1 million Americans reported being the victim of a cybercrime to the FBI in 2023, and 1.1 million Americans experienced identity theft in 2023.
                        </p>
                        <p className="text-cybercrime-emphasis">
                            We think that’s unacceptable.
                        </p>
                    </div>
                </div>
            </section>

            {/* MOBILE & TABLET VIEW */}
            <section className="lg:hidden w-full relative z-20 flex flex-col pt-0 md:pt-4">
                {/* Top Half: White bg */}
                <div className="bg-[#FFFFFF] w-full px-6 flex flex-row items-stretch gap-4 relative z-20">
                    <div className="w-[45%] flex justify-end items-end relative min-h-[200px] sm:min-h-[220px] translate-y-8 sm:translate-y-12 z-30">
                        <div className="relative w-full max-w-[180px] sm:max-w-[240px] aspect-[423/495]">
                            <Image
                                src="/images/home/black-device-homepage.webp"
                                alt="Marma Security Black Device"
                                fill
                                sizes="50vw"
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                    <div className="w-[55%] pb-2 text-left flex flex-col  justify-end md:justify-center mt-2">
                        <h3 className="text-cybercrime-title mt-4 sm:mt-6 mr-10 md:mr-0">
                            Cybercriminals don’t discriminate small businesses and homes are their easiest targets.
                        </h3>
                    </div>
                </div>

                {/* Bottom Half: Grey bg (#F7F7F7) */}
                <div className="bg-[#F7F7F7] w-full px-6 pt-12 sm:pt-16  pb-2 md:pb-12 relative z-10">
                    <p className="text-cybercrime-body pb-[15px] text-[#666666]">
                        43% of cyberattacks are targeted at small businesses and about 41% of small businesses have experienced some form of cyberattack in the last 12 months. In addition, nearly 1 million Americans reported being the victim of a cybercrime to the FBI in 2023, and 1.1 million Americans experienced identity theft in 2023.
                    </p>
                    <p className="text-cybercrime-emphasis">
                        We think that’s unacceptable.
                    </p>
                </div>
            </section>
        </>
    );
}
