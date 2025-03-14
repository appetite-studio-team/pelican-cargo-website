import Link from "next/link";

export default function MenuLinks() {
  return (
    <>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/about">About us</Link>
      </li>
      <li>
        <Link href="/contact">Contact us</Link>
      </li>
    </>
  );
}
