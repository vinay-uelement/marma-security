"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";

const testimonials = [
  {
    name: "C. Booth",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    image: "/images/banners/solution-banner-right1.webp",
    content: "Outstanding Cybersecurity Solution!",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    image: "/images/banners/solution-banner-right1.webp",
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. ",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    image: "/images/banners/solution-banner-right1.webp",
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. ",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    image: "/images/banners/solution-banner-right1.webp",
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. ",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    image: "/images/banners/solution-banner-right1.webp",
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. ",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    image: "/images/banners/solution-banner-right1.webp",
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. ",
  },
];

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    setScrollProgress((clientWidth / scrollWidth) * 100);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // (scrollLeft + clientWidth) / scrollWidth = % of content that has been seen
    // At start: clientWidth/scrollWidth (already visible portion, not 0)
    // At end: scrollWidth/scrollWidth = 100%
    setScrollProgress(((scrollLeft + clientWidth) / scrollWidth) * 100);

    const cardEl = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = cardEl.offsetWidth;
    const computedGap = parseInt(getComputedStyle(scrollRef.current).gap) || 24;
    const index = Math.round(scrollLeft / (cardWidth + computedGap));
    setActiveIndex(Math.min(index, testimonials.length - 1));
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;
    const cardEl = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = cardEl.offsetWidth;
    const computedGap = parseInt(getComputedStyle(scrollRef.current).gap) || 24;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + computedGap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => scrollTo(Math.max(activeIndex - 1, 0));
  const handleNext = () =>
    scrollTo(Math.min(activeIndex + 1, testimonials.length - 1));

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-8 lg:py-24 overflow-x-clip ">
      <div className="relative z-10 w-full mb-10 lg:mb-16 px-6 lg:px-12 max-w-[1440px] mx-auto ">
        <div className="relative flex flex-col items-start md:flex-row md:items-center text-left justify-between gap-6 md:gap-12 w-full h-auto mt-8 md:mt-0">
          {/* Decorative Line — Mobile */}
          <div className="flex md:hidden absolute top-[-50px] right-[-24px] items-start justify-end w-[280px] pointer-events-none overflow-x-clip z-0">
            <div className="w-full flex justify-end">
              <DecorativeLine
                viewBox="0 0 700 80"
                points="100,40 1100,40"
                dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                className="w-full h-auto translate-x-[15%]"
              />
            </div>
          </div>

          <h2 className="fl2 whitespace-normal md:whitespace-nowrap w-full relative z-10">
            See what our{" "}
            <HighlightedText
              text="customers"
              className="text-[#323232] !font-extrabold"
              imageClassName="bottom-[-10px] md:bottom-[-20px] left-0 md:left-2/4 md:-translate-x-1/2 w-[100%]"
            />{" "}
            say
          </h2>

          {/* Decorative Line — Desktop */}
          <div className="hidden md:block absolute right-0 top-0 pointer-events-none z-0">
            <div className="relative w-[35vw] flex justify-end">
              <DecorativeLine
                viewBox="0 0 700 80"
                points="100,40 1100,40"
                dots={[{ cx: 100, cy: 40, rippleCount: 2 }]}
                className="w-[300px] lg:w-[400px] h-auto ml-auto"
                animationDuration={3.3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] ml-6 lg:ml-12 mr-6 sm:mr-0">
        {/* Testimonial Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-8 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-bg-card border border-border-card rounded-[19px] px-[18px] py-[24px] flex flex-row flex-shrink-0 w-full max-w-full min-w-0 sm:w-[72vw] md:w-[47vw] lg:w-[32vw] xl:w-[430px] snap-center md: overflow-hidden ${index === testimonials.length - 1 ? "sm:mr-6" : ""
                }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 z-0">
                <Image
                  src="/images/global/quote-icon2.png"
                  alt="Quote"
                  width={50}
                  height={74}
                  className="object-contain opacity-60"
                />
              </div>

              {/* Left — text content */}
              <div className="relative z-10 flex flex-col flex-1 min-w-0 pr-2">
                {/* Header */}
                <div className="mb-2">
                  <h3 className="tm-card-name-bold text-text-dark">
                    {testimonial.name}
                  </h3>
                  <p className="tm-card-subtitle-reg">{testimonial.title}</p>
                </div>

                {/* Content */}
                <p className="tm-card-text-body text-text-muted leading-relaxed mb-2">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-auto">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="18"
                        height="20"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M8 0L10.472 4.965L16 5.86L12 9.71L12.944 15L8 12.43L3.056 15L4 9.71L0 5.86L5.528 4.965L8 0Z"
                          fill="#dfaf2d"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="tm-card-rating ml-1 text-text-dark">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Right — product image, overflows bottom */}
              {testimonial.image && (
                <div className="relative z-10 flex-shrink-0 w-[120px] self-stretch">
                  <div className="absolute bottom-[10px] right-[8px] w-[105px] h-[155px]">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} product`}
                      fill
                      sizes="120px"
                      className="object-contain object-bottom drop-shadow-xl"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar + Arrows */}
        <div className="w-full flex justify-between items-center mt-2  pt-2  gap-6 md:gap-12 pr-6 lg:pr-12">
          {/* Progress Bar */}
          <div className="flex-grow relative h-[3px]">
            <div className="absolute inset-0 w-full h-full bg-[#E5E5E5] rounded-full z-10" />
            <div
              className="absolute left-0 top-0 h-full bg-[#FF0000] z-20 transition-all duration-300 ease-in-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Arrows */}
          <div className="flex justify-end gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`w-10 h-10 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors
                ${activeIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
              aria-label="Previous"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === testimonials.length - 1}
              className={`w-10 h-10 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors
                ${activeIndex === testimonials.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
              aria-label="Next"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
