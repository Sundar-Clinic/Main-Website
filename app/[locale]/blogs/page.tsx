import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { blogListingQuery } from '@/sanity/lib/queries';
import { BlogListingQueryResult } from '@/@types/cms';
import AllBlogs, { POSTS_PER_PAGE } from '@/components/blogs/AllBlogs';
import { unstable_setRequestLocale } from 'next-intl/server';

const BlogsPage = async ({ params: { locale } }: PageProps) => {
	unstable_setRequestLocale(locale);
	const initialData = await sanityFetch<BlogListingQueryResult>({
		query: blogListingQuery,
		params: {
			locale,
			categoryId: 'all',
			search: '',
			offset: 0,
			end: POSTS_PER_PAGE,
		},
	});
	return (
		<main>
			<AllBlogs initialData={initialData} locale={locale} />
		</main>
	);
};

export default BlogsPage;
