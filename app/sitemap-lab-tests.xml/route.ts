import { NextResponse } from 'next/server';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { labTestSlugsQuery } from '@/sanity/lib/queries';
import { LabTestSlugsQueryResult } from '@/@types/cms';
import { WEBSITE_URL } from '@/constants/clinic';
import { SitemapStream, streamToPromise, SitemapItem } from 'sitemap';
import { Readable } from 'stream';

export const dynamic = 'force-dynamic';

export async function GET() {
	const labTestSlugs = await sanityFetch<LabTestSlugsQueryResult>({
		query: labTestSlugsQuery,
	});
	const sitemaps: SitemapItem[] = labTestSlugs.map(
		(test) =>
			({
				url: `/en/lab/tests/${test.slug?.current}`,
				priority: 0.5,
				changefreq: 'monthly',
				lastmod: new Date(test._updatedAt).toISOString(),
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
