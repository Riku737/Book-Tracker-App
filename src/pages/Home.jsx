// React
import { useState, useEffect } from "react";

// API
import { getTrendingBooks } from "../utils/api";

// Components
import Loading from "../components/loading/LoadingBookCards.jsx";
import Card from "../components/books/cards/SearchBookCard.jsx";

export default function Home() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadTrendingBooks = async () => {
            setLoading(true);
            setError(null);
            try {
                const trendingBooks = await getTrendingBooks();
                setBooks(trendingBooks);
            } catch(error) {
                console.log(error);
                setError("Failed to load books.");
            } finally {
                setLoading(false);
            }
        }
        loadTrendingBooks();

    }, []);

    // Loading state
    if (loading) {
        return(
            <Loading title={"Trending Books (Weekly)"}/>
        );
    }

    // Error state
    if (error) {
        return(
            <h1>{error}</h1>
        );
    }

    // Standard state
    return (
        <section>
            <title>Home | BookBook</title>
            <h1 className="mb-4 fw-medium">Trending Books (Weekly)</h1>
            <section className="row g-4">
                {books.map(
                    (book) =>
                        (
                            <Card book={book} key={book.key} />
                        )
                )}
            </section>
        </section>
    );
}