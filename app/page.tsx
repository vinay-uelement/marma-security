import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import below-the-fold components to reduce initial JavaScript payload and main-thread execution time
const CybercrimeStats = dynamic(() => import("@/components/home/CybercrimeStats"));
const SecurityCards = dynamic(() => import("@/components/home/SecurityCards"));
const HomeSolutionsInfo = dynamic(() => import("@/components/home/HomeSolutionsInfo"));
const Challengestab = dynamic(() => import("@/components/home/Challengestab"));
const ProtectionBanner = dynamic(() => import("@/components/home/ProtectionBanner"));
const HowWeProtect = dynamic(() => import("@/components/home/HowWeProtect"));
const Testimonial = dynamic(() => import("@/components/testimonial/Testimonial"));

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] min-h-screen">
      <main className="flex-grow">
        <Banner
          backgroundImage="/Banner-homepage-new.png" // Solid dark bg for testing before image is added
          heightVariant="900"
          ContinerClass="h-[93vh]"
          title={<>Radically Simplified <br className="hidden md:block" /><HighlightedText text="Cybersecurity" /> for Small<br className="hidden lg:block" /> Businesses and Home</>}
          titleClassName="font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white"
          subtitle={<>Enterprise-grade cybersecurity that works in minutes. <br className="hidden sm:block" />No IT or technical expertise needed.</>}
          subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
          buttons={[
            { label: 'Order', href: '#', variant: 'primary', icon: true },
            { label: 'Store', href: '#', variant: 'outline', icon: true }
          ]}
          rightImageAlt="Marma Security Device"
          rightImage="/homepage-right-banner1.png"
          rightImageClassName="lg:w-[72vh] lg:h-[730px] lg:-translate-x-[-70px] translate-y-[7%] lg:translate-y-[15%] xl:translate-y-[15%] z-30 transform-gpu"
        />
      </main>
      {/* Updated section with responsive top padding and overflow control */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 bg-[#FFFFFF] overflow-x-clip">

        {/* The flex container now stays flex-col until 901px */}
        <div className="flex flex-col min-[901px]:flex-row justify-between items-center mb-16 gap-8">

          {/* TEXT: Centered below 901px, left-aligned above */}
          <h2 className="w-full font-title text-[36px] md:text-[42px] min-[1121px]:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232] text-center min-[901px]:text-left">
            Your <HighlightedText text="Business and Home" className="text-[#323232] font-bold" imageClassName="bottom-[-5px] md:bottom-[-15px] right-[-40px] w-[100px] md:w-[140px]" /> are
            <br className="hidden min-[901px]:block" /> more exposed to cybercrime
            <br className="hidden min-[901px]:block" /> than you think.
          </h2>

          {/* IMAGE: Fully right-aligned correctly across all sizes with clamped margins */}
          <div className="flex items-center justify-end w-full max-w-full min-[901px]:max-w-[400px] lg:max-w-[500px]">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] -mr-6 md:-mr-12 lg:-mr-16">

              <Image
                src="/rightside-section-homepage-new.png"
                alt="Decorative Line"
                width={500}
                height={60}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>
      </section>




      {/* Black device + Cybercrime stats section */}
      <CybercrimeStats />

      {/* Security Feature Cards added here */}
      <SecurityCards />

      {/* Inverted Solutions Info Component */}
      <div className="w-full max-w-[1440px] mx-auto pt-14 bg-[#fff]" >
        {/* Red Decorative Line container on Home page only */}
        <div className="flex w-full mb-12 relative h-[20px] md:h-[30px] w-[350px] md:w-[600px] lg:w-[800px]">
          <Image
            src="/red-decorative-line-solution-info.png"
            alt="Red Decorative Line"
            fill
            sizes="(max-width: 768px) 350px, (max-width: 1024px) 600px, 800px"
            className="object-contain object-left"
          />
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
