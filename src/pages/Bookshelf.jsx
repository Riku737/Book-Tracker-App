import { db } from "../db/database.js";
import {useEffect, useState} from "react";
import BookshelfBookCard from "../components/BookshelfBookCard.jsx";

export default function Bookshelf() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        db.books.toArray().then(setBooks);
    }, []);

    return(
        <>
            <h1>Bookshelf</h1>

            <div className="row g-4">
                {books.map((book) => (
                    <BookshelfBookCard book={book} key={book.id}/>
                ))}
            </div>
        </>
    );
}

