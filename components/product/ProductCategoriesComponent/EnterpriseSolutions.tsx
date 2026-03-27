import DecorativeLine from "@/components/home/DecorativeLine";
import SpecificationProductCard, {
  SpecificationProductItem,
} from "../SpecificationProductCard";

const enterpriseSpecifications: SpecificationProductItem[] = [
  {
    label: "Form Factor",
    value: "1U Rack Mounted",
  },
  {
    label: "Throughput",
    value: "2 Gbps",
  },
  {
    label: "WAN Ports",
    value: "2 x 2.5 Gbps",
  },
  {
    label: "LAN Ports",
    value: "10 x 1 Gbps (Ethernet / PoE / SFP options)",
  },
  {
    label: "Integrated Wi-Fi",
    value: "Wi-Fi 6E / 7",
  },
  {
    label: "Recommended Users",
    value: "Up to 200",
  },
];

export default function EnterpriseSolutions() {
  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <SpecificationProductCard
        title="SafeEnterprise 200 | Branch Office Security"
        descript="SafeEnterprise protects all connected devices on your network from cyberattacks targeting your financial and business data, helping secure privacy, continuity, and connected operations across the office."
        image="/images/banners/homepage-right-banner1.webp"
        imageAlt="SafeEnterprise 200 branch office security device"
        specification={enterpriseSpecifications}
      />
      <div className="relative mb-2 md:mb-12 w-screen left-1/2 -translate-x-1/2">
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
    </div>
  );
}
