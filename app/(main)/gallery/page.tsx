import { galleryImagesQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

export default async function Gallery() {
	const galleryImages = await sanityFetch<GalleryImageData>({
		query: galleryImagesQuery,
	});

	return (
		<section className='w-full p-4 md:px-16 lg:max-w-7xl md:mx-auto'>
			<Box sx={{ width: '100%', height: '100%' }}>
				<ImageList variant='masonry' cols={3} gap={8}>
					{[...galleryImages]
						.sort(() => Math.random() - 0.5)
						.map((item) => (
							<ImageListItem
								key={item._id}
								className='rounded-lg overflow-hidden'
							>
								<Image
									width={100}
									height={100}
									src={`${item.image}?w=248&`}
									alt={item.alt}
									priority
									className='w-full'
									unoptimized
								/>
							</ImageListItem>
						))}
				</ImageList>
			</Box>
		</section>
	);
}
