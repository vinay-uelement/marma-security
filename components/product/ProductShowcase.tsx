import Image from 'next/image';

export interface ShowcaseFeature {
    title: string;
    description: string;
    image?: string;
}

export interface ProductShowcaseProps {
    productName: string;
    mainFeature: ShowcaseFeature;
    subFeatures: ShowcaseFeature[];
}

export default function ProductShowcase({ productName, mainFeature, subFeatures }: ProductShowcaseProps) {
    return (
        <section className="w-full mt-10 lg:mt-20">

            {/* Header */}
            <div className="mb-10 text-center md:text-left">
                <h2 className="prod-showcase-name">
                    {productName}
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* Main Feature Card (Left Column) */}
                <div className="bg-[#F7F7F7] rounded-[24px] flex flex-col relative h-full overflow-hidden border border-[#E5E5E5]/50 flex-1">

                    {/* Top Link Icon */}
                    <div className="absolute top-6 right-6 w-[40px] h-[40px] rounded-full bg-[#EBEBEB] flex items-center justify-center cursor-pointer z-30 hover:bg-[#DFDFDF] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Image Area */}
                    <div className="w-full flex-grow flex items-center justify-center px-8 relative z-20 pb-0 pt-16 md:pt-0 -mb-[40px] md:-mb-[60px] lg:-mb-[80px]">
                        {mainFeature.image && (
                            <Image
                                src={mainFeature.image}
                                alt={mainFeature.title}
                                width={310}
                                height={376}
                                className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] w-[85%] sm:w-[70%] md:w-[60%] lg:w-[75%] max-w-[368px] h-auto"
                                priority
                            />
                        )}
                    </div>

                    {/* Content Area */}
                    <div className="bg-[#EDEDED] px-6 sm:px-10 pb-10 md:pb-12 pt-[60px] md:pt-[80px] lg:pt-[60px] flex flex-col justify-end items-center text-center mt-auto w-full relative z-10">
                        <h3 className="prod-showcase-main-title mb-4 w-full">
                            {mainFeature.title}
                        </h3>
                        <p className="prod-showcase-main-desc max-w-[420px]">
                            {mainFeature.description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 h-full flex-1">
                    {subFeatures.map((feat, idx) => (
                        <div key={idx} className="bg-[#FAFAFA] border border-[#E5E5E5]/50 rounded-[24px] flex flex-col flex-1 overflow-hidden group h-full relative">
                            {/* Bottom Grey Strip */}
                            <div className="absolute bottom-0 left-0 w-full h-[40px] bg-[#EEEEEE] z-0" />

                            <div className="flex flex-col md:flex-row w-full h-full relative z-10 items-stretch">
                                {/* Left Content */}
                                <div className="w-full md:w-[60%] flex flex-col justify-center md:items-start items-center text-center md:text-left pt-8 md:pt-0 px-8 md:pl-10 pb-2 z-20">
                                    <h3 className="prod-showcase-sub-title mb-4">
                                        {feat.title}
                                    </h3>
                                    <p className="prod-showcase-sub-desc">
                                        {feat.description}
                                    </p>
                                </div>

                                {/* Right Image */}
                                <div className="w-full md:w-[40%] flex items-end md:items-center justify-center relative min-h-[180px] md:min-h-[220px] mt-2 md:mt-15 pr-0 pb-0 z-30">
                                    {feat.image && (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                            src={feat.image}
                                            alt={feat.title}
                                            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] w-auto h-auto max-w-[80%] md:max-w-full max-h-[200px] md:max-h-[250px] relative z-30"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
