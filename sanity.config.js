"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure, SINGLETON_TYPES } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dummy0000";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "studio-tropicalwest",
  title: "Studio Tropicalwest",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Hero and Contact are singletons — hide them from "create new" and
    // strip duplicate/delete so the client can never end up with two.
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((item) => !SINGLETON_TYPES.has(item.templateId));
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (SINGLETON_TYPES.has(schemaType)) {
        return prev.filter(
          ({ action }) => !["duplicate", "delete"].includes(action),
        );
      }
      return prev;
    },
  },
});
