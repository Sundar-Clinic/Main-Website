import React from "react";
import { postQuery } from "@/sanity/lib/queries";
import { PostQueryResult } from "@/@types/cms";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { createDocumentTag } from '@/lib/cache-tags';
import { notFound } from "next/navigation";
import BlogHeader from "@/components/blogs/Header";
import BlogAuthor from "@/components/blogs/Author";
import BlogCategories from "@/components/blogs/Categories";
import BlogContent from "@/components/blogs/Content";
import { unstable_setRequestLocale } from "next-intl/server";
import CTA from "@/components/cta/CTA";
import SocialShare from "@/components/blogs/SocialShare";
export const revalidate = 3600;
export const dynamicParams = true;

type IndividualBlogLayoutProps = {
  params: {
    locale: LocaleLanguages;
    slug: string;
  };
};

const POST_REVALIDATE_SECONDS = 3600;

const getPost = async (slug: string) =>
  sanityFetch<PostQueryResult>({
    query: postQuery,
    params: { slug },
    options: {
      next: {
        tags: [createDocumentTag('post', slug)],
      },
    },
  });
const IndividualBlogPage: React.FC<IndividualBlogLayoutProps> = async ({
  params: { locale, slug },
}) => {
  unstable_setRequestLocale(locale);
  const post = await getPost(slug);
  if (!post) {
    return notFound();
  }
  return (
    <article className="w-full">
      <BlogHeader post={post} locale={locale} />
      <BlogContent post={post} locale={locale} />
      {post.categories && post.categories.length > 0 && (
        <BlogCategories post={post} locale={locale} />
      )}
      {post.author && <BlogAuthor post={post} locale={locale} />}
      <SocialShare post={post} locale={locale} />
      <CTA cta={post.cta} />
    </article>
  );
};

export default IndividualBlogPage;
