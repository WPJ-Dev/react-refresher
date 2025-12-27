import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";
import BookDetail from "./components/BookDetail";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, isLoading, setSearchTerm } = useBooks("fiction");

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  function handleSeeMore(book) {
    console.log(book.volumeInfo);
    setSelectedBook(book.volumeInfo);
  }

  function handleCloseModal() {
    setSelectedBook(null);
  }

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {isLoading ? (
        <p
          class="placeholder-glow display-3 text-body-secondary"
          aria-hidden="true"
        >
          <span class="placeholder col-6"></span>
        </p>
      ) : (
        <BookList books={books} onSeeMore={handleSeeMore} />
      )}

      {selectedBook && <p>{selectedBook.title}</p>}
      <Footer />
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
