
export default function LoadingBook() {
    return(
        <>
            <div className="row g-5">

                <div className="col-md-6">
                    <div className="ratio bg-light ratio-1x1 rounded"></div>
                </div>

                <div className="placeholder-glow col-md-6 d-flex flex-column row-gap-3">

                    <div className="placeholder-glow">
                        <h1 className="placeholder w-100"></h1>
                        <p className="placeholder w-50"></p>
                    </div>

                    <a className="btn btn-primary disabled placeholder col-3" aria-disabled="true"></a>

                    <p className="placeholder w-100 h-25"></p>

                </div>
            </div>
        </>
    );
}