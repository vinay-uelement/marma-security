'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HighlightedText from '@/components/global/HighlightedText';
import DecorativeLine from '../home/DecorativeLine';
import Button from '../global/Button';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative w-full bg-[#F5F5F5] py-16 lg:py-[150px] overflow-x-clip">

            {/* Right-side decorative image placeholder — user replaces this src */}
            <div className="absolute top-[120px] right-0 w-screen pointer-events-none z-0 hidden lg:block">

                <div className="ml-auto w-[220px]">

                    <DecorativeLine
                        viewBox="0 0 700 80"
                        points="100,40 900,40"
                        dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                        className="w-[400px] lg:w-[500px] h-auto ml-auto"
                    />

                </div>

            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 mt-[40px] lg:px-12">

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-6 lg:gap-16 items-stretch">

                    {/* ───── Left Column ───── */}
                    <div className="flex flex-col justify-between h-full gap-0 w-full">

                        {/* Top block: "Let's Talk" + sub-heading */}
                        <div className="flex flex-col h-full relative">
                            {/* Mobile Decorative Red Line */}
                            <div className="flex lg:hidden absolute top-[-50px] right-[-24px] items-start justify-end w-[280px] pointer-events-none overflow-x-clip z-0">
                                <div className="w-full flex justify-end">
                                    <DecorativeLine
                                        viewBox="0 0 700 80"
                                        points="100,40 1100,40"
                                        dots={[{ cx: 100, cy: 40, rippleCount: 3 }]}
                                        className="w-full h-auto translate-x-[15%]"
                                    />
                                </div>
                            </div>

                            {/* "Let's Talk" heading */}
                            <h2 className="fl2">
                                Let&apos;s{' '}
                                <HighlightedText
                                    text="Talk"
                                    className="font-bold text-[#323232]"
                                    imageClassName="bottom-[-10px] md:bottom-[-18px] right-[-6px]"
                                />
                            </h2>

                            {/* Spacer gap between heading and sub-heading */}
                            <div className="mt-0 md:mt-14" />

                            {/* Sub-heading */}
                            <h3 className="fl3-3">
                                Get advice any time.
                            </h3>
                            <p className="fl5-2 text-text-dark mt-0 md:mt-3 max-w-[520px] lg:max-w-none">
                                Connect with our team for reliable, expert guidance whenever you need it.
                            </p>
                        </div>

                        {/* Contact Info Cards — bottom-aligned to match form height */}
                        <div className="flex flex-col gap-4 pt-10 w-full">
                            {/* Phone */}
                            <div className="flex items-center gap-3 md:gap-6 bg-white rounded-[15px] px-4 md:px-6 py-2 md:py-5 shadow-sm border border-[#EBEBEB] w-full">

                                <div className="flex items-center p-2 md:p-4 justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image
                                        src="/images/contact/contact-us-calling-icon.svg"
                                        alt="Phone"
                                        width={28}
                                        height={28}
                                        className="object-contain w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
                                    />
                                </div>

                                <div className="flex flex-col gap-0 md:gap-0.5">
                                    <span className="fl5-1">Phone Number</span>
                                    <span className="fl5-1 font-normal">+1-408-582-8962</span>
                                </div>

                            </div>

                            {/* Corporate Office */}
                            <div className="flex items-center gap-3 md:gap-6 bg-white rounded-[15px] px-4 md:px-6 py-2 md:py-5 shadow-sm border border-[#EBEBEB] w-full">
                                <div className="flex items-center justify-center p-2 md:p-4 w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/images/contact/contact-us-map.svg" alt="Location" width={28} height={28} className="object-contain w-[18px] h-[18px] md:w-[28px] md:h-[28px]" />
                                </div>
                                <div className="flex flex-col gap-0 md:gap-0.5">
                                    <span className="fl5-1">Corporate Office</span>
                                    <span className="fl5-1 font-normal">Marma Security Inc., 180 Promenade Ste. 300, Sacramento, CA - 95834</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 md:gap-6 bg-white rounded-[15px] px-4 md:px-6 py-2 md:py-5 shadow-sm border border-[#EBEBEB] w-full">
                                <div className="flex items-center justify-center p-2 md:p-4 w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/images/contact/contact-us-mail.svg" alt="Email" width={28} height={28} className="object-contain w-[18px] h-[18px] md:w-[28px] md:h-[28px]" />
                                </div>
                                <div className="flex flex-col gap-0 md:gap-0.5">
                                    <span className="fl5-1">Email</span>
                                    <span className="fl5-1 font-normal">info@marmasec.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Social icons */}

                    </div>

                    {/* ───── Right Column: Form ───── */}
                    <div className="flex flex-col">
                        <h3 className="fl-banner-title text-text-dark font-semibold! mb-6">
                            Let&apos;s talk about your business.
                        </h3>

                        <div className="bg-white rounded-[12px] border border-[#E5E5E5] shadow-sm p-6 md:p-8 lg:p-10 flex flex-col h-full">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name here"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="contact-form-input"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email here"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="contact-form-input"
                                    />
                                </div>

                                {/* Row 2: Subject + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="contact-form-select"
                                    >
                                        <option value="" disabled>Select Subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales</option>
                                        <option value="partnership">Partnership</option>
                                    </select>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="contact-form-input"
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Tell us a few words"
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="contact-form-input resize-none"
                                />

                                {/* Bottom row: Social + Submit */}
                                <div className="flex items-center justify-between pt-2">
                                    {/* Mini social icons */}
                                    <div className="flex items-center gap-4">
                                        <Link href="#" aria-label="X / Twitter" className="hover:opacity-70 transition-opacity">
                                            <Image src="/images/contact/contact-us-x.svg" alt="X/Twitter" width={72} height={72} className="object-contain" />
                                        </Link>
                                        <Link href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                                            <Image src="/images/contact/contact-us-insta.svg" alt="Instagram" width={72} height={72} className="object-contain" />
                                        </Link>
                                        <Link href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                                            <Image src="/images/contact/contact-us-linkedin.svg" alt="LinkedIn" width={72} height={72} className="object-contain" />
                                        </Link>
                                    </div>

                                    {/* Submit button */}
                                   <Button icon label="Submit" />
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
