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
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'text',
		}),
	],
});
