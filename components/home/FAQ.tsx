/**
 * Home Page - FAQ Component
 * Form Page - FAQ Component
 */

// Dependencies
import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';
import { FaqsQueryResult } from '@/@types/cms.d';

type FAQProps = React.ComponentProps<'section'> & {
	faqs: FaqsQueryResult;
	locale: LocaleLanguages;
};

const FAQ: React.FC<FAQProps> = ({ faqs, locale }) => {
	const t = useTranslations('pages.home.faq');

	return (
		<section className='max-w-3xl mx-auto w-full p-4 mt-8'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<Accordion type='single' collapsible className='w-full mt-8'>
				{faqs?.map((faq, index) => (
					<AccordionItem
						key={`faq-${index}`}
						value={faq?.question?.[locale] ?? ''}
					>
						<AccordionTrigger className='text-left'>
							{faq?.question?.[locale] ?? ''}
						</AccordionTrigger>
						<AccordionContent className='text-left'>
							{faq?.answer?.[locale] ?? ''}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default FAQ;
