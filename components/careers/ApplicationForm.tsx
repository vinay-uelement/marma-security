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
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Note: We intentionally do NOT use preventDefault by default here. 
  // We want the native form behavior to trigger the POST action to the target iframe ONLY if validation passes.
  const handleNativeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    // 3. File Size Validation (Max 5MB)
    if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
      e.preventDefault();
      setValidationError("Resume file size must be less than 5MB.");
      return;
    }

    // Validation passed, clear errors and allow native submit
    setValidationError("");
    setIsSubmitting(true);

    // As the form submits to the hidden iframe, we simulate the success state 
    // locally in the UI since cross-origin policies prevent us from intercepting the iframe's onload event reliably.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setResumeFile(null);
      setTimeout(() => {
        onSuccess();
      }, 3000);
    }, 2500); // 2.5s gives the iframe enough time to complete the actual network request
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="font-banner text-[24px] text-[#1E293B] mb-2">Application Submitted!</h3>
        <p className="font-title text-[#64748B] mb-6 max-w-[300px]">
          Thank you for applying to the {job.title} role. Our team will review your application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <iframe name="hidden_submit_frame" id="hidden_submit_frame" style={{ display: "none" }}></iframe>
      <form
        action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORM_SUBMIT_EMAIL}`}
        method="POST"
        target="hidden_submit_frame"
        encType="multipart/form-data"
        onSubmit={handleNativeSubmit}
        className="flex flex-col gap-5"
      >
        {/* FormSubmit Configuration Fields */}
        <input type="hidden" name="_subject" value={`New Job Application: ${job.title}`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="Job Applied For" value={job.title} />

        {/* Validation Error Banner */}
        {validationError && (
          <div className="p-4 bg-red-50 text-brand-red rounded-xl flex items-center gap-3 font-title text-[15px] border border-red-100">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Full Name</label>
            <input
              required
              type="text"
              name="Name"
              placeholder="John Doe"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Email</label>
            <input
              required
              type="email"
              name="Email"
              placeholder="john@example.com"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Phone</label>
            <input
              required
              type="tel"
              name="Phone"
              placeholder="+91 98765 43210"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">City</label>
            <input
              required
              type="text"
              name="City"
              placeholder="Pune"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Total Experience</label>
            <input
              required
              type="text"
              name="Total Experience"
              placeholder="e.g., 3 Years"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Relevant Experience</label>
            <input
              required
              type="text"
              name="Relevant Experience"
              placeholder="e.g., 2 Years"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Current CTC</label>
            <input
              required
              type="text"
              name="Current CTC"
              placeholder="e.g., 8 LPA"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Expected CTC</label>
            <input
              required
              type="text"
              name="Expected CTC"
              placeholder="e.g., 10 LPA"
              className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider">Notice Period</label>
          <input
            required
            type="text"
            name="Notice Period"
            placeholder="e.g., 30 Days"
            className="w-full px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-brand-red/50 transition-colors placeholder-slate-400/60"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-[#1E293B] capitalize tracking-wider border-0 h-auto p-0 m-0 leading-none">Attach Resume</label>
          <label className="w-full px-5 py-4 bg-[#F8FAFC] border border-dashed border-[#CBD5E1] rounded-xl cursor-pointer hover:bg-[#F1F5F9] transition-colors flex items-center justify-center gap-3">
            <Paperclip className="w-5 h-5 text-[#64748B]" />
            <span className="text-[#64748B] font-medium text-[15px]">
              {resumeFile ? resumeFile.name : "Click to upload resume (PDF, DOCX)"}
            </span>
            <input
              type="file"
              name="Attachment"
              required
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setResumeFile(e.target.files[0]);
                }
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-red text-white py-4 mt-2 rounded-xl font-title font-semibold text-[18px] transition-all hover:bg-brand-red-hover hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
        >
          {isSubmitting ? "Sending Application..." : "Submit Application"}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </>
  );
}
