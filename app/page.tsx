import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import Testimonial from "@/components/testimonial/Testimonial";
import Image from "next/image";
import PartnersBottomBanner from "@/components/partners/PartnersBottomBanner";
import SecurityCards from "@/components/home/SecurityCards";
import HomeSolutionsInfo from "@/components/home/HomeSolutionsInfo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner
          backgroundImage="/Banner-homepage-new.png" // Solid dark bg for testing before image is added
          heightVariant="900"
          title={<>Radically Simplified <br className="hidden md:block" /><HighlightedText text="Cybersecurity" /> for Small<br className="hidden lg:block" /> Businesses and Home</>}
          titleClassName="font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white"
          subtitle={<>Enterprise-grade cybersecurity that works in minutes. <br className="hidden sm:block" />No IT or technical expertise needed.</>}
          subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
          buttons={[
            { label: 'Order', href: '#', variant: 'primary', icon: true },
            { label: 'Store', href: '#', variant: 'outline', icon: true }
          ]}
          rightImageAlt="Marma Security Device"
          rightImage="/homepage-right-banner.png"
          rightImageClassName="lg:w-[600px] lg:h-[730px] lg:-translate-x-[-70px] translate-y-[7%] lg:translate-y-[15%] xl:translate-y-[15%] z-30 transform-gpu"
        />
      </main>
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24 bg-[#FFFFFF]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="font-title font-bold text-[36px] md:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232]">
            Your <HighlightedText text="Business and Home" /> are <br />more exposed to cybercrime<br /> than you think.
          </h2>

          {/* Decorative Red Line Graphic */}
          <div className="hidden md:flex items-center justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12">
            <Image
              src="/rightside-section-homepage.png"
              alt="Decorative Line"
              width={500}
              height={60}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>

      <PartnersBottomBanner />
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24 bg-[#FFFFFF]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="font-title font-bold text-[36px] md:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232]">
            Robust  <span className="text-[#FF0000]">cybersecurity </span> at an  <br />affordable price
          </h2>

          {/* Decorative Red Line Graphic */}
          <div className="hidden md:flex items-center justify-end w-full max-w-[500px] lg:max-w-[500px] lg:-mr-12">
            <div className="relative w-full h-[60px] flex items-center justify-end">
              {/* Fallback to CSS line if image isn't available yet */}
              <div className="w-full h-[2px] bg-[#FF0000]/30 relative flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] absolute left-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Feature Cards added here */}
      <SecurityCards />

      {/* Inverted Solutions Info Component */}
      <HomeSolutionsInfo />
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24 bg-[#FFFFFF]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="font-title font-bold text-[36px] md:text-[52px] leading-[1.2] md:leading-[62px] tracking-[-0.01em] text-[#323232]">
            Your <span className="text-[#FF0000]">Business and Home </span> are <br />more exposed to cybercrime<br /> than you think.
          </h2>

          {/* Decorative Red Line Graphic */}
          <div className="hidden md:flex items-center justify-end w-full max-w-[400px] lg:max-w-[500px] lg:-mr-12">
            <Image
              src="/rightside-section-homepage.png"
              alt="Decorative Line"
              width={500}
              height={60}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
}
