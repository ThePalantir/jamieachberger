/**
 * Single source of truth for site URLs and navigation structure.
 *
 * - `routes`        → internal relative paths only (never absolute URLs)
 * - `externalLinks` → true external service destinations only
 *                     (lead-capture tool, IDX/MLS provider, review profiles)
 * - `socialLinks`   → social media profiles only
 *
 * Header, footer, CTAs, and LinkCards must consume these constants; no
 * component should hardcode a URL.
 */

/** Canonical production origin — used only for SEO metadata (metadataBase,
 *  canonical, Open Graph), never for in-app navigation. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamieachberger.com";

export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
};

/** Internal pages. Relative paths only. */
export const routes = {
  home: "/",
  meetTheTeam: "/meet-the-team/",
  contact: "/contact-us/",
  reviews: "/reviews/",
  searchHomes: "/search-listings-2/",
  featuredListings: "/our-listings/",
  buyers: "/buyers/",
  buyingResources: "/buying-resources/",
  affordabilityCalculator: "/affordability-calculator/",
  mortgageCalculator: "/mortgage-calculator/",
  preferredLenders: "/preferred-lenders/",
  termGlossary: "/term-glossary/",
  sellers: "/sellers/",
  sellingResources: "/selling-resources/",
  homeSaleCalculator: "/home-sale-calculator/",
  homeValueReport: "/home-value-report/",
};

/** True external services that intentionally leave this site. */
export const externalLinks = {
  /** Hifello lead-capture form behind the Free Home Value Report. */
  homeValueTool:
    "https://jamieachberger.hifello.com/lp/681e12adea804e003853955e",
  /** Live MLS/IDX search — still hosted by the current provider until IDX
   *  is embedded here. Intentional external destination. */
  mlsSearch: "https://jamieachberger.com/search-listings-2/",
  /** Live featured-listings feed on the current provider. Intentional. */
  featuredListings: "https://jamieachberger.com/our-listings/",
  googleReviews:
    "https://www.google.com/search?q=Jamie+Achberger+-+REALTOR+reviews#lrd=0x89c43a0aefa7d681:0xe0eefd40d3cb1414,1,,,,",
  realtorProfile:
    "https://www.realtor.com/realestateagents/64f76d55705a62544ae752dc",
};

/** Social media profiles. */
export const socialLinks = {
  facebook: "https://www.facebook.com/jamieachbergerhomesales/",
  instagram: "https://www.instagram.com/jamieachbergergroup/",
  youtube: "https://www.youtube.com/channel/UCvkEQrEr7Nl5RH4ng3Kqeuw",
  linkedin: "https://www.linkedin.com/company/jamie-achberger-group/",
};

export const siteConfig = {
  name: "The Jamie Achberger Group",
  shortName: "Jamie Achberger Group",
  brokerage: "EXP Realty, LLC",
  license: "Agent license #RS311251",
  region: "Greater Lehigh Valley",
  description:
    "Your go-to real estate team in the Greater Lehigh Valley and beyond, helping buyers and sellers move with clarity, care, and proven local experience.",
  contact: {
    direct: "484-715-0596",
    directHref: "tel:4847150596",
    office: "888-397-7352",
    officeHref: "tel:8883977352",
    email: "Jamie@JamieATeam.com",
    emailHref: "mailto:Jamie@JamieATeam.com",
    address: "1633 N 26th St, Allentown, PA 18104",
  },
  assets: {
    hero: "/images/jamie-achberger-aerial-hero-frame.png",
    socialPreview: "/images/jamie-achberger-social-preview.png",
  },
};

/** Primary header navigation, in display order. */
export const primaryNav = [
  { label: "Meet The Team", href: routes.meetTheTeam },
  { label: "Search Homes", href: routes.searchHomes },
  { label: "Buyers", href: routes.buyers },
  { label: "Sellers", href: routes.sellers },
  { label: "Reviews", href: routes.reviews },
  { label: "Contact", href: routes.contact },
];

/** Footer link columns, in display order. */
export const footerNav = [
  {
    heading: "Explore",
    links: [
      { label: "Meet The Team", href: routes.meetTheTeam },
      { label: "Reviews", href: routes.reviews },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    heading: "Buyers",
    links: [
      { label: "Buyers", href: routes.buyers },
      { label: "Buying Resources", href: routes.buyingResources },
      { label: "Search Homes", href: routes.searchHomes },
      { label: "Mortgage Calculator", href: routes.mortgageCalculator },
      { label: "Affordability Calculator", href: routes.affordabilityCalculator },
      { label: "Preferred Lenders", href: routes.preferredLenders },
      { label: "Term Glossary", href: routes.termGlossary },
    ],
  },
  {
    heading: "Sellers",
    links: [
      { label: "Sellers", href: routes.sellers },
      { label: "Selling Resources", href: routes.sellingResources },
      { label: "Home Value Report", href: routes.homeValueReport },
      { label: "Home Sale Calculator", href: routes.homeSaleCalculator },
      { label: "Featured Listings", href: routes.featuredListings },
    ],
  },
];
