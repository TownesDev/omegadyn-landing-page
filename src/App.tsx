import { SiteHeader } from "./components/SiteHeader";
import { HeroBanner } from "./components/HeroBanner";
import { AboutSection } from "./components/AboutSection";
import { BookCatalog } from "./components/BookCatalog";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";
import { author } from "./data/author";
import { books } from "./data/books";

function App(): JSX.Element {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="site-main">
        <HeroBanner />
        <hr className="section-divider" aria-hidden="true" />
        <AboutSection author={author} />
        <hr className="section-divider" aria-hidden="true" />
        <BookCatalog books={books} />
        <hr className="section-divider" aria-hidden="true" />
        <ContactSection />
      </main>
      <hr className="section-divider" aria-hidden="true" />
      <SiteFooter />
    </div>
  );
}

export default App;
