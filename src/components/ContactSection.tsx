import { buildMailtoHref, config } from "../data/config";
import { BrandIcon } from "./BrandIcon";
import pressMark from "../assets/logos/press/press-mark-color-light.svg";

export function ContactSection() {
  const mailtoHref = buildMailtoHref(config);

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="contact-section__inner">
        <div className="contact-section__brand-rail" aria-hidden="true">
          <img src={pressMark} alt="" className="contact-section__brand-mark" />
        </div>
        <div className="contact-section__content">
          <p className="section-kicker">
            <BrandIcon name="quill" className="section-kicker__icon" />
            Contact
          </p>
          <h2 className="contact-section__heading">Get in Touch</h2>
          <p className="contact-section__body">
            Whether you have a question about a title, a speaking inquiry, or
            simply want to connect — we&rsquo;d love to hear from you.
          </p>
          <a
            href={mailtoHref}
            className="cta cta--primary contact-section__cta"
          >
            <BrandIcon name="mail" className="cta__icon" />
            Send an Email
          </a>
          <p className="contact-section__email-fallback">
            Or write directly to{" "}
            <a href={mailtoHref} className="contact-section__email-link">
              {config.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
