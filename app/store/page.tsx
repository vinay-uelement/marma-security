import React from "react";
import StoreBanner from "@/components/store/StoreBanner";
import HighlightedText from "@/components/global/HighlightedText";
import DecorativeLine from "@/components/home/DecorativeLine";
import ProductCard from "@/components/store/ProductCard";

export default function StorePage() {
  const products = {
    enterprise: [
      { name: "Security Agent", image: "/images/product/SafeEnterprise4001.webp" },
      { name: "Enter-400", image: "/images/product/SafeEnterprise4001.webp" },
      { name: "Enter-100", image: "/images/product/SafeEnterprise4001.webp" },
    ],
    smb: [
      { name: "SafeBiz", image: "/images/product/SafeEnterprise4001.webp" },
      { name: "SafeHome", image: "/images/product/SafeEnterprise4001.webp" },
      { name: "Email", image: "/images/product/SafeEnterprise4001.webp" },
    ],
    home: [
      { name: "SafeBiz", image: "/images/product/SafeEnterprise4001.webp" },
      { name: "SafeHome", image: "/images/product/SafeEnterprise4001.webp" },
      { name: "Email", image: "/images/product/SafeEnterprise4001.webp" },
    ],
  };

  return (
    <main className="flex flex-col bg-white min-h-screen overflow-x-hidden">
      <div className="">
        <StoreBanner
          title={
            <>
              MSP, MSSP and ITSP{" "}
              <HighlightedText
                text="Partners."
                className="text-[#FFFFFF] font-bold"
                imageClassName="bottom-[-15px] md:bottom-[-20px] right-[5px]"
              />
            </>
          }
          subtitle="Marma offers a range of intelligent cybersecurity products designed to protect entire networks with ease. Built for both homes and businesses, our solutions deliver enterprise-grade security without the complexity of traditional tools."
          isButton={false}
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-16 pt-16 lg:pt-24 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 relative">
          <div className="z-10 bg-white pr-4">
            <h2 className="font-bold text-black text-xl lg:text-2xl mb-1">New</h2>
            <h2 className="font-bold text-black text-xl lg:text-2xl">
              Order Marma Security Products
            </h2>
          </div>

        </div>

        {/* Enterprise Solutions */}
        <section className="mb-16">
          <h3 className="text-xl lg:text-2xl font-semibold text-[#999999] mb-8">
            Enterprise Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {products.enterprise.map((product, index) => (
              <ProductCard key={index} name={product.name} image={product.image} href={`/store/${product.name.toLowerCase().replace(/ /g, '-')}`} />
            ))}
          </div>
        </section>

        {/* SMB Solutions */}
        <section className="mb-16">
          <h3 className="text-xl lg:text-2xl font-semibold text-[#999999] mb-8">
            SMB Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {products.smb.map((product, index) => (
              <ProductCard key={index} name={product.name} image={product.image} href={`/store/${product.name.toLowerCase().replace(/ /g, '-')}`} />
            ))}
          </div>
        </section>

        {/* Home Solutions */}
        <section className="mb-16">
          <h3 className="text-xl lg:text-2xl font-semibold text-[#999999] mb-8">
            Home Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {products.home.map((product, index) => (
              <ProductCard key={index} name={product.name} image={product.image} href={`/store/${product.name.toLowerCase().replace(/ /g, '-')}`} />
            ))}
          </div>
        </section>

        {/* Footer Text */}
        <div className="pt-12 pb-24 relative">
          <p className="text-center font-bold text-black lg:text-xl max-w-4xl mx-auto z-10 relative bg-white px-4">
            Security Agent, Enter-400, Enter-200, Enter-100, SafeBiz, SafeHome, Email, Cloud
          </p>
        </div>
      </div>
    </main>
  );
}


