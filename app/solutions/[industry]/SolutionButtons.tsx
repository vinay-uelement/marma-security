"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/global/Button";
import BookDemoModal from "@/components/home/BookDemoModal";

interface SolutionButtonsProps {
  ctaLink: string;
  buttonText: string;
}

export default function SolutionButtons({ ctaLink, buttonText }: SolutionButtonsProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href={ctaLink}>
          <Button icon variant="primary" label={buttonText} />
        </Link>
        <Button 
          icon
          variant="secondary" 
          label="Book a Demo" 
          onClick={() => setIsDemoModalOpen(true)} 
          className="!text-black !border-black/30 hover:!bg-black/5"
        />
      </div>
      <BookDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
}
