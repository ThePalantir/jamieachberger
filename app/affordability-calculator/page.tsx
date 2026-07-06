import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { AffordabilityCalculator } from "../components/calculators/AffordabilityCalculator";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Affordability Calculator",
  description:
    "Estimate the home price range that fits your income, debts, and down payment using the 28/36 guideline — for buyers in the Greater Lehigh Valley.",
  alternates: { canonical: routes.affordabilityCalculator },
};

export default function AffordabilityCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Affordability Calculator"
        title="How much home can you afford?"
        intro="Enter your income, monthly debts, and available down payment to estimate a comfortable price range before you start touring homes."
      />

      <Section variant="cream" width="wide">
        <AffordabilityCalculator />
        <p className="disclaimer">
          Based on the common 28/36 debt-to-income guideline, this tool provides
          estimates for planning only — not a loan pre-approval or financial
          advice. Your lender's actual approval may be higher or lower. The best
          next step is a conversation with a lender.
        </p>
      </Section>

      <CtaBand
        heading="Turn an estimate into a plan"
        body="Get pre-approved with a trusted local lender, then let's start your search with confidence."
        primary={{ label: "Preferred Lenders", href: routes.preferredLenders }}
        secondary={{ label: "Search Homes", href: routes.searchHomes }}
      />
    </>
  );
}
