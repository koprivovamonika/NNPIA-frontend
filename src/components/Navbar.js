import './style.css'
import { HashLink as Link } from 'react-router-hash-link';

function Navbar({loggedIn}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">BeautySalon</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {loggedIn === false
                    ?
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#procedures">Procedures</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservation">Reservation</Link>
                        </li>
                    </ul>
                    : <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/main">Procedures</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/choose">Reservations</Link>
                        </li>
                    </ul>
                }
            </div>

            {loggedIn ?
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item"><Link className="nav-link" to="/edit">Edit</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                </ul>
                :<ul className="nav navbar-nav navbar-right">
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                </ul>
            }


        </nav>
    )
}
export default Navbar;