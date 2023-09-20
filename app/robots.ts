import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: '/api/',
			},
			{
				userAgent: '*',
				disallow: '/studio/',
			},
		],
		sitemap: 'https://sundarclinic.vercel.app/sitemap.xml',
	};
}
