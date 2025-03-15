import React from 'react';
import { postQuery } from '@/sanity/lib/queries';
import { PostQueryResult } from '@/@types/cms';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { notFound } from 'next/navigation';
import BlogHeader from '@/components/blogs/Header';
import BlogContent from '@/components/blogs/Content';
import BlogCategories from '@/components/blogs/Categories';
import BlogAuthor from '@/components/blogs/Author';

type IndividualBlogLayoutProps = {
	params: {
		locale: LocaleLanguages;
		slug: string;
	};
};

const IndividualBlogPage: React.FC<IndividualBlogLayoutProps> = async ({
	params: { locale, slug },
}) => {
	const post = await sanityFetch<PostQueryResult>({
		query: postQuery,
		params: { slug },
	});
	if (!post) {
		return notFound();
	}
	return (
		<article className='w-full'>
			<BlogHeader post={post} locale={locale} />
			<BlogContent post={post} locale={locale} />
			{post.categories && post.categories.length > 0 && (
				<BlogCategories post={post} locale={locale} />
			)}
			{post.author && <BlogAuthor post={post} locale={locale} />}
		</article>
	);
};

export default IndividualBlogPage;
