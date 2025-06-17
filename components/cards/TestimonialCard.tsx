/**
 * Testimonial Card Component
 */

// Dependencies
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Link } from "@/lib/routing";
import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { TestimonialsQueryResult } from "@/@types/cms";
import { GOOGLE_REVIEWS_URL } from "@/constants/clinic";

type TestimonialCardProps = React.ComponentProps<"li"> &
  TestimonialsQueryResult[number] & {
    locale: LocaleLanguages;
  };

const MAX_TOTAL_STARS = 5;

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  stars,
  link,
  _id,
  review,
  locale,
}) => {
  const t = useTranslations("components.cards.testimonial");

  return (
    <li className="w-full h-full block p-4 rounded-lg border border-slate-500 relative group hover:shadow-md transition-all hover:border-slate-700 hover:bg-slate-100">
      <Quote
        size={24}
        strokeWidth={1.5}
        className="absolute -top-[10px] right-4 text-slate-500 group-hover:fill-slate-700 transition-all group-hover:text-slate-700"
        fill="white"
      />
      <p className="font-medium font-heading text-sm">{name ?? ""}</p>
      <p className="italic mt-1">{review?.[locale] ?? ""}</p>
      <div className="flex gap-2 justify-between items-center mt-2">
        <Link
          href={link ?? "#"}
          className="text-sm text-secondary-clinic/80 underline underline-offset-2 hover:text-secondary-clinic transition-all"
          target="_blank"
        >
          {t("cta")}
        </Link>
        <Tooltip>
          <TooltipTrigger className="flex gap-2 items-center">
            {Array(stars ?? 0)
              .fill(true)
              .map((_, i) => (
                <Star
                  key={`star-${_id}-${i}`}
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-clinic"
                  fill="#D90000"
                />
              ))}
            {Array(MAX_TOTAL_STARS - (stars ?? 0))
              .fill(true)
              .map((_, i) => (
                <Star
                  key={`star-${_id}-${i}`}
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-clinic"
                />
              ))}
            <span className="sr-only">
              {stars}
              {"/"}
              {MAX_TOTAL_STARS}
              {t("stars")}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            {stars}
            {"/"}
            {MAX_TOTAL_STARS} {t("stars")}
          </TooltipContent>
        </Tooltip>
      </div>
    </li>
  );
};

export const TestimonialCardLinkToGoogleReviews = ({
  locale,
}: {
  locale: LocaleLanguages;
}) => {
  const t = useTranslations("components.cards.testimonial");
  return (
    <Link
      href={GOOGLE_REVIEWS_URL}
      className="w-full h-full block p-4 rounded-lg border border-slate-700 relative group shadow-lg transition-all focus:outline-none bg-slate-100"
      target="_blank"
      aria-label="Rate us on Google Reviews"
    >
      <Quote
        size={24}
        strokeWidth={1.5}
        className="absolute -top-[10px] right-4  fill-slate-700 transition-all text-slate-700"
        fill="white"
      />
      <p className="font-medium font-heading text-sm">{t("googleReviews")}</p>
      <p className="italic mt-1">{t("googleReviewCta")}</p>
      <div className="flex gap-2 justify-between items-center mt-2">
        <span className="text-sm text-secondary-clinic/80 underline underline-offset-2 text-secondary-clinic transition-all">
          {t("rateUs")}
        </span>
        <div className="flex gap-2 items-center">
          {Array(MAX_TOTAL_STARS)
            .fill(true)
            .map((_, i) => (
              <Star
                key={`star-google-${i}`}
                size={20}
                strokeWidth={1.5}
                className="text-primary-clinic"
                fill="#D90000"
              />
            ))}
          <span className="sr-only">
            {/* eslint-disable-next-line react/jsx-no-literals */}
            {MAX_TOTAL_STARS}/{MAX_TOTAL_STARS} {t("stars")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TestimonialCard;
