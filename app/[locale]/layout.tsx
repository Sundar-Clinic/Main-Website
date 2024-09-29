/**
 * Locale Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import {
	getMessages,
	getTranslations,
	unstable_setRequestLocale,
} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { locales } from '@/i18n/i18n';

export async function generateMetadata({
	params: { locale },
}: PageProps): Promise<Metadata> {
	const t = await getTranslations({ locale });

	return {
		title: {
			template: `%s - ${t('company.name')}`,
			default: t('company.name'),
		},
		description: t('company.meta.description'),
		category: 'healthcare',
		openGraph: {
			title: t('company.name'),
			description: t('company.meta.description'),
			url: '/',
			type: 'website',
			siteName: t('company.name'),
		},
		twitter: {
			title: t('company.name'),
			description: t('company.meta.twitter'),
			site: '@SundarClinic',
			creator: '@SundarClinic',
		},
		alternates: {
			canonical: '/en',
			languages: Object.fromEntries(
				locales.map((locale) => [locale, `/${locale}`])
			),
		},
	};
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function Layout({
	children,
	params: { locale },
}: { children: React.ReactNode } & PageProps) {
	unstable_setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			<TooltipProvider>
				<Navbar locale={locale} />
				{children}
				<Footer locale={locale} />
			</TooltipProvider>
			<Toaster />
		</NextIntlClientProvider>
	);
}
