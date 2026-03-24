"use client";
import Image from "next/image";
import Link from "next/link";
import ProductShowcase from "@/components/product/ProductShowcase";
import Banner from "@/components/global/Banner";
import HighlightedText from "@/components/global/HighlightedText";
import DecorativeLine from "@/components/home/DecorativeLine";

export default function ProductPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <div className="relative">
        {/* Hero Banner Section */}
        <Banner
          backgroundImage="/images/banners/product-banner.webp"
          heightVariant="900"
          ContinerClass="h-auto lg:h-[100vh]"
          sectionClassName="py-16 lg:py-24"
          title={
            <>
              Security{" "}
              <HighlightedText
                text="Products"
                imageClassName="bottom-[-18px] md:bottom-[-20px]"
              />
              <br className="hidden lg:block" /> for Every Network
            </>
          }
          titleClassName="font-banner font-normal text-[32px] md:text-[45px] lg:text-[60px] leading-[1.2] tracking-[-0.01em] text-white"
          subtitle={
            <>
              Marma offers a range of intelligent cybersecurity
              <br className="hidden lg:block" />
              products designed to protect entire networks with ease.
              <br className="hidden lg:block" />
              Built for both homes and businesses, our solutions
              <br className="hidden lg:block" />
              deliver enterprise-grade security without the complexity
              <br className="hidden lg:block" />
              of traditional tools.
            </>
          }
          subtitleClassName="font-body font-light text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6] md:leading-[35px] text-[#E0E0E0] max-w-[650px] mt-6"
          rightContent={
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-3 items-center justify-center lg:justify-end w-full h-full lg:translate-x-[-20px] z-30 py-8 lg:py-0">
              {/* SafeHome Card */}
              <Link
                href="#safehome"
                className="group relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] transition-transform hover:-translate-y-2 duration-300"
              >
                <Image
                  src="/images/banners/right-side-product-banner1.webp"
                  alt="SafeHome Product"
                  width={340}
                  height={420}
                  className="object-contain w-full h-auto drop-shadow-2xl"
                  priority
                />
              </Link>

              {/* SafeBiz Card */}
              <Link
                href="#safebiz"
                className="group relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] transition-transform hover:-translate-y-2 duration-300"
              >
                <Image
                  src="/images/banners/right-side-product-banner2.webp"
                  alt="SafeBiz Product"
                  width={340}
                  height={420}
                  className="object-contain w-full h-auto drop-shadow-2xl"
                  priority
                />
              </Link>
            </div>
          }
        />

        {/* Decorative */}
        <div className="absolute bottom-0 right-0 w-[320px] lg:w-[450px] flex flex-col z-20 pointer-events-none">
          <DecorativeLine
            viewBox="0 0 700 80"
            points="-3000,40 210,40"
            dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
          />
          <DecorativeLine
            viewBox="0 0 1260 500"
            points="20,150 500,150 600,270 3000,270"
            //   points="20,150 200,150 280,270 3000,270"
            dots={[{ cx: 0, cy: 150, rippleCount: 3 }]}
            className="w-full h-auto -mt-20"
            strokeWidth={3}
            dotRadius={22}
          />
        </div>
      </div>

      {/* Product Showcases Content Area */}
      <div className="flex-grow max-w-[1440px] w-full mx-auto px-6 lg:px-12">
        <div className="pb-20 max-sm:pb-2">
          {/* SafeHome Product Showcase */}
          <ProductShowcase
            productName="SafeHome"
            mainFeature={{
              title: "CYBERSECURITY PROTECTION",
              description:
                "SafeBiz Security Gateway protects all internet-connected devices on your network from phishing, ransomware, malware, IoT/Network attacks, and the latest cyber threats.",
              image: "/images/banners/solution-banner-right1.webp",
            }}
            subFeatures={[
              {
                title: "DATA PROTECTION",
                description:
                  "SafeHome protects all connected devices on your network from cyberattacks targeting your financial and personal data, safeguarding your privacy and protecting your family on the internet.",
                image: "/images/features/data-protect-safehome.webp", // Asset not provided yet
              },
              {
                title: "SECURE SMART HOME",
                description:
                  "SafeHome protects all smart devices in your smart home connected to your wifi network such as cameras, digital doorlock, appliances, your car and protects these sensitive devices from cyber attacks.",
                image: "/images/features/securehome-safehome.webp", // Asset not provided yet
              },
            ]}
          />

          {/* SafeBiz Product Showcase */}
          <ProductShowcase
            productName="SafeBiz"
            mainFeature={{
              title: "ENTERPRISE SECURITY",
              description:
                "SafeBiz provides robust protection for enterprise networks, shielding sensitive business data and infrastructure from advanced persisting threats and unauthorized access.",
              image: "/images/banners/homepage-right-banner1.webp",
            }}
            subFeatures={[
              {
                title: "CLOUD PROTECTION",
                description:
                  "Ensure your cloud workloads and remote environments remain inaccessible to attackers with real-time continuous monitoring and automated threat mitigation.",
                image: "/images/features/customer-safebiz.webp", // Asset not provided yet
              },
              {
                title: "ZERO TRUST ARCHITECTURE",
                description:
                  "Implement strict access controls and verify every request regardless of origin, protecting your endpoints with industry-leading zero trust frameworks.",
                image: "/images/features/securehome-safehome.webp", // Asset not provided yet
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
