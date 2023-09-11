import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'testimonial',
	title: 'Testimonials',
	type: 'document',
	fields: [
		defineField({
			name: 'stars',
			title: 'Stars',
			type: 'number',
			validation: (Rule) =>
				Rule.min(0)
					.max(5)
					.warning('no. of stars should be between 0 and 5.')
					.error('no. of stars should be between 0 and 5.'),
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'review',
			title: 'Review',
			type: 'text',
		}),
		defineField({
			name: 'link',
			title: 'Link',
			description: 'Google Link to the review given',
			type: 'string',
		}),
	],
});
