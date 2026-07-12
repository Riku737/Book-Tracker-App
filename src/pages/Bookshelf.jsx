import BookshelfBookCard from "../components/books/BookshelfBookCard.jsx";
import { db } from "../db/database.js";
import { useLiveQuery } from "dexie-react-hooks";
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";

export default function Bookshelf() {

    /*
    Definitions:
    - want_to_read => To be Read (Want to Read)
    - read => Read
    - reading => Currently Reading
    - dnf => Did not Finish
    - undefined => Show bookshelf without specified tab
    */

    const { bookshelfStatus } = useParams(); // Get status from URL
    const navigate = useNavigate();
    const currentStatus = bookshelfStatus ?? "want_to_read";

    const books = useLiveQuery(
        () => db.books.where({ status: currentStatus }).toArray(),
        [currentStatus]
    ) ?? [];

    const allBooks = useLiveQuery(() => db.books.toArray(), []) ?? [];

    const totalBooks = {
        want_to_read: allBooks.filter(b => b.status === "want_to_read").length ?? 0,
        read: allBooks.filter(b => b.status === "read").length ?? 0,
        reading: allBooks.filter(b => b.status === "reading").length ?? 0,
        dnf: allBooks.filter(b => b.status === "dnf").length ?? 0,
    };

    function handleTabClick(newStatus) {
        navigate(`/bookshelf/${newStatus}`);
    }

    useEffect(() => {
        const statusMap = {
            want_to_read: "Want to Read",
            reading: "Currently Reading",
            read: "Read",
            dnf: "Did Not Finish"
        }

        document.title = `${statusMap[currentStatus]} | BookBook` // Page title
    }, [currentStatus]);

    return (
        <>
            <h1 className="mb-4">My Bookshelf</h1>

            {/*Tabs*/}
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                {/* Want to Read */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => handleTabClick("want_to_read")}
                        className={`nav-link ${(bookshelfStatus === "want_to_read" || bookshelfStatus === undefined) && "active"}`}
                        id="want_to_read"
                        type="button"
                        role="tab"
                        aria-controls="want_to_read-tab-pane"
                        aria-selected="true"
                    >
                        Want to Read ({totalBooks.want_to_read})
                    </button>
                </li>
                {/* Currently Reading */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => handleTabClick("reading")}
                        className={`nav-link ${bookshelfStatus === "reading" && "active"}`}
                        id="reading"
                        type="button"
                        role="tab"
                        aria-controls="reading-tab-pane"
                        aria-selected="false"
                    >
                        Currently Reading ({totalBooks.reading})
                    </button>
                </li>
                {/* Read */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => handleTabClick("read")}
                        className={`nav-link ${bookshelfStatus === "read" && "active"}`}
                        id="read"
                        type="button"
                        role="tab"
                        aria-controls="read-tab-pane"
                        aria-selected="false"
                    >
                        Read ({totalBooks.read})
                    </button>
                </li>
                {/* Did Not Finish */}
                <li className="nav-item" role="presentation">
                    <button
                        onClick={() => handleTabClick("dnf")}
                        className={`nav-link ${bookshelfStatus === "dnf" && "active"}`}
                        id="dnf"
                        type="button"
                        role="tab"
                        aria-controls="dnf-tab-pane"
                        aria-selected="false"
                    >
                        Did Not Finish ({totalBooks.dnf})
                    </button>
                </li>
            </ul>
            {/*Tab Panes*/}
            <div className="tab-content" id="myTabContent">
            {/*Want to Read*/}
                <div
                    className={`tab-pane fade ${(bookshelfStatus === "want_to_read" || bookshelfStatus === undefined) && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="want_to_read-tab"
                    tabIndex="0"
                >

                    <div className="row g-4">
                        {books.map((book, index) => (
                            <BookshelfBookCard book={book} key={index} />
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
                        {books.map((book, index) => (
                            <BookshelfBookCard book={book} key={index} />
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
                        {books.map((book, index) => (
                            <BookshelfBookCard book={book} key={index} />
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
                        {books.map((book, index) => (
                            <BookshelfBookCard book={book} key={index} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

