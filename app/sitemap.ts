/**
 * sitemap.xml configuration
 */

// Dependencies
import { MetadataRoute } from 'next';
import { locales } from '@/i18n/i18n';
import { WEBSITE_URL } from '@/constants/clinic';

const defaultLocale = 'en' as const;

const DEFAULT_SITEMAP: MetadataRoute.Sitemap = [
	getEntry('/', { priority: 1, changeFrequency: 'monthly' }),
	getEntry('/about', { priority: 0.8, changeFrequency: 'monthly' }),
	getEntry('/team', { priority: 0.5, changeFrequency: 'monthly' }),
	getEntry('/gallery', { priority: 0.5, changeFrequency: 'monthly' }),
	getEntry('/blogs', { priority: 0.5, changeFrequency: 'weekly' }),
	getEntry('/lab', { priority: 0.5, changeFrequency: 'monthly' }),
	getEntry('/privacy-policy', {
		priority: 0.5,
		changeFrequency: 'monthly',
	}),
	getEntry('/terms-and-conditions', {
		priority: 0.5,
		changeFrequency: 'monthly',
	}),
	getEntry('/legal', { priority: 0.5, changeFrequency: 'monthly' }),
	{
		url: `${WEBSITE_URL}/sitemap-posts.xml`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.5,
	},
	{
		url: `${WEBSITE_URL}/sitemap-lab-tests.xml`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		// const postSlugs = await sanityFetch<PostSlugsQueryResult>({
		// 	query: postSlugsQuery,
		// });
		// const posts = postSlugs.map(({ slug }) =>
		// 	getEntry(`/blogs/${slug?.current}`, {
		// 		priority: 0.5,
		// 		changeFrequency: 'monthly',
		// 	})
		// );

		return [...DEFAULT_SITEMAP];
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
	return `${WEBSITE_URL}/${locale}${pathname === '/' ? '' : pathname}`;
}
