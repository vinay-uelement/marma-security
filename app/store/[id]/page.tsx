"use client";

import React, { useState } from "react";
import Image from "next/image";
import DecorativeLine from "@/components/home/DecorativeLine";
import ProductCard from "@/components/store/ProductCard";
import SlidingTabs from "@/components/global/SlidingTabs";

export default function SingleProductPage() {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = [
    "/images/product/SafeEnterprise4001.webp",
    "/images/product/SafeEnterprise4002.webp",
    "/images/product/SafeEnterprise4001.webp",
    "/images/product/SafeEnterprise4002.webp",
  ];

  return (
    <main className="flex flex-col bg-white min-h-screen overflow-x-hidden pt-24 lg:pt-32">
      {/* Top Header */}
      <div className="flex justify-between items-center pb-12 px-6 lg:px-16 max-w-[1200px] mx-auto w-full relative">
        <h1 className="font-bold text-xl lg:text-2xl text-black">
          Order Marma Security Products
        </h1>
      </div>

      {/* Product Details Area */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 w-full">
        {/* Left: Images */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#F6F6F6] rounded-xl relative aspect-square lg:aspect-[4/3] flex items-center justify-center p-8">
            {/* Bestseller Badge */}
            <div className="absolute top-8 right-0 bg-gradient-to-r from-red-400 to-red-600 text-white text-xs font-bold px-5 py-1.5 rounded-l-md z-10">
              Bestseller
            </div>
            <Image
              src={productImages[activeImageIndex]}
              alt="SafeHome"
              fill
              className="object-contain p-12"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 px-1">
            {productImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`bg-[#EBEBEB] rounded-lg aspect-square w-20 flex-shrink-0 relative flex items-center justify-center cursor-pointer transition-all border-2 ${activeImageIndex === index ? "border-red-500" : "border-transparent hover:border-gray-300"
                  }`}
              >
                <Image
                  src={src}
                  alt={`Thumb ${index + 1}`}
                  fill
                  className="object-contain p-3 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col pt-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">SafeHome</h2>
          <p className="text-[#333333] mb-6 font-medium">
            AI-Powered Plug-and-Play Home Firewall with<br />Parental Controls
          </p>
          <p className="text-[#666666] text-sm leading-relaxed mb-10 max-w-md">
            Protect every internet connected device in your home wirelessly in minutes.
            No software to install. No complicated cabling.<br />
            Works with any router/Mesh WiFi.
          </p>

          <div className="flex items-center justify-between mb-10 max-w-md">
            <div className="flex items-center gap-4">
              <span className="font-bold text-sm text-black">Quantity:</span>
              <div className="flex items-center bg-[#F5F5F5] rounded-md overflow-hidden">
                <button
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-200"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  −
                </button>
                <span className="px-4 py-1.5 font-medium bg-white text-sm border-x border-gray-100">{qty}</span>
                <button
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-200"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-2xl font-bold text-black">$479.99</div>
          </div>

          <div className="flex gap-4 max-w-md">
            <button className="flex-1 py-2.5 border border-gray-200 rounded-full font-medium text-black hover:bg-gray-50 transition-colors bg-[#F9F9F9]">
              Add to Cart
            </button>
            <button className="flex-1 py-2.5 border border-red-100 bg-white shadow-[0_0_10px_rgba(255,0,0,0.05)] rounded-full font-medium text-red-500 hover:bg-red-50 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 mb-20 w-full">
        <SlidingTabs
          tabs={[
            { id: "Description", label: "Description" },
            { id: "Additional Information", label: "Additional Information" },
            { id: "Review", label: "Review" },
          ]}
          activeTabId={activeTab}
          onChange={setActiveTab}
          activeClassName="text-black font-semibold opacity-100 pb-2"
          inactiveClassName="text-gray-400 font-medium hover:text-gray-600 pb-2 transition-colors"
          lineClassName="bg-red-500 h-[2px]"
          containerClassName="relative mb-10 flex justify-center w-full"
        />

        <div className="max-w-4xl mx-auto text-[#666666] text-sm leading-relaxed space-y-6">
          <p>
            High Performance Next-Gen Firewall with Web Filtering, Protection from Phishing/Ransomware/Malicious Websites and Provides Parental Control.
          </p>
          <p>
            Marma Security protects all internet-connected devices in Home with its AI-powered CyberSecurity Platform, which is managed in the cloud. The platform enforces security policies and provides threat protection at the user&apos;s premises using the on-premise SafeHome High Performance Firewall. SafeHome is a wireless plug-and-play Firewall device fully autonomously managed from the cloud-based cybersecurity platform. It can be deployed in minutes to secure a home network. A single SafeHome security gateway can secure up to 64 internet - connected devices, provide an aggregate throughput of 4.3 Gbps, and is Wi-Fi6E ready.
          </p>
          <p>
            High Performance Next-Gen Firewall with Web Filtering, Protection from Phishing/Ransomware/Malicious Websites and Provides Parental Control.
          </p>
          <p>
            Marma Security protects all internet-connected devices in Home with its AI-powered CyberSecurity Platform, which is managed in the cloud. The platform enforces security policies and provides threat protection at the user&apos;s premises using the on-premise SafeHome High Performance Firewall. SafeHome is a wireless plug-and-play Firewall device fully autonomously managed from the cloud-based cybersecurity platform. It can be deployed in minutes to secure a home network. A single SafeHome security gateway can secure up to 64 internet - connected devices, provide an aggregate throughput of 4.3 Gbps, and is Wi-Fi6E ready.
          </p>
        </div>
      </div>

      {/* Middle Decorative Line */}
      <div className="max-w-[1200px] w-full mx-auto relative mb-16 h-10">
        <div className="hidden lg:block absolute right-0 top-0 w-[300px] pointer-events-none">
          <DecorativeLine
            viewBox="0 0 300 40"
            points="20,20 300,20"
            dots={[{ cx: 20, cy: 20 }]}
            dotRadius={6}
            strokeWidth={1}
          />
        </div>
      </div>

      {/* You may also like */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 mb-24 w-full">
        <h3 className="text-xl lg:text-2xl font-bold text-[#A3A3A3] mb-8">
          You may also like
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          <ProductCard name="SafeBiz" image="/images/product/SafeEnterprise4001.webp" href="/store/safebiz" />
          <ProductCard name="SafeHome" image="/images/product/SafeEnterprise4001.webp" href="/store/safehome" />
          <ProductCard name="Email" image="/images/product/SafeEnterprise4001.webp" href="/store/email" />
        </div>
      </div>

      {/* Footer Text */}
      <div className="pb-16 w-full text-center px-4">
        <p className="font-bold text-black lg:text-xl">
          Security Agent, Enter-400, Enter-200, Enter-100, SafeBiz, SafeHome, Email, Cloud
        </p>
      </div>
    </main>
  );
}
