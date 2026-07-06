import type { Metadata } from "next";
import { PageHero, Section, LinkCards, CtaBand } from "../components/ui";
import { external, routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read verified client reviews for The Jamie Achberger Group on Google and Realtor.com — real feedback from Greater Lehigh Valley buyers and sellers.",
  alternates: { canonical: routes.reviews },
};

const sources = [
  {
    label: "Google Reviews",
    description:
      "Read current client reviews and public star ratings on Google.",
    href: external.googleReviews,
    external: true,
  },
  {
    label: "Realtor.com Profile",
    description:
      "View Jamie's verified agent profile, ratings, and license source.",
    href: external.realtorProfile,
    external: true,
  },
  {
    label: "Meet The Team",
    description: "Learn more about the group behind the reviews.",
    href: routes.meetTheTeam,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our clients say"
        intro="We'd rather you hear it from the people we've worked with. Our reviews live on the platforms you already trust — read them straight from the source."
      />

      <Section variant="cream" width="wide">
        <p className="section-lead">
          Real client feedback, linked directly to its public source — no
          cherry-picked quotes, no edits. It's not our first time; not even the
          100th. Over the years we've helped hundreds of families buy and sell
          across the Greater Lehigh Valley, and their words say it best.
        </p>
        <LinkCards cards={sources} />
      </Section>

      <CtaBand
        heading="Worked with us before?"
        body="A review helps other Lehigh Valley families find a team they can trust. We'd be grateful if you shared your experience."
        primary={{ label: "Leave a Google Review", href: external.googleReviews, external: true }}
        secondary={{ label: "Contact The Team", href: routes.contact }}
      />
    </>
  );
}
