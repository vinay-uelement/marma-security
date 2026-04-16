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
import SolutionsBanner from "@/components/solutions/SolutionsBanner";
import { fetchApi } from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function SolutionsPage() {
  let solutionData = [];

  try {
    const response = await fetchApi('api/v1/solution-highlights/active', {
      cache: 'no-store'
    });

    if (response.ok) {
      const data = await response.json();
      solutionData = data?.data || data; // handle wrapped or unwrapped response
    } else {
      console.error('Failed to fetch solutions. Status:', response.status);
    }
  } catch (error) {
    console.error('Error fetching solutions:', error);
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <div className="md:pt-0">
        <SolutionsBanner />
      </div>

      <div className="">
        <SolutionsTabs solutionData={solutionData} />
      </div>

      <div className=" pt-16">
        <SolutionsInfo />
      </div>
    </main>
  );
}
