import pressLogo from "../assets/logos/press/press-mark-color-light.svg";
import { config } from "../data/config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <img
          src={pressLogo}
          alt="Omegadyn Press"
          className="site-footer__press-mark"
        />
        <p className="site-footer__copy">
          &copy; {year} {config.copyrightName}. All rights reserved.
        </p>
        {config.socialLinks.length > 0 && (
          <ul className="site-footer__social" role="list">
            {config.socialLinks.map(({ platform, url }) => (
              <li key={platform}>
                <a
                  href={url}
                  className="site-footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
