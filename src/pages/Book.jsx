import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBook} from "../services/api.js";

function Book() {

    const { id } = useParams(); // Extract book ID

    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadBook = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getBook(id);
                setBook(data);
            } catch (e) {
                console.log(e);
                setError("Failed to load book.");
            } finally {
                setLoading(false);
            }
        }
        loadBook();
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Failed to load book</h1>;
    if (!book) return <h1>No book found</h1>;

    return (
        <>
            <h1>{ book.title }</h1>
        </>
    );
}

export default Book;