import Authors from "../details/BookAuthors.jsx";

export default function BookCard({bookID, bookTitle, authorNames, authorIDs, coverID}) {


    return(
        <div className="col-lg-3 col-md-4 col-6">

            <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                {/*Book Cover*/}
                <a href={`/books/${bookID}`} className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded">
                    <img
                        src={coverID ? (`https://covers.openlibrary.org/b/id/${coverID}-M.jpg`) : (`https://placehold.co/400x600?text=No+Cover`)}
                        className="object-fit-contain p-4"
                        alt={bookTitle}
                    />
                </a>

                {/*Book Info*/}
                <div className="d-flex flex-column">

                    {/*Book Title*/}
                    <h6 className="m-0"><a className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover" href={`/books/${bookID}`}>{bookTitle}</a></h6>

                    {/*Authors*/}
                    <p className="m-0 fs-6 lh-sm">
                        <small>
                            <Authors names={authorNames} ids={authorIDs} />
                        </small>
                    </p>

                </div>

            </div>

        </div>
    );
}