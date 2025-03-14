import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'team',
	title: 'Team Members',
	type: 'document',
	groups: [
		{
			name: 'social',
			title: 'Social Links',
		},
		{
			name: 'media',
			title: 'Media',
		},
	],
	fields: [
		defineField({
			name: 'name',
			title: 'Full Name',
			type: 'string',
			description: 'The full name of the team member.',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
			description: 'The role or position of the team member.',
		}),
		defineField({
			name: 'qualifications',
			title: 'Qualifications',
			type: 'string',
			description:
				'The qualifications or certifications of the team member.',
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
			description: 'A brief biography or description of the team member.',
		}),
		defineField({
			name: 'registrationNo',
			title: 'Registration No',
			type: 'string',
			description: 'The registration number (if applicable) for doctors.',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description: 'An image of the team member (500x276 recommended).',
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
				},
			],
			group: 'media',
		}),
		defineField({
			name: 'currentlyWorking',
			title: 'Is Currently Working?',
			type: 'boolean',
			initialValue: false,
			description: 'Check if the team member is currently working.',
		}),
		defineField({
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
			description: 'The date when the team member started working.',
		}),
		defineField({
			name: 'endDate',
			title: 'End Date',
			type: 'date',
			hidden: ({ document }) => Boolean(document?.currentlyWorking),
			description:
				'The date when the team member stopped working (if applicable).',
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
			description: 'Languages spoken by the team member.',
		}),
		defineField({
			name: 'instagram',
			title: 'Instagram Profile',
			type: 'url',
			group: 'social',
			description: "The team member's Instagram profile URL.",
		}),
		defineField({
			name: 'twitter',
			title: 'Twitter Profile',
			type: 'url',
			group: 'social',
			description: "The team member's Twitter profile URL.",
		}),
		defineField({
			name: 'linkedin',
			title: 'LinkedIn Profile',
			type: 'url',
			group: 'social',
			description: "The team member's LinkedIn profile URL.",
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			group: 'social',
			description:
				"The team member's personal or professional website URL.",
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			group: 'social',
			description: "The team member's contact email address.",
		}),
		defineField({
			name: 'youtube',
			title: 'YouTube',
			type: 'url',
			group: 'social',
			description: "The team member's YouTube channel URL.",
		}),
	],
});
