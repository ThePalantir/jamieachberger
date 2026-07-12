import type { Metadata, Viewport } from "next";
import { Bodoni_Moda } from "next/font/google";
import { Analytics } from "./components/Analytics";
import { MotionObserver } from "./components/MotionObserver";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { analyticsConfig, siteConfig, siteUrl } from "./lib/site";
import "./globals.css";
import "./components.css";
import "./pages.css";
import "./premium.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Jamie Achberger Group | Greater Lehigh Valley Real Estate",
    template: "%s | The Jamie Achberger Group",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Jamie Achberger Group | Greater Lehigh Valley Real Estate",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.assets.socialPreview,
        width: 1200,
        height: 630,
        alt: "The Jamie Achberger Group, brokered by EXP Realty, LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Jamie Achberger Group | Greater Lehigh Valley Real Estate",
    description: siteConfig.description,
    images: [siteConfig.assets.socialPreview],
  },
  verification: analyticsConfig.googleSiteVerification
    ? { google: analyticsConfig.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bodoni.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f3efe6" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MotionObserver />
        <Analytics />
      </body>
    </html>
  );
}
