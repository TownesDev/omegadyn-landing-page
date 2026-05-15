# OmegaDyn Brand Asset Specification

Version: 1.1 - Canonical definition. Source-of-truth for two separate logo systems.

---

## 1) Color Tokens (Locked)

OmegaDyn corporate logo is black + white + gold.
Press logo may use navy + gold + white.

| Token                          | Hex                      | Usage                                             |
| ------------------------------ | ------------------------ | ------------------------------------------------- |
| `--color-omegadyn-black`       | `#111111`                | OmegaDyn primary logo dark fill and dark surfaces |
| `--color-omegadyn-white`       | `#f8fafc`                | OmegaDyn light logo fill and light backgrounds    |
| `--color-omegadyn-gold`        | `#cba72f`                | OmegaDyn primary accent                           |
| `--color-omegadyn-gold-strong` | `#e2bf4d`                | OmegaDyn hover/highlight                          |
| `--color-press-navy`           | `#0b1220`                | Omegadyn Press logo dark background token         |
| `--color-text-muted`           | `#cbd5e1`                | Secondary copy in UI                              |
| `--color-border`               | `rgba(255,255,255,0.15)` | Dividers/outlines in dark contexts                |

---

## 2) Logo Systems and Variants

There are two distinct logo systems. Do not mix them in naming or exports.

### A) OmegaDyn Corporate (Primary Brand)

npmGreek Omega symbol with crescent moon inside + OMEGADYN wordmark.

#### A1) Full mark + wordmark (primary corporate logo)

| Variant       | Background  | Filename                          |
| ------------- | ----------- | --------------------------------- |
| Primary       | Black       | `omegadyn-logo-primary.svg`       |
| Reversed      | Light/white | `omegadyn-logo-reversed.svg`      |
| Gold on black | Black       | `omegadyn-logo-gold-on-black.svg` |
| Mono dark     | Transparent | `omegadyn-logo-mono-dark.svg`     |
| Mono light    | Transparent | `omegadyn-logo-mono-light.svg`    |

#### A2) Mark only (Omega + crescent symbol)

| Variant        | Background  | Filename                        |
| -------------- | ----------- | ------------------------------- |
| Color on black | Black       | `omegadyn-mark-color-dark.svg`  |
| Color on light | Light/white | `omegadyn-mark-color-light.svg` |
| Mono           | Transparent | `omegadyn-mark-mono.svg`        |

#### A3) Wordmark only

| Variant    | Background  | Filename                      |
| ---------- | ----------- | ----------------------------- |
| Light text | Transparent | `omegadyn-wordmark-light.svg` |
| Dark text  | Transparent | `omegadyn-wordmark-dark.svg`  |

### B) Omegadyn Press (Secondary Brand)

Book-pen emblem system. Kept separate from OmegaDyn corporate logo.

#### B1) Full mark + wordmark

| Variant    | Background  | Filename                    |
| ---------- | ----------- | --------------------------- |
| Primary    | Navy        | `press-logo-primary.svg`    |
| Reversed   | Light/white | `press-logo-reversed.svg`   |
| Mono dark  | Transparent | `press-logo-mono-dark.svg`  |
| Mono light | Transparent | `press-logo-mono-light.svg` |

#### B2) Mark only (book-pen emblem)

| Variant        | Background  | Filename                     |
| -------------- | ----------- | ---------------------------- |
| Color on navy  | Navy        | `press-mark-color-dark.svg`  |
| Color on light | Light/white | `press-mark-color-light.svg` |
| Mono           | Transparent | `press-mark-mono.svg`        |

---

## 3) Export Requirements - Web App Integration (MVP)

MVP app uses OmegaDyn corporate logo system only.
Press files are exported for brand-kit storage and future implementation.

### Favicons (drop into `public/`)

| Filename                     | Size (px)           | Format | Notes                                 |
| ---------------------------- | ------------------- | ------ | ------------------------------------- |
| `favicon.ico`                | 16x16 + 32x32 multi | ICO    | Required for broad browser support    |
| `favicon-16x16.png`          | 16x16               | PNG    | Embedded in HTML link tag             |
| `favicon-32x32.png`          | 32x32               | PNG    | Standard tab/bookmark icon            |
| `apple-touch-icon.png`       | 180x180             | PNG    | iOS home screen icon, no transparency |
| `android-chrome-192x192.png` | 192x192             | PNG    | Android PWA manifest icon             |
| `android-chrome-512x512.png` | 512x512             | PNG    | Android splash/maskable icon          |

Favicon export notes:

- Use `omegadyn-mark-*` (Omega + crescent symbol), never Press mark.
- Use solid black (`#111111`) background for `apple-touch-icon.png`.
- All other PNG favicons should have transparent background.

### App Logo Assets (drop into `src/assets/logos/omegadyn/`)

