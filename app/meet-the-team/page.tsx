import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { routes, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Meet The Team",
  description:
    "Meet Jamie Achberger, Valerie Valianatos, Angela Wehbey, Nathan Seibert, and The Jamie Achberger Group — a Greater Lehigh Valley real estate team brokered by EXP Realty.",
  alternates: { canonical: routes.meetTheTeam },
};

const teamMembers = [
  {
    name: "Jamie Achberger",
    role: "Team Leader, PA Realtor®",
    bio: [
      "Jamie began her real estate journey in 2009 and has built her work around steady guidance, honest communication, and helping clients feel confident through every step of the move.",
      "As a single parent who raised two sons, she understands how much a home matters beyond the transaction itself. Her experience and network help buyers and sellers move with clarity across the Greater Lehigh Valley and beyond.",
    ],
    note: "Foodie fact: Jamie loves all food.",
  },
  {
    name: "Valerie Valianatos",
    role: "PA Realtor®",
    bio: [
      "Valerie brings honest advice and practical guidance to first-time buyers, experienced homeowners, and investors alike.",
      "Outside real estate, she enjoys new restaurants, Topgolf, and making the process feel approachable for every client she serves.",
    ],
    note:
      "Foodie fact: Valerie's love for pasta is almost as strong as her passion for real estate.",
  },
  {
    name: "Angela Wehbey",
    role: "PA Realtor®",
    bio: [
      "Angela's approach to real estate is built on heart, hustle, and meaningful relationships. Her background in sales, business management, and customer service gives clients a knowledgeable, personal advocate.",
      "With Whitehall roots and the ability to serve clients who speak Greek, Angela brings local perspective and connection to the buying and selling process.",
    ],
    note: "Foodie fact: If pasta is on the table, Angela is already there.",
  },
  {
    name: "Nathan Seibert",
    role: "PA Realtor®",
    bio: [
      "Born and raised in the Lehigh Valley, Nathan brings a competitive spirit, calm confidence, and clear communication to every real estate experience.",
      "His athletic background shows up in the way he stays focused under pressure, keeps clients grounded, and helps the process feel organized from start to finish.",
    ],
    note: "Foodie fact: If there is pizza, Nate is there.",
  },
];

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet The Team"
        title={
          <>
            The people behind <em>every move.</em>
          </>
        }
        intro="The Jamie Achberger Group is a full-service real estate team serving the Greater Lehigh Valley and beyond. We pair local knowledge with a hands-on, transparent approach so buying or selling feels less like a transaction and more like a plan."
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
            recommend the moves we do. No pressure, no jargon — just a team
            that's genuinely in your corner.
          </p>
        </div>
      </Section>

      <Section variant="ink" width="wide">
        <p className="eyebrow">The Group</p>
        <h2 style={{ marginBottom: 16 }}>Meet the agents</h2>
        <p className="section-lead">
          Led by Jamie Achberger and brokered by {siteConfig.brokerage}, our
          agents pair deep local roots with a genuinely personal approach to
          every buyer and seller across the Greater Lehigh Valley.
        </p>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-member">
              <h3 className="team-member__name">{member.name}</h3>
              <p className="team-member__role">{member.role}</p>
              {member.bio.map((paragraph) => (
                <p key={paragraph} className="team-member__bio">
                  {paragraph}
                </p>
              ))}
              <p className="team-member__bio">
                <strong>{member.note}</strong>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        heading={
          <>
            Let's talk about <em>your</em> move
          </>
        }
        body="Whether you're just starting to explore or ready to list, we'd love to hear what you have in mind."
        primary={{ label: "Send a Message", href: routes.contact }}
        secondary={{ label: "Read Reviews", href: routes.reviews }}
      />
    </>
  );
}
