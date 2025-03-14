import FeaturesSection from "../_components/FeaturesSection";
import ExtServicesSection from "./_components/ExtServicesSection";
import PelicanMarquee from "@/components/PelicanMarquee";

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
        <PelicanMarquee />
      </main>
    </div>
  );
}
