import HomeBookCard from "../components/books/SearchBookCard.jsx";

import { getTrendingBooks } from "../services/api";

import { useState, useEffect } from "react";

export default function Home() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadTrendingBooks = async () => {
            try {
                const trendingBooks = await getTrendingBooks();
                setBooks(trendingBooks);
                // console.log(trendingBooks);
            } catch(error) {
                console.log(error);
                setError("Failed to load books from Open Library");
            } finally {
                setLoading(false);
            }
        }

        loadTrendingBooks();
    }, []);

    return (
        <>
            {/*Page title*/}
            <title>Home | BookBook</title>

            <section>
                <h1 className="mb-4">Home</h1>
            </section>

            {error && <p>{error}</p>}

            {loading ? (
                <p>Loading books...</p>
            ) : (
                <div className="row g-4">
                    {books.map(
                        (book) => 
                            (
                                <HomeBookCard book={book} key={book.key} />
                            )
                    )}
                </div>
            )}

        </>
    );
}