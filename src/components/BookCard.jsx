function BookCard({book}) {

    const cover_image = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    const book_link = `https://openlibrary.org${book.key}`;
    const author_link = `https://openlibrary.org/authors/${book.author_key}`;
    const authors = book.author_name.join(", ");

    return(
        <>
        <div className="col-lg-3 col-md-4 col-6">

            <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                <a href={book_link} className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                    <img
                        src={cover_image}
                        className="object-fit-contain p-4"
                        alt={book.title}
                    />
                </a>

                <div className="d-flex flex-column">
                    <h6 className="fw-medium m-0"><a href={book_link} className="text-body link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover">{book.title}</a></h6>
                    <p className="m-0 fs-6"><small><a href={author_link} className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover">{authors}</a></small></p>
                </div>

            </div>

        </div>
        </>
    );

}

export default BookCard;