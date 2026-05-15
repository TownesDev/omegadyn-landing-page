import type { SiteConfig } from "./types";

// Replace contactEmail with the real client email address.
// mailto link is constructed from contactEmail + contactSubject + contactBody.

export const config: SiteConfig = {
  contactEmail: "anthony@omegadyn.net",
  contactSubject: "OmegaDyn Inquiry",
  contactBody: "Hello,\n\nI came across your work and wanted to reach out.\n\n",
  copyrightName: "OmegaDyn LLC",
  socialLinks: [
    { platform: "Facebook", url: "http://www.facebook.com/anthony.t.townes" },
    { platform: "Threads", url: "http://www.threads.com/@anthony.t.townes" },
    {
      platform: "LinkedIn",
      url: "http://www.linkedin.com/in/anthony-townes-932053230/",
    },
    { platform: "Amazon", url: "http://amazon.com/author/anthony.t.townes" },
  ],
};

/** Returns a fully-formed mailto: href string. */
export function buildMailtoHref(cfg: SiteConfig): string {
  const params = new URLSearchParams({
    subject: cfg.contactSubject,
    body: cfg.contactBody,
  });
  return `mailto:${cfg.contactEmail}?${params.toString()}`;
}
