export default function PlaceholderBookCard() {
    return(
        <>
            <div className="col-lg-3 col-md-4 col-6">

                <div className="d-flex gap-2 d-flex flex-column">

                    {/*Book Cover*/}
                    <div className="bg-light ratio ratio-1x1 rounded"></div>

                    {/*Book Title & Author*/}
                    <div className="d-flex flex-column placeholder-glow">
                        <h6 className="fw-medium m-0 mb-1 placeholder w-75"></h6>
                        <p className="m-0 fs-6 lh-sm placeholder w-100"></p>
                    </div>

                </div>

            </div>
        </>
    );
}