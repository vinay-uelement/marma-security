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

export default function EnterpriseSolutions() {
  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <div className={productSectionTitleClassName}>Firewall device</div>

      {/* ── SafeEnterprise 200 ── */}
      <div id="safeenterprise-200">
        <SpecificationProductCard
          title="SafeEnterprise 200 | Branch Office Security"
          descript={enterpriseDescription}
          image="/images/product/SafeEnterprise2001.webp"
          imageAlt="SafeEnterprise 200 branch office security device"
          specification={enterprise200Specifications}
        />
      </div>

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

      {/* ── SafeEnterprise 400 ← home page "Learn More" lands here ── */}
      <div id="safeenterprise-400">
        <SpecificationProductCard
          title="SafeEnterprise 400 | Regional Office / Campus Security"
          descript={enterpriseDescription}
          image="/images/product/SafeEnterprise4001.webp"
          imageAlt="SafeEnterprise 400 regional office and campus security device"
          specification={enterprise400Specifications}
        />
      </div>

      {/* ── SafeRemote ── */}
      <div id="saferemote" className="mt-2 sm:mt-4 lg:mt-10 xl:mt-12">
        <SpecificationProductCard
          title="SafeRemote Firewall | Remote Worker Security"
          descript={enterpriseDescription}
          image="/images/product/SafeEnterprise4002.webp"
          imageAlt="SafeRemote Firewall remote worker security device"
          specification={safeRemoteFirewallSpecifications}
        />
      </div>

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
        <div className="max-md:px-6">
          <ManagementProductCard
            title="Enterprise Management Platform"
            description="Cloud-based or Private Data Center hosted platform for centrally managing Security Gateways, Endpoint Protection, and Cloud Services across the enterprise."
            image="/images/products/enterprise-management.webp"
            imageAlt="Enterprise Management Platform Screenshot"
          />
        </div>
      </div>

      <div className="max-md:px-6">
        <div className={productSectionClassName}>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            <div className="flex flex-col lg:w-1/2">
              <div className={productHalfSectionTitleClassName}>
                Endpoint Software
              </div>
              <EndpointProductCard
                name="Agent Software for Windows"
                tagline="24×7 Endpoint Protection"
                primaryFeature="FW & Anti-Virus Integration"
                features={[
                  "DNS Security",
                  "URL Filtering",
                  "Scam Protection",
                  "AI / Data Loss Prevention",
                ]}
                image="/images/products/endpoint-software.webp"
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <div className={productHalfSectionTitleClassName}>
                Cloud Security Services
              </div>
              <EndpointProductCard
                name="E-mail Protection Service"
                tagline="Enterprise Email Security"
                primaryFeature="Zero-day Phishing Protection"
                features={[
                  "Zero-day Malware / Ransomware",
                  "Scam Protection",
                  "AI / Data Loss Prevention",
                  "QR Phishing Protection",
                ]}
                image="/images/products/email-security.webp"
              />
            </div>
          </div>
        </div>

        <div className={productSectionClassName}>
          <div className={productSectionTitleClassName}>
            Integration Services
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <EndpointProductCard
              name="SIEM Integration Services"
              tagline="Enterprise SIEM"
              primaryFeature="Custom integration with 3rd-party Enterprise SIEM solutions."
              features={[]}
            />
            <EndpointProductCard
              name="SOC Integration Services"
              tagline="Enterprise SOC"
              primaryFeature="Custom integration with 3rd-party Enterprise SOC solutions."
              features={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
