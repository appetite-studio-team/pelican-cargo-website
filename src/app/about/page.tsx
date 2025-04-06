import Image from "next/image";
import Link from "next/link";
import { PiRocket, PiStrategy } from "react-icons/pi";
import StatsSection from "../_components/StatsSection";
import FeaturesSection from "../_components/FeaturesSection";
import PelicanMarquee from "@/components/PelicanMarquee";

export default function AboutPage() {
  return (
    <div>
      <main>
        <div className="bg-neutral-950">
          <div className="m-auto max-w-5xl space-y-2 px-8 pt-32 pb-20 text-white">
            <h1 className="max-w-3xl">About us</h1>
          </div>
        </div>
        <div className="hero bg-base-200 py-12">
          <div className="hero-content flex-col gap-6 lg:flex-row lg:gap-12">
            <Image
              className="rounded-lg shadow-2xl"
              src="/assets/images/truck2.jpg"
              height={600}
              width={400}
              alt="heavy truck"
            />
            <div>
              <p className="max-w-2xl py-6 text-2xl lg:text-3xl">
                Pelican Truck Cargo Transport is one of Dubai&apos;s best
                transport company in international and local moving services,
                anchored in innovation and customer care by cultivating a unique
                approach to land transport.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="m-auto grid max-w-6xl gap-8 px-4 py-20 lg:grid-cols-2">
          <div className="rounded border border-neutral-200 p-4">
            <PiRocket className="m-auto my-4 text-7xl" />
            <p className="indent-8 leading-8">
              Pelican Truck Cargo Transport aims at providing a Safe, Reliable,
              Flexible and Stable professional transport services to our
              customers at competitive prices. We are a wide range of land
              transportation services including specialized Project Movement,
              Turnkey Transportation, Transit & Re-exporting.
            </p>
          </div>
          <div className="rounded border border-neutral-200 p-4">
            <PiStrategy className="m-auto my-4 text-7xl" />
            <p className="indent-8 leading-8">
              The fastest and safest way to get our customers&apos; goods to the
              market, is to control each link in the transport chain. And we do.
              We are able to handle all operational aspects, from route planning
              to customs clearance documentation. Effective Quality Management
              Systems are also in place to ensure customer satisfaction and pave
              for continual growth.
            </p>
          </div>
        </div>
        <StatsSection />
        <FeaturesSection />
        <PelicanMarquee />
      </main>
    </div>
  );
}
