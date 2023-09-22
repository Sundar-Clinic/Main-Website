import { defineField, defineType } from 'sanity';
import {
	Globe,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
	Youtube,
} from 'lucide-react';

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
			description: 'Only for doctors registration no.',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description: 'Make sure image has dimensions 500x276',
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
			group: 'media',
		}),
		defineField({
			name: 'currentlyWorking',
			title: 'Is Currently Working?',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
		}),
		defineField({
			name: 'endDate',
			title: 'End Date',
			type: 'date',
			hidden: ({ document }) => Boolean(document?.currentlyWorking),
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
		defineField({
			name: 'instagram',
			title: 'Instagram Profile',
			type: 'url',
			icon: Instagram,
			group: 'social',
		}),
		defineField({
			name: 'twitter',
			title: 'Twitter Profile',
			type: 'url',
			icon: Twitter,
			group: 'social',
		}),
		defineField({
			name: 'linkedin',
			title: 'LinkedIn Profile',
			type: 'url',
			icon: Linkedin,
			group: 'social',
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			icon: Globe,
			group: 'social',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			icon: Mail,
			group: 'social',
		}),
		defineField({
			name: 'youtube',
			title: 'YouTube',
			type: 'url',
			icon: Youtube,
			group: 'social',
		}),
	],
});
