import { useState, useEffect } from "react";
import BookshelfBookCard from "../components/books/BookshelfBookCard.jsx";
import { db, getBooksByStatus } from "../db/database.js";
import { useLiveQuery } from "dexie-react-hooks";
import { useParams } from 'react-router-dom';

export default function Bookshelf() {


    const { bookshelfStatus } = useParams();
    const validStatus = new Set(["tbr", "read", "reading", "dnf", undefined]);
    /*
    Definitions:
    - tbr => To be Read (Want to Read)
    - read => Read
    - reading => Currently Reading
    - dnf => Did not Finish
    - undefined => Show bookshelf without specified tab
    */

    if (!validStatus.has(bookshelfStatus)) {
        return (
            <>
                <h1>Invalid route parameter</h1>
            </>
        );
    }

    const [books, setBooks] = useState([]);
    const [status, setStatus] = useState("want_to_read");

    const totalBooks = {
        "all": useLiveQuery(() => db.books.count(), []),
        "want_to_read": useLiveQuery(() => db.books.where({ status: 'want_to_read' }).count(), []),
        "read": useLiveQuery(() => db.books.where({ status: 'read' }).count(), []),
        "reading": useLiveQuery(() => db.books.where({ status: 'reading' }).count(), []),
        "dnf": useLiveQuery(() => db.books.where({ status: 'dnf' }).count(), [])
    }

    useEffect(() => {
        getBooksByStatus(status).then(setBooks);
    }, [status]);

    return (
        <>
            <h2>Status: {bookshelfStatus}</h2>
            <h1 className="mb-4">My Bookshelf</h1>

            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                {/* Want to Read */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => setStatus("want_to_read")}
                        className={`nav-link ${bookshelfStatus === "tbr" && "active"}`}
                        id="want_to_read-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#want_to_read-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="want_to_read-tab-pane"
                        aria-selected="true"
                    >
                        Want to Read ({totalBooks.want_to_read ?? 0})
                    </button>
                </li>
                {/* Currently Reading */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => setStatus("read")}
                        className={`nav-link ${bookshelfStatus === "read" && "active"}`}
                        id="read-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#read-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="read-tab-pane"
                        aria-selected="false"
                    >
                        Read ({totalBooks.read ?? 0})
                    </button>
                </li>
                {/* Read */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => setStatus("reading")}
                        className={`nav-link ${bookshelfStatus === "reading" && "active"}`}
                        id="reading-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reading-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="reading-tab-pane"
                        aria-selected="false"
                    >
                        Currently Reading ({totalBooks.reading ?? 0})
                    </button>
                </li>
                {/* Did Not Finish */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => setStatus("dnf")}
                        className={`nav-link ${bookshelfStatus === "reading" && "active"}`}
                        id="dnf-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#dnf-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="dnf-tab-pane"
                        aria-selected="false"
                    >
                        Did Not Finish ({totalBooks.dnf ?? 0})
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="want_to_read-tab"
                    tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
                <div className="tab-pane fade" role="tabpanel" aria-labelledby="read-tab"
                    tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
                <div className="tab-pane fade" role="tabpanel" aria-labelledby="reading-tab"
                    tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
                <div className="tab-pane fade" role="tabpanel" aria-labelledby="dnf-tab"
                    tabIndex="0">

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

