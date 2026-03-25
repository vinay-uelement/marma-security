"use client";
import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24">
          <div className="flex flex-col h-full ">
            {/* Top: Logo & Description */}
            <div className="flex flex-col items-start pb-6 md:pb-8 lg:pb-15 gap-4 md:gap-10 w-full">
              <Image
                src="/images/global/marmalogofooter.svg"
                alt="Marma Security"
                width={200}
                height={40}
                className="w-[140px] md:w-[200px] h-auto object-contain"
              />

              <p className="footer-desc-text max-w-full">
                All security updates, patches, and improvements are handled
                automatically in the background.
              </p>
            </div>

            {/* ======================================= */}
            {/* DESKTOP-ONLY MIDDLE NAV & CONTACT GRID */}
            {/* ======================================= */}
            <div className="hidden md:flex flex-col h-full w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 pb-15 w-full footer-nav-grid place-items-start">
                <a
                  href="/technology"
                  className="hover:text-white/70 transition-colors"
                >
                  Technology
                </a>
                <a
                  href="/product"
                  className="hover:text-white/70 transition-colors"
                >
                  Products
                </a>
                <a
                  href="/about-us"
                  className="hover:text-white/70 transition-colors"
                >
                  About us
                </a>

                <a
                  href="/solutions"
                  className="hover:text-white/70 transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="/partners"
                  className="hover:text-white/70 transition-colors"
                >
                  Partners
                </a>
                <a
                  href="/contact-us"
                  className="hover:text-white/70 transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="w-full h-px bg-[#FFFFFF33] mb-10 md:mb-15 mix-blend-screen" />

              <div className="flex flex-col gap-10 flex-grow">
                <div className="flex flex-col sm:flex-row gap-8 justify-between pr-5 sm:gap-16 footer-contact-text items-start">
                  <a
                    href="tel:+14085828962"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+1-408-582-8962</span>
                  </a>
                  <a
                    href="mailto:info@marmasec.com"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity break-all sm:break-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>info@marmasec.com</span>
                  </a>
                </div>
                <a
                  href="#"
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity break-all sm:break-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 90 90"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M45 90c-.35 0-.68-.19-.86-.49l-4.71-7.97C30.22 65.98 20.7 49.88 17.64 43.73a30.4 30.4 0 0 1-3.06-13.31C14.58 13.65 28.23 0 45 0s30.42 13.65 30.42 30.42c0 4.66-1.03 9.14-3.06 13.31-3.1 6.19-12.58 22.23-21.76 37.74l-4.71 7.97A1 1 0 0 1 45 90z" />
                    <circle cx="45" cy="29.2" r="11.2" />
                  </svg>
                  <span>
                    Marma Security Inc.,
                    <br />
                    180 Promenade Ste. 300,
                    <br />
                    Sacramento, CA - 95834
                  </span>
                </a>

                {/* Desktop Social Icons */}
                <div className="flex items-end space-x-6 pb-2 mt-auto">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/global/insta-icon.svg"
                      alt="Instagram"
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/global/fb-icon.svg"
                      alt="Facebook"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/global/twitter-icon.svg"
                      alt="Twitter"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* ======================================= */}
            {/* MOBILE-ONLY UNIFIED 3-COLUMN GRID       */}
            {/* ======================================= */}
            <div className="flex md:hidden flex-col w-full pb-8">
              <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-x-2 gap-y-6 w-full items-start">
                {/* Column 1 */}
                <div className="flex flex-col gap-3 footer-nav-grid text-[10px]">
                  <a
                    href="/technology"
                    className="hover:text-white/70 transition-colors"
                  >
                    Technology
                  </a>
                  <a
                    href="/solutions"
                    className="hover:text-white/70 transition-colors"
                  >
                    Solutions
                  </a>
                  <a
                    href="/about-us"
                    className="hover:text-white/70 transition-colors"
                  >
                    About us
                  </a>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3 footer-nav-grid text-[10px]">
                  <a
                    href="/product"
                    className="hover:text-white/70 transition-colors"
                  >
                    Products
                  </a>
                  <a
                    href="/partners"
                    className="hover:text-white/70 transition-colors"
                  >
                    Partners
                  </a>
                  <a
                    href="/contact-us"
                    className="hover:text-white/70 transition-colors"
                  >
                    Contact
                  </a>
                </div>

                {/* Column 3 - Contact Links */}
                <div className="flex flex-col gap-4 footer-contact-text text-[9px] pl-1 break-all">
                  <a
                    href="tel:+14085828962"
                    className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+1-408-582-8962</span>
                  </a>
                  <a
                    href="mailto:info@marmasec.com"
                    className="flex items-start gap-1.5 hover:opacity-80 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-[2px]"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="break-all whitespace-normal">
                      info@marmasec.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col items-center lg:items-end justify-center lg:justify-end mt-4 lg:mt-0 lg:mb-0 w-full">
            <div className="footer-form-glass w-full">
              <form
                className="flex flex-col gap-5 md:gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
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
                  className="footer-input-field resize-none min-h-[120px] md:min-h-[140px]"
                />

                <div className="flex justify-center lg:justify-end pt-3">
                  <Button icon label="Submit" />
                </div>
              </form>
            </div>

            {/* Mobile Social Icons explicitly mapped below form strictly for Mobile constraints */}
            <div className="flex md:hidden items-center justify-start space-x-6 pt-10 pb-0 w-full">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/global/insta-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/global/fb-icon.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/global/twitter-icon.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div
        className="footer-bottom-bar"
        style={{
          background: `
                            linear-gradient(
                            90deg,
                            #7D0202 0%,
                            rgba(187,4,4,0.93) 25%,
                            #7D0202 50%,
                            #BB0404 75%,
                            #7D0202 100%
                            )`,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-center">
          <p className="footer-copyright text-white">
            &copy; Copyright {new Date().getFullYear()} - Marma Security Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
