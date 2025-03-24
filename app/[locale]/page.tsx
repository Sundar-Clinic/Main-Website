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
import {
	FaqsQueryResult,
	TestimonialsQueryResult,
	GalleryImagesQueryResult,
	FeaturedPostsQueryResult,
} from '@/@types/cms.d';

export default async function Home({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);
	const faqs = await sanityFetch<FaqsQueryResult>({ query: faqsQuery });
	const testimonials = await sanityFetch<TestimonialsQueryResult>({
		query: testimonialsQuery,
	});
	const galleryImages = await sanityFetch<GalleryImagesQueryResult>({
		query: galleryImagesQuery,
	});
	const featuredPosts = await sanityFetch<FeaturedPostsQueryResult>({
		query: featuredPostsQuery,
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
