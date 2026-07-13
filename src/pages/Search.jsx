import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {searchBooks} from "../services/api.js";
import HomeBookCard from "../components/books/SearchBookCard.jsx";
import LoadingBookCards from "../components/loading/LoadingBookCards.jsx";

export default function Search() {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q'); // Access query parameter

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchResults = async () => {

            setLoading(true);

            try {
                const data = await searchBooks(query);
                setBooks(data);
                setError(null);
            } catch (e) {
                console.log(e);
                setError("Failed to search books...");
            } finally {
                setLoading(false);
            }

        }
        fetchResults();

        document.title = `${query ?? "Search"} | BookBook`; // Dynamic page title

    }, [query]);

    // console.log(searchParams);

    if (loading) {
        return(
            <LoadingBookCards title={query} />
        )
    }

    if (error) {
        return(
            <h1>{error}</h1>
        )
    }

    return(
        <>
            <h1 className="mb-4">{query ?? "Search by title or author"}</h1>
            <section className="row g-4">
                {books.map((book, index) => (
                    <HomeBookCard book={book} key={index} />
                ))}
            </section>
        </>
    );
}