'use client';

import React from 'react';
import ContactForm from '@/components/contact/ContactForm';

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
      </svg>
    ),
    label: '+1 (408) 582 8962',
    href: 'tel:+14085828962',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
      </svg>
    ),
    label: 'support@marmasec.com',
    href: 'mailto:support@marmasec.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
      </svg>
    ),
    label: '180 Promenade Ste. 300,\nSacramento, CA - 95824',
    href: 'https://maps.google.com/?q=180+Promenade+Ste+300+Sacramento+CA+95824',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor" />
      </svg>
    ),
    label: 'Mon – Fri   9:00 am – 5:00 pm\nSat – Sun   Closed',
    href: null,
  },
];

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Page Content */}
      <section className="w-full flex-1 min-h-screen flex items-center py-16 md:py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

            {/* LEFT: Support Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark leading-tight">
                  Customer Support
                </h1>
                <p className="mt-4 text-base text-gray-500 max-w-sm">
                  For customer support on our products, please contact us using
                  this form or connect with us via phone or email!
                </p>
                <p className="mt-3 text-base text-gray-500">
                  We look forward to assisting you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 mt-2">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* Red circle icon */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-red flex items-center justify-center text-white shadow-sm">
                      {item.icon}
                    </div>

                    {/* Label */}
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-base text-text-dark hover:text-brand-red transition-colors leading-relaxed whitespace-pre-line pt-2"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <p className="text-base text-text-dark leading-relaxed whitespace-pre-line pt-2">
                        {item.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="flex flex-col gap-4 pt-2">
              <p className="text-brand-red font-semibold text-base md:text-lg">
                Submit the form below and we&apos;ll get right back to you!
              </p>
              <ContactForm isSupport={true} />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
