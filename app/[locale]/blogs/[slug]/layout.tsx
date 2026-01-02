/**
 * Individual Blog Page Layout
 */

// Dependencies
import type { Metadata } from "next";
import { locales } from "@/i18n/i18n";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postQuery, getAllPostsQuery } from "@/sanity/lib/queries";
import { createCollectionTag, createDocumentTag } from '@/lib/cache-tags';
import { PostQueryResult } from "@/@types/cms";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

type IndividualBlogLayoutProps = {
  params: {
    locale: LocaleLanguages;
    slug: string;
  };
};

export async function generateMetadata({
  params: { locale, slug },
}: IndividualBlogLayoutProps): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params: { slug },
    options: {
      next: {
        tags: [createDocumentTag('post', slug)],
      }
    }
  });
  if (!post) {
    return notFound();
  }
  return {
    title: post?.title?.[locale],
    description: post?.description?.[locale],
    openGraph: {
      ...(post?.thumbnail && {
        images: [
          {
            url: urlForImage(post?.thumbnail).format("webp").url(),
            alt: post?.thumbnail?.alt,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      ...(post?.thumbnail && {
        images: [
          {
            url: urlForImage(post?.thumbnail).format("webp").url(),
            alt: post?.thumbnail?.alt,
          },
        ],
      }),
    },
    alternates: {
      canonical: `/${locale}/blogs/${slug}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/blogs/${slug}`])
      ),
    },
  };
}

// export async function generateStaticParams() {
// 	const posts = await sanityFetch<GetAllPostsQueryResult>({
// 		query: getAllPostsQuery,
//    options: {
//      next: {
//        tags: [createCollectionTag('post')],
//      }
//    }
// 	});
// 	const params: Array<IndividualBlogLayoutProps['params']> = [];
// 	for (const post of posts) {
// 		for (const locale of locales) {
// 			params.push({ locale, slug: post?.slug?.current! });
// 		}
// 	}
// 	return params;
// }

export default function IndividualBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
