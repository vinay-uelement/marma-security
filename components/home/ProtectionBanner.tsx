import React from "react";
import Image from "next/image";

export default function ProtectionBanner() {
  return (
    <section className="w-full h-screen bg-[#000000]">
      <div className="relative w-full max-w-[1440px] mx-auto h-full overflow-hidden">
        <Image
          src="/images/home/homepage-below-near.webp"
          alt="Protection against phishing attacks"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark Gradient Overlay to ensure text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0" />

        {/* Bottom Text */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 z-10 pr-6 text-left">
          <h2 className="fl-banner-title">
            Protection against phishing <br className="hidden sm:block" />
            attacks
          </h2>
        </div>
      </div>
    </section>
  );
}
