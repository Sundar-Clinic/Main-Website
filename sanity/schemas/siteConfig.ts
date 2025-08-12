import { defineType, defineField } from 'sanity';

export const siteConfigType = defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            {
              name: 'name',
              title: 'Social Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                ],
                layout: 'dropdown',
              },
              validation: (Rule) =>
                Rule.required().error('Social platform is required'),
            },
            {
              name: 'url',
              title: 'Social Media URL',
              type: 'url',
              validation: (Rule) =>
                Rule.required()
                  .uri({
                    allowRelative: false,
                    scheme: ['http', 'https'],
                  })
                  .error('A valid URL is required'),
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: title
                  ? title.charAt(0).toUpperCase() + title.slice(1)
                  : 'Social Link',
                subtitle: subtitle,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.unique().error('Each social platform should only appear once'),
      description: 'Add social media links for the website',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Configuration',
        subtitle: 'Global website settings',
      };
    },
  },
});