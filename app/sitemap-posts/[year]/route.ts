import { NextResponse } from 'next/server';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { getAllPostsByYearQuery } from '@/sanity/lib/queries';
import { GetAllPostsByYearQueryResult } from '@/@types/cms';
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

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ year: string }> }
) {
	try {
		const { year } = await params;

		// Check if sitemap for the year is already cached
		const cacheKey = `sitemap-posts-${year}`;
		const cachedSitemap = sitemapCache.get(cacheKey);
		if (cachedSitemap) {
			return new NextResponse(cachedSitemap, {
				headers: {
					'Content-Type': 'application/xml',
					'Cache-Control':
						'public, max-age=86400, stale-while-revalidate', // 24 hour cache
				},
			});
		}

		// Fetch posts for the given year
		const posts = await sanityFetch<GetAllPostsByYearQueryResult>({
			query: getAllPostsByYearQuery,
			params: { year },
		});

		// If no posts, return empty XML
		if (!posts || posts.length === 0) {
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
		const sitemaps: SitemapItem[] = posts.map(
			(post) =>
				({
					url: `/en/blogs/${post.slug?.current}`,
					priority: 0.5,
					changefreq: 'monthly',
					lastmod: new Date(post._updatedAt).toISOString(),
				} as SitemapItem)
		);

		// Create sitemap XML
		const stream = new SitemapStream({ hostname: WEBSITE_URL });
		const xml = await streamToPromise(
			Readable.from(sitemaps).pipe(stream)
		).then((data) => data.toString());

		// Cache the generated sitemap
		sitemapCache.set(cacheKey, xml);

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
