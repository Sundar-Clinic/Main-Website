import React from 'react';
import Image from 'next/image';
import { PartnerLabsQueryResult } from '@/@types/cms';
import { urlForImage } from '@/sanity/lib/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';

interface Props extends React.ComponentProps<'section'> {
	partnerLabs: NonNullable<PartnerLabsQueryResult>;
}

const PartnerLabs: React.FC<Props> = ({ partnerLabs }) => {
	const t = useTranslations('pages.lab.partner-labs');
	return (
		<section className='container'>
			<h2 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h2>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<div className='flex items-center justify-evenly gap-6 flex-wrap mt-12 w-full'>
				{partnerLabs.map((partner) => (
					<Link
						key={partner._id}
						className='flex flex-col items-center justify-center space-y-2 text-center max-w-[10rem] hover:underline underline-offset-2'
						target='_blank'
						href={partner.website ?? '#'}
					>
						<div className='relative h-20 w-40'>
							<Image
								src={
									partner.image
										? urlForImage(partner.image)
												.format('webp')
												.url()
										: ''
								}
								alt={partner.name ?? ''}
								fill
								className='object-contain'
							/>
						</div>
						<span className='text-sm font-medium'>
							{partner.name}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
};

export default PartnerLabs;
