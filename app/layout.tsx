import type { Metadata } from "next";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marma Security",
  description: "Securing your digital assets with advanced solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* Main content pushed down to account for the fixed header height */}
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
