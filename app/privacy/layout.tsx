const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://marmasecurity.com";

export const metadata = {
  title: "Privacy Policy | Marma Security",
  description:
    "Read Marma Security's Privacy Policy to learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Marma Security",
    description:
      "Read Marma Security's Privacy Policy to learn how we collect, use, and protect your personal information.",
    url: "/privacy",
    siteName: "Marma Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Marma Security",
    description:
      "Read Marma Security's Privacy Policy to learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
