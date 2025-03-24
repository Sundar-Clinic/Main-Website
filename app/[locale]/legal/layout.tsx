/**
 * Legal Page Layout
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
		title: t('pages.legal.meta.title'),
		description: t('pages.legal.meta.description'),
		alternates: {
			canonical: `/${locale}/legal`,
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/legal`])
			),
		},
	};
}

export default function LegalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
