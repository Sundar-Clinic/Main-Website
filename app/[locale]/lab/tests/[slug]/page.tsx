import React from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { LabTestQueryResult } from "@/@types/cms";
import { labTestQuery } from "@/sanity/lib/queries";
import LabTestHeader from "@/components/lab/Header";
import TestInformation from "@/components/lab/TestInformation";
import TestBody from "@/components/lab/TestBody";

export const revalidate = 3600;

type IndividualLabTestLayoutProps = {
  params: {
    locale: LocaleLanguages;
    slug: string;
  };
};

const IndividualBlogPage: React.FC<IndividualLabTestLayoutProps> = async ({
  params: { locale, slug },
}) => {
  unstable_setRequestLocale(locale);
  const test = await sanityFetch<LabTestQueryResult>({
    query: labTestQuery,
    params: { slug },
  });
  if (!test) {
    return notFound();
  }
  return (
    <main className="w-full">
      <LabTestHeader test={test} locale={locale} />
      <section className="container grid gap-12 lg:grid-cols-3">
        <TestBody test={test} locale={locale} />
        <TestInformation test={test} locale={locale} />
      </section>
    </main>
  );
};

export default IndividualBlogPage;
