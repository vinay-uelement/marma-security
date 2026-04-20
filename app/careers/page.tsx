import React from "react";
import CareerHero from "@/components/careers/CareerHero";
import WhyMarma from "@/components/careers/WhyMarma";
import JobBoard from "@/components/careers/JobBoard";

export const metadata = {
  title: "Careers | Join Marma Security",
  description: "Join the mission to radically simplify cybersecurity. Explore open roles at Marma Security and build the future of digital defense.",
};

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <CareerHero />

      {/* Why Join Marma Content */}
      <WhyMarma />

      {/* Job Board Section */}
      <JobBoard />

    </main>
  );
}
