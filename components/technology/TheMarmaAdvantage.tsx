"use client";

import React, { useRef, useEffect, useState } from "react";
import HighlightedText from "../global/HighlightedText";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const MoleculeIcon = ({ className = "" }: { className?: string }) => (
  <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3.07068 20.1322C4.40003 17.8028 6.67893 15.2773 9.46881 13.0416C12.2587 10.8058 15.3624 9.01793 18.1826 8.02193C21.0027 7.02597 23.3401 6.8923 24.7447 7.64666C26.1494 8.40104 26.5223 9.99011 25.7914 12.1081C25.0604 14.2261 23.2773 16.7233 20.7855 19.1191C18.2937 21.5149 15.2691 23.64 12.2938 25.0854C9.31858 26.5308 6.60291 27.1943 4.66948 26.9483C2.73609 26.7023 1.72154 25.5641 1.82115 23.7528" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.2686 1.48946C13.5113 0.166486 14.8678 0.326593 16.0748 1.93863C17.2818 3.5507 18.2532 6.49984 18.8007 10.2139C19.3482 13.9279 19.4326 18.1421 19.0377 22.0388C18.6427 25.9356 17.7965 29.2372 16.6632 31.3031C15.5299 33.3687 14.1904 34.0515 12.9044 33.219C11.6184 32.3862 10.4777 30.0976 9.70354 26.7967C8.9294 23.4958 8.57702 19.4182 8.71478 15.3549C8.85252 11.2916 9.47056 7.53226 10.449 4.80623" stroke="currentColor" strokeWidth="1.5" />
    <path d="M25.2121 26.2034C26.3586 25.2546 26.4654 23.5258 25.5122 21.3422C24.559 19.1585 22.6118 16.6705 20.0367 14.346C17.4616 12.0216 14.4361 10.0209 11.5293 8.72041C8.62253 7.41988 6.03476 6.90905 4.25274 7.28406C2.47071 7.65906 1.61727 8.89401 1.85289 10.7566C2.08851 12.6193 3.397 14.9812 5.53222 17.3982C7.66744 19.8152 10.4823 22.1207 13.4472 23.881C16.4121 25.6413 19.3229 26.7352 21.632 26.9568" stroke="currentColor" strokeWidth="1.5" />
    <path d="M23.4662 24.8231C24.3903 24.8231 25.1395 25.7266 25.1395 26.8412C25.1395 27.9558 24.3903 28.8594 23.4662 28.8594C22.5421 28.8594 21.793 27.9558 21.793 26.8412C21.793 25.7266 22.5421 24.8231 23.4662 24.8231Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.1947 1.26837C12.1189 1.26837 12.868 2.17193 12.868 3.28653C12.868 4.40113 12.1189 5.30469 11.1947 5.30469C10.2706 5.30469 9.52148 4.40113 9.52148 3.28653C9.52148 2.17193 10.2706 1.26837 11.1947 1.26837Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.27287 19.7762C3.19698 19.7762 3.94613 20.6797 3.94613 21.7943C3.94613 22.9089 3.19698 23.8125 2.27287 23.8125C1.34875 23.8125 0.599609 22.9089 0.599609 21.7943C0.599609 20.6797 1.34875 19.7762 2.27287 19.7762Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const advantages = [
  {
    title: "PhishBlock",
    desc: "Phishing is any attempt by a cybercriminal to pretend to be a legitimate institution to trick internet users into providing sensitive information. In fact, up to 40% of modern cyber-attacks are carried out through phishing attempts. Marma's PhishBlock monitors network traffic to detect and flag phishing attempts.",
  },
  {
    title: "NetImmunity",
    desc: "Cybercriminals use various techniques like DDoS (Distributed Denial of Service), Brute Force, and Device Vulnerability attacks to overwhelm and take control of network devices. Marma's NetImmunity monitoring blocks attempts at these network-based attacks effortlessly.",
  },
  {
    title: "MalwareGuard",
    desc: "Malware is any software that is designed to damage network-connected devices such as computers or servers. Marma's MalwareGuard monitors the traffic moving into and through your network to look for Malware and effectively block it from damaging your devices.",
  },
  {
    title: "NetStealth",
    desc: "Cybercriminals use automated bots to scan and learn characteristics about your network devices to find vulnerabilities. NetStealth maintains a proactive stealth posture for your network so that cybercriminals cannot infiltrate your network infrastructure.",
  },
  {
    title: "RansomGuard",
    desc: "Ransomware is malicious software that encrypts files to block access, demanding a ransom to restore them. Marma's platform monitors network traffic to identify and proactively block Ransomware from damaging devices on your network environment.",
  },
  {
    title: "SafeID",
    desc: "Identity theft results in billions of dollars of damage to Americans every year. Marma's SafeID technology monitors your network traffic to aggressively scan for identity theft attempts and protect your home or business safely.",
  },
  {
    title: "SafeDevices",
    desc: "While antiviruses and VPNs can prevent some cyberattacks, they cannot protect IoT devices like smart doorbells and TVs. Marma's SafeDevices feature monitors traffic to connected hardware and actively prevents broad device infiltrations.",
  },
  {
    title: "ScamGuard",
    desc: "Cybercriminals constantly create new methods that trick users. Marma's Scamguard learns from the FBI's cyber crime database and internet-published attack models to detect and stay up-to-date on identifying the latest cyber scam architectures.",
  },
];

