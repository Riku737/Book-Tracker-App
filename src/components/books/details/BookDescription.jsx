import {useState} from "react";
import ReactMarkdown from 'react-markdown';

function BookDescription({ content }) {

    const TEXTLENGTH = 300;
    const [open, setOpen] = useState(false);

    /*
    Description object of book can be either:
    1. Dictionary of two elements (type and value); or a
    2. Single string (only description data)
     */
    let description;
    if (!content) {
        description = "No description available.";
    } else if (Object.keys(content).length === 2) {
        description = content.value;
    } else {
        description = content;
    }

    // Decisionmaker on whether "read more" is necessary
    let textLimit = description.length > TEXTLENGTH;

    // Controller for "read more" text
    function readMoreButton() {
        setOpen(!open);
    }

    // Output for description displayed on webpage
    let displayedText;
    if (!open && textLimit) {
        displayedText = description.slice(0,TEXTLENGTH) + "...";
    } else {
        displayedText = description;
    }

    return(
        <>
            <div className="d-flex flex-column">
                <ReactMarkdown>{displayedText}</ReactMarkdown>
                { textLimit && <button onClick={readMoreButton} type="button" className="btn btn-link p-0 text-start">{open ? "Read Less" : "Read More"}</button> }
            </div>
        </>
    );
}

export default BookDescription;