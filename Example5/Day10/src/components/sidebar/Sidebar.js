import React from 'react';
import { Link } from "react-router-dom"

import SidebarContent from './SidebarContent';

const Sidebar = (props) => {
    return (
        <>
           <div className="border"><SidebarContent /></div> 
            <div className="side-bar">
                    <Link className="side-link" to="/sidebar/awards">Awards</Link>
                    <Link className="side-link" to="/sidebar/promotions">Promotions</Link>
            </div>
        </>
        );
}

export default Sidebar