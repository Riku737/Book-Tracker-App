import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthorName, getBook } from "../utils/api.js";

// Components
import Description from "../components/books/details/BookDescription.jsx";
import CoverCarousel from "../components/books/covers/BookCoverCarousel.jsx";
import Cover from "../components/books/covers/BookCover.jsx";
import Loading from "../components/loading/LoadingBook.jsx";
import DropdownBtn from "../components/books/details/BookDropdown.jsx";
import Authors from "../components/books/details/BookAuthors.jsx";

export default function Book() {

    const { id } = useParams(); // Extract book ID

    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadBook = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getBook(id);
                data["authors"] = await getAuthorName(data.authors); // Retrieve and add author names manually because book API doesn't show the names (only shows author IDs)
                setBook(data);
                document.title = `${data.title} | BookBook`; // Dynamic page title
            } catch (e) {
                console.error(e);
                setError("Failed to load book.");
            } finally {
                setLoading(false);
            }
        }
        loadBook();

    }, [id]);

    // Loading state
    if (loading) {
        return(
            <Loading/>
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
            <div className="row g-5">

                {/*Book Cover & Carousel*/}
                <section className="col-md-6">
                    {(book.covers?.length === 1) ? (
                        // Single Cover
                        <Cover book={book}/>
                    ) : (
                        // 1+ Covers and Undefined
                        <CoverCarousel book={book} />
                    )}
                </section>

                {/*Book Metadata*/}
                <section className="col-md-6 d-flex flex-column row-gap-3">

                    {/*Title*/}
                    <div>
                        <h1>{book.title}</h1>
                        <p>
                            <Authors names={book.authors?.map(a => a.name)} ids={book.authors?.map(a => a.key)} />
                        </p>
                    </div>

                    <DropdownBtn book={book} />
                    <Description content={book.description} />

                </section>

            </div>
        </section>
    );
}