| Filename                       | Size / Format | Notes                          |
| ------------------------------ | ------------- | ------------------------------ |
| `omegadyn-logo-primary.svg`    | Vector SVG    | Header logo and hero logo      |
| `omegadyn-logo-primary@2x.png` | 480xauto PNG  | PNG fallback, retina           |
| `omegadyn-logo-reversed.svg`   | Vector SVG    | Future light-background usage  |
| `omegadyn-mark-color-dark.svg` | Vector SVG    | Compact header and icon source |

### Social Preview Image (drop into `public/`)

| Filename       | Size (px) | Format | Notes                       |
| -------------- | --------- | ------ | --------------------------- |
| `og-image.png` | 1200x630  | PNG    | Open Graph and Twitter card |

---

## 4) OG / Social Preview Image Design Spec

Design `og-image.png` as a standalone OmegaDyn corporate composition:

- Background: `#111111`
- Centered OmegaDyn primary logo in gold + white treatment
- Optional subtle tagline text if copy is confirmed
- No photography in this MVP OG image
- Format: PNG, non-interlaced, sRGB

Press can have a future separate social image: `og-image-press.png`.

---

## 5) Brand Kit Master Export Set

Store in `brand-kit/` for internal use and future client handoff.

### 5a) SVG set

- OmegaDyn corporate: export all variants in section A.
- Omegadyn Press: export all variants in section B.

### 5b) PNG set - digital sizes

For each variant in both logo systems, export at widths below (height auto):

| Width  | Use Case                        |
| ------ | ------------------------------- |
| 64px   | App header compact              |
| 128px  | Standard digital embed          |
| 256px  | Marketing assets, email headers |
| 512px  | Presentation decks, icon source |
| 1024px | High-res digital                |

### 5c) Print set

| DPI | Size      | Format | Notes                              |
| --- | --------- | ------ | ---------------------------------- |
| 300 | 3in wide  | PNG    | Business card / letterhead minimum |
| 300 | 6in wide  | PNG    | Standard print collateral          |
| 300 | 12in wide | PNG    | Large format minimum               |

### 5d) Favicon source files

- Keep raw source as `omegadyn-mark-favicon-source.png` (512x512).
- Keep in `brand-kit/favicon-source/`.

---

## 6) Naming Conventions

Use kebab-case only. No spaces, no camelCase, no underscores.

Pattern:

```
{brand}-{subject}-{variant}-{color-mode}@{scale}x.{ext}
```

Examples:

- `omegadyn-logo-primary.svg`
- `omegadyn-logo-primary@2x.png`
- `omegadyn-mark-mono.svg`
- `press-logo-primary.svg`
- `press-mark-color-dark.svg`
- `favicon-32x32.png`

---

## 7) Safe Zone and Clear Space

Apply minimum clear-space rules for both logo systems:

- Minimum clear space around a logo: at least height of the "O" in OMEGADYN wordmark.
- Do not place logos against backgrounds that degrade contrast below WCAG AA.
- OmegaDyn approved backgrounds: black (`#111111`) and white (`#f8fafc`).
- Press approved backgrounds: navy (`#0b1220`) and white (`#f8fafc`).
- Never use full logo lockup below 120px wide.
- Use mark-only below 80px wide.

---

## 8) Minimum Sizes

| Form          | Minimum width (digital) | Minimum width (print at 300dpi) |
| ------------- | ----------------------- | ------------------------------- |
| Full logo     | 120px                   | 1.25in                          |
| Mark only     | 24px                    | 0.25in                          |
| Wordmark only | 80px                    | 0.8in                           |

---

## 9) Folder Structure (Proposed)

```
omegadyn-web-app/
|- public/
|  |- favicon.ico
|  |- favicon-16x16.png
|  |- favicon-32x32.png
|  |- apple-touch-icon.png
|  |- android-chrome-192x192.png
|  |- android-chrome-512x512.png
|  |- og-image.png
|- src/
|  |- assets/
|     |- logos/
|        |- omegadyn/
|        |  |- omegadyn-logo-primary.svg
|        |  |- omegadyn-logo-primary@2x.png
|        |  |- omegadyn-logo-reversed.svg
|        |  |- omegadyn-mark-color-dark.svg
|        |- press/
|           |- press-logo-primary.svg
|           |- press-logo-reversed.svg
|           |- press-mark-color-dark.svg
|- brand-kit/
   |- svg/
   |  |- omegadyn/
   |  |- press/
   |- png/
   |  |- digital/
   |  |  |- omegadyn/
   |  |  |- press/
   |  |- print/
   |     |- omegadyn/
   |     |- press/
   |- favicon-source/
      |- omegadyn-mark-favicon-source.png
```

---

## 10) What Remains Client-Dependent

Only these items require final client approval before production export:

- Final vectorized Omegadyn Press artwork
- Copyright name and year for footer
- Social preview copy/tagline

Everything else in this spec can be built and wired now using placeholder copy.
