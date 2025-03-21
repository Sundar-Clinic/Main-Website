/**
 * Lab Page
 */

// Dependencies
import { LabTestsQueryResult } from '@/@types/cms';
import Hero from '@/components/lab/Hero';
import Tests from '@/components/lab/Tests';
import { labTestsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Lab({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);

	const tests = await sanityFetch<LabTestsQueryResult>({
		query: labTestsQuery,
	});

	return (
		<main>
			<Hero />
			<Tests tests={tests} locale={locale} />
		</main>
	);
}
