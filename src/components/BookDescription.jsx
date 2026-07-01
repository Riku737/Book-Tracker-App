import {useState} from "react";

function BookDescription({ content }) {

    let description;
    let textLimit = false;
    const TEXTLENGTH = 300;
    const [open, setOpen] = useState(false);

    /*
    Description object of book can be either:
    1. Dictionary of two elements (type and value); or a
    2. Single string (only description data)
     */
    if (Object.keys(content).length === 2) {
        description = content.value;
    } else {
        description = content;
    }

    if (description.length > TEXTLENGTH) {
        textLimit = true;
    }

    function readMore() {
        setOpen(!open);
    }

    return(
        <>
            <p className="text-break" style={{"whiteSpace": "pre-line"}}>
                { !open && textLimit ? `${description.slice(0,TEXTLENGTH)}... ` : `${description} ` }
                { textLimit && <button onClick={readMore} type="button" className="btn btn-link p-0 align-baseline">{open ? "Read Less" : "Read More"}</button> }
            </p>
        </>
    );
}

export default BookDescription;