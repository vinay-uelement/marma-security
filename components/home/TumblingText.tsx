"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TumblingTextProps {
  phrases: string[];
  index: number;
  className?: string;
}

export default function TumblingText({
  phrases,
  index,
  className = "",
}: TumblingTextProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        minWidth: "15ch",
        overflow: "hidden",
        verticalAlign: "bottom",
        perspective: "600px",
        position: "relative",
      }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.span
          key={phrases[index]}
          initial={{
            y: "-50%",
            rotateX: 30,
            opacity: 0,
            filter: "blur(3px)",
          }}
          animate={{
            y: "0%",
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: "50%",
            rotateX: -30,
            opacity: 0,
            filter: "blur(3px)",
            position: "absolute",
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "block",
            transformOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}