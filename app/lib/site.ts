export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamieachberger.com";

export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
};

/**
 * Internal routes for the multi-page site. Kept centralized so navigation,
 * footer, and cross-links all stay in sync.
 */
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

/**
 * External tools and profiles that live outside this codebase. These are the
 * real integrations (lead-capture, MLS/IDX search, review profiles, social).
 */
export const external = {
  // Hifello lead-capture form for the automated home value report.
  homeValueTool:
    "https://jamieachberger.hifello.com/lp/681e12adea804e003853955e",
  // MLS/IDX search still lives on the current provider; swap for the embedded
  // IDX search once the provider is wired into this site.
  mlsSearch: "https://jamieachberger.com/search-listings-2/",
  featuredListings: "https://jamieachberger.com/our-listings/",
  googleReviews:
    "https://www.google.com/search?q=Jamie+Achberger+-+REALTOR+reviews#lrd=0x89c43a0aefa7d681:0xe0eefd40d3cb1414,1,,,,",
  realtorProfile:
    "https://www.realtor.com/realestateagents/64f76d55705a62544ae752dc",
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
  social: {
    facebook: "https://www.facebook.com/jamieachbergerhomesales/",
    instagram: "https://www.instagram.com/jamieachbergergroup/",
    youtube: "https://www.youtube.com/channel/UCvkEQrEr7Nl5RH4ng3Kqeuw",
    linkedin: "https://www.linkedin.com/company/jamie-achberger-group/",
  },
  assets: {
    hero: "/images/jamie-achberger-aerial-hero-frame.png",
    socialPreview: "/images/jamie-achberger-social-preview.png",
  },
  // Kept for backwards compatibility with existing components. Prefer the
  // `routes` and `external` exports for new code.
  links: {
    ...routes,
    homeValueTool: external.homeValueTool,
    googleReviews: external.googleReviews,
    realtorProfile: external.realtorProfile,
  },
};

/** Primary navigation shown in the header. */
export const primaryNav = [
  { label: "About", href: routes.meetTheTeam },
  { label: "Search Homes", href: routes.searchHomes },
  { label: "Buyers", href: routes.buyers },
  { label: "Sellers", href: routes.sellers },
  { label: "Reviews", href: routes.reviews },
  { label: "Contact", href: routes.contact },
];

/** Grouped footer link columns. */
export const footerNav = [
  {
    heading: "Buyers",
    links: [
      { label: "Buyers", href: routes.buyers },
      { label: "Buying Resources", href: routes.buyingResources },
      { label: "Preferred Lenders", href: routes.preferredLenders },
      { label: "Mortgage Calculator", href: routes.mortgageCalculator },
      { label: "Affordability Calculator", href: routes.affordabilityCalculator },
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
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Search Listings", href: routes.searchHomes },
      { label: "Featured Listings", href: routes.featuredListings },
      { label: "Meet The Team", href: routes.meetTheTeam },
      { label: "Reviews", href: routes.reviews },
      { label: "Contact", href: routes.contact },
    ],
  },
];
