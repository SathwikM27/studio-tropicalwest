import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// useCdn: false — the site is statically rendered and only re-fetches when
// a Sanity webhook triggers on-demand revalidation. The CDN mirror can lag
// seconds to a minute behind a write, which would bake stale data into the
// freshly "revalidated" page. Hitting the live API directly avoids that.
export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: false })
  : null;
