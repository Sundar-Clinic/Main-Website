/* eslint-disable react/jsx-no-literals */
'use client';

// Dependencies
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import TwitterX from '../icons/TwitterX';
import WhatsApp from '../icons/WhatsApp';
import Reddit from '../icons/Reddit';
import { LinkedinIcon } from 'lucide-react';
import { PostQueryResult } from '@/@types/cms';
import { useToast } from '@/components/ui/use-toast';
import { WEBSITE_URL } from '@/constants/clinic';
import { Link } from '@/lib/routing';
import { useTranslations } from 'next-intl';

type SocialShareProps = React.ComponentProps<'section'> & {
	post: NonNullable<PostQueryResult>;
	locale: LocaleLanguages;
};

/**
 * Renders the social share section of a blog post.
 * @param {PostQueryResult} post - The blog post.
 * @returns {JSX.Element} The rendered social share section.
 */
const SocialShare: React.FC<SocialShareProps> = ({ post, locale }) => {
	const LINK = `${WEBSITE_URL}/${locale}/blogs/${post.slug}`;
	const SHARE_TEXT = encodeURI(post.title?.[locale] ?? '');
	const SHARE_LINK = encodeURI(LINK);

	const { toast } = useToast();
	const t = useTranslations('pages.blogs.share');

	const WHATSAPP_TEXT = encodeURI(`${post.title}\n\nRead here: ${LINK}`);
	// const LINKEDIN_TEXT = encodeURI(`mini=true&url=${LINK}&title=${post.title}&summary=${WEBSITE_URL}&source=Sundar Clinic`)

	const handleCopyLinkToClipboard = () => {
		navigator.clipboard.writeText(LINK);
		toast({
			title: 'Link Copied!',
			description: 'The link has been copied to your clipboard.',
		});
	};

	return (
		<section className='mt-8 max-w-5xl mx-auto w-full p-4'>
			<h3 className='font-medium'>{t('heading')}</h3>
			<div className='flex items-center gap-2 flex-wrap mt-2'>
				<Button
					className='bg-green-500 hover:bg-green-500/80 text-white'
					asChild
				>
					<Link
						href={`https://wa.me/?text=${WHATSAPP_TEXT}`}
						target='_blank'
					>
						<WhatsApp className='mr-2 w-5 h-5' /> WhatsApp
					</Link>
				</Button>
				<Button
					className='bg-blue-500 hover:bg-blue-500/80 text-white'
					asChild
				>
					<Link
						href={`https://www.linkedin.com/sharing/share-offsite?url=${SHARE_LINK}`}
						target='_blank'
					>
						<LinkedinIcon
							className='mr-2'
							fill='#ffffff'
							size={20}
							strokeWidth={1}
						/>{' '}
						LinkedIn
					</Link>
				</Button>
				<Button className='' asChild>
					<Link
						href={`https://twitter.com/intent/tweet?url=${SHARE_LINK}&text=${SHARE_TEXT}`}
						target='_blank'
					>
						<TwitterX className='mr-2' fill='#ffffff' size={20} />{' '}
						Twitter
					</Link>
				</Button>
				<Button
					className='bg-red-500 hover:bg-red-500/80 text-white'
					asChild
				>
					<Link
						href={`https://reddit.com/submit?url=${SHARE_LINK}&title=${SHARE_TEXT}`}
						target='_blank'
					>
						<Reddit className='mr-2' fill='#ffffff' size={20} />{' '}
						Reddit
					</Link>
				</Button>
				{/* <Button className='bg-blue-500 hover:bg-blue-500/80 text-white' asChild>
					<Link
						href={`https://www.linkedin.com/shareArticle?${LINKEDIN_TEXT}`}
						target='_blank'
					>
						LinkedIn
					</Link>
				</Button> */}
				<Button className='' onClick={handleCopyLinkToClipboard}>
					<Copy className='mr-2' strokeWidth={1.5} size={20} />
					{t('copy')}
				</Button>
			</div>
		</section>
	);
};

export default SocialShare;
