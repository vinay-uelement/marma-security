import Image from 'next/image';
import React from 'react';

interface HighlightedTextProps {
    text: string;
    className?: string;
    imageClassName?: string;
}

export default function HighlightedText({
    text,
    className = "text-white font-bold",
    imageClassName = "bottom-[-10px] md:bottom-[-24px] left-3/4 -translate-x-1/2 w-[70%]"
}: HighlightedTextProps) {
    return (
        <span className={`relative inline-block z-10 ${className}`}>
            {text}
            <Image
                src="/highlighting.png"
                alt="highlight"
                width={140}
                height={28}
                className={`absolute h-auto object-contain pointer-events-none -z-10 ${imageClassName}`}
            />
        </span>
    );
}
