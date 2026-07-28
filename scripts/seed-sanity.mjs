import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not set");
if (!token) throw new Error("SANITY_WRITE_TOKEN is not set");

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function uploadImage(relativePublicPath, filename) {
  const filePath = path.join(process.cwd(), "public", relativePublicPath);
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload("image", buffer, { filename });
  return asset._id;
}

function imageField(assetId, alt) {
  const field = { _type: "image", asset: { _type: "reference", _ref: assetId } };
  if (alt) field.alt = alt;
  return field;
}

async function seedHero() {
  const assetId = await uploadImage(
    "/images/hero/hero-heritage-firefly.jpg",
    "hero-heritage-firefly.jpg",
  );
  await client.createOrReplace({
    _id: "hero",
    _type: "hero",
    eyebrow: "Interior Design Studio · Bengaluru",
    heading: "Shaped by people",
    accentWord: "& culture.",
    subtext: "Living, designed around light, texture and time.",
    image: imageField(
      assetId,
      "Wood and black-metal shelving unit styled with ceramics and plants against a sculpted stone wall, Studio Tropicalwest",
    ),
  });
  console.log("Seeded: hero");
}

async function seedContact() {
  await client.createOrReplace({
    _id: "contact",
    _type: "contact",
    address: "Bengaluru, India.",
    phone: "+911234567890",
    email: "studiotropicalwest@gmail.com",
    instagramHandle: "studiotropicalwest",
    linkedinLabel: "Tropical West",
  });
  console.log("Seeded: contact");
}

const GALLERY_WORKS = [
  {
    _id: "pelican-square-living",
    title: "Living Room",
    location: "Pelican Square Villa, Bengaluru",
    imageUrl: "/images/gallery/pelican-square/living-room.jpg",
    imageAlt:
      "Double-height living room with a beige sectional sofa and floor-to-ceiling windows at Pelican Square Villa, Bengaluru",
    order: 1,
  },
  {
    _id: "heritage-firefly-kitchen",
    title: "Kitchen & Dining",
    location: "Heritage Firefly, Bengaluru",
    imageUrl: "/images/gallery/heritage-firefly/kitchen-dining.jpg",
    imageAlt:
      "Open kitchen and dining space with walnut cabinetry and pendant lighting at Heritage Firefly, Bengaluru",
    order: 2,
  },
  {
    _id: "pelican-square-bedroom",
    title: "Bedroom",
    location: "Pelican Square Villa, Bengaluru",
    imageUrl: "/images/gallery/pelican-square/bedroom.jpg",
    imageAlt: "Warm, wood-panelled bedroom at Pelican Square Villa, Bengaluru",
    order: 3,
  },
  {
    _id: "heritage-firefly-dining",
    title: "Dining Feature Wall",
    location: "Heritage Firefly, Bengaluru",
    imageUrl: "/images/gallery/heritage-firefly/dining-detail.jpg",
    imageAlt:
      "Dining area with a fluted sage-green feature wall and round mirror at Heritage Firefly, Bengaluru",
    order: 4,
  },
  {
    _id: "pelican-square-deck",
    title: "Rooftop Deck & Bar",
    location: "Pelican Square Villa, Bengaluru",
    imageUrl: "/images/gallery/pelican-square/deck-bar.jpg",
    imageAlt:
      "Outdoor rooftop deck with a concrete bar counter and festoon lighting at Pelican Square Villa, Bengaluru",
    order: 5,
  },
];

async function seedGallery() {
  for (const work of GALLERY_WORKS) {
    const assetId = await uploadImage(work.imageUrl, `${work._id}.jpg`);
    await client.createOrReplace({
      _id: work._id,
      _type: "galleryWork",
      title: work.title,
      location: work.location,
      order: work.order,
      image: imageField(assetId, work.imageAlt),
    });
    console.log("Seeded gallery work:", work._id);
  }
}

const BRANDS = [
  { _id: "brand-1", name: "Brand One", order: 1 },
  { _id: "brand-2", name: "Brand Two", order: 2 },
  { _id: "brand-3", name: "Brand Three", order: 3 },
  { _id: "brand-4", name: "Brand Four", order: 4 },
  { _id: "brand-5", name: "Brand Five", order: 5 },
  { _id: "brand-6", name: "Brand Six", order: 6 },
  { _id: "brand-7", name: "Brand Seven", order: 7 },
  { _id: "brand-8", name: "Brand Eight", order: 8 },
];

async function seedBrands() {
  for (const brand of BRANDS) {
    await client.createOrReplace({
      _id: brand._id,
      _type: "brand",
      name: brand.name,
      order: brand.order,
    });
    console.log("Seeded brand:", brand._id);
  }
}

const FOUNDERS = [
  {
    _id: "mk-rao",
    name: "M. K. Rao",
    role: "Executive Director | Co-founder",
    bio: "With over 25 years of shaping skylines and crafting spaces, our Executive Director stands as the backbone of every build.",
    photoUrl: "/images/founders/mk-rao.png",
    order: 1,
  },
  {
    _id: "kritika-kaul",
    name: "Kritika Kaul",
    role: "Creative Director | Co-founder",
    bio: "A design strategist and visual thinker, Kritika heads the interior and styling division, curating spaces that are elegant and experiential.",
    photoUrl: "/images/founders/kritika-kaul.png",
    order: 2,
  },
  {
    _id: "akshay-mohan",
    name: "Ar. Akshay Mohan",
    role: "Design Director | Co-founder",
    bio: "Akshay, the Architect and Head of the studio, leads with a vision rooted in contextual design, tropical modernism, sustainable materiality.",
    photoUrl: "/images/founders/akshay-mohan.png",
    order: 3,
  },
];

async function seedFounders() {
  for (const founder of FOUNDERS) {
    const assetId = await uploadImage(founder.photoUrl, `${founder._id}.png`);
    await client.createOrReplace({
      _id: founder._id,
      _type: "founder",
      name: founder.name,
      role: founder.role,
      bio: founder.bio,
      order: founder.order,
      photo: imageField(assetId),
    });
    console.log("Seeded founder:", founder._id);
  }
}

async function main() {
  await seedHero();
  await seedContact();
  await seedGallery();
  await seedBrands();
  await seedFounders();
  console.log("Done seeding Sanity project.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
