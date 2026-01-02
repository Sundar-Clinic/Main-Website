/**
 * @jest-environment node
 */

import 'server-only';

import type { QueryParams } from '@sanity/client';
import { draftMode } from 'next/headers';
import { client } from '@/sanity/lib/client';

export const token = process.env.SANITY_API_READ_TOKEN;

type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	options,
}: {
	query: string;
	params?: QueryParams;
	options?: FetchOptions;
}): Promise<QueryResponse> {
    const isDraftMode = draftMode().isEnabled;

    if (isDraftMode && !token) {
        throw new Error(
            'The `SANITY_API_READ_TOKEN` environment variable is required to use draft mode.'
        );
    }

    const sanityClient =
        isDraftMode && token
            ? client.withConfig({
                token,
                useCdn: false,
                stega: true,
                perspective: 'previewDrafts'
            })
            : client.withConfig({ useCdn: true, perspective: 'published' });

    const mergedOptions: FetchOptions = {
        cache: 'force-cache',
        ...options,
        next: {
            tags: [],
            ...options?.next,
        },
    };

	return sanityClient.fetch<QueryResponse>(query, params, mergedOptions);
}
