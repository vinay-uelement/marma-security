"use client";

import React, { useState, useEffect } from "react";
import { X, MapPin, Briefcase, Clock, Building2, CheckCircle2 } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

interface JobDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: any;
}

export default function JobDetailModal({ isOpen, onClose, job }: JobDetailModalProps) {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setShowForm(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-[850px] max-h-[90vh] overflow-hidden rounded-[32px] flex flex-col animate-in zoom-in slide-in-from-bottom-8 duration-500"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(24px) saturate(180%)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 border-b border-[#E2E8F0] shrink-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-brand-red/10 text-brand-red text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {job.department}
              </span>
              <span className="flex items-center gap-1.5 text-[#64748B] text-[14px]">
                <Clock className="w-4 h-4" /> {job.type}
              </span>
            </div>
            <h2 className="font-banner text-[28px] md:text-[32px] text-[#1E293B] leading-tight">
              {job.title}
            </h2>
            <div className="flex flex-wrap items-center gap-6 text-[#64748B]">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red" /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-red" /> Marma Private Limited
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between gap-4"
            style={{ "height": 'stretch' }}
          >
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#F1F5F9] rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-[#64748B]" />
            </button>

            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="hidden md:flex bg-brand-red text-white px-6 py-1 rounded-lg font-banner text-[16px] transition-all hover:bg-brand-red-hover hover:scale-105 active:scale-95 text-nowrap"
              >
                Apply Now
              </button>
            )}

          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {!showForm ? (
            <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-left-4 duration-500">
              {/* Description */}
              <div className="flex flex-col gap-4">
                <h4 className="font-banner text-[22px] text-[#1E293B]">About the Role</h4>
                <p className="font-title text-[18px] text-[#64748B] leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="flex flex-col gap-4">
                <h4 className="font-banner text-[22px] text-[#1E293B]">Key Responsibilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.responsibilities?.map((item: string, i: number) => (
                    <div key={i} className="flex gap-3 bg-[#F8FAFC] p-4 rounded-2xl border border-[#F1F5F9]">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span className="text-[#475569] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="flex flex-col gap-4">
                <h4 className="font-banner text-[22px] text-[#1E293B]">Requirements</h4>
                <ul className="flex flex-col gap-3">
                  {job.requirements?.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-[#475569]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Good to have */}
              {job.goodToHave && (
                <div className="flex flex-col gap-4">
                  <h4 className="font-banner text-[22px] text-[#1E293B]">Good to Have</h4>
                  <ul className="flex flex-col gap-3">
                    {job.goodToHave.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red/40 mt-2.5 shrink-0" />
                        <span className="leading-relaxed italic">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mobile Only Apply Button (Floating for better UX if needed, or just standard) */}
              <div className="md:hidden mt-8 py-6 flex justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-brand-red text-white py-4 rounded-2xl font-banner text-[18px]"
                >
                  Apply For This Position
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-[600px] mx-auto animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
              <div className="mb-8 flex flex-col items-center">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-brand-red font-title font-medium flex items-center gap-2 mb-4 hover:gap-3 transition-all"
                >
                  &larr; Back to job details
                </button>
                <h3 className="font-banner text-[28px] text-[#1E293B]">Submit Application</h3>
                <p className="text-[#64748B]">Applying for {job.title}</p>
              </div>

              <ApplicationForm
                job={job}
                onSuccess={() => {
                  // Optional: handle post-success if needed
                }}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
