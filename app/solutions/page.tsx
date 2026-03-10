import HighlightedText from "@/components/global/HighlightedText";
import Banner from "@/components/global/Banner";
import SolutionsTabs from "@/components/solutions/SolutionsTabs";
import SolutionsInfo from "@/components/solutions/SolutionsInfo";
import Image from "next/image";

export default function SolutionsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
            <Banner
                backgroundImage="/solutionbanner.png"
                titleClassName="font-banner font-normal text-[32px] md:text-[45px] leading-[1.2] md:leading-[60px] tracking-[-0.01em] text-white drop-shadow-sm"
                title={
                    <>
                        Complete <br className="hidden sm:block" />
                        <HighlightedText text="Cybersecurity" /> for <br className="hidden sm:block" />
                        Homes, Businesses <br className="hidden sm:block" />
                        and others.
                    </>
                }
                buttons={[
                    {
                        label: "Explore",
                        variant: "primary",
                        href: "#explore",
                        icon: true
                    }
                ]}
                rightImage="/solution-banner-right.png"
                showRightImageCircle={true}
                heightVariant="900"
            />

            <SolutionsTabs />

            <SolutionsInfo />
        </main>
    );
}
