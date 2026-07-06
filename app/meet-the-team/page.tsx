import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Meet The Team",
  description:
    "Meet The Jamie Achberger Group — a Greater Lehigh Valley real estate team, brokered by EXP Realty, helping hundreds of families buy and sell with clarity and care.",
  alternates: { canonical: routes.meetTheTeam },
};

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            The people behind <em>every move.</em>
          </>
        }
        intro="The Jamie Achberger Group is a full-service real estate team serving the Greater Lehigh Valley and beyond. We pair local knowledge with a hands-on, transparent approach — so buying or selling feels less like a transaction and more like a plan."
      />

      <Section variant="cream" width="narrow">
        <div className="prose">
          <h2>Our approach</h2>
          <p>
            It's not our first time. Not even the 100th. Over the years, we've
            helped hundreds of families buy and sell homes across Allentown,
            Bethlehem, Easton, and the surrounding communities. That experience
            shows up in the details: sharp pricing, honest advice, and steady
            communication from the first showing to the closing table.
          </p>
          <p>
            We believe great representation is equal parts strategy and service.
            You'll always know where things stand, what happens next, and why we
            recommend the moves we do. No pressure, no jargon — just a team that's
            genuinely in your corner.
          </p>
          <h3>What you can count on</h3>
          <ul>
            <li>
              <strong>Full transparency.</strong> We answer every question about
              your sale or purchase, clearly and directly.
            </li>
            <li>
              <strong>A hands-on team.</strong> We handle the legwork and keep
              the process moving so you don't have to chase anyone.
            </li>
            <li>
              <strong>Modern marketing.</strong> From professional listing
              presentation to social media, we're all in on getting your home
              seen.
            </li>
            <li>
              <strong>Local expertise.</strong> Deep familiarity with Lehigh
              Valley neighborhoods, schools, and market trends.
            </li>
          </ul>
        </div>
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">The Group</p>
        <h2 style={{ marginBottom: 16 }}>Led by Jamie Achberger</h2>
        <p className="section-lead">
          Jamie Achberger leads the team as your primary point of contact,
          backed by transaction, marketing, and client-care support so nothing
          falls through the cracks. Brokered by {siteConfig.brokerage}, the group
          combines the resources of a national brokerage with the attention of a
          local team.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <h3 className="team-member__name">Jamie Achberger</h3>
            <p className="team-member__role">REALTOR® · Team Lead</p>
            <p className="team-member__bio">
              Your guide through every step — pricing, negotiation, and strategy
              across the Greater Lehigh Valley. {siteConfig.license}.
            </p>
          </div>
          <div className="team-member">
            <h3 className="team-member__name">Client Care</h3>
            <p className="team-member__role">Transaction Support</p>
            <p className="team-member__bio">
              Keeps your file organized and on schedule from accepted offer to
              closing, so deadlines are met and details are handled.
            </p>
          </div>
          <div className="team-member">
            <h3 className="team-member__name">Marketing</h3>
            <p className="team-member__role">Listing Presentation</p>
            <p className="team-member__bio">
              Professional photography, listing copy, and social promotion that
              put your home in front of the right buyers.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        heading={
          <>
            Let's talk about <em>your</em> move
          </>
        }
        body="Whether you're just starting to explore or ready to list, we'd love to hear what you have in mind."
        primary={{ label: "Contact Us", href: routes.contact }}
        secondary={{ label: "Read Reviews", href: routes.reviews }}
      />
    </>
  );
}
