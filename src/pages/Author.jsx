import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthor, getAuthorBooks,  getAuthorNames} from "../utils/api.js";

// Components
import Loading from "../components/loading/LoadingAuthor.jsx";
import AuthorDescription from "../components/authors/AuthorDescription.jsx";
import Card from "../components/books/cards/SearchBookCard.jsx";

export default function Author() {

    // Extract :id parameter from route
    const { id } = useParams();

    // const [state, setState] = useState(initialValue);
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAuthor = async () => {
            setLoading(true);
            setError(null);
            try { // Attempt to run the API call
                const data = await getAuthor(id);
                data["works"] = await getAuthorBooks(id);

                // Each book by author only shows the ID of each author and not exact names
                const authorIDs = data["works"].map(b => b.authors.map(a => a.author.key.replace("/authors/", "")));
                const authorNames = await getAuthorNames(authorIDs);
                data["works"].forEach((book, i) => {
                    book["author_name"] = authorNames[i].map(e => e.name);
                    book["author_key"] = authorNames[i].map(e => e.key);
                    book["cover_i"] = book?.covers?.[0];
                });

                setAuthor(data);
                document.title = `${data.name} | BookBook`; // Dynamic page title
                // console.log(data);
            } catch (e) { // If API call fails
                console.log(e);
                setError("Failed to load author.");
            } finally { // Block always runs
                setLoading(false);
            }
        }
        loadAuthor();
    }, [id]); // Run whenever id updates

    // Loading State
    if (loading) {
        return(
            <Loading/>
        );
    }

    // Error State
    if (error) {
        return(
            <h1>{error}</h1>
        );
    }

    // Standard state
    return(
        <section>
            {/*Author name*/}
            <h1 className="mb-3">{author.name}</h1>
            {/*Author biography*/}
            <AuthorDescription authorBio={author.bio} />
            <div className="row g-4 mt-4">
                {author.works.map((work, index) => (
                    <Card
                        key={index}
                        book={work}
                    />
                ))}
            </div>
        </section>
    );
}