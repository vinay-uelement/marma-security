import React from 'react';
import TechnologyBanner from '@/components/technology/TechnologyBanner';
import IntelligentSecurity from '@/components/technology/IntelligentSecurity';
import AdvancedArchitecture from '@/components/technology/AdvancedArchitecture';
import HighlightedText from '@/components/global/HighlightedText';
import StatsSection from '@/components/about/StatsSection';

export default function TechnologyPage() {
    return (
        <main className="w-full bg-[#FFFFFF] min-h-screen">
            {/* The new dedicated Technology Banner */}
            <TechnologyBanner
                title={
                    <>
                        Built on Enterprise-Grade<br />
                        <HighlightedText
                            text="Security"
                            className="text-[#FFFFFF] font-bold"
                            imageClassName="bottom-[-15px] md:bottom-[-20px] right-[5px]"
                        />
                        {" "}Technology
                    </>
                }
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                backgroundImage="/Technology-banner.png"
                buttonText="Explore"
            />

            {/* The Intelligent Security Features Layout */}
            <IntelligentSecurity />

            {/* The Advanced Architecture Layout Block */}
            <AdvancedArchitecture />
 <StatsSection />
        </main>
    );
}
