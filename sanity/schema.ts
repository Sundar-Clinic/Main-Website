import { type SchemaTypeDefinition } from 'sanity';

import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import faq from './schemas/faq';
import testimonial from './schemas/testimonial';
import gallery from './schemas/gallery';
import team from './schemas/team';

import blockContent from './schemas/blockContent';
import { localeString } from './schemas/localeStringType';
import { localeText } from './schemas/localeTextType';
import { localeBlockContent } from './schemas/localeBlockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		category,
		faq,
		testimonial,
		gallery,
		team,
		blockContent,
		localeString,
		localeText,
		localeBlockContent,
	],
};
