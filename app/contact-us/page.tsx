import type { Metadata } from "next";
import { PageHero, Section } from "../components/ui";
import { routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Jamie Achberger Group. Call, email, or visit our Allentown office — we're here to help you buy or sell in the Greater Lehigh Valley.",
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We are here for you"
        intro="Have a question, want a home value estimate, or ready to start your search? Reach out however works best — we respond quickly and personally."
      />

      <Section variant="cream" width="wide">
        <div className="contact-layout">
          <div>
            <p className="eyebrow">Reach the team</p>
            <div className="contact-detail">
              <p className="contact-detail__label">Direct</p>
              <p className="contact-detail__value">
                <a href={siteConfig.contact.directHref}>
                  {siteConfig.contact.direct}
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail__label">Office</p>
              <p className="contact-detail__value">
                <a href={siteConfig.contact.officeHref}>
                  {siteConfig.contact.office}
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail__label">Email</p>
              <p className="contact-detail__value">
                <a href={siteConfig.contact.emailHref}>
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail__label">Office Address</p>
              <p className="contact-detail__value">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Prefer to start online?</p>
            <div className="prose">
              <p>
                Get a fast, no-obligation estimate of your home's value, or jump
                straight into browsing active listings across the Lehigh Valley.
              </p>
            </div>
            <div
              className="cta-band__actions"
              style={{ justifyContent: "flex-start", marginTop: 8 }}
            >
              <a href={routes.homeValueReport} className="btn btn--solid">
                Free Home Value Report
              </a>
              <a href={routes.searchHomes} className="btn btn--ghost">
                Search Homes
              </a>
            </div>

            <p className="eyebrow" style={{ marginTop: 48 }}>
              Follow along
            </p>
            <div
              className="site-footer__social"
              style={{ gap: 20 }}
            >
              <a href={siteConfig.social.facebook} style={{ color: "var(--gold)" }}>
                Facebook
              </a>
              <a href={siteConfig.social.instagram} style={{ color: "var(--gold)" }}>
                Instagram
              </a>
              <a href={siteConfig.social.youtube} style={{ color: "var(--gold)" }}>
                YouTube
              </a>
              <a href={siteConfig.social.linkedin} style={{ color: "var(--gold)" }}>
                LinkedIn
              </a>
            </div>

            <p className="disclaimer">
              {siteConfig.name} · Brokered by {siteConfig.brokerage} ·{" "}
              {siteConfig.license}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
