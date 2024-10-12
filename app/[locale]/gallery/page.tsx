/**
 * Gallery Page
 */

// Dependencies
import GalleryImage from '@/components/cards/GalleryImage';
import { galleryImagesQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import { GalleryImagesQueryResult } from '@/@types/cms';

export default async function Gallery() {
	const galleryImages = await sanityFetch<GalleryImagesQueryResult>({
		query: galleryImagesQuery,
	});

	return (
		<section className='w-full p-4 md:px-16 lg:max-w-7xl md:mx-auto'>
			<Box sx={{ width: '100%', height: '100%' }}>
				<ImageList variant='masonry' cols={3} gap={8}>
					{[...galleryImages]
						.sort(() => Math.random() - 0.5)
						.map((image) => (
							<GalleryImage
								key={`gallery-${image._id}`}
								image={image}
							/>
						))}
				</ImageList>
			</Box>
		</section>
	);
}
