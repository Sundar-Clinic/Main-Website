/**
 * Gallery Page Layout
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
		title: t('pages.gallery.meta.title'),
		description: t('pages.gallery.meta.description'),
		alternates: {
			canonical: '/en/gallery',
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}/gallery`])
			),
		},
	};
}

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
