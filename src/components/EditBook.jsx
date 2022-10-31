import BooksContext from '../context/BooksContext';
import BookForm from './BookForm';
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from 'react';

export default function EditBook() {

  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate("/");
  }

  return (
    <div>
      <BookForm
        book={bookToEdit}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  )
}
