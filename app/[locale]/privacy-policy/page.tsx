/**
 * Privacy Policy Page
 */

// Dependencies
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PRIVACY_POLICY } from '@/constants/clinic';

export default function PrivacyPolicy({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);

	const t = useTranslations('pages.privacy-policy');

	return (
		<main>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
				<h1 className='text-2xl font-heading font-medium'>
					{t('heading')}
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p className='mt-4'>
					{t('date')} {'19th Sept. 2023'}
				</p>
				<h2 className='text-lg'>{t('description')}</h2>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<ul className='list-disc ml-4'>
					{PRIVACY_POLICY.map((pp, index) => (
						<li key={`pp-${index} block`}>
							<h3 className='text-lg font-medium font-heading'>
								{pp.title[locale]}
							</h3>
							<ul className='ml-4'>
								{pp.descriptions.map((desc, index2) => (
									<li key={`toc-${index}-${index2}`}>
										{desc[locale]}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='text-lg mt-4'>{t('confirmation')}</p>
			</section>
		</main>
	);
}
