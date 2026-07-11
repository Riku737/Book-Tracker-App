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
    const [status, setStatus] = useState(bookshelfStatus ?? "want_to_read");

    const allCount = useLiveQuery(() => db.books.count(), []);
    const wantToReadCount = useLiveQuery(() => db.books.where({ status: "want_to_read" }).count(), []);
    const readCount = useLiveQuery(() => db.books.where({ status: "read" }).count(), []);
    const readingCount = useLiveQuery(() => db.books.where({ status: "reading" }).count(), []);
    const dnfCount = useLiveQuery(() => db.books.where({ status: "dnf" }).count(), []);

    const totalBooks = {
        all: allCount,
        want_to_read: wantToReadCount,
        read: readCount,
        reading: readingCount,
        dnf: dnfCount
    };

    useEffect(() => {
        getBooksByStatus(status).then(setBooks);
    }, [status]);

    return (
        <>
            <h1 className="mb-4">My Bookshelf</h1>

            {/*Tabs*/}
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                {/* Want to Read */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => setStatus("want_to_read")}
                        className={`nav-link ${(bookshelfStatus === "tbr" || bookshelfStatus === undefined) && "active"}`}
                        id="tbr"
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
                        id="read"
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
                        id="reading"
                        data-bs-toggle="tab"
                        data-bs-target="#reading"
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
                        className={`nav-link ${bookshelfStatus === "dnf" && "active"}`}
                        id="dnf"
                        data-bs-toggle="tab"
                        data-bs-target="#dnf"
                        type="button"
                        role="tab"
                        aria-controls="dnf-tab-pane"
                        aria-selected="false"
                    >
                        Did Not Finish ({totalBooks.dnf ?? 0})
                    </button>
                </li>
            </ul>
            {/*Tab Panes*/}
            <div className="tab-content" id="myTabContent">
            {/*Want to Read*/}
                <div
                    className={`tab-pane fade ${(bookshelfStatus === "tbr" || bookshelfStatus === undefined) && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="want_to_read-tab"
                    tabIndex="0"
                >

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
                {/*Read*/}
                <div
                    className={`tab-pane fade ${bookshelfStatus === "read" && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="read-tab"
                    tabIndex="0"
                >

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
                {/*Currently Reading*/}
                <div
                    className={`tab-pane fade ${bookshelfStatus === "reading" && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="reading-tab"
                    tabIndex="0"
                >

                    <div className="row g-4">
                        {books.map((book) => (
                            <BookshelfBookCard book={book} key={book.id} />
                        ))}
                    </div>

                </div>
                {/*Did Not Finish*/}
                <div
                    className={`tab-pane fade ${bookshelfStatus === "dnf" && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="dnf-tab"
                    tabIndex="0"
                >

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

