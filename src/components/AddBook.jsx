import { useContext } from 'react'
import BooksContext from '../context/BooksContext'
import BookForm from './BookForm'
import { useNavigate } from "react-router-dom";

export default function AddBook() {

  const { books, setBooks } = useContext(BooksContext);

  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate("/");
  }

  return (
    <>
      <BookForm
        handleOnSubmit={handleOnSubmit}
      />
    </>
  )
}
