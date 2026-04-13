"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  decimals?: number;
}

const stats: StatItem[] = [
  {
    value: 8,
    suffix: " million +",
    label: "Verified Sites",
    description:
      "Real-time URL reputation checking and SSL inspection to ensure safe browsing.",
  },
  {
    value: 7.9,
    suffix: " Million +",
    label: "Allowed Requests",
    description:
      "Marma intelligently analyzes traffic and allows safe requests while blocking suspicious activity.",
    decimals: 1,
  },
  {
    value: 14000,
    suffix: "",
    label: "Blocked Requests",
    description:
      "Marma prevents unauthorized access before threats reach your network.",
  },
  {
    value: 27400,
    suffix: "",
    label: "Blocked Threats",
    description:
      "Marma stops malware, phishing, and intrusion attempts before they impact your network.",
  },
];

const AnimatedCounter = ({ stat }: { stat: StatItem }) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
    
      gsap.to(obj, {
        val: stat.value,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", 
          once: true,
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = obj.val.toFixed(stat.decimals || 0);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stat]);

  return (
    <h3 ref={containerRef} className="fl2 font-bold flex items-baseline">
      <span ref={numberRef}>0</span>
      <span>{stat.suffix}</span>
    </h3>
  );
};

export default function StatsSection() {
  return (
    <section className="relative w-full py-0 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20 ">
        {/* Stats Glass Card */}
        <div className="p-[10px] md:p-[71px] lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:1176px)]:grid-cols-4 gap-2 md:gap-8 [@media(min-width:1176px)]:gap-10 my-[10px] md:my-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                {/* Value */}
                <AnimatedCounter stat={stat} />

                {/* Divider */}
                <div className="pr-1 mt-1 md:mt-3 mb-1">
                  <div className="border-b border-[#000000]/30"></div>
                </div>

                {/* Label */}
                <p className="fl4-3 font-bold! mt-[5px] md:mt-0 mb-2">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="fl4 ">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
