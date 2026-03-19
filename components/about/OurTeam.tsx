'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    linkedinUrl?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: "member-1",
        name: "Ganesh",
        role: "COO & Director",
        image: "/images/about/about-us-team1.webp",
        linkedinUrl: "#"
    },
    {
        id: "member-2",
        name: "Ganesh",
        role: "COO & Director",
        image: "/images/about/about-us-team2.webp",
        linkedinUrl: "#"
    },
    {
        id: "member-3",
        name: "Ganesh",
        role: "COO & Director",
        image: "/images/about/about-us-team3.webp",
        linkedinUrl: "#"
    },
    {
        id: "member-4",
        name: "Ganesh",
        role: "COO & Director",
        image: "/images/about/about-us-team4.webp",
        linkedinUrl: "#"
    },
    {
        id: "member-5",
        name: "Ganesh",
        role: "COO & Director",
        image: "/images/about/about-us-team5.webp",
        linkedinUrl: "#"
    },
        {
        id: "member-6",
        name: "Ganesh",
        role: "COO & Director",
        image: "/images/about/about-us-team1.webp",
        linkedinUrl: "#"
    }
];

export default function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ITEMS_PER_PAGE = 4;
    
    // Determine the max starting index we can have before we hit the end of the array
    const maxIndex = Math.max(0, teamMembers.length - ITEMS_PER_PAGE);

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    // Calculate which cards are currently visible
    const visibleMembers = teamMembers.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

    // Dynamic progress bar calculation (based on how many items we have scrolled relative to the total length)
    const progressPercentage = teamMembers.length > 0
        ? Math.min(((currentIndex + ITEMS_PER_PAGE) / teamMembers.length) * 100, 100)
        : 100;

    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 min-h-[400px]">
                {visibleMembers.map((member, index) => (
                    <div key={`${member.id}-${index + currentIndex}`} className="flex flex-col rounded-[10px]  border border-[#F1F1F1] bg-[#F1F1F1] overflow-hidden p-[16px]  animate-fade-in group">
                        {/* Photo inside card */}
                        <div className="relative w-full aspect-[3/3.5] rounded-[7px]  overflow-hidden mb-4 md:mb-5 transition-transform group-hover:scale-[1.01]">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                                className="object-cover object-top"
                            />
                        </div>

                        {/* Info Row: Name + Role on left, LinkedIn on right */}
                        <div className="flex items-end justify-between px-1 pb-1 mt-auto">
                            <div className="flex flex-col">
                                <h3 className="about-team-name">
                                    {member.name}
                                </h3>
                                <p className="about-team-role">
                                    {member.role}
                                </p>
                            </div>

                            {/* LinkedIn Icon */}
                            {member.linkedinUrl && (
                                <Link
                                    href={member.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full bg-white shadow-sm shrink-0 transition-transform hover:scale-[1.05]"
                                >
                                    <Image
                                        src="/images/global/linkedin-vector.png"
                                        alt="LinkedIn"
                                        width={20}
                                        height={18}
                                        className="object-contain w-full h-full"
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Carousel Navigation block */}
            {teamMembers.length > ITEMS_PER_PAGE && (
                <div className="w-full flex justify-between items-center mt-12 md:mt-20 pt-3 md:pt-0 gap-6 md:gap-12">
                    
                    {/* Progress Bar Container - dynamically flexes to fill available space besides buttons */}
                    <div className="flex-grow relative h-[3px]">
                        {/* Inactive Gray Track */}
                        <div className="absolute inset-0 w-full h-full bg-[#E5E5E5] rounded-full z-10" />
                        
                        {/* Active Red Progress Bar */}
                        <div
                            className="absolute left-0 top-0 h-full bg-[#FF0000] z-20 transition-all duration-300 ease-in-out rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>

                    {/* Carousell arrows layout space block */}
                    <div className="flex justify-end gap-3 shrink-0">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors
                                ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
                        >
                            {/* Left Arrow Icon */}
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                <path d="M1 9L5 5L1 1" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === maxIndex}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f4f4] flex flex-shrink-0 items-center justify-center transition-colors 
                                ${currentIndex === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
                        >
                            {/* Right Arrow Icon */}
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L5 5L1 1" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
