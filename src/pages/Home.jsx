import HomeBookCard from "../components/books/HomeBookCard.jsx";

import { searchBooks, getTrendingBooks } from "../services/api";

import { useState, useEffect } from "react";

export default function Home() {

    // React Hook
    // Initial value equals "" (empty string)
    // searchQuery is the current value
    // setSearchQuery updates it
    const [searchQuery, setSearchQuery] = useState("");

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

    // Search
    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return

        if (loading) return
        
        setLoading(true);

        try {
            const searchResults = await searchBooks(searchQuery);
            setBooks(searchResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed to search books...");
        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            <section>
                <h1 className="mb-4">Home</h1>
            </section>

            <form onSubmit={handleSearch} className="input-group mb-5">
                <button
                    className="btn btn-primary"
                    type="submit"
                    id="button-addon1"
                >
                    <i className="bi bi-search"></i>
                </button>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>

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