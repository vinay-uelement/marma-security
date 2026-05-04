import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  href: string;
}

export default function ProductCard({ name, image, href }: ProductCardProps) {
  return (
    <Link href={href} className="flex flex-col rounded-xl overflow-hidden bg-[#F6F6F6] shadow-sm hover:shadow-md transition-shadow max-w-[280px] mx-auto w-full">
      <div className="flex-1 flex justify-center items-center p-6 aspect-square relative">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="bg-[#EBEBEB] py-5 text-center">
        <h3 className="font-bold text-[#1A1A1A] text-lg">{name}</h3>
      </div>
    </Link>
  );
}
