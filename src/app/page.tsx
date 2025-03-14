import Marquee from "@/components/Marquee";
import { PiCompassRoseThin } from "react-icons/pi";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import FeaturesSection from "./_components/FeaturesSection";
import StatsSection from "./_components/StatsSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <div>
          <Marquee className="bg-neutral-950 font-mono text-2xl text-white uppercase lg:text-3xl">
            <span className="mx-8">Safe</span>
            <PiCompassRoseThin />
            <span className="mx-8">Reliable</span>
            <PiCompassRoseThin />
            <span className="mx-8">Flexible</span>
            <PiCompassRoseThin />
            <span className="mx-8">Stable</span>
            <PiCompassRoseThin />
            <span className="mx-8">Professional</span>
            <PiCompassRoseThin />
          </Marquee>
        </div>
        <ServicesSection />
        <FeaturesSection />
        <StatsSection />
      </main>
    </div>
  );
}
