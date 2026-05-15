import type { Book } from "../data/types";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const coverSrc = book.coverImage;

  return (
    <article className="book-card" aria-label={book.title}>
      <div className="book-card__cover-wrap">
        {coverSrc ? (
          <img
            src={coverSrc}
            alt={`Cover of ${book.title}`}
            loading="lazy"
            className="book-card__cover"
          />
        ) : (
          <div className="book-card__cover-placeholder" aria-hidden="true" />
        )}
        {book.isUpcoming && (
          <span className="book-card__badge">Coming Soon</span>
        )}
      </div>
      <div className="book-card__body">
        {book.genre && <p className="book-card__genre">{book.genre}</p>}
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__description">{book.description}</p>
        {!book.isUpcoming && (
          <a
            href={book.amazonUrl}
            className="cta cta--primary book-card__cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy ${book.title} on Amazon`}
          >
            Buy on Amazon
          </a>
        )}
        {book.altPurchaseUrl && (
          <a
            href={book.altPurchaseUrl}
            className="book-card__alt-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Other purchase options
          </a>
        )}
      </div>
    </article>
  );
}
