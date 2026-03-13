import React from 'react';
import Image from 'next/image';
import HighlightedText from '../global/HighlightedText';

const testimonials = [
    {
        name: "Ganesh",
        title: "CEO, Lorem ispum",
        rating: 5.0,
        content: "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock."
    },
    {
        name: "Ganesh",
        title: "CEO, Lorem ispum",
        rating: 5.0,
        content: "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock."
    },
    {
        name: "Ganesh",
        title: "CEO, Lorem ispum",
        rating: 5.0,
        content: "MarmaSec made cybersecurity incredibly simple for us. Setup took minutes, and we immediately saw suspicious activity being blocked. It gives us peace of mind knowing our systems are protected around the clock."
    }
];

export default function Testimonial() {
    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden">
            {/* Background Image with Blur and Overlay */}
            <div className="absolute inset-0 z-0">
                {/* The user will add the actual image named testimonial-home */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/home/Testimonial-section.webp')` }}
                />
                {/* Dark overlay and blur effect */}
                <div className="absolute " />
            </div>

            <div className="relative z-10 w-full mb-10 lg:mb-16 pl-6 lg:pl-12 pr-0 max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-6 md:gap-12 relative w-full">
                    <h2 className="tm-header-pro text-white whitespace-normal md:whitespace-nowrap w-full">
                        See what our <HighlightedText text="customers" className="text-[#FFF] font-bold"  imageClassName='bottom-[-20px] right-0 md:bottom-[-25px]'/> say
                    </h2>

                    {/* The decorative red line reaches the container edge naturally */}
                    <div className="flex items-center w-full md:w-[35vw] xl:w-[450px]">
                        <div className="w-4 h-4 rounded-full bg-[#FF0000] shrink-0" />
                        <div className="h-[2px] bg-[#FF0000] w-full" />
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8">
                                <Image
                                    src="/images/global/quote-icon.png"
                                    alt="Quote"
                                    width={32}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>

                            {/* Header: Name and Title */}
                            <div className="">
                                <h3 className="tm-card-name-bold mb-1">{testimonial.name}</h3>
                                <p className="tm-card-subtitle-reg ">{testimonial.title}</p>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center gap-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="30" height="30" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L10.472 4.965L16 5.86L12 9.71L12.944 15L8 12.43L3.056 15L4 9.71L0 5.86L5.528 4.965L8 0Z" fill="#FACC15" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="tm-card-rating ml-3">{testimonial.rating.toFixed(1)}</span>
                            </div>

                            {/* Content */}
                            <p className="tm-card-text-body">
                                {testimonial.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
