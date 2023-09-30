/**
 * Service Card Components
 */

// Dependencies
import React from 'react';
import { ServiceData } from '@/constants/clinic';

type ServiceCardProps = React.ComponentProps<'section'> & ServiceData[number];

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	Icon,
}) => {
	return (
		<li className='flex flex-col items-center text-justify gap-4 select-none rounded-lg p-8 hover:shadow-md h-full transition-all'>
			<span className='rounded-full bg-primary-clinic/20 w-fit p-4'>
				<Icon
					className='text-primary-clinic'
					strokeWidth={2.5}
					size={28}
				/>
			</span>
			<h4 className='font-heading text-lg font-medium'>{title}</h4>
			<p className='text-slate-500'>{description}</p>
		</li>
	);
};

export default ServiceCard;
