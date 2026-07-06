import type { Metadata } from "next";
import { PageHero, Section, LinkCards, CtaBand } from "../components/ui";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Selling Resources",
  description:
    "A clear guide to selling your home in the Greater Lehigh Valley — pricing, preparation, marketing, offers, and closing, explained step by step.",
  alternates: { canonical: routes.sellingResources },
};

const tools = [
  {
    label: "Free Home Value Report",
    description: "See what your home could sell for — fast and no obligation.",
    href: routes.homeValueReport,
  },
  {
    label: "Home Sale Calculator",
    description: "Estimate your net proceeds after payoff, commission, and costs.",
    href: routes.homeSaleCalculator,
  },
  {
    label: "Meet The Team",
    description: "Get to know the group that will represent your sale.",
    href: routes.meetTheTeam,
  },
];

export default function SellingResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Selling Resources"
        title="Sell with a plan"
        intro="A great sale isn't luck — it's preparation, pricing, and marketing done right. Here's how the process works, so you know exactly what to expect."
      />

      <Section variant="cream" width="narrow">
        <div className="prose">
          <h2>Start with the right price</h2>
          <p>
            Pricing is the single biggest lever in a sale. Price too high and the
            listing sits, drawing lowball offers; price it right and you create
            competition. We build your price from recent comparable sales, current
            demand, and your home's specific condition — not guesswork. Begin with
            a{" "}
            <a href={routes.homeValueReport} style={{ color: "var(--gold)" }}>
              free home value report
            </a>
            .
          </p>

          <h3>Prepare and present</h3>
          <p>
            Buyers form an impression in seconds. We'll walk your home with you and
            recommend high-impact, budget-conscious improvements — decluttering,
            minor repairs, fresh presentation — that consistently return more than
            they cost. Then professional photography makes it shine online, where
            nearly every buyer starts.
          </p>

          <h3>Market where buyers actually look</h3>
          <p>
            Your home goes on the MLS and syndicates to the major search portals,
            backed by professional photos, a compelling listing description, and
            active social media promotion. The goal is simple: maximum qualified
            exposure in the first days on market, when interest is highest.
          </p>

          <h3>Evaluate offers strategically</h3>
          <p>
            The highest number isn't always the best offer. We review price
            alongside financing strength, contingencies, and timing, then advise
            you on which terms serve your goals — and negotiate to improve them.
          </p>

          <h3>Inspection, appraisal, and closing</h3>
          <p>
            After you accept an offer, we manage the details: inspection responses,
            the buyer's appraisal, and the paperwork trail. We keep every party on
            deadline so your sale closes smoothly, and you can plan your next move
            with confidence. Estimate your take-home with the{" "}
            <a href={routes.homeSaleCalculator} style={{ color: "var(--gold)" }}>
              home sale calculator
            </a>
            .
          </p>
        </div>
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">Seller tools</p>
        <h2 style={{ marginBottom: 40 }}>Plan your sale</h2>
        <LinkCards cards={tools} />
      </Section>

      <CtaBand
        heading="Thinking about selling?"
        body="Let's talk through your timeline and goals — no pressure, no obligation."
        primary={{ label: "Contact Us", href: routes.contact }}
        secondary={{ label: "Free Home Value Report", href: routes.homeValueReport }}
      />
    </>
  );
}
