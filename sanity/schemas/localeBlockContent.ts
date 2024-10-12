import { defineType, defineField } from 'sanity';
import { supportedLanguages } from '../lib/locale';

export const localeBlockContent = defineType({
	name: 'localeBlockContent',
	type: 'object',
	fieldsets: [
		{
			title: 'Translations',
			name: 'translations',
			options: { collapsible: true },
		},
	],
	fields: supportedLanguages.map((lang) =>
		defineField({
			title: lang.title,
			name: lang.id,
			type: 'blockContent',
			// Use the fieldset for all but the default language
			// @ts-ignore
			fieldset: lang.isDefault ? null : 'translations',
		})
	),
});
