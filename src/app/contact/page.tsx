import Image from "next/image";
import { PiMailboxBold, PiMapPinLight, PiPhoneBold } from "react-icons/pi";
import PelicanMarquee from "@/components/PelicanMarquee";

export default function ContactPage() {
  return (
    <div>
      <main>
        <div className="bg-neutral-950">
          <div className="m-auto max-w-5xl space-y-2 px-8 pt-32 pb-20 text-white">
            <h1 className="max-w-3xl">Contact us</h1>
          </div>
        </div>
        <div className="bg-primary-content px-6 py-12">
          <div className="m-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-2">
            <div className="rounded-lg bg-white px-4 py-20 lg:px-8">
              <div className="max-w-96 space-y-4">
                <PiMapPinLight className="text-3xl lg:text-4xl" />
                <p className="text-3xl font-bold lg:text-4xl">Dubai, UAE</p>
                <p className="max-w-80">
                  42 8B St - Ras Al Khor Industrial AreaRas - Al Khor -
                  Industrial Area 2 - Dubai
                </p>
                <div className="divider" />
                <a
                  href="mailto:info@pelicancargotransport.com"
                  className="flex items-center gap-2 font-medium"
                >
                  <PiMailboxBold className="bg-base-200 rounded-full p-2 text-4xl" />{" "}
                  info@pelicancargotransport.com
                </a>
                <a
                  href="tel:+971 50 503 5501"
                  className="flex items-center gap-2 font-medium"
                >
                  <PiPhoneBold className="bg-base-200 rounded-full p-2 text-4xl" />{" "}
                  (+971)50 503 5501
                </a>
              </div>
            </div>
            <Image
              className="rounded-lg shadow-2xl"
              src="/assets/images/dubai.jpg"
              height={500}
              width={500}
              alt="Dubai"
            />
          </div>
        </div>
        <PelicanMarquee />
      </main>
    </div>
  );
}
