function Footer() {

    return(
        <>
        <div className="bg-light py-5">
            <div className="container">
                <div className="row">

                    <div className="col-3">
                        <h6>BookBook</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed iaculis elit. Donec bibendum in elit in mollis.</p>
                    </div>

                    <div className="col-3">
                        <h6>Bookshelf</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Want to Read</li>
                            <li>Currently Reading</li>
                            <li>Read</li>
                            <li>Did Not Finish</li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h6>Help</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h6>About</h6>
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