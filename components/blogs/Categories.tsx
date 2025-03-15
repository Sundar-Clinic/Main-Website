import React from 'react';
import { useTranslations } from 'next-intl';
import { PostQueryResult } from '@/@types/cms';
import { Badge } from '@/components/ui/badge';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

interface Props extends React.ComponentProps<'section'> {
	post: PostQueryResult;
	locale: LocaleLanguages;
}

const BlogCategories: React.FC<Props> = ({ post, locale }) => {
	const t = useTranslations('pages.blogs.categories');
	return (
		<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
			<h2 className='text-2xl font-heading font-medium'>
				{t('heading')}
			</h2>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
			<div className='flex flex-wrap gap-4 mt-8'>
				{post?.categories?.map((category) => (
					<Tooltip key={post._id}>
						<TooltipTrigger className='cursor-pointer'>
							<Badge className='flex items-center gap-1'>
								<InfoIcon size={16} />
								<span>{category?.title?.[locale]}</span>
							</Badge>
						</TooltipTrigger>
						<TooltipContent className='max-w-xs'>
							{category?.description?.[locale]}
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</section>
	);
};

export default BlogCategories;
