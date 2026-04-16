"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HighlightedText from "@/components/global/HighlightedText";
import DecorativeLine from "../home/DecorativeLine";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const faqs = [
  {
    id: "01",
    question: "We’re here to help you secure what matters most.",
    answer:
      "Our team provides expert guidance tailored to your business needs.",
  },
  {
    id: "02",
    question: "We’re here to help you secure what matters most.",
    answer: "We ensure top-level security solutions with continuous support.",
  },
  {
    id: "03",
    question: "We’re here to help you secure what matters most.",
    answer: "Our experts are available anytime for consultation.",
  },
  {
    id: "04",
    question: "We’re here to help you secure what matters most.",
    answer: "We provide scalable and reliable security systems.",
  },
];

export default function ContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    faqs.forEach((_, i) => {
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
  }, [openIndex]);

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

      <div className="relative z-10 max-w-[1440px] mt-0 md:mt-4 mx-auto px-6 lg:px-12">
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
              src="/images/about/get-advice-any-time.webp"
              alt="Contact"
              fill
              className="object-cover scale-110"
            />
          </div>
        </div>

        {/* ROW 2: FAQ (Full Width) */}
        <div className="mt-20 md:mt-[100px]">
          {/* FAQ */}
          <div>
            <h2 className="faq-heading mb-8">FAQ</h2>

            <div className="flex flex-col gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="flex items-center gap-4 md:gap-8 group cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* NUMBER (OUTSIDE BACKGROUND) */}
                  <span className="faq-item-number shrink-0">{faq.id}</span>

                  {/* CONTENT BOX (BACKGROUND) */}
                  <div className="flex-1 bg-[#F7F7F7] rounded-[37px] px-[20px] lg:px-[27px] py-4 transition-all group-hover:bg-[#efefef] ">
                    <div className="flex justify-between items-center gap-4">
                      <p className="faq-item-question">{faq.question}</p>

                      <Image
                        src={
                          openIndex === index
                            ? "/images/global/faq-up-icon.svg"
                            : "/images/global/faq-down-icon.svg"
                        }
                        alt="toggle"
                        width={24}
                        height={24}
                        className="shrink-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-all duration-300"
                      />
                    </div>

                    <div
                      ref={(el) => {
                        faqRefs.current[index] = el;
                      }}
                      className="overflow-hidden h-0 opacity-0"
                    >
                      <p className="faq-item-answer pt-2">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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
