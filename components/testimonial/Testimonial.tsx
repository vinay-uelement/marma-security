"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import HighlightedText from "../global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";

const testimonials = [
  {    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock.",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock.",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock.",
  },
  {
    name: "Ganesh",
    title: "CEO, Lorem ispum",
    rating: 5.0,
    content:
      "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock.",
  },
];

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;
    const cardWidth = scrollRef.current.children[0].clientWidth;
    // Calculate safely which array item is taking up the center scroll viewport natively
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;
    const cardWidth = scrollRef.current.children[0].clientWidth;
    const gap = 24; // 24px = gap-6 in Tailwind natively applied on mobile tracking
    scrollRef.current.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Removed Background Image */}

      <div className="relative z-10 w-full mb-10 lg:mb-16 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="relative flex flex-col items-start md:flex-row md:items-center text-left justify-between gap-6 md:gap-12 w-full h-auto mt-8 md:mt-0">
          
          {/* Decorative Red Line Graphic (Mobile & Tablet Layout) strictly mapped above the tm-header-pro */}
          <div className="flex md:hidden absolute top-[-50px] right-[-24px] items-start justify-end w-[280px] pointer-events-none overflow-hidden z-0">
             <div className="w-full flex justify-end">
                 <DecorativeLine
                     viewBox="0 0 700 80"
                     points="100,40 1100,40"
                     dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                     className="w-full h-auto translate-x-[15%]"
                 />
             </div>
          </div>

          <h2 className="tm-header-pro text-[#323232] whitespace-normal md:whitespace-nowrap w-full relative z-10">
            See what our{" "}
            <HighlightedText
              text="customers"
              className="text-[#323232] font-bold"
              imageClassName="bottom-[-10px] md:bottom-[-20px] left-0 md:left-2/4 md:-translate-x-1/2 w-[100%]"
            />{" "}
            say
          </h2>

          {/* Decorative Red Line Graphic (Desktop Layout) */}
          <div className="hidden md:block absolute right-0 top-0 pointer-events-none z-0">
              <div className="relative w-[35vw] flex justify-end">
                  <DecorativeLine
                      viewBox="0 0 700 80"
                      points="100,40 1100,40"
                      dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                      className="w-[300px] lg:w-[400px] h-auto ml-auto"
                  />
              </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] ml-6 mr-6 lg:ml-12">
        {/* Testimonial Cards */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-8 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#F0F0F0] border border-[#D9D9D98C] rounded-[19] px-[18px] py-[24px] flex flex-col flex-shrink-0 w-full max-w-full min-w-0 sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[380px] snap-center md:snap-start mr-6 sm:mr-0"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8">
                <Image
                  src="/images/global/quote-icon2.png"
                  alt="Quote"
                  width={50}
                  height={74}
                  className="object-contain"
                />
              </div>

              {/* Header: Name and Title */}
              <div className="mb-[0px]">
                <h3 className="tm-card-name-bold text-[#323232]">{testimonial.name}</h3>
                <p className="tm-card-subtitle-reg text-[#727272]">{testimonial.title}</p>
              </div>

              {/* Content */}
              <p className="tm-card-text-body text-[#727272] leading-relaxed mb-2">{testimonial.content}</p>

              {/* Rating Stars (Moved Below) */}
              <div className="flex items-center gap-2 mt-auto">
                <div className="flex items-center gap-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="20"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L10.472 4.965L16 5.86L12 9.71L12.944 15L8 12.43L3.056 15L4 9.71L0 5.86L5.528 4.965L8 0Z"
                        fill="#dfaf2d"
                      />
                    </svg>
                  ))}
                </div>
                <span className="tm-card-rating ml-3 text-[#323232]">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Pagination Dot Controller */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden pr-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                activeIndex === index ? "bg-[#FF0000] w-[14px] h-[14px] shadow-sm" : "bg-[#D9D9D9] w-[10px] h-[10px]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

