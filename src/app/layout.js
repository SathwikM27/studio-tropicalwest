import { Fraunces, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeProvider from "@/components/ThemeProvider";
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

export const metadata = {
  title: "Studio Tropicalwest — Interior Design Studio, Bengaluru",
  description:
    "Studio Tropicalwest is a Bengaluru-based interior design studio shaping spaces through people, culture and function.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
