/**
 * Team Page
 */

// Dependencies
import TeamMemberCard from "@/components/cards/TeamMember";
import { teamMembersQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { TeamMembersQueryResult } from "@/@types/cms";

export default async function Team({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const teamMembers = await sanityFetch<TeamMembersQueryResult>({
    query: teamMembersQuery,
  });

  const t = await getTranslations("pages.team");

  return (
    <section className="container">
      <h2 className="font-heading font-medium text-lg md:text-2xl max-w-3xl">
        {t("heading")}
      </h2>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={`about-member-${member._id}`} member={member} />
        ))}
      </div>
    </section>
  );
}
