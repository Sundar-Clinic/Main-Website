import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import faq from './schemas/faq';
import testimonial from './schemas/testimonial';
import gallery from './schemas/gallery';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, author, category, blockContent, faq, testimonial, gallery],
};
