import React from 'react';

type TeamMemberCardProps = React.ComponentProps<'div'> & {
	member: TeamMemberData[number];
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = () => {
	return <div>TeamMemberCard</div>;
};

export default TeamMemberCard;
