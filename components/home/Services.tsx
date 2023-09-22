/**
 * Home Page - Services Component
 */

// Dependencies
import React from 'react';
import { SERVICES } from '@/constants/clinic';
import ServiceCard from '@/components/cards/ServiceCard';

const Services = () => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8' id='services'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				Our Services
			</h3>
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
