import DecorativeLine from "@/components/home/DecorativeLine";
import SpecificationProductCard, {
  SpecificationProductItem,
} from "../SpecificationProductCard";
import ManagementProductCard from "../ManagementProductCard";
import EndpointProductCard from "../EndpointProductCard";
import {
  productDecoratedSectionClassName,
  productHalfSectionTitleClassName,
  productSectionClassName,
  productSectionTitleClassName,
} from "./sectionSpacing";

const enterpriseDescription =
  "SafeEnterprise protects all connected devices on your network from cyberattacks targeting your financial and business data, helping secure privacy, continuity, and connected operations across the office.";

const enterprise200Specifications: SpecificationProductItem[] = [
  { label: "Form Factor", value: "1U Rack Mounted" },
  { label: "Throughput", value: "2 Gbps" },
  { label: "WAN Ports", value: "2 x 2.5 Gbps" },
  { label: "LAN Ports", value: "10 x 1 Gbps (Ethernet / PoE / SFP options)" },
  { label: "Integrated Wi-Fi", value: "Wi-Fi 6E / 7" },
  { label: "Recommended Users", value: "Up to 200" },
];

const enterprise400Specifications: SpecificationProductItem[] = [
  { label: "Form Factor", value: "2U Rack Mounted" },
  { label: "Throughput", value: "10 Gbps" },
  { label: "WAN Ports", value: "1 x 10 Gbps, 2 x 2.5 Gbps" },
  { label: "LAN Ports", value: "24 x 1 Gbps (Ethernet / PoE / SFP options)" },
  { label: "Integrated Wi-Fi", value: "Wi-Fi 6E / 7" },
  { label: "Recommended Users", value: "Up to 400" },
];

const safeRemoteFirewallSpecifications: SpecificationProductItem[] = [
  { label: "Form Factor", value: "Table-top / Wall-mounted" },
  { label: "Throughput", value: "1 Gbps" },
  { label: "WAN Ports", value: "1 x 2.5 Gbps" },
  { label: "LAN Ports", value: "4 x 1 Gbps (Ethernet)" },
  { label: "Integrated Wi-Fi", value: "Wi-Fi 5 / 6E" },
  { label: "Recommended Users", value: "Up to 64" },
];

