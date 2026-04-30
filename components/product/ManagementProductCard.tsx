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
    <div className="w-full rounded-2xl bg-[#F5F5F5] p-5 sm:p-6 sm:pb-0 lg:p-8 lg:pb-0 flex flex-col gap-4 sm:gap-5">
      {/* Text Block */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="fl5-1">{title}</h3>
        <p className="fl4-1">{description}</p>
      </div>

      {/* Image Block */}
      <div className="relative overflow-hidden rounded-[50px] bg-transparent aspect-video">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain w-full h-full"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        ) : (
          <div aria-hidden="true" className="h-full w-full" />
        )}
      </div>
    </div>
  );
}
