import React from 'react';
import HighlightedText from '../global/HighlightedText';

export default function AdvancedArchitecture() {
    return (
        <section className="w-full bg-[#FAFAFA] pt-16 lg:pt-24 pb-20 lg:pb-32 relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* Image Placeholder Block */}
                <div className="w-full max-w-[900px] aspect-[16/9] bg-[#D9D9D9] rounded-2xl md:rounded-[32px] mx-auto mb-12 sm:mb-16 lg:mb-20 shadow-sm flex items-center justify-center">
                    {/* User will add `next/image` component here replacing this placeholder */}
                    <span className="text-gray-500 font-body text-lg">Image Space</span>
                </div>

                {/* Typography Layout */}
                <div className="text-center w-full max-w-[900px] mx-auto">
                    <h2 className="tech-architecture-heading">
                        <HighlightedText
                            text="Advanced cybersecurity"
                            className="font-bold text-[#323232]"
                            imageClassName="bottom-[-20px] md:bottom-[-22px] right-[-20px] md-right-[-30px] -translate-x-1/2"
                        /> architecture that safeguards every connected device seamlessly.
                    </h2>
                </div>

            </div>
        </section>
    );
}
