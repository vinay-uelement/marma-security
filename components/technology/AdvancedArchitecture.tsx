"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HighlightedText from "../global/HighlightedText";

import { orbitingNodes, bottomJunctions, bottomCards } from "./AdvancedArchitecture/constants";
import ConnectionLines from "./AdvancedArchitecture/ConnectionLines";
import CentralCloud from "./AdvancedArchitecture/CentralCloud";
import OrbitNode from "./AdvancedArchitecture/OrbitNode";
import JunctionNode from "./AdvancedArchitecture/JunctionNode";
import EdgeCard from "./AdvancedArchitecture/EdgeCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
          <ConnectionLines />

          {/* Central Cloud */}
          <CentralCloud cloudRef={cloudRef} />

          {/* Orbiting Nodes */}
          {orbitingNodes.map((node) => (
            <OrbitNode key={`orbit-${node.id}`} node={node} />
          ))}

          {/* Bottom Junction Nodes */}
          {bottomJunctions.map((junc) => (
            <JunctionNode key={`junct-${junc.id}`} junc={junc} />
          ))}

          {/* Bottom Cards Tier */}
          {bottomCards.map((card) => (
            <EdgeCard key={`card-${card.id}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
