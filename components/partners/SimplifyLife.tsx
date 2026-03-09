import React from 'react';
import Image from 'next/image';

interface FeatureItem {
    id: string;
    image: string;
    title: string;
    description: React.ReactNode;
}

const features: FeatureItem[] = [
    {
        id: "truck-rolls",
        image: "/simplify-img1.png", // Using existing placeholder
        title: "No More Truck Rolls",
        description: (
            <>
                <strong className="font-body font-semibold text-[22px] leading-[28px] tracking-[-0.01em] text-[#323232] block mb-4">Fully remote deployment<br />and management.</strong>
                <p className="font-body font-normal text-[20px] leading-[28px] tracking-[-0.01em] text-[#323232]">
                    Marma can be deployed in minutes with simple phone-guided setup through an intuitive app, reducing effort, cost, and deployment time.
                </p>
            </>
        )
    },
    {
        id: "proof-of-value",
        image: "/simplify-img2.png", // Using existing placeholder
        title: "Continous Proof of Value",
        description: (
            <>
                <strong className="font-body font-semibold text-[22px] leading-[28px] tracking-[-0.01em] text-[#323232] block mb-4">Measurable security<br />performance in real time.</strong>
                <p className="font-body font-normal text-[20px] leading-[28px] tracking-[-0.01em] text-[#323232]">
                    Cybersecurity often works invisibly—making value hard to see. Marma delivers clear, continuous visibility into blocked threats through an intuitive app.
                </p>
            </>
        )
    },
    {
        id: "wfh-use-cases",
        image: "/simplify-img3.png", // Using existing placeholder
        title: "Serve WFH Use Cases",
        description: (
            <>
                <strong className="font-body font-semibold text-[22px] leading-[28px] tracking-[-0.01em] text-[#323232] block mb-4">Secure remote work from<br />any location.</strong>
                <p className="font-body font-normal text-[20px] leading-[28px] tracking-[-0.01em] text-[#323232]">
                    Marma secures vulnerable home networks, protecting remote work, smart devices, and families from cyber risks.
                </p>
            </>
        )
    }
];

export default function SimplifyLife() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20 md:py-24 bg-white">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-24 gap-8">
                <h2 className="font-title font-bold text-[36px] md:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232]">
                    <span className="text-[#FF0000]">Simplify</span> Your Life.
                </h2>

                {/* Decorative Red Line Graphic */}
                <div className="hidden md:flex items-center justify-end w-full max-w-[500px] lg:max-w-[500px] lg:-mr-12">
                    <div className="relative w-full h-[60px] flex items-center justify-end">
                        {/* Fallback to CSS line if image isn't available yet */}
                        <div className="w-full h-[2px] bg-[#FF0000]/30 relative flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#FF0000] absolute left-0" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features List Layout */}
            <div className="flex flex-col gap-12 lg:gap-16">
                {features.map((feature) => (
                    <div key={feature.id} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-8 lg:gap-12 items-start md:items-center">

                        {/* 1. Image Column */}
                        <div className="relative w-full aspect-[16/9] lg:aspect-[1.5/1] rounded-[16px] overflow-hidden shadow-sm mb-4 md:mb-0">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* 2. Title Column */}
                        <div className="flex flex-col justify-start md:pt-5 h-full">
                            <h3 className="font-body font-normal text-[26px] md:text-[32px] lg:text-[34px] leading-[1.3] md:leading-[34px] tracking-[-0.01em] text-[#323232]">
                                {feature.title}
                            </h3>
                        </div>

                        {/* 3. Description Column with conditional Left Border on Desktop */}
                        <div className="flex flex-col justify-center h-full border-l-0 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-[#FF0000] pt-6 md:pt-0 pl-0 md:pl-8 lg:pl-10 mt-2 md:mt-0">
                            <div className="flex flex-col justify-center w-full">
                                {feature.description}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}
