import React from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";

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
        <strong className="partners-simplify-strong block mb-2 ">
          Fully remote deployment and management.
        </strong>
        <p className="partners-simplify-desc">
          Marma can be deployed in minutes with simple phone-guided setup
          through an intuitive app, reducing effort, cost, and deployment time.
        </p>
      </>
    ),
  },
  {
    id: "proof-of-value",
    image: "/images/partners/simplify-img2.webp", // Using existing placeholder
    title: "Continous Proof of Value",
    description: (
      <>
        <strong className="partners-simplify-strong block mb-2 ">
          Measurable securitperformance in real time.
        </strong>
        <p className="partners-simplify-desc">
          Cybersecurity often works invisibly—making value hard to see. Marma
          delivers clear, continuous visibility into blocked threats through an
          intuitive app.
        </p>
      </>
    ),
  },
  {
    id: "wfh-use-cases",
    image: "/images/partners/simplify-img3.webp", // Using existing placeholder
    title: "Serve WFH Use Cases",
    description: (
      <>
        <strong className="partners-simplify-strong block mb-2">
          Secure remote work from any location.
        </strong>
        <p className="partners-simplify-desc">
          Marma secures vulnerable home networks, protecting remote work, smart
          devices, and families from cyber risks.
        </p>
      </>
    ),
  },
];

export default function SimplifyLife() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 md:py-14 bg-[#FFF]">
      {/* Header Section */}
      <div className="flex md:flex-row justify-between items-start mb-16 md:mb-24 gap-8 mt-5 md:mt-0">
        <h2 className="partners-simplify-heading mt-8 lg:mt-24">
          <HighlightedText
            text="Simplify"
            className="text-[#323232] font-bold"
            imageClassName="bottom-[-18px] md:bottom-[-20px] right-[0]"
          />{" "}
          Your Life.
        </h2>

        {/* Decorative Red Line Graphic */}
        <div className="hidden min-[901px]:flex flex-col w-full min-[901px]:w-[45%]">
          <DecorativeLine
            viewBox="0 0 500 80"
            points="-3000,40 200,40"
            dots={[{ cx: 200, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
            dotRadius={8}
          />
          <DecorativeLine
            viewBox="0 0 500 120"
            points="20,20 80,90 3000,90"
            dots={[{ cx: 20, cy: 20, rippleCount: 3, rippleBaseDelay: 0 }]}
            className="w-full h-auto -mt-20"
            dotRadius={8}
          />
        </div>
      </div>

      {/* Features List Layout */}
      <div className="flex flex-col gap-12 lg:gap-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-6 lg:gap-12 items-start md:items-center"
          >
            {/* 1. Image Column */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[1.5/1] rounded-[16px] overflow-hidden shadow-sm mb-4 md:mb-0">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1176px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* 2 + 3. Title + Description (Tablet grouped) */}
            <div className="flex flex-col h-full md:col-span-1 lg:contents">
              {/* Title */}
              <div className="flex flex-col justify-start md:pt-4">
                <h3 className="partners-simplify-title">{feature.title}</h3>
              </div>

              {/* Description */}
              <div
                className="flex flex-col justify-center 
                            border-t-[1.5px] 
                            md:border-t-[1.5px] 
                            lg:border-t-0 lg:border-l-[1.5px] 
                            border-[#BBB7B7] 
                            pt-6 md:pt-2 lg:pt-0 
                            pl-0 lg:pl-10 
                            mt-2 md:mt-2 lg:mt-0"
              >
                <div className="flex flex-col w-full">
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
