"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/product/ProductShowcase";
import Banner from "@/components/global/Banner";
import HighlightedText from "@/components/global/HighlightedText";
import DecorativeLine from "@/components/home/DecorativeLine";

// ── Data ──────────────────────────────────────────────────────────────────────
const heroProducts = [
  {
    id: "safehome",
    href: "#safehome",
    label: "SafeHome",
    image: "/images/banners/solution-banner-right1.webp",
    alt: "SafeHome Product",
  },
  {
    id: "safebiz",
    href: "#safebiz",
    label: "SafeBiz",
    image: "/images/banners/homepage-right-banner1.webp",
    alt: "SafeBiz Product",
  },
  {
    id: "safeenterprise",
    href: "#safeenterprise",
    label: "SafeEnterprise",
    image: "/images/banners/solution-banner-right1.webp",
    alt: "SafeEnterprise Product",
  },
  {
    id: "safegov",
    href: "#safegov",
    label: "SafeGov",
    image: "/images/banners/homepage-right-banner1.webp",
    alt: "SafeGov Product",
  },
  {
    id: "safecloud",
    href: "#safecloud",
    label: "SafeCloud",
    image: "/images/banners/solution-banner-right1.webp",
    alt: "SafeCloud Product",
  },
];

// ── Card Style Per Offset From Center ─────────────────────────────────────────
function getCardProps(offset: number) {
  const abs = Math.abs(offset);
  const dir = offset <= 0 ? -1 : 1;

  switch (abs) {
    case 0:
      return { x: 0,         scale: 1,    opacity: 1,    zIndex: 30 };
    case 1:
      return { x: dir * 250, scale: 0.76, opacity: 0.72, zIndex: 20 }; 
    default:
      return { x: dir * 490, scale: 0.58, opacity: 0,    zIndex: 0  }; 
  }
}

// ── Constants ─────────────────────────────────────────────────────────────────
const CARD_WIDTH = 260;
const CARD_HEIGHT = 300;

