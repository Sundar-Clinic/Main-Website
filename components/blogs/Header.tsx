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
		<header className='max-w-7xl mx-auto w-full p-4 mt-8'>
			<section className='flex flex-col gap-4'>
				<h1 className='font-heading font-medium text-2xl md:text-4xl max-w-3xl'>
					{post?.title?.[locale]}
				</h1>
				<p className='text-lg md:text-xl text-justify max-w-5xl text-slate-500'>
					{post?.description?.[locale]}
				</p>
			</section>
		</header>
	);
};

export default BlogHeader;
