export const metadata = {
  title: "Cybersecurity Solutions | Marma Security",
  description:
    "Complete cybersecurity solutions for enterprises, small businesses, and homes. Enterprise-grade protection that works in minutes.",
  alternates: {
    canonical: "https://marmasecurity.com/solutions",
  },
  openGraph: {
    title: "Cybersecurity Solutions | Marma Security",
    description:
      "Complete cybersecurity solutions for enterprises, small businesses, and homes. Enterprise-grade protection that works in minutes.",
    url: "https://marmasecurity.com/solutions",
    siteName: "Marma Security",
    images: [
      {
        url: "/images/banners/banner-solution.png",
        width: 1200,
        height: 630,
        alt: "Marma Security Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Solutions | Marma Security",
    description:
      "Complete cybersecurity solutions for enterprises, small businesses, and homes.",
    images: ["/images/banners/banner-solution.png"],
  },
};

import HighlightedText from "@/components/global/HighlightedText";
import SolutionsTabs from "@/components/solutions/SolutionsTabs";
import SolutionsInfo from "@/components/solutions/SolutionsInfo";
import Image from "next/image";
import Banner from "@/components/home/Banner";
import TypewriterText from "@/components/home/TypewriterText";

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
            <br className="block md:block" />{""}
            for 
                      <TypewriterText
                        phrases={[
                          " Enterprises",
                          " Small Businesses",
                          " Homes and more",
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
