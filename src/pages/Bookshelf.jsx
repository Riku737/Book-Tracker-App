import {getBooksByStatus} from "../db/database.js";
import { useState, useEffect } from "react";
import BookshelfBookCard from "../components/books/BookshelfBookCard.jsx";

export default function Bookshelf() {

    const [books, setBooks] = useState([]);
    const [status, setStatus] = useState("want_to_read");

    useEffect(() => {
        getBooksByStatus(status).then(setBooks);
    }, [status]);

    return(
        <>
            <h1 className="mb-4">My Bookshelf</h1>

            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button onClick={ () => setStatus("want_to_read") } className="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                            aria-selected="true">Want to Read
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={ () => setStatus("reading") } className="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                            aria-selected="false">Read
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={ () => setStatus("read") } className="nav-link" id="contact-tab" data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane"
                            aria-selected="false">Reading
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={ () => setStatus("dnf") } className="nav-link" id="contact-tab" data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane"
                            aria-selected="false">Did Not Finish
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="want_to_read-tab"
                     tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id}/>
                        ))}
                    </div>

                </div>
                <div className="tab-pane fade" role="tabpanel" aria-labelledby="read-tab"
                     tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id}/>
                        ))}
                    </div>

                </div>
                <div className="tab-pane fade" role="tabpanel" aria-labelledby="reading-tab"
                     tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id}/>
                        ))}
                    </div>

                </div>
                <div className="tab-pane fade" role="tabpanel" aria-labelledby="dnf-tab"
                     tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id}/>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

