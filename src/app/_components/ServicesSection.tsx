import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-primary-content py-16 text-neutral-950">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <h2 className="lg:col-span-2">
            Wide range of <br />
            <span className="text-primary">transport</span> services
          </h2>
          <p className="m-auto max-w-lg text-neutral-600">
            Safe, Reliable, Flexible and Stable professional transportation
            services at competitive prices.
          </p>
        </div>

        <div className="mt-12 grid gap-x-4 gap-y-8 lg:grid-cols-2">
          <ServiceCard
            title="General Cargo Transportation"
            imageSrc="/assets/images/services/general-cargo.jpg"
          />
          <div className="divider m-0 lg:hidden" />
          <ServiceCard
            title="Heavy Equipment by Low bed Trailers"
            imageSrc="/assets/images/services/low-bed-trailer.jpg"
          />
          <div className="divider m-0 lg:hidden" />
          <ServiceCard
            title="FTL & LTL to GCC"
            imageSrc="/assets/images/services/ftl-ltl.jpg"
          />
          <div className="divider m-0 lg:hidden" />
          <ServiceCard
            title="Excess size Porta Cabins"
            imageSrc="/assets/images/services/portacabins.jpg"
            className="flex-row-reverse"
          />
          <div className="divider m-0 lg:hidden" />
          <ServiceCard
            title="Curtain side, Flatbed and Box Trailers"
            imageSrc="/assets/images/services/flat-bed.jpg"
            className="flex-row-reverse"
          />
          <div className="divider m-0 lg:hidden" />
          <ServiceCard
            title="Door to door delivery in GCC"
            imageSrc="/assets/images/services/door-door.jpg"
            className="flex-row-reverse"
          />
        </div>
      </div>
    </section>
  );
}
