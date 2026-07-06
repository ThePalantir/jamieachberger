export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__kicker">Greater Lehigh Valley</div>
        <h1 className="hero__headline">
          Your Go-To Real Estate Team in the Greater Lehigh Valley{" "}
          <em>and beyond.</em>
        </h1>
        <div className="hero__rule"></div>
        <p className="hero__subtext">
          It's not our first time. Not even the 100th. Over the years, we've
          helped hundreds sell and buy their homes.
        </p>
        <div className="hero__ctas">
          <button className="hero__btn hero__btn--primary">
            Free Home Value Report
          </button>
          <a href="#search" className="hero__link">
            Start Your Search
          </a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__photo">
          <div className="hero__photo-placeholder">
            Aerial neighborhood view, dusk light grade
          </div>
        </div>
      </div>
    </section>
  );
}
