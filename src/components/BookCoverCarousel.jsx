import "../css/book.css";

export default function BookCoverCarousel({book}) {
    return(
        <>
            <div className="bg-light ratio ratio-1x1 rounded">
                {(book.covers) ? (
                    <div id="carouselExample" className="carousel slide">

                        <div className="carousel-inner ratio d-flex justify-content-center">

                            {book.covers.map((cover, index) => (
                                <img
                                    key={index}
                                    src={`https://covers.openlibrary.org/b/id/${cover}-L.jpg`}
                                    alt={book.title}
                                    className={`carousel-item ${index === 0 ? "active" : ""} object-fit-contain p-4`}
                                />
                            ))}

                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                ): (
                    <div className="ratio d-flex justify-content-center">
                        <img
                            src="https://placehold.net/400x600.png"
                            alt={book.title}
                            className="object-fit-contain p-4"
                        />
                    </div>
                )}

            </div>
        </>
    )
}