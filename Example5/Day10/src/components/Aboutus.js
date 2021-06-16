import React from 'react';
import Sidebar from './sidebar/Sidebar';
export default function Aboutus (props) {
    return ( 
        <>
            <div className="left width-3-4 no-gap">
                <h3>About us</h3>
            </div>
            <div className="right width-1-4 no-gap">
                <Sidebar />
            </div>
        </>
        );
}
