
'use client'
import Image from "next/image";
import Link from "next/link";
import ProductShowcase from "@/components/product/ProductShowcase";
import Banner from "@/components/global/Banner";
import HighlightedText from "@/components/global/HighlightedText";

export default function ProductPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FFFFFF] pb-[100px]">
            {/* Hero Banner Section */}
            <Banner
                backgroundImage="/product-banner.png" // Expects the red line decorative image here
                heightVariant="900"
                title={
                    <>
                        Security <HighlightedText text="Products" /><br className="hidden lg:block" />
                        for Every Network
                    </>
                }
                titleClassName="font-banner font-normal text-[36px] md:text-[50px] lg:text-[60px] leading-[1.2] tracking-[-0.01em] text-white"
                subtitle={
                    <>
                        Marma offers a range of intelligent cybersecurity<br className="hidden xl:block" />
                        products designed to protect entire networks with ease.<br className="hidden xl:block" />
                        Built for both homes and businesses, our solutions<br className="hidden xl:block" />
                        deliver enterprise-grade security without the complexity<br className="hidden xl:block" />
                        of traditional tools.
                    </>
                }
                subtitleClassName="font-body font-light text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6] md:leading-[35px] text-[#E0E0E0] max-w-[650px] mt-6"
                rightContent={
                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 items-center justify-center lg:justify-end w-full h-full lg:translate-x-[-20px] z-30 pt-12 lg:pt-0">

                        {/* SafeHome Card */}
                        <Link href="#safehome" className="group relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] transition-transform hover:-translate-y-2 duration-300">
                            <Image
                                src="/right-side-product-banner1.png"
                                alt="SafeHome Product"
                                width={340}
                                height={420}
                                className="object-contain w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </Link>

                        {/* SafeBiz Card */}
                        <Link href="#safebiz" className="group relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] transition-transform hover:-translate-y-2 duration-300">
                            <Image
                                src="/right-side-product-banner2.png"
                                alt="SafeBiz Product"
                                width={340}
                                height={420}
                                className="object-contain w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </Link>
                    </div>
                }
            />

            {/* Product Showcases Content Area */}
            <div className="flex-grow max-w-[1440px] w-full mx-auto px-6 lg:px-12 pt-20">

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
            </div>
        </main>
    );
}
