import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import AllBlogs, { POSTS_PER_PAGE } from '@/components/blogs/AllBlogs';
import { getBlogListingQueryKey, getPaginationParams } from '@/lib/blogs/blogListing';
import type { BlogListingParams } from '@/lib/blogs/blogListing';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { blogListingQuery } from '@/sanity/lib/queries';
import type { BlogListingQueryResult } from '@/@types/cms';
import { createCollectionTag } from '@/lib/cache-tags';
import { unstable_setRequestLocale } from 'next-intl/server';

const BlogsPage = async ({ params: { locale } }: PageProps) => {
	unstable_setRequestLocale(locale);
	const { offset, limit } = getPaginationParams(1, POSTS_PER_PAGE);
	const params: BlogListingParams = {
		locale,
		categoryId: 'all',
		search: '',
		offset,
		limit,
	};
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: getBlogListingQueryKey(params),
		queryFn: () =>
			sanityFetch<BlogListingQueryResult>({
				query: blogListingQuery,
				params,
				options: {
					next: {
						tags: [createCollectionTag('post'), createCollectionTag('category')],
					},
				},
			}),
	});
	return (
		<main>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<AllBlogs locale={locale} />
			</HydrationBoundary>
		</main>
	);
};

export default BlogsPage;
