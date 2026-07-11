import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {searchBooks} from "../services/api.js";
import HomeBookCard from "../components/books/HomeBookCard.jsx";

export default function Search() {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q'); // Access query parameter

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchResults = async () => {

            setLoading(true);

            try {
                const data = await searchBooks(query);
                setBooks(data);
            } catch (e) {
                console.error(e);
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