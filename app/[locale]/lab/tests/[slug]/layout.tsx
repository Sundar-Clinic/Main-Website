/**
 * Individual Lab Test Page Layout
 */

// Dependencies
import type { Metadata } from "next";
import { locales } from "@/i18n/i18n";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { LabTestQueryResult } from "@/@types/cms";
import { labTestQuery } from "@/sanity/lib/queries";

type IndividualLabTestLayoutProps = {
  params: {
    locale: LocaleLanguages;
    slug: string;
  };
};

export async function generateMetadata({
  params: { locale, slug },
}: IndividualLabTestLayoutProps): Promise<Metadata> {
  const test = await sanityFetch<LabTestQueryResult>({
    query: labTestQuery,
    params: { slug },
  });
  if (!test) {
    return notFound();
  }
  return {
    title: test?.name?.[locale],
    description: test?.description?.[locale],
    openGraph: {
      ...(test?.thumbnail && {
        images: [
          {
            url: urlForImage(test?.thumbnail).format("webp").url(),
            alt: test?.thumbnail?.alt,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      ...(test?.thumbnail && {
        images: [
          {
            url: urlForImage(test?.thumbnail).format("webp").url(),
            alt: test?.thumbnail?.alt,
          },
        ],
      }),
    },
    alternates: {
      canonical: `/${locale}/lab/tests/${slug}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/lab/tests/${slug}`])
      ),
    },
  };
}

export default function IndividualLabTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
