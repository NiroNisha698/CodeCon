import React, {Component} from 'react';
import Help from "../Help/help";
import './nav.css'
import health from '../Images/he.png'

class Navbar extends Component {
    render() {
        return (
            <div className='container'>


                    <ul>
                        <li><a className="active" href='/'>Home</a></li>
                        <li><a href="/">Sri Lanka</a></li>
                        <li><a href="/pay">Donation</a></li>
                        <li><a href="/login">Sign In</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>

                </div>

        );
    }
}

export default Navbar;
