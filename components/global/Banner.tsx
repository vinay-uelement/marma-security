import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface BannerButton {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: boolean;
}

export interface BannerProps {
    backgroundImage: string;
    heightVariant?: '900' | '810';
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    buttons?: BannerButton[];
    rightImage?: string;
    rightImageAlt?: string;
}

export default function Banner({
    backgroundImage,
    heightVariant = '900',
    title,
    subtitle,
    buttons = [],
    rightImage,
    rightImageAlt = "Banner Image"
}: BannerProps) {
    // Dynamic height class assignment based on the prop
    const heightClass = heightVariant === '900' ? 'min-h-[900px] lg:h-[900px]' : 'min-h-[810px] lg:h-[810px]';

    return (
        <section
            className={`relative w-full flex items-center overflow-hidden pt-20 lg:pt-0 ${heightClass}`}
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Main Content Container inside the Banner */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

                    {/* Left Column: Text, Subtitle, and Buttons */}
                    <div className="flex flex-col space-y-6 lg:pr-10 text-white z-20">
                        {/* Title text */}
                        <div className="font-banner text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm">
                            {title}
                        </div>

                        {/* Render Subtitle conditionally */}
                        {subtitle && (
                            <div className="font-body text-lg md:text-xl text-white/90 max-w-[550px] leading-relaxed font-light">
                                {subtitle}
                            </div>
                        )}

                        {/* Render Buttons conditionally */}
                        {buttons && buttons.length > 0 && (
                            <div className="flex flex-wrap items-center gap-6 pt-8">
                                {buttons.map((btn, index) => {
                                    const isPrimary = btn.variant !== 'secondary' && btn.variant !== 'outline';

                                    const baseClass = "flex items-center justify-between gap-5 rounded-full pl-8 pr-2 py-2 transition-transform hover:scale-[1.02] tracking-wide group shadow-sm";

                                    const variantClass = isPrimary
                                        ? "bg-[#FF0000] text-white hover:bg-[#d12222]"
                                        : "bg-transparent border border-white text-white hover:bg-white/10";

                                    const textClass = "footer-btn-text tracking-[0.02em]";

                                    const iconContainerClass = isPrimary
                                        ? "bg-white text-[#FF0000] rounded-full p-2 group-hover:bg-gray-100 transition-colors"
                                        : "border border-white text-white rounded-full p-2 group-hover:bg-white/10 transition-colors";

                                    const ButtonContent = (
                                        <button
                                            key={`btn-inner-${index}`}
                                            onClick={btn.onClick}
                                            className={`${baseClass} ${variantClass}`}
                                        >
                                            <span className={textClass}>{btn.label}</span>
                                            {btn.icon && (
                                                <div className={iconContainerClass}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                </div>
                                            )}
                                        </button>
                                    );

                                    return btn.href ? (
                                        <Link href={btn.href} key={`btn-${index}`}>
                                            {ButtonContent}
                                        </Link>
                                    ) : (
                                        <React.Fragment key={`btn-frag-${index}`}>
                                            {ButtonContent}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Hero Graphic/Image conditionally */}
                    {rightImage && (
                        <div className="flex justify-center lg:justify-end items-center relative z-20 mt-8 lg:mt-0">
                            <div className="relative w-full max-w-[500px] xl:max-w-[650px] aspect-square lg:aspect-[4/3]">
                                <Image
                                    src={rightImage}
                                    alt={rightImageAlt}
                                    fill
                                    className="object-contain"
                                    priority={true}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
