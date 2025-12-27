import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

function useBooks(initialQuery) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBooksData(query) {
      setIsLoading(true);
      try {
        const items = await fetchBooks(query);
        setBooks(items);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch books: ", error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (searchTerm) {
      fetchBooksData(searchTerm);
    }
  }, [searchTerm]);

  return { books, isLoading, setSearchTerm };
}

export default useBooks;
