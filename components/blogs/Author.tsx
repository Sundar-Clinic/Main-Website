import React from "react";
import { PostQueryResult } from "@/@types/cms";
import { useTranslations } from "next-intl";
import TeamMemberCard from "../cards/TeamMember";

interface Props extends React.ComponentProps<"section"> {
  post: NonNullable<PostQueryResult>;
  locale: LocaleLanguages;
}

const BlogAuthor: React.FC<Props> = ({ post }) => {
  const t = useTranslations("pages.blogs.author");
  return (
    <section className="max-w-3xl mx-auto w-full p-4 mt-8">
      <h2 className="text-2xl font-heading font-medium">{t("heading")}</h2>
      <hr className="border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2" />
      <div className="max-w-md mt-8">
        <TeamMemberCard member={post?.author!} />
      </div>
    </section>
  );
};

export default BlogAuthor;
