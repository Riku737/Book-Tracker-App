import {Link} from "react-router-dom";

function Footer() {

    return(
        <>
        <div className="bg-light py-5">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-6">
                        <h6>BookBook</h6>
                        <p>A clean, simple catalog where you can organize every book in your reading life. It's your bookshelf.</p>
                    </div>

                    <div className="col-lg-3 col-6">
                        <h6>Bookshelf</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link to="/bookshelf/want_to_read">Want to Read</Link></li>
                            <li><Link to="/bookshelf/reading">Currently Reading</Link></li>
                            <li><Link to="/bookshelf/read">Read</Link></li>
                            <li><Link to="/bookshelf/dnf">Did Not Finish</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-6">
                        <h6>Trending</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-6">
                        <h6>Subject</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        </>
    );

}

export default Footer;