import React from "react";
import SolutionsInfo from "../solutions/SolutionsInfo";

export default function HomeSolutionsInfo() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <SolutionsInfo
        imagePosition="right"
        imageSrc="/images/home/solution-info-homepage1.webp"
        bgText="STAY IN THE KNOW"
        title="Discover the power of the Marma Security mobile app, an essential companion to all Marma Security products."
        description="Discover valuable insights about your network's safety and see detailed statistics about all connected devices. Stay ahead of threats with real-time risk and threat-detection alerts. The Marma Security mobile app simplifies cybersecurity management so you can worry less about keeping your home and business safe!"
      />
    </div>
  );
}
