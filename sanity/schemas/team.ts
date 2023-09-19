import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'team',
	title: 'Team Members',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Full Name',
			type: 'string',
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
		}),
		defineField({
			name: 'qualifications',
			title: 'Qualifications',
			type: 'string',
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
		}),
		defineField({
			name: 'registrationNo',
			title: 'Registration No',
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
		defineField({
			name: 'languages',
			title: 'Languages Spoken',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'English', value: 'english' },
					{ title: 'Tamil', value: 'tamil' },
					{ title: 'Hindi', value: 'hindi' },
				],
			},
		}),
	],
});
