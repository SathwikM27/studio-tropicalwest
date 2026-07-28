import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./client";

const builder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source);
}
