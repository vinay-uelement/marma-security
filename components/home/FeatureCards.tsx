"use client";

import React from "react";
import {
  ShieldCheck,
  Mail,
  Cloud,
  Server,
  AlertTriangle,
  FileCheck,
  Bug,
  Search,
  Gauge,
  Share2,
  Bot,
  UserCog,
  RefreshCw,
  MailWarning,
  CloudCog,
  ClipboardList,
  LayoutDashboard,
  ShieldAlert,
  Cpu
} from "lucide-react";

function getArcPath(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) {
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
  const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);
  const outerStart = polarToCartesian(x, y, outerRadius, endAngle);
  const outerEnd = polarToCartesian(x, y, outerRadius, startAngle);
  
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", outerStart.x, outerStart.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, outerEnd.x, outerEnd.y,
    "L", innerEnd.x, innerEnd.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
    "Z"
  ].join(" ");
}

function getSimpleArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const polarToCartesian = (centerX: number, centerY: number, r: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (r * Math.cos(angleInRadians)),
      y: centerY + (r * Math.sin(angleInRadians))
    };
  };
  const start = polarToCartesian(x, y, radius, startAngle);
  const end = polarToCartesian(x, y, radius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

const features = [
  {
    icon: ShieldCheck,
    iconBg: "bg-red-50",
    iconColor: "text-brand-red",
    title: "Endpoint Threat Protection",
    description:
      "AI-powered endpoint protection that proactively detects, prevents, and responds to malware, ransomware, fileless attacks, and suspicious behavior across desktops, laptops, and servers, helping organizations stay protected against modern cyber threats.",
    href: "/technology",
  },
  {
    icon: Mail,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Email Security",
    description:
      "Advanced email security that identifies and blocks phishing, business email compromise, malicious attachments, scam emails, and other email-borne threats before they reach users, reducing risk and improving organizational resilience.",
    href: "/solutions/enterprise",
  },
  {
    icon: Cloud,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Cloud Data Protection",
    description:
      "Continuously monitors cloud storage platforms to identify sensitive data exposure, unauthorized sharing, and compliance risks, enabling organizations to secure critical business information and maintain data governance.",
    href: "/technology",
  },
  {
    icon: Server,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "Network Security Gateways",
    description:
      "Intelligent network security appliances that provide Firewall, Secure Wifi, DNS security, threat prevention, content control, device quarantining and network visibility to protect users, devices, and business networks from cyber threats and unsafe internet activity.",
    href: "/technology",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Scam Protection",
    description:
      "AI-driven scam detection technology that helps users identify and avoid phishing attempts, social engineering attacks, fraudulent websites, malicious messages, and emerging online scams before they cause harm.",
    href: "/solutions/enterprise",
  },
  {
    icon: FileCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Compliance Framework",
    description:
      "A comprehensive compliance management solution that simplifies regulatory readiness by continuously assessing security controls, identifying gaps, tracking remediation efforts, and supporting frameworks such as DPDP, ISO 27001, NIST, CIS, and more.",
    href: "/technology",
  },
];

const outerSegmentsData = [
  { id: 1, title: "Endpoint\nThreat Protection", icon: ShieldCheck },
  { id: 2, title: "Email\nSecurity", icon: Mail },
  { id: 3, title: "Cloud Data\nProtection", icon: Cloud },
  { id: 4, title: "Network Security\nGateways", icon: Server },
  { id: 5, title: "Scam\nProtection", icon: AlertTriangle },
  { id: 6, title: "Compliance\nFramework", icon: FileCheck },
];

const innerSegmentsData = [
  { id: 1, title: "Zero-day\nThreat\nDetection", icon: Bug },
  { id: 2, title: "Real-time\nScam\nDetection", icon: Search },
  { id: 3, title: "Predictive\nRisk\nScoring", icon: Gauge },
  { id: 4, title: "Multi-stage\nAttack\nCo-relation", icon: Share2 },
  { id: 5, title: "AI/ML\nBehavior\nAnomaly\nDetection", icon: Bot },
  { id: 6, title: "Adaptive\nAccess\nPolicies", icon: UserCog },
  { id: 7, title: "Automated\nIncident\nResponses", icon: RefreshCw },
  { id: 8, title: "Email\nThreat\nDetection", icon: MailWarning },
  { id: 9, title: "Cloud Data\nExposure\nAnalysis", icon: CloudCog },
  { id: 10, title: "Compliance360\nmodules", icon: ClipboardList },
  { id: 11, title: "Unified\nManagement\nDashboard", icon: LayoutDashboard },
  { id: 12, title: "SOC\nintegration", icon: ShieldAlert },
];

export default function FeatureCards() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Give a small padding buffer so it doesn't touch the exact edges on small screens
        const availableWidth = entry.contentRect.width;
        setScale(Math.min(1, availableWidth / 1200));
      }
    });
    
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#FAFBFF] py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Original Title untouched */}
        <div className="feature-header text-center mb-12 lg:mb-16">
          <span className="inline-block font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-brand-red font-semibold mb-4">
            Features
          </span>
          <h2 className="font-banner text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.02em] text-[#1A1A2E]">
            Everything You Need to{" "}
            <span className="text-brand-red">Succeed</span>
          </h2>
          <p className="font-body text-[15px] md:text-[17px] text-[#777777] mt-4 max-w-[560px] mx-auto leading-relaxed">
            Powerful features built to streamline your security workflow and
            drive real results.
          </p>
        </div>

        {/* Arch Diagram Section */}
        <div className="w-full pb-16 lg:pb-20 mt-10" ref={containerRef}>
          <div className="flex justify-center w-full">
            <div 
              className="relative"
              style={{ width: `${1200 * scale}px`, height: `${650 * scale}px` }}
            >
              <div 
                className="absolute top-0 left-0 origin-top-left"
                style={{ 
                  width: '1200px', 
                  height: '650px',
                  transform: `scale(${scale})`
                }}
              >
                <svg viewBox="0 0 1200 650" className="absolute inset-0 w-full h-full drop-shadow-sm pointer-events-none overflow-visible">
              <defs>
                <radialGradient id="outerGrad" cx="600" cy="600" r="550" gradientUnits="userSpaceOnUse">
                  <stop offset="60%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#fff0f0" />
                </radialGradient>
                <radialGradient id="innerGrad" cx="600" cy="600" r="320" gradientUnits="userSpaceOnUse">
                  <stop offset="40%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#ffeaea" />
                </radialGradient>
                <linearGradient id="pillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff0000" />
                  <stop offset="100%" stopColor="#c50000" />
                </linearGradient>
                <path id="enterpriseTextPath" d={getSimpleArc(600, 600, 573, -90, 90)} fill="none" stroke="none" />
                <path id="aiTextPath" d={getSimpleArc(600, 600, 344, -90, 90)} fill="none" stroke="none" />
              </defs>

              <path className="arch-base" d="M 20 600 A 580 580 0 0 1 1180 600" fill="none" stroke="#ff0000" strokeWidth="3" opacity="0.8" />
              
              {[-90, -60, -30, 0, 30, 60, 90].map((angle, index) => {
                const x = 600 + 580 * Math.sin(angle * Math.PI / 180);
                const y = 600 - 580 * Math.cos(angle * Math.PI / 180);
                return (
                  <circle 
                    key={`dot-${angle}`} 
                    cx={x} 
                    cy={y} 
                    r="5" 
                    fill="#ffffff" 
                    stroke="#ff0000" 
                    strokeWidth="2.5" 
                    className="arch-node drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]"
                  />
                );
              })}

              {outerSegmentsData.map((_, i) => (
                <path
                  key={`outer-path-${i}`}
                  className="arch-path hover:fill-[#ffdfdf] cursor-pointer"
                  d={getArcPath(600, 600, 380, 550, -90 + i * 30, -90 + (i + 1) * 30)}
                  fill="url(#outerGrad)"
                  stroke="#ffcccc"
                  strokeWidth="1.5"
                />
              ))}

              {innerSegmentsData.map((_, i) => (
                <path
                  key={`inner-path-${i}`}
                  className="arch-path hover:fill-[#ffd4d4] cursor-pointer"
                  d={getArcPath(600, 600, 160, 320, -90 + i * 15, -90 + (i + 1) * 15)}
                  fill="url(#innerGrad)"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
              ))}

              {[-75, -50, -25, 0, 25, 50, 75].map((angle, index) => {
                const x1 = 600 + 40 * Math.sin(angle * Math.PI / 180);
                const y1 = 570 - 40 * Math.cos(angle * Math.PI / 180);
                const x2 = 600 + 90 * Math.sin(angle * Math.PI / 180);
                const y2 = 570 - 90 * Math.cos(angle * Math.PI / 180);
                return (
                  <g key={`node-${angle}`} className="arch-node">
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff0000" strokeWidth="2" strokeLinecap="round" className="opacity-70" />
                    <circle cx={x2} cy={y2} r="4" fill="#ffffff" stroke="#ff0000" strokeWidth="2" className="drop-shadow-[0_0_4px_rgba(255,0,0,0.4)]" />
                  </g>
                );
              })}

              <line className="arch-base" x1="20" y1="600" x2="1180" y2="600" stroke="#ff0000" strokeWidth="1" opacity="0.3" />

              {/* Enterprise Security Platform Circular Pill */}
              <g className="cursor-default group hover:brightness-110">
                {/* Main curved pill background */}
                <path d={getSimpleArc(600, 600, 580, -17, 17)} stroke="url(#pillGradient)" strokeWidth="48" strokeLinecap="round" fill="none" />
                
                {/* Inner glassmorphism highlight */}
                <path d={getSimpleArc(600, 600, 580, -17, 17)} stroke="rgba(255,255,255,0.3)" strokeWidth="46" strokeLinecap="round" fill="none" />
                <path d={getSimpleArc(600, 600, 580, -17, 17)} stroke="url(#pillGradient)" strokeWidth="44" strokeLinecap="round" fill="none" />

                {/* Shield Icon */}
                <ShieldCheck 
                  x={600 + 580 * Math.sin(-14.5 * Math.PI / 180) - 13} 
                  y={600 - 580 * Math.cos(-14.5 * Math.PI / 180) - 13} 
                  width="26" height="26" color="white" 
                  transform={`rotate(-14.5 ${600 + 580 * Math.sin(-14.5 * Math.PI / 180)} ${600 - 580 * Math.cos(-14.5 * Math.PI / 180)})`}
                />

                {/* Curved Text */}
                <text fill="#ffffff" fontSize="22" fontWeight="bold" letterSpacing="0.04em" className="font-title drop-shadow-md pointer-events-none">
                  <textPath href="#enterpriseTextPath" startOffset="51.5%" textAnchor="middle">
                    Enterprise Security Platform
                  </textPath>
                </text>
              </g>

              {/* AI-powered Security Services Circular Pill */}
              <g className="cursor-default group hover:brightness-110">
                {/* Main curved pill background */}
                <path d={getSimpleArc(600, 600, 350, -26, 26)} stroke="url(#pillGradient)" strokeWidth="40" strokeLinecap="round" fill="none" />
                
                {/* Inner glassmorphism highlight */}
                <path d={getSimpleArc(600, 600, 350, -26, 26)} stroke="rgba(255,255,255,0.3)" strokeWidth="38" strokeLinecap="round" fill="none" />
                <path d={getSimpleArc(600, 600, 350, -26, 26)} stroke="url(#pillGradient)" strokeWidth="36" strokeLinecap="round" fill="none" />

                {/* Curved Text with Sparkles */}
                <text fill="#ffffff" fontSize="18" fontWeight="600" letterSpacing="0.03em" className="font-title drop-shadow-md pointer-events-none">
                  <textPath href="#aiTextPath" startOffset="50%" textAnchor="middle">
                    AI-powered Security Services
                  </textPath>
                </text>
              </g>

            </svg>
            
            <div className="arch-pill absolute z-20" style={{ left: '50%', top: `${(570 / 650) * 100}%`, transform: 'translate(-50%, -50%)' }}>
              <div className="relative flex flex-col items-center justify-center w-16 h-16 bg-white rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.25)] border border-[#ffcccc] cursor-default group">
                <div className="absolute inset-0 bg-brand-red/10 rounded-xl"></div>
                <Cpu className="w-8 h-8 text-brand-red mb-0.5 relative z-10" />
                <span className="font-bold text-brand-red text-[14px] leading-none font-title relative z-10">AI</span>
              </div>
            </div>

            {outerSegmentsData.map((data, i) => {
              const angle = -75 + i * 30;
              const r = 460;
              const x = 600 + r * Math.sin(angle * Math.PI / 180);
              const y = 600 - r * Math.cos(angle * Math.PI / 180);
              const Icon = data.icon;
              
              return (
                <div 
                  key={`outer-content-${i}`}
                  className="arch-overlay absolute w-[140px] z-10 pointer-events-none"
                  style={{
                    left: `${(x / 1200) * 100}%`,
                    top: `${(y / 650) * 100}%`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-center group cursor-pointer pointer-events-auto">
                    <Icon className="w-10 h-10 text-brand-red mb-3 drop-shadow-sm" strokeWidth={1.5} />
                    <div className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center text-[13px] font-bold mb-3 shadow-[0_4px_10px_rgba(255,0,0,0.3)] group-hover:shadow-[0_6px_15px_rgba(255,0,0,0.4)]">
                      {data.id}
                    </div>
                    <div className="font-bold text-[#1A1A2E] text-[14px] md:text-[15px] leading-[1.3] whitespace-pre-line font-title group-hover:text-brand-red">
                      {data.title}
                    </div>
                  </div>
                </div>
              );
            })}

            {innerSegmentsData.map((data, i) => {
              const angle = -82.5 + i * 15;
              const r = 265;
              const x = 600 + r * Math.sin(angle * Math.PI / 180);
              const y = 600 - r * Math.cos(angle * Math.PI / 180);
              const Icon = data.icon;
              
              return (
                <div 
                  key={`inner-content-${i}`}
                  className="arch-overlay absolute w-[58px] z-10 pointer-events-none"
                  style={{
                    left: `${(x / 1200) * 100}%`,
                    top: `${(y / 650) * 100}%`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center justify-start text-center group cursor-pointer pointer-events-auto">
                    <Icon className="w-4 h-4 text-brand-red mb-1 opacity-80 group-hover:opacity-100" strokeWidth={2} />
                    <div className="w-[18px] h-[18px] rounded-full bg-brand-red text-white flex items-center justify-center text-[9px] font-bold mb-1 shadow-[0_2px_8px_rgba(255,0,0,0.25)] group-hover:shadow-[0_4px_12px_rgba(255,0,0,0.4)]">
                      {data.id}
                    </div>
                    <div className="font-semibold text-[#1A1A2E] text-[8px] md:text-[8.5px] leading-[1.1] whitespace-pre-line font-title tracking-tight group-hover:text-brand-red">
                      {data.title}
                    </div>
                  </div>
                </div>
              );
            })}

              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32 relative z-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card group bg-white rounded-2xl border border-[#F0F0F0] p-6 lg:p-8 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-[#E0E0E0] cursor-default"
              >
                <div
                  className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:shadow-md`}
                >
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="font-banner text-[18px] md:text-[20px] font-medium text-[#1A1A2E] mb-3 group-hover:text-brand-red">
                  {feature.title}
                </h3>
                <p className="font-body text-[14px] md:text-[15px] text-[#777777] leading-relaxed mb-5">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-brand-red hover:text-brand-red-hover group/link"
                >
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover/link:translate-x-1"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
