import type { Metadata } from "next";
import { PageHero, Section, Steps, LinkCards, CtaBand } from "../components/ui";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Sellers",
  description:
    "Selling your home in the Greater Lehigh Valley? The Jamie Achberger Group prices sharply, markets widely, and negotiates hard — so you sell for more, with less stress.",
  alternates: { canonical: routes.sellers },
};

const steps = [
  {
    title: "Know your home's value",
    body: "We start with a data-driven look at recent comparable sales and current demand in your neighborhood, so you list at a price that attracts strong offers.",
  },
  {
    title: "Prepare and present",
    body: "Small, strategic improvements and professional presentation make a real difference. We advise on what's worth doing — and what isn't — to maximize return.",
  },
  {
    title: "Market where buyers look",
    body: "Professional photography, a polished listing, the MLS, and active social promotion put your home in front of the right buyers from day one.",
  },
  {
    title: "Field offers and negotiate",
    body: "We review every offer with you — price, terms, and buyer strength — and negotiate to protect your bottom line and your timeline.",
  },
  {
    title: "Close with confidence",
    body: "From inspection to appraisal to final paperwork, we keep the deal on track so closing day arrives smoothly and on schedule.",
  },
];

const resources = [
  {
    label: "Free Home Value Report",
    description: "Get a fast, no-obligation estimate of what your home could sell for.",
    href: routes.homeValueReport,
  },
  {
    label: "Home Sale Calculator",
    description: "Estimate your net proceeds after payoff, commission, and closing costs.",
    href: routes.homeSaleCalculator,
  },
  {
    label: "Selling Resources",
    description: "A step-by-step guide to selling your home for the best result.",
    href: routes.sellingResources,
  },
  {
    label: "Meet The Team",
    description: "See who you'll be working with across the Greater Lehigh Valley.",
    href: routes.meetTheTeam,
  },
];

export default function SellersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Sellers"
        title={
          <>
            Sell for more, <em>stress less.</em>
          </>
        }
        intro="Your home is likely your largest asset. We treat it that way — with sharp pricing, standout marketing, and hard-nosed negotiation, backed by hundreds of successful sales across the Lehigh Valley."
      />

      <Section variant="cream" width="wide">
        <p className="eyebrow">How it works</p>
        <h2 style={{ marginBottom: 40 }}>From listing to sold</h2>
        <Steps steps={steps} />
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">Seller tools &amp; resources</p>
        <h2 style={{ marginBottom: 40 }}>Start with the numbers</h2>
        <LinkCards cards={resources} />
      </Section>

      <CtaBand
        heading="Curious what your home is worth?"
        body="Get a free, no-obligation home value report — a fast, data-backed starting point for your sale."
        primary={{ label: "Free Home Value Report", href: routes.homeValueReport }}
        secondary={{ label: "Contact The Team", href: routes.contact }}
      />
    </>
  );
}
