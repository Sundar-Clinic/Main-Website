import { defineField, defineType } from 'sanity';
import { baseLanguage } from '../lib/locale';

export default defineType({
	name: 'faq',
	title: 'Frequently Asked Questions',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Question',
			type: 'localeString',
			description: 'The frequently asked question itself.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'localeText',
			description:
				'The detailed answer to the frequently asked question.',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: `question.${baseLanguage?.id}`,
			subtitle: `answer.${baseLanguage?.id}`,
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
			};
		},
	},
});
