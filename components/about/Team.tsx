import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type TeamProps = React.ComponentProps<'section'> & {
	teamMembers: TeamMemberData;
};

const Team: React.FC<TeamProps> = ({ teamMembers }) => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8'>
			<h2 className='font-heading font-medium text-lg md:text-2xl max-w-3xl'>
				Meet Our Dedicated Team
			</h2>
			<div className='mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
				{teamMembers.map((member) => (
					<TeamMemberCard
						key={`about-member-${member._id}`}
						member={member}
					/>
				))}
			</div>
		</section>
	);
};

export default Team;
