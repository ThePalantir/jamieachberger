import { siteConfig } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
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

      <div className="site-footer__social">
        <a href={siteConfig.social.facebook}>Facebook</a>
        <a href={siteConfig.social.instagram}>Instagram</a>
        <a href={siteConfig.social.youtube}>YouTube</a>
        <a href={siteConfig.social.linkedin}>LinkedIn</a>
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
