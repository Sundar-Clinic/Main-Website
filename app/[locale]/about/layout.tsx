/**
 * About Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/i18n';

export async function generateMetadata({
	params: { locale },
}: PageProps): Promise<Metadata> {
	const t = await getTranslations({ locale });
	return {
		title: t('pages.about.meta.title'),
		description: t('pages.about.meta.description'),
		alternates: {
			canonical: '/en/about',
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/about`])
			),
		},
	};
}

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
