import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { getAllPostsQuery } from '@/sanity/lib/queries';
import { GetAllPostsQueryResult } from '@/@types/cms';
import AllBlogs from '@/components/blogs/AllBlogs';
import { unstable_setRequestLocale } from 'next-intl/server';

const BlogsPage = async ({ params: { locale } }: PageProps) => {
	unstable_setRequestLocale(locale);
	const posts = await sanityFetch<GetAllPostsQueryResult>({
		query: getAllPostsQuery,
	});
	return (
		<main>
			<AllBlogs posts={posts} locale={locale} />
		</main>
	);
};

export default BlogsPage;
