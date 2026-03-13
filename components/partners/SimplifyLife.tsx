import React from 'react';
import Image from 'next/image';
import HighlightedText from '../global/HighlightedText';

interface FeatureItem {
    id: string;
    image: string;
    title: string;
    description: React.ReactNode;
}

const features: FeatureItem[] = [
    {
        id: "truck-rolls",
        image: "/images/partners/simplify-img1.webp", // Using existing placeholder
        title: "No More Truck Rolls",
        description: (
            <>
                <strong className="partners-simplify-strong block mb-4">Fully remote deployment<br />and management.</strong>
                <p className="partners-simplify-desc">
                    Marma can be deployed in minutes with simple phone-guided setup through an intuitive app, reducing effort, cost, and deployment time.
                </p>
            </>
        )
    },
    {
        id: "proof-of-value",
        image: "/images/partners/simplify-img2.webp", // Using existing placeholder
        title: "Continous Proof of Value",
        description: (
            <>
                <strong className="partners-simplify-strong block mb-4">Measurable security<br />performance in real time.</strong>
                <p className="partners-simplify-desc">
                    Cybersecurity often works invisibly—making value hard to see. Marma delivers clear, continuous visibility into blocked threats through an intuitive app.
                </p>
            </>
        )
    },
    {
        id: "wfh-use-cases",
        image: "/images/partners/simplify-img3.webp", // Using existing placeholder
        title: "Serve WFH Use Cases",
        description: (
            <>
                <strong className="partners-simplify-strong block mb-4">Secure remote work from<br />any location.</strong>
                <p className="partners-simplify-desc">
                    Marma secures vulnerable home networks, protecting remote work, smart devices, and families from cyber risks.
                </p>
            </>
        )
    }
];

export default function SimplifyLife() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-10 md:py-14 bg-[#FFF]">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16 md:mb-24 gap-8">
                <h2 className="partners-simplify-heading mt-8 lg:mt-24">
                    <HighlightedText text="Simplify" className="text-[#323232] font-bold" imageClassName="bottom-[-10px] md:bottom-[-20px] right-[0]" /> Your Life.
                </h2>

                {/* Decorative Red Line Graphic */}
                <div className="hidden md:flex items-start justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12">
                    <Image
                        src="/images/home/rightside-section-homepage-new.webp"
                        alt="Decorative Line"
                        width={500}
                        height={60}
                        className="object-contain w-full h-auto"
                    />
                </div>
            </div>

            {/* Features List Layout */}
            <div className="flex flex-col gap-12 lg:gap-16">
                {features.map((feature) => (
                    <div key={feature.id} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-8 lg:gap-12 items-start  md:items-center">

                        {/* 1. Image Column */}
                        <div className="relative w-full aspect-[16/9] lg:aspect-[1.5/1] rounded-[16px] overflow-hidden shadow-sm mb-4 md:mb-0">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>

                        {/* 2. Title Column */}
                        <div className="flex flex-col justify-start md:pt-5 h-full">
                            <h3 className="partners-simplify-title">
                                {feature.title}
                            </h3>
                        </div>

                        {/* 3. Description Column with conditional Left Border on Desktop */}
                        <div className="flex flex-col justify-center h-full border-l-0 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-[#BBB7B7] pt-6 md:pt-0 pl-0 md:pl-8 lg:pl-10 mt-2 md:mt-0">
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
