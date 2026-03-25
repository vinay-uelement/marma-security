"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    linkedinUrl: "#",
  },
  {
    id: "member-3",
    name: "Ganesh",
    role: "COO & Director",
    image: "/images/about/about-us-team3.webp",
    linkedinUrl: "#",
  },
];

export default function OurTeam() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-[600px] lg:max-w-[700px]">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col h-full rounded-[10px] border border-[#F1F1F1] bg-[#F1F1F1] overflow-hidden p-[16px] group"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/3.5] rounded-[7px] overflow-hidden mb-4 md:mb-5 transition-transform group-hover:scale-[1.01]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, 350px"
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="flex items-end justify-between mt-auto">
              <div className="flex flex-col">
                <h3 className="fl5-3 font-semibold text-text-dark!">
                  {member.name}
                </h3>
                <p className="fl5-2 text-text-muted!">{member.role}</p>
              </div>

              {member.linkedinUrl && (
                <Link
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full bg-white shadow-sm shrink-0 transition-transform hover:scale-[1.05]"
                >
                  <Image
                    src="/images/global/linkedin-vector.svg"
                    alt="LinkedIn"
                    width={20}
                    height={18}
                    className="object-contain"
                  />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
