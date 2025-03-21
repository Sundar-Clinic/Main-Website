/**
 * Lab Page
 */

// Dependencies
import Hero from '@/components/lab/Hero';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Lab({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);

	return (
		<main>
			<Hero />
		</main>
	);
}
