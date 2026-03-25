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
              Enterprise-Grade{" "}
              <HighlightedText
                text="Cybersecurity"
                imageClassName="bottom-[-18px] md:bottom-[-20px]"
              />
              <br className="hidden lg:block" /> for Every Network
            </>
          }
          titleClassName="font-banner font-normal text-[28px] md:text-[36px] leading-[1.2] md:leading-[50px] tracking-[-0.01em] text-white"
          subtitle={
            <>
              Marma Security serves three distinct markets
              <br className="hidden lg:block" />
              with tailored product lines,
              <br className="hidden lg:block" />
              all powered by our unified AI-driven cloud platform.
              <br className="hidden lg:block" />
              Choose the protection that fits your scale.
            </>
          }
          subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
          rightContent={
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-4 items-center justify-center lg:justify-end w-full h-full z-30 py-8 lg:py-0">
              {/* SafeHome Card */}
              <Link
                href="#safehome"
                className="group relative w-full max-w-[260px] lg:max-w-[280px] rounded-[20px] transition-transform hover:-translate-y-2 duration-300 flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Arrow */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 12L12 2M12 2H4M12 2V10"
                      stroke="#FF0000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Product Image — overlaps label below */}
                <div className="relative z-10 flex items-end justify-center px-8 pt-6 h-[260px] lg:h-[300px] mb-[-20px]">
                  <Image
                    src="/images/banners/solution-banner-right1.webp"
                    alt="SafeHome Product"
                    width={170}
                    height={210}
                    className="object-contain w-[170px] lg:w-[190px] h-auto drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Label — taller to show overlap */}
                <div
                  className="pt-[30px] pb-6 px-6 text-center border-t border-white/10 rounded-b-[20px]"
                  style={{ background: "rgba(237,237,237,0.21)" }}
                >
                  <p className="text-white font-title font-bold text-[20px] lg:text-[22px] leading-none">
                    SafeHome
                  </p>
                </div>
              </Link>

              {/* SafeBiz Card */}
              <Link
                href="#safebiz"
                className="group relative w-full max-w-[260px] lg:max-w-[280px] rounded-[20px] transition-transform hover:-translate-y-2 duration-300 flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Arrow */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 12L12 2M12 2H4M12 2V10"
                      stroke="#FF0000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Product Image — overlaps label below */}
                <div className="relative z-10 flex items-end justify-center px-8 pt-6 h-[260px] lg:h-[300px] mb-[-20px]">
                  <Image
                    src="/images/banners/homepage-right-banner1.webp"
                    alt="SafeBiz Product"
                    width={170}
                    height={210}
                    className="object-contain w-[170px] lg:w-[190px] h-auto drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Label — taller to show overlap */}
                <div
                  className="pt-[30px] pb-6 px-6 text-center border-t border-white/10 rounded-b-[20px]"
                  style={{ background: "rgba(237,237,237,0.21)" }}
                >
                  <p className="text-white font-title font-bold text-[20px] lg:text-[22px] leading-none">
                    SafeBiz
                  </p>
                </div>
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
            dotRadius={12}
            animationDuration={2.5}
          />
          <DecorativeLine
            viewBox="0 0 1260 500"
            points="20,150 500,150 600,270 3000,270"
            //   points="20,150 200,150 280,270 3000,270"
            dots={[{ cx: 0, cy: 150, rippleCount: 4 }]}
            className="w-full h-auto -mt-20"
            strokeWidth={3}
            dotRadius={22}
            animationDuration={2.5}
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
                "SafeHome Firewall is an AI-powered, plug-and-play security gateway that protects every internet-connected device wirelessly in minutes.",
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
              title: "SMB SECURITY",
              description:
                "SafeBiz Firewall is specifically designed for SMBs that require enterprise-grade security without a dedicated IT security team. It delivers comprehensive protection against phishing, ransomware, Advanced Persistent Threats (APTs), social engineering, and other cyber threats.",
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
                title: "ENDPOINT PROTECTION",
                description:
                  "Windows Agent Software: Firewall integration, Anti-Virus, DNS Security, URL Filtering, AI/DLP.",
                image: "/images/features/securehome-safehome.webp", // Asset not provided yet
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
