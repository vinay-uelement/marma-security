import React from 'react';
import { CircleCheck } from 'lucide-react';

const CARD_CLASSES = "bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-xl p-6 md:p-8 shadow-xl shadow-slate-200/30 flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 group";
const TITLE_CLASSES = "text-xl md:text-2xl font-bold font-body text-slate-900 mb-4 border-b border-slate-100 pb-3";

const PARTNER_CARDS = [
  {
    title: "Program Requirements",
    items: [
      "Signed Partnership Agreement",
      "Establish Customer Base",
      "Strong GTM/ Revenue Plan"
    ]
  },
  {
    title: "Marma Support",
    items: [
      "Marketing Support",
      "Enablement (Sales & Technical)",
      "Co-Sell (Select Opportunities)",
      "Technical Support – Tier III"
    ]
  },
  {
    title: "Traditional Resell Pricing",
    text: "Buy Price 25% off list, partner marks up pricing and adds manages service pricing"
  },
  {
    title: "Referral Pricing",
    text: "Partner buys at List from Marma, partner gets 10% commission."
  }
];

export default function PartneringMadeEasy() {
  return (
    <section className="relative w-full md:pt-24 pb-0 flex flex-col items-center overflow-hidden font-body">
      {/* Faded Background Text */}
      <div className="w-full absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center z-0 select-none pointer-events-none max-w-[1440px] overflow-hidden">
        <span
          className="solutions-info-bg-text text-[#e8e8e8]! w-full text-center whitespace-nowrap text-[clamp(18px,6vw,90px)] tracking-[10px] opacity-50"
        >
          Partnering Made Easy!
        </span>
      </div>

      {/* Main Content Container (Style matching SolutionsInfo) */}
      <div className="w-full max-w-[1440px] bg-[#e8e8e8] mx-auto px-6 lg:px-12 flex flex-col py-8 lg:py-16 relative z-10 items-center rounded-sm">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-[70%] relative">
          {PARTNER_CARDS.map((card, index) => (
            <div key={index} className={CARD_CLASSES}>
              <h3 className={TITLE_CLASSES}>
                {card.title}
              </h3>
              {card.items ? (
                <ul className="space-y-3 flex-1 list-disc pl-5 md:pl-6 marker:text-slate-700">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="text-slate-700">
                      <span className="text-base md:text-lg font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
                  {card.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
