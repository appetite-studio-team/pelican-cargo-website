import ExtServiceCard from "./ExtServiceCard";

export default function ExtServicesSection() {
  return (
    <section className="bg-primary-content pt-20 pb-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ExtServiceCard
            title="General Cargo Transportation"
            imageSrc="/assets/images/services/general-cargo.jpg"
          />
          <ExtServiceCard
            title="Heavy Equipment by Low bed Trailers"
            imageSrc="/assets/images/services/low-bed-trailer.jpg"
          />
          <ExtServiceCard
            title="FTL & LTL to GCC"
            imageSrc="/assets/images/services/ftl-ltl.jpg"
          />
          <ExtServiceCard
            title="Excess size Porta Cabins"
            imageSrc="/assets/images/services/portacabins.jpg"
          />
          <ExtServiceCard
            title="Curtain side, Flatbed and Box Trailers"
            imageSrc="/assets/images/services/flat-bed.jpg"
          />
          <ExtServiceCard
            title="Door to door delivery in GCC"
            imageSrc="/assets/images/services/door-door.jpg"
          />
        </div>
      </div>
    </section>
  );
}
