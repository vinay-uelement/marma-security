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
                    src="/images/contact/contact-us-right.png"
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
                    <div className="flex flex-col justify-between h-full gap-0 w-full">

                        {/* Top block: "Let's Talk" + sub-heading */}
                        <div className="flex flex-col h-full">
                            {/* "Let's Talk" heading */}
                            <h2 className="contact-section-heading">
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
                            <h3 className="contact-subheading">
                                Get advice any time.
                            </h3>
                            <p className="contact-subheading-desc mt-3 max-w-[520px] lg:max-w-none">
                                Connect with our team for reliable, expert guidance whenever you need it.
                            </p>
                        </div>

                        {/* Contact Info Cards — bottom-aligned to match form height */}
                        <div className="flex flex-col gap-4 pt-10 w-full">
                            {/* Phone */}
                            <div className="flex items-center gap-6 bg-white rounded-[15px] px-6 py-5 shadow-sm border border-[#EBEBEB] w-full">

                                <div className="flex items-center justify-center w-[74px] h-[74px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image
                                        src="/images/contact/contact-us-calling-icon.png"
                                        alt="Phone"
                                        width={52}
                                        height={52}
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="contact-card-label">Phone Number</span>
                                    <span className="contact-card-value">+91 45687412232</span>
                                </div>

                            </div>

                            {/* Corporate Office */}
                            <div className="flex items-center gap-6 bg-white rounded-[15px] px-6 py-5 shadow-sm border border-[#EBEBEB] w-full">
                                <div className="flex items-center justify-center w-[74px] h-[74px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/images/contact/contact-us-map.png" alt="Location" width={52} height={52} className="object-contain" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="contact-card-label">Corporate Office</span>
                                    <span className="contact-card-value">sdfghjkfghjnmk., sdfghj</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-6 bg-white rounded-[15px] px-6 py-5 shadow-sm border border-[#EBEBEB]  w-full">
                                <div className="flex items-center justify-center w-[74px] h-[74px] rounded-full bg-[#EDEDED] shrink-0">
                                    <Image src="/images/contact/contact-us-mail.png" alt="Email" width={52} height={52} className="object-contain" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="contact-card-label">Email</span>
                                    <span className="contact-card-value">asdfghjk@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Social icons */}

                    </div>

                    {/* ───── Right Column: Form ───── */}
                    <div className="flex flex-col">
                        <h3 className="contact-form-heading mb-6">
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
                                            <Image src="/images/contact/contact-us-x.png" alt="X/Twitter" width={72} height={72} className="object-contain" />
                                        </Link>
                                        <Link href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                                            <Image src="/images/contact/contact-us-insta.png" alt="Instagram" width={72} height={72} className="object-contain" />
                                        </Link>
                                        <Link href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                                            <Image src="/images/contact/contact-us-linkedin.png" alt="LinkedIn" width={72} height={72} className="object-contain" />
                                        </Link>
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#D10000] text-white rounded-full pl-7 pr-2 py-2 transition-colors"
                                    >
                                        <span className="contact-submit-text">Submit</span>
                                        <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white border border-[#FF0000]">
                                            <Image src="/images/contact/contact-us-arrow.png" alt="Arrow" width={10} height={10} className="object-contain" />
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
