"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShieldCheck,
  Users,
  BarChart3,
  Clock,
  Zap,
  Globe,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: ShieldCheck,
    iconBg: "bg-red-50",
    iconColor: "text-brand-red",
    title: "Threat Detection",
    description:
      "AI-powered detection that identifies and blocks phishing, ransomware, and zero-day attacks before they reach your network.",
    href: "/technology",
  },
  {
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Team Collaboration",
    description:
      "Unified security dashboard where your team can monitor, respond, and collaborate on threats in real-time.",
    href: "/solutions/enterprise",
  },
  {
    icon: BarChart3,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Advanced Analytics",
    description:
      "Make smarter decisions with powerful security insights, custom reports, and behavioral analysis across your network.",
    href: "/technology",
  },
  {
    icon: Clock,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "24/7 Monitoring",
    description:
      "Round-the-clock real-time monitoring, instant alerts, and predictive protection that never sleeps.",
    href: "/technology",
  },
  {
    icon: Zap,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Automated Response",
    description:
      "Automate repetitive security tasks and incident workflows to save time and reduce human error.",
    href: "/solutions/enterprise",
  },
  {
    icon: Globe,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Cloud Integration",
    description:
      "Seamlessly connect with your favorite cloud tools and platforms — one unified security layer for everything.",
    href: "/technology",
  },
];

export default function FeatureCards() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".feature-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FAFBFF] py-16 lg:py-24 px-6 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="feature-header text-center mb-12 lg:mb-16">
          <span className="inline-block font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-brand-red font-semibold mb-4">
            Features
          </span>
          <h2 className="font-banner text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.02em] text-[#1A1A2E]">
            Everything You Need to{" "}
            <span className="text-brand-red">Succeed</span>
          </h2>
          <p className="font-body text-[15px] md:text-[17px] text-[#777777] mt-4 max-w-[560px] mx-auto leading-relaxed">
            Powerful features built to streamline your security workflow and
            drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card group bg-white rounded-2xl border border-[#F0F0F0] p-6 lg:p-8 hover:shadow-lg hover:shadow-black/[0.04] hover:border-[#E0E0E0] transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="font-banner text-[18px] md:text-[20px] font-medium text-[#1A1A2E] mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-[14px] md:text-[15px] text-[#777777] leading-relaxed mb-5">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-brand-red hover:text-brand-red-hover transition-colors group/link"
                >
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transform group-hover/link:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
