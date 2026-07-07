import type { Metadata } from "next";
import { PageHero, Section, LinkCards, CtaBand } from "../components/ui";
import { externalLinks, routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Search Homes",
  description:
    "Search active homes for sale across the Greater Lehigh Valley with The Jamie Achberger Group. Set up a personalized, live MLS search tailored to you.",
  alternates: { canonical: routes.searchHomes },
};

const nextSteps = [
  {
    label: "Affordability Calculator",
    description: "Know your price range before you start touring.",
    href: routes.affordabilityCalculator,
  },
  {
    label: "Mortgage Calculator",
    description: "Estimate monthly payments for any price point.",
    href: routes.mortgageCalculator,
  },
  {
    label: "Buying Resources",
    description: "Understand the full buying process, step by step.",
    href: routes.buyingResources,
  },
];

export default function SearchListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Search Homes"
        title="Find your next home"
        intro="Browse active listings across Allentown, Bethlehem, Easton, and the greater Lehigh Valley — or let us set up a live, personalized search so the right homes come to you first."
      />

      <Section variant="cream" width="wide">
        <div className="notice">
          <h3>Search the full MLS</h3>
          <p>
            Our live MLS search shows every active listing across the region,
            updated in real time. Open it in a new tab, or tell us what you're
            looking for and we'll build a saved search that emails you new
            matches the moment they list — before they hit the big portals.
          </p>
          <div
            className="cta-band__actions"
            style={{ justifyContent: "flex-start", marginTop: 20 }}
          >
            <a
              href={externalLinks.mlsSearch}
              className="btn btn--solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open MLS Search
            </a>
            <a href={routes.contact} className="btn btn--ghost">
              Set Up a Custom Search
            </a>
          </div>
        </div>

        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Why search with our team</h2>
          <ul>
            <li>Live listings from the MLS, not stale third-party data</li>
            <li>Saved searches that alert you the instant a match lists</li>
            <li>Local insight on neighborhoods, schools, and true value</li>
            <li>A team ready to tour any home the same week you find it</li>
          </ul>
        </div>
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">Before you tour</p>
        <h2 style={{ marginBottom: 40 }}>Get search-ready</h2>
        <LinkCards cards={nextSteps} />
      </Section>

      <CtaBand
        heading="Let's find it together"
        body={`Tell us your must-haves and we'll do the searching. Call ${siteConfig.contact.direct} or reach out online.`}
        primary={{ label: "Contact The Team", href: routes.contact }}
        secondary={{ label: "Featured Listings", href: routes.featuredListings }}
      />
    </>
  );
}
