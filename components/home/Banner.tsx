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
}

export default function Banner({
  backgroundImage,
  title,
  subtitle,
  subtitleClassName = "font-title text-[20px] md:text-[24px] text-white/90 max-w-[550px] tracking-[-0.01em] leading-relaxed font-light",
  buttons = [],
  rightImage,
  rightImageAlt = "Banner Image",
  titleClassName = "font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white drop-shadow-sm",
  rightImageClassName = "",
}: BannerProps) {
  // Dynamic height class assignment based on the prop

  return (
    <section className="h-screen w-screen">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="hero-background"
        width={1000}
        height={1000}
        className="absolute w-full h-[92vh]! object-cover object-center"
        priority={true}
        fetchPriority="high"
      />

      <div className="h-[92dvh] relative z-0 overflow-hidden w-full flex items-center md:items-end">
        {/* Main Content Container inside the Banner */}
        <div className="relative z-10 px-6 lg:px-12 h-3/5 mb-14 w-full py-12 lg:py-0">
          {/* Left Column: Text, Subtitle, and Buttons */}
          <div className="flex flex-col space-y-4 md:space-y-6 pb-5 mt-12 md:mt-16 lg:mt-0 text-white z-20 items-center lg:items-start text-center lg:text-left">
            {" "}
            {/* Title text */}
            <div className={titleClassName}>{title}</div>
            {/* Render Subtitle conditionally */}
            {subtitle && <div className={subtitleClassName}>{subtitle}</div>}
            {/* Render Buttons conditionally */}
            {buttons && buttons.length > 0 && (
              <div className=" lg:absolute flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-6 md:pt-8 lg:pt-16 w-full lg:bottom-0">
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
        </div>
      {/*  background circle */}
      <div
        className=" absolute max-sm:left-1/2 max-sm:-translate-x-1/2 md:-right-6 bottom-0 md:-bottom-4 w-[35vh] h-[35vh] md:w-[75vh] md:h-[75vh] rounded-full opacity-50
            bg-[linear-gradient(290deg,rgba(255,0,0,0.01)_0%,rgba(255,0,0,1)_100%)]
            backdrop-blur-[60px]
            "
      ></div>
      </div>


      {/* product image */}
      <Image
        src={rightImage || ""}
        alt={rightImageAlt}
        width={1000}
        height={1000}
        priority={true}
        className={`absolute w-[50vh] max-sm:w-[55vw] object-cover object-center bottom-[5vh] right-10 md:bottom-[3vh] md:right-15 z-0 ${rightImageClassName}`}
        fetchPriority="high"
      />
    </section>
  );
}
