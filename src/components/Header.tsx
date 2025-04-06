import Image from "next/image";
import Link from "next/link";
import MenuLinks from "@/components/MenuLinks";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="navbar fixed top-0 right-0 left-0 z-10 m-auto max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white hover:text-inherit focus:text-inherit lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-xl dropdown-content rounded-box z-1 mt-3 w-80 space-y-1 border border-neutral-800 bg-neutral-950 px-4 py-20 text-white shadow"
          >
            <MenuLinks smart />
            <li>
              <a
                href="tel:+971 50 503 5501"
                className="mt-8 ml-2 flex w-fit gap-2 border border-neutral-900 py-2 text-lg"
              >
                <FaPhoneVolume />
                +971 50 503 5501
              </a>
            </li>
          </ul>
        </div>
        <Link href="/" className="p-4">
          <Image
            src="/assets/images/pelican-logo.png"
            alt="Pelican Cargo Transport Logo"
            width={100}
            height={100}
            className="brightness-0 invert"
          />
        </Link>
      </div>
      <div className="navbar-center hidden text-white lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuLinks smart />
        </ul>
      </div>
      <div className="navbar-end p-4">
        <a href="tel:+971 50 503 5501" className="btn">
          <span className="lg:hidden">Call Now</span>
          <span className="hidden items-center gap-2 lg:flex">
            <FaPhoneVolume /> +971 50 503 5501
          </span>
        </a>
      </div>
    </div>
  );
}
