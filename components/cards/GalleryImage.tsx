/**
 * Gallery Image Component
 */

// Dependencies
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';

type GalleryImageProps = GalleryImageData[number];

const GalleryImage: React.FC<GalleryImageProps> = ({ image, alt }) => {
	return (
		<ImageListItem className='rounded-lg overflow-hidden mt-2'>
			<Image
				src={image}
				alt={alt}
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
