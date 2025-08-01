// Dependencies
import type { Metadata } from "next";
import { Source_Sans_3, Poppins } from "next/font/google";
import { WithContext, MedicalBusiness } from "schema-dts";
import HotjarAnalytics from "@/components/analytics/Hotjar";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Script from "next/script";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { CONTACTS } from "@/constants/clinic";
import { locales } from "@/i18n/i18n";
import { cn } from "@/lib/utils";

const sourceSans3 = Source_Sans_3({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  style: ["italic", "normal"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jsonLd: WithContext<MedicalBusiness> = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Sundar Clinic",
  description:
    "Not just a better healthcare, but a better healthcare experience in Pappanchatiram, situated on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, a trusted general physician.",
  image: "https://sundarclinic.com/opengraph-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1195A, Nehru Street",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600123",
    addressCountry: "India",
  },
  telephone: CONTACTS.phone,
  url: "https://sundarclinic.com",
  email: CONTACTS.email,
};

// Generating metadata based on locale and site information
export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: {
      template: `%s - ${t("company.name")}`,
      default: t("company.name"),
    },
    description: t("company.meta.description"),
    category: "healthcare",
    openGraph: {
      title: t("company.name"),
      description: t("company.meta.description"),
      url: "/en",
      type: "website",
      siteName: t("company.name"),
    },
    twitter: {
      title: t("company.name"),
      description: t("company.meta.twitter"),
      site: "@SundarClinic",
      creator: "@SundarClinic",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}`])
      ),
    },
  };
}

// Generating static params for locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Layout({
  children,
  params: { locale },
}: { children: React.ReactNode } & PageProps) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${sourceSans3.variable} ${poppins.variable} font-sans`}
    >
      <HotjarAnalytics />
      <GoogleAnalytics GA_TRACKING_ID="G-4PGSJ6BVZ2" />
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={cn({
          "[word-spacing:1rem]": locale !== "en",
        })}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TooltipProvider>
            <Navbar locale={locale} />
            {children}
            <Footer locale={locale} />
          </TooltipProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
