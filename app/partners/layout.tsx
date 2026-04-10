export const metadata = {
  title: "MSP, MSSP and ITSP Partners | Marma Security",
  description:
    "Join the Marma Security partner program. Designed for VARs, MSPs, MSSPs, and System Integrators to offer enterprise-grade cybersecurity with simplified deployment and recurring revenue.",
  alternates: {
    canonical: "https://marmasecurity.com/partners",
  },
  openGraph: {
    title: "MSP, MSSP and ITSP Partners | Marma Security",
    description:
      "Join the Marma Security partner program. Designed for VARs, MSPs, MSSPs, and System Integrators to offer enterprise-grade cybersecurity with simplified deployment and strong recurring revenue potential.",
    url: "https://marmasecurity.com/partners",
    siteName: "Marma Security",
    images: [
      {
        url: "/images/banners/banner-partners.webp",
        width: 1200,
        height: 630,
        alt: "Marma Security Partners Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSP, MSSP and ITSP Partners | Marma Security",
    description:
      "Join the Marma Security partner program to offer enterprise-grade cybersecurity with simplified deployment.",
    images: ["/images/banners/banner-partners.webp"],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
