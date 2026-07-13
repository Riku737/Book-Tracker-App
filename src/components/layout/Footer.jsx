import {Link} from "react-router-dom";

function Footer() {

    return(
        <footer className="bg-light py-5">
            <div className="container">

                <div className="row">

                    {/*Far Left*/}
                    <div className="col-lg-3 col-6">
                        <h6>BookBook</h6>
                        <p>A simple app that lets you search for books and track what you want to read, are reading, have read, or did not finish.</p>
                    </div>

                    {/*Center Left*/}
                    <div className="col-lg-3 col-6">
                        <h6>Discover</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link to="/home" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Home</Link></li>
                            <li><Link to="/search" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Search</Link></li>
                        </ul>
                    </div>

                    {/*Center Right*/}
                    <div className="col-lg-3 col-6">
                        <h6>Bookshelf</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link to="/bookshelf/want_to_read" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Want to Read</Link></li>
                            <li><Link to="/bookshelf/reading" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Currently Reading</Link></li>
                            <li><Link to="/bookshelf/read" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Read</Link></li>
                            <li><Link to="/bookshelf/dnf" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Did Not Finish</Link></li>
                        </ul>
                    </div>

                    {/*Far Right*/}
                    <div className="col-lg-3 col-6">
                        <h6>Subjects</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link to="/subjects/Arts" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Arts</Link></li>
                            <li><Link to="/subjects/STEM" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">STEM</Link></li>
                            <li><Link to="/subjects/Business" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Business</Link></li>
                            <li><Link to="/subjects/History" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">History</Link></li>
                        </ul>
                    </div>

                </div>

                <hr/>

                {/*Website notice/disclaimer*/}
                <small>
                    <p>This app is a personal, non‑commercial project built solely for learning and portfolio purposes. It is not affiliated with or endorsed by any orgniazation, and it is not intended for real users or practical use. The project exists only as a way to experiment, practice, and develop new skills.</p>
                    <p>All book information and cover images are sourced from the <a href="https://openlibrary.org/" target="_blank">Open Library API</a>, and all trademarks belong to their respective owners.</p>
                    <p>This site stores data locally in your browser using IndexedDB. No information is shared or uploaded.</p>
                </small>

            </div>
        </footer>
    );

}

export default Footer;