import React from "react";
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <Link to="/" className="brand-logo">MySite</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/todo">Todo</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    );

}


export default Navbar