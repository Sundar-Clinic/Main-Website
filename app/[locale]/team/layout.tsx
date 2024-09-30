/**
 * Team Page Layout
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
		title: t('pages.team.meta.title'),
		description: t('pages.team.meta.description'),
		alternates: {
			canonical: '/en/team',
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/team`])
			),
		},
	};
}

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
