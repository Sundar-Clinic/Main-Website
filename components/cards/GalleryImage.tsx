/**
 * Gallery Image Component
 */

// Dependencies
import React from "react";
import Image from "next/image";
import { GalleryImagesQueryResult } from "@/@types/cms";
import { urlForImage } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type GalleryImageProps = React.ComponentProps<"img"> & {
  image: GalleryImagesQueryResult[number];
};

const GalleryImage: React.FC<GalleryImageProps> = ({ image, className }) => {
  return (
    <div className={cn(className)}>
      <Image
        src={
          (image.image && urlForImage(image.image).format("webp").url()) ?? ""
        }
        alt={image?.image?.alt ?? image.caption ?? ""}
        width={100}
        height={100}
        className="w-full h-auto object-cover"
        unoptimized
        loading="lazy"
      />
    </div>
  );
};

export default GalleryImage;
