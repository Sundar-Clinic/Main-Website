export interface BlogListingParams {
	locale: LocaleLanguages;
	categoryId: string;
	search: string;
	offset: number;
	limit: number;
}

export const getBlogListingQueryKey = (params: BlogListingParams) => [
	'blogs',
	params.locale,
	params.categoryId,
	params.search,
	params.offset,
	params.limit,
] as const;

export const getPaginationParams = (page: number, pageSize: number) => {
	const safePage =
		Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
	const safePageSize =
		Number.isFinite(pageSize) && pageSize > 0 ? Math.floor(pageSize) : 1;
	const offset = (safePage - 1) * safePageSize;

	return {
		page: safePage,
		offset,
		limit: safePageSize,
	};
};

export const assertPaginationParams = (
	params: Pick<BlogListingParams, 'offset' | 'limit'>
) => {
	if (!Number.isInteger(params.offset) || !Number.isInteger(params.limit)) {
		throw new Error('Invalid pagination values for Sanity query.');
	}
};