export default function TheMarmaAdvantage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const rows = containerRef.current.querySelectorAll('.adv-row');

      // Initial entrance fade-in, applied to cards directly to preserve staggering
      const cards = containerRef.current.querySelectorAll('.adv-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          }
        }
      );

      // Scroll-based accordion trigger using rows
      rows.forEach((row, idx) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 75%", // Triggers when the top of the row hits the center of the screen
          onEnter: () => setOpenIndex(idx), // Scrolling downwards opens this row
          onLeaveBack: () => setOpenIndex(Math.max(0, idx - 1)), // Scrolling upwards past the row opens the previous row
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Recalculate ScrollTrigger markers after the smooth CSS expansion completes to prevent native scrollbar jumps
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 650); // Matches the 600ms css transition plus slight buffer
    return () => clearTimeout(timeout);
  }, [openIndex]);

  // Group advantages into rows of 2
  const groupedAdvantages = [];
  for (let i = 0; i < advantages.length; i += 2) {
    if (i + 1 < advantages.length) {
      groupedAdvantages.push([advantages[i], advantages[i + 1]]);
    } else {
      groupedAdvantages.push([advantages[i]]);
    }
  }

  return (
    <section id="marma-advantage" className="w-full bg-[#FFFFFF] pt-20 md:pt-32 pb-16 md:pb-28 relative z-0 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.03)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.02)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10" ref={containerRef}>
        <div className="mb-14 md:mb-20 text-center flex flex-col items-center">
          <h2 className="fl2-1 mb-6">
            The Marma{" "}
            <HighlightedText
              text="Advantage"
              className="font-bold text-[#1A1A1A]"
              imageClassName="bottom-[-10px] md:bottom-[-15px] left-0 w-[110%]"
            />
          </h2>
          <p className="fl4-2 text-[#4A4A4A] max-w-[800px] leading-relaxed">
            Marma Security's products use enterprise-grade Firewall, Intrusion Prevention, DNS Security, Content Filtering and AI-powered security software to deliver comprehensive, zero-effort protection from advanced cyberattacks.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 items-center w-full">
          {groupedAdvantages.map((rowGroup, rowIdx) => {
            const isRowOpen = openIndex === rowIdx;

            return (
              <div
                key={rowIdx}
                className="adv-row grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full"
              >
                {rowGroup.map((adv, colIdx) => (
                  <div
                    key={colIdx}
                    onClick={() => setOpenIndex(rowIdx)}
                    className={`adv-card w-full cursor-pointer group relative bg-white rounded-[24px] p-6 md:p-8 flex flex-col xl:flex-row items-start gap-6 border border-[rgba(0,0,0,0.06)] shadow-[0px_8px_24px_rgba(0,0,0,0.03)] transition-[height,transform,opacity,border,box-shadow,background-color] duration-[600ms] overflow-hidden ${isRowOpen ? 'border-[#FF0000]/30 shadow-[0px_16px_32px_rgba(255,0,0,0.05)] bg-[#FAFAFA]' : 'hover:shadow-[0px_24px_48px_-12px_rgba(255,0,0,0.08)] hover:-translate-y-1 hover:border-[#FF0000]/15'}`}
                  >
                    {/* Dynamic Top Accent Line */}
                    <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF0000]/0 via-[#FF0000]/80 to-[#FF0000]/0 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${isRowOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>

                    {/* Gentle Interior Glow */}
                    <div className={`absolute top-[-30px] left-[-30px] w-[140px] h-[140px] bg-[#FF0000]/10 blur-[45px] rounded-full transition-opacity duration-700 pointer-events-none ${isRowOpen ? 'opacity-100' : 'opacity-0'}`}></div>

                    {/* Immersive Icon Container */}
                    <div className={`flex-shrink-0 w-[64px] h-[64px] rounded-[18px] flex items-center justify-center border transition-all duration-[600ms] relative z-10 ${isRowOpen ? 'bg-gradient-to-br from-[#FF0000] to-[#D10000] border-[#FF0000] scale-[1.05] shadow-[0_8px_20px_rgba(255,0,0,0.25)]' : 'bg-gradient-to-br from-[#FFF5F5] to-[#FFEBEB] border-[#FF0000]/10 shadow-[inset_0_2px_10px_rgba(255,255,255,1)] group-hover:bg-[#FFF0F0] scale-100'}`}>
                      <div className={`scale-[0.85] transition-colors duration-500 ${isRowOpen ? 'text-white' : 'text-[#FF0000]'}`}>
                        <MoleculeIcon />
                      </div>
                    </div>

                    <div className="flex flex-col relative z-10 w-full">
                      <div className="flex items-center justify-between w-full h-[64px] xl:h-auto">
                        <h3 className={`fl3-3 !leading-tight font-bold transition-colors duration-[600ms] ${isRowOpen ? 'text-[#FF0000]' : 'text-[#1A1A1A] group-hover:text-[#FF0000]/70'}`}>
                          {adv.title}
                        </h3>

                        {/* Expand/Collapse Chevron */}
                        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isRowOpen ? 'bg-[#FF0000]/10 text-[#FF0000]' : 'bg-transparent text-[#AAAAAA] group-hover:bg-[#FF0000]/5 group-hover:text-[#FF0000]'}`}>
                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isRowOpen ? 'rotate-180' : 'rotate-0'}`}>
                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Refined Description Formatting (Accordion Panel) - Custom ultra-smooth timing function */}
                      <div
                        className={`grid transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isRowOpen ? 'grid-rows-[1fr] opacity-100 mt-4 xl:mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                      >
                        <div className="overflow-hidden">
                          <p className="fl4 text-[#555555] leading-[1.7] pb-1">
                            {adv.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
