"use client";
import React from "react";
import Image from "next/image";
import Button from "../global/Button";

interface SolutionsInfoProps {
  imageSrc?: string;
  imagePosition?: "left" | "right";
  bgText?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export default function SolutionsInfo({
  imageSrc = "/images/solutions/OneSolution.webp",
  imagePosition = "left",
  bgText = "One Solution. Every Environment",
  title = "A unified cybersecurity platform designed to protect networks across homes, businesses, and critical industries.",
  description = "Marma delivers enterprise-grade, network-level cybersecurity that adapts seamlessly to a wide range of use cases—from residential environments and small businesses to healthcare, finance, education, and other critical sectors. Built for simplicity and scale, Marma protects every device connected to your Wi-Fi network without requiring complex setups or technical expertise.",
}: SolutionsInfoProps) {
  const isRight = imagePosition === "right";

  return (
    <section className="relative w-full mt-8 md:pt-12 pb-0 md:pb-16 md:pt-10 md:pb-24 flex flex-col items-center ">
      {/* Faded Background Text */}
      <div className="w-full absolute top-[-7px] md:top-[32px] lg:top-[30px] -translate-y-1/2 flex justify-center z-0 select-none pointer-events-none px-0 md:px-4 max-w-[1440px] mx-auto">
        <span className="solutions-info-bg-text w-full whitespace-nowrap">
          {bgText}
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-[1440px] bg-[#f7f7f7] mx-auto px-6 lg:px-12 flex flex-col lg:grid py-12 lg:py-20 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10 items-center rounded-sm">
        {/* Content Side */}
        <div
          className={`flex flex-col z-10 relative w-full h-full items-center text-center lg:items-start lg:text-left order-1 ${
            isRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="bg-transparent flex flex-col justify-between h-full items-center lg:items-start relative">
            <div className="flex flex-col">
              <h3 className="solutions-info-title pb-[20px] lg:mb-6">
                {title}
              </h3>

              <p className="solutions-info-desc mb-2 lg:mb-20">{description}</p>
            </div>

            {/* Outlined Explore Button (Desktop only, bound inside the text bounds) */}
            <Button
              icon
              variant="secondary"
              label="Explore"
              textContainer="text-black!"
              className=" border-gray-300! hidden lg:flex"
            />
          </div>
        </div>

        {/* Image Side */}
        <div
          className={`relative w-full h-[300px] md:h-[400px] lg:h-[420px] rounded-[24px] overflow-hidden order-2 ${
            isRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={imageSrc}
            alt="Cybersecurity monitoring"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Outlined Explore Button (Mobile/Tablet only, situated beneath the image physically) */}
        <div className="flex lg:hidden justify-center items-center w-full order-3 mt-4">
          <Button
            icon
            variant="secondary"
            label="Explore"
            textContainer="text-black!"
            className=" border-gray-400!"
          />
        </div>
      </div>
    </section>
  );
}
