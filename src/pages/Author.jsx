import {useParams} from "react-router-dom";

function Author() {

    // Extract id from URL
    const {id} = useParams();
    
    return (
        <>
            <h1>{id}</h1>
        </>
    );
}

export default Author;