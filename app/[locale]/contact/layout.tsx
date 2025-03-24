/**
 * Contact Page Layout
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
		title: t('pages.contact.meta.title'),
		description: t('pages.contact.meta.description'),
		alternates: {
			canonical: `/${locale}/contact`,
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/contact`])
			),
		},
	};
}

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
