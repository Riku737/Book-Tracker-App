import { addToBookshelf } from "../../db/database.js";

function BookDropdown({ book }) {

    function addToBookshelfButton(status) {
        const handleAdd = async () => {
            try {
                await addToBookshelf(status, book.title, book.key, book.authors, book.covers);
            } catch (error) {
                console.error('Error adding book to bookshelf', error);
            }
        }
        handleAdd();
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
                    <li><hr className="dropdown-divider" /></li>
                    <li><button type="button" className="dropdown-item">Remove From Bookshelf</button></li>
                </ul>
            </div>
        </>
    );
}

export default BookDropdown;