import React from 'react';
import { useTranslations } from 'next-intl';
import { LabTestsQueryResult } from '@/@types/cms';
import LabTestCard from '../cards/LabTestCard';

interface Props extends React.ComponentProps<'section'> {
	tests: LabTestsQueryResult;
	locale: LocaleLanguages;
}

const Tests: React.FC<Props> = ({ tests, locale }) => {
	const t = useTranslations('pages.lab.tests');
	return (
		<section className='container' id='tests'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full'>
				{tests &&
					tests.length > 0 &&
					tests.map((test) => (
						<LabTestCard
							key={test._id}
							test={test}
							locale={locale}
						/>
					))}
			</div>
		</section>
	);
};

export default Tests;
