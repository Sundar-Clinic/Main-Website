/**
 * Terms & Conditions Page Layout
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
		title: t('pages.terms-and-conditions.meta.title'),
		description: t('pages.terms-and-conditions.meta.description'),
		alternates: {
			canonical: '/en/terms-and-conditions',
			languages: Object.fromEntries(
				locales.map((locale) => [
					locale,
					`/${locale}/terms-and-conditions`,
				])
			),
		},
	};
}

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
