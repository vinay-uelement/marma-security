import React from 'react';
import SolutionsInfo from '../solutions/SolutionsInfo';

export default function HomeSolutionsInfo() {
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            {/* 
              We reuse the SolutionsInfo component but set imagePosition="right"
              so the image displays on the right side and text on the left.
              You can easily change the imageSrc, title, and description here later!
            */}
            <SolutionsInfo
                imagePosition="right"
                imageSrc="/images/home/solution-info-homepage.webp"
                bgText="STAY IN THE KNOW"
                title="Discover the power of the Marma Security mobile app, an essential companion to all Marma Security products."
                description="Discover valuable insights about your network's safety and see detailed statistics about all connected devices. Stay ahead of threats with real-time risk and threat-detection alerts. The Marma Security mobile app simplifies cybersecurity management so you can worry less about keeping your home and business safe!"
            />
        </div>
    );
}
