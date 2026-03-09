'use client'
import React from 'react';
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
        image: "/about-us-team1.png",
        linkedinUrl: "#"
    },
    {
        id: "member-2",
        name: "Ganesh",
        role: "COO & Director",
        image: "/about-us-team2.png",
        linkedinUrl: "#"
    },
    {
        id: "member-3",
        name: "Ganesh",
        role: "COO & Director",
        image: "/about-us-team3.png",
        linkedinUrl: "#"
    },
    {
        id: "member-4",
        name: "Ganesh",
        role: "COO & Director",
        image: "/about-us-team4.png",
        linkedinUrl: "#"
    }
];

export default function OurTeam() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ">
            {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col  rounded-[16px] md:rounded-[10px] border border-[#F1F1F1] bg-[#F1F1F1] overflow-hidden p-3 md:p-4">
                    {/* Photo inside card */}
                    <div className="relative w-full aspect-[3/3.5] rounded-[12px] md:rounded-[14px] overflow-hidden mb-4 md:mb-5">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Info Row: Name + Role on left, LinkedIn on right */}
                    <div className="flex items-end justify-between px-1 pb-1">
                        <div className="flex flex-col">
                            <h3 className="font-body font-semibold text-[16px] md:text-[20px] lg:text-[22px] leading-[24px] md:leading-[28px] text-[#323232]">
                                {member.name}
                            </h3>
                            <p className="font-body font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[22px] text-[#666666]">
                                {member.role}
                            </p>
                        </div>

                        {/* LinkedIn Icon */}
                        {member.linkedinUrl && (
                            <Link
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-full bg-white shadow-sm shrink-0"
                            >
                                <Image
                                    src="/linkedin-vector.png"
                                    alt="LinkedIn"
                                    width={18}
                                    height={18}
                                    className="object-contain w-full h-full"
                                />
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
