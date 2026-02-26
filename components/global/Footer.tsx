'use client'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Info & Links */}
                    <div className="flex flex-col h-full">
                        {/* Top: Logo & Socials */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[#5B5B5B] gap-6 sm:gap-0">
                            <Image
                                src="/marmalogofooter.png"
                                alt="Marma Security"
                                width={200}
                                height={40}
                                className="footer-logo"
                            />

                            {/* Social Icons Placeholder */}
                            <div className="flex items-center space-x-5">
                                <a href="#" aria-label="Instagram">
                                    <Image src="/insta-icon.png" alt="Instagram" width={40} height={40} className="footer-social-icon" />
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <Image src="/fb-icon.png" alt="Facebook" width={40} height={40} className="footer-social-icon" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <Image src="/twitter-icon.png" alt="Twitter" width={40} height={40} className="footer-social-icon" />
                                </a>
                            </div>
                        </div>

                        {/* Middle: Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4 py-[72px] place-items-center lg:place-items-start text-center lg:text-left lg:pr-12">
                            <a href="#" className="footer-link">Technology</a>
                            <a href="#" className="footer-link">Products</a>
                            <a href="#" className="footer-link">About us</a>

                            <a href="#" className="footer-link">Solutions</a>
                            <a href="#" className="footer-link">Partners</a>
                            <a href="#" className="hover:text-white/70 transition-colors">Contact</a>
                        </div>

                        {/* Order Button Section */}
                        <div className="pb-10 border-b border-white/10 flex justify-center lg:justify-start">
                            <button className="flex items-center justify-between bg-white rounded-full pl-8 pr-2 w-[190px] group transition-transform hover:scale-[1.02] shadow-sm">
                                <span className="text-[#FF0000] footer-btn-text">Order</span>
                                <div className="bg-[#FF0000] text-white rounded-full p-2.5 group-hover:bg-[#d12222] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </button>
                        </div>

                        {/* Bottom: Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 pt-10 pb-4 font-body font-medium mt-auto items-center lg:items-start justify-center lg:justify-start">
                            <a href="tel:+910456123852" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>+910456123852</span>
                            </a>
                            <a href="mailto:dfghjkfghjfvgb@gmail.com" className="flex items-center gap-4 hover:opacity-80 transition-opacity break-all sm:break-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>dfghjkfghjfvgb@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex items-end justify-center lg:justify-end mt-4 lg:mt-0 mb-8 lg:mb-0">
                        <div className="footer-form-glass">
                            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="footer-input-field"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="footer-input-field"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="footer-input-field"
                                />
                                <textarea
                                    placeholder="Let us know how we can help..."
                                    rows={4}
                                    className="footer-input-field resize-none min-h-[140px]"
                                />

                                <div className="flex justify-center lg:justify-end pt-3">
                                    <button type="submit" className="text-[#fff] footer-btn-text flex items-center gap-3 bg-[#FF0000] hover:bg-[#d12222] transition-colors rounded-full pl-8 pr-2 tracking-wide group">
                                        Submit
                                        <div className="bg-white text-[#ea3333] rounded-full p-2 group-hover:bg-gray-100 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bottom Bar */}
            <div className="footer-bottom-bar">
                <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-center">
                    <p className="text-white/60 text-[13px] font-body text-center">
                        &copy; {new Date().getFullYear()} Marma Security. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
