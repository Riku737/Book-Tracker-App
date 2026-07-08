export default function HomeBookCard({book}) {

    console.log(book);

    // Extract book ID
    let book_id = book.bookKey.split("/")[2];
    const book_link = `/books/${book_id}`;

    let cover_image;
    if (book.bookCovers) {
        cover_image = `https://covers.openlibrary.org/b/id/${book.bookCovers[0]}-M.jpg`;
    } else {
        cover_image = "https://placehold.net/400x600.png";
    }

    return(
        <>
            <div className="col-lg-3 col-md-4 col-6">

                <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                    {/*Book Cover*/}
                    <a className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                        <img
                            src={cover_image}
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
                    </div>

                </div>

            </div>
        </>
    );

}