const brand = {
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Brand Name",
      description: "1–3 words. Also shown as text if no logo is uploaded.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo (leave empty to show the name as text instead)",
      description:
        "Transparent PNG, landscape shape (roughly 2.5:1 to 3:1), about 500px wide. Shown small and in grayscale, so avoid a white or opaque background.",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "order",
      title: "Order (lower numbers show first)",
      type: "number",
      validation: (Rule) => Rule.required().integer(),
    },
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
};

export default brand;
