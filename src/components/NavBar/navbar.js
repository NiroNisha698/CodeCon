import React, {Component} from 'react';
import Help from "../Help/help";
import './nav.css'
import health from '../Images/he.png'

class Navbar extends Component {
    render() {
        return (
            <div className='container'>

                <div className='arrange'>

                <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                    <a className="navbar-brand" href="#">BEAT THE EATERS |</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/lk">Sri Lanka <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/app'>Help the needy</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
