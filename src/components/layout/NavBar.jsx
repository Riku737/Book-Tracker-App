import { Link } from "react-router-dom"

function NavBar() {

    return(
        <>
            <nav className="navbar navbar-expand-lg border-bottom">

                <div className="container container-fluid">

                    <Link to="/" className="navbar-brand">BookBook</Link>

                    {/*Mobile menu button*/}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        <div className="d-lg-flex justify-content-between align-items-center w-100 position-relative">

                            {/*Left*/}
                            <ul className="navbar-nav">

                                {/*Trending*/}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Trending
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="" className="dropdown-item">Action</Link></li>
                                        <li><Link to="" className="dropdown-item">Another action</Link></li>
                                        <li><Link to="" className="dropdown-item">Something else here</Link></li>
                                    </ul>
                                </li>

                                {/*Subject*/}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Subject
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="" className="dropdown-item">Action</Link></li>
                                        <li><Link to="" className="dropdown-item">Another action</Link></li>
                                        <li><Link to="" className="dropdown-item">Something else here</Link></li>
                                    </ul>
                                </li>

                                {/*Search (mobile)*/}
                                <li className="nav-item d-lg-none d-flex">
                                    <Link to="/search" className="nav-link">Search</Link>
                                </li>

                            </ul>

                            {/*Center (web search)*/}
                            <form
                                className="input-group position-absolute top-50 start-50 translate-middle w-25 d-none d-lg-flex"
                                role="search"
                            >
                                {/*Search button*/}
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    id="button-search"
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                                {/*Search field*/}
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by title or author"
                                    aria-label="Search"
                                    aria-describedby="button-search-field"
                                />
                            </form>

                            {/*Right*/}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/bookshelf" className="nav-link">My Bookshelf</Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </nav>
        </>
    )

}

export default NavBar;