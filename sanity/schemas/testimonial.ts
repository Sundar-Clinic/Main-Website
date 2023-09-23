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
					.warning('Number of stars should be between 0 and 5.')
					.error('Number of stars should be between 0 and 5.'),
			description: 'The number of stars in the testimonial (0 to 5).',
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'The name of the person providing the testimonial.',
		}),
		defineField({
			name: 'review',
			title: 'Review',
			type: 'text',
			description: 'The text of the testimonial or review.',
		}),
		defineField({
			name: 'link',
			title: 'Link',
			description: 'A link to the review source (e.g., Google Review).',
			type: 'string',
		}),
	],
});
