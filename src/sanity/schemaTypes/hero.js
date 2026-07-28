const hero = {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Hero Image",
      description:
        "Portrait-ish photos work best — the image is cropped to fill a tall panel. Upload at least 1200×1600px, and use the crop tool below to keep the subject centered.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt text (describe the photo for accessibility)",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "eyebrow",
      title: "Small label above the headline",
      description: "Keep it short — about 4–5 words.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      title: "Headline",
      description: "About 4–8 words — it's shown in large type.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "accentWord",
      title: "Highlighted ending (shown in the accent colour)",
      description: "1 word ideally, 2 at most.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtext",
      title: "Supporting line",
      description: "1–2 short sentences, about 20 words — shown in a narrow column.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "heading", media: "image" },
  },
};

export default hero;
