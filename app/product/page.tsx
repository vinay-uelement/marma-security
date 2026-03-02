
import Image from "next/image";
import ProductShowcase from "@/components/product/ProductShowcase";

export default function ProductPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 pb-[100px] bg-[#FFFFFF]">
            <main className="flex-grow max-w-[1440px] w-full mx-auto px-6 lg:px-12">

                {/* Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 pt-12 md:pt-24 items-stretch">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center lg:justify-between lg:pr-8 mb-12 lg:mb-0 mt-4 lg:mt-14 items-center lg:items-start text-center lg:text-left text-balance">
                        <h1 className="prod-hero-title text-[#000000] mb-8 lg:mb-16 max-w-[400px]">
                            Security <span className="text-[#FF0000]">Products</span> for<br className="hidden lg:inline" /> Every Network
                        </h1>
                        <p className="prod-hero-desc max-w-[420px] lg:max-w-[450px] pb-4">
                            Marma offers a range of intelligent cybersecurity products designed to protect entire networks with ease. Built for both homes and businesses, our solutions deliver enterprise-grade security without the complexity of traditional tools.
                        </p>
                    </div>

                    {/* Middle Column: SafeHome Card */}
                    <div className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 pb-10 flex flex-col items-center relative cursor-pointer">
                        {/* Link Icon */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-full bg-[#6C6C6C] flex items-center justify-center">
                            <Image
                                src="/product-arrow.png"
                                alt="Arrow"
                                width={26}
                                height={26}
                                className="object-contain w-[14px] md:w-[26px]"
                            />
                        </div>

                        {/* Product Image */}
                        <div className="flex-grow flex items-center justify-center w-full mt-8 md:mt-12 mb-6 md:mb-8 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                            <Image
                                src="/product1safehome.png"
                                alt="SafeHome Device"
                                width={266}
                                height={311}
                                className="object-contain drop-shadow-2xl w-[60%] sm:w-[50%] md:w-full max-w-[266px] h-auto lg:h-[311px]"
                                priority
                            />
                        </div>

                        {/* Product Title */}
                        <h3 className="font-body font-semibold text-[26px] md:text-[32px] leading-[34px] text-[#323232]">
                            SafeHome
                        </h3>
                    </div>

                    {/* Right Column: SafeBiz Card */}
                    <div className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 pb-10 flex flex-col items-center relative cursor-pointer">
                        {/* Link Icon */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-full bg-[#6C6C6C] flex items-center justify-center z-10">
                            <Image
                                src="/product-arrow.png"
                                alt="Arrow"
                                width={26}
                                height={26}
                                className="object-contain w-[14px] md:w-[26px]"
                            />
                        </div>

                        {/* Product Image */}
                        <div className="flex-grow flex items-center justify-center w-full mt-8 md:mt-12 mb-6 md:mb-8 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] z-10">
                            <Image
                                src="/product2biz.png"
                                alt="SafeBiz Device"
                                width={266}
                                height={311}
                                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] w-[60%] sm:w-[50%] md:w-full max-w-[266px] h-auto lg:h-[311px]"
                            />
                        </div>

                        {/* Product Title */}
                        <h3 className="font-body font-semibold text-[26px] md:text-[32px] leading-[34px] text-[#323232] z-10">
                            SafeBiz
                        </h3>
                    </div>

                </section>

                <div className="pb-32 max-sm:pb-2">
                    {/* SafeHome Product Showcase */}
                    <ProductShowcase
                        productName="SafeHome"
                        mainFeature={{
                            title: "CYBERSECURITY PROTECTION",
                            description: "SafeBiz Security Gateway protects all internet-connected devices on your network from phishing, ransomware, malware, IoT/Network attacks, and the latest cyber threats.",
                            image: "/product1safehome.png"
                        }}
                        subFeatures={[
                            {
                                title: "DATA PROTECTION",
                                description: "SafeHome protects all connected devices on your network from cyberattacks targeting your financial and personal data, safeguarding your privacy and protecting your family on the internet.",
                                image: "/data-protect-safehome.png" // Asset not provided yet
                            },
                            {
                                title: "SECURE SMART HOME",
                                description: "SafeHome protects all smart devices in your smart home connected to your wifi network such as cameras, digital doorlock, appliances, your car and protects these sensitive devices from cyber attacks.",
                                image: "/securehome-safehome.png" // Asset not provided yet
                            }
                        ]}
                    />

                    {/* SafeBiz Product Showcase */}
                    <ProductShowcase
                        productName="SafeBiz"
                        mainFeature={{
                            title: "ENTERPRISE SECURITY",
                            description: "SafeBiz provides robust protection for enterprise networks, shielding sensitive business data and infrastructure from advanced persisting threats and unauthorized access.",
                            image: "/product2biz.png"
                        }}
                        subFeatures={[
                            {
                                title: "CLOUD PROTECTION",
                                description: "Ensure your cloud workloads and remote environments remain inaccessible to attackers with real-time continuous monitoring and automated threat mitigation.",
                                image: "/customer-safebiz.png" // Asset not provided yet
                            },
                            {
                                title: "ZERO TRUST ARCHITECTURE",
                                description: "Implement strict access controls and verify every request regardless of origin, protecting your endpoints with industry-leading zero trust frameworks.",
                                image: "/securehome-safehome.png" // Asset not provided yet
                            }
                        ]}
                    />
                </div>
            </main>
        </div>
    );
}
