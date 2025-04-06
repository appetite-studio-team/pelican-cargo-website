"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLinks({ smart = false }) {
  const pathname = usePathname();
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <>
      {menuItems.map((item) => {
        // Only check for active state if smart prop is true
        const isActive = smart ? pathname === item.href : false;

        return (
          <li key={item.href}>
            {isActive ? (
              <span
                className="cursor-default bg-transparent opacity-50"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        );
      })}
    </>
  );
}
