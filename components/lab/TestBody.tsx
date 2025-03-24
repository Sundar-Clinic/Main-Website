import React from 'react';
import { LabTestQueryResult } from '@/@types/cms';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { ptComponents } from '@/sanity/lib/ptComponents';
import LocationCTA from '../cta/LocationCTA';

interface Props extends React.ComponentProps<'div'> {
	test: NonNullable<LabTestQueryResult>;
	locale: LocaleLanguages;
}

const TestBody: React.FC<Props> = ({ test, locale }) => {
	return (
		<div className='lg:col-span-2'>
			<div className='relative mb-8 aspect-video overflow-hidden rounded-lg'>
				<Image
					src={
						(test.thumbnail &&
							urlForImage(test.thumbnail).format('webp').url()) ??
						''
					}
					alt={test.thumbnail?.alt ?? test.name?.[locale] ?? ''}
					fill
					className='object-cover'
					priority
				/>
			</div>
			<div className='prose max-w-none'>
				{test.body?.[locale] && (
					<PortableText
						components={ptComponents}
						value={test.body?.[locale]}
					/>
				)}
			</div>
			<LocationCTA />
		</div>
	);
};

export default TestBody;