// ── HeroCarousel ──────────────────────────────────────────────────────────────
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroProducts.length;

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 2800);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <div
      className="relative flex items-center justify-center w-full h-full min-h-[460px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none" />

      {heroProducts.map((product, i) => {
        let offset = i - current;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        const { x, scale, opacity, zIndex } = getCardProps(offset);
        const isCenter = offset === 0;
        const isSide = Math.abs(offset) === 1;

        // ── Card inner content (shared) ──────────────────────────────────
        const cardContent = (
          <>
            {/* Arrow — center card only */}
            {isCenter && (
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-transparent group-hover:bg-white flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 12L12 2M12 2H4M12 2V10"
                    stroke="#FF0000"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* Product Image */}
            <div
              className="relative z-10 flex items-end justify-center px-6 pt-6 mb-[-20px]"
              style={{ height: CARD_HEIGHT }}
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={160}
                height={200}
                className="object-contain h-auto drop-shadow-2xl"
                priority={isCenter}
              />
            </div>

            {/* Label */}
            <div
              className="pt-[30px] pb-5 px-6 text-center border-t border-white/10 rounded-b-[20px]"
              style={{ background: "rgba(237,237,237,0.21)" }}
            >
              <p className="text-white font-title font-bold text-[18px] leading-none tracking-wide">
                {product.label}
              </p>
            </div>
          </>
        );

        return (
          <motion.div
            key={product.id}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: -(CARD_WIDTH / 2),
              marginTop: -(CARD_HEIGHT / 2) - 30,
              zIndex,
              cursor: isSide ? "pointer" : "default",
            }}
            animate={{ x, scale, opacity }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={() => isSide && setCurrent(i)}
          >
            {/* ── Pulsing Glow ─────────────────────────────────────────── */}
            <motion.div
              animate={
                isCenter
                  ? {
                      opacity: [0.5, 0.85, 0.5],
                      scaleX: [0.75, 1, 0.75],
                      scaleY: [1, 1.15, 1],
                    }
                  : { opacity: 0, scaleX: 0.5 }
              }
              transition={
                isCenter
                  ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.35, ease: "easeOut" }
              }
              style={{
                position: "absolute",
                bottom: -22,
                left: "12%",
                width: "76%",
                height: 32,
                background:
                  "radial-gradient(ellipse 100% 100%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 55%, transparent 75%)",
                filter: "blur(10px)",
                zIndex: -1,
                borderRadius: "50%",
              }}
            />

            {/* ── Card ─────────────────────────────────────────────────── */}
            {isCenter ? (
              // Active card — full card is clickable, group enables arrow hover
              <Link
                href={product.href}
                className="group relative flex flex-col"
                style={{
                  width: CARD_WIDTH,
                  background: "rgba(255,255,255,0.14)",
                  backdropFilter: "blur(28px) saturate(200%)",
                  WebkitBackdropFilter: "blur(28px) saturate(200%)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  borderRadius: 20,
                  boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.55),
                    inset 0 -1px 0 rgba(255,255,255,0.08),
                    0 20px 60px rgba(0,0,0,0.45)
                  `,
                }}
              >
                {cardContent}
              </Link>
            ) : (
              // Side cards — not clickable as a link, just setCurrent on click
              <div
                style={{
                  width: CARD_WIDTH,
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                {cardContent}
              </div>
            )}
          </motion.div>
        );
      })}

      {/* ── Dot Indicators ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {heroProducts.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              background: i === current ? "#ffffff" : "rgba(255,255,255,0.35)",
              width: i === current ? 24 : 6,
              height: 6,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProductPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <div className="relative">
        <Banner
          backgroundImage="/images/banners/product-banner.webp"
          heightVariant="900"
          ContinerClass="h-auto lg:h-[100vh]"
          sectionClassName="py-16 lg:py-24"
          title={
            <>
              Enterprise-Grade{" "}
              <HighlightedText
                text="Cybersecurity"
                imageClassName="bottom-[-18px] md:bottom-[-20px]"
              />
              <br className="hidden lg:block" /> for Every Network
            </>
          }
          titleClassName="font-banner font-normal text-[28px] md:text-[36px] leading-[1.2] md:leading-[50px] tracking-[-0.01em] text-white"
          subtitle={
            <>
              Marma Security serves three distinct markets
              <br className="hidden lg:block" />
              with tailored product lines,
              <br className="hidden lg:block" />
              all powered by our unified AI-driven cloud platform.
              <br className="hidden lg:block" />
              Choose the protection that fits your scale.
            </>
          }
          subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-white max-w-[550px]"
          rightContent={<HeroCarousel />}
        />

        {/* Decorative */}
        <div className="absolute bottom-6 right-0 w-[320px] lg:w-[450px] flex flex-col justify-end z-20 pointer-events-none">
          <DecorativeLine
            viewBox="0 0 700 80"
            points="-3000,40 210,40"
            dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
            dotRadius={12}
            animationDuration={2.5}
          />
          <DecorativeLine
            viewBox="0 120 1260 160"
            points="20,150 500,150 600,270 3000,270"
            dots={[{ cx: 0, cy: 150, rippleCount: 4 }]}
            className="w-full h-auto -mt-4 md:-mt-10"
            strokeWidth={3}
            dotRadius={22}
            animationDuration={2.5}
          />
        </div>
      </div>

      {/* Product Showcases */}
      <div className="flex-grow max-w-[1440px] w-full mx-auto px-6 lg:px-12">
        <div className="pb-20 max-sm:pb-2">
          <ProductShowcase
            productName="SafeHome"
            mainFeature={{
              title: "CYBERSECURITY PROTECTION",
              description:
                "SafeHome Firewall is an AI-powered, plug-and-play security gateway that protects every internet-connected device wirelessly in minutes.",
              image: "/images/banners/solution-banner-right1.webp",
            }}
            subFeatures={[
              {
                title: "DATA PROTECTION",
                description:
                  "SafeHome protects all connected devices on your network from cyberattacks targeting your financial and personal data, safeguarding your privacy and protecting your family on the internet.",
                image: "/images/features/data-protect-safehome.webp",
              },
              {
                title: "SECURE SMART HOME",
                description:
                  "SafeHome protects all smart devices in your smart home connected to your wifi network such as cameras, digital doorlock, appliances.",
                image: "/images/features/securehome-safehome.webp",
              },
            ]}
          />
          <ProductShowcase
            productName="SafeBiz"
            mainFeature={{
              title: "SMB SECURITY",
              description:
                "SafeBiz Firewall is specifically designed for SMBs that require enterprise-grade security without a dedicated IT security team.",
              image: "/images/banners/homepage-right-banner1.webp",
            }}
            subFeatures={[
              {
                title: "CLOUD PROTECTION",
                description:
                  "Ensure your cloud workloads and remote environments remain inaccessible to attackers with real-time continuous monitoring.",
                image: "/images/features/customer-safebiz.webp",
              },
              {
                title: "ENDPOINT PROTECTION",
                description:
                  "Windows Agent Software: Firewall integration, Anti-Virus, DNS Security, URL Filtering, AI/DLP.",
                image: "/images/features/securehome-safehome.webp",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
