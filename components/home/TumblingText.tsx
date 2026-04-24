"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TumblingTextProps {
  phrases: string[];
  index: number;
  className?: string;
  minWidth?: string;
}

export default function TumblingText({
  phrases,
  index,
  className = "",
  minWidth = "15ch",
}: TumblingTextProps) {
  const [activePhrase, setActivePhrase] = useState(phrases[index]);
  const [outgoingPhrase, setOutgoingPhrase] = useState<string | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isFirstMount = useRef(true);

  useGSAP(
    () => {
      if (isFirstMount.current) {
        isFirstMount.current = false;
        return;
      }
      if (phrases[index] !== activePhrase) {
        setOutgoingPhrase(activePhrase);
        setActivePhrase(phrases[index]);
      }
    },
    { dependencies: [index], scope: containerRef }
  );

  useGSAP(
    () => {
      if (!activePhrase || isFirstMount.current) return;

      const incoming = containerRef.current?.querySelector(".incoming-text");
      const outgoing = containerRef.current?.querySelector(".outgoing-text");

      if (incoming) {
        gsap.fromTo(
          incoming,
          {
            y: "-50%",
            rotateX: 30,
            opacity: 0,
            filter: "blur(3px)",
          },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power2.inOut",
          }
        );
      }

      if (outgoing) {
        gsap.to(outgoing, {
          y: "50%",
          rotateX: -30,
          opacity: 0,
          filter: "blur(3px)",
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => setOutgoingPhrase(null),
        });
      }
    },
    { dependencies: [activePhrase], scope: containerRef }
  );

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: "inline-block",
        minWidth: minWidth,
        overflow: "hidden",
        verticalAlign: "bottom",
        perspective: "600px",
        position: "relative",
      }}
    >
      {outgoingPhrase && (
        <span
          className="outgoing-text"
          style={{
            display: "block",
            transformOrigin: "50% 50%",
            transformStyle: "preserve-3d",
            position: "absolute",
            width: "100%",
          }}
        >
          {outgoingPhrase}
        </span>
      )}
      <span
        className="incoming-text"
        style={{
          display: "block",
          transformOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        }}
      >
        {activePhrase}
      </span>
    </span>
  );
}