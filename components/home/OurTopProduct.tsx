"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
  link: string;
}

const topProducts: Product[] = [
  {
    id: "safegov",
    name: "SafeEnterprise 400",
    image: "/images/product/SafeEnterprise4001.webp",
    link: "/product?tab=enterprise&product=safeenterprise-400",
  },
  {
    id: "safeenterprise",
    name: "SafeEnterprise 200",
    image: "/images/product/SafeEnterprise2001.webp",
    link: "/product?tab=enterprise&product=safeenterprise-200",
  },
  {
    id: "safecloud",
    name: "SafeEnterprise 100",
    image: "/images/product/SafeEnterprise4002.webp",
    isNew: true,
    link: "/product?tab=enterprise&product=saferemote",
  },
  {
    id: "safebiz",
    name: "SafeBiz",
    image: "/images/banners/homepage-right-banner1.webp",
    link: "/product?tab=smb&product=safebiz",
  },
  {
    id: "safehome",
    name: "SafeHome",
    image: "/images/banners/solution-banner-right1.webp",
    link: "/product?tab=home&product=safehome",
  },

];

export default function OurTopProduct() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (
      !scrollContainerRef.current ||
      scrollContainerRef.current.children.length === 0
    )
      return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    if (scrollWidth > 0) {
      setScrollProgress(((scrollLeft + clientWidth) / scrollWidth) * 100);
    }

    // Calculate active index for arrows
    const cardEl = scrollContainerRef.current.children[0] as HTMLElement;
    const cardWidth = cardEl.offsetWidth;
    const computedGap =
      parseInt(window.getComputedStyle(scrollContainerRef.current).gap) || 24;
    const index = Math.round(scrollLeft / (cardWidth + computedGap));
    setActiveIndex(Math.min(index, topProducts.length - 1));
  };

  const scrollTo = (index: number) => {
    if (
      !scrollContainerRef.current ||
      scrollContainerRef.current.children.length === 0
    )
      return;
    const cardEl = scrollContainerRef.current.children[0] as HTMLElement;
    const cardWidth = cardEl.offsetWidth;
    const computedGap =
      parseInt(window.getComputedStyle(scrollContainerRef.current).gap) || 24;
    scrollContainerRef.current.scrollTo({
      left: index * (cardWidth + computedGap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => scrollTo(Math.max(activeIndex - 1, 0));
  const handleNext = () =>
    scrollTo(Math.min(activeIndex + 1, topProducts.length - 1));

  useEffect(() => {
    handleScroll();

    // Add resize listener just in case layout changes
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section className="w-full max-w-[1440px] mx-auto py-8 md:pb-0 md:pt-20 bg-white overflow-hidden">
      <div className="max-w-[1440px]  px-4 md:px-8">
        {/* Header Row */}
        <div className="flex flex sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10 w-full max-w-[1360px] mx-auto gap-4">
          <h2 className="tp-section-heading text-[#888888] m-0">
            Our Top Product
          </h2>
          <Link
            href="/product"
            className="tp-know-more text-[#FF0000] flex items-center gap-2 transition-colors group w-fit"
          >
            <span className="text-[#FF0000] ">Know More</span>
            <span className="flex items-center justify-center">
              <Image
                src="/images/global/line-md_arrow-up.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="object-contain w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
            </span>
          </Link>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 mx-auto max-w-[1360px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-[260px] sm:w-[300px] md:w-[320px] shrink-0 bg-[#F9F9F9] overflow-hidden group transition-all"
            >
              {/* Top part with Name and conditional New tag */}
              <div className="relative pt-6 px-6 mb-4 h-[260px] md:h-[300px] flex flex-col items-center bg-[#F7F7F7]">
                <div className="w-full text-center md:text-left z-10">
                  <h3 className="tp-card-name m-0">{product.name}</h3>
                </div>

                {product.isNew && (
                  <div
                    className="tp-new-badge absolute top-0 right-0 px-8 py-2 z-10 flex items-center  justify-center"
                    style={{ borderBottomLeftRadius: "10px" }}
                  >
                    New
                  </div>
                )}

                {/* Image Wrap */}
                <div className="relative w-full flex-1 flex items-center justify-start mt-4 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-[95%]  h-full min-h-[160px] md:min-h-[200px] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Know More bar */}
              <Link
                href={product.link}
                className="group/knowmore bg-[#F3F2F2] py-6 mt-auto flex items-center justify-center gap-2 text-[#FF0000] transition-colors w-full"
              >
                <span className="text-[#FF0000]">Know More</span>
                <span className="transition-transform group-hover/knowmore:translate-x-1 flex items-center justify-center">
                  <Image
                    src="/images/global/line-md_arrow-up.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="object-contain w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Progress Bar */}
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
              disabled={activeIndex === topProducts.length - 1}
              className={`w-10 h-10 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors
                ${activeIndex === topProducts.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
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
