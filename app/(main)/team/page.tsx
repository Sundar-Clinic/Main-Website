/**
 * Team Page
 */

// Dependencies
import TeamMemberCard from '@/components/cards/TeamMember';
import { teamMembersQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Team() {
	const teamMembers = await sanityFetch<TeamMemberData>({
		query: teamMembersQuery,
	});

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
}
