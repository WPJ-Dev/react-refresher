import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div className="row">
      {books && books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
}

export default BookList;
