"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="logo">
          {">"}tyl.sh_
        </Link>
        <nav>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href ||
                (href !== "/" && pathname.startsWith(href))
                  ? "active"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
