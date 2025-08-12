import {
  DocumentIcon,
  UsersIcon,
  EarthGlobeIcon,
  ImageIcon,
  DocumentTextIcon,
  CogIcon,
  HeartFilledIcon,
  ThListIcon,
  ComposeIcon,
} from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: any) =>
  S.list()
    .title("Sundar Clinic Website")
    .items([
      // Site Configuration Singleton
      S.listItem()
        .title("Site Configuration")
        .icon(CogIcon)
        .child(S.document().schemaType("siteConfig").documentId("siteConfig")),
      S.divider(),
      S.documentTypeListItem("post").title("Blog Posts").icon(ComposeIcon),
      S.documentTypeListItem("category").title("Categories").icon(ThListIcon),
      S.listItem()
        .title("Gallery")
        .icon(ImageIcon)
        .child(
          S.documentList()
            .title("Gallery Images")
            .filter(`_type == "gallery"`)
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
        ),
      S.listItem()
        .title("Team Members")
        .icon(UsersIcon)
        .child(
          S.documentList()
            .title("Team Members")
            .filter(`_type == "team"`)
            .defaultOrdering([{ field: "priority", direction: "asc" }])
        ),
      S.documentTypeListItem("lab-tests")
        .title("Lab Tests")
        .icon(DocumentTextIcon),
      S.documentTypeListItem("partner-labs")
        .title("Partner Labs")
        .icon(EarthGlobeIcon),
      S.documentTypeListItem("faq").title("FAQ").icon(DocumentIcon),
      S.documentTypeListItem("testimonial")
        .title("Testimonials")
        .icon(HeartFilledIcon),
    ]);
