import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
	return (
		<div className="nav-bar">
			<NavLink className={({ isActive }) => isActive ? "highlight nav-link" : "nav-link"} to="/">Home</NavLink>
			<NavLink className={({ isActive }) => isActive ? "highlight nav-link" : "nav-link"} to="/login">Login</NavLink>
			<NavLink className={({ isActive }) => isActive ? "highlight nav-link" : "nav-link"} to="/about">About us</NavLink>
			<NavLink className={({ isActive }) => isActive ? "highlight nav-link" : "nav-link"} to="/user/bala">User</NavLink>
		</div>
	);
}

export default Navbar