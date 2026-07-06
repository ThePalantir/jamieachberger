import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Jamie Achberger Group | Real Estate, Lehigh Valley",
  description:
    "Your go-to real estate team in the Greater Lehigh Valley and beyond. Buying, selling, or getting a free home value report.",
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f3efe6" />
      </head>
      <body>{children}</body>
    </html>
  );
}
