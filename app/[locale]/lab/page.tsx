/**
 * Lab Page
 */

// Dependencies
import { LabTestsQueryResult, PartnerLabsQueryResult } from '@/@types/cms';
import Hero from '@/components/lab/Hero';
import PartnerLabs from '@/components/lab/PartnerLabs';
import Tests from '@/components/lab/Tests';
import { labTestsQuery, partnerLabsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Lab({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);

	const tests = await sanityFetch<LabTestsQueryResult>({
		query: labTestsQuery,
	});
	const partnerLabs = await sanityFetch<PartnerLabsQueryResult>({
		query: partnerLabsQuery,
	});

	return (
		<main>
			<Hero />
			<Tests tests={tests} locale={locale} />
			<PartnerLabs partnerLabs={partnerLabs} />
		</main>
	);
}
