import { Link } from "react-router-dom"

function NavBar() {

    return(
        <>
        <nav className="navbar navbar-expand-lg border-bottom">
            
            <div className="container container-fluid">
                
                <a className="navbar-brand h1">Navbar</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/authors/2323">James</Link>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
        </>
    )

}

export default NavBar;