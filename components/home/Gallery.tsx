/**
 * Home Page - Gallery Component
 */

// Dependencies
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/routing';
import ImageList from '@mui/material/ImageList';
import GalleryImage from '@/components/cards/GalleryImage';
import { useTranslations } from 'next-intl';

type GalleryProps = React.ComponentProps<'section'> & {
	galleryImages: GalleryImageData;
};

const Gallery: React.FC<GalleryProps> = ({ galleryImages, ...props }) => {
	const t = useTranslations('pages.home.gallery');

	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8' {...props}>
			<h3 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ImageList
				variant='masonry'
				cols={3}
				gap={8}
				className='mt-8 min-h-fit max-h-[60vh] overflow-hidden'
			>
				{[...galleryImages]
					.sort(() => Math.random() - 0.5)
					.map((image) => (
						<GalleryImage key={`gallery-${image._id}`} {...image} />
					))}
			</ImageList>
			<Button
				asChild
				variant={'ghost'}
				className='w-full text-center text-lg mt-4'
			>
				<Link href={'/gallery'}>{t('cta')}</Link>
			</Button>
		</section>
	);
};

export default Gallery;
