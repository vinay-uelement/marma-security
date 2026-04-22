"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HighlightedText from "@/components/global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "What is Marma Security and how is it different from traditional cybersecurity solutions?",
    answer:
      "Marma Security is an AI-powered SASE (Secure Access Service Edge) platform that delivers end-to-end cybersecurity through a plug-and-play approach. Unlike traditional solutions that require complex setup and multiple tools, Marma combines network security, endpoint protection, cloud security, and AI-driven threat detection into a single unified platform.",
  },
  {
    id: "02",
    question: "Do I need technical expertise to use Marma Security?",
    answer:
      "Not at all. Marma is designed for simplicity. Setup is as easy as connecting a device to your Wi-Fi, and your network is protected within minutes. No dedicated cybersecurity team is required.",
  },
  {
    id: "03",
    question: "What products does Marma Security offer?",
    answer:
      "Marma offers a complete cybersecurity ecosystem: \n• SafeEnterprise – For enterprises and large offices \n• SafeBiz – For small and medium businesses \n• SafeHome / SafeRemote – For remote workers and home users \n• Endpoint Protection Software & Mobile App – For real-time monitoring and alerts \nAll products are centrally managed through a unified platform.",
  },
  {
    id: "04",
    question: "How quickly can I deploy Marma Security?",
    answer:
      "Deployment takes just a few minutes. Thanks to plug-and-play auto-configuration, your network can be secured in under 15 minutes, significantly reducing setup time compared to traditional firewalls.",
  },
  {
    id: "05",
    question: "What kind of threats does Marma protect against?",
    answer:
      "Marma provides advanced protection against: \n• Zero-day phishing attacks \n• Ransomware and malware \n• Scam and fraud attempts \n• Malicious IPs and unsafe websites \n• Data leaks and insider threats \nIts AI continuously learns and adapts to detect unknown and emerging threats in real time.",
  },
  {
    id: "06",
    question: "How does Marma use AI in cybersecurity?",
    answer:
      "Marma leverages AI/ML for: \n• Predictive risk scoring \n• Behavioral anomaly detection (user & device) \n• Real-time scam detection \nThis ensures threats are identified before they cause damage, not just after.",
  },
  {
    id: "07",
    question: "Can Marma Security scale with my business?",
    answer:
      "Yes. Marma is built for scalability: \n• Protects remote workers, branch offices, and large enterprises \n• Supports dozens to hundreds of devices per gateway \n• Centralized management across all locations \nWhether you're a startup or a distributed enterprise, Marma grows with you.",
  },
  {
    id: "08",
    question: "Does Marma support remote and hybrid work environments?",
    answer:
      "Absolutely. With solutions like SafeRemote and SafeHome, Marma ensures that remote employees are protected with the same level of security as corporate offices—without complex VPN setups.",
  },
  {
    id: "09",
    question: "How do I monitor and manage security?",
    answer:
      "Marma provides: \n• A centralized management platform \n• A user-friendly mobile app \n• Real-time alerts and insights \nYou can monitor threats, devices, and activity from anywhere, anytime.",
  },
  {
    id: "10",
    question: "How effective is Marma Security in real-world scenarios?",
    answer:
      "Marma customers have seen measurable impact, with over 1.3 million threats blocked in just 90 days, demonstrating strong real-world protection capabilities.",
  },
  {
    id: "11",
    question: "Is Marma suitable for SMBs with limited budgets?",
    answer:
      "Yes. Marma is designed to be cost-effective, offering enterprise-grade security at a fraction of the cost of traditional solutions. It also reduces the need for large IT teams, making it ideal for SMBs.",
  },
  {
    id: "12",
    question: "How frequently are security updates provided?",
    answer:
      "Marma provides continuous threat intelligence updates, ensuring your protection evolves with the latest cyber threats—automatically and in real time.",
  },
  {
    id: "13",
    question: "What support options are available?",
    answer:
      "Marma offers SOC-backed support and Tier-III technical assistance, ensuring rapid response to threats and issues when needed.",
  },
  {
    id: "14",
    question: "Can partners or MSPs work with Marma?",
    answer:
      "Yes. Marma has a partner-first approach, offering: \n• Flexible pricing models \n• Co-selling opportunities \n• Marketing and technical enablement \n• High-margin partner programs \nIt’s designed to help MSPs scale quickly and profitably.",
  },
];

