import React from 'react';
import { PostQueryResult } from '@/@types/cms';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface Props extends React.ComponentProps<'header'> {
	post: NonNullable<PostQueryResult>;
	locale: LocaleLanguages;
}

const BlogHeader: React.FC<Props> = ({ post, locale }) => {
	return (
		<header className='max-w-5xl mx-auto w-full p-4 mt-8'>
			<section className='flex flex-col gap-4'>
				<h1 className='font-heading font-medium text-2xl md:text-4xl max-w-3xl text-center mx-auto'>
					{post?.title?.[locale]}
				</h1>
				<div className='overflow-hidden rounded-lg max-w-3xl mx-auto'>
					<Image
						src={
							(post.thumbnail &&
								urlForImage(post.thumbnail)
									.format('webp')
									.url()) ??
							''
						}
						alt={post?.thumbnail?.alt ?? post.title?.[locale] ?? ''}
						width={500}
						height={500}
						className='w-full h-auto aspect-video object-cover object-center'
					/>
				</div>
				<p className='text-lg md:text-xl text-justify text-slate-500 mx-auto'>
					{post?.description?.[locale]}
				</p>
			</section>
		</header>
	);
};

export default BlogHeader;
