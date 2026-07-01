import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthorName, getBook} from "../services/api.js";
import Description from "../components/BookDescription.jsx";

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

                // Retrieve author names manually because book API doesn't show the names (only shows author IDs)
                data["authors"] = await getAuthorName(data.authors);
                setBook(data);
                console.log(data);

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

    let cover_image;
    (book.covers) ? cover_image = `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : cover_image = "https://placehold.net/400x600.png";

    return (
        <>
            <div className="row g-5">
                <div className="col-6">
                    <div className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded">
                        <img
                            src={cover_image}
                            className="object-fit-contain p-4"
                            alt={book.title}
                        />
                    </div>
                </div>

                <div className="col-6 d-flex flex-column row-gap-3">

                    <div>
                        <h1>{book.title}</h1>
                        <p>
                            {book.authors.map((author, index) => (
                                <span key={index}>
                                    <a
                                        href={`${author.key}`}>
                                        {author.name}
                                    </a>
                                    {index < book.authors.length - 1 && ", "}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="input-group w-100">
                        <button type="button" className="btn btn-primary flex-grow-1">Want to Read</button>
                        <button type="button"
                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Currently Reading</a></li>
                            <li><a className="dropdown-item" href="#">Read</a></li>
                            <li><a className="dropdown-item" href="#">Did Not Finish</a></li>
                        </ul>
                    </div>

                    <Description content={book.description}/>

                </div>
            </div>
            {/*<hr className="hr my-4"/>*/}
            {/*<div>*/}
            {/*    <h2>Overview</h2>*/}
            {/*    {book.subjects.map((subject, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            {subject}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    );
}

export default Book;