const galleryWork = {
  name: "galleryWork",
  title: "Gallery Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title (e.g. \"Living Room\")",
      description: "2–4 words.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location (e.g. \"Pelican Square Villa, Bengaluru\")",
      description: "One line, about 50 characters.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      description:
        "Images are cropped to a 4:3 landscape rectangle. Upload at least 1600×1200px in roughly a 4:3 ratio for the best fit.",
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
      name: "order",
      title: "Order (lower numbers show first)",
      type: "number",
      validation: (Rule) => Rule.required().integer(),
    },
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "image" },
  },
};

export default galleryWork;
