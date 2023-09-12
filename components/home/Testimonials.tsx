import React from 'react';
import { Quote, Star } from 'lucide-react';
import Link from 'next/link';

const MAX_TOTAL_STARS = 5;

interface TestimonailsProps {
	testimonials: TestimonailData;
}

const TestimonialCard: React.FC<TestimonailData[number]> = ({
	name,
	stars,
	link,
	_id,
	review,
}) => {
	return (
		<li className='w-full h-full block p-4 rounded-lg border border-slate-500 relative'>
			<Quote
				size={24}
				strokeWidth={1.5}
				className='absolute -top-[10px] right-4 text-slate-500'
				fill='white'
			/>
			<p className='font-medium font-heading text-sm'>{name}</p>
			<p className='italic mt-1'>{review}</p>
			<div className='flex gap-2 justify-between items-center mt-2'>
				<Link
					href={link}
					className='text-sm text-blue-500 underline underline-offset-2'
					target='_blank'
				>
					View Review
				</Link>
				<div className='flex gap-2 items-center'>
					{Array(stars)
						.fill(true)
						.map((_, i) => (
							<Star
								key={`star-${_id}-${i}`}
								size={20}
								strokeWidth={1.5}
								className='text-primary-clinic'
								fill='#D90000'
							/>
						))}
					{Array(MAX_TOTAL_STARS - stars)
						.fill(true)
						.map((_, i) => (
							<Star
								key={`star-${_id}-${i}`}
								size={20}
								strokeWidth={1.5}
								className='text-primary-clinic'
							/>
						))}
				</div>
			</div>
		</li>
	);
};

const Testimonials: React.FC<TestimonailsProps> = ({ testimonials }) => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8'>
			<h3 className='text-xl font-heading text-center'>Testimonials</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
				{testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial._id} {...testimonial} />
				))}
			</ul>
		</section>
	);
};

export default Testimonials;
