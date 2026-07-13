import HomeBookCard from "../components/books/SearchBookCard.jsx";

import { getTrendingBooks } from "../services/api";

import { useState, useEffect } from "react";
import LoadingBookCards from "../components/loading/LoadingBookCards.jsx";

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


    if (loading) {
        return(
            <LoadingBookCards title={"Home"}/>
        );
    }

    if (error) {
        return(
            <h1>{error}</h1>
        );
    }

    return (
        <>
            <title>Home | BookBook</title>
            <section>
                <h1 className="mb-4">Home</h1>
            </section>
            <section className="row g-4">
                {books.map(
                    (book) =>
                        (
                            <HomeBookCard book={book} key={book.key} />
                        )
                )}
            </section>
        </>
    );
}