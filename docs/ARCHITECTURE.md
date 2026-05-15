# OmegaDyn — Architecture

Version: 1.0
Date: May 7, 2026

---

## 1) Page Structure

Single scrollable page. No React Router in Phase 1.
Navigation links use anchor hrefs (`href="#about"` etc.) with CSS `scroll-behavior: smooth`.

```
/index.html
  └── <div id="root">
        └── <App>
              ├── <SiteHeader>      fixed, anchor nav
              ├── <main>
              │     ├── <HeroBanner id="home">
              │     ├── <AboutSection id="about">
              │     ├── <BookCatalog id="books">
              │     └── <ContactSection id="contact">
              └── <SiteFooter>
```

---

## 2) Component Tree

```
src/
  App.tsx                   Root. Composes all sections.
  components/
    SiteHeader.tsx          Sticky/fixed nav. Logo left, anchor links right.
    HeroBanner.tsx          Full-height first impression. Headline, subheadline, CTA.
    AboutSection.tsx        Author photo (placeholder), bio text, personal statement.
    BookCatalog.tsx         Section wrapper. Renders a grid of BookCard components.
    BookCard.tsx            Single book. Cover image, title, description, Amazon CTA button.
    ContactSection.tsx      Elegant mailto contact. Visible email fallback.
    SiteFooter.tsx          Copyright, Press logo mark, optional social icon links.
```

Each component receives only what it needs. No global state required in Phase 1.
Data flows from `src/data/` files → `App.tsx` → components via props.

---

## 3) Data Layer (Phase 1)

Books and author data are TypeScript files in `src/data/`. No API, no fetch, no state.

```
src/data/
  books.ts      Exported array of Book objects.
  author.ts     Exported single AuthorProfile object.
```

To add a book in Phase 1:

1. Edit `src/data/books.ts`.
2. Commit and push.
3. Vercel auto-deploys in ~60 seconds.

Interfaces are defined in `src/data/types.ts`.
See DATA_MODEL.md for the full schema.

---

## 4) Styling Architecture

Single CSS file with custom properties. No CSS framework, no preprocessor.

```
src/styles/
  index.css     Tokens + reset + all component styles.
```

Design token naming convention:

- `--color-omegadyn-*` for OmegaDyn corporate brand colors.
- `--color-press-*` for Omegadyn Press brand colors.
- `--font-wordmark`, `--font-body` for type stacks.
- `--space-*` for spacing scale.
- `--radius-*` for border radius.
- `--shadow-*` for box shadows.

See BRAND_ASSET_SPEC.md §1 and LANDING_PAGE_BUILD_SPEC.md §5 for locked token values.

---

## 5) Asset Organization

```
public/
  favicon.ico
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
  android-chrome-192x192.png
  android-chrome-512x512.png
  og-image.png

src/assets/
  logos/
    omegadyn/
      omegadyn-logo-primary.svg         Header and hero
      omegadyn-logo-reversed.svg        Light background future use
      omegadyn-logo-gold-on-black.svg   Alternate treatment
      omegadyn-logo-mono-dark.svg
      omegadyn-logo-mono-light.svg
      omegadyn-mark-color-dark.svg      Compact header icon, favicon source
      omegadyn-mark-color-light.svg
      omegadyn-mark-mono.svg
      omegadyn-wordmark-light.svg
      omegadyn-wordmark-dark.svg
    press/
      press-logo-primary.svg            Books section header, footer
      press-logo-reversed.svg
      press-logo-mono-dark.svg
      press-logo-mono-light.svg
      press-mark-color-dark.svg
      press-mark-color-light.svg
      press-mark-mono.svg
  books/
    covers/                             Book cover images (JPG/WebP)
```

---

## 6) Deployment (Phase 1)

Platform: Vercel free tier.
Build command: `vite build`
Output directory: `dist`
Node version: 20.x

Setup steps:

1. Push repo to GitHub.
2. Connect repo to Vercel via vercel.com dashboard.
3. Set build command and output dir (Vercel auto-detects Vite).
4. Set custom domain via Vercel dashboard (client provides domain).
5. Every push to `main` triggers a production deploy.

No environment variables needed in Phase 1.

---

## 7) Phase 2 Admin — Planned Architecture

> Not in current build. Documented here to ensure Phase 1 decisions do not
> block Phase 2 implementation.

### 7a) What Phase 2 adds

- React page at a secret URL (e.g. `/admin-[hash]`).
- Password form (no username, just password).
- CRUD UI for the books list (add/edit/remove).
- Changes commit to the repository and trigger a Vercel redeploy.

### 7b) Auth flow

```
Client types password
  → POST /api/auth  (Vercel serverless function)
    → bcrypt.compare(input, process.env.ADMIN_PASSWORD_HASH)
      → success: return signed JWT (secret from process.env.JWT_SECRET)
      → fail: return 401
Client stores JWT in sessionStorage
  → all subsequent admin API calls include JWT in Authorization header
```

### 7c) Book mutation flow

```
Client submits book form
  → POST /api/books  (Vercel serverless function)
    → verify JWT
    → fetch current books.json from GitHub API
    → apply mutation (add/edit/remove)
    → commit updated books.json back via GitHub API
      → Vercel webhook detects push → redeploy fires
```

### 7d) New environment variables (Phase 2 only)

| Variable              | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `ADMIN_PASSWORD_HASH` | bcrypt hash of admin password            |
| `JWT_SECRET`          | Secret for signing session tokens        |
| `GITHUB_TOKEN`        | Personal access token for repo write API |
| `GITHUB_REPO`         | `owner/repo` string                      |

### 7e) New dependencies (Phase 2 only)

| Package    | Purpose                         | Cost |
| ---------- | ------------------------------- | ---- |
| `bcryptjs` | Password hash comparison        | Free |
| `jose`     | JWT sign/verify (no native dep) | Free |

No external auth provider. No database. No paid service added.

---

## 8) Build Order (Phase 1)

1. Token file and base CSS (done).
2. Data files — `types.ts`, `books.ts`, `author.ts`.
3. `SiteHeader` component.
4. `HeroBanner` component.
5. `AboutSection` component.
6. `BookCard` + `BookCatalog` components.
7. `ContactSection` component.
8. `SiteFooter` component.
9. Wire everything in `App.tsx`.
10. Metadata, OG tags, favicon links in `index.html`.
11. Responsive pass.
12. Accessibility pass.
13. Vercel deploy setup.
