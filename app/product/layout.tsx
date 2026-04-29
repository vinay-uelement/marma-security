const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.marmasec.com";
const absoluteImageUrl = `${baseUrl}/images/banners/product-banner.webp`;

export const metadata = {
  title: "Cybersecurity Products | Marma Security",
  description:
    "Tailored cybersecurity hardware and software solutions powered by a unified AI-driven cloud platform. Explore SafeHome, SafeBiz, SafeEnterprise, SafeGov, and SafeCloud.",
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    title: "Cybersecurity Products | Marma Security",
    description:
      "Tailored cybersecurity hardware and software solutions powered by a unified AI-driven cloud platform. Explore SafeHome, SafeBiz, SafeEnterprise, SafeGov, and SafeCloud.",
    url: "/product",
    siteName: "Marma Security",
    images: [
      {
        url: absoluteImageUrl,
        width: 1200,
        height: 630,
        alt: "Marma Security Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Products | Marma Security",
    description:
      "Explore cybersecurity solutions powered by Marma Security: SafeHome, SafeBiz, SafeEnterprise, SafeGov, and SafeCloud.",
    images: [absoluteImageUrl],
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
