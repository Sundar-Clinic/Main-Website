/**
 * Contact Page
 */

// Dependencies
import { faqsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import { FaqsQueryResult } from '@/@types/cms.d';

export default async function ContactPage({ params: { locale } }: PageProps) {
	const faqs = await sanityFetch<FaqsQueryResult>({ query: faqsQuery });
	return (
		<main>
			<Contact page />
			<FAQ faqs={faqs} locale={locale} />
		</main>
	);
}
