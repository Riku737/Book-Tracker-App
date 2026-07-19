import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthor} from "../services/api.js";

// Components
import Loading from "../components/loading/LoadingAuthor.jsx";
import AuthorDescription from "../components/authors/AuthorDescription.jsx";

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
        </section>
    );
}