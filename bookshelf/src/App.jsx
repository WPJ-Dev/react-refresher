import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";

function App() {
  const { books, isLoading, setSearchTerm } = useBooks("fiction");

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
