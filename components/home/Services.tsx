/**
 * Home Page - Services Component
 */

// Dependencies
import React from 'react';
import { useTranslations } from 'next-intl';
import ServiceCard from '@/components/cards/ServiceCard';
import { SERVICES } from '@/constants/clinic';
import WhatsAppIcon from '../icons/WhatsApp';
import { Button } from '@/components/ui/button';
import { CONTACTS } from '@/constants/clinic';
import { Link } from '@/lib/routing';

interface ServiceProps extends React.ComponentProps<'section'> {
	locale: LocaleLanguages;
}

const Services: React.FC<ServiceProps> = ({ locale }) => {
	const t = useTranslations('pages.home.services');

	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8' id='services'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ul className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mt-8 gap-4'>
				{SERVICES.map((service) => (
					<ServiceCard
						key={`service-${service.title}`}
						service={service}
						locale={locale}
					/>
				))}
				<li className='flex flex-col items-center text-justify gap-4 select-none rounded-lg p-8 hover:shadow-md h-full transition-all'>
					<span className='rounded-full bg-green-500/20 w-fit p-4'>
						<WhatsAppIcon
							strokeWidth={2.5}
							width={28}
							height={28}
						/>
					</span>
					<h4 className='font-heading text-lg font-medium'>
						{t('whatsapp-channel.heading')}
					</h4>
					<p className='text-slate-500'>
						{t('whatsapp-channel.description')}
					</p>
					<Button
						asChild
						size={'sm'}
						className='bg-green-500 hover:bg-green-600 w-full'
					>
						<Link
							href={CONTACTS.whatsAppChannelURL}
							target='_blank'
							rel='noopener noreferrer'
						>
							{t('whatsapp-channel.cta')}
						</Link>
					</Button>
				</li>
			</ul>
		</section>
	);
};

export default Services;
