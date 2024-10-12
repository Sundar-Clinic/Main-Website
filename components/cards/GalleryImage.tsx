/**
 * Gallery Image Component
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import { GalleryImagesQueryResult } from '@/@types/cms';

type GalleryImageProps = React.ComponentProps<'img'> & {
	image: GalleryImagesQueryResult[number];
};

const GalleryImage: React.FC<GalleryImageProps> = ({ image }) => {
	return (
		<ImageListItem className='rounded-lg overflow-hidden mt-2'>
			<Image
				src={image.image ?? ''}
				alt={image.alt ?? ''}
				width={100}
				height={100}
				className='w-full h-auto object-contain'
				unoptimized
				loading='lazy'
			/>
		</ImageListItem>
	);
};

export default GalleryImage;
