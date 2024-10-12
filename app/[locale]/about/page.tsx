/**
 * About Page
 */

// Dependencies
import Hero from '@/components/about/Hero';
import History from '@/components/about/History';
import Team from '@/components/about/Team';
import { teamMembersQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { unstable_setRequestLocale } from 'next-intl/server';
import { TeamMembersQueryResult } from '@/@types/cms';

export default async function About({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);
	const teamMembers = await sanityFetch<TeamMembersQueryResult>({
		query: teamMembersQuery,
	});

	return (
		<main>
			<Hero />
			<History />
			<Team teamMembers={teamMembers} />
		</main>
	);
}
