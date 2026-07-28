const hero = {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Hero Image",
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
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "accentWord",
      title: "Highlighted ending (shown in the accent colour)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtext",
      title: "Supporting line",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "heading", media: "image" },
  },
};

export default hero;
