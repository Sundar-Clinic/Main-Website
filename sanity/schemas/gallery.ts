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
				},
			],
		}),
	],
});
