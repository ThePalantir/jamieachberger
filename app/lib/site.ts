export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamieachberger.com";

export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
};

export const siteConfig = {
  name: "The Jamie Achberger Group",
  brokerage: "EXP Realty, LLC",
  license: "Agent license #RS311251",
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
  links: {
    homeValueReport: "https://jamieachberger.hifello.com/lp/681e12adea804e003853955e",
    contact: "https://jamieachberger.com/home-value-report/",
    searchHomes: "https://jamieachberger.com/search-listings-2/",
    featuredListings: "https://jamieachberger.com/our-listings/",
    buyingResources: "https://jamieachberger.com/buying-resources/",
    sellingResources: "https://jamieachberger.com/selling-resources/",
    meetTheTeam: "https://jamieachberger.com/meet-the-team/",
    googleReviews:
      "https://www.google.com/search?q=Jamie+Achberger+-+REALTOR+reviews#lrd=0x89c43a0aefa7d681:0xe0eefd40d3cb1414,1,,,,",
    realtorProfile:
      "https://www.realtor.com/realestateagents/64f76d55705a62544ae752dc",
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
};
