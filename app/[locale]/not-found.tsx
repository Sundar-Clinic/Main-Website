import { Link } from '@/lib/routing';
import { useTranslations } from 'next-intl';

export default function NotFound() {
	const t = useTranslations('layouts.not-found');

	return (
		<div>
			<h2>{t('heading')}</h2>
			<p>{t('description')}</p>
			<Link href='/'>{t('cta')}</Link>
		</div>
	);
}
