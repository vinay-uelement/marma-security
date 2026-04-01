import DecorativeLine from "@/components/home/DecorativeLine";
import EndpointProductCard from "../EndpointProductCard";
import SpecificationProductCard, {
  SpecificationProductItem,
} from "../SpecificationProductCard";
import {
  productDecoratedSectionClassName,
  productSectionTitleClassName,
} from "./sectionSpacing";

const homeGatewaySpecifications: SpecificationProductItem[] = [
  { label: "Form Factor", value: "Desktop" },
  { label: "Throughput", value: "1 Gbps" },
  { label: "WAN Ports", value: "1 x 2.5 Gbps" },
  { label: "LAN Ports", value: "4 x 1 Gbps (Ethernet)" },
  { label: "Integrated Wi-Fi", value: "Wi-Fi 5 / 6E" },
  { label: "Recommended Users", value: "Up to 64" },
];

export default function HomeSolutions() {
  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <div className={productSectionTitleClassName}>Firewall device</div>

      {/* ── SafeHome ← home page "Learn More" lands here ── */}
      <div id="safehome">
        <SpecificationProductCard
          title="SafeHome Firewall | Home Network Security"
          descript="SafeHome protects all connected devices on your network from cyberattacks targeting your financial and personal data, safeguarding your privacy and protecting your family on the internet."
          image="/images/banners/homepage-right-banner1.webp"
          imageAlt="SafeHome Firewall home network security device"
          specification={homeGatewaySpecifications}
        />
      </div>

      <div className={productDecoratedSectionClassName}>
        <div className="relative w-screen left-1/2 -translate-x-1/2 mb-2 md:mb-8">
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

        <div className={productSectionTitleClassName}>Mobile Application</div>
        <div className="max-md:px-6">
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
