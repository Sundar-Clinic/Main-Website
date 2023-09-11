import React from 'react';
import { SERVICES, ServiceData } from '@/constants/clinic';

const ServiceCard: React.FC<ServiceData[number]> = ({
	title,
	description,
	Icon,
}) => {
	return (
		<li className='flex flex-col gap-4 select-none rounded-lg p-8 hover:shadow-md h-full transition-all'>
			<span className='rounded-full bg-primary-clinic/20 w-fit p-4'>
				<Icon
					className='text-primary-clinic'
					strokeWidth={2.5}
					size={28}
				/>
			</span>
			<h4 className='font-heading text-lg font-medium'>{title}</h4>
			<p className='font-light'>{description}</p>
		</li>
	);
};

const Services = () => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4'>
			<h3 className='text-xl font-heading text-center'>Our Services</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ul className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center mt-8 gap-4'>
				{SERVICES.map((service) => (
					<ServiceCard
						key={`service-${service.title}`}
						{...service}
					/>
				))}
			</ul>
		</section>
	);
};

export default Services;
