"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BannerButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  icon?: boolean;
}

export interface BannerProps {
  backgroundImage: string;
  heightVariant?: "900" | "810" | "794";
  title: React.ReactNode;
  middleText?: React.ReactNode;
  middleTextClassName?: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  buttons?: BannerButton[];
  rightImage?: string;
  rightImageAlt?: string;

  showRightImageCircle?: boolean;
  titleClassName?: string;
  rightImageClassName?: string;
  rightImageCircleClassName?: string;
  rightContent?: React.ReactNode;
  ContinerClass?: string;
  backgroundSize?: string;
  sectionClassName?: string;
  overlay?: boolean;
  centerContent?: boolean;
}

export default function Banner({
  backgroundImage,
  heightVariant = "900",
  title,
  middleText,
  middleTextClassName = "font-title font-medium text-[20px] md:text-[24px] leading-[34px] tracking-[-0.01em] text-white max-w-[550px]",
  subtitle,
  subtitleClassName = "font-title text-[20px] md:text-[24px] text-white/90 max-w-[550px] tracking-[-0.01em] leading-relaxed font-light",
  buttons = [],
  rightImage,
  rightImageAlt = "Banner Image",
  showRightImageCircle = false,
  titleClassName = "font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white drop-shadow-sm",
  rightImageClassName = "scale-[1.15] drop-shadow-2xl",
  rightImageCircleClassName = "bg-[#E12120] shadow-2xl",
  rightContent,
  ContinerClass = "min-h-[100vh]",
  backgroundSize = "cover",
  sectionClassName = "py-12 md:py-16 lg:py-24",
  overlay = false,
  centerContent = false,
}: BannerProps) {
  // Dynamic height class assignment based on the prop
  const heightMap: Record<string, string> = {
    "900": "min-h-[90vh]",
    "810": "min-h-[100vh]",
    "794": "min-h-[100vh]",
  };
  const heightClass = heightMap[heightVariant] || "min-h-[90vh]";

  return (
    <section
      className={`relative w-full flex items-start lg:items-center overflow-visible overflow-x-clip ${ContinerClass} ${sectionClassName} ${heightClass}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: backgroundSize,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/70 z-[5]" />}
      {/* Main Content Container inside the Banner */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 w-full py-12 lg:py-0">
        <div className={`grid grid-cols-1 ${!centerContent ? "lg:grid-cols-2" : "max-w-4xl mx-auto"} gap-8 md:gap-12 lg:gap-20 items-center h-full justify-items-center lg:justify-items-stretch`}>
          {/* Left Column: Text, Subtitle, and Buttons */}
          <div className={`flex flex-col space-y-4 md:space-y-6 pb-5 mt-12 md:mt-16 lg:mt-0 text-white z-20 items-center text-center ${!centerContent ? "lg:items-start lg:text-left" : ""}`}>       {/* Title text */}
            <div className={titleClassName}>{title}</div>

            {/* Render Middle Text conditionally */}
            {middleText && (
              <div className={middleTextClassName}>{middleText}</div>
            )}

            {/* Render Subtitle conditionally */}
            {subtitle && <div className={subtitleClassName}>{subtitle}</div>}

            {/* Render Buttons conditionally */}
            {buttons && buttons.length > 0 && (
              <div className={`flex flex-wrap items-center justify-center ${!centerContent ? "lg:justify-start" : ""} gap-4 md:gap-6 pt-6 md:pt-8 lg:pt-16 w-full lg:bottom-0`}>
                {buttons.map((btn, index) => {
                  const isPrimary =
                    btn.variant !== "secondary" && btn.variant !== "outline";

                  const baseClass =
                    "relative flex items-center justify-center rounded-full pl-8 pr-12 py-1 min-w-[160px] md:min-w-[180px] transition-transform hover:scale-[1.02] group shadow-sm";

                  const variantClass = isPrimary
                    ? "bg-[#FF0000] text-white hover:bg-[#E10000]"
                    : "bg-transparent border border-[#FFFFFF40] text-white hover:bg-white/10";

                  const textClass = isPrimary
                    ? "font-banner text-[16px] md:text-[20px] font-normal tracking-[-0.01em]"
                    : "text-[16px] md:text-[20px] tracking-[0.02em]";

                  const iconContainerClass = isPrimary
                    ? "bg-[#F4F4F4] text-[#FF0000] rounded-full p-1 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors"
                    : "border border-[#ffffff] text-white rounded-full p-1 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors";

                  const ButtonContent = (
                    <button
                      key={`btn-inner-${index}`}
                      onClick={btn.onClick}
                      className={`${baseClass} ${variantClass}`}
                    >
                      <span className={textClass}>{btn.label}</span>

                      {btn.icon && (
                        <div
                          className={`${iconContainerClass} absolute right-1`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </div>
                      )}
                    </button>
                  );

                  return btn.href ? (
                    <Link href={btn.href} key={`btn-${index}`}>
                      {ButtonContent}
                    </Link>
                  ) : (
                    <React.Fragment key={`btn-frag-${index}`}>
                      {ButtonContent}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Hero Graphic/Image conditionally */}
          {rightContent ? (
            <div className="flex justify-center lg:justify-end items-end relative z-20 mt-10 md:mt-16 lg:mt-0 w-full lg:w-auto">
              {rightContent}
            </div>
          ) : (
            rightImage && (
              <div className="flex justify-center lg:justify-end items-center relative z-20 mt-4 lg:mt-0 w-full lg:w-auto">
                <div className="
relative 
w-full 
max-w-[260px] 
sm:max-w-[320px] 
md:max-w-[420px] 
lg:max-w-[650px] 
xl:max-w-[800px] 
flex 
items-center 
justify-center
">
                  {showRightImageCircle && (
                    <div
                      className={`absolute inset-0 m-auto w-[90%] h-[90%] rounded-full ${rightImageCircleClassName}`}
                    />
                  )}
                  <Image
                    src={rightImage}
                    alt={rightImageAlt}
                    width={1000}
                    height={1000}
                    className={`object-contain w-full h-auto ${rightImageClassName}`}
                    priority={true}
                    fetchPriority="high"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
