/**
 * Home Page
 */

// Dependencies
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhatsAppChannelCTA from '@/components/cta/WhatsAppChannel';
import Testimonials from '@/components/home/Testimonials';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import NewsLetterCTA from '@/components/cta/NewsletterCTA';
import {
	faqsQuery,
	featuredPostsQuery,
	galleryImagesQuery,
	testimonialsQuery,
} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { unstable_setRequestLocale } from 'next-intl/server';
import { createCollectionTag } from '@/lib/cache-tags';
import {
	FaqsQueryResult,
	TestimonialsQueryResult,
	GalleryImagesQueryResult,
	FeaturedPostsQueryResult,
} from '@/@types/cms.d';

export default async function Home({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);
	const faqs = await sanityFetch<FaqsQueryResult>({
		query: faqsQuery,
		options: { next: { tags: [createCollectionTag('faq')] } },
	});
	const testimonials = await sanityFetch<TestimonialsQueryResult>({
		query: testimonialsQuery,
		options: { next: { tags: [createCollectionTag('testimonial')] } },
	});
	const galleryImages = await sanityFetch<GalleryImagesQueryResult>({
		query: galleryImagesQuery,
		options: { next: { tags: [createCollectionTag('gallery')] } },
	});
	const featuredPosts = await sanityFetch<FeaturedPostsQueryResult>({
		query: featuredPostsQuery,
		options: {
			next: {
				tags: [
					createCollectionTag('post'),
					createCollectionTag('team'),
					createCollectionTag('category'),
				],
			},
		},
	});

	return (
		<main className=''>
			<Hero />
			<Services locale={locale} />
			<Gallery galleryImages={galleryImages} />
			<Testimonials testimonials={testimonials} locale={locale} />
			<WhatsAppChannelCTA />
			<Contact />
			{featuredPosts && featuredPosts.length > 0 && (
				<FeaturedBlogs posts={featuredPosts} locale={locale} />
			)}
			<NewsLetterCTA />
			<FAQ faqs={faqs} locale={locale} />
		</main>
	);
}
