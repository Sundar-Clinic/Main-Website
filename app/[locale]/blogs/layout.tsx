/**
 * Blog Page Layout
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
		title: t('pages.blogs.meta.title'),
		description: t('pages.blogs.meta.description'),
		alternates: {
			canonical: `/${locale}/blogs`,
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/blogs`])
			),
		},
	};
}

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
