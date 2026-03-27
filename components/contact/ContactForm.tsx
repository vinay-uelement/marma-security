'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../global/Button';

interface ContactFormProps {
    onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
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
        if (onSuccess) onSuccess();
    };

    return (
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
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email here"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-form-input"
                        required
                    />
                </div>

                {/* Row 2: Subject + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-form-select"
                        required
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
                        required
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
                    required
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
    );
}
