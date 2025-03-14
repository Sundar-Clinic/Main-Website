/**
 * sitemap.xml configuration
 */

// Dependencies
import { MetadataRoute } from 'next';
import { locales } from '@/i18n/i18n';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { postSlugsQuery } from '@/sanity/lib/queries';
import { PostSlugsQueryResult } from '@/@types/cms';

const defaultLocale = 'en' as const;

const host = 'https://sundarclinic.com';

const DEFAULT_SITEMAP: MetadataRoute.Sitemap = [
	getEntry('/', { priority: 1, changeFrequency: 'monthly' }),
	getEntry('/about', { priority: 0.8, changeFrequency: 'monthly' }),
	getEntry('/team', { priority: 0.5, changeFrequency: 'monthly' }),
	getEntry('/gallery', { priority: 0.5, changeFrequency: 'monthly' }),
	getEntry('/privacy-policy', {
		priority: 0.5,
		changeFrequency: 'monthly',
	}),
	getEntry('/terms-and-conditions', {
		priority: 0.5,
		changeFrequency: 'monthly',
	}),
	getEntry('/legal', { priority: 0.5, changeFrequency: 'monthly' }),
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		const postSlugs = await sanityFetch<PostSlugsQueryResult>({
			query: postSlugsQuery,
		});
		const posts = postSlugs.map(({ slug }) =>
			getEntry(`/blogs/${slug}`, {
				priority: 0.5,
				changeFrequency: 'monthly',
			})
		);
		return [...DEFAULT_SITEMAP, ...posts];
	} catch (error) {
		return DEFAULT_SITEMAP;
	}
}

function getEntry(
	pathname: string,
	overrides?: Partial<MetadataRoute.Sitemap[number]>
) {
	return {
		url: getUrl(pathname, defaultLocale),
		lastModified: new Date(),
		alternates: {
			languages: Object.fromEntries(
				locales.map((locale) => [locale, getUrl(pathname, locale)])
			),
		},
		...overrides,
	};
}

function getUrl(pathname: string, locale: LocaleLanguages) {
	return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}
