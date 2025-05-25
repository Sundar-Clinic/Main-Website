import type React from "react";
import type { PostQueryResult } from "@/@types/cms";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { dateFormatter } from "@/lib/utils";

interface Props extends React.ComponentProps<"header"> {
  post: NonNullable<PostQueryResult>;
  locale: LocaleLanguages;
}

const BlogHeader: React.FC<Props> = ({ post, locale }) => {
  return (
    <header className="max-w-3xl mx-auto w-full p-4 mt-8">
      <section className="flex flex-col gap-4">
        <div className="flex flex-col justify-center gap-4">
          <time
            className="text-sm lg:text-base text-slate-500"
            dateTime={post?.publishedAt ?? ""}
          >
            {dateFormatter(post?.publishedAt ?? "")}
          </time>
          <h1 className="font-heading font-medium text-2xl lg:text-4xl lg:text-left text-center">
            {post?.title?.[locale]}
          </h1>
          <p className="text-lg lg:text-xl text-justify text-slate-500">
            {post?.description?.[locale]}
          </p>
        </div>
        <div className="overflow-hidden rounded-lg w-full">
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
      </section>
    </header>
  );
};

export default BlogHeader;
