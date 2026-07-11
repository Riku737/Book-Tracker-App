import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {searchBooks} from "../services/api.js";
import HomeBookCard from "../components/books/HomeBookCard.jsx";

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

    }, [query]);

    // console.log(searchParams);

    return(
        <>
            <h1 className="mb-4">{query ?? "All"}</h1>

            {error && <p>{error}</p>}

            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="row g-4">
                    {books.map((book, index) => (
                        <HomeBookCard book={book} key={index} />
                    ))}
                </section>
            )}
        </>
    );
}