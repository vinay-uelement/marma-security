import HighlightedText from "@/components/global/HighlightedText";
import SolutionsTabs from "@/components/solutions/SolutionsTabs";
import SolutionsInfo from "@/components/solutions/SolutionsInfo";
import Image from "next/image";
import Banner from "@/components/home/Banner";

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <Banner
        backgroundImage="/images/banners/banner-solution.png"
        heightVariant="900"
        ContinerClass="h-[93vh]"
        title={
          <>
            Complete <HighlightedText text="Cybersecurity" />
            <br className="hidden md:block" />
            for Homes, Businesses and
            <br className="hidden md:block" />
            others.
          </>
        }
        titleClassName="font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white"
        subtitle={
          <>
            Enterprise-grade cybersecurity that works in minutes.
            <br className="hidden sm:block" /> No IT or technical expertise
            needed.
          </>
        }
        subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-[#E0E0E0] max-w-[550px]"
        buttons={[
          {
            label: "Explore",
            variant: "primary",
            href: "#explore",
            icon: true,
          },
        ]}
        rightImage="/images/banners/solution-banner-right1.webp"
        rightImageAlt="Banner Image"
      />

      <SolutionsTabs />
      <div className="md:pt-25">
      <SolutionsInfo />
      </div>
    </main>
  );
}
