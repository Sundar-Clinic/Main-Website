// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const faqsQuery = groq`*[_type == "faq"]{
  _id, question, answer
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  _id, stars, name, review, link
}`;

export const galleryImagesQuery = groq`*[_type == "gallery"]{
  _id, caption, "image": image.asset->url, "alt": image.alt
}`;

export const teamMembersQuery = groq`*[_type == "team"]{
  _id, name, role, qualifications, bio, registrationNo, languages, "image": image.asset->url, "alt": image.alt
}`;
