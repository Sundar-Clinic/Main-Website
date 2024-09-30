/**
 * sitemap.xml configuration
 */

// Dependencies
import { MetadataRoute } from 'next';
import { locales } from '@/i18n/i18n';

const defaultLocale = 'en' as const;

const host = 'https://sundarclinic.com';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
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
