// React & router
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";

// Databases
import { db } from "../db/database.js";
import { useLiveQuery } from "dexie-react-hooks";

// Components
import Card from "../components/books/cards/BookshelfBookCard.jsx";

export default function Bookshelf() {

    /*
    Definitions:
    - want_to_read => To be Read (Want to Read)
    - read => Read
    - reading => Currently Reading
    - dnf => Did not Finish
    - undefined => Show bookshelf without specified tab
    */

    const { status } = useParams(); // Get status from URL
    const navigate = useNavigate(); // Navigate between routes
    const currentStatus = status ?? "want_to_read"; // Set current status, else default to "Want to Read"

    // Fetch all the books from the user's DB
    const allBooks = useLiveQuery(() => db.books.toArray(), []) ?? [];

    // Fetch all books from bookshelf by status
    const books = allBooks.filter((book) => book.status === currentStatus);

    // Fetch the count of each list (basically, filter books by status and return array size)
    const totalBooks = {
        want_to_read: allBooks.filter(book => book.status === "want_to_read").length ?? 0,
        read: allBooks.filter(book => book.status === "read").length ?? 0,
        reading: allBooks.filter(book => book.status === "reading").length ?? 0,
        dnf: allBooks.filter(book => book.status === "dnf").length ?? 0,
        all: allBooks.length ?? 0
    };

    // Update URL to appropriate status
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
        document.title = `${statusMap[currentStatus]} | BookBook` // Dynamic page title
    }, [currentStatus]);

    return (
        <section>
            <h1 className="mb-4">My Bookshelf ({totalBooks.all})</h1>

            {/*Tab Buttons*/}
            <section>
                <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">

                    {/* Want to Read */}
                    <li className="nav-item" role="presentation">
                        <button
                            onClick={() => handleTabClick("want_to_read")}
                            className={`nav-link ${(status === "want_to_read" || status === undefined) && "active"}`}
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
                            className={`nav-link ${status === "reading" && "active"}`}
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
                            className={`nav-link ${status === "read" && "active"}`}
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
                            className={`nav-link ${status === "dnf" && "active"}`}
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
            </section>

            {/*Tab Panes*/}
            <section className="tab-content" id="myTabContent">

                {/*Want to Read*/}
                <section
                    className={`tab-pane fade ${(status === "want_to_read" || status === undefined) && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="want_to_read-tab"
                    tabIndex="0"
                >
                    <div className="row g-4">
                        {books.map((book, index) => (
                            <Card book={book} key={index} />
                        ))}
                    </div>
                </section>

                {/*Currently Reading*/}
                <section
                    className={`tab-pane fade ${status === "reading" && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="reading-tab"
                    tabIndex="0"
                >
                    <div className="row g-4">
                        {books.map((book, index) => (
                            <Card book={book} key={index} />
                        ))}
                    </div>
                </section>

                {/*Read*/}
                <section
                    className={`tab-pane fade ${status === "read" && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="read-tab"
                    tabIndex="0"
                >
                    <div className="row g-4">
                        {books.map((book, index) => (
                            <Card book={book} key={index} />
                        ))}
                    </div>
                </section>

                {/*Did Not Finish*/}
                <section
                    className={`tab-pane fade ${status === "dnf" && "show active"}`}
                    role="tabpanel"
                    aria-labelledby="dnf-tab"
                    tabIndex="0"
                >
                    <div className="row g-4">
                        {books.map((book, index) => (
                            <Card book={book} key={index} />
                        ))}
                    </div>
                </section>

            </section>
        </section>
    );
}

