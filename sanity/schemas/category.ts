import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'localeString',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'localeText',
		}),
	],
});
