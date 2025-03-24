import { NextResponse } from 'next/server';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { postPublishedYearsQuery } from '@/sanity/lib/queries';
import { PostPublishedYearsQueryResult } from '@/@types/cms';
import { WEBSITE_URL } from '@/constants/clinic';
import { SitemapStream, streamToPromise, SitemapItem } from 'sitemap';
import { Readable } from 'stream';

export const dynamic = 'force-dynamic';

export async function GET() {
	const publishedDates = await sanityFetch<PostPublishedYearsQueryResult>({
		query: postPublishedYearsQuery,
	});
	if (publishedDates.length === 0) {
		return new NextResponse(
			'<?xml version="1.0" encoding="UTF-8"?>\n' +
				'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
				'</urlset>',
			{
				headers: {
					'Content-Type': 'application/xml',
					'Cache-Control':
						'public, max-age=86400, stale-while-revalidate', // 24 hour cache
				},
			}
		);
	}
	const sitemaps: SitemapItem[] = publishedDates.map(
		(year) =>
			({
				url: `/sitemap-posts-${year}.xml`,
				priority: 0.5,
				changefreq: 'weekly',
				lastmod: new Date().toISOString(),
			}) as SitemapItem
	);
	const stream = new SitemapStream({ hostname: WEBSITE_URL });
	const xml = await streamToPromise(
		Readable.from(sitemaps).pipe(stream)
	).then((data) => data.toString());
	return new NextResponse(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=86400, stale-while-revalidate', // 24 hour cache
		},
	});
}
