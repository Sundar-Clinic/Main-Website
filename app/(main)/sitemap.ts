import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://sundarclinic.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://sundarclinic.vercel.app/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://sundarclinic.vercel.app/gallery',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: 'https://sundarclinic.vercel.app/privacy-policy',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: 'https://sundarclinic.vercel.app/terms-and-conditions',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: 'https://sundarclinic.vercel.app/legal',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	];
}
