export const metadata = {
  title: "Cybersecurity Products | Marma Security",
  description:
    "Tailored cybersecurity hardware and software solutions powered by a unified AI-driven cloud platform. Explore SafeHome, SafeBiz, SafeEnterprise, SafeGov, and SafeCloud.",
  alternates: {
    canonical: "https://marmasecurity.com/product",
  },
  openGraph: {
    title: "Cybersecurity Products | Marma Security",
    description:
      "Tailored cybersecurity hardware and software solutions powered by a unified AI-driven cloud platform. Explore SafeHome, SafeBiz, SafeEnterprise, SafeGov, and SafeCloud.",
    url: "https://marmasecurity.com/product",
    siteName: "Marma Security",
    images: [
      {
        url: "/images/banners/product-banner.webp",
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
    images: ["/images/banners/product-banner.webp"],
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
