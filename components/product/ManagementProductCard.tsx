import Image from "next/image";

interface ManagementProductCardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export default function ManagementProductCard({
  title,
  description,
  image,
  imageAlt = title,
}: ManagementProductCardProps) {
  return (
    <div className="w-full rounded-2xl bg-[#F5F5F5] p-5 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5">
      {/* Text Block */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="fl5-1">{title}</h3>
        <p className="fl4-1">{description}</p>
      </div>

      {/* Image Block */}
      <div className="relative rounded-xl overflow-hidden aspect-video">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-fill w-full h-full rounded-xl border border-gray-200"
          />
        ) : (
          <div aria-hidden="true" className="h-full w-full bg-[#D9D9D9]" />
        )}
      </div>
    </div>
  );
}
