import React from "react";
import HighlightedText from "@/components/global/HighlightedText";
import DecorativeLine from "@/components/home/DecorativeLine";
import { CheckSquare } from "lucide-react";
import Image from "next/image";

export default function WhoWeAre() {
  const cards = Array(4).fill({
    title: "SafeHome Firewall",
    desc: "SafeHome protects all connected devices on your network from cyberattacks targeting your",
  });

  return (
    <section className="w-full bg-[#FFFFFF] relative overflow-hidden pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="absolute top-5 right-0 w-[320px] lg:w-[450px] flex flex-col justify-end z-20 pointer-events-none">
        <DecorativeLine
          viewBox="0 0 700 80"
          points="-3000,40 210,40"
          dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
          className="w-full h-auto scale-x-[-1]"
          dotRadius={12}
          animationDuration={2.5}
        />
        <DecorativeLine
          viewBox="0 120 1260 160"
          points="20,150 500,150 600,270 3000,270"
          dots={[{ cx: 0, cy: 150, rippleCount: 4 }]}
          className="w-full h-auto -mt-4 md:-mt-10"
          strokeWidth={3}
          dotRadius={22}
          animationDuration={2.5}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 lg:gap-24">
        {/* Top Section: Text & Image Placeholder */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full flex flex-col items-start pr-0 lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A] tracking-[-0.02em]">
              Who we{" "}
              <HighlightedText
                text="Are?"
                className="font-bold text-[#1A1A1A]"
                imageClassName="bottom-[-15px] sm:bottom-[-20px] left-[-5px] right-[-10px]"
              />
            </h2>

            <h3 className="text-xl md:text-[22px] font-bold text-[#323232] mt-12 md:mt-16 leading-snug">
              We’re Making Enterprise-Grade Network Security Simple and Accessible for Everyone
            </h3>

            <p className="text-[#666666] text-sm md:text-base leading-relaxed mt-4 max-w-[500px]">
              In a world where cyber threats are rising and impacting everyday lives, Marma Security was founded with a clear purpose — to make cybersecurity simple, accessible, and effective for everyone.

              We build AI-powered, plug-and-play security solutions that protect enterprises, businesses, homes, and smart devices from evolving digital threats. Our platform works proactively to detect and stop attacks—before they cause damage—without requiring deep technical expertise.

              At our core, we believe cybersecurity should not be complicated or limited to experts. It should be effortless, intelligent, and available to all.

              Because at Marma Security, we’re not just securing systems—we’re securing lives.
            </p>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="w-full aspect-[4/3] relative rounded-2xl shadow-sm overflow-hidden">
              <Image src="/images/contact/who_we_are.webp" alt="Marma Mobile App" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        {false && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border border-gray-100 rounded-2xl px-6 py-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container stacked circles */}
              <div className="w-16 h-16 bg-[#F3F3F3] rounded-full flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-full border border-[#E83424] bg-white flex items-center justify-center">
                  <CheckSquare className="w-5 h-5 text-[#E83424]" strokeWidth={1.5} />
                </div>
              </div>
              <h4 className="text-[#1A1A1A] font-bold text-lg mb-3">
                {card.title}
              </h4>
              <p className="text-[#666666] text-sm leading-relaxed max-w-[220px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>}

        {/* Bottom Section: Mission & Vision */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 pt-8 pb-32">
          {/* Mission */}
          <div className="flex-1 flex flex-col items-start pr-0 lg:pr-8">
            <h2 className="text-4xl md:text-[42px] font-medium text-[#1A1A1A] tracking-[-0.02em] mb-8">
              Our{" "}
              <HighlightedText
                text="Mission"
                className="font-bold text-[#1A1A1A]"
                imageClassName="bottom-[-15px] sm:bottom-[-20px] -left-[10px] -right-[15px]"
              />
            </h2>
            <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-[500px]">
              To empower organizations and individuals with simple, intelligent, and always-on cybersecurity solutions that proactively prevent threats before they cause harm.
            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 flex flex-col items-start pr-0 lg:pr-8">
            <h2 className="text-4xl md:text-[42px] font-medium text-[#1A1A1A] tracking-[-0.02em] mb-8">
              Our{" "}
              <HighlightedText
                text="Vision"
                className="font-bold text-[#1A1A1A]"
                imageClassName="bottom-[-15px] sm:bottom-[-20px] -left-[10px] -right-[15px]"
              />
            </h2>
            <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-[500px]">
              To create a digitally secure world where every individual, business, and smart device is protected from evolving cyber threats.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Left Decorative Line */}
      <div className="absolute bottom-16 left-0 w-[300px] md:w-[400px] h-[100px] pointer-events-none z-0 hidden sm:block">
        <DecorativeLine
          viewBox="0 0 400 100"
          points="0,50 300,50"
          dots={[{ cx: 300, cy: 50, rippleCount: 3 }]}
          dotRadius={12}
          strokeWidth={2}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
