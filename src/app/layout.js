import { Fraunces, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeProvider from "@/components/ThemeProvider";
import { siteUrl } from "@/lib/site";
import { getContactDetails, getHero } from "@/lib/sanity/queries";
import "./globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Studio Tropicalwest — Interior Design Studio, Bengaluru";
const description =
  "Studio Tropicalwest is a Bengaluru-based interior design studio shaping spaces through people, culture and function.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "interior design Bengaluru",
    "interior designer Bangalore",
    "interior design studio Karnataka",
    "home interiors Bengaluru",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Studio Tropicalwest",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero/hero-heritage-firefly.jpg", width: 1600, height: 1067 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/hero-heritage-firefly.jpg"],
  },
};

// Absolute-ify an image URL that may be either a Sanity CDN URL (already
// absolute) or a local /public path (fallback seed data).
function toAbsoluteUrl(url) {
  return url?.startsWith("http") ? url : `${siteUrl}${url}`;
}

export default async function RootLayout({ children }) {
  const [contact, hero] = await Promise.all([getContactDetails(), getHero()]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Studio Tropicalwest",
    description,
    url: siteUrl,
    image: toAbsoluteUrl(hero.imageUrl),
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "State", name: "Karnataka" },
    ],
    sameAs: [`https://instagram.com/${contact.instagramHandle}`],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        {/* Static JSON built server-side above, not user input. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
