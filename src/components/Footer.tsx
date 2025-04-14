import MenuLinks from "@/components/MenuLinks";
import Image from "next/image";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center p-16">
      <div className="py-20">
        <p className="font-mono">Let&apos;s talk then</p>
        <a
          href="tel:+971 50 503 5501"
          className="text-3xl font-black hover:underline lg:text-5xl"
        >
          +971 50 503 5501
        </a>
      </div>
      <aside>
        <Image
          src="/assets/images/pelican-logo.png"
          alt="Pelican Truck Cargo Transport Logo"
          width={100}
          height={100}
        />
        <p className="font-bold">Pelican Truck Cargo Transport LLC</p>
        <p>Providing reliable services since 2002</p>
        <ul className="my-4 flex gap-4 font-bold">
          <MenuLinks />
        </ul>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <Socials />
      </nav>
    </footer>
  );
}
