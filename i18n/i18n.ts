import { getRequestConfig } from 'next-intl/server';
/* eslint-disable-next-line */
import { notFound } from 'next/navigation';

export const locales = ['en', 'ta', 'hi'] as LocaleLanguages[];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`../locales/${locale}.json`)).default,
	};
});
