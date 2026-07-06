import type { Metadata } from "next";
import { PageHero, Section, LinkCards, CtaBand } from "../components/ui";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Buying Resources",
  description:
    "A clear, step-by-step guide to buying a home in the Greater Lehigh Valley — from pre-approval and offers to inspections and closing.",
  alternates: { canonical: routes.buyingResources },
};

const tools = [
  {
    label: "Affordability Calculator",
    description: "Find the price range that fits your income and monthly budget.",
    href: routes.affordabilityCalculator,
  },
  {
    label: "Mortgage Calculator",
    description: "Estimate monthly payments across price, rate, and down payment.",
    href: routes.mortgageCalculator,
  },
  {
    label: "Preferred Lenders",
    description: "Connect with local lenders we trust to close on time.",
    href: routes.preferredLenders,
  },
  {
    label: "Term Glossary",
    description: "Look up any real estate term in plain language.",
    href: routes.termGlossary,
  },
];

export default function BuyingResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Buying Resources"
        title="Know what to expect"
        intro="Buying a home has a lot of moving parts. Here's the whole process in plain English, so you always know what's happening and what comes next."
      />

      <Section variant="cream" width="narrow">
        <div className="prose">
          <h2>Before you shop</h2>
          <p>
            The strongest buyers start with a conversation and a pre-approval.
            Getting pre-approved with a reputable lender tells you exactly what
            you can afford and signals to sellers that your offer is serious.
            Use our{" "}
            <a href={routes.affordabilityCalculator} style={{ color: "var(--gold)" }}>
              affordability calculator
            </a>{" "}
            to ground the conversation before you tour a single home.
          </p>

          <h3>Understanding your budget</h3>
          <p>
            Your monthly payment is more than principal and interest. Property
            taxes, homeowners insurance, and — depending on your down payment —
            mortgage insurance all factor in. Our{" "}
            <a href={routes.mortgageCalculator} style={{ color: "var(--gold)" }}>
              mortgage calculator
            </a>{" "}
            helps you see the full picture so there are no surprises.
          </p>

          <h3>Making an offer</h3>
          <p>
            When you find the one, we build an offer around the real market —
            recent comparable sales, the home's condition, and how competitive
            the situation is. A strong offer isn't only about price; terms,
            contingencies, and timing all matter, and we negotiate every piece
            in your favor.
          </p>

          <h3>Inspections and due diligence</h3>
          <p>
            Once your offer is accepted, inspections give you a clear look at the
            home's condition. We help you interpret the findings, decide what's
            worth raising, and negotiate repairs or credits where appropriate —
            keeping your interests protected.
          </p>

          <h3>Appraisal and financing</h3>
          <p>
            Your lender orders an appraisal to confirm the home's value, then
            finalizes your loan. We stay in close contact with everyone involved
            so nothing stalls and every deadline is met.
          </p>

          <h3>Closing day</h3>
          <p>
            At closing you'll review and sign the final paperwork, and the home
            becomes yours. Because we've kept the process on track the whole way,
            closing day is the easy part — and then you get the keys.
          </p>
        </div>
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">Buyer tools</p>
        <h2 style={{ marginBottom: 40 }}>Put the numbers to work</h2>
        <LinkCards cards={tools} />
      </Section>

      <CtaBand
        heading="Have a question about buying?"
        body="We're happy to walk you through any part of the process — no pressure, no obligation."
        primary={{ label: "Contact Us", href: routes.contact }}
        secondary={{ label: "Search Homes", href: routes.searchHomes }}
      />
    </>
  );
}
