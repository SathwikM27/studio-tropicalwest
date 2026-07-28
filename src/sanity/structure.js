export const SINGLETON_TYPES = new Set(["hero", "contact"]);

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Hero Section")
        .child(S.document().schemaType("hero").documentId("hero")),
      S.listItem()
        .title("Contact Details")
        .child(S.document().schemaType("contact").documentId("contact")),
      S.divider(),
      S.documentTypeListItem("galleryWork").title("Selected Works"),
      S.documentTypeListItem("brand").title("Brands We Use"),
      S.documentTypeListItem("founder").title("Founders"),
    ]);
