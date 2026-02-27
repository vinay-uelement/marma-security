import Banner from "@/components/global/Banner";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner
          backgroundImage="banner-home.png" // Solid dark bg for testing before image is added
          heightVariant="900"
          title={<>Radically Simplified <br className="hidden md:block" /><span className="text-[#FF0000]">Cybersecurity</span> for <br className="hidden lg:block" />Small Businesses and <br className="hidden lg:block" />Home</>}
          subtitle={<>Enterprise-grade cybersecurity that works in minutes. <br className="hidden sm:block" />No IT or technical expertise needed.</>}
          buttons={[
            { label: 'Order', href: '#', variant: 'primary', icon: true },
            { label: 'Store', href: '#', variant: 'outline', icon: true }
          ]}
          rightImageAlt="Marma Security Device"
        // rightImage="/your-device.png" // Uncomment when adding the device image later
        />
        <Testimonial />
      </main>
    </div>
  );
}
