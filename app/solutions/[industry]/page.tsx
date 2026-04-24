import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HighlightedText from "@/components/global/HighlightedText";
import Button from "@/components/global/Button";
import { industriesData } from "./industryData";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const industryKey = resolvedParams?.industry?.toLowerCase() || 'healthcare';
  
  const displayIndustry = industryKey
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bAnd\b/g, 'and');

  const data = industriesData[industryKey] || industriesData.healthcare;
  const title = typeof data.hero.title === 'string' ? data.hero.title : `Cybersecurity Solutions for ${displayIndustry} | Marma Security`;
  const description = typeof data.hero.description === 'string' ? data.hero.description : `Explore Marma Security's tailored cybersecurity solutions for the ${displayIndustry} industry.`;
  const imageUrl = data.hero.imageSrc || "/images/banners/solution-banner-right1.webp";

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://marmasecurity.com";
  const absoluteImageUrl = imageUrl.startsWith("http") ? imageUrl : `${baseUrl}${imageUrl}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/solutions/${industryKey}`,
      type: "website",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${displayIndustry} Cybersecurity`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export default async function IndustrySolutionPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryKey = resolvedParams?.industry?.toLowerCase() || 'healthcare';
  const displayIndustry = industryKey
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bAnd\b/g, 'and');

  // Try to grab specific industry data, or fallback to the generic one (which currently defaults to Healthcare if missing, but we handle missing keys in the data file)
  const data = industriesData[industryKey] || industriesData.healthcare;
  console.log({ data })

  // Product mapping based on industry needs
  const productLinks: Record<string, string> = {
    healthcare: "/product?tab=enterprise&product=safeenterprise-400",
    finance: "/product?tab=enterprise&product=safeenterprise-400",
    legal: "/product?tab=enterprise&product=safeenterprise-200",
    manufacturing: "/product?tab=enterprise&product=safeenterprise-200",
    "small-and-medium-business": "/product?tab=smb&product=safebiz",
    education: "/product?tab=enterprise&product=saferemote", // SafeEnterprise 100
  };

  const ctaLink = productLinks[industryKey] || "/product?tab=smb&product=safebiz";

  return (
    <main className="flex min-h-screen flex-col bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1 flex flex-col justify-between max-w-2xl">
          <h1 className="text-4xl md:text-[26px]lg:text-5xl font-bold text-black leading-tight mb-6">
            {data.hero.title ? data.hero.title : (
              <>
                Cybersecurity Solutions <br />
                for {displayIndustry}
              </>
            )}
          </h1>
          <p className="text-gray-800 text-[15px] md:text-[17px] leading-relaxed mb-20">
            {data.hero.description}
          </p>
          <div>
            <Link
              href={ctaLink}
            >
              <Button icon variant="primary" label={data.hero.buttonText} />
            </Link>
          </div>
        </div>
        <div className="w-full h-[300px] md:flex-1 md:h-[500px] relative rounded-2xl overflow-hidden">
          <Image
            src={data.hero.imageSrc}
            alt={`${displayIndustry} Cybersecurity`}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content Sections Wrapper */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-12 flex flex-col gap-20 md:gap-32">

          {data.sections.map((section, index) => {
            // Alternate layout: Image Left on Even indexes (0, 2), Image Right on Odd indexes (1, 3)
            const isImageLeft = index % 2 === 0;
            const rowDirection = isImageLeft ? "md:flex-row" : "md:flex-row-reverse";

            return (
              <div key={index} className={`flex flex-col ${rowDirection} items-start gap-10 md:gap-20`}>
                <div className="flex-1 w-full aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src={section.imageSrc}
                    alt={"Solution Section"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h2 className="text-3xl md:text-[26px]font-bold text-black leading-tight mb-10">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}
