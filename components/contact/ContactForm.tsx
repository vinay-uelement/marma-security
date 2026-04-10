'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../global/Button';
import { submitContactForm } from '@/lib/contactApi';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear status when user starts typing again
        if (submitStatus) setSubmitStatus(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await submitContactForm({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            extra_field: {
                source: 'Contact Us Page',
                subject: formData.subject,
            }
        });

        setIsSubmitting(false);

        if (result.success) {
            setSubmitStatus({ type: 'success', message: result.message });
            setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
            if (onSuccess) onSuccess();
        } else {
            setSubmitStatus({ type: 'error', message: result.message });
        }
    };

    return (
        <div className="bg-white rounded-[12px] border border-[#E5E5E5] shadow-sm p-6 md:p-8 lg:p-10 flex flex-col h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Status Message */}
                {submitStatus && (
                    <div className={`px-4 py-3 rounded-lg text-sm font-medium ${submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                        {submitStatus.message}
                    </div>
                )}

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
                        disabled={isSubmitting}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email here"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-form-input"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                {/* Row 2: Subject + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`contact-form-select ${formData.subject === '' ? 'text-[#989898]' : 'text-text-dark'}`}
                        required
                        disabled={isSubmitting}
                    >
                        <option value="" disabled>Area of interest</option>
                        <option value="sales-agent">Becoming a Sales Agent</option>
                        <option value="partnership">Partnership</option>
                        <option value="investors">Investors</option>
                        <option value="product-question">Product Questions</option>
                        <option value="other">Other</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-form-input"
                        required
                        disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    <Button icon label={isSubmitting ? "Submitting..." : "Submit"} />
                </div>

            </form>
        </div>
    );
}

