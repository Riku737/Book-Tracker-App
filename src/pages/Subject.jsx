// React & router
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

// API utils
import {getBooksBySubject} from "../utils/api.js";

// Components
import Card from "../components/books/cards/SubjectBookCard.jsx";
import Loading from "../components/loading/LoadingBookCards.jsx";

export default function Subject() {

    const { subject } = useParams(); // Get subject from URL "/subjects/{subject}"

    const [books, setBooks] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadBooks = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getBooksBySubject(subject);
                setBooks(data);
                document.title = `${subject} | BookBook`; // Dynamic page title
                if (data.length === 0) {
                    setError("No books found for subject.");
                }
            } catch (e) {
                console.log(e);
                setError("Failed to load books from subject.");
            } finally {
                setLoading(false);
            }
        }
        loadBooks();

    }, [subject]) // Render whenever subject updates

    // Loading state
    if (loading) {
        return(
            <Loading title={subject} />
        );
    }

    // Error state
    if (error) {
        return(
            <>
                <h1>{error}</h1>
            </>
        );
    }

    // Standard state
    return(
        <section>
            <h1 className="mb-4">{subject}</h1>
            <section className="row g-4">
                {books.map((book, index) => (
                    <Card key={index} book={book} />
                ))}
            </section>
        </section>
    );
}