'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section className="w-full bg-white py-12 md:py-16 lg:py-[100px]">
            <div className="w-full bg-[#F1F1F1]">
                <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-10 lg:gap-[40px]">

                        {/* Left Column - Info */}
                        <div className="flex flex-col">
                            {/* Heading */}
                            <h2 className="font-title font-bold text-[32px] leading-none text-[#323232] mb-4">
                                Get advice any<br />time.
                            </h2>
                            <p className="font-body font-light text-[20px] leading-none text-[#000000] mb-10 lg:mb-[72px]">
                                Connect with our team for reliable, expert guidance whenever you need it.
                            </p>

                            {/* Contact Info Cards */}
                            <div className="flex flex-col gap-4 mb-10 lg:mb-[72px]">
                                {/* Phone Number */}
                                <div className="flex items-center gap-4 bg-white rounded-[12px] p-4 border border-[#F1F1F1]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <Image src="/contact-us-calling-icon.png" alt="Phone" width={74} height={74} className="object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-title font-medium text-[14px] leading-none text-[#000000]">PHONE NUMBER</span>
                                        <span className="font-body font-light text-[14px] leading-none text-[#666666]">+91 4069741232</span>
                                    </div>
                                </div>

                                {/* Corporate Office */}
                                <div className="flex items-center gap-4 bg-white rounded-[12px] p-4 border border-[#F1F1F1]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <Image src="/contact-us-map.png" alt="Location" width={74} height={74} className="object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-title font-medium text-[14px] leading-none text-[#000000]">CORPORATE OFFICE</span>
                                        <span className="font-body font-light text-[14px] leading-none text-[#666666]">saifghalphone, saifghi</span>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 bg-white rounded-[12px] p-4 border border-[#F1F1F1]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <Image src="/contact-us-mail.png" alt="Email" width={74} height={74} className="object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-title font-medium text-[14px] leading-none text-[#000000]">EMAIL</span>
                                        <span className="font-body font-light text-[14px] leading-none text-[#666666]">asdfghjk@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4 justify-start lg:justify-end">
                                <Link href="#" className="flex items-center justify-center w-[72px] h-[72px] rounded-full  hover:bg-[#E10000] transition-colors">
                                    <Image src="/contact-us-x.png" alt="X/Twitter" width={72} height={72} className="object-contain" />
                                </Link>
                                <Link href="#" className="flex items-center justify-center w-[72px] h-[72px] rounded-full hover:bg-[#E10000] transition-colors">
                                    <Image src="/contact-us-insta.png" alt="Instagram" width={72} height={72} className="object-contain" />
                                </Link>
                                <Link href="#" className="flex items-center justify-center w-[72px] h-[72px] rounded-full hover:bg-[#E10000] transition-colors">
                                    <Image src="/contact-us-linkedin.png" alt="LinkedIn" width={72} height={72} className="object-contain" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="flex flex-col">
                            <h3 className="font-title font-bold text-[32px] leading-none text-[#000000] mb-6 md:mb-8">
                                Let&apos;s talk about your business.
                            </h3>
                            <div className="flex flex-col bg-white rounded-[8px] md:rounded-[10px] shadow-sm border border-[#F1F1F1] p-6 md:p-8 lg:p-10 w-full">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                                    {/* Row 1: Name + Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name here"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 md:py-3.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[8px] font-body font-light text-[18px] leading-none text-[#323232] placeholder:text-[#989898] outline-none focus:border-[#FF0000] transition-colors"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="You email here"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 md:py-3.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[8px] font-body font-light text-[18px] leading-none text-[#323232] placeholder:text-[#989898] outline-none focus:border-[#FF0000] transition-colors"
                                        />
                                    </div>

                                    {/* Row 2: Subject + Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 md:py-3.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[8px] font-body font-light text-[18px] leading-none text-[#323232] text-[#989898] outline-none focus:border-[#FF0000] transition-colors appearance-none"
                                        >
                                            <option value="" disabled className="text-[#989898]">Select Subject</option>
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
                                            className="w-full px-4 py-3 md:py-3.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[8px] font-body font-light text-[18px] leading-none text-[#323232] placeholder:text-[#989898] outline-none focus:border-[#FF0000] transition-colors"
                                        />
                                    </div>

                                    {/* Message */}
                                    <textarea
                                        name="message"
                                        placeholder="Tell us a few words"
                                        rows={12}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 md:py-3.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[8px] font-body font-light text-[18px] leading-normal text-[#323232] placeholder:text-[#989898] outline-none focus:border-[#FF0000] transition-colors resize-none"
                                    />

                                    {/* Submit Button */}
                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#E10000] text-white rounded-full pl-6 pr-2 py-2 transition-colors group"
                                        >
                                            <span className="font-body font-medium text-[24px] md:text-[24px]">Submit</span>
                                            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white border border-[#FF0000]">
                                                <Image src="/contact-us-arrow.png" alt="Arrow" width={8} height={8} className="object-contain" />
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
