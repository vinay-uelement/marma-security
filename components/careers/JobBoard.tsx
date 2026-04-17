"use client";

import React from "react";
import { ArrowUpRight, MapPin, Briefcase, Clock } from "lucide-react";
import Button from "../global/Button";

const jobs = [

  {
    id: 1,
    title: "Digital Marketing Executive (1-3 Years)",
    department: "Marketing",
    location: "Pune, India",
    type: "Full-time",
    description: "Looking to grow in a fast-paced cybersecurity product company? This could be your next big move. We are looking for a creative and data-driven marketer to drive our growth initiatives.",
    requirements: [
      "1–3 years of experience in Digital Marketing",
      "Hands-on experience with Google Ads, SEO, LinkedIn, and Analytics",
      "Strong interest in performance marketing & lead generation",
      "Excellent written and verbal communication skills"
    ],
    goodToHave: [
      "Exposure to Cybersecurity / SaaS / Product-based companies"
    ],
    responsibilities: [
      "Experiment with and scale marketing campaigns",
      "Drive high-quality lead generation",
      "Work closely with tech and product teams to refine messaging",
      "Analyze and report on campaign performance"
    ]
  },
];

import JobDetailModal from "./JobDetailModal";

export default function JobBoard() {
  const [selectedJob, setSelectedJob] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <section id="openings" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <h2 className="font-banner text-[32px] md:text-[48px] text-[#1E293B] mb-4">
              Open <span className="text-brand-red">Positions</span>
            </h2>
            <p className="font-title text-[18px] text-[#64748B] max-w-[600px]">
              Explore our current openings and find your place in the future of cybersecurity.
            </p>
          </div>
          <div className="flex items-center gap-4 text-brand-red font-title font-medium">
            <span className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> {jobs.length} Open Roles
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group relative bg-white border border-[#E2E8F0] rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-brand-red/30 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-red/10 text-brand-red text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#94A3B8] text-[14px]">
                      <Clock className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                  <h3 className="font-banner text-[24px] md:text-[28px] text-[#1E293B] group-hover:text-brand-red transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[#64748B] text-[16px]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-red" /> {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleApply(job)}
                    className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-xl font-title font-medium transition-all duration-300 hover:bg-brand-red-hover hover:shadow-lg hover:gap-3 group-hover:translate-x-0"
                  >
                    Apply Now <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <JobDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          job={selectedJob}
        />

        <div className="mt-16 bg-white border border-[#E2E8F0] rounded-[32px] p-8 md:p-12 text-center shadow-sm">
          <h3 className="font-banner text-[28px] text-[#1E293B] mb-4">
            Don't see a role that fits?
          </h3>
          <p className="font-title text-[18px] text-[#64748B] mb-8 max-w-[700px] mx-auto">
            We're always looking for talented individuals who are passionate about cybersecurity. Send us a general application and we'll keep you in mind for future roles.
          </p>
          <Button label="General Application" variant="primary" icon={true} className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
