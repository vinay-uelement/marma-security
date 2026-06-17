"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SlideImage {
  src: string;
  alt: string;
}

interface HeroImageSliderProps {
  images: SlideImage[];
  className?: string;
}

const CARD_WIDTH = 420;
const CARD_HEIGHT = 300;
const AUTOPLAY_INTERVAL = 4000;

function getCardProps(offset: number) {
  const abs = Math.abs(offset);
  const dir = offset <= 0 ? -1 : 1;

  switch (abs) {
    case 0:
      return { x: 0, scale: 1.05, opacity: 1, zIndex: 30 };
    case 1:
      return { x: dir * 340, scale: 0.72, opacity: 0.45, zIndex: 20 };
    default:
      return { x: dir * 600, scale: 0.65, opacity: 0, zIndex: 0 };
  }
}

export default function HeroImageSlider({
  images,
  className = "",
}: HeroImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = images.length;

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % total),
    [total],
  );

  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused, total]);

  useGSAP(
    () => {
      images.forEach((_, i) => {
        let offset = i - current;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        const { x, scale, opacity, zIndex } = getCardProps(offset);
        const card = containerRef.current?.querySelector(`.hero-slide-${i}`);

        if (card) {
          gsap.to(card, {
            x,
            scale,
            opacity,
            zIndex,
            duration: 0.8,
            ease: "power3.out",
            overwrite: true,
          });
        }
      });
    },
    { dependencies: [current], scope: containerRef },
  );

  // Single image 
  if (total === 1) {
    return (
      <div className={`relative rounded-2xl overflow-hidden ${className}`}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      style={{
        // Fade edges horizontally b
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
    >
      {/* Carousel track */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full"
        style={{
          height: CARD_HEIGHT + 80,
          overflow: "visible",
          paddingBottom: 40,
        }}
      >
        {images.map((image, i) => {
          let offset = i - current;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const isSide = Math.abs(offset) === 1;

          return (
            <div
              key={image.src}
              className={`hero-slide-${i}`}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: -(CARD_WIDTH / 2),
                marginTop: -(CARD_HEIGHT / 2),
                cursor: isSide ? "pointer" : "default",
              }}
              onClick={() => isSide && setCurrent(i)}
            >
              {/* Glow beneath active card */}
              {isCenter && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -16,
                    left: "10%",
                    width: "80%",
                    height: 28,
                    background:
                      "radial-gradient(ellipse 100% 100%, rgba(0,0,0,0.18) 0%, transparent 75%)",
                    filter: "blur(10px)",
                    borderRadius: "50%",
                    zIndex: -1,
                  }}
                />
              )}

              {/* Card */}
              <div
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  background: "#f3f4f6",
                  border: isCenter
                    ? "1px solid rgba(0,0,0,0.12)"
                    : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: isCenter
                    ? "0 20px 60px rgba(0,0,0,0.18)"
                    : "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "border 0.8s ease, box-shadow 0.8s ease",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={isCenter}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      {/* <div className="flex items-center gap-3 mt-4 z-40">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
          aria-label="Previous slide"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 border border-black/10 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7L9 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play" : "Pause"}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 border border-black/10 transition-all duration-200"
        >
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 2L10 6L3 10V2Z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect
                x="2"
                y="2"
                width="3"
                height="8"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="7"
                y="2"
                width="3"
                height="8"
                rx="1"
                fill="currentColor"
              />
            </svg>
          )}
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % total)}
          aria-label="Next slide"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 border border-black/10 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M5 2L10 7L5 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
