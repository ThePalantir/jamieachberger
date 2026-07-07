import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { externalLinks, routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Featured Listings",
  description:
    "See featured and active listings from The Jamie Achberger Group across the Greater Lehigh Valley, or browse the full MLS.",
  alternates: { canonical: routes.featuredListings },
};

export default function OurListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Listings"
        title="Our latest listings"
        intro="A look at homes we're currently representing across the Greater Lehigh Valley. New listings are added as they come to market."
      />

      <Section variant="cream" width="wide">
        <div className="notice">
          <h3>Listings are updated live</h3>
          <p>
            Our current and featured listings are maintained through the MLS so
            they always reflect what's truly available. Browse everything active
            in the region now, or reach out to see what's coming soon before it's
            publicly listed.
          </p>
          <div
            className="cta-band__actions"
            style={{ justifyContent: "flex-start", marginTop: 20 }}
          >
            <a
              href={externalLinks.featuredListings}
              className="btn btn--solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Current Listings
            </a>
            <a href={routes.searchHomes} className="btn btn--ghost">
              Search All Homes
            </a>
          </div>
        </div>

        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Thinking of selling?</h2>
          <p>
            Every featured listing started with a strategy: sharp pricing,
            professional presentation, and marketing that reaches the right
            buyers. If you'd like your home represented the same way, start with a
            free home value report or reach out to the team at{" "}
            <a href={siteConfig.contact.directHref} style={{ color: "var(--gold)" }}>
              {siteConfig.contact.direct}
            </a>
            .
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Want your home featured here?"
        body="Let's talk about listing your home with a team that markets it like it matters."
        primary={{ label: "Free Home Value Report", href: routes.homeValueReport }}
        secondary={{ label: "Sellers", href: routes.sellers }}
      />
    </>
  );
}
