/**
 * About Page - History Component
 */

// Dependencies
import React from 'react';

type HistoryProps = React.ComponentProps<'section'>;

const History: React.FC<HistoryProps> = () => {
	return (
		<section className='w-full mt-8 bg-slate-100' id='history'>
			<div className='px-4 py-8 max-w-7xl mx-auto h-full min-h-fit gap-2'>
				<p className='font-medium text-lg md:text-2xl'>History</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
					<div className='bg-white p-4 rounded-lg shadow-lg max-w-4xl flex flex-col gap-4 mx-auto'>
						<h2 className='font-heading font-medium text-lg md:text-2xl max-w-3xl'>
							Our Journey: Transforming Healthcare since 2013
						</h2>
						<p className='text-base md:text-xl text-justify max-w-5xl text-slate-500'>
							For nearly a decade, Sundar Clinic has been a
							trusted name in healthcare, committed to enhancing
							the well-being of Pappanchatiram&apos;s residents.
							Our journey began in 2013, and since then,
							we&apos;ve evolved into a healthcare hub that&apos;s
							not just about treating illnesses but also creating
							memorable experiences for our patients.
						</p>
					</div>
					<div className='bg-white p-4 rounded-lg shadow-lg max-w-4xl flex flex-col gap-4 mx-auto'>
						<h2 className='font-heading font-medium text-lg md:text-2xl max-w-3xl'>
							Our Approach
						</h2>
						<p className='text-base md:text-xl text-justify max-w-5xl text-slate-500'>
							Our approach is simple but profound: we provide
							accessible and high-quality healthcare with a
							personal touch. Situated in the heart of a
							developing area, we&apos;ve been a beacon of hope
							for individuals seeking answers to their
							health-related concerns. At Sundar Clinic, we
							believe in the power of delegation, ensuring that
							every patient receives the care they deserve,
							precisely when they need it.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History;
