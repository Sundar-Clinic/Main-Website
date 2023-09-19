/**
 * Contact Page
 */

// Dependencies
import { faqsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';

export default async function ContactPage() {
	const faqs = await sanityFetch<FAQData>({ query: faqsQuery });
	return (
		<main>
			<Contact />
			<FAQ faqs={faqs} />
		</main>
	);
}
