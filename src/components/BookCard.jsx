function BookCard({book}) {

    // Extract book ID
    let book_id = book.key.split("/")[2];
    const book_link = `/books/${book_id}`;

    // Assign book cover, else default placeholder
    let cover_image;
    (book.cover_i) ? cover_image = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : cover_image = "https://placehold.net/400x600.png";

    return(
        <>
        <div className="col-lg-3 col-md-4 col-6">

            <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                {/*Book Cover*/}
                <a href={book_link} className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                    <img
                        src={cover_image}
                        className="object-fit-contain p-4"
                        alt={book.title}
                    />
                </a>

                {/*Book Title & Author*/}
                <div className="d-flex flex-column">
                    <h6 className="fw-medium m-0"><a href={book_link} className="text-body link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover">{book.title}</a></h6>
                    <p className="m-0 fs-6"><small>
                        {/*List authors with URLs*/}
                        {book.author_name.map((name, index) => (
                            <span key={index}>
                                <a
                                    href={`/authors/${book.author_key[index]}`}
                                    className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover">
                                    {name}
                                </a>
                                {index < book.author_name.length - 1 && ", "}
                            </span>
                        ))}
                    </small></p>
                </div>

            </div>

        </div>
        </>
    );

}

export default BookCard;