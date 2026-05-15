import { BrandIcon } from "./BrandIcon";

const navLinks = [
  { label: "About", href: "#about", icon: "about" as const },
  { label: "Books", href: "#books", icon: "book" as const },
  { label: "Contact", href: "#contact", icon: "mail" as const },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a
        href="#home"
        className="site-header__logo-link"
        aria-label="OmegaDyn — home"
      >
        <img src="/omegadyn-wordmark-light.png" alt="OmegaDyn" className="site-wordmark" />
      </a>
      <nav className="site-header__nav" aria-label="Primary navigation">
        <ul className="site-header__nav-list">
          {navLinks.map(({ label, href, icon }) => (
            <li key={href}>
              <a href={href} className="site-header__nav-link">
                <BrandIcon name={icon} className="site-header__nav-icon" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
