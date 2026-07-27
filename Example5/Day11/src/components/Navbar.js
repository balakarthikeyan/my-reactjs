import React from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('isAuthenticated');
		setIsAuthenticated(false);
		navigate("/");
	};

	return (
		<div className="nav-bar">
			<NavLink className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"} to="/">
				Home
			</NavLink>
			<NavLink className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"} to="/about">
				About us
			</NavLink>
			{!isAuthenticated && (
				<NavLink className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"} to="/login">
					Login
				</NavLink>
			)}
			{isAuthenticated && (
				<Link to="#" onClick={logout}>
					Logout
				</Link>
			)}
		</div>
	);
};

export default Navbar;