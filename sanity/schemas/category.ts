import { defineField, defineType } from 'sanity';
import { baseLanguage } from '../lib/locale';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'localeString',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'localeText',
		}),
	],
	preview: {
		select: {
			title: `title.${baseLanguage?.id}`,
			subtitle: `description.${baseLanguage?.id}`,
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
			};
		},
	},
});
