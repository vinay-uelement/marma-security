import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/global/Button";
import { MoleculeIcon } from "../technology/TheMarmaAdvantage";

export default function MobileAppShowcase() {
  const features = [
    "PhishBlock",
    "RansomGuard",
    "NetImmunity",
    "SafeID",
    "MalwareGuard",
    "SafeDevices",
    "NetStealth",
    "ScamGuard",
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-12 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto bg-[#F7F7F7] rounded-[32px] p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">

          {/* Left Column */}
          <div className="flex-1 max-w-[650px] flex flex-col justify-start">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#323232] leading-snug mb-10 md:mb-16 tracking-[-0.01em]">
              Discover the power of the Marma Security mobile app
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  {/* Placeholder box */}
                  <div className="w-[42px] h-[42px]">
                    <MoleculeIcon className="text-[#323232]" />
                  </div>
                  <span className="text-[#323232] font-semibold text-[17px] md:text-xl tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full max-w-[600px] flex flex-col justify-between items-end gap-10 lg:ml-auto">
            {/* Image Placeholder Frame */}
            <div className="w-full relative rounded-[20px] overflow-hidden aspect-[4/3] lg:aspect-[5/4] flex-shrink-0 shadow-sm border border-[rgba(0,0,0,0.05)] bg-[#E5E5E5] flex items-center justify-center">
              {/* Once image is available, insert it here like this: */}
              <Image src="/images/home/solution-info-homepage1.webp" alt="Marma Mobile App" fill className="object-cover" />
            </div>

            {/* Explore Button */}
            <Link href="/technology#marma-advantage">
              <Button label="Explore" icon={true} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
