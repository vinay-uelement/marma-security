"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Paperclip } from "lucide-react";

interface ApplicationFormProps {
  job: {
    title: string;
  };
  onSuccess: () => void;
}

export default function ApplicationForm({ job, onSuccess }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    intro: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const subject = `Job Application: ${job.title}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\n\nIntroduction:\n${formData.intro}\n\n[IMPORTANT: PLEASE ATTACH YOUR RESUME TO THIS EMAIL BEFORE SENDING]`;

    const mailtoLink = `mailto:careers@marmasec.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success state in UI
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSuccess();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="font-banner text-[24px] text-[#1E293B] mb-2">Email Client Opened!</h3>
        <p className="font-title text-[#64748B] mb-6 max-w-[300px]">
          Please make sure to <span className="text-brand-red font-bold">attach your resume</span> in the email before hitting send.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-[#1E293B] uppercase tracking-wider">Full Name</label>
        <input
          required
          type="text"
          placeholder="John Doe"
          className="w-full px-6 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-[#1E293B] uppercase tracking-wider">Phone Number</label>
        <input
          required
          type="tel"
          placeholder="+91 98765 43210"
          className="w-full px-6 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-[#1E293B] uppercase tracking-wider">Brief Introduction</label>
        <textarea
          required
          rows={4}
          placeholder="Tell us a bit about yourself..."
          className="w-full px-6 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
          value={formData.intro}
          onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-red text-white py-4 rounded-xl font-title font-bold text-[18px] transition-all hover:bg-brand-red-hover hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {isSubmitting ? "Opening Email..." : "Submit Application"}
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
