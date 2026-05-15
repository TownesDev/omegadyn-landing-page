# OmegaDyn Publishing Site — Client Progress Report

**Date:** May 7, 2026
**Developer:** Donovan Townes
**Client:** OmegaDyn LLC
**Nature of engagement:** Pro-bono
**Report type:** Development checkpoint — Phase 1 in progress

---

## Hello

Just wanted to give you a clear picture of where things stand, what decisions
have been made on your behalf (and why), and what I still need from you before
the site can go live.

This work is being done free of charge, but I'm documenting it in full so you
have a transparent record of the effort involved and the value of what you're
receiving.

---

## What Has Been Built So Far

The site structure, codebase foundation, and architectural plan are complete.
Here is what is done:

### Foundation

- **Tech stack confirmed:** React, TypeScript, and Vite. This combination is
  battle-tested, widely supported, and free to host. No unnecessary libraries
  have been added.
- **Brand design tokens locked:** Your color palette (OmegaDyn corporate:
  black, white, and gold; Omegadyn Press: navy, gold, and white), typography,
  and spacing system are fully wired into the codebase.
- **Fonts selected and integrated:** _Kanit_ for your OMEGADYN wordmark and
  _Manrope_ for body text. Both are available through Google Fonts at no cost.
- **17 logo asset placeholders created** using the exact canonical filenames
  from your brand spec. Finalized logo files and a complete brand kit will be
  prepared and delivered by the developer — no action required from you on this.
- **All components scaffolded:** The site structure is built and wired
  together, ready for content and styling.
- **Project documentation written:** Architecture decisions, data model, brand
  spec, and this work log are all recorded for long-term sustainability.

### Page Structure

The site is a single scrollable page with four sections and a footer.
Navigation links at the top scroll the reader to each section smoothly.

| Section | Purpose                                                                  |
| ------- | ------------------------------------------------------------------------ |
| Hero    | First impression — headline, subheadline, and two call-to-action buttons |
| About   | Your author bio and photo                                                |
| Books   | Your published titles with cover images and Amazon purchase links        |
| Contact | A simple, elegant email contact prompt                                   |
| Footer  | Copyright notice and Omegadyn Press mark                                 |

---

## Key Decisions Made

These decisions were made to keep the site simple, durable, and free to
maintain. Each one eliminates a category of ongoing cost or complexity.

### 1) Single scrollable page, not multiple separate pages

Your content fits naturally into one scrollable experience. Multi-page sites
require a routing library, more complex navigation, and additional
infrastructure. One page is simpler, faster, and just as professional at
this scale.

### 2) Contact via email link, no contact form backend

A contact form requires a server to receive and forward messages — which means
a paid service (Formspree, Netlify Forms, SendGrid, etc.) or maintaining a
custom backend. Instead, clicking "Send an Email" opens your mail client with
a pre-filled subject line and greeting. Your email address is also displayed
visibly as a fallback. This is zero-cost and infinitely sustainable.

### 3) Books managed by the developer, not a CMS

In Phase 1, adding or updating a book means editing a data file and pushing
a code change. This triggers an automatic redeploy in about 60 seconds.
No CMS subscription, no admin interface security to maintain, no third-party
platform to depend on. When book updates are infrequent, this is the right
call.

**Phase 2 plan (ready when you need it):** A simple password-protected admin
page has been designed and documented — built into the same site, no external
services, no recurring cost. We can activate this whenever managing books
yourself becomes a priority. The architecture already accounts for it.

### 4) Deployed on Vercel free tier

Vercel hosts static React sites for free with global CDN, automatic HTTPS,
and auto-deploy on every code push. No server to manage, no hosting bill.
When you're ready to connect your domain, that is a one-time Vercel dashboard
step.

### 5) Two separate logos, two separate brand systems

You submitted two logo marks. Rather than treat them as interchangeable, a
clear system was established:

- **OmegaDyn (corporate):** The Omega symbol with crescent mark and OMEGADYN
  wordmark. Used in the site header, hero, and primary brand contexts.
  Palette: black, white, and gold.
- **Omegadyn Press (publishing imprint):** The book-and-pen emblem. Used in
  the books section and footer. Palette: navy, gold, and white.

This keeps the corporate brand and the publishing imprint visually distinct
and correctly placed throughout the site.

---

## What the Work Has Cost (Market Reference)

This engagement is pro-bono. The figures below reflect the market value of
the work completed to date at a standard independent development rate of
**$150/hr**, for your records and awareness.

