import React from 'react';
import { PostQueryResult } from '@/@types/cms';
import { PortableText } from '@portabletext/react';
import { ptComponents } from '@/sanity/lib/ptComponents';

interface Props extends React.ComponentProps<'section'> {
	post: NonNullable<PostQueryResult>;
	locale: LocaleLanguages;
}

const BlogContent: React.FC<Props> = ({ post, locale }) => {
	return (
		<section className='max-w-5xl mx-auto w-full p-4 mt-8 prose'>
			{post?.body?.[locale] && (
				<PortableText
					value={post.body?.[locale]}
					components={ptComponents}
				/>
			)}
		</section>
	);
};

export default BlogContent;
