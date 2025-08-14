"use client";

import { GoogleReCaptchaProvider as GoogleReCaptchaProviderV3 } from "react-google-recaptcha-v3";
import { assertValue } from "@/lib/utils";

const RECAPTCHA_SITE_KEY = assertValue(
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  "NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set"
);

export const GoogleReCaptchaProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: LocaleLanguages;
}) => {
  return (
    <GoogleReCaptchaProviderV3
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      language={locale}
    >
      {children}
    </GoogleReCaptchaProviderV3>
  );
};
