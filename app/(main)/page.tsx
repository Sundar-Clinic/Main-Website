/**
 * Home Page
 */

// Dependencies
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import { faqsQuery, testimonialsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Home() {
	const faqs = await sanityFetch<FAQData>({ query: faqsQuery });
	const testimonials = await sanityFetch<TestimonailData>({
		query: testimonialsQuery,
	});

	return (
		<main className=''>
			<Hero />
			<Services />
			<Gallery />
			<Testimonials testimonials={testimonials} />
			<Contact />
			<FAQ faqs={faqs} />
		</main>
	);
}
