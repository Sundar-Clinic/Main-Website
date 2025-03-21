import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LabTestQueryResult } from '@/@types/cms';
import { labTestQuery } from '@/sanity/lib/queries';

type IndividualLabTestLayoutProps = {
	params: {
		locale: LocaleLanguages;
		slug: string;
	};
};

const IndividualBlogPage: React.FC<IndividualLabTestLayoutProps> = async ({
	params: { locale, slug },
}) => {
	unstable_setRequestLocale(locale);
	const test = await sanityFetch<LabTestQueryResult>({
		query: labTestQuery,
		params: { slug },
	});
	if (!test) {
		return notFound();
	}
	return <main className='w-full'></main>;
};

export default IndividualBlogPage;
