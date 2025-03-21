/**
 * Home Page - Testimonials Component
 */

// Dependencies
import React from 'react';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { useTranslations } from 'next-intl';
import { TestimonialsQueryResult } from '@/@types/cms';

type TestimonailsProps = React.ComponentProps<'section'> & {
	testimonials: TestimonialsQueryResult;
	locale: LocaleLanguages;
};

const Testimonials: React.FC<TestimonailsProps> = ({
	testimonials,
	locale,
}) => {
	const t = useTranslations('pages.home.testimonials');

	return (
		<section className='container'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 place-items-center'>
				{testimonials &&
					testimonials?.map((testimonial) => (
						<TestimonialCard
							key={testimonial._id}
							locale={locale}
							{...testimonial}
						/>
					))}
			</ul>
		</section>
	);
};

export default Testimonials;
