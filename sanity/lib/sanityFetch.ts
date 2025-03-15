/**
 * @jest-environment node
 */

import 'server-only';

import type { FilteredResponseQueryOptions, QueryParams } from '@sanity/client';
import { client } from '@/sanity/lib/client';
const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];
const FETCH_OPTIONS = {
	revalidate: 30,
} as FilteredResponseQueryOptions & NextFetchRequestConfig;

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
	options = FETCH_OPTIONS,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
	options?: FilteredResponseQueryOptions & NextFetchRequestConfig;
}): Promise<QueryResponse> {
	return client
		.withConfig({ useCdn: true })
		.fetch<QueryResponse>(query, params, {
			...(options.cache && {
				cache: options.cache,
			}),
			next: {
				revalidate: options.revalidate,
				tags,
			},
		});
}
