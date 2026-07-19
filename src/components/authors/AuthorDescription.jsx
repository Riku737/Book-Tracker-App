import ReactMarkdown from "react-markdown";

export default function AuthorDescription({authorBio}) {

    /*
    authorBio object is one of following:
    1. authorBio can be an object with keys "type" and "value" (bio);
    2. authorBio can simply store a string (bio); or
    3. No passed through authorBio => null.
     */
    let displayText;
    if (typeof authorBio === "object" && "value" in authorBio) {
       displayText = authorBio.value;
    } else if (typeof authorBio === "string" && authorBio.length > 0) {
       displayText = authorBio;
    } else {
       displayText = "No bio was found for this author.";
    }

    return(
        <>
            <ReactMarkdown>
                {displayText}
            </ReactMarkdown>
        </>
    );
}