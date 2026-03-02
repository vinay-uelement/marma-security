import Banner from "@/components/global/Banner";
import SolutionsTabs from "@/components/solutions/SolutionsTabs";
import SolutionsInfo from "@/components/solutions/SolutionsInfo";

export default function SolutionsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
            <Banner
                backgroundImage="/solutionbanner.png"
                titleClassName="font-banner font-normal text-4xl md:text-[50px] leading-tight md:leading-[60px] text-white drop-shadow-sm"
                title={
                    <>
                        Complete <br className="hidden sm:block" />
                        <span className="text-[#FF0000]">Cybersecurity</span> for <br className="hidden sm:block" />
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
