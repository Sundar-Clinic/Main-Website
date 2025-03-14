import { PostQueryResult } from '@/@types/cms';
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { Link } from '@/lib/routing';
import { dateFormatter } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface Props extends React.ComponentProps<'article'> {
	post: NonNullable<PostQueryResult>;
	locale: LocaleLanguages;
}

const BlogCard: React.FC<Props> = ({ post, locale }) => {
	const author = post.author;
	const categories = post.categories;

	return (
		<article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group'>
			<Image
				width={500}
				height={500}
				alt={post?.thumbnail?.alt ?? post.title?.[locale] ?? ''}
				src={
					(post.thumbnail &&
						urlForImage(post.thumbnail).format('webp').url()) ??
					''
				}
				className='absolute inset-0 -z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300'
			/>
			<div className='absolute inset-0 -z-10 bg-gradient-to-t  from-gray-900 via-gray-900/40' />
			<div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset' />
			<div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300'>
				<time dateTime={post.publishedAt} className='mr-8'>
					{dateFormatter(post.publishedAt ?? '')}
				</time>
				<div className='-ml-4 flex items-center gap-x-4'>
					<svg
						viewBox='0 0 2 2'
						className='-ml-0.5 w-0.5 h-0.5 flex-none fill-white/50'
					>
						<circle r={1} cx={1} cy={1} />
					</svg>
					<div className='flex gap-x-2.5'>
						<Image
							width={100}
							height={100}
							alt={author?.name ?? ''}
							src={
								(author?.image &&
									urlForImage(author?.image)
										.format('webp')
										.url()) ??
								''
							}
							className='w-6 h-6 flex-none rounded-full bg-white/10 object-cover'
						/>
						{author?.name}
					</div>
				</div>
			</div>
			<h3 className='mt-3 text-2xl/6 font-semibold text-white'>
				<Link prefetch={false} href={`/blogs/${post.slug?.current}`}>
					<span className='absolute inset-0' />
					{post?.title?.[locale] ?? ''}
				</Link>
			</h3>
			{categories && categories.length > 0 && (
				<div className='mt-3 flex gap-2 text-xs'>
					<Badge variant='secondary'>
						{categories[0]?.title?.[locale]}
					</Badge>
					{categories.length > 1 && (
						<Badge variant='secondary'>
							{'+'}
							{categories.length - 1}
						</Badge>
					)}
				</div>
			)}
		</article>
	);
};

export default BlogCard;
