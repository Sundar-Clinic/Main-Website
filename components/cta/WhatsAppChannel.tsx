import React from 'react';
import Image from 'next/image';
import WhatsAppIcon from '../icons/WhatsApp';
import { Link } from '@/lib/routing';
import { CONTACTS } from '@/constants/clinic';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

export default function WhatsAppChannelCTA() {
	const t = useTranslations('components.cards.cta.whatsapp-channel');
	return (
		<section className='container p-0 md:p-4'>
			<div className='relative bg-gray-900 md:rounded-lg overflow-hidden'>
				<div className='relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
					<Image
						alt=''
						src='/images/whatsapp-channel.jpg'
						className='w-full h-full object-cover'
						width={1000}
						height={1000}
					/>
					<svg
						viewBox='0 0 926 676'
						aria-hidden='true'
						className='absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]'
					>
						<path
							d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
							fill='url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)'
							fillOpacity='.4'
						/>
						<defs>
							<linearGradient
								id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
								x1='926.392'
								x2='-109.635'
								y1='.176'
								y2='321.024'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#776FFF' />
								<stop offset={1} stopColor='#FF4694' />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className='relative mx-auto max-w-7xl py-12 md:py-24 lg:px-8'>
					<div className='pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32'>
						<h2 className='text-base/7 font-semibold text-white'>
							{t('eyebrow')}
						</h2>
						<p className='mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
							{t('heading')}
						</p>
						<p className='mt-6 text-base/7 text-gray-300'>
							{t('description')}
						</p>
						<div className='mt-8'>
							<Button
								asChild
								variant={'secondary'}
								className='gap-2'
							>
								<Link
									href={CONTACTS.whatsAppChannelURL}
									target='_blank'
									rel='noopener noreferrer'
								>
									<span>{t('button.start')}</span>
									<WhatsAppIcon
										className='shrink-0'
										width={20}
										height={20}
									/>
									<span className='shrink-0'>
										{t('button.end')}
									</span>
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
