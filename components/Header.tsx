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
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
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
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
