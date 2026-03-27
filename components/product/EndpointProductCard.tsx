import Image from "next/image";

interface EndpointProductCardProps {
  name: string;
  tagline: string;
  primaryFeature: string;
  features: string[];
  image: string;
  imageAlt?: string;
}

export default function EndpointProductCard({
  name,
  tagline,
  primaryFeature,
  features,
  image,
  imageAlt,
}: EndpointProductCardProps) {
  return (
    <div className="w-full rounded-2xl bg-[#F5F5F5] p-5 sm:p-6 lg:p-7 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="fl5-1">
          {name}
        </span>
        <span className="text-text-dark font-light text-[20px] leading-none">
          |
        </span>
        <span className="fl5-1">
          {tagline}
        </span>
      </div>

      {/* Body — features left, image right */}
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        {/* Features */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <p className="fl5-1">
            Features
          </p>
          <p className="fl4-1">
            {primaryFeature}
          </p>
          <ul className="flex flex-col gap-1.5">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 fl4-1 leading-snug"
              >
                <span className="mt-[5px] md:mt-[8px] w-1.5 h-1.5 rounded-full bg-[#3A3A3A] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-full sm:w-[45%] lg:w-[42%] aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#D9D9D9] shrink-0">
          <Image
            src={image}
            alt={imageAlt ?? name}
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
