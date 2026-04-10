

'use client';

import React, { useState } from 'react';
import ContactSection from "@/components/contact/ContactSection";
import ContactModal from '@/components/contact/ContactModal';
import Banner from '@/components/global/Banner';

export default function ContactUsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
            <div className="snap-start md:pt-0 pt-24">
                <Banner
                    backgroundImage="/images/banners/banner-contact-new1.webp"
                    heightVariant="900"
                    ContinerClass="h-dvh"
                    title={
                        <>
                            We’re here to help you secure <br className="block " /> what matters most.
                        </>
                    }
                    titleClassName="font-banner font-normal text-[28px] md:text-[36px] leading-[1.2] md:leading-[50px] tracking-[-0.01em] text-white"
                    subtitle={
                        <>
                            Have questions about Marma or want to learn how our solutions fit your needs? Our team is ready to
                            assist you with product details, deployment guidance, and support. Reach out to us today, and let’s build
                            a safer digital environment together.
                        </>
                    }
                    subtitleClassName="font-title font-light text-[18px] md:text-[24px] leading-[1.4] md:leading-[34px] tracking-[-0.01em] text-[#E0E0E0] max-w-[550px]"
                    buttons={[
                        {
                            label: "Contact Us",
                            variant: "primary",
                            onClick: toggleModal,
                            icon: true,
                        },
                    ]}
                    rightImage="/images/banners/banner-contact-us-mobile.webp"
                    rightImageAlt="Marma Security Mobile App"
                    rightImageClassName="!w-[40vh] right-[70%] md:!w-[681px] md:!h-[513px] md:!bottom-[-35px]"
                />
            </div>

            <div className="snap-start pt-24">
                <ContactSection />
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}

