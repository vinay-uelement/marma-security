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
    id: "safehome",
    name: "SafeHome",
    image: "/images/banners/solution-banner-right1.webp",
    link: "#safehome",
  },
  {
    id: "safebiz",
    name: "SafeBiz",
    image: "/images/banners/homepage-right-banner1.webp",
    isNew: true,
    link: "#safebiz",
  },
  {
    id: "safeenterprise",
    name: "SafeEnterprise 200",
    image: "/images/banners/solution-banner-right1.webp",
    link: "#safeenterprise",
  },
  {
    id: "safegov",
    name: "SafeEnterprise 400",
    image: "/images/banners/homepage-right-banner1.webp",
    link: "#safegov",
  },
  {
    id: "safecloud",
    name: "SafeEnterprise 100",
    image: "/images/banners/solution-banner-right1.webp",
    link: "#safecloud",
  },
];

export default function OurTopProduct() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollWidth > 0) {
        setScrollProgress(((scrollLeft + clientWidth) / scrollWidth) * 100);
      }
    }
  };

  useEffect(() => {
    // Initial calculate
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollWidth > 0) {
        setScrollProgress((clientWidth / scrollWidth) * 100);
      }
    }
    
    // Add resize listener just in case layout changes
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section className="w-full py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header Row */}
        <div className="flex flex sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10 w-full max-w-[1360px] mx-auto gap-4">
          <h2 className="tp-section-heading text-[#888888] m-0">
            Our Top Product
          </h2>
          <Link 
            href="/products" 
            className="tp-know-more text-[#EF4444] hover:text-[#d12222] flex items-center gap-2 transition-colors"
          >
            Know More
            <Image 
              src="/images/global/line-md_arrow-up.svg" 
              alt="Arrow" 
              width={24} 
              height={24} 
              className="object-contain w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
            />
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
              className="flex flex-col w-[260px] sm:w-[300px] md:w-[320px] shrink-0 snap-start bg-[#F9F9F9] overflow-hidden group transition-all"
            >
              {/* Top part with Name and conditional New tag */}
              <div className="relative pt-6 px-6 pb-4 h-[260px] md:h-[300px] flex flex-col items-center bg-[#F7F7F7]">
                <div className="w-full text-center md:text-left z-10">
                  <h3 className="tp-card-name m-0">{product.name}</h3>
                </div>
                
                {product.isNew && (
                  <div className="tp-new-badge absolute top-0 right-0 px-8 py-2 z-10 flex items-center  justify-center" style={{ borderBottomLeftRadius: '10px' }}>
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
              <div className="bg-[#F3F2F2] py-6 mt-auto">
                <Link 
                  href={product.link}
                  className="tp-know-more flex items-center justify-center gap-2 text-[#EF4444] hover:text-[#d12222] transition-colors"
                >
                  Know More
                  <Image 
                    src="/images/global/line-md_arrow-up.svg" 
                    alt="Arrow" 
                    width={24} 
                    height={24} 
                    className="object-contain w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Progress Bar */}
        <div className="flex justify-center mt-6 mb-4 px-20 w-full mx-auto">
          <div className="w-full relative h-[8px]">
            <div className="absolute inset-0 w-full h-full bg-[#E5E5E5]  rounded-full z-10" />
            <div 
              className="absolute left-0 top-0 h-full bg-[#FF0000] z-20 transition-all duration-300 ease-in-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
