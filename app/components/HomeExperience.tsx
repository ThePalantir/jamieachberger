import Image from "next/image";
import Link from "next/link";
import { routes } from "../lib/site";

export function HomeIntroduction() {
  return (
    <section className="home-intro">
      <div className="home-intro__inner">
        <p className="home-kicker">A local advantage, beautifully delivered</p>
        <div className="home-intro__grid">
          <h2>
            Real estate is personal.
            <em> The experience should be exceptional.</em>
          </h2>
          <div className="home-intro__copy">
            <p>
              From the first conversation to the final signature, the Jamie
              Achberger Group brings calm guidance, local intelligence, and
              thoughtful strategy to every move.
            </p>
            <Link href={routes.meetTheTeam} className="text-link">
              Discover our approach <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="home-intro__facts" aria-label="Service highlights">
          <div><strong>Hundreds</strong><span>of families guided</span></div>
          <div><strong>Greater Lehigh Valley</strong><span>rooted local perspective</span></div>
          <div><strong>Listing to close</strong><span>one connected experience</span></div>
        </div>
      </div>
    </section>
  );
}

export function ClientPaths() {
  return (
    <section className="client-paths" aria-labelledby="client-paths-title">
      <div className="client-paths__heading">
        <p className="home-kicker">Wherever you are headed</p>
        <h2 id="client-paths-title">A clear path forward.</h2>
      </div>
      <div className="client-paths__grid">
        <Link href={routes.buyers} className="client-path client-path--buyers">
          <span className="client-path__number">01</span>
          <div>
            <p>Find your place</p>
            <h3>For Buyers</h3>
            <span className="client-path__cue">Explore buyer services →</span>
          </div>
        </Link>
        <Link href={routes.sellers} className="client-path client-path--sellers">
          <span className="client-path__number">02</span>
          <div>
            <p>Position it beautifully</p>
            <h3>For Sellers</h3>
            <span className="client-path__cue">Explore seller services →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

const team = [
  { src: "/images/team/jamie-achberger.png", alt: "Jamie Achberger" },
  { src: "/images/team/angela-wehbey.png", alt: "Angela Wehbey" },
  { src: "/images/team/valerie-valianatos.png", alt: "Valerie Valianatos" },
  { src: "/images/team/nathan-seibert.png", alt: "Nathan Seibert" },
];

export function TeamFeature() {
  return (
    <section className="team-feature">
      <div className="team-feature__portraits" aria-label="The Jamie Achberger Group">
        {team.map((member, index) => (
          <div
            className={`team-feature__portrait team-feature__portrait--${index + 1}`}
            key={member.src}
            style={{ position: "absolute" }}
          >
            <Image src={member.src} alt={member.alt} fill sizes="(max-width: 720px) 45vw, 260px" />
          </div>
        ))}
      </div>
      <div className="team-feature__content">
        <p className="home-kicker">The people behind the move</p>
        <h2>High-touch service.<br /><em>Genuinely human.</em></h2>
        <p>
          Jamie and her team pair seasoned negotiation and modern marketing
          with the kind of responsiveness that makes a complicated process
          feel composed. You will always know what comes next—and who is in
          your corner.
        </p>
        <Link href={routes.meetTheTeam} className="editorial-button">
          Meet the team
        </Link>
      </div>
    </section>
  );
}

export function HomeResources() {
  const resources = [
    { number: "01", title: "Search every listing", text: "Explore homes across the region with a direct path to the live MLS search.", href: routes.searchHomes },
    { number: "02", title: "Know your buying power", text: "Use practical mortgage and affordability tools before you make your move.", href: routes.buyingResources },
    { number: "03", title: "Understand your value", text: "Start with a complimentary, no-pressure home value report.", href: routes.homeValueReport },
  ];

  return (
    <section className="home-resources">
      <div className="home-resources__header">
        <div>
          <p className="home-kicker">Move with clarity</p>
          <h2>Everything you need,<br /><em>considered.</em></h2>
        </div>
        <p>
          Smart tools and local guidance for the questions that come before
          the big decisions.
        </p>
      </div>
      <div className="home-resources__grid">
        {resources.map((resource) => (
          <Link href={resource.href} className="home-resource" key={resource.title}>
            <span className="home-resource__number">{resource.number}</span>
            <h3>{resource.title}</h3>
            <p>{resource.text}</p>
            <span className="home-resource__arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
