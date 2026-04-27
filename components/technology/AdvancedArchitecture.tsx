"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HighlightedText from "../global/HighlightedText";

import { orbitingNodes, bottomJunctions, bottomCards, mobileBottomCards, mobileBottomJunctions } from "./AdvancedArchitecture/constants";
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

      const lines = gsap.utils.toArray<SVGPathElement>(".svg-line");
      const dataFlows = gsap.utils.toArray<SVGPathElement>(".svg-data-flow");
      const orbitNodes = gsap.utils.toArray<HTMLDivElement>(".orbit-node-inner");
      const cardNodes = gsap.utils.toArray<HTMLDivElement>(".card-node-inner");
      const junctionNodes = gsap.utils.toArray<HTMLDivElement>(".junction-node-inner");

      // Set initial states
      gsap.set(cloudRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(orbitNodes, { y: 20, opacity: 0 });
      gsap.set(junctionNodes, { scale: 0, opacity: 0 });
      gsap.set(cardNodes, { y: 20, opacity: 0 });

      // Prepare lines for entrance
      gsap.set(lines, { opacity: 0 });

      // 1. Entrance Sequence Timeline
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top -1%",
      //     scrub: 2,
      //     pin: true,
      //     pinSpacing: true,
      //     end: "80%",
      //   },
      // });
      const tl = gsap.timeline();

      // Step 1: Central cloud
      tl.to(cloudRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      // Step 2: Lines drawing out (using opacity toggle to preserve dashed style)
      tl.set(lines, { opacity: 0 });
      tl.to(
        lines,
        {
          opacity: 1,
          duration: 0.8,
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

      // Data Flow Continuous Animation & Synchronized Blinking
      dataFlows.forEach((flow, index) => {
        const path = flow as SVGPathElement;
        const totalLength = path.getTotalLength();
        const duration = gsap.utils.random(1.5, 2.5);

        // Map path index to corresponding node
        let targetNode: HTMLElement | null = null;
        if (index < 7) {
          targetNode = orbitNodes[index]?.querySelector(".node-icon-container");
        } else if (index === 7) {
          targetNode = junctionNodes[1]; // Center Monitor
        } else if (index === 8) {
          targetNode = junctionNodes[0]; // Left Shield
        } else if (index === 9) {
          targetNode = junctionNodes[2]; // Right Smartphone
        } else if (index >= 10 && index <= 12) {
          // Bottom Cards (index 10-12)
          targetNode = cardNodes[index - 10];
        }

        // Pattern is 16px dash, 32px gap for a cleaner 'Pro' look on angled paths
        const dashCycle = 48;
        const initialShift = -totalLength;
        gsap.set(path, { strokeDasharray: "12, 36", strokeDashoffset: initialShift });

        // Animating the pattern flow
        gsap.to(path, {
          strokeDashoffset: initialShift - dashCycle,
          duration: duration,
          ease: "none",
          repeat: -1
        });
      });

      // Master pulse animation for all icon containers
      const allIcons = containerRef.current?.querySelectorAll(".node-icon-container");
      if (allIcons && allIcons.length > 0) {
        const pulseTl = gsap.timeline({ repeat: -1 });
        pulseTl.to(allIcons, {
          borderColor: "#FF4444",
          background: "#FFF0F0",
          boxShadow: "0 0 15px rgba(255, 68, 68, 0.4)",
          duration: 0.2,
          ease: "power2.in"
        }).to(allIcons, {
          borderColor: "#FFE0E0",
          background: "#FFF0F0",
          boxShadow: "0 0 0px rgba(255, 68, 68, 0)",
          duration: 0.4,
          ease: "power2.out"
        }, "+=1.5"); // Pause between pulses for a "heartbeat" feel
      }
    },
    { scope: containerRef }
  );

  return (
    <section className="w-full bg-[#FAFAFA] pt-8 lg:pt-12 pb-12 md:pb-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        {/* Typography Layout */}
        <div className="text-center w-full max-w-[900px] mx-auto mb-2 md:mb-0 relative z-20">
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
          className="relative w-full max-w-[1024px] xl:max-w-[1200px] min-h-[400px] md:min-h-[500px] aspect-2/1  lg:aspect-[16/8] xl:aspect-[16/11] mx-auto mt-4 lg:-mt-12"
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
          <div className="hidden lg:block ">
            {bottomJunctions.map((junc) => (
              <JunctionNode key={`junct-${junc.id}`} junc={junc} />
            ))}
          </div>
          <div className="block lg:hidden ">
            {mobileBottomJunctions.map((junc) => (
              <JunctionNode key={`junct-${junc.id}`} junc={junc} />
            ))}
          </div>

          {/* Bottom Cards Tier */}
          <div className="hidden lg:block ">
            {bottomCards.map((card) => (
              <EdgeCard key={`card-${card.id}`} card={card} />
            ))}
          </div>

          {/* Mobile */}
          <div className="block lg:hidden ">
            {mobileBottomCards.map((card) => (
              <EdgeCard key={`card-${card.id}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
