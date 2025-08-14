/**
 * Gallery Page
 */

// Dependencies
import GalleryImage from "@/components/cards/GalleryImage";
import { galleryImagesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { GalleryImagesQueryResult } from "@/@types/cms";

export default async function Gallery() {
  const galleryImages = await sanityFetch<GalleryImagesQueryResult>({
    query: galleryImagesQuery,
  });

  return (
    <section className="w-full p-4 md:px-16 lg:max-w-7xl md:mx-auto">
      <div className="w-full h-full">
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {[...galleryImages]
            .sort(() => Math.random() - 0.5)
            .map((image) => (
              <GalleryImage
                key={`gallery-${image._id}`}
                image={image}
                className="mt-2 rounded-lg overflow-hidden"
              />
            ))}
        </div>
      </div>
    </section>
  );
}
