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
        <section className="w-full mt-20 lg:mt-32">
            <div className="mb-8">
                <h2 className="ps-section-name">{productName}</h2>
                <div className="w-[130px] h-[6px] bg-[#FF0000]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* Main Feature Card (Left Column) */}
                <div className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 lg:p-12 flex flex-col relative h-full">
                    {/* Link Icon */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-full bg-[#6C6C6C] flex items-center justify-center cursor-pointer z-10">
                        <Image src="/product-arrow.png" alt="Link" width={26} height={18} className="object-contain w-[14px] md:w-[26px]" />
                    </div>

                    {/* Image Area */}
                    <div className="w-full flex justify-center lg:justify-start mb-8 lg:mb-12 mt-4 md:mt-0">
                        {mainFeature.image && (
                            <Image
                                src={mainFeature.image}
                                alt={mainFeature.title}
                                width={368}
                                height={315}
                                className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] w-[75%] sm:w-[60%] md:w-full max-w-[368px] h-auto lg:h-[315px]"
                                priority
                            />
                        )}
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col justify-between items-center lg:items-start text-center lg:text-left mt-auto">
                        <h3 className="ps-feature-heading uppercase mb-4">
                            {mainFeature.title}
                        </h3>
                        <div className="w-[80px] h-[6px] bg-[#FF0000] mb-6" />
                        <p className="ps-feature-text text-left">
                            {mainFeature.description}
                        </p>
                    </div>
                </div>

                {/* Sub Features Column (Right Column) */}
                <div className="flex flex-col gap-6">
                    {subFeatures.map((feat, idx) => (
                        <div key={idx} className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center flex-1 h-full">
                            <div className="w-full md:w-[60%] order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                                <h3 className="ps-feature-heading uppercase mb-4">
                                    {feat.title}
                                </h3>
                                <div className="w-[80px] h-[6px] bg-[#FF0000] mb-6" />
                                <p className="ps-feature-text text-left">
                                    {feat.description}
                                </p>
                            </div>
                            <div className="w-full md:w-[40%] flex items-center justify-center h-full order-1 md:order-2 mb-4 md:mb-0">
                                {feat.image ? (
                                    <Image
                                        src={feat.image}
                                        alt={feat.title}
                                        width={400}
                                        height={400}
                                        className="object-contain drop-shadow-xl w-[60%] sm:w-[50%] md:w-full h-auto"
                                    />
                                ) : (
                                    <div className="w-full h-[200px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 font-body">Image Asset Required</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
