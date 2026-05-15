import type { AuthorProfile } from "../data/types";
import { BrandIcon } from "./BrandIcon";

interface AboutSectionProps {
  author: AuthorProfile;
}

export function AboutSection({ author }: AboutSectionProps) {
  return (
    <section id="about" className="about-section" aria-label="About the author">
      <div className="about-section__inner">
        <div className="about-section__photo-wrap">
          {author.photo ? (
            <img
              src={author.photo}
              alt={author.photoAlt}
              loading="lazy"
              className="about-section__photo"
            />
          ) : (
            <div
              className="about-section__photo-placeholder"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="about-section__text">
          <p className="section-kicker">
            <BrandIcon name="about" className="section-kicker__icon" />
            Author
          </p>
          <h2 className="about-section__name">{author.name}</h2>
          {author.bio.map((paragraph, i) => (
            <p key={i} className="about-section__bio-paragraph">
              {paragraph}
            </p>
          ))}
          {author.tagline && (
            <p className="about-section__tagline">
              &ldquo;{author.tagline}&rdquo;
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
