import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { MortgageCalculator } from "../components/calculators/MortgageCalculator";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description:
    "Estimate your monthly mortgage payment — principal, interest, taxes, insurance, and PMI — for homes in the Greater Lehigh Valley.",
  alternates: { canonical: routes.mortgageCalculator },
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Mortgage Calculator"
        title="Estimate your monthly payment"
        intro="Adjust price, down payment, rate, and term to see your full monthly payment — including taxes, insurance, and PMI where it applies."
      />

      <Section variant="cream" width="wide">
        <MortgageCalculator />
        <p className="disclaimer">
          This calculator provides estimates for general planning only and is
          not a loan offer or financial advice. Actual rates, taxes, insurance,
          and PMI depend on your lender, credit, and property. Get pre-approved
          for exact figures.
        </p>
      </Section>

      <CtaBand
        heading="Ready to get pre-approved?"
        body="We'll connect you with a trusted local lender to turn these estimates into a real number."
        primary={{ label: "Preferred Lenders", href: routes.preferredLenders }}
        secondary={{ label: "Affordability Calculator", href: routes.affordabilityCalculator }}
      />
    </>
  );
}
