/**
 * Type-safe cache tag utilities for Sanity content revalidation
 *
 * This module provides type-safe helpers for creating and managing cache tags
 * used with Next.js on-demand revalidation.
 */

import type { AllSanitySchemaTypes } from '@/@types/cms';

// Extract all _type values from Sanity schema types
export type SanityDocumentType = Extract<
  AllSanitySchemaTypes,
  { _type: string }
>['_type'];

/**
 * Collection-level cache tag
 * Format: "collection:{type}"
 * Used to invalidate all documents of a specific type
 */
export type CollectionTag = `collection:${SanityDocumentType}`;

/**
 * Document-level cache tag
 * Format: "{type}:{slug}"
 * Used to invalidate a specific document by its slug
 */
export type DocumentTag = `${SanityDocumentType}:${string}`;

/**
 * Valid cache tag types
 */
export type CacheTag = CollectionTag | DocumentTag;

/**
 * Create a collection-level cache tag
 * @param type - The Sanity document type
 * @returns A collection tag (e.g., "collection:post")
 */
export function createCollectionTag(type: SanityDocumentType): CollectionTag {
  return `collection:${type}`;
}

/**
 * Create a document-level cache tag
 * @param type - The Sanity document type
 * @param slug - The document slug
 * @returns A document tag (e.g., "post:my-first-post")
 */
export function createDocumentTag(
  type: SanityDocumentType,
  slug: string
): DocumentTag {
  return `${type}:${slug}`;
}

/**
 * Parse a cache tag to extract type and slug information
 * @param tag - The cache tag to parse
 * @returns Object with tag type, documentType, and optional slug
 */
export function parseTag(tag: CacheTag): {
  isCollection: boolean;
  documentType: SanityDocumentType | null;
  slug: string | null;
} {
  if (tag.startsWith('collection:')) {
    const documentType = tag.replace('collection:', '') as SanityDocumentType;
    return { isCollection: true, documentType, slug: null };
  }

  const [documentType, slug] = tag.split(':', 2);
  return {
    isCollection: false,
    documentType: documentType as SanityDocumentType,
    slug: slug || null,
  };
}
