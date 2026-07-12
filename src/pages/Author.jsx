import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthor} from "../services/api.js";

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

                document.title = `${author.name} | BookBook`;

            } catch (e) { // If API call fails
                console.log(e);
                setError("Failed to load author.");
            } finally { // Block always runs
                setLoading(false);
            }
        }
        loadAuthor();
    }, [id]); // Empty dependency (run once)

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Failed to load author</h1>;
    if (!author) return <h1>No author found</h1>;

    return(
        <>
            <h1>{author.name}</h1>

            <div className="row">

            </div>

        </>
    );
}