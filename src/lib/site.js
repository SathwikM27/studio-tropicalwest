// Canonical site URL, used for absolute URLs in metadata, sitemap.xml,
// robots.txt and JSON-LD. Falls back to the current Vercel deployment URL
// so these still resolve correctly on preview deployments.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
