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
        <main className="flex-grow ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
