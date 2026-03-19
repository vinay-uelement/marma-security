"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SecurityCard {
  title: string;
  description: string;
  number: string;
  image?: string;
  linkHref?: string;
}

const cards: SecurityCard[] = [
  {
    title: "PhishBlock",
    description: "Protection against phishing attacks",
    number: "01",
    linkHref: "#",
  },
  {
    title: "NetImmunity",
    description: "Protection against network-based attacks",
    number: "02",
    linkHref: "#",
  },
  {
    title: "MalwareGuard",
    description: "Protection against dangerous malware and spyware",
    number: "03",
    image: "/images/features/Malware-guard.webp",
    linkHref: "#",
  },
  {
    title: "RansomGuard",
    description: "Protection against dangerous ransomware",
    number: "04",
    linkHref: "#",
  },
  {
    title: "SpyShield",
    description: "Protection against spyware and tracking",
    number: "05",
    linkHref: "#",
  },
  {
    title: "DDoSGuard",
    description: "Protection against distributed denial of service attacks",
    number: "06",
    linkHref: "#",
  },
];

const CARDS_PER_PAGE = 4;

export default function SecurityCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = cards.length - CARDS_PER_PAGE + 1;

  const start = currentPage - 1;
  const visibleCards = cards.slice(start, start + CARDS_PER_PAGE);

  const getPaginationItems = (): (number | "...")[] => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) return [1, 2, 3, "..."];
    if (currentPage === totalPages)
      return ["...", totalPages - 2, totalPages - 1, totalPages];

    // Middle: show prev, current, next with ellipsis on sides
    const items: (number | "...")[] = [];
    if (currentPage > 2) items.push("...");
    items.push(currentPage - 1, currentPage, currentPage + 1);
    if (currentPage < totalPages - 1) items.push("...");
    return items;
  };

  return (
    <section className="w-full bg-[#FAFAFA] pt-0 lg:pt-40 pb-24 relative z-0">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="w-full h-[1px] px-10 bg-[#E5E5E5] mb-16 lg:mb-20" />

        <div className="text-center mb-16 md:mb-24 relative z-10">
          <h2 className="home-cards-heading">
            Robust cybersecurity at an affordable price
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
          {visibleCards.map((card, index) => (
            <div
              key={`${card.number}-${index}`}
              className="flex flex-col h-full relative"
            >
              {/* Top Area: Number or Image */}
              <div className="flex items-end justify-center h-[120px] md:h-[140px] mb-6 relative w-full">
                {card.image ? (
                  <div className="absolute bottom-0 w-full aspect-[4/3] max-h-[140px] rounded-[12px] overflow-hidden bg-gray-200">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span
                    className="font-title font-bold leading-none text-transparent"
                    style={{
                      WebkitTextStroke: "2px #DED8D8",
                      fontSize: "clamp(100px, 12vw, 150px)",
                      userSelect: "none",
                    }}
                  >
                    {card.number}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow bg-[#F3F3F3] border border-[#E5E5E5] rounded-[24px] p-[24px] md:p-[32px] min-h-[307px]">
                <h3 className="security-card-title mb-[8px]">{card.title}</h3>
                <p className="security-card-desc flex-grow mb-[32px]">
                  {card.description}
                </p>
                <Link
                  href={card.linkHref || "#"}
                  className="inline-flex items-center gap-4 group mt-auto w-fit pb-2"
                >
                  <span className="security-card-link-text text-[#FF0000] group-hover:text-[#E10000] transition-colors">
                    Explore
                  </span>
                  <span className="text-[#FF0000] group-hover:text-[#E10000] transition-transform group-hover:translate-x-1 flex items-center justify-center translate-y-[2px]">
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            {/* Left arrow — hidden on first page */}
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                className="w-9 h-9 flex items-center justify-center text-[#989898] hover:text-[#323232] transition-colors rotate-180"
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {getPaginationItems().map((item, i) =>
              item === "..." ? (
                <span
                  key={`ellipsis-${i}`}
                  className="px-1 text-[#989898] font-title text-[16px]"
                >
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item as number)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-title text-[16px] transition-colors
            ${
              currentPage === item
                ? "text-[#FF0000] font-semibold"
                : "text-[#989898] hover:text-[#323232]"
            }`}
                >
                  {item}
                </button>
              ),
            )}

            {/* Right arrow — hidden on last page */}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="w-9 h-9 flex items-center justify-center text-[#989898] hover:text-[#323232] transition-colors"
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
