import type { Metadata } from "next";
import { PageHero, Section, Steps, LinkCards, CtaBand } from "../components/ui";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Buyers",
  description:
    "Buying a home in the Greater Lehigh Valley? The Jamie Achberger Group guides you from pre-approval to keys in hand — with tools, resources, and local expertise.",
  alternates: { canonical: routes.buyers },
};

const steps = [
  {
    title: "Get pre-approved",
    body: "Connect with a trusted local lender to understand your budget and strengthen your offer before you shop. We can introduce you to lenders who close on time.",
  },
  {
    title: "Define your search",
    body: "We map your must-haves, nice-to-haves, and target neighborhoods, then set up a live search so you see the right homes the moment they hit the market.",
  },
  {
    title: "Tour with confidence",
    body: "We schedule showings around your life and give you honest, on-the-ground perspective on condition, value, and resale — not just a sales pitch.",
  },
  {
    title: "Make a smart offer",
    body: "We price your offer to the real market and negotiate terms that protect you, from inspection contingencies to closing timelines.",
  },
  {
    title: "Close and get the keys",
    body: "We coordinate inspections, appraisal, and paperwork, keeping every deadline on track so closing day is the easy part.",
  },
];

const resources = [
  {
    label: "Buying Resources",
    description: "A plain-English guide to the whole buying process, start to finish.",
    href: routes.buyingResources,
  },
  {
    label: "Affordability Calculator",
    description: "Estimate the price range that fits your income and monthly budget.",
    href: routes.affordabilityCalculator,
  },
  {
    label: "Mortgage Calculator",
    description: "See estimated monthly payments by price, rate, and down payment.",
    href: routes.mortgageCalculator,
  },
  {
    label: "Preferred Lenders",
    description: "Get connected with vetted local lenders who close on time.",
    href: routes.preferredLenders,
  },
  {
    label: "Term Glossary",
    description: "Every real estate term you'll encounter, clearly defined.",
    href: routes.termGlossary,
  },
  {
    label: "Search Homes",
    description: "Browse active listings across the Greater Lehigh Valley.",
    href: routes.searchHomes,
  },
];

export default function BuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Buyers"
        title={
          <>
            Find the right home, <em>the right way.</em>
          </>
        }
        intro="Buying a home is one of the biggest decisions you'll make. We make it feel manageable — with a clear plan, the right tools, and a team that handles the legwork so you can focus on the move."
      />

      <Section variant="cream" width="wide">
        <p className="eyebrow">How it works</p>
        <h2 style={{ marginBottom: 40 }}>Your path to the front door</h2>
        <Steps steps={steps} />
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">Buyer tools &amp; resources</p>
        <h2 style={{ marginBottom: 40 }}>Everything you need in one place</h2>
        <LinkCards cards={resources} columns={3} />
      </Section>

      <CtaBand
        heading="Ready to start your search?"
        body="Tell us what you're looking for and we'll set up a live search tailored to you — no obligation."
        primary={{ label: "Search Homes", href: routes.searchHomes }}
        secondary={{ label: "Contact The Team", href: routes.contact }}
      />
    </>
  );
}
