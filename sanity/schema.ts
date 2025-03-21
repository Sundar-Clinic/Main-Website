import { type SchemaTypeDefinition } from 'sanity';

import category from './schemas/category';
import post from './schemas/post';
import faq from './schemas/faq';
import testimonial from './schemas/testimonial';
import gallery from './schemas/gallery';
import team from './schemas/team';
import labTests from './schemas/labTests';

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
		labTests,
		blockContent,
		localeString,
		localeText,
		localeBlockContent,
	],
};
