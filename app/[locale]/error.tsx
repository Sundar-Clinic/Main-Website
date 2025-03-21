'use client';

import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function GlobalError({
	error,
	reset,
	params: { locale },
}: {
	error: Error & { digest?: string };
	reset: () => void;
} & PageProps) {
	const t = useTranslations('layouts.global-error');

	return (
		<html>
			<body>
				<Navbar locale={locale} />
				<section className='container text-center'>
					<h2 className='text-2xl font-heading'>{t('heading')}</h2>
					<Button onClick={() => reset()} className='mt-2'>
						{t('cta')}
					</Button>
				</section>
				<Footer locale={locale} />
			</body>
		</html>
	);
}
