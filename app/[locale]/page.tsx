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
import {
	faqsQuery,
	galleryImagesQuery,
	testimonialsQuery,
} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaqsQueryResult } from '@/@types/cms.d';

export default async function Home({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);
	const faqs = await sanityFetch<FaqsQueryResult>({ query: faqsQuery });
	const testimonials = await sanityFetch<TestimonailData>({
		query: testimonialsQuery,
	});
	const galleryImages = await sanityFetch<GalleryImageData>({
		query: galleryImagesQuery,
	});

	return (
		<main className=''>
			<Hero />
			<Services locale={locale} />
			<Gallery galleryImages={galleryImages} />
			<Testimonials testimonials={testimonials} />
			<Contact />
			<FAQ faqs={faqs} />
		</main>
	);
}
