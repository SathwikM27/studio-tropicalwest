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
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Short bio",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
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
