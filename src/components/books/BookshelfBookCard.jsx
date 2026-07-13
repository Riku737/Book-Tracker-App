export default function BookshelfBookCard({book}) {

    // Extract book ID
    let book_id = book.bookKey.split("/")[2];
    const book_link = `/books/${book_id}`;

    return(
        <>
            <div className="col-lg-3 col-md-4 col-6">

                <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                    {/*Book Cover*/}
                    <a className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded link-underline link-underline-opacity-0 link-underline-opacity-100-hover" href={book_link}>
                        <img
                            src={book.bookCovers ? (`https://covers.openlibrary.org/b/id/${book.bookCovers[0]}-M.jpg`) : (`https://placehold.co/400x600?text=No+Cover`)}
                            onError={(e) => {
                                e.target.src = "https://placehold.co/400x600?text=No+Cover";
                            }}
                            className="object-fit-contain p-4"
                            alt={book.title}
                        />
                    </a>

                    {/*Book Title & Author*/}
                    <div className="d-flex flex-column">
                        <h6 className="fw-medium m-0"><a href={book_link}>{book.title}</a></h6>
                        <p className="m-0 fs-6 lh-sm"><small>
                            {/*List authors with URLs*/}
                            {/*Robust approach to handle edge cases (null/undefine)*/}
                            {(book?.authors || []).map((author, index) => (
                                <span key={index}>
                                <a
                                    href={`${author.key}`}>
                                    {author.name}
                                </a>
                                    {index < book.authors.length - 1 && ", "}
                            </span>
                            ))}
                        </small></p>
                        <p className="lh-sm">
                            <small>
                                Added {book.date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })}
                            </small>
                        </p>
                    </div>

                </div>

            </div>
        </>
    );

}