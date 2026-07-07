import Link from "next/link";
import { footerNav, routes, siteConfig, socialLinks } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Link href={routes.home} className="site-footer__logo">
            The Jamie Achberger Group
          </Link>
          <p className="site-footer__tagline">
            Real estate in the {siteConfig.region} and beyond.
          </p>
          <div className="site-footer__social">
            <a href={socialLinks.facebook}>Facebook</a>
            <a href={socialLinks.instagram}>Instagram</a>
            <a href={socialLinks.youtube}>YouTube</a>
            <a href={socialLinks.linkedin}>LinkedIn</a>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {footerNav.map((column) => (
            <div key={column.heading} className="site-footer__column">
              <h4 className="site-footer__heading">{column.heading}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="site-footer__contact">
        <div className="contact-block">
          <h4 className="contact-label">Direct</h4>
          <a href={siteConfig.contact.directHref} className="contact-text">
            {siteConfig.contact.direct}
          </a>
        </div>
        <div className="contact-block">
          <h4 className="contact-label">Office</h4>
          <a href={siteConfig.contact.officeHref} className="contact-text">
            {siteConfig.contact.office}
          </a>
        </div>
        <div className="contact-block">
          <h4 className="contact-label">Email</h4>
          <a href={siteConfig.contact.emailHref} className="contact-text">
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="contact-block">
          <h4 className="contact-label">Address</h4>
          <p className="contact-text">{siteConfig.contact.address}</p>
        </div>
      </div>

      <div className="site-footer__compliance">
        <p>{siteConfig.brokerage}</p>
        <p>{siteConfig.license}</p>
      </div>

      <div className="site-footer__bottom">
        <p>
          &copy; 2026 {siteConfig.name} · Brokered by {siteConfig.brokerage}
        </p>
      </div>
    </footer>
  );
}
