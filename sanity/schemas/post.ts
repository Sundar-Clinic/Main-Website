import { defineField, defineType } from 'sanity';
import { baseLanguage } from '../lib/locale';
import { apiVersion } from '../env';
import { Post } from '@/@types/cms';

export default defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'localeString',
			description: 'The title of the post.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'localeText',
			description:
				'The description of the post. This will be used as the meta description for SEO.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'The unique identifier for the post.',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: async (slug, context) => {
					const query = `*[_type == "post" && slug.current == $slug]`;
					const documents = await context
						.getClient({ apiVersion })
						.fetch<Post[]>(query, {
							slug,
						});
					// Returns true if no documents are found, false otherwise
					return documents.length <= 1;
				},
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'team' },
			description: 'The author of the post.',
		}),
		defineField({
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			description:
				'The main image for the post. This will be used as the preview image for social media. Recommended ratio: 16:9.',
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
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
			description: 'The categories that the post belongs to.',
		}),
		defineField({
			name: 'featured',
			title: 'Featured',
			type: 'boolean',
			initialValue: false,
			description: 'Whether the post should be featured on the homepage.',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
			description: 'The date and time the post was published.',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'localeBlockContent',
			description: 'The content of the post.',
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: `title.${baseLanguage?.id}`,
			author: 'author.name',
			media: 'thumbnail',
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
