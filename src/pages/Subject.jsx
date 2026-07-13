import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBooksBySubject} from "../services/api.js";
import SubjectBookCard from "../components/books/SubjectBookCard.jsx";
import LoadingBookCards from "../components/loading/LoadingBookCards.jsx";

export default function Subject() {

    const { subject } = useParams(); // Get subject from URL "/subjects/{subject}"

    const [books, setBooks] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                setLoading(true);
                setError(null);

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

    if (loading) {
        return(
            <LoadingBookCards title={subject} />
        );
    }

    if (error) {
        return(
            <>
                <h1>{error}</h1>
            </>
        );
    }

    return(
        <>
            <h1 className="mb-4">{subject}</h1>
            <div className="row g-4">
                {books.map((book, index) => (
                    <SubjectBookCard key={index} book={book} />
                ))}
            </div>
        </>
    );
}