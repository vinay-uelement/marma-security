export const metadata = {
  title: "Contact Us | Marma Security",
  description:
    "We are here to help you secure what matters most. Reach out to Marma Security for product details, deployment guidance, and support.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Marma Security",
    description:
      "Reach out to Marma Security for product details, deployment guidance, and support. We are here to help you secure what matters most.",
    url: "/contact-us",
    siteName: "Marma Security",
    images: [
      {
        url: "/images/banners/banner-contact-new1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Marma Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Marma Security",
    description:
      "Reach out to Marma Security for product details, deployment guidance, and support.",
    images: ["/images/banners/banner-contact-new1.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
