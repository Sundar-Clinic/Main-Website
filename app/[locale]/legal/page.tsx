/**
 * Legal Page
 */

import { Link } from '@/lib/routing';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

// Dependencies

export default function Legal({ params: { locale } }: PageProps) {
	unstable_setRequestLocale(locale);

	const t = useTranslations('pages.legal');

	const relaventLinks = [
		{
			name: {
				en: 'Terms & Conditions',
				ta: 'விதிகள் மற்றும் நிபந்தனைகள்',
				hi: 'शर्तें और नियम',
			},
			href: '/terms',
			target: '_self',
		},
		{
			name: {
				en: 'Privacy Policy',
				ta: 'தனியுரிமை கொள்கை',
				hi: 'गोपनीयता नीति',
			},
			href: '/privacy',
			target: '_self',
		},
	];
	return (
		<main>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
				<h1 className='text-2xl font-heading font-medium'>
					{t('heading')}
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<h2 className='text-xl font-heading font-medium'>
					{t('clinic.heading')}
				</h2>
				<hr className='border-b-2 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p
					className='mt-4'
					dangerouslySetInnerHTML={{
						__html: t.raw('clinic.description'),
					}}
				/>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<h2 className='text-xl font-heading font-medium'>
					{t('doctor.heading')}
				</h2>
				<hr className='border-b-2 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p className='mt-4'>
					<span
						dangerouslySetInnerHTML={{
							__html: t.raw('doctor.description'),
						}}
					/>{' '}
					<Link
						href={
							'https://www.nmc.org.in/information-desk/indian-medical-register/'
						}
						className='text-secondary-clinic/80 transition-all hover:text-secondary-clinic underline underline-offset-2'
						target='_blank'
					>
						{
							'https://www.nmc.org.in/information-desk/indian-medical-register/'
						}
					</Link>
					{'.'}
				</p>
				<p className='mt-4'>
					{t('contact.start')}{' '}
					<Link
						href='/contact'
						className='text-secondary-clinic/80 transition-all hover:text-secondary-clinic underline underline-offset-2'
						prefetch={false}
					>
						{t('contact.cta')}
					</Link>{' '}
					{t('contact.end')}
				</p>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<h2 className='text-xl font-heading font-medium'>
					{t('links.heading')}
				</h2>
				<hr className='border-b-2 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<ul className='mt-4 list-disc ml-4'>
					{relaventLinks.map((link) => (
						<li key={`legal-other-links-${link.href}`}>
							<Link
								href={link.href}
								target={link.target}
								className='text-secondary-clinic/80 transition-all hover:text-secondary-clinic underline underline-offset-2'
								prefetch={false}
							>
								{link.name[locale]}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
