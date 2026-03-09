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
    heightVariant?: '900' | '810' | '794';
    title: React.ReactNode;
    middleText?: React.ReactNode;
    middleTextClassName?: string;
    subtitle?: React.ReactNode;
    buttons?: BannerButton[];
    rightImage?: string;
    rightImageAlt?: string;
    showRightImageCircle?: boolean;
    titleClassName?: string;
}

export default function Banner({
    backgroundImage,
    heightVariant = '900',
    title,
    middleText,
    middleTextClassName = "font-title font-medium text-[20px] md:text-[24px] leading-[34px] tracking-[-0.01em] text-white max-w-[550px]",
    subtitle,
    buttons = [],
    rightImage,
    rightImageAlt = "Banner Image",
    showRightImageCircle = false,
    titleClassName = "font-banner text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm"
}: BannerProps) {
    // Dynamic height class assignment based on the prop
    const heightClass = heightVariant === '900'
        ? 'min-h-[900px] lg:h-[900px]'
        : heightVariant === '810'
            ? 'min-h-[810px] lg:h-[810px]'
            : 'min-h-[794px] lg:h-[794px]';

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
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

                    {/* Left Column: Text, Subtitle, and Buttons */}
                    <div className="flex flex-col space-y-6 pb-5 text-white z-20">
                        {/* Title text */}
                        <div className={titleClassName}>
                            {title}
                        </div>

                        {/* Render Middle Text conditionally */}
                        {middleText && (
                            <div className={middleTextClassName}>
                                {middleText}
                            </div>
                        )}

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

                                    const baseClass = isPrimary
                                        ? "inline-flex items-center justify-between gap-4 md:gap-5 rounded-full pl-6 md:pl-8 pr-2 py-2 transition-transform hover:scale-[1.02] group shadow-sm w-fit"
                                        : "inline-flex items-center justify-between gap-4 md:gap-5 rounded-full pl-6 md:pl-8 pr-2 py-2 transition-transform hover:scale-[1.02] tracking-wide group shadow-sm w-fit";

                                    const variantClass = isPrimary
                                        ? "bg-[#FF0000] text-white hover:bg-[#E10000]"
                                        : "bg-transparent border border-white text-white hover:bg-white/10";

                                    const textClass = isPrimary
                                        ? "font-banner text-[20px] md:text-[24px] font-normal  tracking-[-0.01em]"
                                        : "footer-btn-text tracking-[0.02em]";

                                    const iconContainerClass = isPrimary
                                        ? "bg-[#F4F4F4] text-[#FF0000] rounded-full p-2 md:p-2.5 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors"
                                        : "border border-white text-white rounded-full p-2 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors";

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
                        <div className="flex justify-center lg:justify-end items-center relative z-20 mt-12 lg:mt-0 w-full lg:w-auto">
                            <div className="relative w-full max-w-[350px] sm:max-w-[400px] xl:max-w-[450px] aspect-square flex items-center justify-center">
                                {showRightImageCircle && (
                                    <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-[#E12120] shadow-2xl" />
                                )}
                                <Image
                                    src={rightImage}
                                    alt={rightImageAlt}
                                    fill
                                    className={`object-contain z-10 ${showRightImageCircle ? 'scale-[1.15] drop-shadow-2xl' : ''}`}
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
