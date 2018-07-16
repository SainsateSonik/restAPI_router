import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new-post">New Post</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;