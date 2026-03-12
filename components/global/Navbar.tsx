"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when screen size is lg or larger
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[93%] max-w-[1400px] z-50">
            {/* Main Navbar Container */}
            <div className="navbar-glass flex items-center justify-between gap-4 lg:gap-6 px-4 lg:px-6 py-3 rounded-full shadow-lg relative z-50">
                {/* Left Side: Logo */}
                <div className="flex flex-1 items-center min-w-0">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Marma Security"
                            width={200}
                            height={40}
                            className="nav-logo"
                            priority /* Since it's LCP for the header */
                        />
                    </Link>
                </div>

                {/* Center: Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center lg:space-x-4 xl:space-x-10 whitespace-nowrap">
                    <a href="/technology" className="fl2">Technology</a>
                    <a href="/solutions" className="fl2">Solutions</a>
                    <a href="/product" className="fl2">Products</a>
                    <a href="/partners" className="fl2">Partners</a>
                    <a href="/about-us" className="fl2">About us</a>
                </nav>

                {/* Right Side: Icons & Mobile Toggle */}
                <div className="flex flex-1 items-center space-x-1 sm:space-x-2 lg:space-x-3 justify-end min-w-0">
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
                            className="nav-icon"
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
                            className="nav-icon"
                        />
                    </button>

                    {/* Hamburger Menu Toggle Button (Mobile Only) */}
                    <button
                        className="lg:hidden p-1 sm:p-2 text-nav-text focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu Overlay Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[110%] left-0 w-full navbar-glass rounded-2xl py-5 px-6 shadow-xl flex flex-col space-y-4 z-40">
                    <a href="/technology" className="fl2 border-b border-gray-200/30 pb-3" onClick={() => setIsMobileMenuOpen(false)}>Technology</a>
                    <a href="/solutions" className="fl2 border-b border-gray-200/30 pb-3" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
                    <a href="/product" className="fl2 border-b border-gray-200/30 pb-3" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
                    <a href="/partners" className="fl2 border-b border-gray-200/30 pb-3" onClick={() => setIsMobileMenuOpen(false)}>Partners</a>
                    <a href="/about-us" className="fl2 pb-3" onClick={() => setIsMobileMenuOpen(false)}>About us</a>
                </div>
            )}
        </header>
    );
}
