"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
    { href: "/technology", label: "Technology" },
    { href: "/solutions", label: "Solutions" },
    { href: "/product", label: "Products" },
    { href: "/partners", label: "Partners" },
    { href: "/about-us", label: "About us" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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
            <div className="navbar-glass flex items-center justify-between gap-4 lg:gap-6 px-3 py-1 md:py-2 ps-3 md:ps-10 rounded-2xl md:rounded-full shadow-lg relative z-50">
                {/* Left Side: Logo */}
                <div className="flex flex-1 items-center min-w-0">
                    <Link href="/">
                        <Image
                            src="/images/global/logo.svg"
                            alt="Marma Security"
                            width={1000}
                            height={1000}
                            className="nav-logo"
                            priority 
                        />
                    </Link>
                </div>

                {/* Center: Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center lg:space-x-4 xl:space-x-10 whitespace-nowrap">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`fl2-nav ${
                                    isActive
                                        ? "!font-bold !text-[#000000]"
                                        : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side: Icons & Mobile Toggle */}
                <div className="flex flex-1 items-center gap-3 justify-end min-w-0">
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Phone/Contact Icon — linked to Contact Us page */}
                        <Link
                            href="/contact-us"
                            className="flex items-center justify-center transition-transform hover:scale-105"
                            aria-label="Contact Us"
                        >
                            <Image
                                src="/images/global/call-nav.svg"
                                alt="Call"
                                width={34}
                                height={34}
                                className="nav-icon"
                            />
                        </Link>

                        {/* Portal/Cart Icon */}
                        <button
                            className="flex items-center justify-center transition-transform hover:scale-105"
                            aria-label="Portal/Shop"
                        >
                            <Image
                                src="/images/global/shop-nav.svg"
                                alt="Shop"
                                width={34}
                                height={34}
                                className="nav-icon"
                            />
                        </button>
                    </div>

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
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`fl2-nav border-b border-gray-200/30 pb-3 ${
                                    isActive
                                        ? "!font-bold !text-[#000000]"
                                        : ""
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <Link
                        href="/contact-us"
                        className="flex items-center gap-3 fl2-nav border-b border-gray-200/30 pb-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Image
                            src="/images/global/call-nav.svg"
                            alt="Call"
                            width={24}
                            height={24}
                            className="nav-icon"
                        />
                        <span>Contact us</span>
                    </Link>

                    <Link
                        href="#"
                        className="flex items-center gap-3 fl2-nav pb-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Image
                            src="/images/global/shop-nav.svg"
                            alt="Shop"
                            width={24}
                            height={24}
                            className="nav-icon"
                        />
                        <span>Cart</span>
                    </Link>
                </div>
            )}
        </header>
    );
}
