"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TumblingTextProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

export default function TumblingText({
  phrases,
  interval = 2800,
  className = "",
}: TumblingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    // Outer span clips the tumbling animation — only one face visible at a time
    <span
      className={className}
      style={{
        display: "inline-block",
        minWidth: "15ch",
        overflow: "hidden",
        verticalAlign: "bottom",
        perspective: "600px", // Enables the 3D die-roll depth
        position: "relative",
      }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.span
          key={phrases[index]}
          initial={{
            y: "-60%",
            rotateX: 40,
            opacity: 0,
            filter: "blur(4px)",
          }}
          animate={{
            y: "0%",
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: "60%",
            rotateX: -40,
            opacity: 0,
            filter: "blur(4px)",
            position: "absolute",
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "block",
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
          }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
