// ./schemas/localeStringType.ts

import { defineType, defineField } from 'sanity';
import { supportedLanguages } from '../lib/locale';

export const localeText = defineType({
	title: 'Localized string',
	name: 'localeText',
	type: 'object',
	// Fieldsets can be used to group object fields.
	// Here we omit a fieldset for the "default language",
	// making it stand out as the main field.
	fieldsets: [
		{
			title: 'Translations',
			name: 'translations',
			options: { collapsible: true },
		},
	],
	// Dynamically define one field per language
	fields: supportedLanguages.map((lang) =>
		defineField({
			title: lang.title,
			name: lang.id,
			type: 'text',
			validation: (Rule) => Rule.required(),
			// Use the fieldset for all but the default language
			// @ts-ignore
			fieldset: lang.isDefault ? null : 'translations',
		})
	),
});
