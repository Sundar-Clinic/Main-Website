import type React from "react";
import type { PostQueryResult } from "@/@types/cms";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface Props extends React.ComponentProps<"header"> {
  post: NonNullable<PostQueryResult>;
  locale: LocaleLanguages;
}

const BlogHeader: React.FC<Props> = ({ post, locale }) => {
  return (
    <header className="max-w-3xl mx-auto w-full p-4 mt-8">
      <section className="flex flex-col lg:flex-row lg:gap-6 gap-4">
        <div className="overflow-hidden rounded-lg lg:w-2/3">
          <Image
            src={
              (post.thumbnail &&
                urlForImage(post.thumbnail).format("webp").url()) ??
              ""
            }
            alt={post?.thumbnail?.alt ?? post.title?.[locale] ?? ""}
            width={500}
            height={500}
            className="w-full h-auto aspect-video object-cover object-center"
          />
        </div>
        <div className="lg:w-1/3 flex flex-col justify-center gap-4">
          <h1 className="font-heading font-medium text-2xl lg:text-4xl lg:text-left text-center">
            {post?.title?.[locale]}
          </h1>
          <p className="text-lg lg:text-xl text-justify text-slate-500">
            {post?.description?.[locale]}
          </p>
        </div>
      </section>
    </header>
  );
};

export default BlogHeader;
