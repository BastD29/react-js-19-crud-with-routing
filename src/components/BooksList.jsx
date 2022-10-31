import { useContext } from "react";
import BooksContext from "../context/BooksContext";
import Book from "./Book";
import _ from "lodash";

export default function BooksList() {

  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <>
      {!_.isEmpty(books) ? (
        books.map((book) => (
          <Book
            key={book.id}
            {...book}
            handleRemoveBook={handleRemoveBook}
          />
        ))
      ) : (
        <p className="message">No books available. Please add some books.</p>
      )}
    </>
  )
}
