// Type definitions for all OmegaDyn site data.
// See docs/DATA_MODEL.md for schema documentation.

export interface Book {
  /** Stable unique identifier. Slug-style: "the-midnight-meridian". */
  id: string;

  /** Display title of the book. */
  title: string;

  /** Short description shown on the card (1-3 sentences). */
  description: string;

  /** Filename of cover image inside src/assets/books/covers/.
   *  e.g. "the-midnight-meridian.jpg"
   *  Null renders a branded placeholder. */
  coverImage: string | null;

  /** Full Amazon product page URL. */
  amazonUrl: string;

  /** Publication date in ISO 8601 format: "YYYY-MM-DD". */
  publishedDate: string;

  /** Optional genre or category label. */
  genre?: string;

  /** When true, renders as "Coming Soon" with Amazon CTA hidden. */
  isUpcoming?: boolean;

  /** Optional secondary purchase URL. */
  altPurchaseUrl?: string;
}

export interface AuthorProfile {
  /** Full display name. */
  name: string;

  /** Bio paragraphs — one string per paragraph. */
  bio: string[];

  /** Filename of author photo inside src/assets/author/.
   *  Null renders a placeholder. */
  photo: string | null;

  /** Accessible alt text for the photo. */
  photoAlt: string;

  /** Optional tagline displayed beneath the bio. */
  tagline?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  contactEmail: string;
  contactSubject: string;
  contactBody: string;
  copyrightName: string;
  socialLinks: SocialLink[];
}
