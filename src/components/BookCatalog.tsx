import type { Book } from "../data/types";
import { BookCard } from "./BookCard";
import { BrandIcon } from "./BrandIcon";

interface BookCatalogProps {
  books: Book[];
}

export function BookCatalog({ books }: BookCatalogProps) {
  const orderedBooks = books;

  return (
    <section id="books" className="book-catalog" aria-label="Published books">
      <p className="section-kicker">
        <BrandIcon name="book" className="section-kicker__icon" />
        Catalog
      </p>
      <h2 className="book-catalog__heading">Books</h2>
      <p className="book-catalog__intro">
        Published titles from Omegadyn Press with direct Amazon links.
      </p>
      {orderedBooks.length === 0 ? (
        <p className="book-catalog__empty">No titles listed yet.</p>
      ) : (
        <ul className="book-catalog__grid" role="list">
          {orderedBooks.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
