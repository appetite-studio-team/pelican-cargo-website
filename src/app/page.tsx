import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import FeaturesSection from "./_components/FeaturesSection";
import StatsSection from "./_components/StatsSection";
import PelicanMarquee from "@/components/PelicanMarquee";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <PelicanMarquee />
        <ServicesSection />
        <FeaturesSection />
        <StatsSection />
      </main>
    </div>
  );
}
