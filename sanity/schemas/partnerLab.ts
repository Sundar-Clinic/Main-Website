import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'partner-labs',
	title: 'Partner Labs',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'The name of the partner lab.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			description:
				'The website of the partner lab. This will be used to link to the lab.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description: 'An image of the partner lab. (Recommended: 1:1)',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					description:
						'A descriptive alternative text for the image.',
					validation: (Rule) => Rule.required(),
				},
			],
		}),
	],
});
