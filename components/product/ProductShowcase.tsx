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
        <section className="w-full mt-24 lg:mt-32">
            <div className="mb-8">
                <h2 className="ps-section-name">{productName}</h2>
                <div className="w-[100px] h-[3px] bg-[#FF0000]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* Main Feature Card (Left Column) */}
                <div className="bg-[#F1F1F1] rounded-lg p-8 lg:p-12 flex flex-col relative h-full">
                    {/* Link Icon */}
                    <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-[46px] h-[46px] rounded-full bg-[#6C6C6C] flex items-center justify-center cursor-pointer z-10">
                        <Image src="/product-arrow.png" alt="Link" width={26} height={18} className="object-contain" />
                    </div>

                    {/* Image Area */}
                    <div className="w-full flex justify-start mb-8 lg:mb-12">
                        {mainFeature.image && (
                            <Image
                                src={mainFeature.image}
                                alt={mainFeature.title}
                                width={368}
                                height={315}
                                className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] w-[368px] h-[315px]"
                                priority
                            />
                        )}
                    </div>

                    {/* Content Area */}
                    <div>
                        <h3 className="ps-feature-heading uppercase mb-4">
                            {mainFeature.title}
                        </h3>
                        <div className="w-[60px] h-[3px] bg-[#FF0000] mb-6" />
                        <p className="ps-feature-text">
                            {mainFeature.description}
                        </p>
                    </div>
                </div>

                {/* Sub Features Column (Right Column) */}
                <div className="flex flex-col gap-6">
                    {subFeatures.map((feat, idx) => (
                        <div key={idx} className="bg-[#F1F1F1] rounded-lg p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center flex-1 h-full">
                            <div className="flex-1 w-full order-2 md:order-1">
                                <h3 className="ps-feature-heading uppercase mb-4 lg:max-w-[200px]">
                                    {feat.title}
                                </h3>
                                <div className="w-[60px] h-[3px] bg-[#FF0000] mb-6" />
                                <p className="ps-feature-text">
                                    {feat.description}
                                </p>
                            </div>
                            <div className="flex-1 w-full flex items-center justify-center min-h-[200px] order-1 md:order-2">
                                {feat.image ? (
                                    <Image
                                        src={feat.image}
                                        alt={feat.title}
                                        width={250}
                                        height={250}
                                        className="object-contain drop-shadow-xl max-h-[250px] w-auto"
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
