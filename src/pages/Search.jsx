// React & router
import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from "react";

// API
import {searchBooks} from "../utils/api.js";

// Components
import Card from "../components/books/cards/SearchBookCard.jsx";
import Loading from "../components/loading/LoadingBookCards.jsx";

export default function Search() {

    const [searchParams] = useSearchParams(); // Get query parameters from URL
    const query = searchParams.get('q'); // Access query parameter (localhost/search?q={query})

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await searchBooks(query);
                setBooks(data);
            } catch (e) {
                console.log(e);
                setError("Failed to search books.");
            } finally {
                setLoading(false);
            }
        }
        fetchResults();

        document.title = `${query ?? "Search"} | BookBook`; // Dynamic page title

    }, [query]);

    // Loading state
    if (loading) {
        return(
            <Loading title={query} />
        )
    }

    // Error state
    if (error) {
        return(
            <h1>{error}</h1>
        )
    }

    // Standard state
    return(
        <section>
            <h1 className="mb-4">{query ?? "Search by title or author"}</h1>
            <p className="d-sm-none mb-4">Sorry, search is currently unavailable on smaller screens.</p>
            <section className="row g-4">
                {books.map((book, index) => (
                    <Card book={book} key={index} />
                ))}
            </section>
        </section>
    );
}