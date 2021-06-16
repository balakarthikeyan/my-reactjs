import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    return ( 
        <div className="nav-bar">
                <NavLink className="nav-link" activeClassName="highlight" to="/">Home</NavLink>
                {props.isAuthenticated ? null : <NavLink className="nav-link" activeClassName="highlight" to="/login">Login</NavLink> }
                <NavLink className="nav-link" activeClassName="highlight" to="/about">About us</NavLink>
        </div>
        );
}

export default Navbar