/**
 * Home Page - Gallery Component
 */

// Dependencies
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/routing";
import GalleryImage from "@/components/cards/GalleryImage";
import { useTranslations } from "next-intl";
import { GalleryImagesQueryResult } from "@/@types/cms";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";

type GalleryProps = React.ComponentProps<"section"> & {
  galleryImages: GalleryImagesQueryResult;
};

const Gallery: React.FC<GalleryProps> = ({ galleryImages, ...props }) => {
  const t = useTranslations("pages.home.gallery");

  return (
    <section className="container" {...props}>
      <h3 className="text-2xl font-heading text-center font-medium">
        {t("heading")}
      </h3>
      <hr className="border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2" />
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent
            autoFill={false}
            loop={1}
            pauseOnHover={true}
            className="mt-4"
          >
            {galleryImages.map((image) => (
              <MarqueeItem
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-lg"
                key={image._id}
              >
                <GalleryImage image={image} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
      <Button
        asChild
        variant={"ghost"}
        className="w-full text-center text-lg mt-4"
      >
        <Link href={"/gallery"}>{t("cta")}</Link>
      </Button>
    </section>
  );
};

export default Gallery;
