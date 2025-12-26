"use client"

import { useQuery } from "@tanstack/react-query"

import type { BlogListingQueryResult } from "@/@types/cms"
import { assertPaginationParams, getBlogListingQueryKey } from "@/lib/blogs/blogListing"
import type { BlogListingParams } from "@/lib/blogs/blogListing"
import { client } from "@/sanity/lib/client"
import { blogListingQuery } from "@/sanity/lib/queries"

const fetchBlogs = async (params: BlogListingParams) => {
  assertPaginationParams(params)
  return client.fetch<BlogListingQueryResult>(blogListingQuery, params)
}

export const useBlogs = (params: BlogListingParams) =>
  useQuery({
    queryKey: getBlogListingQueryKey(params),
    queryFn: () => fetchBlogs(params),
  })
