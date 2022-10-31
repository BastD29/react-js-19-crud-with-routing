import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <h1>Book Management App</h1>
        <hr />
        <div className="links">
            <NavLink to="/" className="link" >
                Books List
            </NavLink>
            <NavLink to="/add" className="link" >
                Add Book
            </NavLink>
        </div>
    </header>
  )
}
