"use client"

import { useQuery } from "@tanstack/react-query"

import type { BlogListingQueryResult } from "@/@types/cms"
import { client } from "@/sanity/lib/client"
import { blogListingQuery } from "@/sanity/lib/queries"

export interface BlogListingParams {
  locale: LocaleLanguages
  categoryId: string
  search: string
  offset: number
  end: number
}

const fetchBlogs = async (params: BlogListingParams) =>
  client.fetch<BlogListingQueryResult>(blogListingQuery, params)

export const useBlogs = (
  params: BlogListingParams,
  initialData?: BlogListingQueryResult
) =>
  useQuery({
    queryKey: [
      "blogs",
      params.locale,
      params.categoryId,
      params.search,
      params.offset,
      params.end,
    ],
    queryFn: () => fetchBlogs(params),
    initialData,
  })
