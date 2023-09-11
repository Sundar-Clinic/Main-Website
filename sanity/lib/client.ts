import { createClient } from '@sanity/client';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
});
