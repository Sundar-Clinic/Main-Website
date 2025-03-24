import React from 'react';
import { Link } from '@/lib/routing';
import { Button } from '@/components/ui/button';
import { CONTACTS } from '@/constants/clinic';
import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function LocationCTA() {
	const t = useTranslations('components.cards.cta.location');
	return (
		<section className='container p-0 md:p-4'>
			<div className='bg-gray-900 md:rounded-lg overflow-hidden text-white'>
				<div className='py-12 px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='text-balance text-4xl font-semibold tracking-tight text-gay-900 sm:text-5xl'>
							{t('heading')}
						</h2>
						<p className='mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gay-600'>
							{t('description')}
						</p>
						<Button
							asChild
							className='inline-flex items-center gap-2 mt-6'
							size='lg'
							variant='secondary'
						>
							<Link
								href={CONTACTS.googleLocation}
								target='_blank'
								rel='noopener noreferrer'
							>
								<MapPin className='h-4 w-4' />
								{t('cta')}
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
