import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import EditBook from "./components/EditBook";
import useLocalStorage from "./hooks/useLocalStorage";
import BooksContext from "./context/BooksContext";
import Header from "./components/Header";

export default function App() {

  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <Header />
      <BooksContext.Provider value={{ books, setBooks }}>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </BooksContext.Provider>
    </BrowserRouter>
  )
}
