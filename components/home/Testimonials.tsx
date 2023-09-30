/**
 * Home Page - Testimonials Component
 */

// Dependencies
import React from 'react';
import TestimonialCard from '@/components/cards/TestimonialCard';

type TestimonailsProps = React.ComponentProps<'section'> & {
	testimonials: TestimonailData;
};

const Testimonials: React.FC<TestimonailsProps> = ({ testimonials }) => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				Testimonials
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 place-items-center'>
				{testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial._id} {...testimonial} />
				))}
			</ul>
		</section>
	);
};

export default Testimonials;
