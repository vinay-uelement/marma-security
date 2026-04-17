import React from 'react';
import Image from 'next/image';

const BENEFITS = [
  {
    id: "1",
    title: "Flexible Partnering Model",
    description: "Healthy Margins, Flexible Pricing Models, Easy to work with !"
  },
  {
    id: "4",
    title: "Reduces Manpower Requirements",
    description: "Fewer Engineers required to support large client base!"
  },
  {
    id: "2",
    title: "Improves Profitability",
    description: "25% of the cost of Like solutions, eliminates truck rolls, 15 minutes setup."
  },
  {
    id: "5",
    title: "Faster Time to Value",
    description: "Simple setup allows MSSPs turn up clients quicker"
  },
  {
    id: "3",
    title: "Opens New Markets",
    description: "Pricing opens MSSP services to new markets including remote workers"
  },
  {
    id: "6",
    title: "Tremendous Market Opportunity",
    description: "86 % of SMBs do not have adequate protection"
  }
];

const CARDS = [
  {
    title: "Agile Company",
    description: "We listen to our partners and develop enhancements to the market need"
  },
  {
    title: "Partner First",
    description: "Our GTM is built to scale through trusted MSP and channel ecosystems"
  },
  {
    title: "Technology Pedigree",
    description: "30 years building market leading security solutions\n(Palo Alto Networks, Juniper, etc.)"
  }
];

export default function PartnerBenefits() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 lg:py-24 font-body">
      <div className="w-full max-w-[1440px] px-6 lg:px-12 mx-auto flex flex-col items-center gap-16 lg:gap-20">

        {/* Section Header & Image Placeholder */}
        <div className="w-full max-w-[1100px] flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] text-center font-bold text-[#333333] leading-tight">
            Why Partner With Marma Security?
          </h2>

          <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] bg-[#d9d9d9] rounded-[10px] overflow-hidden">
            <Image
              src="/images/partners/became_a_partner.webp"
              alt="Partnering with Marma Security"
              fill
              className="object-cover"
            />
            {/* Let's Partner Ribbon */}
            <div className="absolute z-10 top-6 md:top-8 right-0 bg-gradient-to-r from-transparent via-red-500 to-red-600 px-4 md:px-8 py-2 md:py-3 flex items-center justify-end w-[220px] md:w-[320px]">
              <span className="text-white font-bold text-lg md:text-[22px] mt-0.5">
                Let’s Partner!
              </span>
            </div>
          </div>
        </div>

        {/* Top Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 lg:gap-y-12 w-full max-w-[1100px]">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex gap-4 md:gap-6 items-start">
              <span className="text-6xl md:text-7xl font-bold text-slate-100 leading-none select-none -mt-1 md:-mt-2">
                {benefit.id}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-[22px] font-bold text-slate-800 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1100px]">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#ebebeb] border border-slate-200 rounded-[14px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                {card.title}
              </h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
