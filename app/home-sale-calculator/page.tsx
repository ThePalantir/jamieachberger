import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { HomeSaleCalculator } from "../components/calculators/HomeSaleCalculator";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Home Sale Calculator",
  description:
    "Estimate your net proceeds from selling your home — after mortgage payoff, commission, and closing costs — in the Greater Lehigh Valley.",
  alternates: { canonical: routes.homeSaleCalculator },
};

export default function HomeSaleCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Home Sale Calculator"
        title="Estimate your net proceeds"
        intro="See roughly what you'll walk away with after paying off your mortgage, commission, and typical closing costs on your sale."
      />

      <Section variant="cream" width="wide">
        <HomeSaleCalculator />
        <p className="disclaimer">
          Estimates for planning only. Actual payoff amounts, transfer taxes,
          commission structures, and seller concessions vary. We'll prepare a
          precise, personalized net sheet for your specific sale.
        </p>
      </Section>

      <CtaBand
        heading="Want a precise number?"
        body="Start with a free home value report, and we'll build a detailed net-proceeds estimate for your home."
        primary={{ label: "Free Home Value Report", href: routes.homeValueReport }}
        secondary={{ label: "Selling Resources", href: routes.sellingResources }}
      />
    </>
  );
}
