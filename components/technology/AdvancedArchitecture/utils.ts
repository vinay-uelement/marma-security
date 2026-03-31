import React from "react";
import gsap from "gsap";

export const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  gsap.to(el, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
  });
};

export const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  gsap.to(el, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
};
