/**
 * About Page - Team Members Component
 */

// Dependencies
import React from "react";
import TeamMemberCard from "../cards/TeamMember";
import { useTranslations } from "next-intl";
import { TeamMembersQueryResult } from "@/@types/cms";

type TeamProps = React.ComponentProps<"section"> & {
  teamMembers: TeamMembersQueryResult;
};

const Team: React.FC<TeamProps> = ({ teamMembers }) => {
  const t = useTranslations("pages.about.team");

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
};

export default Team;
