# OmegaDyn — Data Model

Version: 1.0
Date: May 7, 2026

All TypeScript interfaces live in `src/data/types.ts`.
Data arrays and objects live in `src/data/books.ts` and `src/data/author.ts`.

---

## 1) Book

Represents a single published title.

```typescript
interface Book {
  /** Stable unique identifier. Slug-style: "the-midnight-meridian". */
  id: string;

  /** Display title of the book. */
  title: string;

  /** Short description shown on the card (1-3 sentences). */
  description: string;

  /** Path to cover image, relative to src/assets/books/covers/.
   *  e.g. "the-midnight-meridian.jpg"
   *  Use null if no cover is available yet. */
  coverImage: string | null;

  /** Full Amazon product page URL. */
  amazonUrl: string;

  /** Publication date in ISO 8601 format: "YYYY-MM-DD". */
  publishedDate: string;

  /** Optional genre or category tag. e.g. "Literary Fiction", "Thriller". */
  genre?: string;

  /** When true, the book is listed as "Coming Soon" without an Amazon link. */
  isUpcoming?: boolean;

  /** Optional secondary CTA URL (author website, direct store, etc.). */
  altPurchaseUrl?: string;
}
```

### Field rules

| Field          | Required | Notes                                                       |
| -------------- | -------- | ----------------------------------------------------------- |
| id             | Yes      | kebab-case slug, must be unique across all books            |
| title          | Yes      | Displayed as-is                                             |
| description    | Yes      | 1-3 sentences. Will be truncated at 200 characters on card. |
| coverImage     | Yes      | Null is allowed; renders a branded placeholder              |
| amazonUrl      | Yes\*    | Required unless `isUpcoming` is true                        |
| publishedDate  | Yes      | Used for display and sort order (most recent first)         |
| genre          | No       | Displayed as a small label                                  |
| isUpcoming     | No       | Defaults to false                                           |
| altPurchaseUrl | No       | Only show if explicitly set                                 |

---

## 2) AuthorProfile

Represents the author bio shown in the About section.

```typescript
interface AuthorProfile {
  /** Full display name of the author. */
  name: string;

  /** Short narrative bio (2-4 paragraphs). Stored as an array of paragraph strings. */
  bio: string[];

  /** Path to author photo relative to src/assets/.
   *  e.g. "author/author-photo.jpg"
   *  Use null if not yet available. */
  photo: string | null;

  /** Alt text for the photo for accessibility. */
  photoAlt: string;

  /** Optional quote or personal tagline shown beneath the bio. */
  tagline?: string;
}
```

---

## 3) SocialLink (optional, used in footer)

```typescript
interface SocialLink {
  /** Human-readable platform name. e.g. "Instagram", "Twitter/X" */
  platform: string;

  /** Full URL to the profile. */
  url: string;

  /** Icon identifier if a custom icon set is added later. */
  icon?: string;
}
```

---

## 4) SiteConfig (optional, centralizes singletons)

If singletons grow unwieldy in individual files, consolidate here.

```typescript
interface SiteConfig {
  /** Contact email address. Used in mailto links. */
  contactEmail: string;

  /** Mailto link subject line. */
  contactSubject: string;

  /** Mailto link body pre-fill. */
  contactBody: string;

  /** Footer copyright holder name. */
  copyrightName: string;

  /** Social links, if any. */
  socialLinks: SocialLink[];
}
```

---

## 5) Phase 2 Admin Only — BookMutation

Used only by the Vercel serverless function. Not imported in the React app.

```typescript
type BookMutationAction = "add" | "edit" | "remove";

interface BookMutation {
  action: BookMutationAction;
  book: Book;
}
```

---

## 6) Sort and Filter Behavior

Books are displayed sorted by `publishedDate` descending (newest first).
Upcoming books (`isUpcoming: true`) appear at the top of the list regardless of date,
labelled "Coming Soon" with the Amazon CTA hidden.

This logic lives in `BookCatalog.tsx` as a pure sort/filter — no state management needed.

---

## 7) File Locations

| Interface     | Defined in             | Data in            |
| ------------- | ---------------------- | ------------------ |
| Book          | src/data/types.ts      | src/data/books.ts  |
| AuthorProfile | src/data/types.ts      | src/data/author.ts |
| SocialLink    | src/data/types.ts      | src/data/config.ts |
| SiteConfig    | src/data/types.ts      | src/data/config.ts |
| BookMutation  | api/types.ts (Phase 2) | N/A                |
