"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SaaSHero from "@/components/home/SaaSHero";
import TrustedByStrip from "@/components/home/TrustedByStrip";
import FeatureCards from "@/components/home/FeatureCards";
import BookDemoModal from "@/components/home/BookDemoModal";
import DashboardShowcase from "@/components/home/DashboardShowcase";

// Dynamic imports for below-the-fold sections
const Challengestab = dynamic(() => import("@/components/home/Challengestab"));
const HowWeProtect = dynamic(() => import("@/components/home/HowWeProtect"));
const AdvancedArchitecture = dynamic(
  () => import("@/components/technology/AdvancedArchitecture"),
);

export default function Home() {
<<<<<<< HEAD
=======
  const phrases = ["Enterprises", "Small Businesses", "Homes"];

  const images = [
    "/images/product/SafeEnterprise4001.webp",
    "/images/banners/homepage-right-banner1.webp",
    "/images/banners/solution-banner-right1.webp",
  ];

  const rightImageClasses = [
    "w-[30vh] md:w-[35vh] lg:w-[60svh] right-10! lg:right-10!",
    "w-[30vh] md:w-[35vh] lg:w-[60svh]",
    "w-[30vh] md:w-[35vh] lg:w-[60svh]",
  ];

  const learnMoreLinks = [
    "/product?tab=enterprise&product=safeenterprise-400",
    "/product?tab=smb&product=safebiz",
    "/product?tab=home&product=safehome",
  ];

  const backgrounds = [
    "/images/banners/hero400.webp",
    "/images/home/Quick & Effortless Setup.webp",
    "/images/home/heroHome.webp",
  ];

  const [index, setIndex] = useState(0);
>>>>>>> e94fdd35b0a7c10324850dcac16dd6538608def4
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#FFFFFF] min-h-screen overflow-x-clip">
      {/* ── SECTION 1: SaaS Hero ───────────────────────────────────────────── */}
      <SaaSHero onBookDemo={() => setIsDemoModalOpen(true)} />

      {/* ── SECTION 2: Trusted By Strip ────────────────────────────────────── */}
      <TrustedByStrip />

      {/* ── SECTION 3: Feature Cards Grid ──────────────────────────────────── */}
      <FeatureCards />

      {/* ── SECTION 4: Dashboard Showcase ──────────────────────────────────── */}
      <DashboardShowcase />

      {/* ── SECTION 5: Challenges Tab ──────────────────────────────────────── */}
      <Challengestab />

      {/* ── SECTION 6: How We Protect ──────────────────────────────────────── */}
      <HowWeProtect />

      {/* ── SECTION 7: Advanced Architecture ───────────────────────────────── */}
      <AdvancedArchitecture />

      {/* Book a Demo Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        bookDemoTitle="Start your free trial"
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
