import { sanityClient } from "./client";
import { galleryWorks as fallbackGalleryWorks } from "@/lib/data/gallery-works";
import { brands as fallbackBrands } from "@/lib/data/brands";
import { founders as fallbackFounders } from "@/lib/data/founders";

const GALLERY_QUERY = `*[_type == "galleryWork"] | order(order asc){
  _id,
  title,
  location,
  "imageUrl": image.asset->url,
  "imageAlt": coalesce(image.alt, title)
}`;

const BRANDS_QUERY = `*[_type == "brand"] | order(order asc){
  _id,
  name,
  "logoUrl": logo.asset->url
}`;

const FOUNDERS_QUERY = `*[_type == "founder"] | order(order asc){
  _id,
  name,
  role,
  bio,
  "photoUrl": photo.asset->url
}`;

// Every getter falls back to local seed data until the Sanity project is
// connected (NEXT_PUBLIC_SANITY_PROJECT_ID set) and populated — the site
// never needs a code change to switch over, only content in the Studio.

export async function getGalleryWorks() {
  if (!sanityClient) return fallbackGalleryWorks;
  const data = await sanityClient.fetch(GALLERY_QUERY);
  return data?.length ? data : fallbackGalleryWorks;
}

export async function getBrands() {
  if (!sanityClient) return fallbackBrands;
  const data = await sanityClient.fetch(BRANDS_QUERY);
  return data?.length ? data : fallbackBrands;
}

export async function getFounders() {
  if (!sanityClient) return fallbackFounders;
  const data = await sanityClient.fetch(FOUNDERS_QUERY);
  return data?.length ? data : fallbackFounders;
}
