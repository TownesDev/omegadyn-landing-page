# OmegaDyn — Project Overview

Version: 1.0
Date: May 7, 2026
Status: Active — Canonical scope definition.

---

## 1) What We Are Building

A simple, elegant, single-page scrollable publishing site for OmegaDyn LLC.

The site serves three purposes:

- Introduce the author/brand to new visitors.
- Showcase published books with direct Amazon purchase links.
- Provide a low-friction way for visitors to make contact.

This is a pro-bono project. Scope is intentionally minimal. Every decision is
evaluated against the question: is this the simplest thing that serves the
client well long-term?

---

## 2) What We Are Not Building

- A custom e-commerce store.
- A full CMS or headless CMS integration.
- User authentication (in Phase 1).
- Email automation or lead capture pipelines.
- Analytics dashboards.
- Social media integrations.
- Anything requiring a paid recurring service in Phase 1.

---

## 3) Sections (Single Scrollable Page)

| Section | ID         | Purpose                                               |
| ------- | ---------- | ----------------------------------------------------- |
| Hero    | `#home`    | Brand introduction, primary CTA                       |
| About   | `#about`   | Author bio, photo, personal statement                 |
| Books   | `#books`   | Published titles with cover, description, Amazon link |
| Contact | `#contact` | Elegant mailto-based contact, email fallback display  |
| Footer  | —          | Copyright, Press logo, optional social links          |

No React Router. Navigation uses anchor links that scroll to section IDs.

---

## 4) Phase 1 — Static Site (Current)

- React + TypeScript + Vite.
- Single CSS file with custom properties (design tokens).
- Books and author data stored as TypeScript data files in `src/data/`.
- Adding or updating a book: edit `src/data/books.ts`, commit, Vercel redeploys automatically.
- Contact: mailto link opens native email client. Email address displayed as visible fallback.
- Deployment: Vercel free tier, auto-deploy from Git.
- Zero paid services.

---

## 5) Phase 2 — Simple Admin Panel (Deferred)

When the client needs to manage books themselves without developer involvement:

- A password-protected `/admin` page (React, same repo).
- No external auth provider. Auth is: password form → Vercel serverless function
  checks input against a bcrypt hash stored in a Vercel environment variable →
  returns a short-lived JWT signed with an env-var secret → stored in
  sessionStorage.
- Book mutation (add/edit/remove) calls a Vercel serverless function that uses
  the GitHub API to commit an updated `books.json` to the repository.
- The commit triggers an automatic Vercel redeploy (~30 seconds).
- Result: client edits books → changes go live. No database, no paid storage,
  no external service.

Phase 2 is documented and planned now. It is not in the current build.

---

## 6) Tech Stack

| Layer           | Choice                           | Rationale                                  |
| --------------- | -------------------------------- | ------------------------------------------ |
| Framework       | React 18 + TypeScript            | Already scaffolded, type-safe data layer   |
| Build           | Vite                             | Fast, minimal config, standard             |
| Styling         | Plain CSS with custom properties | Zero dependency, fully controllable        |
| Fonts           | Google Fonts (Kanit + Manrope)   | Free, pre-approved, swappable later        |
| Data (Phase 1)  | TypeScript data files            | No backend, no build step change needed    |
| Data (Phase 2)  | GitHub API + Vercel serverless   | Free, triggers redeploy, no database       |
| Deployment      | Vercel free tier                 | Auto-deploy from Git, global CDN, free SSL |
| Version control | Git (existing workspace)         | Standard                                   |

---

## 7) Constraints

- No paid recurring services in Phase 1.
- No over-engineering. If a simpler approach exists, use it.
- External Figma export is visual reference only. Do not port its code.
- Kanit is the wordmark font. Manrope is body/UI font.
- OmegaDyn corporate logo (Omega + crescent) is the primary brand mark.
- Omegadyn Press logo (book-pen emblem) is secondary, used in books section and footer.
- All logo assets placed in `src/assets/logos/` per BRAND_ASSET_SPEC.md.

---

## 8) Contacts

| Role            | Party            |
| --------------- | ---------------- |
| Developer       | [your name]      |
| Client          | OmegaDyn LLC     |
| Nature of work  | Pro-bono         |
| Work tracked in | docs/WORK_LOG.md |

---

## 9) Related Documents

| Document                               | Purpose                                  |
| -------------------------------------- | ---------------------------------------- |
| ARCHITECTURE.md                        | Component tree, data layer, folder map   |
| DATA_MODEL.md                          | TypeScript interfaces for all data       |
| BRAND_ASSET_SPEC.md                    | Logo systems, tokens, export filenames   |
| WORK_LOG.md                            | Time tracking and invoice records        |
| LANDING_PAGE_BUILD_SPEC.md             | Superseded — token and component history |
| CLIENT_MISSING_INPUTS_QUESTIONNAIRE.md | Outstanding client inputs                |