| Task                                                                | Hours       | Value         |
| ------------------------------------------------------------------- | ----------- | ------------- |
| Figma export review and scope analysis                              | 0.75        | $112.50       |
| MVP specification and client questionnaire                          | 0.75        | $112.50       |
| Brand asset specification (dual logo system)                        | 1.5         | $225.00       |
| Font selection and integration                                      | 0.5         | $75.00        |
| Project scaffold (build config, TypeScript, Vite)                   | 0.75        | $112.50       |
| CSS design token system and base layout                             | 0.75        | $112.50       |
| Site shell and hero section                                         | 0.75        | $112.50       |
| Logo placeholder file system — 17 files, canonical naming           | 0.5         | $75.00        |
| Full architectural documentation                                    | 1.5         | $225.00       |
| Logo design and brand kit delivery _(developer-provided to client)_ | 1.25        | $187.50       |
| **Total so far**                                                    | **9.0 hrs** | **$1,350.00** |

**Amount invoiced: $0.00**

---

## What I Still Need From You

The site will not go live until these items are in hand. Nothing below
requires technical knowledge — just your content and decisions.

### Required — Cannot launch without these

| #   | What I need                    | Notes                                                                                         |
| --- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| 1   | **Your contact email address** | This goes into the mailto link and is displayed visibly on the page                           |
| 2   | **Hero headline**              | One sentence or phrase. What is the first thing you want a visitor to read?                   |
| 3   | **Hero subheadline**           | One short sentence beneath the headline                                                       |
| 4   | **Author bio**                 | 2–4 paragraphs in your own words. Can be rough — I'll clean it up                             |
| 5   | **Author photo**               | Any high-quality photo of you. JPG or PNG is fine                                             |
| 6   | **Book listings**              | For each published title: title, short description, Amazon link, and cover image if available |
| 7   | **Browser tab title**          | What should appear in the browser tab? Example: "OmegaDyn \| Omegadyn Press"                  |

> **Logo files:** You do not need to provide these. Final logo assets and a
> complete brand kit in all required formats will be delivered to you by the
> developer as part of this engagement.

### Optional — Has a default, but your input is better

| #   | What I need                | Default if not provided                                                      |
| --- | -------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |
| 8   | **Meta description**       | ~150 characters for search engines and social share previews                 | Generic placeholder               |
| 9   | **Social share image**     | 1200×630 px image shown when your URL is shared on social media              | OmegaDyn logo on black background |
| 10  | **Hero button labels**     | "View Books" and "Get in Touch" are currently set                            | Current defaults                  |
| 11  | **Domain name**            | What URL will the site live at?                                              | TBD                               |
| 12  | **Social media profiles**  | Instagram, Twitter/X, Facebook, etc. — if you want them linked in the footer | None                              |
| 13  | **Genre labels for books** | e.g. "Literary Fiction", "Thriller"                                          | Omitted if not provided           |
| 14  | **Personal tagline**       | A short motto or quote shown beneath your bio                                | Omitted if not provided           |

### For upcoming books only

If you have titles releasing in the future that you want listed as
"Coming Soon":

| #   | What I need                                    |
| --- | ---------------------------------------------- |
| 15  | Title and brief teaser description             |
| 16  | Anticipated release date (approximate is fine) |
| 17  | Cover image if available                       |

---

## What Comes Next

Once you send the content above, here is what remains before launch:

1. **CSS styling pass** — The full visual design for all sections (currently
   the foundation is in place, sections are not yet styled to completion).
2. **Logo and brand kit delivery** — Finalized logo files in all required formats will be prepared and delivered to you by the developer.
3. **Populate real book and author data** — Replace placeholders with your
   actual content.
4. **Responsive and accessibility pass** — Verify everything looks right on
   mobile and meets accessibility standards.
5. **SEO metadata** — Page title, meta description, and social share image.
6. **Vercel deploy setup** — Connect the repository and configure your domain.

Estimated remaining work once all content is received: approximately
**5–8 development hours**, depending on the number of book entries and any design
refinements.

---

## How to Reach Me

Send content, questions, or approvals to:

Donovan Townes
donovan@townes.dev

No urgency — the architecture is solid and the site is ready to receive your
content whenever you have it together.

---

_This report was generated on May 7, 2026. All decisions documented here
remain open to discussion. Nothing is permanent until you approve it._
