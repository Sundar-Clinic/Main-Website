import { NextResponse } from 'next/server';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { getAllPostsByYearQuery } from '@/sanity/lib/queries';
import { GetAllPostsByYearQueryResult } from '@/@types/cms';
import { WEBSITE_URL } from '@/constants/clinic';
import {
	SitemapStream,
	streamToPromise,
	SitemapItem,
	EmptySitemap,
	EmptyStream,
} from 'sitemap';
import { Readable } from 'stream';

export const dynamic = 'force-dynamic';

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ year: string }> }
) {
	const { year } = await params;
	const posts = await sanityFetch<GetAllPostsByYearQueryResult>({
		query: getAllPostsByYearQuery,
		params: { year },
	});
	if (posts.length === 0) {
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
	const sitemaps: SitemapItem[] = posts.map(
		(post) =>
			({
				url: `/en/blogs/${post.slug?.current}`,
				priority: 0.5,
				changefreq: 'monthly',
				lastmod: new Date(post._updatedAt).toISOString(),
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
