const contact = {
  name: "contact",
  title: "Contact Details",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address / Location line",
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
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "address" },
  },
};

export default contact;
