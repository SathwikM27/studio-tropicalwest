const contact = {
  name: "contact",
  title: "Contact Details",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address / Location line",
      description: "Keep to one line, about 50 characters.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone number (include country code, e.g. +91...)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "instagramHandle",
      title: "Instagram handle (without the @)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkedinLabel",
      title: "LinkedIn display name",
      description: "Short display name, one line.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "address" },
  },
};

export default contact;
