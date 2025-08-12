/**
 * Footer Component
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import { Link } from '@/lib/routing';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { FOOTER_NAVIGATION } from '@/constants/navigation';
import { CONTACTS } from '@/constants/clinic';
import { SOCIAL_PLATFORM_CONFIG, type SocialPlatform } from '@/constants/socials';
import { useTranslations } from 'next-intl';
import type { SiteConfigQueryResult } from '@/@types/cms';

interface FooterProps extends React.ComponentProps<'footer'> {
	locale: LocaleLanguages;
	siteConfig?: SiteConfigQueryResult | null;
}

const Footer: React.FC<FooterProps> = ({ locale, siteConfig }) => {
	const t = useTranslations();

	return (
		<footer>
			<section className='container text-center md:text-left'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center w-full justify-between gap-8 pb-4'>
					<div className='flex flex-col items-center justify-center gap-2 w-fit'>
						<div className='w-28'>
							<Image
								src='/logo/logo-fit.png'
								alt='Sundar Clinic'
								width={100}
								height={100}
								className='w-full h-auto object-contain'
								loading='lazy'
							/>
						</div>
						<p className='text-slate-500 text-sm'>
							{2013} {'-'} {new Date().getFullYear()}
						</p>
					</div>
					<div className='max-w-[40ch]'>
						<p className='font-semibold'>
							{t('layouts.footer.address')}
						</p>
						<p>{t('company.address')}</p>
					</div>
					<div>
						<p className='font-semibold'>
							{t('layouts.footer.contact.heading')}
						</p>
						<Link
							href={`tel:${CONTACTS.phone}`}
							className='underline underline-offset-2 hover:text-primary-clinic transition-all'
						>
							{CONTACTS.phone}
						</Link>
						<p>{t('layouts.footer.contact.phone')}</p>
						<Link
							href={`mailto:${CONTACTS.phone}`}
							className='underline underline-offset-2 hover:text-primary-clinic transition-all'
						>
							{CONTACTS.email}
						</Link>
					</div>
					<div className='flex gap-4 flex-col w-fit'>
						<div className='flex items-center justify-center gap-4'>
							<Clock />
							<p className='flex flex-col'>
								<span>{t('company.timings.morning')}</span>
								<span>{t('company.timings.evening')}</span>
							</p>
						</div>
						<Button asChild className=''>
							<Link
								href={CONTACTS.googleLocation}
								target='_blank'
							>
								{t('layouts.footer.cta')}
							</Link>
						</Button>
					</div>
				</div>
			</section>
			<section>
				<iframe
					src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124429.51674082068!2d80.0030849!3d12.9448011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528ba6ba597489%3A0x266f1a52d95c4f1e!2sSundar%20Clinic!5e0!3m2!1sen!2sin!4v1694196169153!5m2!1s${locale}!2sin`}
					width='100%'
					height='320'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					title='Sundar Clinic Location'
				></iframe>
			</section>
			<section className='container my-4 mt-0 p-0'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 py-4'>
					<ul className='grid grid-cols-3 gap-2 place-items-center text-center'>
						{FOOTER_NAVIGATION.map((link) => (
							<li key={`footer-${link.name[locale]}`}>
								<Link
									href={link.url}
									target={link.target}
									className='w-full hover:text-primary-clinic transition-all hover:underline underline-offset-2'
									prefetch={false}
								>
									{link.name[locale]}
								</Link>
							</li>
						))}
					</ul>
					<div className='flex gap-2 items-center w-fit'>
						{siteConfig?.socials
							?.filter((social): social is NonNullable<typeof social> =>
								Boolean(social?.name && social?.url)
							)
							.map((social) => {
								const platformName = social.name as SocialPlatform;
								const config = SOCIAL_PLATFORM_CONFIG[platformName];
								if (!config) return null;

								const IconComponent = config.icon;

								return (
									<Button
										asChild
										size='icon'
										key={`footer-social-${social._key}`}
										variant={'ghost'}
									>
										<Link
											href={social.url!}
											target={'_blank'}
											title={config.name}
											className='group'
										>
											<IconComponent
												strokeWidth={1.5}
												size={20}
												className={`group-hover:text-primary-clinic transition-all ${config.color} ${config.hoverColor}`}
												{...(platformName === 'whatsapp' && {
													width: 28,
													height: 28,
												})}
											/>
										</Link>
									</Button>
								);
							})}
					</div>
				</div>
				<hr className='border-b my-4 border-b-slate-300 mx-auto' />
				<p className='text-center'>
					{`2023. ©️ ${t('company.name')}. ${t(
						'layouts.footer.rights-collab'
					)} `}
					<Link
						href={'https://codelancedevs.com'}
						className='underline underline-offset-2 text-[#00e07b]'
					>
						{'Codelance Devs'}
					</Link>
					{` | ${t('layouts.footer.oss')} `}
					<Link
						href={CONTACTS.codeRepositoryURL}
						className='underline underline-offset-2'
					>
						{'GitHub'}
					</Link>
				</p>
			</section>
		</footer>
	);
};

export default Footer;