export default function ContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faqSectionRef = useRef<HTMLDivElement>(null);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      // Scroll to the FAQ section start
      const yOffset = -100; // Account for potential sticky header
      const element = faqSectionRef.current;
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAll(true);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    visibleFaqs.forEach((_, i) => {
      const el = faqRefs.current[i];
      if (!el) return;

      if (openIndex === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    });
  }, [openIndex, visibleFaqs]);

  return (
    <section className="relative w-full bg-white py-8 lg:py-[100px] overflow-x-clip">
      {/* Decorative Line */}
      <div className="absolute top-[20px] right-0 w-screen pointer-events-none z-0">
        <div className="ml-auto w-[160px] md:w-[220px]">
          <DecorativeLine
            viewBox="0 0 700 80"
            points="100,40 900,40"
            dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto ml-auto"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mt-0 md:mt-4 mx-auto px-6 lg:px-16">
        {/* ROW 1: HEADER & IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4.5fr]  gap-10 lg:gap-6   items-start">
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-start">
            <div className="mt-10" />

            <h3 className="fl2-3 font-bold!">Get advice any time.</h3>

            <p className="fl5-2 text-text-dark mt-3 max-w-[520px]">
              Connect with our team for reliable, expert guidance
              <br /> whenever you need it.
            </p>
          </div>

          {/* RIGHT SECTION: IMAGE */}
          <div className="w-full h-[320px] md:h-[400px] relative rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl">
            <Image
              src="/images/contact/getAdvice.webp"
              alt="Contact"
              fill
              className="object-cover scale-110"
            />
          </div>
        </div>

        {/* ROW 2: FAQ (Full Width) */}
        <div className="mt-20 md:mt-[100px]" ref={faqSectionRef}>
          {/* FAQ */}
          <div>
            <h2 className="faq-heading mb-8">FAQ</h2>

            <div className="flex flex-col">
              {visibleFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="flex items-center gap-3 md:gap-6 group cursor-pointer border-b border-[#EAEAEA] py-4 md:py-6"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* NUMBER (OUTSIDE) */}
                  <span className="faq-item-number shrink-0">{faq.id}</span>

                  {/* CONTENT BOX (NO BACKGROUND) */}
                  <div className="flex-1 transition-all">
                    <div className="flex justify-between items-center gap-4">
                      <p className="faq-item-question font-title">{faq.question}</p>

                      <ChevronDown
                        className={`shrink-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                          } text-text-dark`}
                      />
                    </div>

                    <div
                      ref={(el) => {
                        faqRefs.current[index] = el;
                      }}
                      className="overflow-hidden h-0 opacity-0"
                    >
                      <p className="faq-item-answer pt-4 max-w-[90%]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SHOW MORE BUTTON */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleToggleShowAll}
                className="text-2xl text-text-dark! font-semibold hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                {showAll ? "Show Less" : "Show More"}
                <ChevronDown
                  className={`w-6 h-6 text-text-dark transition-transform duration-300 ${showAll ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* 100PX GAP */}
        <div className="h-[40px] md:h-[80px]" />

        <div className="flex flex-col w-[60%] sm:w-[50%] min-[901px]:w-[45%] scale-x-[-1] mt-4 min-[901px]:mt-0 pointer-events-none z-0">
          <DecorativeLine
            viewBox="0 150 1260 20"
            points="480,270 700,270 800,150 3000,150"
            dots={[{ cx: 480, cy: 270, rippleCount: 4, rippleBaseDelay: 0.2 }]}
            className="w-full h-auto"
            strokeWidth={3}
            dotRadius={18}
            animationDuration={2.6}
          />

          <DecorativeLine
            viewBox="0 0 700 80"
            points="-3000,40 210,40"
            dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
            dotRadius={8}
            animationDuration={2.2}
          />
        </div>
      </div>
    </section>
  );
}
