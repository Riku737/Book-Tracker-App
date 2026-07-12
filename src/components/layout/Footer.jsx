import {Link} from "react-router-dom";

function Footer() {

    return(
        <>
            <footer className="bg-light py-5">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-3 col-6">
                            <h6>BookBook</h6>
                            <p>A clean, simple catalog where you can organize every book in your reading life. It's your
                                bookshelf.</p>
                        </div>

                        <div className="col-lg-3 col-6">
                            <h6>Discover</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/subjects">Subjects</Link></li>
                                <li><Link to="/search">Search</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-6">
                            <h6>My Bookshelf</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link to="/bookshelf/want_to_read">Want to Read</Link></li>
                                <li><Link to="/bookshelf/reading">Currently Reading</Link></li>
                                <li><Link to="/bookshelf/read">Read</Link></li>
                                <li><Link to="/bookshelf/dnf">Did Not Finish</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-6">
                            <h6>Subject</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link to="/subjects/Arts">Arts</Link></li>
                                <li><Link to="/subjects/STEM">STEM</Link></li>
                                <li><Link to="/subjects/Business">Business</Link></li>
                                <li><Link to="/subjects/History">History</Link></li>
                            </ul>
                        </div>

                    </div>

                    <hr/>

                    <p>This website is a personal, non-commercial project. All book information and cover images are sourced from the <a href="https://openlibrary.org/" target="_blank">Open Library API</a>, and all trademarks belong to their respective owners.</p>
                    <p>This site stores data locally in your browser using IndexedDB. No information is shared or uploaded.</p>

                </div>
            </footer>
        </>
    );

}

export default Footer;