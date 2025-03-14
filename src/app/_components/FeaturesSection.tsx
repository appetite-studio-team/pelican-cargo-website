import FeatureCard from "./FeatureCard";
import {
  PiFileLock,
  PiGpsFixFill,
  PiHandshake,
  PiShieldCheck,
  PiStamp,
  PiStrategy,
} from "react-icons/pi";

export default function FeaturesSection() {
  return (
    <section className="pt-20 pb-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <h2 className="text-neutral-800 lg:col-span-2">
            10
            <span className="text-primary align-top text-2xl lg:text-3xl">
              +
            </span>{" "}
            years of expertise
          </h2>
          <p className="m-auto max-w-lg text-neutral-500">
            Pelican transport is one of Dubai&apos;s best transport company in
            international and local moving services.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={
              <PiFileLock className="rounded bg-blue-50 p-3 text-5xl text-blue-700" />
            }
            title="Contractual Lease"
            description="Whether you are looking for an easy way to complete your fleet or support a temporary activity increase, contractual lease presents all the benefits of operating a fleet without the purchasing and ownership liabilities."
          />
          <FeatureCard
            icon={
              <PiStamp className="rounded bg-red-50 p-3 text-5xl text-red-700" />
            }
            title="Regulatory Affairs"
            description="Our experienced team handles all types of documents required for moving any shipment cross-border or within the UAE. We provide an online bill of entry for bonxded or non-bonded shipments, online certificate of origin and online health certificate."
          />
          <FeatureCard
            icon={
              <PiStrategy className="rounded bg-yellow-50 p-3 text-5xl text-yellow-700" />
            }
            title="Customized Solutions"
            description="Identifying potential opportunities and eliminating risks is part of our modus operandi. We developed a precise methodology designed to find the most adequate solution for you, in a time and cost-efficient manner. We can also create custom-made containers and trailers as per your needs."
          />
          <FeatureCard
            icon={
              <PiGpsFixFill className="rounded bg-violet-50 p-3 text-5xl text-violet-700" />
            }
            title="GPS Tracking"
            description="Know the exact location of your shipments and the process stage at every moment thanks to our state-of-the-art tracking and logistics technologies."
          />
          <FeatureCard
            icon={
              <PiShieldCheck className="rounded bg-green-50 p-3 text-5xl text-green-700" />
            }
            title="24/7 Security Monitoring"
            description="Our robust monitoring system is powered by top-notch technologies. All the trucks and trailers on the road are monitored by a 24/7 security control room."
          />
          <FeatureCard
            icon={
              <PiHandshake className="rounded bg-orange-50 p-3 text-5xl text-orange-700" />
            }
            title="Bonded licensing"
            description="Pelican transport is one of the few companies that can provide bonded services from any Free Zone inside Dubai for exports to GCC countries."
          />
        </div>
      </div>
    </section>
  );
}
