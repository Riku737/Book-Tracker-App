import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthor} from "../services/api.js";
import BookDescription from "../components/books/BookDescription.jsx";
import LoadingAuthor from "../components/loading/LoadingAuthor.jsx";

export default function Author() {

    // Extract :id parameter from route
    const { id } = useParams();

    // const [state, setState] = useState(initialValue);
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAuthor = async () => {
            try { // Attempt to run the API call

                setLoading(true);
                setError(null);

                const data = await getAuthor(id);
                // data["books"] = await getAuthorBooks(id);
                setAuthor(data);

                document.title = `${data.name} | BookBook`; // Dynamic page title

            } catch (e) { // If API call fails
                console.log(e);
                setError("Failed to load author.");
            } finally { // Block always runs
                setLoading(false);
            }
        }
        loadAuthor();
    }, [id]); // Run whenever id updates

    if (loading) {
        return(
            <LoadingAuthor/>
        );
    }

    if (error) {
        return(
            <h1>Failed to load author</h1>
        );
    }

    console.log(author);

    return(
        <>
            <h1>{author.name}</h1>
            <p>{"bio" in author ? author.bio.value : "No Bio Found."}</p>
        </>
    );
}