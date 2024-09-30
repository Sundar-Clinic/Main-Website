/**
 * About Page - History Component
 */

// Dependencies
import React from 'react';
import { useTranslations } from 'next-intl';

type HistoryProps = React.ComponentProps<'section'>;

const History: React.FC<HistoryProps> = () => {
	const t = useTranslations('pages.about.history');

	return (
		<section className='w-full mt-8 bg-slate-100' id='history'>
			<div className='px-4 py-8 max-w-7xl mx-auto h-full min-h-fit gap-2'>
				<p className='font-medium text-lg md:text-2xl'>
					{t('heading')}
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
					<div className='bg-white p-4 rounded-lg shadow-lg max-w-4xl flex flex-col gap-4 mx-auto'>
						<h2 className='font-heading font-medium text-lg md:text-2xl max-w-3xl'>
							{t('journey.heading')}
						</h2>
						<p className='text-base md:text-xl text-justify max-w-5xl text-slate-500'>
							{t('journey.description')}
						</p>
					</div>
					<div className='bg-white p-4 rounded-lg shadow-lg max-w-4xl flex flex-col gap-4 mx-auto'>
						<h2 className='font-heading font-medium text-lg md:text-2xl max-w-3xl'>
							{t('approach.heading')}
						</h2>
						<p className='text-base md:text-xl text-justify max-w-5xl text-slate-500'>
							{t('approach.description')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History;
