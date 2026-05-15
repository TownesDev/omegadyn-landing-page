# OmegaDyn Landing Page Build Spec (MVP)

> **Scope revision — May 7, 2026.**
> This document is superseded by [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) and [ARCHITECTURE.md](./ARCHITECTURE.md).
> Token definitions and component decisions below remain valid. Read the new docs for current scope, data model, and Phase 2 admin plan.

---

## 1) Purpose

Build a simple, elegant, one-page landing site for OmegaDyn.

This is a pro-bono MVP with strict scope control.

- External Figma export is visual reference only.
- No backend services.
- No third-party form processing.
- No analytics dependencies in MVP.

## 2) Product Scope

### In Scope

- Single page with one hero section as the primary experience.
- Minimal header: logo + Contact action.
- Hero content: headline, short subheadline, 1 to 2 CTA actions.
- Contact behavior: native email app via mailto link.
- Simple footer (copyright line).
- Fully responsive layout (mobile and desktop).
- Basic SEO metadata and social preview tags.

### Out of Scope

- Multi-page brochure/investor/publication site.
- CMS, database, API routes, server actions.
- Lead capture backend or email automation services.
- Authentication, dashboards, portals.
- Complex animation systems.

## 3) Canonical Decisions (Locked Now)

- Tech: React + TypeScript + Vite + Tailwind.
- Architecture: static, component-based, no routing required.
- Contact CTA uses mailto only.
- Build from clean components, not from raw Figma export structure.
- Keep dependency surface minimal.

## 4) Visual Direction (from reference)

- Brand tone: premium, editorial, modern-classic.
- Core contrast: deep navy/near-black + gold accents.
- Emphasis on spacing, typography hierarchy, and clarity over density.
- Hero-first composition with strong mark/wordmark presence.

## 5) Design Tokens (v1 — Locked)

Full color and asset definitions are in [BRAND_ASSET_SPEC.md](./BRAND_ASSET_SPEC.md).
Use CSS custom properties as source-of-truth tokens.

```css
:root {
  /* Color — locked to brand reference */
  --color-bg: #0b1220;
  --color-surface: #111a2b;
  --color-text: #f8fafc;
  --color-text-muted: #cbd5e1;
  --color-accent: #cba72f;
  --color-accent-strong: #e2bf4d;
  --color-border: rgba(255, 255, 255, 0.15);
  --color-bg-light: #f8fafc;
  --color-text-dark: #0f172a;

  /* Typography */
  --font-display: "Newsreader", "Liberation Serif", serif;
  --font-body: "Manrope", "Nimbus Sans L", sans-serif;

  --text-hero: clamp(2rem, 5vw, 4rem);
  --text-title: clamp(1.25rem, 2.2vw, 2rem);
  --text-body: 1rem;
  --text-small: 0.875rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Radius + shadow */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.25);

  /* Layout */
  --container-max: 72rem;
}
```

Notes:

- Fonts are pre-approved for now and can be replaced later without layout rewrite.
- Token names stay stable even if color values change.
- Colors are locked from visual reference. See BRAND_ASSET_SPEC.md §1 for full table.

## 6) Information Architecture (MVP)

1. Header
2. Hero
3. Footer

Optional micro-section (only if copy is ready):

- One short "About" paragraph below hero.

## 7) Component Plan

- `AppShell`: page wrapper + background treatment.
- `SiteHeader`: logo left, contact CTA right.
- `HeroBanner`: logo/mark, headline, subheadline, primary CTA.
- `CTAGroup`: one primary action, one secondary optional action.
- `SiteFooter`: copyright + optional legal link.

## 8) Contact Behavior (No backend)

Use mailto URL only.

Pattern:
`mailto:CLIENT_EMAIL?subject=OmegaDyn%20Inquiry&body=Hello%20OmegaDyn%2C%0A%0A`

Rules:

- Button label: "Contact" or "Email Us".
- Open in native email app where available.
- Provide visible fallback text with the email address.

## 9) Accessibility Baseline

- Semantic landmarks: `header`, `main`, `footer`.
- Single `h1` in hero.
- Interactive elements keyboard reachable with visible focus styles.
- Alt text for logos and hero imagery.
- Color contrast target: WCAG AA minimum.

## 10) Performance Baseline

- Prefer SVG for logo assets.
- Serve compressed hero image (WebP/AVIF + fallback).
- Keep JS bundle lean by removing unused component libraries.
- Target first-load payload appropriate for a static landing page.
- Logo assets sourced per [BRAND_ASSET_SPEC.md](./BRAND_ASSET_SPEC.md) §3 naming and folder structure.

## 11) SEO + Metadata Baseline

Prepare these values in code now, update copy later:

- `title`
- `meta description`
- `og:title`
- `og:description`
- `og:image`
- `twitter:card`
- canonical URL

## 12) Acceptance Criteria (Definition of Done)

- One-page site renders correctly on mobile and desktop.
- Hero is visually consistent with approved brand direction.
- Contact action opens mailto link.
- No backend routes or third-party service dependencies.
- Lighthouse-level quality: no obvious accessibility or performance blockers.
- Deployable as a static site.

## 13) Deferred Backlog (Post-MVP)

- Additional sections (vision/publications/story).
- Analytics and event tracking.
- Form service integration.
- Legal page expansion.
- Rich motion system and advanced interactions.

## 14) Build Order

1. Create token file and base layout.
2. Implement header + hero + footer components.
3. Wire mailto CTA and fallback email text.
4. Add responsive tuning and accessibility pass.
5. Add metadata and final content pass.
