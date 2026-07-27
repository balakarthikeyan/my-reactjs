import React from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="side-bar">
                <NavLink className="side-link" to="/sidebar/awards">Awards</NavLink>
                <NavLink className="side-link" to="/sidebar/promotions">Promotions</NavLink>
            </div>
        </>
    );
};

export default Sidebar;