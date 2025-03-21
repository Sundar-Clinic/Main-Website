/**
 * Lab Page Layout
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
		title: t('pages.lab.meta.title'),
		description: t('pages.lab.meta.description'),
		alternates: {
			canonical: '/en/lab',
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/lab`])
			),
		},
	};
}

export default function LabLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
