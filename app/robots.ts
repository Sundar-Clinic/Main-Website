/**
 * robots.txt configuration
 * allow all except /api and /studio endpoints
 */

// Dependencies
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
		sitemap: 'https://sundarclinic.com/sitemap.xml',
	};
}
