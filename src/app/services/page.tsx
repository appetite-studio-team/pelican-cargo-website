import Marquee from "@/components/Marquee";
import FeaturesSection from "../_components/FeaturesSection";
import ExtServicesSection from "./_components/ExtServicesSection";
import { PiCompassRoseThin } from "react-icons/pi";

export default function ServicesPage() {
  return (
    <div>
      <main>
        <div className="bg-neutral-950">
          <div className="m-auto max-w-5xl space-y-2 px-8 pt-32 pb-20 text-white">
            <h1 className="max-w-3xl">Services</h1>
          </div>
        </div>
        <ExtServicesSection />
        <FeaturesSection />
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
      </main>
    </div>
  );
}
