import HighlightedText from "@/components/global/HighlightedText";
import Image from "next/image";
import dynamic from "next/dynamic";
import DecorativeLine from "@/components/home/DecorativeLine";
import Banner from "@/components/home/Banner";
import TypewriterText from "@/components/home/TypewriterText";

// Dynamically import below-the-fold components to reduce initial JavaScript payload and main-thread execution time
const CybercrimeStats = dynamic(
  () => import("@/components/home/CybercrimeStats"),
);
const SecurityCards = dynamic(() => import("@/components/home/SecurityCards"));
const HomeSolutionsInfo = dynamic(
  () => import("@/components/home/HomeSolutionsInfo"),
);
const Challengestab = dynamic(() => import("@/components/home/Challengestab"));
const ProtectionBanner = dynamic(
  () => import("@/components/home/ProtectionBanner"),
);
const HowWeProtect = dynamic(() => import("@/components/home/HowWeProtect"));
const Testimonial = dynamic(
  () => import("@/components/testimonial/Testimonial"),
);

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] min-h-screen overflow-x-clip">
      <Banner
        backgroundImage="/images/banners/homepage-banner.webp" // Solid dark bg for testing before image is added
        title={
          <>
            Radically Simplified  <br className="hidden md:block" />
            <HighlightedText text="Cybersecurity" />{" "}
            for {""}
            <br className="block md:hidden" />
            <TypewriterText
              phrases={[
                "Enterprises",
                "Small Businesses",
                "Homes",
              ]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseDuration={2000}
            />
          </>
        }
        titleClassName="font-banner font-normal text-[28px] md:text-[36px] leading-[1.2] md:leading-[50px] tracking-[-0.01em] text-white"
        subtitle={
          <>
            Enterprise-grade cybersecurity that works in minutes.{" "}
            <br className="hidden sm:block" />
            No IT or technical expertise needed.
          </>
        }
        subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
        buttons={[
          { label: "Order", href: "#", variant: "primary", icon: true },
          { label: "Store", href: "#", variant: "secondary", icon: true },
        ]}
        rightImageAlt="Marma Security Device"
        rightImage="/images/banners/homepage-right-banner1.webp"
      />
      {/* Updated section with responsive top padding and overflow control */}
      <section className="w-full max-w-[1440px] mx-auto px-6 max-sm:pt-8 lg:px-12 pt-0 md:pt-24 bg-[#FFFFFF] relative">
        {/* The flex container now stays flex-col until 901px */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-start min-[901px]:items-center mb-2 gap-8 relative z-10 w-full md:mb-16">
          {/* TEXT */}
          <h2 className="fl2 w-full min-[901px]:w-[55%] home-exposed-heading text-left">
            Your{" "}
            <HighlightedText
              text="enterprise, business and home"
              className="text-[#323232] !font-bold"
              imageClassName="bottom-[-12px] md:bottom-[-10px] right-[0px] md:right-[25px] w-[80px] md:w-[100px] lg:w-[140px]"
            />{" "}
            are more <br /> exposed to cybercrime than you think.
          </h2>

          {/* IMAGE: Fully right-aligned correctly across all sizes with clamped margins */}
          <div className="flex flex-col w-[60%] sm:w-[50%] min-[901px]:w-[45%] self-end min-[901px]:self-auto translate-x-8 sm:translate-x-12 min-[901px]:translate-x-0 mt-4 min-[901px]:mt-0 pointer-events-none z-0">
            <DecorativeLine
              viewBox="0 0 500 120"
              points="80,30 130,90 3000,90"
              dots={[{ cx: 80, cy: 30, rippleCount: 3, rippleBaseDelay: 0.1 }]}
              className="w-full h-auto"
              strokeWidth={1}
              dotRadius={7}
              animationDuration={3}
            />
            <DecorativeLine
              viewBox="0 0 500 80"
              points="-3000,40 200,40"
              dots={[{ cx: 200, cy: 40, rippleCount: 4 }]}
              className="w-full h-auto scale-x-[-1] -mt-3 md:-mt-8"
              strokeWidth={1}
              dotRadius={6}
              animationDuration={2.5}
            />
          </div>
        </div>
      </section>

      {/* Black device + Cybercrime stats section */}
      <CybercrimeStats />

      {/* Security Feature Cards added here */}
      <SecurityCards />

      {/* Inverted Solutions Info Component */}
      <div className="w-full max-w-[1440px] mx-auto pt-8 md:pt-14 bg-[#fff]">
        {/* Red Decorative Line container on Home page only */}
        <div className="relative mb-2 md:mb-12 w-screen left-1/2 -translate-x-1/2">
          <div className="w-[500px] md:w-[600px] lg:w-[1000px]">
            <DecorativeLine
              viewBox="0 0 1500 80"
              points="0,40 310,40"
              dots={[{ cx: 310, cy: 40, rippleCount: 3 }]}
              className="w-full h-auto"
              animationDuration={2.4}
            />
          </div>
        </div>
      </div>
      <div className="pb-18 bg-[#fff]">
        <HomeSolutionsInfo />
      </div>

      <Challengestab />

      {/* Phishing Protection Banner added below Challenges tab */}
      <ProtectionBanner />

      {/* How We Protect You section */}
      <HowWeProtect />

      <Testimonial />
    </div>
  );
}
