import { externalLinks, routes } from "../lib/site";

export function Reviews() {
  const reviewSources = [
    {
      label: "Google Reviews",
      description: "Read current client reviews and public ratings.",
      href: externalLinks.googleReviews,
    },
    {
      label: "Realtor.com Profile",
      description: "View Jamie's verified agent profile and license source.",
      href: externalLinks.realtorProfile,
    },
    {
      label: "Meet The Team",
      description: "Learn more about the Jamie Achberger Group.",
      href: routes.meetTheTeam,
    },
  ];

  return (
    <section className="reviews">
      <div className="reviews__inner">
        <h2 className="reviews__heading">A reputation built, one move at a time.</h2>
        <p className="reviews__intro">
          Explore current client feedback and independently published profiles.
        </p>
        <div className="review-sources">
          {reviewSources.map((source) => (
            <a key={source.label} href={source.href} className="review-source">
              <span className="review-source__label">{source.label}</span>
              <span className="review-source__description">
                {source.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
