import React from 'react';

interface StatItem {
    value: string;
    label: string;
    description: string;
}

const stats: StatItem[] = [
    {
        value: "8 million +",
        label: "Verified Sites",
        description: "Protection against dangerous ransomware"
    },
    {
        value: "7.9 Million +",
        label: "Allowed Requests",
        description: "Marma intelligently analyzes traffic and allows safe requests while blocking suspicious activity."
    },
    {
        value: "14000",
        label: "Blocked Requests",
        description: "Marma prevents unauthorized access before threats reach your network."
    },
    {
        value: "27400",
        label: "Blocked Threats",
        description: "Marma stops malware, phishing, and intrusion attempts before they impact your network."
    }
];

export default function StatsSection() {
    return (
        <section className="relative w-full py-0 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/about/background-stats.webp')` }}
                />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20">

                {/* Stats Glass Card */}
                <div className="stats-glass-card p-[10px] md:p-[71px] lg:p-12">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:1176px)]:grid-cols-4 gap-2 md:gap-8 [@media(min-width:1176px)]:gap-10 my-[10px] md:my-0">
                        
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col  ">
                                
                                {/* Value */}
                                <h3 className="stats-value">
                                    {stat.value}
                                </h3>

                                {/* Divider */}
                                <div className="pr-1 mt-4 md:mt-6 mb-1">
                                    <div className="border-b border-[#FFFFFF]"></div>
                                </div>

                                {/* Label */}
                                <p className="stats-label mt-[5px] md:mt-0">
                                    {stat.label}
                                </p>

                                {/* Description */}
                                <p className="stats-desc">
                                    {stat.description}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}