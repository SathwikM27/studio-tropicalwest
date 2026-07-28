const brand = {
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Brand Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo (leave empty to show the name as text instead)",
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
