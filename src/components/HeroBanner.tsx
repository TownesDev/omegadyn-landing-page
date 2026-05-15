import { buildMailtoHref, config } from "../data/config";
import { BrandIcon } from "./BrandIcon";

export function HeroBanner() {
  const mailtoHref = buildMailtoHref(config);

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <p className="eyebrow">Omegadyn Press</p>
      <h1>Stories. Technology. Ideas that endure.</h1>
      <p className="subcopy">
        Home of author Anthony Townes, Omegadyn Press, and future-focused
        creative projects.
      </p>
      <div className="cta-group">
        <a href="#books" className="cta cta--primary">
          <BrandIcon name="book" className="cta__icon" />
          View Books
        </a>
        <a href={mailtoHref} className="cta cta--secondary">
          <BrandIcon name="mail" className="cta__icon" />
          Contact
        </a>
      </div>
    </section>
  );
}
