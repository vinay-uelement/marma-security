"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HighlightedText from "../global/HighlightedText";

import {
  ShieldAlert,
  TrendingUp,
  Network,
  Bot,
  Zap,
  Cloud,
  Key,
  CircleDot,
  Shield,
  Monitor,
  Smartphone,
  LucideIcon
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface OrbitingNode {
  id: number;
  label: string;
  pos: { left: string; top: string };
  layout: string;
  icon: LucideIcon;
}

// Data for Nodes
const orbitingNodes: OrbitingNode[] = [
  { id: 1, label: "Real-Time Scam Detector\n", pos: { left: "15%", top: "50%" }, layout: "row-reverse", icon: ShieldAlert },
  { id: 2, label: "Predictive Risk-\nScoring", pos: { left: "25%", top: "35%" }, layout: "row-reverse", icon: TrendingUp },
  { id: 3, label: "Multi-stage Attack\nCo-relation", pos: { left: "34%", top: "18%" }, layout: "row-reverse", icon: Network },
  { id: 4, label: "AI Co-Pilot", pos: { left: "50%", top: "10%" }, layout: "col", icon: Bot },
  { id: 5, label: "AI/ML Powered\nAnomaly Detection", pos: { left: "66%", top: "18%" }, layout: "row", icon: Zap },
  { id: 6, label: "3rd Party SaaS\nServices", pos: { left: "80%", top: "35%" }, layout: "row", icon: Cloud },
  { id: 7, label: "Adaptive Access\nPolicies", pos: { left: "85%", top: "50%" }, layout: "row", icon: Key },
];

const bottomJunctions = [
  { id: 21, pos: { left: "20%", top: "68%" }, icon: Shield },
  { id: 22, pos: { left: "50%", top: "68%" }, icon: Monitor },
  { id: 23, pos: { left: "80%", top: "68%" }, icon: Smartphone },
];

const bottomCards = [
  {
    id: 11,
    title: "Edge AI Agents",
    label: "Plug-n-Play Firewall Solutions",
    img: "/images/features/Malware-guard.webp",
    pos: { left: "20%", top: "86%" },
  },
  {
    id: 12,
    title: "Edge AI Agents",
    label: "Endpoint Protection Software",
    img: "/images/features/Malware-guard.webp",
    pos: { left: "50%", top: "86%" },
  },
  {
    id: 13,
    title: "Edge AI Agents",
    label: "Cybersecurity Mobile App",
    img: "/images/features/Malware-guard.webp",
    pos: { left: "80%", top: "86%" },
  },
];

export default function AdvancedArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const lines = gsap.utils.toArray<SVGLineElement>(".svg-line");
      const dataFlows = gsap.utils.toArray<SVGLineElement>(".svg-data-flow");
      const orbitNodes = gsap.utils.toArray<HTMLDivElement>(".orbit-node-inner");
      const cardNodes = gsap.utils.toArray<HTMLDivElement>(".card-node-inner");
      const junctionNodes = gsap.utils.toArray<HTMLDivElement>(".junction-node-inner");

      // Set initial states
      gsap.set(cloudRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(orbitNodes, { y: 20, opacity: 0 });
      gsap.set(junctionNodes, { scale: 0, opacity: 0 });
      gsap.set(cardNodes, { y: 20, opacity: 0 });

      // Init line drawing paths (prepare dashed arrays)
      lines.forEach((line) => {
        gsap.set(line, { strokeDasharray: 1000, strokeDashoffset: 1000 });
      });

      // 1. Entrance Sequence Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        onComplete: () => {
          startAntigravity();
        },
      });

      // Step 1: Central cloud
      tl.to(cloudRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      // Step 2: Lines drawing out
      tl.to(
        lines,
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: { amount: 0.5, from: "center" },
        },
        "-=0.8"
      );

      // Step 3: Nodes stagger in
      tl.to(
        orbitNodes,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          stagger: 0.1,
        },
        "-=1"
      );
      tl.to(
        junctionNodes,
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          stagger: 0.1,
        },
        "-=0.6"
      );
      tl.to(
        cardNodes,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          stagger: 0.1,
        },
        "-=0.4"
      );

      // Data Flow Continuous Animation
      dataFlows.forEach((flow) => {
        gsap.set(flow, { strokeDasharray: "8, 16", strokeDashoffset: 0 });
        gsap.to(flow, {
          strokeDashoffset: -24,
          duration: "random(0.8, 1.5)",
          ease: "none",
          repeat: -1,
        });
      });

      // Antigravity Idle State
      const antigravityTweens: gsap.core.Tween[] = [];
      const startAntigravity = () => {
        const floatingElements = [cloudRef.current, ...orbitNodes, ...junctionNodes, ...cardNodes];

        floatingElements.forEach((el) => {
          if (!el) return;
          const tween = gsap.to(el, {
            x: "random(-6, 6)",
            y: "random(-6, 6)",
            duration: "random(2.5, 4.5)",
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: "random(0, 2)",
          });
          antigravityTweens.push(tween);
          (el as any)._antigravityTween = tween;
        });
      };
    },
    { scope: containerRef }
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if ((el as any)._antigravityTween) {
      (el as any)._antigravityTween.pause();
    }
    gsap.to(el, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if ((el as any)._antigravityTween) {
      (el as any)._antigravityTween.resume();
    }
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section className="w-full bg-[#FAFAFA] pt-16 lg:pt-24 pb-20 md:pb-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Typography Layout */}
        <div className="text-center w-full max-w-[900px] mx-auto mb-10 md:mb-16 relative z-20">
          <h2 className="fl2">
            <HighlightedText
              text="Advanced cybersecurity"
              className="font-bold text-[#323232]"
              imageClassName="bottom-[-26px] md:bottom-[-22px] right-[7px] md-right-[-30px] translate-x-1/400 md:translate-x-0 scale-[0.8] md:scale-[1]"
            />{" "}
            architecture that safeguards every connected device seamlessly.
          </h2>
        </div>

        {/* --- Architecture Diagram Container --- */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1240px] aspect-[4/5] sm:aspect-square lg:aspect-[16/11] mx-auto mt-4"
        >
          {/* SVG Connection Lines Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* Lines from Cloud to Orbiting Nodes */}
            {orbitingNodes.map((node) => (
              <g key={`group-orb-${node.id}`}>
                <line className="svg-line" x1="50%" y1="50%" x2={node.pos.left} y2={node.pos.top} stroke="#E5E5E5" strokeWidth="1" />
                <line className="svg-data-flow" x1="50%" y1="50%" x2={node.pos.left} y2={node.pos.top} stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
              </g>
            ))}

            {/* Bottom track Lines: Center to junction */}
            <g>
              <line className="svg-line" x1="50%" y1="50%" x2="50%" y2="68%" stroke="#E5E5E5" strokeWidth="1" />
              <line className="svg-data-flow" x1="50%" y1="50%" x2="50%" y2="68%" stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
            </g>

            {/* Horizontal Line Left */}
            <g>
              <line className="svg-line" x1="50%" y1="68%" x2="20%" y2="68%" stroke="#E5E5E5" strokeWidth="1" />
              <line className="svg-data-flow" x1="50%" y1="68%" x2="20%" y2="68%" stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
            </g>

            {/* Horizontal Line Right */}
            <g>
              <line className="svg-line" x1="50%" y1="68%" x2="80%" y2="68%" stroke="#E5E5E5" strokeWidth="1" />
              <line className="svg-data-flow" x1="50%" y1="68%" x2="80%" y2="68%" stroke="#FF4444" strokeWidth="1.5" opacity="0.5" />
            </g>
          </svg>

          {/* Central Cloud */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] z-20 pointer-events-none"
            style={{ width: "320px", height: "160px" }}
          >
            {/* GSAP Target */}
            <div
              ref={cloudRef}
              className="relative w-full h-full flex flex-col items-center justify-center bg-white rounded-[100px] shadow-[0px_4px_30px_rgba(0,0,0,0.06)] border border-[#F5F5F5] pointer-events-auto"
            >
              {/* Cloud Bumps placed securely IN FRONT of SVG but BEHIND text via normal document flow inside matching relative container */}
              <div className="absolute top-[-36px] left-[45px] w-[110px] h-[110px] bg-white rounded-full shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.02)] border border-[#F5F5F5] border-b-white" style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 80%, -10% 80%)" }} />
              <div className="absolute top-[-50px] right-[45px] w-[140px] h-[140px] bg-white rounded-full shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.02)] border border-[#F5F5F5] border-b-transparent" style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 80%, -10% 80%)" }} />

              {/* Solid overlay blob to hide interior border lines of overlapping circles */}
              <div className="absolute inset-2 bg-white rounded-[100px] z-[5]" />

              <h3 className="relative flex flex-col items-center font-title font-bold text-[20px] md:text-[24px] text-center text-[#2A2A2A] leading-snug px-6 z-10 w-full min-w-max">
                <Image
                  src="/images/global/logo.svg"
                  alt="Marma Security"
                  width={1000}
                  height={1000}
                  className="nav-logo"
                  priority
                />
                Marma AI Security
                <br />
                Service
              </h3>
            </div>
          </div>

          {/* Orbiting Nodes */}
          {orbitingNodes.map((node) => {
            const isCol = node.layout === "col";
            const isRowReverse = node.layout === "row-reverse";

            return (
              <div
                key={`orbit-${node.id}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                style={{ left: node.pos.left, top: node.pos.top }}
              >
                <div
                  className={`orbit-node-inner flex items-center ${isCol ? "flex-col gap-2" : isRowReverse ? "flex-row-reverse gap-3" : "flex-row gap-3"
                    } cursor-pointer`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#FFE0E0]">
                    <node.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />
                  </div>
                  <span className={`font-body font-normal text-[12px] md:text-[14px] text-[#444444] leading-tight ${isCol ? 'text-center' : isRowReverse ? 'text-right' : 'text-left'}`} style={{ whiteSpace: "pre-line" }}>
                    {node.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Bottom Junction Nodes (The small red icons on the horizontal line) */}
          {bottomJunctions.map((junc) => (
            <div
              key={`junct-${junc.id}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
              style={{ left: junc.pos.left, top: junc.pos.top }}
            >
              <div className="junction-node-inner w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FFF0F0] border-2 border-white flex items-center justify-center shadow-sm">
                <junc.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-red" />
              </div>
            </div>
          ))}

          {/* Bottom Cards Tier */}
          {bottomCards.map((card) => (
            <div
              key={`card-${card.id}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
              style={{ left: card.pos.left, top: card.pos.top }}
            >
              <div
                className="card-node-inner flex flex-col items-center bg-[#FAFAFA] md:bg-white p-3 md:p-5 rounded-[12px] md:rounded-[20px] cursor-pointer shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-[#F0F0F0] w-[140px] sm:w-[180px] md:w-[220px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h4 className="font-body font-medium text-[12px] md:text-[14px] text-[#333333] mb-3 text-center">
                  {card.title}
                </h4>

                {/* Image Placeholder Frame */}
                {/* In Image 2, there is an image space here. Users will replace this. */}
                <div className="relative w-full aspect-video bg-[#F5F5F5] border border-[#EBEBEB] rounded-[8px] mb-3 overflow-hidden flex items-center justify-center">
                  <span className="text-[#BBBBBB] text-[10px] md:text-[12px] font-body bg-white/50 px-2 py-1 rounded">Image</span>
                  {card.img && (
                    <Image src={card.img} alt={card.label} fill sizes="200px" className="object-cover opacity-30 mix-blend-multiply" />
                  )}
                </div>

                <p className="font-body font-semibold text-[11px] md:text-[13px] text-center text-[#2A2A2A] leading-snug">
                  {card.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
