// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current) && publishedAt <= now()]{
    slug
}`;

export const featuredPostsQuery = groq`*[_type == "post" && featured == true && publishedAt <= now()][0...3]{
  ..., author->{...}, categories[]->{...}
} | order(publishedAt desc)`;

export const getAllPostsQuery = groq`*[_type == "post" && publishedAt <= now()]{
  ..., author->{...}, categories[]->{...}
} | order(publishedAt desc)`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug && publishedAt <= now()][0]{ 
  ..., author->{...}, categories[]->{...}
}`;

export const postPublishedYearsQuery = groq`array::unique(
  *[_type == "post" && defined(publishedAt)]{
    "year": string::split(publishedAt, '-')[0]
  }.year
) | order(@ desc)`;

export const getAllPostsByYearQuery = groq`
  *[_type == "post" && string::startsWith(publishedAt, $year)]{
    slug,
    _updatedAt
  } | order(publishedAt desc)
`;

export const faqsQuery = groq`*[_type == "faq"]{
  _id, question, answer
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  _id, stars, name, review, link
}`;

export const galleryImagesQuery = groq`*[_type == "gallery"]{
  _id, caption, image
}`;

export const teamMembersQuery = groq`*[_type == "team"]{
  ...
} | order(priority asc)`;

export const labTestsQuery = groq`*[_type == "lab-tests" && currentlyAvailable == true]{
  ...
} | order(_createdAt asc)`;

export const labTestQuery = groq`*[_type == "lab-tests" && slug.current == $slug && currentlyAvailable == true][0]{
  ...
}`;

export const partnerLabsQuery = groq`*[_type == "partner-labs"]{
  ...
}`;

export const labTestSlugsQuery = groq`*[_type == "lab-tests" && defined(slug.current) && currentlyAvailable == true]{
  slug, _updatedAt
}`;

export const siteConfigQuery = groq`*[_type == "siteConfig"][0]{
  _id,
  socials
}`;
