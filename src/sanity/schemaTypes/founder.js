const founder = {
  name: "founder",
  title: "Founder",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role (e.g. \"Creative Director | Co-founder\")",
      description: "About 40 characters, one line.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Short bio",
      description:
        "2–4 sentences, about 300 characters. No hard limit, but a longer bio pushes the layout taller and looks unbalanced.",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
      description:
        "Square (1:1) photo, at least 600×600px. Shown small and cropped to a square, so a tight headshot crop works best.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order (lower numbers show first)",
      type: "number",
      validation: (Rule) => Rule.required().integer(),
    },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
};

export default founder;
