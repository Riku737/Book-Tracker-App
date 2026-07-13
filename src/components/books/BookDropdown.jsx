import {addToBookshelf, isInBookshelf, removeBook} from "../../db/database.js";
import {useEffect, useState} from "react";

function BookDropdown({ book }) {

    const [inBookshelf, setInBookshelf] = useState(false);

    useEffect(() => {
        isInBookshelf(book.key).then(setInBookshelf);
    }, [book.key]);

    async function addToBookshelfButton(status) {
        try {
            await addToBookshelf(status, book.title, book.key, book.authors, book.covers, new Date());
            setInBookshelf(true);
        } catch (error) {
            console.error('Error adding book to bookshelf', error);
        }
    }

    return (
        <>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Add to Bookshelf
                </button>
                <ul className="dropdown-menu">
                    <li><button onClick={() => addToBookshelfButton("want_to_read")} type="button" className="dropdown-item">Want to Read</button></li>
                    <li><button onClick={() => addToBookshelfButton("reading")} type="button" className="dropdown-item">Currently Reading</button></li>
                    <li><button onClick={() => addToBookshelfButton("read")} type="button" className="dropdown-item">Read</button></li>
                    <li><button onClick={() => addToBookshelfButton("dnf")} type="button" className="dropdown-item">Did Not Finish</button></li>
                    <li className={`${ !inBookshelf && "d-none"}`}><hr className="dropdown-divider" /></li>
                    <li
                        onClick={() => {
                            removeBook(book.key).then(() => {
                                setInBookshelf(false);
                            });
                        }}
                        className={`${ !inBookshelf && "d-none"}`}
                    >
                        <button type="button" className="dropdown-item">
                            Remove From Bookshelf
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default BookDropdown;