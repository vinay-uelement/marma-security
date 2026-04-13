import React from 'react';
import Link from 'next/link';
import Banner from "@/components/global/Banner";
import HighlightedText from "@/components/global/HighlightedText";
import Button from "@/components/global/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF] snap-start">
      <Banner
        backgroundImage="/images/banners/homepage-banner.webp"
        heightVariant="900"
        ContinerClass="h-dvh"
        title={
          <>
            404 - Page <HighlightedText text="Not Found" imageClassName="bottom-[-15px] md:bottom-[-20px] right-[5px]" />
          </>
        }
        titleClassName="font-banner font-normal text-[36px] md:text-[50px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white"
        subtitle={
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
            <div>
              Oops! It seems you've ventured into uncharted territory. <br className="hidden md:block" />
              The page you are looking for has been moved, deleted, or simply doesn't exist.
            </div>

            <div className="flex flex-wrap items-center justify-start w-full">
              <Link href="/">
                <Button
                  label="Return Home"
                  variant="primary"
                  icon={true}
                />
              </Link>
            </div>
          </div>
        }
        subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-[#E0E0E0] max-w-[650px] mt-4"
      />
    </main>
  );
}
