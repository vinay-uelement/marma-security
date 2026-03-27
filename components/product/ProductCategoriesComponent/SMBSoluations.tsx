import DecorativeLine from "@/components/home/DecorativeLine";
import EndpointProductCard from "../EndpointProductCard";
import ManagementProductCard from "../ManagementProductCard";
import SpecificationProductCard, {
  SpecificationProductItem,
} from "../SpecificationProductCard";

const smbGatewaySpecifications: SpecificationProductItem[] = [
  {
    label: "Form Factor",
    value: "Table-top / Wall-mounted",
  },
  {
    label: "Throughput",
    value: "1 Gbps",
  },
  {
    label: "WAN Ports",
    value: "1 x 2.5 Gbps",
  },
  {
    label: "LAN Ports",
    value: "4 x 1 Gbps (Ethernet)",
  },
  {
    label: "Integrated Wi-Fi",
    value: "Wi-Fi 5 / 6E",
  },
  {
    label: "Recommended Users",
    value: "Up to 128",
  },
];

const smbGatewayDescription =
  "SafeHome protects all connected devices on your network from cyberattacks targeting your financial and personal data, safeguarding your privacy and protecting your family on the internet.";

const smbManagementDescription =
  "Cloud-based Marma Management Platform for managing Security Gateways and Endpoint Protection - designed for simplicity with minimal IT overhead.";

export default function SMBSoluations() {
  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <div className="fl2-4 pb-6 sm:pb-8 lg:pb-10 xl:pb-12">
        Security Gateways
      </div>

      <SpecificationProductCard
        title="SafeBiz Firewall | SMB Office Security"
        descript={smbGatewayDescription}
        image="/images/product/product1safehome.png"
        imageAlt="SafeBiz Firewall SMB office security device"
        specification={smbGatewaySpecifications}
      />

      <div className="relative mt-2 w-screen left-1/2 -translate-x-1/2">
        <div className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[460px]">
          <DecorativeLine
            viewBox="0 0 700 80"
            points="-3000,40 210,40"
            dots={[{ cx: 210, cy: 40, rippleCount: 3 }]}
            className="w-full h-auto"
            dotRadius={10}
            animationDuration={2.4}
          />
        </div>
      </div>

      <div className="fl2-4 pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-10 xl:pt-16 xl:pb-12">
        Management Platform
      </div>

      <ManagementProductCard
        title="SMB Management Platform"
        description={smbManagementDescription}
      />

      <div className="pt-10 sm:pt-12 lg:pt-14 xl:pt-16">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="fl2-4 pb-6 sm:pb-8 lg:w-1/2 lg:pb-10 xl:pb-12">
            Endpoint Software
          </div>
          <div className="fl2-4 pb-6 sm:pb-8 lg:w-1/2 lg:pb-10 xl:pb-12">
            Mobile Application
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <EndpointProductCard
            name="Agent Software for Windows"
            tagline="24x7 Endpoint Protection"
            primaryFeature="FW & Anti-Virus Integration"
            features={[
              "DNS Security",
              "URL Filtering",
              "Scam Protection",
              "AI / Data Loss Prevention",
            ]}
          />
          <EndpointProductCard
            name="Mobile App"
            tagline="iOS & Android"
            primaryFeature="Firewall Onboarding"
            features={[
              "Dashboard",
              "Alerts",
              "User Security Config",
              "QR Phishing Protection",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