export default function EnterpriseSolutions({ products = [] }: { products?: any[] }) {
  const getProduct = (searchString: string) => {
    return products.find((p: any) =>
      (p.name || p.title || p.productName || "")?.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const fallbackProducts = [
    {
      id: "safeenterprise-400",
      title: "SafeEnterprise 400 | Regional Office / Campus Security",
      description: enterpriseDescription,
      image: "/images/product/SafeEnterprise4001.webp",
      imageAlt: "SafeEnterprise 400 regional office and campus security device",
      specifications: enterprise400Specifications,
    },
    {
      id: "safeenterprise-200",
      title: "SafeEnterprise 200 | Branch Office Security",
      description: enterpriseDescription,
      image: "/images/product/SafeEnterprise2001.webp",
      imageAlt: "SafeEnterprise 200 branch office security device",
      specifications: enterprise200Specifications,
    },
    {
      id: "saferemote",
      title: "SafeEnterprise 100 | Remote Worker Security",
      description: enterpriseDescription,
      image: "/images/product/Frame 209.webp",
      imageAlt: "SafeRemote Firewall remote worker security device",
      specifications: safeRemoteFirewallSpecifications,
    },
  ];

  const deviceProducts = products.filter((p: any) => {
    const cat = p.category?.toLowerCase() || '';
    return cat === 'enterprise' || cat === 'enterprisesolutions' || cat === 'enterprise-solutions';
  });

  const displayProducts = deviceProducts.length > 0 ? deviceProducts : fallbackProducts;

  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <div className={productSectionTitleClassName}>Security Gateways</div>

      {displayProducts.map((prod: any, idx: number) => {
        const isSecond = idx === 1;
        const isAfterSecond = idx > 1;

        return (
          <div key={prod.id || idx}>
            {/* Only show the decorative line before the second item */}
            {isSecond && (
              <div className="relative mb-2 md:mb-8 w-screen left-1/2 -translate-x-1/2">
                <div className="w-[500px] md:w-[600px] lg:w-[1000px]">
                  <DecorativeLine
                    viewBox="0 0 1500 80"
                    points="0,40 310,40"
                    dots={[{ cx: 310, cy: 40, rippleCount: 3 }]}
                    className="w-full h-auto"
                    animationDuration={2.4}
                  />
                </div>
              </div>
            )}

            <div id={prod.id || `enterprise-item-${idx}`} className={isAfterSecond ? "mt-2 sm:mt-4 lg:mt-10 xl:mt-12" : ""}>
              <SpecificationProductCard
                title={prod.name || prod.title || "Enterprise Security Device"}
                descript={prod.description || enterpriseDescription}
                image={prod.image || "/images/product/SafeEnterprise2001.webp"}
                imageAlt={prod.imageAlt || prod.name || prod.title || "Enterprise security device"}
                specification={
                  prod.keyCapabilities
                    ? prod.keyCapabilities.map((c: any) => ({ label: c.title, value: c.description }))
                    : prod.specifications || enterprise200Specifications
                }
              />
            </div>
          </div>
        );
      })}

      <div className={productDecoratedSectionClassName}>
        <div className="flex flex-col w-[50%] sm:w-[40%] min-[901px]:w-[35%] ml-auto pointer-events-none z-0">
          <DecorativeLine
            viewBox="0 0 500 80"
            points="-3000,40 200,40"
            dots={[{ cx: 200, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto scale-x-[-1]"
            dotRadius={6}
            animationDuration={2.5}
          />
          <DecorativeLine
            viewBox="0 0 500 120"
            points="150,20 210,90 3000,90"
            dots={[{ cx: 150, cy: 20, rippleCount: 4, rippleBaseDelay: 0.9 }]}
            className="w-full h-auto -mt-10 md:-mt-24"
            dotRadius={7}
            animationDuration={3}
          />
        </div>

        <div className={productSectionTitleClassName}>Management Platform</div>
        <div className="max-md:px-6 md:px-12">
          <ManagementProductCard
            title="Enterprise Management Platform"
            description="Cloud-based or Private Data Center hosted platform for centrally managing Security Gateways, Endpoint Protection, and Cloud Services across the enterprise."
            image="/images/product/software/firewallDashboard.webp"
            imageAlt="Enterprise Management Platform Screenshot"
          />
        </div>
      </div>

      <div className="max-md:px-6">
        <div className={productSectionClassName}>
          <div className="flex flex-col gap-8 lg:flex-col lg:gap-6">
            <div className="flex flex-col h-full">
              <div className={productHalfSectionTitleClassName}>
                Endpoint Protection Software
              </div>
              <div className="md:px-12">
                <EndpointProductCard
                  name="Agent Software for Windows"
                  tagline="24×7 Endpoint Protection"
                  primaryFeature=""
                  features={[
                    "Advanced Deep Packet Inspection for Threat protection",
                    "Protects from phishing, ransomware, malware, and data breaches",
                    "Updated automatically to protect from latest threats",
                    "DNS Filtering",
                    "DNS Security",
                    "URL Filtering",
                    "Scam Protection",
                    "Data Loss Prevention",
                    "FW & Anti-Virus Integration",
                  ]}
                  image="/images/product/software/marmaAgent.webp"
                />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className={productHalfSectionTitleClassName}>
                Cloud Security Services
              </div>
              <div className="md:px-12">
                <EndpointProductCard
                  name="Email Security Service"
                  tagline="Enterprise Email Security"
                  subTitle="Stop Email Scams Before They Reach Your Inbox"
                  primaryFeature="Email remains a prime target for cybercriminals due to its widespread use. Our AI-powered Email Security platform scans every incoming email using multiple advanced LLMs to detect phishing, fraud, and social engineering attempts in real time. Suspicious emails are automatically isolated into a dedicated Scam folder, keeping your users protected without disrupting their workflow."
                  features={[
                    "Blocks 0-Day Phishing Attacks",
                    "Trusted by Growing Enterprises",
                    "Multi-LLM AI Detection Engine",
                    "Secure SaaS Architecture",
                    "Continuous AI Learning & Updates",
                    "Detects Zero-Day Social Engineering Patterns",
                  ]}
                  image="/images/product/software/email-Protection.webp"
                />
                <div className="mt-8" />
                <EndpointProductCard
                  name="Cloud Data Protection Service"
                  tagline="Enterprise Data Security"
                  subTitle="Stop Data Leaks Before They Become Breaches"
                  primaryFeature="Our AI-powered Data Protection platform continuously scans your organization’s cloud drives to identify how sensitive documents are being shared. Detect files exposed externally, shared across the organization, or accessible via public links and take control before data leaves your perimeter."
                  features={[
                    "Full Visibility Across Shared Documents",
                    "Real-Time Exposure Detection",
                    "Protects Sensitive & Confidential Data",
                    "Seamless SaaS Deployment",
                    "Built for Enterprise Data Security",
                    "Reduces Data Exposure Surface",
                    "Supports Compliance & Governance",
                    "Enterprise-Grade Security Controls",
                  ]}
                  image="/images/product/software/cloud-Protection.webp"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={productSectionClassName}>
          <div className={productSectionTitleClassName}>
            Integration Services
          </div>
          <div className="flex flex-col gap-6 lg:flex-row px-6 md:px-12">
            <EndpointProductCard
              name="SIEM Integration Services"
              tagline="Enterprise SIEM"
              primaryFeature="Custom integration with 3rd-party Enterprise SIEM solutions."
              image="/images/product/software/seimNew.webp"
              features={[]}
            />
            <EndpointProductCard
              name="SOC Integration Services"
              tagline="Enterprise SOC"
              primaryFeature="Custom integration with 3rd-party Enterprise SOC solutions."
              image="/images/product/software/soc.webp"
              features={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
