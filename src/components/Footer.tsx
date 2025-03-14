import MenuLinks from "@/components/MenuLinks";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center p-16">
      <div className="py-20">
        <p className="font-mono">Let&apos;s talk then</p>
        <a
          href="tel:+971 51 115 4114"
          className="text-3xl font-black hover:underline lg:text-5xl"
        >
          +971 51 115 4114
        </a>
      </div>
      <aside>
        <Image
          src="/assets/images/pelican-logo.png"
          alt="Pelican Cargo Transport Logo"
          width={100}
          height={100}
        />
        <p className="font-bold">Pelican Cargo Transport LLC</p>
        <p>Providing reliable services since 2002</p>
        <ul className="my-4 flex gap-4 font-bold">
          <MenuLinks />
        </ul>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </footer>
  );
}
