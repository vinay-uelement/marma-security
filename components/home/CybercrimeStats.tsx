import React from 'react';
import Image from 'next/image';

export default function CybercrimeStats() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-0 lg:py-4 bg-[#FFFFFF] relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column: Device Image */}
                <div className="flex justify-center items-center w-full h-full min-h-[400px] lg:min-h-[500px]">
                    {/* The placeholder image will need to be replaced with the actual black device image by the user */}
                    <div className="relative w-full max-w-[423px] aspect-[423/495] translate-y-[20%] lg:translate-y-[25%] z-30">
                        <Image
                            src="/images/home/black-device-homepage.webp" // Placeholder path for the black device + phone
                            alt="Marma Security Black Device"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col space-y-6 relative z-10 pb-16 pt-12 md:pt-2 lg:pb-0 text-center lg:text-left items-center lg:items-start">
                    <h3 className="home-cybercrime-title pb-[20px]">
                        Cybercriminals don’t discriminate—small businesses and homes are their easiest targets.
                    </h3>
                    <p className="home-cybercrime-body pb-[10px] ">
                        43% of cyberattacks are targeted at small businesses and about 41% of small businesses have experienced some form of cyberattack in the last 12 months. In addition, nearly 1 million Americans reported being the victim of a cybercrime to the FBI in 2023, and 11 million Americans experienced identity theft in 2023.
                    </p>
                    <p className="home-cybercrime-emphasis">
                        We think that’s unacceptable.
                    </p>
                </div>
            </div>
        </section>
    );
}
