import { defineType, defineArrayMember } from 'sanity';
import {
	AlignCenterIcon,
	AlignJustifyIcon,
	AlignLeftIcon,
	AlignRightIcon,
} from 'lucide-react';

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const TextAlign = (props: any) => {
	return (
		<div
			style={{
				textAlign: props.value ? props.value : 'left',
				width: '100%',
			}}
		>
			{props.children}
		</div>
	);
};

export default defineType({
	title: 'Block Content',
	name: 'blockContent',
	type: 'array',
	of: [
		defineArrayMember({
			title: 'Block',
			type: 'block',
			// Styles let you define what blocks can be marked up as. The default
			// set corresponds with HTML tags, but you can set any title or value
			// you want, and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'H5', value: 'h5' },
				{ title: 'H6', value: 'h6' },
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [
				{ title: 'Bullet', value: 'bullet' },
				{ title: 'Numbered', value: 'number' },
			],
			// Marks let you mark up inline text in the Portable Text Editor
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting
				decorators: [
					{
						title: 'Left',
						value: 'left',
						// @ts-ignore
						icon: <AlignLeftIcon size={12} />,
						component: (props) => TextAlign(props),
					},
					{
						title: 'Center',
						value: 'center',
						// @ts-ignore
						icon: <AlignCenterIcon size={12} />,
						component: (props) => TextAlign(props),
					},
					{
						title: 'Right',
						value: 'right',
						// @ts-ignore
						icon: <AlignRightIcon size={12} />,
						component: (props) => TextAlign(props),
					},
					{
						title: 'Justify',
						value: 'justify',
						// @ts-ignore
						icon: <AlignJustifyIcon size={12} />,
						component: (props) => TextAlign(props),
					},
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Highlight', value: 'highlight' },
					{ title: 'Underline', value: 'underline' },
					{ title: 'Strike', value: 'strike-through' },
					{ title: 'Code', value: 'code' },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						title: 'External link',
						name: 'link',
						type: 'object',
						fields: [
							{
								title: 'URL',
								name: 'href',
								type: 'url',
							},
							{
								title: 'Open in new tab',
								name: 'blank',
								description:
									'Read https://css-tricks.com/use-target_blank/',
								type: 'boolean',
							},
						],
					}
				],
			},
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		defineArrayMember({
			type: 'image',
			options: { hotspot: true },
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
