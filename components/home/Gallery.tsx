import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type GalleryProps = React.ComponentProps<'section'> & {
	galleryImages: GalleryImageData;
};

type GalleryImageProps = React.ComponentProps<'li'> & GalleryImageData[number];

const GalleryImage: React.FC<GalleryImageProps> = ({
	image,
	alt,
	...props
}) => {
	return (
		<li {...props} className='rounded-lg overflow-hidden mt-2'>
			<Image
				src={image}
				alt={alt}
				width={100}
				height={100}
				className='w-full h-auto object-contain'
			/>
		</li>
	);
};

const Gallery: React.FC<GalleryProps> = ({ galleryImages, ...props }) => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8' {...props}>
			<h3 className='text-2xl font-heading text-center font-medium'>
				Gallery
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ul className='mt-6 columns-2 md:columns-4 gap-4 max-h-[60vh] overflow-hidden relative'>
				<div className='from-transparent to-white bg-gradient-to-b absolute w-full h-full'></div>
				{galleryImages
					.concat(Array(12).fill(galleryImages[0]))
					.concat(Array(12).fill(galleryImages[1]))
					.sort(() => Math.random() - 0.5)
					.map((image) => (
						<GalleryImage key={`gallery-${image._id}`} {...image} />
					))}
			</ul>
			<Button
				asChild
				variant={'ghost'}
				className='w-full text-center mt-8 text-lg'
			>
				<Link href={'/gallery'}>View more</Link>
			</Button>
		</section>
	);
};

export default Gallery;
