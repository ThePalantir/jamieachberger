import Link from "next/link";
import { primaryNav, routes } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={routes.home} className="site-header__logo">
          THE JAMIE ACHBERGER GROUP
          <em>×</em>
          eXp REALTY
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href={routes.contact} className="site-header__contact-mobile">
          Contact
        </Link>
      </div>
    </header>
  );
}
