import { defineField, defineType } from 'sanity';
import { baseLanguage } from '../lib/locale';
import { apiVersion } from '../env';
import { LabTests } from '@/@types/cms';

export default defineType({
	name: 'lab-tests',
	title: 'Lab Tests',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'localeString',
			description: 'The name of the lab test.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'shortDescription',
			title: 'Short Description',
			type: 'localeString',
			description:
				'A brief description of the lab test. This will be used in the lab test list.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'localeText',
			description:
				'A brief description of the lab test. This will be used in the lab test detail.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'preparation',
			title: 'Preparation',
			type: 'localeString',
			description:
				'The preparation required for the lab test. (eg: Fasting for 8-12 hours may be required.)',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'turnaround',
			title: 'Turnaround Time',
			type: 'localeString',
			description:
				'The time it takes to get the results of the lab test. (eg: Results typically available within 24-48 hours.)',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: `name.${baseLanguage?.id}`,
				maxLength: 96,
				isUnique: async (slug, context) => {
					const query = `*[_type == "lab-tests" && slug.current == $slug && id != ^.id]`;
					const documents = await context
						.getClient({ apiVersion })
						.fetch<LabTests[]>(query, {
							slug,
						});
					// Returns true if no documents are found, false otherwise
					return documents.length <= 1;
				},
			},
			validation: (Rule) => Rule.required(),
			description: 'The unique identifier for the lab test.',
		}),
		defineField({
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			description:
				'The main image for the lab test. This will be used as the preview image for social media. Recommended ratio: 16:9.',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					validation: (Rule) => Rule.required(),
				},
			],
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'localeBlockContent',
			description:
				'The content of the lab test. This will be used in the lab test detail.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'currentlyAvailable',
			title: 'Currently Available',
			type: 'boolean',
			description: 'Whether the lab test is currently available.',
			validation: (Rule) => Rule.required(),
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: `name.${baseLanguage?.id}`,
			subtitle: `shortDescription.${baseLanguage?.id}`,
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
			};
		},
	},
});
