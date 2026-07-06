import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { external, routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Free Home Value Report",
  description:
    "Get a fast, free, no-obligation estimate of your home's value in the Greater Lehigh Valley from The Jamie Achberger Group.",
  alternates: { canonical: routes.homeValueReport },
};

export default function HomeValueReportPage() {
  return (
    <>
      <PageHero
        eyebrow="Home Value Report"
        title={
          <>
            What's your home <em>really</em> worth?
          </>
        }
        intro="Get a fast, free estimate of your home's current market value — no cost, no obligation. It's the smartest first step before you sell."
      />

      <Section variant="cream" width="narrow">
        <div className="prose">
          <h2>A real starting point, in minutes</h2>
          <p>
            Automated estimates are a useful starting point, but they can't see
            your finished basement, your new roof, or how your street compares to
            the one a mile away. Start with the instant report below, then we'll
            follow up with a personalized valuation that reflects your home's true
            condition and the latest local sales.
          </p>
          <ul>
            <li>Fast, free, and no obligation</li>
            <li>Based on current Greater Lehigh Valley market data</li>
            <li>Followed by a personal review from our team</li>
          </ul>
        </div>

        <div className="notice" style={{ marginTop: 40 }}>
          <h3>Get your instant estimate</h3>
          <p>
            Enter your address in our secure home value tool to receive an
            estimate, then we'll reach out with a tailored valuation and answer
            any questions. Prefer to talk first? Call{" "}
            <a href={siteConfig.contact.directHref} style={{ color: "var(--gold)" }}>
              {siteConfig.contact.direct}
            </a>
            .
          </p>
          <div
            className="cta-band__actions"
            style={{ justifyContent: "flex-start", marginTop: 20 }}
          >
            <a
              href={external.homeValueTool}
              className="btn btn--solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Free Report
            </a>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Ready to make a move?"
        body="Once you know your number, we'll help you plan the sale from listing to closing."
        primary={{ label: "Talk to Our Team", href: routes.contact }}
        secondary={{ label: "Selling Resources", href: routes.sellingResources }}
      />
    </>
  );
}
