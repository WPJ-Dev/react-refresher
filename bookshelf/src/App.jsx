import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import fetchBooks from "./services/api-client";

function App() {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript/
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("CSS");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const items = await fetchBooks(searchTerm);
      setBooks(items);
      // console.log(booksJson.items);
      setIsLoading(false);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Failed to fetch books:", error);
      }
    } finally {
      setIsLoading(false);
    }
    // const res = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}/`
    // );
    // const booksJson = await res.json();
  };

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
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
        <BookList books={books} />
      )}
      <Footer />
    </>
  );
}

export default App;
