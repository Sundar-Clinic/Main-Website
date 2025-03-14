import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'gallery',
	title: 'Gallery',
	type: 'document',
	fields: [
		defineField({
			name: 'caption',
			title: 'Caption',
			type: 'string',
			description:
				'A brief caption or description for the gallery image.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
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
			description: 'The image to be displayed in the gallery.',
			validation: (Rule) => Rule.required(),
		}),
	],
});
