"use client";

import { GoogleReCaptchaProvider as GoogleReCaptchaProviderV3 } from "react-google-recaptcha-v3";

export const GoogleReCaptchaProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: LocaleLanguages;
}) => {
  return (
    <GoogleReCaptchaProviderV3
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      language={locale}
    >
      {children}
    </GoogleReCaptchaProviderV3>
  );
};
