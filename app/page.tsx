import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import Image from "next/image";
import dynamic from "next/dynamic";
import DecorativeLine from "@/components/home/DecorativeLine";

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
    <div className="flex flex-col bg-[#FFFFFF] min-h-screen">
      <main className="flex-grow">
        <Banner
          backgroundImage="/images/banners/Banner-homepage-new.webp" // Solid dark bg for testing before image is added
          heightVariant="900"
          ContinerClass="h-[93vh]"
          title={
            <>
              Radically Simplified <br className="hidden md:block" />
              <HighlightedText text="Cybersecurity" /> for Small
              <br className="hidden lg:block" /> Businesses and Home
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
          rightImageClassName="lg:w-[72vh] lg:h-[730px] lg:-translate-x-[-70px] translate-y-[7%] lg:translate-y-[15%] xl:translate-y-[15%] z-30 transform-gpu"
          backgroundSize="cover"
          sectionClassName="py-8 lg:py-12"
        />
      </main>
      {/* Updated section with responsive top padding and overflow control */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 bg-[#FFFFFF] overflow-x-clip">
        {/* The flex container now stays flex-col until 901px */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-center mb-16 gap-8">
          {/* TEXT: Centered below 901px, left-aligned above */}
          <h2 className="w-full font-title text-[24px] md:text-[32px] min-[1121px]:text-[32px] leading-[1.2] md:leading-[48px] tracking-[-0.01em] text-[#323232] text-center min-[901px]:text-left">
            Your{" "}
            <HighlightedText
              text="Business and Home"
              className="text-[#323232] font-bold"
              imageClassName="bottom-[-5px] md:bottom-[-15px] right-[-40px] w-[100px] md:w-[140px]"
            />{" "}
            are more <br className="hidden min-[901px]:block" /> exposed to
            cybercrime than you think.
          </h2>

          {/* IMAGE: Fully right-aligned correctly across all sizes with clamped margins */}
          <div className="relative flex items-center w-full min-[901px]:max-w-[400px] lg:max-w-[500px]">
            <div className="absolute right-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px]">
              <DecorativeLine
                viewBox="0 0 700 120"
                points="100,30 280,90 1100,90"
                dots={[{ cx: 100, cy: 30, rippleCount: 3, rippleBaseDelay: 0 }]}
                className="w-full h-auto"
              />

              <DecorativeLine
                viewBox="0 0 700 80"
                points="0,40 210,40"
                dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
                className="w-full h-auto scale-x-[-1]"
              />

              {/* <DecorativeLine
                viewBox="0 0 1560 500"
                points="600,280 960,280 1020,420 1560,420"
                dots={[{ cx: 600, cy: 280, rippleCount: 3 }]}
                className="w-full h-auto"
              /> */}

              {/* <DecorativeLine
                viewBox="0 0 800 80"
                points="0,40 310,40"
                dots={[{ cx: 310, cy: 40, rippleCount: 3 }]}
                className="w-full h-auto"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Black device + Cybercrime stats section */}
      <CybercrimeStats />

      {/* Security Feature Cards added here */}
      <SecurityCards />

      {/* Inverted Solutions Info Component */}
      <div className="w-full max-w-[1440px] mx-auto pt-14 bg-[#fff]">
        {/* Red Decorative Line container on Home page only */}
        <div className="relative mb-12 w-screen left-1/2 -translate-x-1/2">
          <div className="w-[500px] md:w-[600px] lg:w-[1000px]">
            <DecorativeLine
              viewBox="0 0 1500 80"
              points="0,40 310,40"
              dots={[{ cx: 310, cy: 40, rippleCount: 3 }]}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="pb-12 bg-[#fff]">
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
