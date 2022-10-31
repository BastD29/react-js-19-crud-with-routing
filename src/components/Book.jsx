import { useNavigate } from "react-router-dom";

export default function Book({
    id,
    bookname,
    author,
    price,
    quantity,
    date,
    handleRemoveBook
}) {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <div>Bookname: {bookname}</div>
                <div>Author: {author}</div>
                <div>Quantity: {quantity} </div>
                <div>Price: {price} </div>
                <div>Date: {new Date(date).toDateString()}</div>
            </div>
            <button
                onClick={() => navigate(`/edit/${id}`)}
            >
                Edit
            </button>
            <button
                onClick={() => handleRemoveBook(id)}
            >
                Delete
            </button>
        </>
    )
}
