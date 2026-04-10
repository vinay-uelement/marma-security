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
    imageClassName = " left-3/4 -translate-x-1/2 -translate-y-1/2 w-[70%]"
}: HighlightedTextProps) {
    return (
        <span className={`relative inline-block z-10 ${className}`}>
            {text}
        </span>
    );
}
