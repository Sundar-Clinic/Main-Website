import React from 'react';

type TeamProps = React.ComponentProps<'section'> & {
	teamMembers: TeamMemberData;
};

const Team: React.FC<TeamProps> = ({ teamMembers }) => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8'>
			<h2 className='font-heading font-medium text-lg md:text-2xl max-w-3xl'>
				Meet Our Dedicated Team
			</h2>
		</section>
	);
};

export default Team;
