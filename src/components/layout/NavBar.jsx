import { Link } from "react-router-dom"
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../../db/database.js";
import SearchBar from "./SearchBar.jsx";

function NavBar() {

    const totalBookshelf = useLiveQuery(
        () => db.books.count(),
        []
    );

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

                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>

                                {/*Subject*/}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Subject
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/subjects/Arts" className="dropdown-item">Arts</Link></li>
                                        <li><Link to="/subjects/Animals" className="dropdown-item">Animals</Link></li>
                                        <li><Link to="/subjects/STEM" className="dropdown-item">STEM</Link></li>
                                        <li><Link to="/subjects/Business" className="dropdown-item">Business</Link></li>
                                        <li><Link to="/subjects/History" className="dropdown-item">History</Link></li>
                                        <li><Link to="/subjects/Health" className="dropdown-item">Health</Link></li>
                                        <li><Link to="/subjects/Biography" className="dropdown-item">Biography</Link></li>
                                        <li><Link to="/subjects/Social%20Sciences" className="dropdown-item">Social Sciences</Link></li>
                                    </ul>
                                </li>

                                {/*Search (mobile)*/}
                                <li className="nav-item d-lg-none d-flex">
                                    <Link to="/search" className="nav-link">Search</Link>
                                </li>

                            </ul>

                            {/*Right*/}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/bookshelf" className="nav-link">
                                        My Bookshelf ({totalBookshelf ?? 0})
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                    {/*Center (web search)*/}
                    <SearchBar/>

                </div>

            </nav>
        </>
    )

}

export default NavBar;