/**
 * Service Card Components
 */

// Dependencies
import React from 'react';
import { ServiceData } from '@/constants/clinic';

interface ServiceCardProps extends React.ComponentProps<'section'> {
	service: ServiceData[number];
	locale: LocaleLanguages;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, locale }) => {
	return (
		<li className='flex flex-col items-center text-justify gap-4 select-none rounded-lg p-8 hover:shadow-md h-full transition-all'>
			<span className='rounded-full bg-primary-clinic/20 w-fit p-4'>
				<service.Icon
					className='text-primary-clinic'
					strokeWidth={2.5}
					size={28}
				/>
			</span>
			<h4 className='font-heading text-lg font-medium'>
				{service.title[locale]}
			</h4>
			<p className='text-slate-500'>{service.description[locale]}</p>
		</li>
	);
};

export default ServiceCard;
