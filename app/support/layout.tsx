const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://marmasecurity.com";
const absoluteImageUrl = `${baseUrl}/images/banners/product-banner.webp`;

export const metadata = {
  title: "Customer Support | Marma Security",
  description:
    "Get customer support for Marma Security products. Reach us by phone, email, or fill out our support form and we'll get right back to you.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Customer Support | Marma Security",
    description:
      "Get customer support for Marma Security products. Reach us by phone, email, or fill out our support form and we'll get right back to you.",
    url: "/support",
    siteName: "Marma Security",
    images: [
      {
        url: absoluteImageUrl,
        width: 1200,
        height: 630,
        alt: "Marma Security Customer Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support | Marma Security",
    description:
      "Get customer support for Marma Security products. Reach us by phone, email, or fill out our support form.",
    images: [absoluteImageUrl],
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
