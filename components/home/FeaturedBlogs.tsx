import React from 'react';
import { FeaturedPostsQueryResult } from '@/@types/cms';
import { useTranslations } from 'next-intl';
import BlogCard from '../cards/BlogCard';

interface Props extends React.ComponentProps<'section'> {
	posts: FeaturedPostsQueryResult;
	locale: LocaleLanguages;
}

const FeaturedBlogs: React.FC<Props> = ({ posts, locale }) => {
	const t = useTranslations('pages.home.featured-blogs');
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
				{posts &&
					posts.map((post) => (
						<BlogCard key={post._id} post={post} locale={locale} />
					))}
			</div>
		</section>
	);
};

export default FeaturedBlogs;
