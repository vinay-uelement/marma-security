import React from "react";
import SolutionsInfo from "../solutions/SolutionsInfo";

export default function HomeSolutionsInfo() {
  return (
    <div className="w-full max-w-[1440px] mx-auto pt-10">
      <SolutionsInfo
        imagePosition="right"
        imageSrc="/images/home/allDevice.webp"
        bgText="STAY IN THE KNOW"
        bgTextClassName="text-[clamp(24px,5vw,72px)] tracking-[0.18em]"
        title={"One Intelligent Platform. Complete Cybersecurity Coverage."}
        description="Powered by AI and built on enterprise-grade security technologies, Marma delivers unified protection across networks, users, devices, and data. By combining advanced threat detection, behavioral analysis, and cloud intelligence, our platform prevents attacks before they happen without adding complexity.
From phishing and ransomware to IoT vulnerabilities and data leaks, Marma replaces fragmented security tools with a single, automated solution designed for simplicity, speed, and scale."
        button={
          {
            label: "Know More",
            href: "/technology",
          }
        }
      />
    </div>
  );
}
