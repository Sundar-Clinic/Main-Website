import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'faq',
	title: 'Frequently Asked Questions',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Question',
			type: 'string',
			description: 'The frequently asked question itself.',
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'text',
			description:
				'The detailed answer to the frequently asked question.',
		}),
	],
});
