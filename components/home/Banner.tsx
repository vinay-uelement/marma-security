"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../global/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const [activeImage, setActiveImage] = useState<string | null>(rightImage || null);
  const [outgoingImage, setOutgoingImage] = useState<string | null>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  useGSAP(
    () => {
      if (isFirstMount.current) {
        isFirstMount.current = false;
        return;
      }
      if (rightImage !== activeImage) {
        setOutgoingImage(activeImage);
        setActiveImage(rightImage || null);
      }
    },
    { dependencies: [rightImage], scope: imgContainerRef }
  );

  useGSAP(
    () => {
      if (!activeImage || isFirstMount.current) return;

      const incoming = imgContainerRef.current?.querySelector(".incoming-img");
      const outgoing = imgContainerRef.current?.querySelector(".outgoing-img");

      if (incoming) {
        gsap.fromTo(
          incoming,
          {
            y: "-50%",
            rotateX: 30,
            opacity: 0,
            filter: "blur(3px)",
          },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 0.1,
          }
        );
      }

      if (outgoing) {
        gsap.to(outgoing, {
          y: "50%",
          rotateX: -30,
          opacity: 0,
          filter: "blur(3px)",
          duration: 1.5,
          ease: "power2.inOut",
          delay: 0.1,
          onComplete: () => setOutgoingImage(null),
        });
      }
    },
    { dependencies: [activeImage], scope: imgContainerRef }
  );

  return (
    <section className="relative h-svh w-screen">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="hero-background"
        width={1000}
        height={1000}
        className="absolute w-full h-[96svh]! md:h-[93svh]! object-cover object-center"
        priority={true}
        fetchPriority="high"
      />

      <div className="h-[96svh] md:h-[93svh] relative z-0 overflow-hidden w-full flex items-center md:items-end">
        {/* Main Content Container inside the Banner */}
        <div className="relative z-10 px-6 lg:px-12 h-3/5 mb-14 w-full md:py-12 lg:py-0">
          {/* Left Column: Text, Subtitle, and Buttons */}
          <div className="flex flex-col space-y-4  md:space-y-6 pb-5 md:mt-16 lg:mt-0 text-white z-20 items-center lg:items-start text-center lg:text-left">
            {" "}
            {/* Title text */}
            <div className={titleClassName}>{title}</div>
            {/* Render Subtitle conditionally */}
            {subtitle && <div className={subtitleClassName}>{subtitle}</div>}
            {/* Render Buttons conditionally */}
            {buttons && buttons.length > 0 && (
              <div className=" lg:absolute flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-6 md:pt-8 lg:pt-16 w-full lg:bottom-0">
                {buttons.map((btn, index) => {
                  const ButtonContent = (
                    <Button
                      key={`btn-inner-${index}`}
                      label={btn.label}
                      variant={btn.variant}
                      icon={btn.icon}
                      onClick={btn.onClick}
                    />
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
          className=" absolute max-sm:left-1/2 max-sm:-translate-x-1/2 md:-right-6 bottom-0 md:-bottom-4 w-[30vh] h-[30vh] md:w-[75svh] md:h-[75svh] rounded-full opacity-50
            bg-[linear-gradient(290deg,rgba(255,0,0,0.01)_0%,rgba(255,0,0,1)_100%)]
            backdrop-blur-[60px]
            "
        ></div>
      </div>

      {/* product image */}

      <div
        ref={imgContainerRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-15 w-[20vh] md:w-[50svh] z-0 pointer-events-none h-full"
      >
        {outgoingImage && (
          <div
            className="outgoing-img absolute bottom-0 right-0 w-full"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={outgoingImage}
              alt={rightImageAlt}
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
        {activeImage && (
          <div
            className="incoming-img absolute bottom-0 right-0 w-full"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={activeImage}
              alt={rightImageAlt}
              width={1000}
              height={1000}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
