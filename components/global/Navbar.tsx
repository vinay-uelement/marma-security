"use client"

import Image from "next/image"

export default function Navbar() {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[93%] max-w-[1400px] z-50">
            <div
                className="flex items-center justify-between px-6 py-3 rounded-full shadow-lg"
                style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.36) 100%)',
                    backdropFilter: 'blur(1000px)',
                    boxShadow: '0px 4px 24px -1px #00000033',
                }}
            >
                {/* Left Side: Logo */}
                <div className="flex items-center min-w-[200px]">
                    {/* 
            Placeholder for the logo using next/image. 
            Replace src="/logo.png" with the actual path to your optimized image 
          */}
                    <Image
                        src="/logo.png"
                        alt="Marma Security"
                        width={200}
                        height={40}
                        className="h-8 w-auto object-contain"
                        priority /* Since it's LCP for the header */
                    />
                </div>

                {/* Center: Navigation Links */}
                <nav className="hidden lg:flex items-center space-x-10 text-nav-text font-body text-[16px] font-medium tracking-wide">
                    <a href="#" className="hover:opacity-75 transition-opacity">Technology</a>
                    <a href="#" className="hover:opacity-75 transition-opacity">Solutions</a>
                    <a href="#" className="hover:opacity-75 transition-opacity">Products</a>
                    <a href="#" className="hover:opacity-75 transition-opacity">Partners</a>
                    <a href="#" className="hover:opacity-75 transition-opacity">About us</a>
                </nav>

                {/* Right Side: Icons */}
                <div className="flex items-center space-x-3 min-w-[200px] justify-end">
                    {/* Phone/Contact Icon */}
                    <button
                        className="flex items-center justify-center transition-transform hover:scale-105"
                        aria-label="Contact Us"
                    >
                        <Image
                            src="/call-nav.png"
                            alt="Call"
                            width={34}
                            height={34}
                            className="w-[34px] h-[34px] object-contain"
                        />
                    </button>

                    {/* Portal/Cart Icon */}
                    <button
                        className="flex items-center justify-center transition-transform hover:scale-105"
                        aria-label="Portal/Shop"
                    >
                        <Image
                            src="/shop-nav.png"
                            alt="Shop"
                            width={34}
                            height={34}
                            className="w-[34px] h-[34px] object-contain"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
