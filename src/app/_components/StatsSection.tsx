import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="bg-neutral-950 px-8 py-16 text-white">
      <div className="m-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        <Image
          className="rounded lg:ml-auto"
          src="/assets/images/truck.jpg"
          height={600}
          width={400}
          alt="heavy truck"
        />
        <div className="my-auto">
          <div className="stats stats-vertical shadow">
            <div className="stat">
              <div className="stat-value lg:text-7xl">
                25<span className="text-primary align-top text-3xl">+</span>
              </div>
              <div className="stat-title text-primary-content text-3xl">
                Trucks Ready
              </div>
            </div>

            <div className="stat">
              <div className="stat-value lg:text-7xl">
                2,640<span className="text-primary align-top text-3xl">+</span>
              </div>
              <div className="stat-title text-primary-content text-3xl">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
