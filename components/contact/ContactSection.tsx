'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HighlightedText from '@/components/global/HighlightedText';

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
        <section className="relative w-full bg-[#F5F5F5] py-16 md:py-[250px] lg:py-[150px] overflow-hidden">

            {/* Right-side decorative image placeholder — user replaces this src */}
            <div className="absolute top-0 mt-[100px] md-mt-[120px] right-0 h-full w-[140px] lg:w-[220px] pointer-events-none z-0 hidden lg:block">
                <Image
                    src="/contact-us-right.png"
                    alt="Decorative"
                    fill
                    sizes="220px"
                    className="object-contain object-right-top"
                />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 mt-[40px] lg:px-12">

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-12 lg:gap-16 items-stretch">

                    {/* ───── Left Column ───── */}
                    <div className="flex flex-col justify-between h-full gap-0">

                        {/* Top block: "Let's Talk" + sub-heading */}
                        <div className="flex flex-col">
                            {/* "Let's Talk" heading */}
                            <h2 className="font-title font-normal text-[42px] md:text-[52px] leading-[1.1] tracking-[-0.01em] text-[#323232]">
                                Let&apos;s{' '}
                                <HighlightedText
                                    text="Talk"
                                    className="font-bold text-[#323232]"
                                    imageClassName="bottom-[-10px] md:bottom-[-18px] right-[-6px]"
                                />
                            </h2>

                            {/* Spacer gap between heading and sub-heading */}
                            <div className="mt-10 md:mt-14" />

                            {/* Sub-heading */}
                            <h3 className="font-title font-bold text-[22px] md:text-[26px] leading-[1.3] text-[#323232]">
                                Get advice any time.
                            </h3>
                            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-[#666666] mt-3 max-w-[380px]">
                                Connect with our team for reliable, expert guidance whenever you need it.
                            </p>
                        </div>

                        {/* Contact Info Cards — bottom-aligned to match form height */}
                        <div className="flex flex-col gap-4 pt-10">
                            {/* Phone */}
                            <div className="flex items-center gap-6 bg-white rounded-[15px] px-6 py-5 shadow-sm border border-[#EBEBEB]">
                                <div className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/contact-us-calling-icon.png" alt="Phone" width={28} height={28} className="object-contain" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-title font-bold text-[13px] leading-none tracking-wide text-[#323232] uppercase">Phone Number</span>
                                    <span className="font-body font-normal text-[16px] leading-none text-[#323232]">+91 45687412232</span>
                                </div>
                            </div>

                            {/* Corporate Office */}
                            <div className="flex items-center gap-6 bg-white rounded-[15px] px-6 py-5 shadow-sm border border-[#EBEBEB]">
                                <div className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/contact-us-map.png" alt="Location" width={28} height={28} className="object-contain" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-title font-bold text-[13px] leading-none tracking-wide text-[#323232] uppercase">Corporate Office</span>
                                    <span className="font-body font-normal text-[16px] leading-none text-[#323232]">sdfghjkfghjnmk., sdfghj</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-6 bg-white rounded-[15px] px-6 py-5 shadow-sm border border-[#EBEBEB]">
                                <div className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/contact-us-mail.png" alt="Email" width={28} height={28} className="object-contain" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-title font-bold text-[13px] leading-none tracking-wide text-[#323232] uppercase">Email</span>
                                    <span className="font-body font-normal text-[16px] leading-none text-[#323232]">asdfghjk@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Social icons */}
                    
                    </div>

                    {/* ───── Right Column: Form ───── */}
                    <div className="flex flex-col">
                        <h3 className="font-title font-bold text-[22px] md:text-[26px] leading-[1.3] text-[#323232] mb-6">
                            Let&apos;s talk about your business.
                        </h3>

                        <div className="bg-white rounded-[12px] border border-[#E5E5E5] shadow-sm p-6 md:p-8 lg:p-10">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name here"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5E5E5] rounded-[8px] font-body font-normal text-[16px] text-[#323232] placeholder:text-[#BBBBBB] outline-none focus:border-[#FF0000] transition-colors"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email here"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5E5E5] rounded-[8px] font-body font-normal text-[16px] text-[#323232] placeholder:text-[#BBBBBB] outline-none focus:border-[#FF0000] transition-colors"
                                    />
                                </div>

                                {/* Row 2: Subject + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5E5E5] rounded-[8px] font-body font-normal text-[16px] text-[#989898] outline-none focus:border-[#FF0000] transition-colors appearance-none"
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
                                        className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5E5E5] rounded-[8px] font-body font-normal text-[16px] text-[#323232] placeholder:text-[#BBBBBB] outline-none focus:border-[#FF0000] transition-colors"
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Tell us a few words"
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5E5E5] rounded-[8px] font-body font-normal text-[16px] text-[#323232] placeholder:text-[#BBBBBB] outline-none focus:border-[#FF0000] transition-colors resize-none"
                                />

                                {/* Bottom row: Social + Submit */}
                                <div className="flex items-center justify-between pt-2">
                                    {/* Mini social icons */}
                                    <div className="flex items-center gap-4">
                                        <Link href="#" aria-label="X / Twitter" className="hover:opacity-70 transition-opacity">
                                            <Image src="/contact-us-x.png" alt="X/Twitter" width={72} height={72} className="object-contain" />
                                        </Link>
                                        <Link href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                                            <Image src="/contact-us-insta.png" alt="Instagram" width={72} height={72} className="object-contain" />
                                        </Link>
                                        <Link href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                                            <Image src="/contact-us-linkedin.png" alt="LinkedIn" width={72} height={72} className="object-contain" />
                                        </Link>
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#D10000] text-white rounded-full pl-7 pr-2 py-2 transition-colors"
                                    >
                                        <span className="font-body font-medium text-[20px]">Submit</span>
                                        <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white border border-[#FF0000]">
                                            <Image src="/contact-us-arrow.png" alt="Arrow" width={10} height={10} className="object-contain" />
                                        </div>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
