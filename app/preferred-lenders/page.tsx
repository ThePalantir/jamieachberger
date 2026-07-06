import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Preferred Lenders",
  description:
    "Get connected with trusted local mortgage lenders in the Greater Lehigh Valley. The Jamie Achberger Group introduces buyers to lenders who communicate and close on time.",
  alternates: { canonical: routes.preferredLenders },
};

export default function PreferredLendersPage() {
  return (
    <>
      <PageHero
        eyebrow="Preferred Lenders"
        title="Financing you can trust"
        intro="A smooth purchase starts with a great lender. We'll connect you with local mortgage professionals who are responsive, competitive, and reliable when it counts."
      />

      <Section variant="cream" width="narrow">
        <div className="prose">
          <h2>Why the right lender matters</h2>
          <p>
            Your lender shapes your entire buying experience — from how much you
            can afford to whether you close on time. The best lenders explain
            your options clearly, return your calls, and hit every deadline in
            the contract. A weak lender can cost you the home.
          </p>
          <p>
            Over hundreds of transactions, we've learned which local
            professionals consistently deliver. When you're ready, we'll make a
            personal introduction to lenders suited to your situation — whether
            that's a first-time buyer program, a conventional loan, VA, FHA, or
            a jumbo mortgage.
          </p>
          <h3>What to ask a lender</h3>
          <ul>
            <li>What loan programs fit my situation, and what are the trade-offs?</li>
            <li>What will my estimated monthly payment and cash-to-close be?</li>
            <li>How quickly can you close, and what could delay it?</li>
            <li>Are there first-time buyer or down-payment assistance options?</li>
          </ul>
        </div>

        <div className="notice" style={{ marginTop: 40 }}>
          <h3>Ready for an introduction?</h3>
          <p>
            Tell us where you are in the process and we'll connect you with a
            vetted local lender — no obligation. Prefer to talk it through first?
            Call us at{" "}
            <a href={siteConfig.contact.directHref} style={{ color: "var(--gold)" }}>
              {siteConfig.contact.direct}
            </a>
            .
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Let's get you connected"
        body="We'll match you with a lender who fits your goals and closes with confidence."
        primary={{ label: "Contact Us", href: routes.contact }}
        secondary={{ label: "Affordability Calculator", href: routes.affordabilityCalculator }}
      />
    </>
  );
}
