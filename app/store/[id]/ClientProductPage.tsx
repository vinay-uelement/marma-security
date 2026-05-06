"use client";

import React, { useState } from "react";
import Image from "next/image";
import DecorativeLine from "@/components/home/DecorativeLine";
import ProductCard from "@/components/store/ProductCard";
import SlidingTabs from "@/components/global/SlidingTabs";
import { useCart } from "@/context/CartContext";

export default function ClientProductPage({ product, allProducts, productId }: { product?: any, allProducts?: any[], productId: string }) {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addItem } = useCart();

  const fallbackName = "SafeHome";
  const fallbackDesc = "AI-Powered Plug-and-Play Home Firewall with Parental Controls";
  const defaultImage = "/images/product/SafeEnterprise4001.webp";

  const productName = product?.name || product?.title || fallbackName;
  const productDesc = product?.description || fallbackDesc;
  const productPrice = product?.price || 479.99;
  
  // Use product images if available, otherwise fallbacks
  const productImages = product?.images?.length ? product.images : [
    product?.image || defaultImage,
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
            {productImages.map((src: string, index: number) => (
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
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">{productName}</h2>
          {/* A short descriptor for subtitle, extracting part of description if no explicit short desc */}
          <p className="text-[#333333] mb-6 font-medium">
            {product?.subTitle || "Intelligent Cybersecurity Solution"}
          </p>
          <p className="text-[#666666] text-sm leading-relaxed mb-10 max-w-md">
            {productDesc}
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
            <div className="text-2xl font-bold text-black">${productPrice}</div>
          </div>

          <div className="flex gap-4 max-w-md">
            <button
              className="flex-1 py-2.5 border border-gray-200 rounded-full font-medium text-black hover:bg-gray-50 transition-colors bg-[#F9F9F9]"
              onClick={() =>
                addItem(
                  {
                    id: product?.id || productId,
                    name: productName,
                    image: productImages[0],
                    price: productPrice,
                  },
                  qty
                )
              }
            >
              Add to Cart
            </button>
            <button
              className="flex-1 py-2.5 border border-red-100 bg-white shadow-[0_0_10px_rgba(255,0,0,0.05)] rounded-full font-medium text-red-500 hover:bg-red-50 transition-colors"
              onClick={() =>
                addItem(
                  {
                    id: product?.id || productId,
                    name: productName,
                    image: productImages[0],
                    price: productPrice,
                  },
                  qty
                )
              }
            >
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
      <div className="flex flex-col w-[50%] sm:w-[40%] min-[901px]:w-[40%] ml-auto pointer-events-none z-0">
        <DecorativeLine
          viewBox="0 0 500 80"
          points="-3000,40 200,40"
          dots={[{ cx: 200, cy: 40, rippleCount: 3 }]}
          className="w-full h-auto scale-x-[-1]"
          dotRadius={6}
          animationDuration={2.5}
        />
      </div>

      {/* You may also like */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 mb-24 w-full">
        <h3 className="text-xl lg:text-2xl font-bold text-[#A3A3A3] mb-8">
          You may also like
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {(allProducts?.length ? allProducts.filter((p: any) => p.id !== product?.id).slice(0, 3) : []).map((p: any, idx: number) => {
            const slug = (p.name || p.title || p.id || "product").toLowerCase().replace(/ /g, '-');
            // Reusing the same optimization: encode product data to avoid refetching
            const data = { id: p.id, name: p.name || p.title, description: p.description, subTitle: p.subTitle, price: p.price, image: p.image, images: p.images };
            const encoded = encodeURIComponent(Buffer.from(JSON.stringify(data)).toString('base64'));
            return (
              <ProductCard 
                key={p.id || idx} 
                name={p.name || p.title || "Product"} 
                image={p.image || defaultImage} 
                href={`/store/${slug}?data=${encoded}`} 
              />
            );
          })}
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
