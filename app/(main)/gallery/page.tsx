import { galleryImagesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

export default async function Gallery() {

    const galleryImages = await sanityFetch<GalleryImageData>({
        query: galleryImagesQuery,
    });

    return (
        <section className="w-full bg-slate-950 p-4 md:px-16 lg:max-w-7xl md:mx-auto">
            <Box sx={{ width: "100%", height: "100%"}}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {galleryImages.map((item) => (
                        <ImageListItem key={item._id}>
                            <Image
                                width={100}
                                height={100}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                alt={item.alt}
                                loading="lazy"
                                className="w-full"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </section>
    );
}
