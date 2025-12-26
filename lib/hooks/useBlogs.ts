"use client"

import { useQuery } from "@tanstack/react-query"

import type { GetAllPostsQueryResult } from "@/@types/cms"
import { client } from "@/sanity/lib/client"
import { getAllPostsQuery } from "@/sanity/lib/queries"

const fetchBlogs = async () =>
  client.fetch<GetAllPostsQueryResult>(getAllPostsQuery)

export const useBlogs = (initialData?: GetAllPostsQueryResult) =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    initialData,
  })
