import { NextResponse } from 'next/server';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { labTestSlugsQuery } from '@/sanity/lib/queries';
import { LabTestSlugsQueryResult } from '@/@types/cms';
import { WEBSITE_URL } from '@/constants/clinic';
import { SitemapStream, streamToPromise, SitemapItem } from 'sitemap';
import { Readable } from 'stream';
import { LRUCache } from 'lru-cache';

export const dynamic = 'force-dynamic';

// Initialize LRU cache
const sitemapCache = new LRUCache<string, string>({
	max: 100, // Maximum number of items in the cache
	ttl: 1000 * 60 * 60 * 24, // Cache for 24 hours
});

export async function GET() {
	try {
		// Check if sitemap is already cached
		const cachedSitemap = sitemapCache.get('lab-tests-sitemap');
		if (cachedSitemap) {
			return new NextResponse(cachedSitemap, {
				headers: {
					'Content-Type': 'application/xml',
					'Cache-Control':
						'public, max-age=86400, stale-while-revalidate', // 24 hour cache
				},
			});
		}

		// Fetch lab test slugs
		const labTestSlugs = await sanityFetch<LabTestSlugsQueryResult>({
			query: labTestSlugsQuery,
		});

		// If no lab test slugs, return empty XML
		if (!labTestSlugs || labTestSlugs.length === 0) {
			const emptyXml =
				'<?xml version="1.0" encoding="UTF-8"?>\n' +
				'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
				'</urlset>';
			return new NextResponse(emptyXml, {
				headers: {
					'Content-Type': 'application/xml',
					'Cache-Control':
						'public, max-age=86400, stale-while-revalidate', // 24 hour cache
				},
			});
		}

		// Generate sitemap items
		const sitemaps: SitemapItem[] = labTestSlugs.map(
			(test) =>
				({
					url: `/en/lab/tests/${test.slug?.current}`,
					priority: 0.5,
					changefreq: 'monthly',
					lastmod: new Date(test._updatedAt).toISOString(),
				} as SitemapItem)
		);

		// Create sitemap XML
		const stream = new SitemapStream({ hostname: WEBSITE_URL });
		const xml = await streamToPromise(
			Readable.from(sitemaps).pipe(stream)
		).then((data) => data.toString());

		// Cache the generated sitemap
		sitemapCache.set('lab-tests-sitemap', xml);

		// Return the sitemap
		return new NextResponse(xml, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control':
					'public, max-age=86400, stale-while-revalidate', // 24 hour cache
			},
		});
	} catch (error) {
		// Handle errors and return empty XML
		const emptyXml =
			'<?xml version="1.0" encoding="UTF-8"?>\n' +
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
			'</urlset>';
		return new NextResponse(emptyXml, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control':
					'public, max-age=86400, stale-while-revalidate', // 24 hour cache
			},
		});
	}
}
